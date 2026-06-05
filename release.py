import re
import shutil

src = "exp.js"
dst = "exp_release.js"
shutil.copyfile(src, dst)

def to_jspsych_plugin(name):
    # 处理下划线和中划线，首字母大写，前缀jsPsych
    parts = re.split(r'[_\-]', name)
    camel = ''.join([p[:1].upper() + p[1:] if p else '' for p in parts])
    return f"jsPsych{camel}"

# 匹配 type: xxx, 允许有空格、大小写、注释
pattern = r'(type\s*:\s*)([a-zA-Z0-9_\-]+)(\s*,)'

def repl(match):
    prefix = match.group(1)
    plugin = match.group(2)
    suffix = match.group(3)
    return f"{prefix}{to_jspsych_plugin(plugin)}{suffix}"

with open(dst, "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(pattern, repl, content)

with open(dst, "w", encoding="utf-8") as f:
    f.write(content)

print("备份并转换完成，输出文件为 exp_release.js")