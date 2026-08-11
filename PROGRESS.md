# PROGRESS.md — Trueline Roof Care capstone

**Last worked:** 11 August 2026 — **all four workflows built**, form built, field migrated
**Remaining:** test pass → form onto the landing page → Loom pitch → Raven walkthrough

**Next action:** the **test pass** in `automations.md` — one contact through all four workflows.
Every build step is done; nothing has ever fired. It closes the remaining verification items and
produces every screenshot the videos need. Shorten the waits from the table in that section, run
it, **restore every one**, delete the test contact.

**The one thing to watch in that run:** three of A1's four branches reach the 24h nurture by a
`Go to` jump rather than a drawn connector, because GHL won't let branches converge. Step 1 of
the run picks the multi-unit option precisely to prove that path. If the portfolio email lands
and the nurture never does, that's the cause.

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

## 1 · Part 5 state — four workflows

| Workflow | GHL id | State |
|---|---|---|
| **A1 — Speed-to-Lead** | `96922823-9be4-47e2-bae4-0faffb31a570` | ✅ built 11 Aug, all 14 steps |
| **A2 — Appointment Confirm & Show-Up** | `11f3fabb-…` *(partial — grab the rest)* | ✅ built |
| **A2b — No-Show Rescue** | `38080f50-6d24-4703-bc5f-2ec336f6f7b2` | ✅ built |
| **A3 — Quote Follow-Up** | `bd4487b1-a21c-43e4-8386-1418a62afece` | ✅ built |

All four in **Draft**. A3's canvas title reads `Trueline Roof - A3 — Quote Follow-Up`; it was
identified by content, which is the rule working.

⚠ **Identify workflows by id and canvas content, never by title.** A1's and A2's titles were
found attached to each other's workflows on 11 Aug — both contain an HTML email, so trusting
the titles would have damaged the wrong one. Renamed, but the habit stands.

**Three platform realities that reshaped the build**, all in `automations.md` and `ghl-form.md`:

- **SMS cannot send.** No number, and A2P/10DLC registration unstarted — a US carrier process
  measured in days. Five SMS steps stay on the canvas as designed; **email twins** carry A1's
  instant reply and A2's 24h reminder. The Part 5 brief specifies email-first anyway.
- **A1's trigger filter doesn't exist.** GHL offers no `is not empty` operator. A1 runs
  **unfiltered, deliberately** — the trigger is deleted when `Form Submitted` lands.
- **Custom field type is locked after creation.** The multi-select had to be replaced, not
  converted. Live field is **`contact.what_do_you_need_v2`**, single-select. The old
  `contact.what_do_you_need` is deleted.

## 1b · A1 — finished 11 Aug, and what the resume proved

**The interrupted session had saved nothing of the branch.** On reload the entire four-way
If/Else was missing — not a half-built branch 1, but no branch at all. All four were built
fresh, all fourteen steps now exist, settings are set, workflow is in Draft.

**Recording the stop as "unsaved, unconfirmed" rather than guessing is what made this safe.**
The dangerous case was a half-saved branch 1 that a rebuild would have silently duplicated.

**Three things the resume settled**, all detailed in `automations.md` → "A1 · Speed-to-Lead —
✅ built 11 Aug":

- **The four stored values are ordinary snake_case slugs of the sentence labels** —
  `my_house_has_a_leak_or_damage` and so on — not the long opaque strings three sessions of
  notes warned about. The one trap is the dropped apostrophe: `im_building_new_and_have_plans`.
- **GHL branches cannot converge by drag.** Three branches reach the shared Wait through the
  **`Go to` internal action**. The canvas *does* draw the jump, as dashed edges — confirmed in
  the screenshots — so nothing looks like a dead end on camera. The test pass still has to prove
  the jump executes. **Rename the three `Go to` steps before filming**; they all read `Go to`,
  so the canvas can't say what they target.
- **The three carried-over unknowns are clean:** Wait reads 24 hours, the 9 Aug branch
  inversion is still fixed, and email 2's HTML survived — wordmark as text, copper button.
  Read via side-panel preview only, so the screenshots are the second look.

### ✅ The steps that survived the interruption

