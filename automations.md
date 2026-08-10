# automations.md — the three GHL workflows

Build sheet for A1, A2 and A3. Specs come from `brief.md` and `plan.md`; this file turns them
into steps you can build, message copy you can paste, and three prompts for the Claude browser
extension.

**Build order here is not the numbering order.** A2 and A3 depend on nothing that doesn't
already exist. A1 depends on the form in `ghl-form.md`. So:

| Order | Workflow | Blocked by |
|---|---|---|
| 1 | **A3 Quote Follow-Up** | nothing — build it now |
| 2 | **A2 Confirm & Show-Up** | nothing — already exists with email 1 in it, needs extending |
| 3 | **A1 Speed-to-Lead** | **the form** — needs `Form Submitted` + the custom field key |

---

## ⚠ SMS cannot send from this sub-account — checked 10 Aug

**No phone number is provisioned**, and the harder blocker sits behind it: **A2P/10DLC brand
and campaign registration is unstarted** in Trust Center. That is a US carrier compliance
process measured in days, and it gates sending even once a number exists. Telephony runs on
LC Phone, and provider settings are agency-owner-only — this is ARCA's sub-account, so
provisioning is neither free nor Kenn's to do.

**Five steps are affected:** A1-SMS-1, A1-SMS-2, A2-SMS-24h, A2-SMS-1h, A2-SMS-noshow.
**A3 is untouched** — it is email-only, which is part of why it is first in the build order.

**Build the SMS steps anyway.** They cost nothing, they show the designed system on the
canvas, and GHL generally lets you add and configure a Send SMS action with no number
attached — it fails at send time, not at build time. If it refuses outright, note it and move
on.

**Then add an email twin for the two touches that must actually land**, so each workflow has
something that fires when test-published: A1's instant reply and A2's 24h reminder. The Part 5
brief anticipates exactly this — *"auto-send an email (and a text too, if your sub-account has
a phone number set up)"* — so email-first speed-to-lead is the specified path, not a fallback.

**Worth saying on camera.** "The SMS layer is built and sitting behind A2P registration, a US
carrier requirement that catches every new sub-account including a Philippine business on LC
Phone" is a sentence that reads as platform fluency rather than an excuse.

---

## Rules that apply to all three

**Never publish.** Every workflow stays in **Draft** until the whole system is filmed. A
published workflow with 15 seeded contacts in the pipeline will fire on people who don't exist
and burn the demo board.

**Every trigger needs a filter.** Un-filtered triggers are the standard way these blow up:

- `Contact Created` with no filter fires on a CSV re-import — all 15 seeded leads at once
- `Stage Changed` with no filter fires when *any* opportunity moves, in any pipeline
- Appointment triggers with no calendar filter fire on every calendar in the sub-account

Filters are specified per workflow below. Don't skip them because it's a draft — drafts get
published later by someone who forgot.

**Workflow settings, all three:** allow re-entry **off**, stop on reply **on** for anything with
SMS in it. Someone who replies "tumawag ka na lang bukas" should not keep receiving the sequence.

**Sender identity.** SMS comes from Rommel, not from a brand name. The whole voice depends on it
reading like a person who happens to know roofs.

**Test, then clean up.** Test every workflow against one contact you created yourself, then
delete that contact. The pipeline board gets filmed.

---

## Message copy — all of it, in one place

Paste from here. Nothing below uses an exclamation point, ALL CAPS, or deep formal Filipino, per
the never-use list in `brief.md`.

Booking link used throughout:
`https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi`

> **Merge fields:** pick these from GHL's own merge-field picker rather than trusting the
> spelling below. `{{contact.first_name}}` is reliable; appointment fields vary by GHL version,
> and a merge field that doesn't resolve ships the raw `{{...}}` to a customer.

### A1 messages

**A1-SMS-1 — within 60 seconds of form submit** (~230 chars)

```
Hi {{contact.first_name}}, si Rommel ito from Trueline Roof Care. Nakuha ko yung request mo
for a free roof check. Tatawagan kita in about 5 minutes — kung busy ka, reply lang and I'll
call later. Pwede ka rin pumili ng oras dito:
https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi
```

