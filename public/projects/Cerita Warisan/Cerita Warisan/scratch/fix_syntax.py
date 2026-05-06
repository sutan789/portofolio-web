import re

filepath = r'd:\pustakadigital\scratch\fill_stories.py'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find and fix the broken triple-quote ending for Mamanua dan Lumimuut
# The problem is the last line has """" (4 quotes) instead of """
fixed = content.replace(
    '"Kami masih di sini," kata gunung itu setiap kali mengepul. "Kami masih menjaga kalian.""""\n    },',
    '"Kami masih di sini," kata gunung itu setiap kali mengepul. "Kami masih menjaga kalian."""\n    },'
)

if fixed != content:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed)
    print("Fixed successfully!")
else:
    # Try a different approach - find the line
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'Kami masih menjaga kalian' in line:
            print(f"Line {i+1}: {repr(line)}")
