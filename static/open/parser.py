import csv
import json
import os

MACHIV = "machIV_clean.csv"
NPI = "npi_clean.csv"
SRP = "srp_clean.csv"

def parse_csv_to_dict(csv_path):
    result = {}
    prefix = os.path.splitext(os.path.basename(csv_path))[0].lower()  # e.g., machiv
    with open(csv_path, newline='', encoding='latin1') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            subtrait = row['subtrait'].strip().lower().replace(" ", "_")
            item_num = row['itemID'].strip()
            broad_specific = row['broad/specific'].strip().lower()  # 'broad' or 'specific'
            item_id = f"{prefix}_{subtrait}_{item_num}"
            # 按subtrait分组
            if subtrait not in result:
                result[subtrait] = {}
            if item_id not in result[subtrait]:
                result[subtrait][item_id] = {
                    'subtrait': row['subtrait'],
                    'item': row['item'],
                    'broad': {},
                    'specific': {}
                }
            id_full = f"{item_id}_{broad_specific}"
            result[subtrait][item_id][
                broad_specific
            ] = {
                'prompt_question': row['prompt_question'],
                'id': id_full
            }
    return result

if __name__ == "__main__":
    for csv_file in [MACHIV, NPI, SRP]:
        print(f"Processing: {csv_file}")
        data_dict = parse_csv_to_dict(csv_file)
        json_file = csv_file.replace('.csv', '.json')
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(data_dict, f, ensure_ascii=False, indent=2)
        print(f"Saved to {json_file}")