**A1-SMS-2 — day 4, still no booking** (~250 chars)

```
{{contact.first_name}}, si Rommel ulit from Trueline. Hindi pa tayo nagkakausap tungkol sa
bubong mo. Libre yung inspection at walang obligasyon — kung ayos naman ang lahat, yun ang
sasabihin ko sa iyo. 15 minutes lang:
https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi
```

**A1-EMAIL-nurture — 24h, no booking** → paste `emails/email-2-nurture.html`
Subject: `Six signs it's a repair, not a re-roof`

**A1-EMAIL-newbuild — `new-build` branch, plain text, sent immediately after SMS 1**
Subject: `Send us the plans and we'll start the takeoff`

```
Hi {{contact.first_name}},

You mentioned you're building. Send the roof plan — a PDF, a CAD file, or clear photos of
the printed sheet all work — and we'll start the takeoff before we even talk.

What comes back: sheet count, purlin runs, fasteners, accessories, wastage allowance, labor,
and price per square meter. Each on its own line. Normally ₱3,500. Free.

Reply to this email with the plans attached, or bring them to the call.

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
```

**A1-EMAIL-multiunit — `multi-unit` branch, plain text, sent immediately after SMS 1**
Subject: `Twelve roofs, one schedule, one report`

```
Hi {{contact.first_name}},

Several roofs is a different problem from one roof. It isn't an emergency — it's a budget
line and a tenant complaint in July.

How we handle it: every roof inspected twice a year, before and after the rains. A written
report per building, not one report for the property. Canal clearing and minor fixes
included. 48-hour response during rainy season.

₱1,500 per unit per year, minimum 8 units. Per-unit beats our single-home plan because one
trip covers a dozen roofs.

The first two building assessments are free. On the call, tell me how many units and how old
the roofs are and I can give you a real number.

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
```

### A2 messages

**A2-EMAIL-1 — on booking** → `emails/email-1-booked.html` — **already live in A2.**
Subject: `Your roof check is booked`

**A2-SMS-24h** (~250 chars)

```
{{contact.first_name}}, reminder: roof check call natin bukas, {{appointment.start_time}}.
15 minutes lang. Kung may photo ka ng ceiling stain, o quote galing sa ibang contractor, o
roof plan — ihanda mo. Malaking tulong yun. — Rommel, Trueline
```

**A2-SMS-1h** (~180 chars)

```
Isang oras na lang, {{contact.first_name}}. Tatawagan kita around {{appointment.start_time}}.
Kung hindi maganda ang timing, reply lang and we'll move it. — Rommel
```

**A2-SMS-noshow — 15 min after the slot** (~230 chars)

```
{{contact.first_name}}, tinawagan kita para sa roof check pero hindi tayo nagkaabot. Walang
problema. Nandito pa rin yung slot mo — pili ka lang ng bagong oras:
https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi
— Rommel
```

**A2-EMAIL-noshow — next day, plain text**
Subject: `The slot's still yours`

```
Hi {{contact.first_name}},

We missed each other yesterday. Nothing owed, nothing expired — the free inspection and the
itemized quotation in 24 hours are still on the table.

It's 15 minutes on the phone. No ladder, no stranger on your roof, no obligation to do
anything afterward.

Pick a time: https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
```

### A3 messages

**A3-EMAIL-day3 — plain text**
Subject: `Any questions on the quotation?`

```
Hi {{contact.first_name}},

Sent your quotation three days ago. Any line on it you want explained, ask me — including the
ones that make us look expensive.

The most common question: why the gauge matters. 0.4mm and 0.5mm look identical on paper and
about eight years apart on a roof. If that line is what you're weighing, call me and I'll walk
you through it in five minutes.

Yours to keep and yours to compare against any other contractor. That's what itemized is for.

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
```

**A3-EMAIL-day7 — plain text**
Subject: `April or August`

