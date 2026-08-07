"""Render slides/slide-*.html to PNG via headless Chrome.

    python render.py                # 4:5  1080x1350 -> out/         (Instagram organic, feed ads)
    python render.py --square       # 1:1  1080x1080 -> out-square/   (Meta carousel cards)
    python render.py --story        # 9:16 1080x1920 -> out-story/    (Stories + Reels)
    python render.py 1 4            # only slide-01 and slide-04
    python render.py --story 2 3    # combine

All three variants are the same HTML: slides.css switches layout on
viewport-height media queries, which the Chrome window size triggers.
"""
import pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).parent
CHROME = pathlib.Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")

if "--square" in sys.argv:
    (W, H), OUT = (1080, 1080), ROOT / "out-square"
elif "--story" in sys.argv:
    (W, H), OUT = (1080, 1920), ROOT / "out-story"
else:
    (W, H), OUT = (1080, 1350), ROOT / "out"

only = {f"{int(a):02d}" for a in sys.argv[1:] if not a.startswith("-")}
slides = sorted(p for p in (ROOT / "slides").glob("slide-*.html")
                if not only or p.stem.split("-")[1] in only)

if not CHROME.exists():
    sys.exit(f"Chrome not found at {CHROME}")

OUT.mkdir(exist_ok=True)
fail = 0
for html in slides:
    png = OUT / f"{html.stem}.png"
    png.unlink(missing_ok=True)
    subprocess.run([
        str(CHROME), "--headless=new", "--disable-gpu", "--no-sandbox",
        "--hide-scrollbars", "--force-device-scale-factor=1",
        f"--window-size={W},{H}",
        "--virtual-time-budget=8000",          # let webfonts + images settle
        f"--screenshot={png}",
        html.resolve().as_uri(),
    ], capture_output=True)
    if png.exists():
        print(f"  ok   {png.name}  {png.stat().st_size // 1024:4d} KB")
    else:
        print(f"  FAIL {png.name}")
        fail += 1

print(f"\n{len(slides) - fail}/{len(slides)} rendered at {W}x{H} -> {OUT}")
sys.exit(1 if fail else 0)
