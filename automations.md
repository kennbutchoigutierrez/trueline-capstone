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

## The four workflows in GHL — IDs, because names drift

**Identify workflows by ID and by canvas content, never by title.** On 11 Aug the A1 and A2
titles were found attached to each other's workflows — the descriptive halves were right
("Speed-to-lead", "customer booked") but the numbers were swapped. Caught only because the
extension opened each canvas instead of trusting the tab.

| Workflow | GHL id | Identify by this content |
|---|---|---|
| **A1 — Speed-to-Lead** | `96922823-9be4-47e2-bae4-0faffb31a570` | `Contact Created` → Wait → If/Else `Last appointment is empty` → Send Email |
| **A2 — Appointment Confirm & Show-Up** | `11f3fabb-…` | `Customer Booked Appointment` filtered to `15-min Roof Check Call` |
| **A2b — No-Show Rescue** | *unrecorded* | `Appointment Status = No Show` |
| **A3 — Quote Follow-Up** | *unrecorded* | `Opportunity Stage Changed` → `Quote Sent` |

**The numbering in this file is authoritative** — `brief.md` and `plan.md` use it too. Renaming
two workflows in GHL is cheaper than renumbering three documents, and the presentation needs one
vocabulary.

**Why this was dangerous, not just untidy.** The A1 build sheet says "do not touch the existing
Send Email step" because it holds hand-built HTML. Both A1 and A2 contain an HTML email. An
agent that trusted the titles would have edited the wrong workflow and damaged the wrong email.

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

**A1-EMAIL-instant — immediate, plain text.** Added 11 Aug. This is what carries the
60-second promise now that SMS cannot send. First step in the workflow, before everything.
Subject: `Got your roof check request`

```
Hi {{contact.first_name}},

Rommel here from Trueline Roof Care. Your request for a free roof check came through and I'm
calling you in about five minutes.

If you're busy, reply to this email and I'll call later, or pick a time that suits you:
https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi

What you get either way: I look at the roof, and you get the findings in writing, itemized,
within 24 hours. If it needs a repair, the quotation says repair. If it needs nothing, it
says that too, and that happens more often than you'd expect.

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
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

**A2-EMAIL-24h — the email twin of A2-SMS-24h, plain text.** Added 10 Aug because SMS cannot
send from this sub-account. Carries the same job as the SMS — reduce no-shows, get them to
bring evidence — in English, per the voice rule that body copy is English and only SMS and ad
hooks are Taglish.
Subject: `Your roof check is tomorrow`

```
Hi {{contact.first_name}},

Quick reminder — your roof check call is tomorrow at {{appointment.start_time}}. It's 15
minutes on the phone, nothing more.

Three things worth having ready, if you have them:

A photo of the stain or the damage. Even a bad phone photo taken from the floor tells me
more than a description does.

Any quotation you've already received from another contractor. I'll tell you straight
whether it's fair, including when it is.

Your roof plan, if you're building.

None of it is required. It just means we spend the 15 minutes on your roof instead of on
questions.

If the timing no longer works, reply to this email and we'll move it.

