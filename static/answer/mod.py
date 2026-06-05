import csv
import json
import re
import os

def parse_choice_id(key):
    # big5: 1E, 2A, 3C, 4N, 5I, ...
    m_big5 = re.match(r'^(\d+)([ICEAN])$', key)
    if m_big5:
        return ('big5', int(m_big5.group(1)), m_big5.group(2))
    # SDS: SDS1, SDS2, ...
    m_sds = re.match(r'^SDS(\d+)$', key)
    if m_sds:
        return ('SDS', int(m_sds.group(1)))
    # shortdark3: sd3m1, sd3n2, sd3p3, ...
    m_sd3 = re.match(r'^sd3([mnp])(\d+)$', key)
    if m_sd3:
        letter_order = {'m': 0, 'n': 1, 'p': 2}
        return ('shortdark3', letter_order[m_sd3.group(1)], int(m_sd3.group(2)))
    return None

def sort_choice_keys(keys):
    big5, sds, sd3 = [], [], []
    for k in keys:
        info = parse_choice_id(k)
        if not info:
            continue
        if info[0] == 'big5':
            big5.append((info[1], k))
        elif info[0] == 'SDS':
            sds.append((info[1], k))
        elif info[0] == 'shortdark3':
            sd3.append((info[1], info[2], k))
    big5_sorted = [k for _, k in sorted(big5)]
    sds_sorted = [k for _, k in sorted(sds)]
    sd3_sorted = [k for _, _, k in sorted(sd3)]
    return big5_sorted + sds_sorted + sd3_sorted

def clean_csv_to_json(csv_path, json_path):
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        choice_data = {}
        answer_data = []
        for row in reader:
            trial_type = row['trial_type']
            response = row['response']
            if trial_type == 'survey-multi-choice':
                resp_dict = json.loads(response)
                choice_data.update(resp_dict)
            elif trial_type == 'survey-text':
                resp_dict = json.loads(response)
                for k, v in resp_dict.items():
                    answer_data.append({'id': k, 'answer': v})

    sorted_keys = sort_choice_keys(choice_data.keys())
    choices = {k: choice_data[k] for k in sorted_keys}

    result = {
        'choices': choices,
        'answers': answer_data
    }
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    for filename in os.listdir('.'):
        if filename.endswith('.csv'):
            json_filename = filename.replace('.csv', '_cleaned.json')
            clean_csv_to_json(filename, json_filename)