```
Hi {{contact.first_name}},

A flat note about timing, no pressure attached.

Dry months are February to May. That's the only sane window to open up a roof and fix it
properly. Habagat starts in June, then the typhoons.

The same work is one job in April and a different job in August. In August we're tarping in
the rain, working around weather days, and whatever's leaking has had three more months to
get into the ceiling.

We can fix this in April for what the quotation says, or we can do it in August for more.
That's the whole message.

Your quotation is valid 15 days — steel prices move and we won't pretend otherwise. Say the
word before then and it holds.

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
```

**A3-EMAIL-day14 — plain text, optional but recommended**
Subject: `Closing this out`

```
Hi {{contact.first_name}},

I'll stop following up on the quotation — it's past its 15-day validity now, so the numbers
would need refreshing anyway.

No hard feelings and no sales pitch at the end of this. If the roof gets worse, or you want
the numbers redone before the rains, reply to this email and I'll pick it straight back up.

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
```

---

## A3 · Quote Follow-Up — build this first

The simplest of the three, and it's the one that recovers money. Nothing blocks it.

**Trigger:** `Opportunity Stage Changed`
**Filters:** pipeline `Trueline Roof Leads` · to stage `Quote Sent`

```
Stage → Quote Sent
  └─ Wait 3 days ─────► A3-EMAIL-day3
       └─ If/Else: stage still = Quote Sent?
            ├─ no  → end (they moved to Won, or someone marked it Lost)
            └─ yes → Wait 4 days ──► A3-EMAIL-day7
                 └─ If/Else: stage still = Quote Sent?
                      ├─ no  → end
                      └─ yes → Wait 7 days
                           └─ A3-EMAIL-day14
                              Opportunity status → Lost
                              Add tag: nurture-may
```

The stage re-check before each send is the part that matters. Without it, a customer who
already said yes gets a "still thinking about it?" email on day 7 — the single most common way
these sequences embarrass the business.

**Waits are 3 / 4 / 7** because they're cumulative: day 3, day 7, day 14.

### Prompt for the extension — A3

> I'm in GoHighLevel, in Automation. Build me a workflow. Do it directly if this page allows,
> otherwise walk me through it step by step.
>
> **Name:** `A3 — Quote Follow-Up`
> **Leave it in Draft. Do not publish it.**
>
> **Trigger:** Opportunity Stage Changed
> Filters — pipeline: `Trueline Roof Leads`, moved to stage: `Quote Sent`. Both filters are
> required; do not create the trigger without them.
>
> **Then, in order:**
>
> 1. **Wait** 3 days
> 2. **Send Email** — subject `Any questions on the quotation?`, plain text, body below
> 3. **If/Else** — condition: opportunity stage **is** `Quote Sent`
>    - If **no** → end the workflow on that branch
>    - If **yes** → continue to step 4
> 4. **Wait** 4 days
> 5. **Send Email** — subject `April or August`, plain text, body below
> 6. **If/Else** — condition: opportunity stage **is** `Quote Sent`
>    - If **no** → end
>    - If **yes** → continue
> 7. **Wait** 7 days
> 8. **Send Email** — subject `Closing this out`, plain text, body below
> 9. **Update Opportunity** — status → `Lost`
> 10. **Add Tag** — `nurture-may`
>
> **Workflow settings:** allow re-entry OFF.
>
> The three email bodies are in
> https://raw.githubusercontent.com/kennbutchoigutierrez/trueline-capstone/main/automations.md
> under "A3 messages" — read that file and use them exactly as written. Do not rewrite,
> shorten, or add an exclamation point. Use GHL's own merge-field picker for
> `{{contact.first_name}}` rather than typing it.
>
> **Then tell me:** whether all three If/Else conditions saved with the stage filter attached,
> and any error exactly as shown.

---

## A2 · Confirm & Show-Up — extend what exists

**This workflow already exists** with email 1 in it and a test that arrived styled. You're
adding to it, not rebuilding it. Don't recreate it — you'll end up with two.

**Trigger:** `Appointment Booked` (already in place)
**Filter to add if it isn't there:** calendar = `15-min Roof Check Call`

```
Appointment booked
  ├─ Move opportunity → Call Booked
  ├─ A2-EMAIL-1  ◄── already built
  ├─ SMS 24h before appointment ──► A2-SMS-24h
  ├─ SMS 1h before appointment ───► A2-SMS-1h
  └─ Appointment status = no-show
       ├─ Wait 15 min ──► A2-SMS-noshow
       ├─ Wait 1 day ───► A2-EMAIL-noshow
       └─ Move opportunity → Contacted
```