| | |
|---|---|
| **Trigger swap — clean** | `Form Submitted` added, filtered to `Trueline — Roof Check Request`, verified saved, **then** `Contact Created` deleted. Only one trigger remains. Never a zero-trigger state |
| Old custom field | Deleted, after confirming both fields matched their descriptions. Only `contact.what_do_you_need_v2` remains |
| All four workflow titles | Renamed to match their contents |
| **Step 1** Send Email | `A1-EMAIL-instant`, subject `Got your roof check request`, body in, placed right after the trigger |
| **Step 2** Send SMS | `A1-SMS-1`, Taglish body, **saved with no error despite no number and no A2P** |
| **Step 3** Add Task | Added — two deviations, see below |
| **Step 4** Update Opportunity | Pipeline `Trueline Roof Leads`, stage `New Lead` |

**The trigger being clean was the good news.** That was the one item where a mid-build stop
could have left A1 double-firing or unable to fire at all, invisibly. It didn't.

### ✅ Built on the resume

Step 5's four-way branch — all four conditions from the picker, all four tags applied
(`repair` needed a second pass; the tag was missed the first time), plus the multi-unit and
new-build emails · steps 9–14 (Wait 3 days → If/Else on appointment → `A1-SMS-2` → Wait 1 day →
status `Lost` → tag `nurture-may`) · workflow settings, re-entry OFF and stop on reply ON ·
`A1-SMS-2` saved clean with no number, like the other four SMS steps.

### ⚠ Two deviations awaiting sign-off

**1 · The task is assigned to Peter Gutierrez, not Rommel.** No `Rommel` user exists in this GHL
account — Rommel is the demo business's founder, not a seat someone paid for. Peter Gutierrez is
the only real user. **Accepted:** in a live engagement you'd create the user; on a demo
sub-account you assign to whoever exists. Worth naming on camera rather than hiding.

**2 · "Due in 5 minutes" is not expressible.** GHL's task due-date offers Days/Weeks/Months/Years
plus a fixed time-of-day — no minutes, no hours. Set to `0 Days` + `1:01 PM`. **Consequence:** a
lead arriving after 1:01 PM gets a task that reads overdue the moment it's created. **Accepted,
and arguably correct** — an overdue speed-to-lead task sorts to the top of the queue, which is
where it belongs. The real 60-second promise is carried by the instant email, not the task; the
task is a human nudge.

**Now obtained:** A2b and A3's workflow ids, after being clipped from three reports in a row.
Only A2's full id is still partial.

**The prompt pattern that works** — established across six tasks today, and worth reusing:

1. **Point at the raw GitHub URL**, never inline the content
2. **Pre-authorise everything that will look like a mistake**, or it stops to query each one:
   *add the SMS step even though it cannot send · delete the other trigger · edit in place, do
   not rebuild · the key is the `_v2` one*
3. **Name a stop condition** rather than a blanket "check with me" — "delete it if it matches
   this exactly; stop and show me if anything differs" saves a round trip without losing the
   safety
4. **End with a numbered report-back list**, and ask for critical strings as plain lines

**It reads the file back to you before acting** and refuses to execute web-content instructions
without an explicit go-ahead. That costs one round trip and is worth it — it caught the swapped
workflow titles, the locked field type and the key collision, and was right all three times.

5. **When the readback is the cost, invert the paste: instructions inline, data by URL.** The
   A1 resume paste (paste 4 in `automations.md`) carried the steps in the message and used the
   raw file only for the four message bodies, so there was nothing web-sourced to authorise.
   **It ran the whole remaining workflow in one message with no round trip** — and still
   self-corrected the missed `repair` tag and reported the `Go to` constraint it wasn't asked
   about. Pre-authorising the three things that look like mistakes, and naming three stop
   conditions instead of a blanket "check with me," is what let it run unattended.

## 2 · The segmentation form — ✅ built

Form `Trueline — Roof Check Request`, embed id **`ys8URRJqtAmloGrhk5lo`**. Four standard
fields, the v2 dropdown at position 5, the free-text field, redirect to the booking calendar,
brand styling applied. Not published to any funnel.

**Still to do: paste the embed into `site/index.html` above the final CTA at ~line 586** (the
copper band). Give the iframe a `min-height` — `height:100%` with `data-height="undefined"`
collapses to a zero-height box until `form_embed.js` resizes it. That push also gives the
first real proof the dropdown renders single-select to a visitor.

## 3 · The test pass — the last real build step

**→ `automations.md` → "The test pass".** One contact submits the form, books, no-shows, and
moves to `Quote Sent`, walking through all four workflows in sequence.