Rommel Bautista
Trueline Roof Care · Santa Rosa, Laguna
```

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

## A3 · Quote Follow-Up — ✅ built 11 Aug

Built by hand. Both If/Else conditions gate on `stage is Quote Sent`, with every subsequent
step nested under the YES branch and both else branches left empty — an empty branch is how a
contact who signed exits without another email.

**Open on A3:** whether both If/Else conditions kept the pipeline-stage filter, and whether
`Update Opportunity` set **status** independently of stage. Both get checked in the test pass.

---

## A3 · Quote Follow-Up — the build sheet

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

## A2 · Confirm & Show-Up — ✅ built 11 Aug

**Built by hand, not through the extension.** A2 was extended with the stage move, the
appointment-relative waits, the new 24h reminder email and both SMS steps. The no-show rescue
went into its own workflow, `A2b — No-Show Rescue`.

**Why A2b is separate, and it isn't a compromise.** A workflow can hold several triggers, so
adding `Appointment Status Changed → No Show` to A2 looks possible — but every trigger on a
GHL workflow feeds the *same* first step. A no-show would re-enter at the top and receive the
stage move to `Call Booked`, the confirmation email and both reminders, for a call that
already didn't happen. Two workflows that each do one thing beat one that half-does both.

**Still unverified on A2** — these decide whether it works rather than whether it looks right:

- [ ] Did the Wait steps save as **appointment-relative**, or fall back to fixed delays?
- [ ] Which **appointment-time merge token** did GHL's picker produce?
- [ ] Did the two **SMS steps save** with no number on the account?
- [ ] Was the trigger's **calendar filter** already present, or added?

---

## A2 · Confirm & Show-Up — the build sheet

**This workflow already exists** with email 1 in it and a test that arrived styled. You're
adding to it, not rebuilding it. Don't recreate it — you'll end up with two.

**Trigger:** `Appointment Booked` (already in place)
**Filter to add if it isn't there:** calendar = `15-min Roof Check Call`

```
Appointment booked
  ├─ Move opportunity → Call Booked
  ├─ A2-EMAIL-1  ◄── already built
  ├─ Wait until 24h before appointment
  │    ├─ A2-EMAIL-24h  ◄── fires
  │    └─ A2-SMS-24h    ◄── builds, cannot send (no A2P)
  ├─ Wait until 1h before appointment
  │    └─ A2-SMS-1h     ◄── builds, cannot send
  └─ Appointment status = no-show
       ├─ Wait 15 min ──► A2-SMS-noshow   ◄── builds, cannot send
       ├─ Wait 1 day ───► A2-EMAIL-noshow ◄── fires
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
> 3. **Send Email** — subject `Your roof check is tomorrow`, plain text, body below labelled
>    A2-EMAIL-24h. This one carries the reminder, because SMS cannot send from this
>    sub-account (no number, A2P registration unstarted).
> 4. **Send SMS** — body below, labelled A2-SMS-24h. **Add it even though it cannot send** —
>    it is part of the designed system. If GHL refuses to save an SMS step with no number
>    attached, skip it and tell me.
> 5. **Wait** — until **1 hour before** the appointment start time
> 6. **Send SMS** — body below, labelled A2-SMS-1h. Same note as above.
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

## A1 · Speed-to-Lead — unblocked, build last

**No longer blocked.** The form exists (`Trueline — Roof Check Request`, embed ID
`ys8URRJqtAmloGrhk5lo`) and the segmentation field was rebuilt as single-select on 11 Aug.

**The field key is `contact.what_do_you_need_v2`** — not `contact.what_do_you_need`, which
still belongs to the old multi-select field pending deletion. Using the old key silently
branches on a field the form no longer writes to.

> ⚠ **The four option values are auto-generated from the sentence labels and are long.** They
> are recorded in `ghl-form.md` once read back. Select them from GHL's picker in the If/Else —
> do not hand-type them. If the If/Else demands typed values rather than offering a picker,
> stop and say so before typing a 40-character string four times.

**Edit A1 in place. Do not delete and rebuild it.** Email 2's HTML is already pasted inside the
existing workflow and verified intact; rebuilding from scratch throws it away and it has to be
re-pasted through the code editor without reformatting. The trigger swap is two clicks and the
branch inserts above the existing wait.

Current state: trigger `Contact Created` (no filter, deliberately) → Wait 24h → If/Else
has-no-appointment → Send Email 2.

