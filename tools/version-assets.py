"""Refresh content-versioned asset URLs before uploading the static portfolio."""
from pathlib import Path
import hashlib
import re

root = Path(__file__).resolve().parent.parent

def version(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()[:12]

# The light stylesheet is loaded dynamically; update it before hashing theme.js.
theme = root / 'theme.js'
source = theme.read_text(encoding='utf-8')
source = re.sub(r"lightSheet\.href = 'princess\.css(?:\?v=[a-f0-9]+)?'",
                "lightSheet.href = 'princess.css?v=" + version(root / 'princess.css') + "'", source)
theme.write_text(source, encoding='utf-8')

assets = {path.name: version(path) for path in root.iterdir()
          if path.is_file() and path.suffix in ('.css', '.js')}
pattern = re.compile(r'((?:src|href)=")(\w[\w.-]*\.(?:css|js))(?:\?v=[a-f0-9]+)?(")')
for page in root.glob('*.html'):
    markup = page.read_text(encoding='utf-8')
    markup = pattern.sub(lambda m: m[1] + m[2] + '?v=' + assets[m[2]] + m[3]
                         if m[2] in assets else m[0], markup)
    page.write_text(markup, encoding='utf-8')
print(f'Versioned {len(assets)} local assets across all HTML pages.')
