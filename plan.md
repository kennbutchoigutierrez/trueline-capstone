# plan.md — TRUELINE ROOF CARE: system build plan

> Rough map before touching any platform. Pulls from [brief.md](./brief.md).
> Refined as we build. Nothing here is precious except the page promise.

---

## 1. Pipeline stages

**Pipeline name:** `Trueline Roof Leads`
**6 stages.** Lost and nurture are handled by opportunity *status* plus a tag — not by extra
stages — because a lead who says "not yet" isn't at a different step in the process, they're
paused at the step they were on. Keeping that out of the stage list keeps the board readable.

| # | Stage | What it means | Enters when | Leaves when | Automation that fires |
|---|---|---|---|---|---|
| 1 | **New Lead** | Form submitted, nobody has spoken to them | Landing page form submit | First real contact made | ⚡ **A1 Speed-to-Lead** |
| 2 | **Contacted** | Reached by call, SMS, or Viber. No booking yet | Rommel connects, or lead replies | They book a slot | A1 continues (24h + 4-day touches) |
| 3 | **Call Booked** | 15-min Roof Check call on the calendar | Calendar booking confirmed | Call happens | ⚡ **A2 Confirm & Show-Up** |
| 4 | **Assessment Done** | On-site inspection complete, **or** takeoff done from plans | Site visit / plan review finished | Quotation goes out | — (manual: report prep) |
| 5 | **Quote Sent** | Itemized written quotation delivered, 15-day validity | Quote emailed | They accept, decline, or go quiet | ⚡ **A3 Quote Follow-Up** |
| 6 | **Won** | Repair scheduled, care plan signed, or install contracted | Deposit or signed quote | — | ✳️ stretch: onboarding + review request |

**Lost / nurture handling:** opportunity status → `Lost`, plus tag `nurture-may` so the whole
cohort gets re-approached in May, right before the rains. The lead stays visible in whichever
stage it died in, which makes the board honest about *where* things fall apart.

**Board seeding for the demo — 15 opportunities**

| Stage | Count | Segment mix | Notes |
|---|---|---|---|
| New Lead | 4 | 3 homeowner, 1 new-build | 2 came in today, timestamps recent |
| Contacted | 3 | 2 homeowner, 1 multi-unit | 1 marked **Lost** + `nurture-may` |
| Call Booked | 3 | 2 homeowner, 1 new-build | shows the calendar working |
| Assessment Done | 2 | 1 homeowner, 1 multi-unit | one is a takeoff, one an inspection |
| Quote Sent | 2 | 1 homeowner, 1 new-build | 1 marked **Lost** (went with a cheaper crew) |
| Won | 1 | 1 multi-unit — 24-unit care plan | the recurring-revenue win, on purpose |

Opportunity values follow the brief's price list: homeowner repairs ₱9k–48k, care plans ₱8.5k,
multi-unit plans ₱18k–36k/yr, new-build installs ₱140k–520k. Board total should read like a real
month — roughly ₱900k–1.1M in open pipeline. Full lead roster gets written at build time.

---

## 2. The page promise

**One promise (from brief.md):** *We will tell you the truth about your roof — in writing,
itemized, within 24 hours — even when the truth costs us the job.*

**The headline idea the page leads with:**

> ### You were quoted ₱380,000. Let's find out if you needed to be.

Everything above the fold serves that one sentence: a suspicious homeowner holding a padded
quote, offered a free itemized second opinion in writing within 24 hours. The proof point
directly beneath it is **7 out of 10 roofs we're called to replace, we repair instead.**

**Page section order:**
1. **Hero** — headline, subhead, primary CTA *Book a free roof check*, trust strip (PCAB · DTI · 340+ Laguna roofs · report in 24h)
2. **The problem** — what happens after a habagat: the door knock, the one-number quote, the ₱380k
3. **What you get, free** — 18-point inspection · itemized written quotation in 24h · straight answer. *Building new? Send the plans, we'll do the takeoff free.*
4. **Rommel's story** — the Cabuyao house, ₱410,000 signed, clean purlins underneath, ₱6,000 of actual work needed. Photo of hands on a panel.
5. **Real prices, published** — repairs, repaint, care plans, new install per sqm, and the three ways to buy. Nobody in this market publishes numbers.
6. **Who we're for** — three cards: my house · my apartments · my new build. Each links the same form with a different pre-selected need.
7. **Proof** — 3 short testimonials with a peso figure in each, plus the 7-in-10 stat restated
8. **FAQ** — the objection table from the brief, verbatim: *bakit libre · bait-and-switch · legit ba · magkano talaga · ayoko ng estranghero sa bubong ko*
9. **Final CTA + form** — book the call, or leave a number for a callback
10. **Footer** — Santa Rosa address, PCAB and DTI numbers, service areas listed by name

---

## 3. Emails we might want

Rough list. Two get built as **pretty HTML** (the bar requires 1–2); the rest stay SMS or plain
text, and that's a deliberate choice — a booking reminder that arrives as a designed HTML email
is worse than one that arrives as a text.