**The 24h and 1h reminders use appointment-relative waits**, not fixed delays — GHL's Wait step
has an "until X before appointment time" mode. A fixed 24-hour wait from booking sends the
reminder at the wrong moment for anyone who books three days out, which is most people.

**The no-show branch is a separate trigger in most GHL versions** — `Appointment Status
Changed` → `No Show`. If it can't live in the same workflow, build it as `A2b — No-Show
Rescue` and say so; two workflows that each do one thing beat one that half-does both.

**Attended path:** deliberately left manual. Rommel moves the card to `Assessment Done` himself
after the call, because "attended" in GHL means the appointment status was updated, which only
happens if someone updates it. Automating off a field nobody fills in produces a board that
lies. Worth saying on camera.

### Prompt for the extension — A2

> I'm in GoHighLevel, in Automation. There's an **existing** workflow called
> `A2 — Appointment Confirm & Show-Up` that already has an Appointment Booked trigger and one
> Send Email step. **Open that one and add to it. Do not create a new workflow.**
> **Leave it in Draft. Do not publish it.**
>
> First, check the trigger has a calendar filter set to `15-min Roof Check Call`. Add it if
> it's missing.
>
> **Add these steps:**
>
> 1. **Update Opportunity** — move stage to `Call Booked`, pipeline `Trueline Roof Leads`.
>    Put this BEFORE the existing Send Email step.
> 2. After the existing email: **Wait** — until **24 hours before** the appointment start time.
>    Use the appointment-relative wait mode, not a fixed 24-hour delay.
> 3. **Send SMS** — body below, labelled A2-SMS-24h
> 4. **Wait** — until **1 hour before** the appointment start time
> 5. **Send SMS** — body below, labelled A2-SMS-1h
>
> **Then the no-show rescue.** If GHL lets an `Appointment Status = No Show` branch live in
> this same workflow, add it here. If it needs its own workflow, create one named
> `A2b — No-Show Rescue`, also in Draft, and tell me you did. Either way the steps are:
>
> 1. **Wait** 15 minutes
> 2. **Send SMS** — body below, labelled A2-SMS-noshow
> 3. **Wait** 1 day
> 4. **Send Email** — subject `The slot's still yours`, plain text, body below
> 5. **Update Opportunity** — move stage back to `Contacted`
>
> **Workflow settings:** allow re-entry OFF, and **stop on reply ON** (this one has SMS in it —
> someone who texts back should not keep getting reminders).
>
> All message bodies are in
> https://raw.githubusercontent.com/kennbutchoigutierrez/trueline-capstone/main/automations.md
> under "A2 messages" — read that file and use them exactly. Do not rewrite or add exclamation
> points. For the appointment time merge field, use **GHL's own merge-field picker** — don't
> type what's in my file, the exact token varies by version and a broken one ships raw
> `{{...}}` to a customer.
>
> **Then tell me:**
> 1. Whether the two waits saved as appointment-relative or fell back to fixed delays
> 2. The exact appointment-time merge field token you ended up using
> 3. Whether the no-show branch went in this workflow or needed its own
> 4. Any error exactly as shown

---

## A1 branch logic — verified live, 10 Aug

The audit's If/Else fix was confirmed in the GHL canvas on 10 August. Current stand-in reads:

```
Contact Created (no filter)
  └─ Wait
       └─ If/Else: Last appointment is empty
            ├─ condition met (never booked) → Send email 2   ✅ correct
            └─ else            (they booked) → END           ✅ correct
```

That is the corrected orientation — the nurture reaches non-bookers, and someone who already
booked doesn't get an email telling them to book. **Still open on it:** the trigger has no
filter (see below — the intended one turned out not to be buildable), and the Wait duration
wants an eyeball to confirm it reads 24 hours rather than the 1-minute test value.

Scope check: this stand-in is roughly a fifth of A1. SMS 1, the 5-minute call task, the
four-way segment branch, the day-4 SMS and the Lost close all arrive with the form rebuild.

