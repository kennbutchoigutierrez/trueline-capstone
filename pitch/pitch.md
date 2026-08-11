# pitch.md — the Loom capability pitch

**Deliverable #10, the hero of the capstone.** A 3–6 minute Loom that pitches what you can build
to someone who might hire you. The Trueline system is the evidence, not the subject.

**The one rule that decides whether this lands:** the point of view is *"here is what I can do
for you,"* never *"here is what I clicked."* Every time you catch yourself narrating the screen,
switch to what the thing on screen would be worth to the person watching.

Everything for this video lives in this folder:

| File | What it's for |
|---|---|
| `script.md` | **What you say.** Verbatim for the open and close, bullets for the demo |
| `pitch.md` | This file — what's on screen when, the pre-flight, and the bar |
| `deck.pptx` | The 7 slides. Talk track is in the speaker notes |
| `deck.cjs` | Source for the deck. `npm install pptxgenjs` once, then `node deck.cjs deck.pptx` |

*(The generator is `.cjs`, not `.js` — a `package.json` further up the tree sets
`"type": "module"`, which would otherwise stop it running.)*

---

## Before you hit record

| | |
|---|---|
| **Swap the booking link** | Slide 7 reads `REPLACE WITH YOUR BOOKING LINK` in green. Do not film it that way |
| **Rename A1's generic steps** | Three `Go to` and three `Wait` steps all carry default labels. The canvas is a hero shot; make it readable |
| **Open every tab in advance** | Landing page · GHL pipeline board · A1 canvas · `../emails/email-2-nurture.html` in a browser tab · `../carousel/out/` in an image viewer · the deck |
| **Zoom to 125–150%** | Especially the pipeline board and the workflow canvas. Small text is the most common failure on this brief |
| **Close the plumbing** | Trust Center / A2P pages · anything showing this is ARCA's sub-account · Vercel dashboard · your editor (`.env.local` sits in the project root) · billing · password managers |
| **Quiet room, one rehearsal** | Twice through out loud. Not scripted — you want it to sound like you know it, because you do |

### Live screen, or a prepared asset?

**The rule: live where it proves the work is real, a prepared asset where live would show the
seams.** A screenshot of a CRM could be anyone's; a live scroll couldn't. But every unfinished
thing in this project sits in one place, and that place is Meta.

| Asset | How to show it | Why |
|---|---|---|
| Landing page | **Live** | Public URL, loads fast, and scrolling it is inherently convincing |
| Pipeline board | **Live** | One screen, no hunting, looks its best in motion |
| A1 canvas | **Live, pre-positioned** | See the warning below |
| The email | **Live-ish** — local HTML in a browser tab | Renders full-bleed, no builder chrome, inline-styled so it's what actually sends |
| Ads | **⛔ Prepared creative only** | Draft 1 is part-built and 2–4 don't exist in Ads Manager. Show `../carousel/out/` and `../ad-drafts.md` instead |

**⚠ Pre-position the A1 canvas before you record.** It's a wide tree, and panning around hunting
for a step is exactly where the video looks fumbly. Frame it so the trigger and the four-way
branch are visible together, then pan **once**, down to the tail. Don't zoom and scroll live
looking for things.

**The pretty email does not need the test pass.** Open `../emails/email-2-nurture.html` directly in
Chrome. It renders full-bleed with no builder chrome and no inbox clutter, and the email is
fully inline-styled, so what you see is what actually sends. That satisfies the "at least one
pretty email on screen" bar on its own.

---

## The running order — 4:45, leaving slack to 6:00

| Time | On screen | What you are actually saying |
|---|---|---|
| **0:00–0:25** | Slide 1 | Who you are and what you build. One sentence, before anything else. *"I build lead-generation systems — the page, the ads that feed it, the CRM behind it, and the follow-up that runs on its own."* Then: everything here was built in a week |
| **0:25–0:45** | Slide 2 | The map. Name the four parts once so they know the shape of what's coming. **Do not read the cards** |
| **0:45–0:50** | Slide 3 | Flash card, two seconds |
| **0:50–1:35** | **Landing page, live** | Scroll it. The promise in the hero · prices published in public, which almost nobody in this market does · the form near the bottom and *why* it asks what it asks. Land on: *"I can build you a page that earns the click it paid for"* |
| **1:35–1:40** | Slide 4 | Flash card |
| **1:40–2:20** | **Rendered creative — ⛔ not Ads Manager** | The nine slides from `../carousel/out/`, the three ratios side by side, the four hook angles from `../ad-drafts.md`. One creative source, three ratios, so nothing gets a bad crop. *"I can build the creative and the copy, not just place the buy"* |
| **2:20–2:25** | Slide 5 | Flash card |
| **2:25–3:05** | **Pipeline board** | Six stages, fifteen real leads, real peso values. Two decisions worth naming: **Lost isn't a stage** — dead deals keep their position and get a status plus a `nurture-may` tag, so the board shows *where* money dies instead of hiding it in a graveyard column. And the testimonials on the page use names from this board — *"the page, the board and the emails are one consistent world"* |
| **3:05–3:10** | Slide 6 | Flash card |
| **3:10–4:10** | **A1 canvas → the email** | The big one, and where the range shows. Trigger fires on form submit · a reply inside sixty seconds · then it **branches on who the lead actually is** — a landlord with twelve roofs should never get an email about one ceiling stain. Then **cut to the rendered email full screen** and let it sit for a beat. *"And the follow-up it sends looks like this"* |
| **4:10–4:45** | Slide 7 | The close. Say the next step out loud — don't let the slide carry it alone |

**The single strongest 20 seconds in the whole video** is the cut from the branching workflow to
the rendered email. One shows the thinking, the other shows the craft. Don't rush it.

---

## What to say about what isn't finished

Say it plainly, once, in passing — it reads as command of the platform rather than an excuse.
Nobody watching expects a five-day sequence to have run.

- **SMS is built and blocked behind A2P/10DLC registration** — a US carrier compliance process
  that catches every new sub-account, including a Philippine business on LC Phone. The steps are
  on the canvas and work the day it clears. *This is a fluency line, not an apology.*
- **The workflows are in Draft**, deliberately, because publishing an automation against fifteen
  seeded demo leads burns the board you're about to show.
- If you ran the short test: *"built and smoke-tested end to end on the front half — the
  multi-day tails are on the canvas."* Accurate, and enough.

**Do not claim the whole system has run.** It hasn't, the brief doesn't ask you to show it
firing live, and a claim you can't back is the one thing that would cost you the credibility
everything else in this video earns.

---

## The presentable bar, checked against what you actually have

| Bar | Where it's met |
|---|---|
| 3–6 min, clean audio, no dead air | Running order lands at 4:45 |
| Screen zoomed, text readable | Pre-flight — 125–150% on the board and the canvas |
| Range: page · ads · CRM · automations + email | All four have a slot |
| At least one pretty email on screen | 3:10–4:10, rendered from the local HTML file |
| POV on what you can do for the viewer | Every section card ends on a *"what I can build for you"* line — say those, not the descriptions |
| Opens with who you are, ends with a next step | Slides 1 and 7 |
| Passwords, keys, billing, messy tabs hidden | Pre-flight table |

---

## Not in this video

The **Raven Day 5 walkthrough** is a different deliverable with a different audience — that one
is behind-the-scenes for your instructor, and it's where the platform constraints, the reversals
and the things that broke actually belong. Save them for it. This video is a pitch.
