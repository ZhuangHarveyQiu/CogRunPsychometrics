
BINARY_TEMP = '''{{prompt: "{question}",name: "{qid}",options: ["True", "False"],required: true,horizontal: true}},'''  # MCSDS, EPQR

MB5_TEMP = '''{{prompt: "{question}",name: "{qid}",options: ["Very inaccurate","Moderately inaccurate","Neither inaccurate nor accurate","Moderately accurate","Very accurate"],required: true,horizontal: true}},'''  # MB5

SD3_TEMP = '''{{prompt: "{question}",name: "{qid}",options: ["Disagree strongly","Disagree","Neither agree nor disagree","Agree","Agree strongly"],required: true,horizontal: true}},'''  # SD3

MCSDS = "MCSDS.txt"
EPQR = "EysenckPersonalityQuestionnaireR.txt"

MB5 = "MiniBig5.txt"

SD3 = "TheShortDark3.txt"


import re

def mcsds():
    items = []
    with open(MCSDS, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            # 跳过空行和说明行
            if not line or not re.match(r"^SDS\d+\.", line):
                continue
            # 提取qid和题干
            m = re.match(r"^(SDS\d+)\.\s*(.*?)(?:\s*\([TF]\))?$", line)
            if m:
                qid = m.group(1)
                question = m.group(2).strip()
                items.append(BINARY_TEMP.format(qid=qid, question=question))
    return items

def epqr():
    items = []
    with open(EPQR, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            # 跳过空行和说明行
            if not line or not re.match(r"^\d+epqr\.", line):
                continue
            # 提取qid和题干
            m = re.match(r"^(\d+epqr)\.\s*(.*)", line)
            if m:
                qid = m.group(1)
                question = m.group(2).strip()
                items.append(BINARY_TEMP.format(qid=qid, question=question))
    return items

def mb5():
    items = []
    with open(MB5, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            # 跳过空行和非题目行
            if not line or not re.match(r"^\d+[EACNI]\s", line):
                continue
            # 提取qid和题干，去掉(R)
            m = re.match(r"^(\d+[EACNI])\s+(.*?)(?:\s*\(R\))?$", line)
            if m:
                qid = m.group(1)
                question = m.group(2).strip()
                items.append(MB5_TEMP.format(qid=qid, question=question))
    return items

def sd3():
    items = []
    subscale = None
    idx = {"m": 1, "n": 1, "p": 1}
    with open(SD3, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            # 跳过空行和官方说明
            if not line or line.lower().startswith("please indicate") or line.lower().startswith("instructions:"):
                continue
            # 判断分量表
            if line.lower().startswith("machiavellianism"):
                subscale = "m"
                continue
            if line.lower().startswith("narcissism"):
                subscale = "n"
                continue
            if line.lower().startswith("psychopathy"):
                subscale = "p"
                continue
            # 跳过Note等说明
            if line.lower().startswith("note"):
                continue
            # 处理题目
            if subscale and re.match(r"^\d+\.", line):
                m = re.match(r"^(\d+)\.\s*(.*?)(?:\s*\(R\))?$", line)
                if m:
                    qid = f"sd3{subscale}{idx[subscale]}"
                    question = m.group(2).strip()
                    items.append(SD3_TEMP.format(qid=qid, question=question))
                    idx[subscale] += 1
    return items

import random
from collections import deque

def random_combine():
    mcsds_items = mcsds()
    epqr_items = epqr()
    mb5_items = mb5()

    # sd3三类交叉合并
    sd3_items = sd3()
    m_items, n_items, p_items = [], [], []
    for item in sd3_items:
        if 'sd3m' in item:
            m_items.append(item)
        elif 'sd3n' in item:
            n_items.append(item)
        elif 'sd3p' in item:
            p_items.append(item)
    sd3_mixed = []
    max_len = max(len(m_items), len(n_items), len(p_items))
    for i in range(max_len):
        if i < len(m_items):
            sd3_mixed.append(m_items[i])
        if i < len(n_items):
            sd3_mixed.append(n_items[i])
        if i < len(p_items):
            sd3_mixed.append(p_items[i])

    # 构造队列
    pools = [
        deque(mcsds_items),
        deque(epqr_items),
        deque(mb5_items),
        deque(sd3_mixed)
    ]
    total = sum(len(pool) for pool in pools)
    combined = []
    while len(combined) < total:
        # 随机选一个非空池
        non_empty = [pool for pool in pools if pool]
        pool = random.choice(non_empty)
        combined.append(pool.popleft())
    return combined

# 用法示例
if __name__ == "__main__":
    items = random_combine()
    for item in items:
        print(item)