---

## What the 9 Aug A1 audit found

A1 was inspected step by step on 9 August. **One real defect**, not visible from the canvas
at a glance.

**The If/Else branches were inverted.** The condition read `Last appointment at` **is empty**
— which is true for people who did *not* book. That branch went to `END`, and the else branch
sent the nurture email. So the email went to everyone who **had** booked, and the people it
was written for got nothing.

Fixed: the Send Email step moved onto the condition-met branch, `END` onto the else branch,
condition left untouched.

**The Wait was found at 1 minute. That was deliberate — a test value Kenn set to avoid
waiting a day between runs, not a mistake.** It has since been set to 24 hours. If A1 is
being tested again, put it back to 1 minute; the A1 rebuild prompt below specifies 24 hours,
so it lands correct at build time either way.

**One consequence worth knowing: any A1 test run before 9 Aug was reading the inverted
branch.** Testing the normal way — create a contact, don't book — would have hit `END` and
sent nothing, which looks like "the workflow isn't firing" rather than "the branches are
backwards." If a test seemed not to work, that's why.

**Still the argument for the never-publish rule** — the inversion sat in the draft for two
sessions and nothing on the canvas looked wrong. Worth saying on camera.

**Also established in that audit:**

- **Email 2 was already pasted and intact.** The earlier note calling it unpasted was stale.
  Verified against `emails/email-2-nurture.html`: hidden preheader, live-text masthead, the
  `Before you sign anything` eyebrow, the `Book a 15-minute roof check` copper CTA, and the
  footer wordmark all present.
- **The custom field `What do you need?` already exists** in the sub-account — it appears in
  the Contact Created trigger's filter list. Its four option values and internal key still
  need reading; if they match `repair` / `care-plan` / `multi-unit` / `new-build`, the form
  build in `ghl-form.md` reuses this field instead of creating one.
- **There is no `Contact Source` filter** on the Contact Created trigger. Available filters:
  Contact type, Email, Phone, Tag, plus custom fields. **Custom fields are selectable but
  offer no emptiness operator** — confirmed live 10 Aug, see the section below.

### The interim trigger filter — decided 9 Aug, overturned 10 Aug

**The decision was: filter `Contact Created` on `What do you need?` is not empty.** The
reasoning was sound — it fires A1 only for someone who told us what they need, which is the
form-submitter population the workflow is for, and it holds against both failure modes:

- **CSV re-import** — `leads-import.csv` has no `What do you need?` column (checked: its
  headers are name, contact, city, tags, pipeline, stage, opportunity, source, intake note),
  so a re-import cannot populate the field and cannot fire A1 on the 15 seeded leads.
- **Calendar bookings** — the booking widget doesn't populate it either, so a booking no
  longer starts A1. Correct: A2 owns bookings.

**It is not buildable.** Checked live in the trigger on 10 Aug: custom fields *are* offered
in the filter field dropdown, so `What do you need?` is selectable — but the operator list
has **no `is empty` / `is not empty`**. There is no way to express "has any value."

Equality operators can't stand in. Four `is <value>` filters on one trigger are **AND**-ed,
so a contact would have to be all four segments at once and nothing would ever fire. The
technically correct workaround is four separate `Contact Created` triggers on the workflow,
one per value, since multiple triggers OR — but that's four triggers to maintain on a
trigger that gets deleted the moment the form ships.

**What to do instead: filter on `Tag` = `form-lead`.** Tag is available today, and this is
not the trick the earlier tag idea was:

- **Now** — nothing carries that tag, so A1 fires on nobody. A stronger stop than
  `is not empty` was, not a weaker one.
- **After the form** — GHL forms apply one tag to every submission (see `ghl-form.md`). Set
  it to `form-lead` and the filter reads as "this contact came from the form."

If the tag isn't selectable because it doesn't exist yet, create it in **Settings → Tags**.

**Or accept no filter.** The trigger is deleted, not extended, when `Form Submitted` lands,
and the never-publish rule is the real protection. This was belt-and-braces on a draft with
a few days to live. Don't spend build time here.

