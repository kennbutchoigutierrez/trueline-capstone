# PROGRESS.md — Trueline Roof Care capstone

**Last worked:** 8 August 2026
**Remaining:** the 3 GHL automations → Raven Day 5 walkthrough → Loom capability pitch

---

# RESUME HERE

## 0 · Live links, so you can re-enter cold

| | |
|---|---|
| Landing page | https://trueline-roof-care.vercel.app |
| Repo | https://github.com/kennbutchoigutierrez/trueline-capstone (public) |
| Booking calendar | https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi |

Push to `main` and Vercel redeploys the landing page. `vercel.json` sets
`outputDirectory` to `site`, so the deploy serves that folder from the repo root.

## 1 · Loose ends, ~40 min

**GHL — email 2 into A1.** Workflow `A1 — Speed-to-Lead` was being built when we stopped:
trigger **Contact Created** (no filters) → **Wait 24h** → **If/Else: has no appointment** →
**Send Email** on the else branch. Paste `emails/email-2-nurture.html` via the code editor,
subject `Six signs it's a repair, not a re-roof`, then send yourself a test. Keep the
workflow unpublished.

Email 1 is already live in **A2 — Appointment Confirm & Show-Up** and its test arrived
styled. Still to verify on email 1: that `{{contact.first_name}}` actually fills in, and
that GHL is not appending a second unsubscribe under the one in the footer.

**Meta Ads Manager — 4 drafts.** Campaign and ad set exist. Draft 1 `six-signs-carousel`
had its five cards, headlines and descriptions uploaded; still needs primary text, URL,
display link, the Stories 9:16 swap, and save-as-draft. Drafts 2–4 not started — duplicate
draft 1 at ad level three times and swap creative and copy. **Everything paste-ready is in
`ad-drafts.md`.** Never click Publish; close with **X → Save as draft**.

## 2 · The segmentation form, then the three automations

**Build the form first** — see `ghl-form.md`, it has a paste-ready extension prompt. Send
me the embed code and the custom field key and the form goes into `site/index.html`. Doing
it before the automations means A1 gets its real trigger and its segment branching in one
pass instead of being rebuilt later.

## 3 · The three automations — the last real build

**→ `automations.md`.** Full step-by-step for all three, every SMS and email body written out,
and a paste-ready extension prompt per workflow. This is assembly now, not design.

**Build order is not the numbering order.** A3 and A2 depend on nothing and can be built today;
only A1 waits on the form.

| Order | Workflow | Blocked by |
|---|---|---|
| 1 | **A3 Quote Follow-Up** — Quote Sent → day 3 → day 7 April-vs-August → day 14 Lost + `nurture-may` | nothing |
| 2 | **A2 Confirm & Show-Up** — already exists with email 1; add stage move, 24h + 1h SMS, no-show rescue | nothing |
| 3 | **A1 Speed-to-Lead** — SMS in 60s → 5-min task → 4-way segment branch → 24h email 2 → day 4 SMS → Lost | **the form** |

A1 needs two things only the form can give it: the `Form Submitted` trigger and the custom
field key its four-way branch reads. Building it on the stand-in trigger means rebuilding it.

## 4 · Then the two videos

Loom capability pitch (the hero deliverable) and the Raven Day 5 walkthrough. Screenshot
list is further down this file.

---

## ⚠ Open architecture gap — the landing page has no form

Every CTA in `site/index.html` links straight to the booking widget, so a visitor who does
not book never becomes a contact. Two consequences:

1. **A1's nurture has no real audience.** It is triggered on `Contact Created` as a
   stand-in; the designed trigger is `Form Submitted`. When the form exists, **replace**
   the trigger — do not add it alongside, or form leads fire both and get the email twice.
2. **No segment tags exist**, so none of the `repair` / `care-plan` / `multi-unit` /
   `new-build` branching in `brief.md` can run. Every segment currently gets the homeowner
   nurture — a landlord with twelve roofs would get an email about one ceiling stain.

**Fix: → `ghl-form.md`.** Full field spec, the four dropdown labels and values, the
redirect-to-calendar behaviour, how the tagging actually works (in the workflow, not the
form — GHL cannot tag per dropdown option), the follow-up steps once it exists, and a
ready-to-send prompt for the Claude browser extension.

---

## Session logs

- [`sessions/2026-08-08.md`](sessions/2026-08-08.md) — Parts 3 and 4. The carousel render-path
  decision, every diagram fix, the placement correction, the Vercel and GitHub wiring, the
  masthead failure and what it taught, and how the missing form was found.

## Decisions from the 8 Aug session worth keeping

**Email headers must be live text, never a remote image.** The masthead started as a hosted
PNG. GHL kept it and the URL returned 200, but Gmail declined to display it. Rebuilt as
type and colour on a slate cell, which cannot be blocked, proxied or rewritten. The roof
photo is gone from the header; that is the right trade. `emails/masthead.html` still
renders the image version if it is ever wanted back.

