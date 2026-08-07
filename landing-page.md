# landing-page.md — ClickFunnels build sheet

> Section-by-section spec for the Trueline landing page. Copy is final — paste it, don't rewrite it.
> Everything pulls from [brief.md](./brief.md). All CTAs point to the calendar link below.

**CTA link (every button, every card link):**
`https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi`

---

## 0. Global settings — do these FIRST, before building sections

**Fonts** (ClickFunnels → Settings/Theme → Fonts → add Google Fonts):
- Headings: **Fraunces** — 700 for H1/H2, 600 for H3
- Body & buttons: **Inter** — 400 body, 500 emphasis, 600 buttons/labels

**Colour palette** (add all eight to the theme palette so you're never typing hex twice):

| Name | Hex |
|---|---|
| Slate | `#16232E` |
| Storm | `#2C4356` |
| Chalk | `#F6F4EF` |
| Copper | `#C4622D` |
| Copper Light | `#E0975E` |
| Moss | `#3E6B57` |
| Line | `#DCD7CC` |
| Ink Muted | `#5C6B75` |

**Type scale**

| Element | Desktop | Mobile | Font | Notes |
|---|---|---|---|---|
| H1 | 56px | 34px | Fraunces 700 | line-height 1.05, letter-spacing −0.02em |
| H2 | 40px | 28px | Fraunces 700 | line-height 1.15 |
| H3 / card title | 22px | 20px | Fraunces 600 | |
| Body | 18px | 17px | Inter 400 | line-height 1.7, colour Storm `#2C4356` |
| Eyebrow / label | 13px | 12px | Inter 600 | UPPERCASE, letter-spacing 0.1em, colour Copper |
| Button | 17px | 17px | Inter 600 | |

**Button style** (build once, then duplicate):
background `#C4622D` · text `#F6F4EF` · padding 18px top/bottom, 36px left/right ·
border-radius 4px · **no drop shadow** · hover background `#E0975E`

**Layout**: content max-width 1080px · section padding 88px vertical desktop / 56px mobile ·
page background `#F6F4EF`

**Images to source** (Unsplash / Pexels search terms — pick warm, grainy, low-angle):
`corrugated metal roof` · `metal roof sheets stack` · `roofer hands metal panel` ·
`rusty galvanized roof screws` · `roof purlins construction` · `apartment rooftops`
Avoid: smiling families, handshakes, drone shots with lens flare, anything glossy.

---

## Section 1 — Announcement bar

Background `#16232E` · text `#F6F4EF` · 14px Inter 500 · padding 12px · centered

```
Laguna only — Santa Rosa · Biñan · Cabuyao · Calamba · San Pedro · Los Baños · Sta. Cruz
```

---

## Section 2 — Hero

Background `#F6F4EF` · two columns, 55% copy / 45% image · image: low-angle metal roof against sky

**Eyebrow** (Copper):
```
TRUELINE ROOF CARE — SANTA ROSA, LAGUNA
```

**H1** (Slate):
```
You were quoted ₱380,000. Let's find out if you needed to be.
```

**Body** (Storm, 19px):
```
A free 18-point roof inspection and an itemized written quotation in your inbox within 24 hours — so you know what's actually wrong, what it actually costs, and whether you need a repair, a care plan, or nothing at all. Inspection normally ₱1,500.
```

**Button** → calendar link:
```
Book a free roof check
```

**Text link under the button** (Copper, 16px, → jump to Section 7):
```
Building new? Send your plans instead →
```

**Trust strip** — four items, 13px Inter 600 uppercase, letter-spacing 0.08em, colour Ink Muted,
separated by a thin `#DCD7CC` rule above:
```
7 OF 10 ROOFS REPAIRED, NOT REPLACED   ·   340+ LAGUNA ROOFS SINCE 2019   ·   WRITTEN QUOTE IN 24 HOURS   ·   PCAB-LICENSED & DTI-REGISTERED
```

---

## Section 3 — The problem  *(the dark band)*

Background `#16232E` · text `#F6F4EF` · body text at 90% opacity

**H2**:
```
Here's how it usually goes.
```

**Three columns**, each with a Copper number (Fraunces 700, 40px), an H3, and two lines of body:

**01 — Someone knocks**
```
The rain stops and a crew you've never seen offers a free inspection. Ten minutes on your roof, plates from three provinces over.
```

**02 — The quote is one number**
```
₱380,000. No breakdown. No square meters, no gauge, no explanation of which part actually failed.
```

**03 — You sign**
```
Because what else are you going to do? And a roof with eight good years left comes off in a week.
```

**Closing line**, centered, Fraunces 600, 26px, colour `#E0975E`:
```
Forty loose tekscrews and two metres of unsealed ridge roll can look exactly like a dying roof — if nobody shows you the difference.
```

---

## Section 4 — What the free check includes

Background `#F6F4EF`

**H2** (Slate):
```
What the free roof check actually includes.
```

**Three cards** — background white, 1px border `#DCD7CC`, radius 4px, padding 32px:

**Card 1 · 18-point inspection**
```
We go up. Panels, overlaps, tekscrews and washers, ridge roll, flashing, valleys, canal and downspouts, and the purlins from the ceiling side.
```

**Card 2 · Photos of every finding**
```
Each problem photographed and labelled, so you're not taking our word for it. The report is yours to keep.
```

**Card 3 · An itemized quotation in 24 hours**
```
Labour, materials, gauge, linear metres, wastage allowance, and price per square metre — each on its own line. Valid 15 days, because steel prices move.
```

**Kicker below the cards**, centered, 19px, Storm:
```
Normally ₱1,500. Free for Laguna homeowners this month. And if your roof is fine, we'll tell you it's fine and charge you nothing.
```

---

## Section 5 — Rommel's story

Background `#F6F4EF` · two columns: image left (hands on a metal panel), copy right
Add a 3px `#C4622D` left border on the copy block

**Eyebrow** (Copper):
```
WHY THIS COMPANY EXISTS
```

**H2** (Slate):
```
The job that made me quit re-roofing.
```

**Body** (Storm, 19px, line-height 1.75):
```
Nine of my nineteen years on roofs were spent taking them off.

Cabuyao, 2018. A two-storey house, ₱410,000 signed, crew scheduled. We pulled the panels and the purlins underneath were clean — barely any rust. That roof had eight, maybe ten years left in it.

The actual problem was a two-metre stretch of ridge roll nobody had sealed since the house was built. About ₱6,000 of work.

I finished the job. I got paid. Then I started Trueline, because I didn't want to do that again.
```

**Signature** (Fraunces 600, 20px, Slate):
```
Rommel Bautista, founder
```
**Under it** (13px, Ink Muted):
```
PCAB Lic. No. 41-2019-08822 · 19 years on Laguna roofs
```

---

## Section 6 — Prices, published

Background `#FFFFFF` (a clean white band between two chalk sections)

**H2** (Slate):
```
Our prices, in public.
```

**Intro** (Storm):
```
Nobody in this market publishes numbers. Here are ours.
```

**Table** — Fraunces 600 for the left column, Inter 500 right-aligned for prices,
1px `#DCD7CC` row dividers:

| | |
|---|---|
| Repairs — tekscrews and washers, resealing, flashing, ridge roll, panel swap, canal and downspout | ₱6,500 – ₱75,000 *(average ₱16,800)* |
| Repainting + elastomeric coating, two coats | ₱260 – ₱450 / sqm |
| **Roof Care Plan** — single home, two inspections a year, canal clearing, minor fixes included, priority typhoon response | **₱8,500 / year** |
| **Multi-Unit Care Plan** — every roof twice a year, written report per building, 48-hour rainy-season response | **₱1,500 / unit / year** *(min. 8 units)* |
| New build — long-span rib-type, supplied and installed | ₱950 – ₱1,700 / sqm |
| New build — labour only, your materials | ₱250 – ₱420 / sqm |
| Referral out, when you genuinely need a re-roof | **₱0** *(no commission)* |

**Three-ways-to-buy strip** — three small blocks, Moss checkmarks:
```
Supply and install   ·   Labour only, your materials   ·   Supply only, at cost + 8% handling
```

**Footnote** (14px, Ink Muted):
```
VAT-inclusive. Official receipt issued on every job. Quotations valid 15 days — steel prices move, and we won't pad a number to cover it.
```

---

## Section 7 — Three kinds of roof  *(second dark band)*

Background `#2C4356` · text `#F6F4EF` · **anchor ID: `plans`** (the hero link jumps here)

**H2**:
```
Three kinds of roof, one straight answer.
```

**Three cards** — background `#16232E`, radius 4px, padding 36px, Copper H3:

**My house**
```
A leak, a stain, or a quote you don't trust. Free 18-point inspection, itemized written quote in 24 hours.
```
Link (Copper): `Book a roof check →`

**My apartments**
```
Eight doors or sixty. Every roof inspected twice a year, one written report per building, one schedule, one contractor.
```
Link (Copper): `Book a portfolio call →`

**My new build**
```
Send the plans. We'll send back a roofing takeoff — sheet count, purlin runs, fasteners, accessories, wastage — free, and no obligation.
```
Link (Copper): `Send your plans →`

All three links → the same calendar URL. The calendar's *"What do you need?"* question captures
which one they are, and the automation branches on it.

---

## Section 8 — Proof

Background `#F6F4EF`

**H2** (Slate):
```
What that looks like in practice.
```

**Three testimonials** — no photos, no star ratings. Fraunces 600 20px for the quote,
13px Inter uppercase for the attribution, thin Copper rule above each:

```
"Two contractors said re-roof. Trueline resealed the ridge and replaced nine panels for ₱21,400. That was two rainy seasons ago and the ceiling is still dry."
```
`EDITHA L. — SANTA ROSA`

```
"I have twelve doors. Unit 4 leaked every July for four years. Now somebody checks all twelve before the rains and I get a report per building."
```
`GRACE T. — LOS BAÑOS`

```
"I asked three contractors what my roofing would cost. Two of them gave me one number. Trueline sent forty lines and a price per square metre."
```
`ENGR. PAOLO S. — CALAMBA`

**Stat bar below**, Slate background, Chalk text, Fraunces 700 32px centered:
```
7 out of 10 roofs we're called to replace, we repair instead.
```

> Internal note: these three names match seeded leads in the GHL pipeline on purpose — Editha
> Lagman, Grace Tolentino, Paolo Sandoval. Worth pointing out in the Loom: the page, the board
> and the emails are all one consistent world.

---

## Section 9 — FAQ

Background `#F6F4EF` · accordion if available, otherwise stacked with `#DCD7CC` dividers ·
question in Fraunces 600 22px Slate, answer in Inter 17px Storm

**Bakit libre?**
```
Because repairs, care plans and new installs are our business — panic tear-offs aren't. An inspection costs us two hours. A padded re-roof costs you ₱380,000. We'd rather earn ₱16,800 honestly and keep you for ten years.
```

**Is this a bait-and-switch to sell me a re-roof?**
```
We repair 7 out of 10 roofs we're called to look at. We don't sell re-roofs at all — when a roof is genuinely finished we hand you two vetted contractors and take no commission. That's the whole reason to trust the other 70%.
```

**Legit ba? Licensed?**
```
PCAB-licensed (No. 41-2019-08822), DTI-registered, based in Santa Rosa. 340+ roofs across Laguna since 2019. VAT-inclusive pricing and an official receipt on every job.
```

**Ayoko ng estranghero sa bubong ko.**
```
Fair. The first step is a 15-minute phone call, not a ladder. Nobody climbs anything until you say so.
```

**Magkano ba talaga?**
```
The prices are published above. Your quotation will be itemized down to the linear metre, and it's yours to take to any other contractor for a second opinion on our second opinion.
```

**What if I really do need a re-roof?**
```
Then we say so, in writing, and give you two names. Some roofs are finished. Pretending otherwise is how this industry got its reputation.
```

---

## Section 10 — Final CTA

Background `#C4622D` · text `#F6F4EF` · centered · generous padding (96px)

**H2** (Fraunces 700, 42px):
```
Get a straight answer about your roof.
```

**Body** (19px):
```
Fifteen minutes on the phone. A free inspection if it needs one. An itemized quotation in your inbox within 24 hours.
```

**Button** — inverted: background `#16232E`, text `#F6F4EF`:
```
Book a free roof check
```

**Under the button** (16px):
```
Or text / Viber 0917-000-0000 — Rommel answers.
```

**Micro line** (14px, 80% opacity):
```
Mon–Sat, 8am–5pm. Santa Rosa · Biñan · Cabuyao · Calamba · San Pedro · Los Baños · Sta. Cruz
```

---

## Section 11 — Footer

Background `#16232E` · text `#F6F4EF` at 70% · 14px Inter

Left:
```
TRUELINE ROOF CARE
The honest second opinion.
```

Middle:
```
2F Unit B, Balibago Commercial Complex
Santa Rosa, Laguna
0917-000-0000 · hello@truelineroofcare.example
```

Right:
```
PCAB Lic. No. 41-2019-08822
DTI-registered
Mon–Sat, 8am–5pm
```

Bottom rule, centered, 13px at 50%:
```
© 2026 Trueline Roof Care. Repair first. Replace last.
```

---

## Build checklist

- [ ] Fraunces + Inter loaded, no Roboto/Open Sans/Montserrat/Poppins anywhere
- [ ] Eight brand colours in the theme palette; **zero** default ClickFunnels blue on the page
- [ ] All four CTAs point to the calendar link
- [ ] Hero secondary link jumps to Section 7 anchor
- [ ] No placeholder text, no lorem ipsum, no unedited template block left behind
- [ ] No exclamation points anywhere on the page
- [ ] Mobile pass: H1 drops to 34px, three-column sections stack, table stays readable
- [ ] Test the calendar link from the live page on a phone
- [ ] Screenshot desktop full-page + mobile for the Loom

---
---

# CUT VERSION — trimmed for time

Same page, two sections trimmed. Nothing essential removed: the argument, the proof, the prices
and the offer all survive. Only redundancy is cut.

**Status: Sections 1 and 2 are built.**

| # | Section | Status | Change from full version |
|---|---|---|---|
| 1 | Announcement bar | ✅ built | — |
| 2 | Hero | ✅ built | — |
| 3 | The problem *(dark band)* | ⬜ | unchanged — this is the pitch |
| 4 | What the free check includes | ⬜ | unchanged |
| 5 | Rommel's story | ⬜ | unchanged — the trust asset |
| 6 | Prices, published | ⬜ | unchanged — the differentiator |
| 7 | Three kinds of roof *(dark band)* | ⬜ | unchanged — this is what shows segmentation |
| 8 | Proof | ⬜ | **TRIMMED: one testimonial instead of three, plus the stat bar** |
| 9 | FAQ | ⬜ | **TRIMMED: three questions instead of six** |
| 10 | Final CTA *(copper band)* | ⬜ | unchanged |
| 11 | Footer | ⬜ | unchanged |

### §8 Proof — trimmed content

Keep **one** testimonial (the strongest, because it names a peso figure and a timeframe):

```
"Two contractors said re-roof. Trueline resealed the ridge and replaced nine panels for ₱21,400. That was two rainy seasons ago and the ceiling is still dry."
```
`EDITHA L. — SANTA ROSA`

Then the stat bar, unchanged: Slate background, Chalk text, Fraunces 700 32px, centered:
```
7 out of 10 roofs we're called to replace, we repair instead.
```

### §9 FAQ — trimmed to three

Keep `Bakit libre?` · `Is this a bait-and-switch to sell me a re-roof?` · `Legit ba? Licensed?`
Drop the other three. Full answer copy is in Section 9 above — unchanged.

**Time estimate for the cut version, sections 3–11: ~55 minutes.**

---
---

# SINGLE COMBINED PROMPT — everything after Section 2

Use this if you'd rather send one message than eleven. Sections 1 and 2 are already built; this
covers Sections 3 through 11 in one pass, cut version.

**Trade-off:** one shot means less control. Expect to correct 2–3 things afterwards — most often
rewritten copy or a wrong shade. If the result drifts badly, fall back to the section-by-section
prompts further down and rebuild just the sections that failed.

```
I'm building a landing page in the ClickFunnels page editor for a demo roofing business in Santa Rosa, Laguna, Philippines. Sections 1 (announcement bar) and 2 (hero) are already built. Build Sections 3 through 11 for me, in order.

=== DESIGN SYSTEM — apply to everything, never deviate ===

FONTS
Headings: Fraunces (700 for H1/H2, 600 for H3). If unavailable, Playfair Display.
Body, buttons, labels: Inter (400 body, 600 buttons and labels).

COLOURS
Slate #16232E — dark backgrounds, headline text
Storm #2C4356 — secondary dark, body text on light
Chalk #F6F4EF — light background, a warm off-white, never pure white
Copper #C4622D — buttons, links, accents, numbers, prices
Copper Light #E0975E — emphasis on dark backgrounds, button hover
Moss #3E6B57 — checkmarks
Line #DCD7CC — borders and dividers
Ink Muted #5C6B75 — captions and labels

TYPE SCALE
H1 56px desktop / 34px mobile, line-height 1.05, letter-spacing -0.02em
H2 40px / 28px · H3 22px / 20px · Body 18px / 17px at line-height 1.7
Eyebrow labels 13px Inter 600 UPPERCASE, letter-spacing 0.1em, colour Copper
Buttons 17px Inter 600

BUTTONS
Background #C4622D, text #F6F4EF, border-radius 4px, padding 18px vertical / 36px horizontal, NO drop shadow, hover background #E0975E

LAYOUT
Content max-width 1080px. Section padding 88px vertical on desktop, 56px on mobile. Default page background #F6F4EF.

CTA LINK — every button and every card link points here:
https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi

HARD RULES
- No blue anywhere. No #2563EB or any platform default blue.
- No Roboto, Open Sans, Montserrat, or Poppins.
- No exclamation points in any copy.
- No emoji, no drop shadows, no gradients.
- No stock photos of smiling families, handshakes, or call-centre staff.
- Do NOT rewrite, shorten, or "improve" my copy. Paste it exactly as written, including every peso amount and every Filipino phrase.

=== SECTION 3 — THE PROBLEM (dark band) ===
Background #16232E, padding 88px vertical.

H2, centered, Fraunces 700 40px, #F6F4EF:
Here's how it usually goes.

3-column row. Each column: a number in Fraunces 700 40px #C4622D, an H3 in Fraunces 600 22px #F6F4EF, body in Inter 17px #F6F4EF at 90% opacity.

01 — "Someone knocks"
The rain stops and a crew you've never seen offers a free inspection. Ten minutes on your roof, plates from three provinces over.

02 — "The quote is one number"
₱380,000. No breakdown. No square meters, no gauge, no explanation of which part actually failed.

03 — "You sign"
Because what else are you going to do? And a roof with eight good years left comes off in a week.

Below the row, one centered line, Fraunces 600 26px, colour #E0975E, max-width 800px:
Forty loose tekscrews and two metres of unsealed ridge roll can look exactly like a dying roof — if nobody shows you the difference.

=== SECTION 4 — WHAT THE FREE CHECK INCLUDES ===
Background #F6F4EF, padding 88px vertical.

H2, centered, Fraunces 700 40px, #16232E:
What the free roof check actually includes.

3-column row, each column a card: background #FFFFFF, 1px border #DCD7CC, radius 4px, padding 32px, equal heights. Each card an H3 (Fraunces 600 22px #16232E) and body (Inter 17px #2C4356).

"18-point inspection"
We go up. Panels, overlaps, tekscrews and washers, ridge roll, flashing, valleys, canal and downspouts, and the purlins from the ceiling side.

"Photos of every finding"
Each problem photographed and labelled, so you're not taking our word for it. The report is yours to keep.

"An itemized quotation in 24 hours"
Labour, materials, gauge, linear metres, wastage allowance, and price per square metre — each on its own line. Valid 15 days, because steel prices move.

Below the cards, centered, Inter 19px #2C4356, max-width 780px:
Normally ₱1,500. Free for Laguna homeowners this month. And if your roof is fine, we'll tell you it's fine and charge you nothing.

=== SECTION 5 — FOUNDER STORY ===
Background #F6F4EF, padding 88px vertical. Two columns, 45% left / 55% right.

LEFT: image placeholder for a close-up of a roofer's hands on a metal roof panel, radius 4px, fills column height.

RIGHT: 3px solid #C4622D left border, 32px left padding. Stacked:

Eyebrow, Inter 600 13px UPPERCASE letter-spacing 0.1em #C4622D:
WHY THIS COMPANY EXISTS

H2, Fraunces 700 40px #16232E:
The job that made me quit re-roofing.

Body, Inter 19px line-height 1.75 #2C4356, four separate paragraphs:
Nine of my nineteen years on roofs were spent taking them off.

Cabuyao, 2018. A two-storey house, ₱410,000 signed, crew scheduled. We pulled the panels and the purlins underneath were clean — barely any rust. That roof had eight, maybe ten years left in it.

The actual problem was a two-metre stretch of ridge roll nobody had sealed since the house was built. About ₱6,000 of work.

I finished the job. I got paid. Then I started Trueline, because I didn't want to do that again.

Signature, Fraunces 600 20px #16232E:
Rommel Bautista, founder

Credentials, Inter 13px #5C6B75:
PCAB Lic. No. 41-2019-08822 · 19 years on Laguna roofs

=== SECTION 6 — PRICES, PUBLISHED ===
Background #FFFFFF, padding 88px vertical. This is the most important section on the page — make it deliberate and easy to scan.

H2, Fraunces 700 40px #16232E:
Our prices, in public.

Intro, Inter 18px #2C4356:
Nobody in this market publishes numbers. Here are ours.

A 7-row price table. Each row two columns: 70% left (service, Fraunces 600 18px #16232E), 30% right (price, Inter 500 18px right-aligned #C4622D). 1px #DCD7CC divider between rows.

Repairs — tekscrews and washers, resealing, flashing, ridge roll, panel swap, canal and downspout | ₱6,500 – ₱75,000 (average ₱16,800)
Repainting + elastomeric coating, two coats | ₱260 – ₱450 / sqm
Roof Care Plan — single home, two inspections a year, canal clearing, minor fixes included, priority typhoon response | ₱8,500 / year
Multi-Unit Care Plan — every roof twice a year, written report per building, 48-hour rainy-season response | ₱1,500 / unit / year (min. 8 units)
New build — long-span rib-type, supplied and installed | ₱950 – ₱1,700 / sqm
New build — labour only, your materials | ₱250 – ₱420 / sqm
Referral out, when you genuinely need a re-roof | ₱0 (no commission)

Below the table, a 3-column row, each with a checkmark icon in #3E6B57 and text Inter 16px #2C4356:
Supply and install
Labour only, your materials
Supply only, at cost + 8% handling

Footnote, Inter 14px #5C6B75:
VAT-inclusive. Official receipt issued on every job. Quotations valid 15 days — steel prices move, and we won't pad a number to cover it.

=== SECTION 7 — THREE KINDS OF ROOF (dark band) ===
Background #2C4356, padding 88px vertical. Give this section the anchor ID "plans".

H2, centered, Fraunces 700 40px #F6F4EF:
Three kinds of roof, one straight answer.

3-column row, each a card: background #16232E, radius 4px, padding 36px, equal heights. Each card an H3 (Fraunces 600 22px #C4622D), body (Inter 17px #F6F4EF at 90%), and a text link (Inter 600 16px #C4622D) to the CTA link.

"My house"
A leak, a stain, or a quote you don't trust. Free 18-point inspection, itemized written quote in 24 hours.
Link: Book a roof check →

"My apartments"
Eight doors or sixty. Every roof inspected twice a year, one written report per building, one schedule, one contractor.
Link: Book a portfolio call →

"My new build"
Send the plans. We'll send back a roofing takeoff — sheet count, purlin runs, fasteners, accessories, wastage — free, and no obligation.
Link: Send your plans →

=== SECTION 8 — PROOF (two parts) ===
PART A: background #F6F4EF, padding 88px vertical.

H2, Fraunces 700 40px #16232E:
What that looks like in practice.

One testimonial: a 2px #C4622D divider 60px wide left-aligned, then the quote in Fraunces 600 22px #16232E, max-width 820px:
"Two contractors said re-roof. Trueline resealed the ridge and replaced nine panels for ₱21,400. That was two rainy seasons ago and the ceiling is still dry."

Attribution, Inter 600 13px UPPERCASE letter-spacing 0.08em #5C6B75:
EDITHA L. — SANTA ROSA

No photo, no star rating, no quotation-mark graphic.

PART B: a new band directly beneath, background #16232E, padding 48px vertical. One centered line, Fraunces 700 32px #F6F4EF:
7 out of 10 roofs we're called to replace, we repair instead.

=== SECTION 9 — FAQ ===
Background #F6F4EF, padding 88px vertical, content max-width 820px. Use an accordion if available, otherwise stack with 1px #DCD7CC dividers.

H2, Fraunces 700 40px #16232E:
Questions people actually ask.

Questions Fraunces 600 22px #16232E. Answers Inter 17px line-height 1.7 #2C4356. Keep the Filipino phrasing exactly.

Q: Bakit libre?
A: Because repairs, care plans and new installs are our business — panic tear-offs aren't. An inspection costs us two hours. A padded re-roof costs you ₱380,000. We'd rather earn ₱16,800 honestly and keep you for ten years.

Q: Is this a bait-and-switch to sell me a re-roof?
A: We repair 7 out of 10 roofs we're called to look at. We don't sell re-roofs at all — when a roof is genuinely finished we hand you two vetted contractors and take no commission. That's the whole reason to trust the other 70%.

Q: Legit ba? Licensed?
A: PCAB-licensed (No. 41-2019-08822), DTI-registered, based in Santa Rosa. 340+ roofs across Laguna since 2019. VAT-inclusive pricing and an official receipt on every job.

=== SECTION 10 — FINAL CTA (copper band) ===
Background #C4622D, padding 96px vertical, everything centered.

H2, Fraunces 700 42px #F6F4EF:
Get a straight answer about your roof.

Body, Inter 19px #F6F4EF, max-width 720px:
Fifteen minutes on the phone. A free inspection if it needs one. An itemized quotation in your inbox within 24 hours.

Button, inverted: background #16232E, text #F6F4EF, radius 4px, padding 18px/36px, no shadow, Inter 600 17px, label "Book a free roof check", linking to the CTA link.

Under the button, Inter 16px #F6F4EF:
Or text / Viber 0917-000-0000 — Rommel answers.

Micro line, Inter 14px #F6F4EF at 80% opacity:
Mon–Sat, 8am–5pm. Santa Rosa · Biñan · Cabuyao · Calamba · San Pedro · Los Baños · Sta. Cruz

=== SECTION 11 — FOOTER ===
Background #16232E, padding 56px vertical. Three columns, text Inter 14px #F6F4EF at 70%.

LEFT (first line Fraunces 600 18px at full opacity):
TRUELINE ROOF CARE
The honest second opinion.

MIDDLE:
2F Unit B, Balibago Commercial Complex
Santa Rosa, Laguna
0917-000-0000 · hello@truelineroofcare.example

RIGHT:
PCAB Lic. No. 41-2019-08822
DTI-registered
Mon–Sat, 8am–5pm

Below the columns, a 1px #2C4356 divider, then a centered line Inter 13px #F6F4EF at 50%:
© 2026 Trueline Roof Care. Repair first. Replace last.

=== WHEN DONE ===
Confirm: only Fraunces and Inter used, no blue anywhere, every button and card link points to the booking URL, no exclamation points, no placeholder text, the band rhythm runs dark / light / light / white / dark / light / dark / copper / dark, and on mobile every 3-column row stacks and H2 drops to 28px. List anything you had to change or couldn't do.
```

---

# PROMPTS — section by section (fallback, more control)

Send **Prompt 0 first**, once. Then send prompts 1–9 in order, one section at a time, checking
the result before moving on. Each prompt is self-contained, so the assistant never needs to guess
at brand values.

---

### Prompt 0 — brand context (send once, first)

```
I'm building a landing page in the ClickFunnels page editor for a demo business. I'll ask you to build it one section at a time. Here is the design system — apply it to everything and never deviate:

FONTS
- Headings: Fraunces (700 for H1/H2, 600 for H3). If unavailable, Playfair Display.
- Body, buttons, labels: Inter (400 body, 600 buttons and labels)

COLOURS
- Slate #16232E (dark backgrounds, headline text)
- Storm #2C4356 (secondary dark, body text on light)
- Chalk #F6F4EF (light background — warm off-white, never pure white)
- Copper #C4622D (buttons, links, accents, numbers)
- Copper Light #E0975E (hover, emphasis on dark)
- Moss #3E6B57 (checkmarks)
- Line #DCD7CC (borders, dividers)
- Ink Muted #5C6B75 (captions, labels)

TYPE SCALE
H1 56px desktop / 34px mobile, line-height 1.05, letter-spacing -0.02em
H2 40px / 28px · H3 22px / 20px · Body 18px / 17px, line-height 1.7
Eyebrow labels 13px Inter 600 UPPERCASE, letter-spacing 0.1em, Copper
Buttons 17px Inter 600

BUTTONS
Background #C4622D, text #F6F4EF, radius 4px, padding 18px/36px, NO drop shadow, hover #E0975E

LAYOUT
Content max-width 1080px. Section padding 88px vertical desktop, 56px mobile. Page background #F6F4EF.

CTA LINK — every button and card link points here:
https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi

HARD RULES — never violate these:
- No blue anywhere. No #2563EB, no platform default blue.
- No Roboto, Open Sans, Montserrat, or Poppins.
- No exclamation points in any copy.
- No emoji, no drop shadows, no gradients.
- No stock photos of smiling families, handshakes, or call-centre staff.
- Never rewrite the copy I give you. Paste it exactly as written, including the peso amounts and the Filipino phrases.

Sections 1 (announcement bar) and 2 (hero) are already built. Confirm you understand, then wait for my next message.
```

---

### Prompt 1 — Section 3, The problem

```
Build Section 3: "The problem". This is a full-width dark band.

Section: background #16232E, padding 88px top and bottom, content centered, max-width 1080px.

H2, centered, Fraunces 700, 40px, colour #F6F4EF:
Here's how it usually goes.

Then a 3-column row. Each column has (a) a number in Fraunces 700, 40px, colour #C4622D, (b) an H3 in Fraunces 600, 22px, colour #F6F4EF, (c) body text in Inter 17px, colour #F6F4EF at 90% opacity.

Column 1 — number "01" — H3 "Someone knocks"
The rain stops and a crew you've never seen offers a free inspection. Ten minutes on your roof, plates from three provinces over.

Column 2 — number "02" — H3 "The quote is one number"
₱380,000. No breakdown. No square meters, no gauge, no explanation of which part actually failed.

Column 3 — number "03" — H3 "You sign"
Because what else are you going to do? And a roof with eight good years left comes off in a week.

Below the row, one centered line of text, Fraunces 600, 26px, colour #E0975E, max-width 800px:
Forty loose tekscrews and two metres of unsealed ridge roll can look exactly like a dying roof — if nobody shows you the difference.
```

---

### Prompt 2 — Section 4, What the free check includes

```
Build Section 4: "What the free check includes".

Section: background #F6F4EF, padding 88px top and bottom.

H2, centered, Fraunces 700, 40px, colour #16232E:
What the free roof check actually includes.

Then a 3-column row. Style each column as a card: background #FFFFFF, 1px border #DCD7CC, border-radius 4px, padding 32px, equal heights.

Each card has an H3 (Fraunces 600, 22px, colour #16232E) and body text (Inter 17px, colour #2C4356).

Card 1 — "18-point inspection"
We go up. Panels, overlaps, tekscrews and washers, ridge roll, flashing, valleys, canal and downspouts, and the purlins from the ceiling side.

Card 2 — "Photos of every finding"
Each problem photographed and labelled, so you're not taking our word for it. The report is yours to keep.

Card 3 — "An itemized quotation in 24 hours"
Labour, materials, gauge, linear metres, wastage allowance, and price per square metre — each on its own line. Valid 15 days, because steel prices move.

Below the cards, one centered line, Inter 19px, colour #2C4356, max-width 780px:
Normally ₱1,500. Free for Laguna homeowners this month. And if your roof is fine, we'll tell you it's fine and charge you nothing.
```

---

### Prompt 3 — Section 5, Rommel's story

```
Build Section 5: the founder story.

Section: background #F6F4EF, padding 88px top and bottom. Two columns, 45% left / 55% right.

LEFT column: an image placeholder for a close-up photo of a roofer's hands on a metal roof panel. Border-radius 4px, fills the column height.

RIGHT column: add a 3px solid #C4622D left border and 32px left padding. Inside, stacked:

Eyebrow — Inter 600, 13px, UPPERCASE, letter-spacing 0.1em, colour #C4622D:
WHY THIS COMPANY EXISTS

H2 — Fraunces 700, 40px, colour #16232E:
The job that made me quit re-roofing.

Body — Inter 19px, line-height 1.75, colour #2C4356, four separate paragraphs:
Nine of my nineteen years on roofs were spent taking them off.

Cabuyao, 2018. A two-storey house, ₱410,000 signed, crew scheduled. We pulled the panels and the purlins underneath were clean — barely any rust. That roof had eight, maybe ten years left in it.

The actual problem was a two-metre stretch of ridge roll nobody had sealed since the house was built. About ₱6,000 of work.

I finished the job. I got paid. Then I started Trueline, because I didn't want to do that again.

Signature — Fraunces 600, 20px, colour #16232E:
Rommel Bautista, founder

Credentials line — Inter 13px, colour #5C6B75:
PCAB Lic. No. 41-2019-08822 · 19 years on Laguna roofs
```

---

### Prompt 4 — Section 6, Prices published

```
Build Section 6: the published price list. This is the most important section on the page — almost no competitor publishes prices, so it must look deliberate and easy to scan.

Section: background #FFFFFF, padding 88px top and bottom.

H2, Fraunces 700, 40px, colour #16232E:
Our prices, in public.

Intro, Inter 18px, colour #2C4356:
Nobody in this market publishes numbers. Here are ours.

Then a 7-row price table. Each row is two columns: 70% left (service name, Fraunces 600, 18px, colour #16232E) and 30% right (price, Inter 500, 18px, right-aligned, colour #C4622D). Put a 1px #DCD7CC divider between every row.

Row 1 | Repairs — tekscrews and washers, resealing, flashing, ridge roll, panel swap, canal and downspout | ₱6,500 – ₱75,000 (average ₱16,800)
Row 2 | Repainting + elastomeric coating, two coats | ₱260 – ₱450 / sqm
Row 3 | Roof Care Plan — single home, two inspections a year, canal clearing, minor fixes included, priority typhoon response | ₱8,500 / year
Row 4 | Multi-Unit Care Plan — every roof twice a year, written report per building, 48-hour rainy-season response | ₱1,500 / unit / year (min. 8 units)
Row 5 | New build — long-span rib-type, supplied and installed | ₱950 – ₱1,700 / sqm
Row 6 | New build — labour only, your materials | ₱250 – ₱420 / sqm
Row 7 | Referral out, when you genuinely need a re-roof | ₱0 (no commission)

Below the table, a 3-column row. Each column has a checkmark icon in #3E6B57 and text in Inter 16px, colour #2C4356:
Supply and install
Labour only, your materials
Supply only, at cost + 8% handling

Finally a footnote, Inter 14px, colour #5C6B75:
VAT-inclusive. Official receipt issued on every job. Quotations valid 15 days — steel prices move, and we won't pad a number to cover it.
```

---

### Prompt 5 — Section 7, Three kinds of roof

```
Build Section 7: "Three kinds of roof". Full-width dark band. Give this section the anchor ID "plans" so a link elsewhere on the page can jump to it.

Section: background #2C4356, padding 88px top and bottom.

H2, centered, Fraunces 700, 40px, colour #F6F4EF:
Three kinds of roof, one straight answer.

Then a 3-column row. Each column is a card: background #16232E, border-radius 4px, padding 36px, equal heights.

Each card has an H3 (Fraunces 600, 22px, colour #C4622D), body text (Inter 17px, colour #F6F4EF at 90%), and a text link (Inter 600, 16px, colour #C4622D) pointing to https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi

Card 1 — H3 "My house"
A leak, a stain, or a quote you don't trust. Free 18-point inspection, itemized written quote in 24 hours.
Link text: Book a roof check →

Card 2 — H3 "My apartments"
Eight doors or sixty. Every roof inspected twice a year, one written report per building, one schedule, one contractor.
Link text: Book a portfolio call →

Card 3 — H3 "My new build"
Send the plans. We'll send back a roofing takeoff — sheet count, purlin runs, fasteners, accessories, wastage — free, and no obligation.
Link text: Send your plans →
```

---

### Prompt 6 — Section 8, Proof

```
Build Section 8: proof. Two parts.

PART A — Section: background #F6F4EF, padding 88px top and bottom.

H2, Fraunces 700, 40px, colour #16232E:
What that looks like in practice.

Below it, one testimonial block: a 2px solid #C4622D divider 60px wide, left-aligned, then the quote in Fraunces 600, 22px, colour #16232E, max-width 820px:
"Two contractors said re-roof. Trueline resealed the ridge and replaced nine panels for ₱21,400. That was two rainy seasons ago and the ceiling is still dry."

Then the attribution, Inter 600, 13px, UPPERCASE, letter-spacing 0.08em, colour #5C6B75:
EDITHA L. — SANTA ROSA

No photo, no star rating, no quotation-mark graphic.

PART B — a new full-width band directly beneath: background #16232E, padding 48px top and bottom. One centered line, Fraunces 700, 32px, colour #F6F4EF:
7 out of 10 roofs we're called to replace, we repair instead.
```

---

### Prompt 7 — Section 9, FAQ

```
Build Section 9: FAQ, three questions. Use an accordion or toggle element if one is available; otherwise stack them with 1px #DCD7CC dividers between each.

Section: background #F6F4EF, padding 88px top and bottom, content max-width 820px.

H2, Fraunces 700, 40px, colour #16232E:
Questions people actually ask.

Questions in Fraunces 600, 22px, colour #16232E. Answers in Inter 17px, line-height 1.7, colour #2C4356. Keep the Filipino phrasing exactly as written.

Q: Bakit libre?
A: Because repairs, care plans and new installs are our business — panic tear-offs aren't. An inspection costs us two hours. A padded re-roof costs you ₱380,000. We'd rather earn ₱16,800 honestly and keep you for ten years.

Q: Is this a bait-and-switch to sell me a re-roof?
A: We repair 7 out of 10 roofs we're called to look at. We don't sell re-roofs at all — when a roof is genuinely finished we hand you two vetted contractors and take no commission. That's the whole reason to trust the other 70%.

Q: Legit ba? Licensed?
A: PCAB-licensed (No. 41-2019-08822), DTI-registered, based in Santa Rosa. 340+ roofs across Laguna since 2019. VAT-inclusive pricing and an official receipt on every job.
```

---

### Prompt 8 — Section 10, Final CTA

```
Build Section 10: the final call to action. Full-width copper band, everything centered.

Section: background #C4622D, padding 96px top and bottom.

H2, Fraunces 700, 42px, colour #F6F4EF:
Get a straight answer about your roof.

Body, Inter 19px, colour #F6F4EF, max-width 720px, centered:
Fifteen minutes on the phone. A free inspection if it needs one. An itemized quotation in your inbox within 24 hours.

Button — inverted from the usual style: background #16232E, text #F6F4EF, radius 4px, padding 18px/36px, no shadow, Inter 600 17px. Label:
Book a free roof check
Link: https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi

Under the button, Inter 16px, colour #F6F4EF:
Or text / Viber 0917-000-0000 — Rommel answers.

Micro line, Inter 14px, colour #F6F4EF at 80% opacity:
Mon–Sat, 8am–5pm. Santa Rosa · Biñan · Cabuyao · Calamba · San Pedro · Los Baños · Sta. Cruz
```

---

### Prompt 9 — Section 11, Footer

```
Build Section 11: the footer.

Section: background #16232E, padding 56px top and bottom. Three columns, all text Inter 14px, colour #F6F4EF at 70% opacity.

LEFT column — first line in Fraunces 600, 18px, full-opacity #F6F4EF, second line normal:
TRUELINE ROOF CARE
The honest second opinion.

MIDDLE column:
2F Unit B, Balibago Commercial Complex
Santa Rosa, Laguna
0917-000-0000 · hello@truelineroofcare.example

RIGHT column:
PCAB Lic. No. 41-2019-08822
DTI-registered
Mon–Sat, 8am–5pm

Below the three columns, a 1px #2C4356 divider, then one centered line, Inter 13px, colour #F6F4EF at 50%:
© 2026 Trueline Roof Care. Repair first. Replace last.
```

---

### Prompt 10 — final QA pass

```
Do a final pass on the whole page and fix anything that fails these checks:

1. Fonts: only Fraunces and Inter. No Roboto, Open Sans, Montserrat, Poppins.
2. Colours: no blue anywhere. Only the eight brand hex values I gave you.
3. Every button and card link points to https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi
4. The hero's "Building new? Send your plans instead" link jumps to the section with anchor ID "plans".
5. No placeholder or template text left anywhere. No lorem ipsum.
6. No exclamation points in any copy.
7. No drop shadows, no gradients, no emoji.
8. Mobile: H1 drops to 34px, H2 to 28px, every 3-column row stacks vertically, and the price table rows stay readable without horizontal scrolling.
9. Section padding is consistent: 88px vertical on desktop, 56px on mobile.
10. The band rhythm alternates correctly: light, dark, light, light, white, dark, light, dark, copper, dark.

List anything you changed.
```