### ✅ Settled 10 Aug: A1 stays unfiltered

**Kenn's call, and it's the right one.** A1's `Contact Created` trigger runs with no filter
until the form ships, at which point the whole trigger is deleted.

**This is deliberate, not an oversight.** Anyone opening A1 and finding a bare trigger should
read this line and move on rather than "fixing" it.

**The one thing it depends on: A1 must not be published.** With no filter, publishing it
against the 15 seeded leads fires the nurture at every one of them and burns the demo board.
That is now the *only* thing standing between the draft and a mess, so it graduates from a
general rule to a hard precondition on this specific workflow.

**The lesson worth keeping:** the 9 Aug decision was recorded as "decided" without anyone
opening the operator dropdown. A filter that reads well in a doc and doesn't exist in the UI
is worse than no filter, because the doc says you're covered.

---

## A1 · Speed-to-Lead — after the form exists

**Blocked.** Two things come from `ghl-form.md` being built first:

- the `Form Submitted` trigger has no form to point at
- the segment branch has no custom field key to read

Current state: trigger `Contact Created` (no filters) → Wait 24h → If/Else has-no-appointment →
Send Email, with email 2 not yet pasted. That's a stand-in, and it gets **replaced**, not
extended.

```
Form Submitted  ◄── replaces Contact Created; delete the old trigger, don't keep both
  ├─ A1-SMS-1                    (immediate — this is the 60-second promise)
  ├─ Create Task: "Call {{contact.first_name}} — roof check" due in 5 min, assigned Rommel
  ├─ Move opportunity → New Lead
  │
  ├─ If/Else on custom field "What do you need?"
  │    ├─ = repair      → add tag repair       → no extra touch
  │    ├─ = care-plan   → add tag care-plan    → no extra touch
  │    ├─ = multi-unit  → add tag multi-unit   → A1-EMAIL-multiunit
  │    └─ = new-build   → add tag new-build    → A1-EMAIL-newbuild
  │
  └─ Wait 24h
       └─ If/Else: has no appointment?
            ├─ no (they booked) → end
            └─ yes → A1-EMAIL-nurture
                 └─ Wait 3 days
                      └─ If/Else: has no appointment?
                           ├─ no → end
                           └─ yes → A1-SMS-2
                                └─ Wait 1 day
                                     └─ Opportunity status → Lost
                                        Add tag: nurture-may
```

**Why `repair` and `care-plan` get a tag but no extra email:** they're the 65% the nurture email
was written for. A second immediate email would be two emails in a minute. The multi-unit and
new-build branches get one because the standard nurture is wrong for them — a landlord with
twelve roofs reading about one ceiling stain is the exact failure `ghl-form.md` was written to
prevent.

**Timings are cumulative:** SMS 1 at 0s, nurture email at 24h, SMS 2 at day 4, Lost at day 5.

**Two-phase option if you want to build before the form exists:** everything except the trigger
and the four-way branch works today on the `Contact Created` stand-in. But you'd be rebuilding
the trigger and inserting the branch later, which is exactly the rework the resume note in
`PROGRESS.md` says to avoid. Build the form first.

### Prompt for the extension — A1