```
Form Submitted  ◄── replaces Contact Created; delete the old trigger, don't keep both
  ├─ A1-EMAIL-instant            (immediate — this is what carries the 60-second promise now)
  ├─ A1-SMS-1                    (builds, cannot send — no number, A2P unstarted)
  ├─ Create Task: "Call {{contact.first_name}} — roof check" due in 5 min, assigned Rommel
  ├─ Move opportunity → New Lead
  │
  ├─ If/Else on custom field contact.what_do_you_need_v2
  │    ├─ = leak/damage option    → add tag repair      → no extra touch
  │    ├─ = no-leak-yet option    → add tag care-plan   → no extra touch
  │    ├─ = apartment option      → add tag multi-unit  → A1-EMAIL-multiunit
  │    └─ = building-new option   → add tag new-build   → A1-EMAIL-newbuild
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

**Timings are cumulative:** instant email at 0s, nurture email at 24h, SMS 2 at day 4, Lost at
day 5.

**Why the instant reply is an email and the design still holds.** The 60-second promise was
always about *speed*, not about the channel — and the Part 5 brief specifies email as the
primary instant-reply path, with SMS as the addition when a number exists. The SMS step stays
on the canvas because it is the designed system and because it will work the day A2P
registration clears.

### The pastes used on 11 Aug — kept for troubleshooting

**⚠ Do not re-send paste 1 verbatim.** It says "add these steps," and the extension was stopped
mid-build, so an unknown number of them already exist. Re-running it as written produces
duplicate steps — two instant emails, two tasks, two branches. **Audit A1 first** (see
`PROGRESS.md` §1b), then send the resume variant at the bottom of this section.

**Paste 1 — the wrapper that was sent with the A1 build**

```
I'm in GoHighLevel, in Automation. Read this file and follow the section
"Prompt for the extension — A1" exactly as written:

https://raw.githubusercontent.com/kennbutchoigutierrez/trueline-capstone/main/automations.md

Five things in that section are deliberate, so you know they are not mistakes
in my instructions:

1. It says EDIT the existing "A1 — Speed-to-Lead" workflow in place, not rebuild
   it. That workflow contains a hand-built HTML email that must survive. Do not
   open, re-paste, reformat or clean up that Send Email step.

2. It says to DELETE the "Contact Created" trigger after adding "Form Submitted".
   Both must not coexist — a form lead is also a newly created contact, so both
   would fire and send everything twice.

3. It says to add Send SMS steps even though this sub-account has no phone
   number and no A2P registration. Intentional. They will not send. If GHL
   refuses to save an SMS action, skip it and tell me.

4. The custom field key is contact.what_do_you_need_v2. There is an older field
   with a nearly identical name — if you see two, you have the wrong one. Nothing
   in GHL will warn you about this.

5. Steps 6, 7 and 8 already exist in the workflow. The four new branches feed
   into the existing Wait. Verify those three and leave them alone.

Leave the workflow in Draft. Do not publish it.
```

**Paste 2 — the go-ahead sent after it read the file back**

```
Confirmed, proceed now. Trigger reads Contact Created and the id matches, so you
are in the right workflow.

Order: add Form Submitted → verify it saved → delete Contact Created → build the
rest. Never leave the workflow with zero triggers.