**One creative source, three ratios.** `carousel/slides/slides.css` switches layout on
viewport-height media queries, so `render.py`, `--square` and `--story` produce 4:5, 1:1 and
9:16 from the same HTML. Fix a typo once, re-render three times. Never hand-edit an export.

**Meta placements: everything except Audience Network.** Excluding Stories and Reels to
dodge a bad crop was the wrong instinct — supply the right crop instead. Audience Network
stays off because it is third-party apps off Meta and a notorious source of junk clicks on
a click-optimised campaign.

**Peso figures on the carousel are unverified.** The six per-symptom ranges on slides 2–7
are new numbers, set inside the published ₱6,500–₱75,000 band. Rommel signs off before
anything is posted publicly.

---

## Where things stand

| # | Deliverable | Status |
|---|---|---|
| 1 | `brief.md` — brand, offer, voice, design system | ✅ Done |
| 2 | `plan.md` — pipeline, page promise, email + automation sketch | ✅ Done |
| 3 | GHL calendar — `15-min Roof Check Call` | ✅ Done |
| 4 | GHL pipeline — `Trueline Roof Leads`, 6 stages, 15 leads | ✅ Done |
| 5 | ClickFunnels landing page | 🔨 **Sections 1–4 built. Resume at Section 5.** |
| 6 | Instagram carousel | ✅ **Done — 9 slides, rendered to `carousel/out/`** |
| 7 | Facebook ad draft | 🔨 Assets + copy done (`ad-drafts.md`) · campaign + ad set built · draft 1 part-built, drafts 2–4 to go |
| 8 | Two pretty HTML emails | 🔨 Both built · **email 1 live in GHL, test arrived styled** · email 2 still to paste into A1 |
| 9 | Three GHL automations | 🔨 **Fully specced in `automations.md`** — A3 and A2 unblocked, build now · A1 waits on the form |
| 10 | **Loom capability pitch** — the hero deliverable | ⬜ Not started |
| 11 | Raven Day 5 walkthrough | ⬜ Not started |

---

## The business, in one paragraph (so you can re-enter cold)

**Trueline Roof Care**, Santa Rosa, Laguna. Diagnoses, repairs and maintains pre-painted
long-span GI roofs — and refuses to sell re-roofs. Also installs on new construction, quoted
free off the plans with a roofing takeoff. Founder **Rommel Bautista**, 19 years on roofs, nine
of them tearing off roofs that didn't need it. The promise: *the truth about your roof, in
writing, itemized, within 24 hours — even when the truth costs us the job.* Three segments:
homeowner (65%), multi-unit landlord (20%), new-build owner (15%), separated by a "What do you
need?" question that tags the lead and branches the follow-up.

---

## Live assets

**Repo:** https://github.com/kennbutchoigutierrez/trueline-capstone (public)
Connected to Vercel — every push to `main` redeploys the landing page. `vercel.json` sets
`outputDirectory` to `site`, so the deploy serves that folder from the repo root.

**Booking calendar:**
`https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi`
15 min · Mon–Sat 08:00–17:00 · Asia/Manila · 30-min slot interval · 2h notice · max 6/day ·
**platform default confirmation + reminders turned OFF** (the A2 automation owns those touches)

**Pipeline — `Trueline Roof Leads`**, 6 stages:
New Lead → Contacted → Call Booked → Assessment Done → Quote Sent → Won
Lost/nurture handled by opportunity **status** + tag `nurture-may`, not by extra stages.
Board totals: **₱970,700 open · ₱36,000 won · ₱182,000 lost** · 15 opportunities.
Non-open cards: Villanueva `Lost`, Sarmiento `Lost`, Cordero `Won`.

**Landing page** — ClickFunnels funnel `Trueline — Free Roof Check`, blank-page build.
URL: _not published yet_

---

## Resume instructions — landing page

Sections 1–4 are built (announcement bar, hero, the problem, what the free check includes).
**Next: Section 5, Rommel's story.**

Two ways to continue, both in `landing-page.md`:

1. **Combined prompt** — the "SINGLE COMBINED PROMPT" block. Edit its opening line from
   *"Sections 1 and 2 are already built"* to **"Sections 1 through 4 are already built. Build
   Sections 5 through 11."** and delete the Section 3 and Section 4 blocks from it before sending.
2. **Section by section** — use Prompt 0 (design system) first if it's a fresh conversation, then
   Prompts 3–9, which map to Sections 5, 6, 7, 8, 9, 10, 11.

Building the **cut version**: §8 Proof is one testimonial + the stat bar, §9 FAQ is three
questions. Everything else full.

**Before publishing:** all four CTAs → the calendar link · hero's "Building new?" link jumps to
the `plans` anchor in §7 · no blue · only Fraunces + Inter · no exclamation points · mobile pass
(H1 34px, H2 28px, 3-col rows stack) · test-book from a phone, then **delete the test contact**
so the pipeline board stays clean for filming.