| # | Email | Trigger | Build as | Priority |
|---|---|---|---|---|
| 1 | **"Your roof check is booked"** — what happens on the call, what to have ready (photo of the ceiling stain, the other contractor's quote, or the roof plan), the 24-hour itemized quotation promise | Calendar booking | 🎨 **Pretty HTML** | **Build today** |
| 2 | **"6 signs it's a repair, not a re-roof"** — nurture for people who landed and didn't book; same spine as the carousel so the system speaks with one voice | No booking 24h after form | 🎨 **Pretty HTML** | **Build today** |
| 3 | Reminder — 24h before, then 1h before | Appointment timer | SMS, Taglish | Build today (inside A2) |
| 4 | "Here's your itemized quotation" — delivery email with the PDF attached, 15-day validity stated | Manual, stage → Quote Sent | Plain + attachment | Sketch only |
| 5 | "Any questions on the quotation?" | Day 3 in Quote Sent | Plain, short | Build today (inside A3) |
| 6 | "April vs. August" — flat seasonal note on cost of waiting | Day 7 in Quote Sent | Plain, short | Build today (inside A3) |
| 7 | No-show rescue — "the slot's still yours" | No-show detected | SMS + plain email | Build today (inside A2) |
| 8 | Pre-rainy-season re-approach — the whole `nurture-may` cohort | May 1 campaign | Pretty HTML | ✳️ Stretch |
| 9 | New-build plan-upload request | Tag = `new-build` | Plain, short | Build today (inside A1 branch) |

---

## 4. Automations we might want

Three get built properly. Loose sketches for now — designed in detail at the build step.

**A1 · Speed-to-Lead** — *the one that makes the whole thing look alive*
Form submit → SMS within 60 seconds (Taglish, from Rommel, not a brand) → confirmation email →
task assigned to Rommel: call in 5 minutes → **branch on segment tag:** `new-build` gets a
plan-upload request, `multi-unit` gets the portfolio note, everyone else continues → no booking in
24h, send email #2 → no booking in 4 days, second SMS → status `Lost` + tag `nurture-may`.

**A2 · Confirm & Show-Up** — *the one that protects the calendar*
Booking confirmed → move to **Call Booked** → send pretty email #1 → SMS 24h before → SMS 1h
before → if no-show: two-touch rescue, then back to **Contacted**. If attended → move to
**Assessment Done** and create the report task.

**A3 · Quote Follow-Up / Stall-Breaker** — *the one that recovers money*
Stage → **Quote Sent** → day 3 "any questions on the quotation?" → day 7 the April-vs-August note
→ day 14 status `Lost` + tag `nurture-may`, quote validity noted as expired.

**Stretch, only if time allows:**
- **A4 Won onboarding** — schedule confirmation, what to expect on crew day, review request 3 days after completion
- **A5 May re-approach campaign** — the `nurture-may` cohort, one pretty email before the rains
- **Make scenario** — when tag = `new-build`, create a Drive folder for the plan set, add a row to a "Takeoff Queue" sheet, and notify. Small, cheap, and it demonstrates the connective-tissue skill the capstone lists.

---

## 5. Form, tags, calendar

**Form fields** (short — every field costs conversions):
name · mobile · email · **"What do you need?"** (Leak or damage · Maintenance plan · Apartment or
multi-unit · New build, have plans) · city (dropdown: Santa Rosa, Biñan, Cabuyao, Calamba, San
Pedro, Los Baños, Sta. Cruz, other) · optional: "what did another contractor quote you?"

That last field is optional and worth including — it segments the hottest leads instantly.

**Tags on submit:** `repair` · `care-plan` · `multi-unit` · `new-build`, plus a city tag.
**Custom fields:** quoted amount, roof age, roof area (sqm), units (multi-unit), plan-set link.

**Calendar:** `15-min Roof Check Call` · Mon–Sat 8:00–17:00 PHT · 15-min slots, 15-min buffer ·
max 6/day · 2-hour minimum notice · confirmation + reminders handled by A2, not by the calendar's
own defaults.

---

## 6. Wiring map — build in this order, nothing points at a ghost

```
     [1] brief.md ✅
          │
     [2] Calendar  ──────────────┐
          │                      │
     [3] Pipeline (6 stages)     │
          │  + 15 seeded leads   │
          ▼                      ▼
     [4] Landing page ── book-a-call button → calendar
          │  + form → tags → pipeline stage 1
          ▼
     [5] IG carousel (8 slides) + FB ad draft → landing page URL
          │
     [6] HTML emails ×2  (must exist before automations can send them)
          ▼
     [7] Automations A1 A2 A3 → send those emails, move those stages
          ▼
     [8] LOOM capability pitch  ← the actual deliverable
          ▼
     [9] Raven Day 5 walkthrough
```

---

## 7. Open decisions

1. ~~Landing page: HTML or ClickFunnels?~~ **RESOLVED — ClickFunnels**, per Part 2 instructions.
   Copy and styling get specced here, built in the CF editor.
2. **Does Make earn its place?** Not required by the bar. The `new-build` plan-set scenario is
   the only one that isn't decoration.
3. **Carousel slide count:** 8 planned. 6 would build faster and still read complete.

---

## 8. Time budget for what's left

| Block | Est. |
|---|---|
| Calendar + pipeline + 15 seeded leads | 75 min |
| Landing page | 60 min |
| Carousel (8 slides) + FB ad draft | 60 min |
| 2 pretty HTML emails | 45 min |
| 3 automations in GHL | 60 min |
| **Loom pitch** (script + record) | 50 min |
| Raven walkthrough | 20 min |
| Buffer | 30 min |

The Loom is the deliverable. If something has to be cut, it comes out of the carousel or the
stretch automations — never out of the pitch.