Two additions to your report when you're done:
  - A2b's and A3's workflow ids (you confirmed their titles, but I don't have the
    ids yet — I'm recording all four so nobody has to identify them by name again)
  - The four literal stored VALUES from the If/Else picker. This has been clipped
    from three reports in a row, so paste them as four plain lines with no
    formatting:  label = value
```

**Paste 3 — the resume variant. Send THIS next, not paste 1.**

```
I'm in GoHighLevel. A previous session was building the workflow
"A1 — Speed-to-Lead", id 96922823-9be4-47e2-bae4-0faffb31a570, and was
interrupted part-way through. I do not know which steps were applied.

DO NOT BUILD ANYTHING YET. First open that workflow and report its canvas to me
exactly as it stands, top to bottom:

  1. Every trigger on it, with its filters. I need to know whether it has
     "Form Submitted", "Contact Created", both, or neither.
  2. Every step in order, with its type and its title or subject line.
  3. Whether any step appears twice.
  4. For the Send Email step titled "Six signs it's a repair, not a re-roof":
     confirm it still exists, and that its header shows the wordmark as live
     text with a copper button, not blue. Do not open it in an editor that might
     reformat it — read it and close it.
  5. Whether the existing Wait step reads 24 hours.
  6. For the existing If/Else on "Last appointment is empty": which branch the
     Send Email sits on, and which branch ends.

Report all six, then stop. I will tell you what to build after I see it.

Leave the workflow in Draft. Do not publish it. Do not delete or add anything.
```

### Prompt for the extension — A1

> I'm in GoHighLevel, in Automation. There's an existing workflow `A1 — Speed-to-Lead` with a
> `Contact Created` trigger, a Wait, an If/Else and a Send Email step.
>
> **Edit that workflow in place. Do not delete and recreate it.** Its existing Send Email step
> holds a hand-built HTML email that must survive — do not open, re-paste, reformat or
> "clean up" that step.
> **Leave it in Draft. Do not publish it.**
>
> **First, the trigger.** Add a `Form Submitted` trigger filtered to the form
> `Trueline — Roof Check Request`, then **delete the `Contact Created` trigger.** Do not keep
> both — a form lead is also a newly created contact, so both would fire and send everything
> twice.
>
> **Then, in order:**
>
> 1. **Send Email** — subject `Got your roof check request`, plain text, body below labelled
>    A1-EMAIL-instant. No wait before this; it is the first step and it carries the
>    60-second promise.
> 2. **Send SMS** — body below, labelled A1-SMS-1. **Add it even though it cannot send** —
>    no number is provisioned and A2P registration is unstarted. It is part of the designed
>    system. If GHL refuses to save an SMS step, skip it and say so.
> 3. **Create Task** — title `Call {{contact.first_name}} — roof check`, due in 5 minutes,
>    assigned to Rommel
> 4. **Update Opportunity** — pipeline `Trueline Roof Leads`, stage `New Lead`
> 5. **If/Else, four branches**, reading the custom field `What do you need?`
>    (internal key: **`contact.what_do_you_need_v2`** — NOT `contact.what_do_you_need`, which
>    is the old multi-select field pending deletion)
>
>    **Select each option from GHL's picker — do not hand-type the values.** The v2 field's
>    values are auto-generated from the sentence labels and are long. Match on the option
>    whose **label** is quoted below; the value is whatever GHL shows against it. If the
>    If/Else offers no picker and demands typed values, stop and tell me rather than
>    transcribing four long strings by hand.
>
>    - label `My house has a leak or damage` → Add Tag `repair`
>    - label `No leak yet, I want my house checked before the rains` → Add Tag `care-plan`
>    - label `I have an apartment, several units, or more than one house` → Add Tag
>      `multi-unit`, then Send Email, subject `Twelve roofs, one schedule, one report`,
>      plain text
>    - label `I'm building new and have plans` → Add Tag `new-build`, then Send Email,
>      subject `Send us the plans and we'll start the takeoff`, plain text
>
>    **The tags keep their hyphens.** They are ours and they are referenced in `brief.md`;
>    only the conditions depend on GHL's generated values.
>
>    All four branches then continue into step 6.
>
> **Steps 6, 7 and 8 already exist in the workflow.** Do not rebuild them — the four branches
> above simply need to feed into the existing Wait. Verify them and leave them alone:
>
> 6. **Wait** 24 hours *(exists — confirm it reads 24 hours, not a shortened test value)*
> 7. **If/Else** — `Last appointment` **is empty** *(exists — confirm the Send Email sits on
>    the condition-MET branch and `END` on the else branch; this was found inverted on 9 Aug)*
> 8. **Send Email** — the existing HTML email, `Six signs it's a repair, not a re-roof`.
>    **Do not touch this step.**
>
> **Then continue building from step 9:**
>
> 9. **Wait** 3 days
> 10. **If/Else** — has no appointment? If they have one → end. Otherwise continue.
> 11. **Send SMS** — body below, labelled A1-SMS-2. Add it even though it cannot send.
> 12. **Wait** 1 day
> 13. **Update Opportunity** — status → `Lost`
> 14. **Add Tag** — `nurture-may`
>
> **Workflow settings:** allow re-entry OFF, stop on reply ON.
>
> SMS and email bodies are in
> https://raw.githubusercontent.com/kennbutchoigutierrez/trueline-capstone/main/automations.md
> under "A1 messages" — read that file and use them exactly as written.
>
> **Then tell me:**
> 1. Whether the four-way If/Else offered a picker for the field's options, and the four
>    stored VALUES it matched on, quoted exactly
> 2. Whether the `Contact Created` trigger is actually gone
> 3. That the existing HTML email step was left untouched, and that its header still shows
>    the wordmark as text with a copper button, not blue
> 4. Whether the existing Wait reads 24 hours, and which branch of the existing If/Else the
>    email sits on
> 5. Whether the two SMS steps saved with no number on the account
> 6. Any error exactly as shown

---

## The test pass — one contact, all four workflows

Everything built so far has never run. Three canvases and a rescue branch that have never
fired are not a working system, and the Part 5 brief is explicit that an automation which
"fires on nothing does not showcase well." This pass turns them into something you can
honestly say works, and it closes every open verification item in one sitting.

### Publishing is safe now — and it wasn't before

A1's trigger is `Form Submitted`, not `Contact Created`. The whole reason for the
never-publish rule was that an unfiltered `Contact Created` would fire on a re-import of the
15 seeded leads. **That risk disappeared with the trigger swap** — a CSV import doesn't submit
a form. A2 and A2b are filtered to one calendar, and A3 to one pipeline stage.

So publish for the test, then unpublish or leave them live as you prefer. What still matters is
deleting the test contact afterward, because the pipeline board gets filmed.

### Shorten these waits first, and write down what you changed

| Workflow | Wait | Real value | Set to for test |
|---|---|---|---|
| A1 | after the branch | 24 hours | 2 minutes |
| A1 | after nurture email | 3 days | 2 minutes |
| A1 | before Lost | 1 day | 2 minutes |
| A2 | before 24h reminder | 24h before appointment | leave — appointment-relative |
| A2 | before 1h reminder | 1h before appointment | leave — appointment-relative |
| A2b | before no-show SMS | 15 minutes | 1 minute |
| A2b | before no-show email | 1 day | 2 minutes |
| A3 | day 3 | 3 days | 2 minutes |
| A3 | day 7 | 4 days | 2 minutes |
| A3 | day 14 | 7 days | 2 minutes |

**Every one of these goes back before filming.** A shortened wait is correct practice and the
standard way a workflow ships broken — the 9 Aug audit found A1's at 1 minute and nearly
recorded it as a defect.

### The run

**Use a real email address you can open.** The point is seeing the HTML land in an inbox, not
in GHL's preview.

1. **Submit the form yourself** — the real one, not a test button. Pick the *apartment or
   several units* option, because it's the branch that proves the routing brain: it should tag
   `multi-unit` and send the portfolio email, not the six-signs nurture.
2. **Confirm A1 fired:** instant email arrives, task appears for Rommel due in 5 minutes,
   opportunity created at `New Lead`, tag `multi-unit` applied, portfolio email arrives.
3. **Wait out the shortened waits** — the nurture email should arrive, then the day-4 step,
   then the opportunity flips to `Lost` with `nurture-may`.
4. **Book a call** as that same contact through the booking widget. A2 fires: stage moves to
   `Call Booked`, the HTML confirmation lands, then the 24h reminder email.
5. **Mark the appointment No Show.** A2b fires: the rescue email lands, stage returns to
   `Contacted`.
6. **Move the opportunity to `Quote Sent`.** A3 fires through all three emails, then `Lost`
   plus `nurture-may`.
7. **Delete the test contact and its opportunity.** Then restore every wait from the table.

### What this settles — the open list

- [ ] A1's four-way If/Else offered a picker, and the four literal stored values
- [ ] `Contact Created` is gone from A1
- [ ] Email 2's HTML survived — wordmark as text, copper button, not blue
- [ ] A1's existing Wait reads 24 hours and the email is on the condition-met branch
- [ ] A2's two waits saved as appointment-relative rather than fixed delays
- [ ] Which appointment-time merge token GHL produced, and that it resolves rather than
      shipping raw `{{...}}`
- [ ] `{{contact.first_name}}` fills in on every email
- [ ] Whether the SMS steps saved with no number attached
- [ ] A2's trigger carries the calendar filter
- [ ] A3's two If/Else conditions kept their pipeline-stage filter
- [ ] A3's `Update Opportunity` set **status** independently of stage
- [ ] GHL is not appending a second unsubscribe under the one in the footer

### Screenshots to grab while it's running

The board mid-flight, the task in Rommel's queue, both HTML emails in a real inbox, and each
canvas. These are the shots the videos need and this is the only moment they exist.

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