**Publishing is safe now, and wasn't before.** The never-publish rule existed because an
unfiltered `Contact Created` would fire A1 on a re-import of the 15 seeded leads. `Form
Submitted` removes that — a CSV import doesn't submit a form.

Shorten the waits from the table in that section, run it, **restore every one**, delete the
test contact. Grab the screenshots while it's mid-flight; that's the only window they exist in.

## 3b · Meta Ads Manager — still open from Part 3

Campaign and ad set exist. Draft 1 `six-signs-carousel` has its five cards, headlines and
descriptions; still needs primary text, URL, display link, the Stories 9:16 swap, and
save-as-draft. Drafts 2–4 not started — duplicate draft 1 at ad level three times and swap
creative and copy. **Everything paste-ready is in `ad-drafts.md`.** Never click Publish; close
with **X → Save as draft**.

## 4 · Then the two videos

Loom capability pitch (the hero deliverable) and the Raven Day 5 walkthrough. Screenshot
list is further down this file.

---

## The architecture gap — closed in GHL, one push from closed on the page

**Was:** every CTA in `site/index.html` linked straight to the booking widget, so a visitor who
didn't book never became a contact — which left A1's nurture with no real audience and made the
four-way segment branch unrunnable.

**Now:** the form exists and the segmentation field is single-select. A1's trigger becomes
`Form Submitted`, and the branch reads `contact.what_do_you_need_v2`.

**One step remains:** paste embed `ys8URRJqtAmloGrhk5lo` into `site/index.html` above the final
CTA (~line 586) with a `min-height`, and push. Until then the live page still has no form, so
the gap is closed in GHL and open on the web.

**Still true and still the reason any of this matters:** without the form, every segment gets
the homeowner nurture, and a landlord with twelve roofs receives an email about one ceiling
stain. Details in `ghl-form.md`, including why tagging lives in the workflow rather than the
form — GHL cannot tag per dropdown option.

---

## Session logs

- [`sessions/2026-08-11.md`](sessions/2026-08-11.md) — Part 5. Four workflows built, the form and
  its field migration, and the five written specs that met the live GHL UI and lost — every one
  a silent failure.
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
| 5 | Landing page | ✅ **Done — hand-built HTML on Vercel.** ClickFunnels abandoned, see below |
| 6 | Instagram carousel | ✅ **Done — 9 slides, rendered to `carousel/out/`** |
| 7 | Facebook ad draft | 🔨 Assets + copy done (`ad-drafts.md`) · campaign + ad set built · draft 1 part-built, drafts 2–4 to go |
| 8 | Two pretty HTML emails | 🔨 Both built · **email 1 live in GHL, test arrived styled** · email 2 still to paste into A1 |
| 9 | Three GHL automations | ✅ **All four built 11 Aug** (A1, A2, A2b, A3) · none has ever fired — the test pass is what makes them real |
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

**Landing page** — hand-built HTML, `site/index.html`, deployed to
https://trueline-roof-care.vercel.app. Live and public.

---

## The landing page — ClickFunnels abandoned, kept on the record

**What shipped:** a hand-built HTML page in `site/index.html`, deployed to Vercel, live at
https://trueline-roof-care.vercel.app. Every push to `main` redeploys it.

**What was abandoned:** the ClickFunnels funnel `Trueline — Free Roof Check`, a blank-page
build that reached Sections 1–4 (announcement bar, hero, the problem, what the free check
includes) and was never published. `plan.md` still records the original decision as
*"RESOLVED — ClickFunnels, per Part 2 instructions"*; that decision was reversed in practice.

**Kept deliberately, not deleted.** The abandoned track stays documented because it is part of
the build history, because `landing-page.md`'s section prompts and QA checklist still describe
the page that actually shipped, and because the partial funnel may still exist in the
ClickFunnels account — an unpublished draft nobody remembers is exactly the kind of thing that
resurfaces later. If that account is being decommissioned, delete the funnel there rather than
just the note here.

**The QA rules still apply to the HTML page and are still worth checking before filming:** all
CTAs point at the calendar link · the hero's "Building new?" link jumps to the `plans` anchor ·
no blue anywhere · only Fraunces + Inter · no exclamation points · mobile pass (H1 34px, H2
28px, 3-col rows stack) · test-book from a phone, then **delete the test contact** so the
pipeline board stays clean.

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