> **Send this only after the form from `ghl-form.md` exists**, and fill in the field key first.
>
> I'm in GoHighLevel, in Automation. There's an existing workflow `A1 — Speed-to-Lead` with a
> `Contact Created` trigger. **Rebuild it as described below.**
> **Leave it in Draft. Do not publish it.**
>
> **First, the trigger.** Add a `Form Submitted` trigger filtered to the form
> `Trueline — Roof Check Request`, then **delete the `Contact Created` trigger.** Do not keep
> both — a form lead is also a newly created contact, so both would fire and send everything
> twice.
>
> **Then, in order:**
>
> 1. **Send SMS** — body below, labelled A1-SMS-1. No wait before this; it's the first step.
> 2. **Create Task** — title `Call {{contact.first_name}} — roof check`, due in 5 minutes,
>    assigned to Rommel
> 3. **Update Opportunity** — pipeline `Trueline Roof Leads`, stage `New Lead`
> 4. **If/Else, four branches**, reading the custom field `What do you need?`
>    (internal key: `contact.what_do_you_need`)
>
>    **The values are not what you would guess — use these exactly**, read live from GHL on
>    10 Aug. Note `careplan` and `multiunit` have no hyphen and `new_build` uses an
>    underscore. The **tags** keep their hyphens; only the conditions use these strings:
>
>    - value `repair` → Add Tag `repair`
>    - value `careplan` → Add Tag `care-plan`
>    - value `multiunit` → Add Tag `multi-unit`, then Send Email, subject
>      `Twelve roofs, one schedule, one report`, plain text
>    - value `new_build` → Add Tag `new-build`, then Send Email, subject
>      `Send us the plans and we'll start the takeoff`, plain text
>
>    All four branches then continue into step 5.
> 5. **Wait** 24 hours
> 6. **If/Else** — condition: contact **has no appointment** booked
>    - If they have one → end
>    - If they don't → continue
> 7. **Send Email** — subject `Six signs it's a repair, not a re-roof`. Open the code/source
>    editor and paste the full HTML from
>    https://raw.githubusercontent.com/kennbutchoigutierrez/trueline-capstone/main/emails/email-2-nurture.html
>    **Replace the entire body, don't merge into a template. Do not reformat or prettify it** —
>    the inline CSS, the MSO conditional comments and the hidden preheader all look like
>    mistakes and are not.
> 8. **Wait** 3 days
> 9. **If/Else** — has no appointment? If they have one → end. Otherwise continue.
> 10. **Send SMS** — body below, labelled A1-SMS-2
> 11. **Wait** 1 day
> 12. **Update Opportunity** — status → `Lost`
> 13. **Add Tag** — `nurture-may`
>
> **Workflow settings:** allow re-entry OFF, stop on reply ON.
>
> SMS and email bodies are in
> https://raw.githubusercontent.com/kennbutchoigutierrez/trueline-capstone/main/automations.md
> under "A1 messages" — read that file and use them exactly as written.
>
> **Then tell me:**
> 1. Whether the four-way If/Else matched the custom field values exactly, or whether GHL
>    required a different comparison
> 2. Whether the `Contact Created` trigger is actually gone
> 3. Whether the pasted HTML email survived intact — check the header shows the wordmark as
>    text and the button is copper, not blue
> 4. Any error exactly as shown

---

## After all three are built

- [ ] Test A3 with one contact: create it, drag to `Quote Sent`, confirm the day-3 email queues
- [ ] Test A2 by booking a slot from a phone, confirm email 1 arrives and the card moves
- [ ] Test A1 by submitting the real form, confirm SMS arrives inside 60 seconds
- [ ] **Restore every shortened wait.** Testing these means cutting waits down — a 24-hour
      wait becomes 1 minute so you don't lose a day per run. That's the right way to test and
      the standard way it ships broken. Before anything is published, walk every Wait step in
      all three workflows and confirm it reads the real duration: A1 24h / 3d / 1d ·
      A2 appointment-relative · A3 3d / 4d / 7d
- [ ] **Delete every test contact** — the board gets filmed
- [ ] Confirm all three still read **Draft**
- [ ] On email 1, still unverified from the last session: does `{{contact.first_name}}` actually
      fill in, and is GHL appending a second unsubscribe under the one in the footer?
- [ ] Screenshot each workflow canvas for the Loom

## Things worth saying on camera about these

- **The stage re-check before every follow-up.** Most sequences fire on a timer and email people
  who already bought. Three If/Else checks in A3 is the difference between automation and spam.
- **Reminders are SMS in Taglish, not designed HTML.** A booking reminder that arrives as a
  pretty email is worse than one that arrives as a text. Only two emails in this system are
  designed, and that's a decision.
- **The attended path in A2 is manual on purpose.** Automating off a status field nobody updates
  produces a board that lies.
- **One form segments three revenue lines**, and A1 branches four ways off a single dropdown —
  homeowner repairs, recurring multi-unit contracts, new-build installs.
- **`Lost` is a status plus a `nurture-may` tag, never a stage.** The board shows where deals
  die instead of hiding them in a graveyard column.
