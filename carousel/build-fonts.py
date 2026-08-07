"""Download Fraunces + Inter (latin) from Google Fonts and inline them as
base64 @font-face rules, so the slides render identically with no network."""
import base64, pathlib, re, urllib.request

OUT = pathlib.Path(__file__).parent / "slides" / "fonts.css"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " \
     "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

FAMILIES = [
    "Fraunces:opsz,wght@9..144,600;9..144,700",
    "Inter:wght@400;500;600;700",
]


def fetch(url):
    return urllib.request.urlopen(
        urllib.request.Request(url, headers={"User-Agent": UA})
    ).read()


blocks = []
for fam in FAMILIES:
    css = fetch(f"https://fonts.googleapis.com/css2?family={fam}&display=swap").decode()
    # latin covers the copy; latin-ext carries the peso sign (U+20B1), which is on
    # nearly every slide. Dropping latin-ext makes every price fall back mid-string.
    for block in re.findall(r"/\*\s*latin(?:-ext)?\s*\*/\s*@font-face\s*\{[^}]+\}", css):
        url = re.search(r"url\((https://[^)]+\.woff2)\)", block).group(1)
        data = base64.b64encode(fetch(url)).decode()
        block = block.replace(url, f"data:font/woff2;base64,{data}")
        blocks.append(re.sub(r"^/\*.*?\*/\s*", "", block, flags=re.S))
        print(f"  embedded {fam.split(':')[0]:10s} {len(data) // 1024:5d} KB")

OUT.write_text("\n".join(blocks), encoding="utf-8")
print(f"\nwrote {OUT}  ({OUT.stat().st_size // 1024} KB, {len(blocks)} faces)")
