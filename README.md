# Trueline Roof Care — marketing system capstone

**Live landing page → <https://trueline-roof-care.vercel.app>**

A complete small-business acquisition system built end to end: brand and offer, landing
page, booking calendar, CRM pipeline, an Instagram carousel, and a Meta ad set — all
pulling copy, palette and voice from one source of truth.

> Trueline Roof Care is a **demo business**, not a real company. The lead data is
> synthetic (`@example.com` addresses, sequential placeholder numbers) and the PCAB licence
> number in `brief.md` is invented and labelled as such.

---

## The business, briefly

A Santa Rosa, Laguna roofing company that diagnoses and repairs pre-painted long-span GI
roofs and refuses to sell re-roofs it doesn't believe in. The promise: *the truth about
your roof, in writing, itemized, within 24 hours — even when the truth costs us the job.*

Most roofs condemned in the area have years left in them. They come off because
re-roofing is where the money is, not because the roof is finished. Everything in this
repo is built to make that argument checkable rather than claimed.

---

## What's here

| File | What it is |
|---|---|
| `brief.md` | Source of truth — identity, offer, segments, design system, never-use list, price list, links |
| `plan.md` | Pipeline stages, page promise, email triage, automation sketches |
| `leads.md` · `leads-import.csv` | 15 synthetic leads across three segments, and the CRM import file |
| `landing-page.md` | 11-section build sheet for the page |
| `site/` | The deployed landing page — hand-written HTML/CSS, no framework |
| `carousel/` | Instagram carousel: source, render pipeline, and three rendered ratios |
| `carousel/carousel.md` | Carousel build sheet — slide copy, visual system, caption |
| `facebook-ad.md` | Meta ad copy pack, card map, and an Ads Manager walkthrough |
| `PROGRESS.md` | Running state and what's left |

---

## The carousel render pipeline

The nine carousel slides are **HTML and CSS, screenshotted by headless Chrome** — not an
image model. For a typography-led brand that publishes exact peso figures, that matters:
text renders as text, `#C4622D` is `#C4622D` on every slide, and a copy fix is a one-line
edit rather than a re-roll.

Each of the six symptom slides carries a hand-drawn SVG cross-section naming the actual
part — tekscrew, EPDM washer, purlin, ridge roll, side lap, canal. No stock photography
stands in for a fault it isn't showing.

```bash
python carousel/build-fonts.py     # once — inlines Fraunces + Inter as base64
python carousel/render.py          # 4:5   1080x1350 -> carousel/out/        feed
python carousel/render.py --square # 1:1   1080x1080 -> carousel/out-square/ carousel ad cards
python carousel/render.py --story  # 9:16  1080x1920 -> carousel/out-story/  Stories + Reels
```

All three ratios come from the **same HTML**. `carousel/slides/slides.css` switches layout
on viewport-height media queries, so the sets can't drift — fix a typo once, re-render
three times.

Two details worth knowing if you fork this:

- Fonts are embedded as base64 including the **`latin-ext`** subset. That subset carries
  the peso sign (U+20B1); drop it and every price falls back to a system font mid-string.
- The 9:16 renders pad type into the middle band because Meta covers roughly the top 14%
  and bottom 20% of a story with its own UI. Photography bleeds past it; type never does.

---

## Deploying the site

```bash
vercel deploy --prod --yes
```

`vercel.json` sets `outputDirectory` to `site`, so the deploy serves that folder from the
repo root.

---

Built for the ARCA Week 3 capstone.