---

## What's left, and the order

The dependency chain that must not be broken: **calendar → page → ads** and **emails →
automations**. Both halves of that are already respected below.

1. **Finish the landing page** (~40 min) → publish → paste URL into `brief.md` System links
2. ✅ **Instagram carousel — done, 9 slides.** Hook (founder story) + six signs + counterweight +
   CTA. Built as HTML/CSS with hand-drawn SVG cross-sections, rendered to PNG at 1080×1350 by
   headless Chrome. Source `carousel/slides/`, output `carousel/out/`, build sheet and caption in
   `carousel/carousel.md`. **Open item: the six per-symptom peso ranges are new numbers** — inside
   the published ₱6,500–₱75,000 band, but Rommel signs off before posting.
3. 🔨 **Facebook ad — everything but the clicking is done.** `facebook-ad.md` has four drafts
   (1 carousel + 3 single image, four hook angles), full primary text / headlines / descriptions,
   the carousel card map, a step-by-step Ads Manager walkthrough, and the draft-safety rules.
   Creative rendered at all three ratios: `carousel/out/` (4:5 feed), `carousel/out-square/`
   (1:1 carousel cards), `carousel/out-story/` (9:16 Stories + Reels).
   **Destination is live:** https://trueline-roof-care.vercel.app — deployed from
   `site/index.html` to Vercel production, verified public. Tagged UTM URLs per draft are in
   `facebook-ad.md`.
4. **Two HTML emails** (~45 min) — (a) *"Your roof check is booked"* confirmation, (b) *"6 signs
   it's a repair, not a re-roof"* nurture. Must exist before the automations can send them.
5. **Three automations in GHL** (~60 min):
   - **A1 Speed-to-Lead** — form submit → SMS + email inside 60s → 5-min call task → branch on
     segment tag → no booking in 24h send email #2 → no booking in 4 days second SMS → Lost +
     `nurture-may`
   - **A2 Confirm & Show-Up** — booking → stage to Call Booked → send email #1 → SMS 24h before →
     SMS 1h before → no-show fires a two-touch rescue back to Contacted
   - **A3 Quote Follow-Up** — stage to Quote Sent → day 3 "questions on the quotation?" → day 7
     the April-vs-August seasonal note → day 14 Lost + `nurture-may`
6. **Loom capability pitch** (~50 min) — the actual deliverable. Frame it at someone who might
   hire you: *"Bring me on and I'll set up your CRM, build the funnel, launch the ads that feed
   it, and wire the follow-up that runs on its own."*
7. **Raven Day 5 walkthrough** (~20 min) — behind-the-scenes update for the instructor, different
   from the Loom.

---

## Screenshots to capture (for the videos)

- [ ] Full pipeline board, all six columns, before automations start moving cards
- [ ] Booking widget as a visitor sees it
- [ ] Landing page — full desktop scroll + mobile
- [ ] Both HTML emails rendered in an inbox, not in the builder
- [ ] Each automation's workflow canvas
- [ ] Carousel slides and the FB ad mockup

---

## Things worth saying on camera (they're decisions, not accidents)

- **Lost isn't a stage.** Dead leads keep their stage and get a status + `nurture-may` tag, so the
  board shows *where* deals die rather than hiding them in a graveyard column.
- **Platform default notifications are off.** The branded sequence owns every touchpoint, so
  nobody gets two confirmations.
- **Not every email should be pretty.** Reminders are SMS in Taglish; only the confirmation and
  the nurture are designed HTML. Choosing that deliberately is the point.
- **One form segments three revenue lines** — homeowner repairs, recurring multi-unit contracts,
  new-build installs — and the follow-up branches on the tag.
- **The testimonials on the page use names from the pipeline** (Editha Lagman, Grace Tolentino,
  Paolo Sandoval). The page, the board and the emails are one consistent world.
- **The page publishes real prices.** Almost no contractor in this market does. That's a
  positioning decision, not a design one.
- **English body copy, Taglish in SMS and ad hooks** — how the market reads versus how it talks.

---

## File index

| File | What it's for |
|---|---|
| `brief.md` | Source of truth — identity, offer, promise, design system, never-use list, price list, system links |
| `plan.md` | Pipeline stages, page promise, email triage, automation sketches, time budget |
| `leads.md` | 15 seeded leads with full intake notes, human-readable |
| `leads-import.csv` | The GHL import file (contacts imported; opportunities entered manually) |
| `landing-page.md` | Full 11-section build sheet · cut version · combined prompt · section-by-section prompts · QA checklist |
| `ghl-form.md` | The segmentation form — field spec, the four dropdown values, why tagging lives in the workflow, extension prompt |
| `automations.md` | A1 A2 A3 — step-by-step, every SMS and email body, one extension prompt per workflow, build order and what blocks what |
| `PROGRESS.md` | This file — where you stopped and how to restart |
