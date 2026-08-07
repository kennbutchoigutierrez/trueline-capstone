# PROGRESS.md — Trueline Roof Care capstone

**Last worked:** 8 August 2026 · **Resume at:** Build the 4 ad drafts in Meta Ads Manager
(`facebook-ad.md`), then the two HTML emails

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
| 7 | Facebook ad draft | 🔨 **Copy + assets + walkthrough ready (`facebook-ad.md`). Build the 4 drafts in Ads Manager.** |
| 8 | Two pretty HTML emails | ⬜ Not started |
| 9 | Three GHL automations | ⬜ Not started |
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
| `PROGRESS.md` | This file — where you stopped and how to restart |
