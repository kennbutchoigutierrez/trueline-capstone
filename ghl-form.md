# ghl-form.md — the segmentation form

The form `brief.md` always assumed and the landing page never got. Building it closes the
gap recorded in `PROGRESS.md`: right now every CTA links straight to the booking widget, so
a visitor who does not book never becomes a contact, and no segment tags exist for the
automations to branch on.

**Placement:** in `site/index.html`, above the calendar CTA. On submit it redirects to the
booking calendar, so it captures the lead *before* the calendar rather than competing with
it. That is what makes non-bookers reachable at all.

```
Landing page ──► form (captures + segments) ──► booking calendar ──► pipeline
                        │
                        └─► tag ──► A1 branches on it
```

---

## Spec

**Form name:** `Trueline — Roof Check Request`

| Field | Type | Required |
|---|---|---|
| First Name | standard | yes |
| Last Name | standard | no |
| Email | standard | yes |
| Phone | standard | yes |
| What do you need? | dropdown, single select (custom field) | yes |
| Anything we should know? | multi-line text | no |

Phone is required because A1 opens with SMS inside 60 seconds. No phone, no speed-to-lead.

**Custom field — `What do you need?`**, single select. The sentence is the visitor-facing
**label**; the short string is the stored **value**.

> ⚠ **This field already exists and was reused on 10 Aug — but it does not match this spec.**
> See "What GHL actually has" below for the real key, the real values, and two defects that
> need fixing before A1 can branch on it. **The table below is the design intent, not the
> current state.**

| Label | Value |
|---|---|
| My house has a leak or damage | `repair` |
| No leak — I want my house checked before the rains | `care-plan` |
| I have an apartment, several units, or more than one house | `multi-unit` |
| I'm building new and have plans | `new-build` |

**No "I'm not sure" option.** Most people take the escape hatch and the tag is lost on the
highest-value leads. Naming "house" in the first two options keeps single-home owners out
of the multi-unit branch; "or more than one house" in option 3 catches the person with a
house plus a rental, who genuinely belongs there.

**On submit:** redirect to
`https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi`

**Styling:** background `#F6F4EF`, text `#16232E`, submit button `#C4622D` with off-white
text, label `Get my free roof check`. No blue.

---

## What GHL actually has — read live, 10 Aug

The form was built on 10 August. The custom field was reused, not recreated. **Three things
differ from the spec above**, and the first two block A1's segmentation.

**The field**

| | |
|---|---|
| Internal key | `contact.what_do_you_need` |
| Location | Settings → Custom Fields, folder `Form \| trueline roof` |
| Created | 7 Aug 2026 — consistent with the 9 Aug audit *observing* it; it predates that |
| Type | **`Dropdown (multiple)` — multi-select** ⚠ |

**The stored values differ from the spec.** These are what A1 must branch on — not the
hyphenated strings in the table above:

| Label in GHL | Stored value | Spec wanted |
|---|---|---|
| Repair | `repair` | `repair` ✅ |
| Care-plan | `careplan` | `care-plan` |
| Multi-unit | `multiunit` | `multi-unit` |
| New build | `new_build` | `new-build` |

**Don't "fix" the values to match the spec — fix the spec.** The values are arbitrary
internal strings; nothing reads them except A1's branch conditions, which don't exist yet.
Editing them risks GHL regenerating them and invalidating this table again. The tags A1
applies stay hyphenated (`care-plan`, `multi-unit`, `new-build`) because those are ours and
they're referenced in `brief.md`.

### ⚠ Defect 1 — the field is multi-select

A1's four-way branch is built on equality: one lead, one segment, one path. A multi-select
field lets a visitor tick **both** `repair` and `multiunit`, and then an `is repair` condition
either fails outright or matches unpredictably depending on how GHL serialises the array.
The lead falls through every branch, gets no tag, and lands in the default path — silently.

**The field type cannot be changed — checked 11 Aug.** GHL hard-locks Field type, Add-to-object
and Folder once a custom field is created. The selector in the Update Field modal is disabled;
there is no warning to click through because there is no path at all. The only route is a new
field.

**Fix: replace the field.** Migration order matters — rename first, or you recreate the
duplicate-name problem this file already dodged once:

1. Rename the old field's label to `What do you need OLD - delete me`
2. Create a new **single-select** contact field labelled `What do you need?`, same folder,
   four options carrying the sentences as labels and `repair` / `careplan` / `multiunit` /
   `new_build` as values
3. **Read the new internal key** — GHL generates a fresh one, it will *not* be
   `contact.what_do_you_need`, and A1's four branch conditions read it
4. Swap it into the form at position 5, between Phone and "Anything we should know?"
5. Verify the form previews and the dropdown accepts only one selection
6. **Only then** delete the old field — until the swap is verified, the old field is the one
   place the original configuration still exists

**It costs nothing right now and never will be cheaper.** No submissions exist, the form is
not embedded on the site, and A1 does not reference the field yet.

### Done 11 Aug — and three things the migration taught

**The replacement exists:** `contact.what_do_you_need_v2`, type `Dropdown (single)`, object
Contact, folder `Form | trueline roof`, four sentence labels. Swapped into the form at
position 5 and confirmed persisted across a builder reload. **The old field still exists** and
still holds `contact.what_do_you_need`.

**Renaming a field does not free its key.** Creating the replacement failed with *"A custom
field already uses this name. Please choose a different name."* even after the old field's
label had been renamed — GHL collided on the auto-generated key, which the rename never
touched. The key had to be set manually. So the old field must be **deleted**, not renamed,
before anyone assumes `contact.what_do_you_need` is reusable.

**⚠ GHL warns you about nothing.** Renaming the field produced no warning. Removing it from
the form canvas produced no warning, no confirmation dialog, and no notice that the field was
referenced anywhere else. Nothing in the platform protects a workflow from having its branch
condition silently orphaned. This is the whole argument for reading the live screen instead of
trusting that a destructive action would have stopped you.

**Form builder quirk:** fields cannot be reordered by dragging within the canvas. A new field
lands at the end; to place it, drag it from the *Add Object Fields* side panel directly onto
the target position on the canvas.

**Option not taken: keep multi-select and branch with `contains`**, ordered most-specific-first
so a landlord who ticks two options lands in `multiunit`. Rejected because it depends on GHL
offering a `contains` operator on a multi-select in If/Else — and this build has now assumed an
operator existed twice and been wrong both times.

### ⚠ Defect 2 — the option labels are slugs, not the sentences

The visitor currently sees `Repair`, `Care-plan`, `Multi-unit`, `New build`. Those are
internal vocabulary. The sentences in the spec are load-bearing and the reasoning is in the
spec section above: naming "house" in the first two keeps single-home owners out of the
multi-unit branch, and "or more than one house" catches the person with a house plus a rental.
`Multi-unit` communicates none of that to a homeowner, and `Care-plan` means nothing at all
to someone who has never heard the term.

**Fix: set the labels to the four sentences.** Watch for GHL regenerating the stored values
when a label is edited — if the option editor exposes only one string per option rather than
a label/value pair, then the sentences *become* the values and A1 branches on those instead.
Either outcome is workable; what matters is reading back what actually saved.

### Not a defect — the pre-existing form

A form named `Trueline — Roof Check Request` already existed in Sites → Forms from 8 Aug with
only the four standard fields and an unstyled Submit button. Undocumented — a partial earlier
attempt. The extension completed it in place rather than creating a duplicate. Correct call:
two same-named forms is the same failure mode as two same-named custom fields.

### The embed

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/form/ys8URRJqtAmloGrhk5lo"
  style="width:100%;height:100%;border:none;border-radius:8px"
  id="inline-ys8URRJqtAmloGrhk5lo"
  data-layout="{'id':'inline'}"
  data-trigger-type="alwaysShow"
  data-form-name="Trueline — Roof Check Request"
  data-height="undefined"
  data-layout-iframe-id="inline-ys8URRJqtAmloGrhk5lo"
  data-form-id="ys8URRJqtAmloGrhk5lo"
  title="Trueline — Roof Check Request">
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

**`height:100%` with `data-height="undefined"` will collapse the iframe to nothing** inside a
normal page flow — an iframe with a percentage height needs a parent with a resolved height.
`form_embed.js` resizes it once it loads, but the pre-load state is a zero-height box. Give
the iframe a `min-height` when pasting into `site/index.html` so the section doesn't jump.

---

## Tagging happens in the workflow, not the form

GHL's form builder applies the **same** tag to every submission — it cannot tag per
dropdown option. So A1 branches on the custom field value and applies the tag there. That
is why the field's internal key matters.

```
Form Submitted
└─ If/Else on custom field "What do you need?"
   ├─ = repair      → add tag repair      → six-signs nurture
   ├─ = care-plan   → add tag care-plan   → care-plan angle, seasonal timing
   ├─ = multi-unit  → add tag multi-unit  → portfolio note, per-unit pricing
   └─ = new-build   → add tag new-build   → plan-upload request
```

---

## After the form exists

1. Paste the embed into `site/index.html` above the calendar CTA, push — Vercel redeploys
2. **Swap A1's trigger** from `Contact Created` to `Form Submitted`, and **delete**
   `Contact Created`. Do not keep both: a form lead is also a newly created contact, so
   both would fire and send the nurture twice.
3. Add the source filter to the trigger before ever publishing A1, or a re-import of
   `leads-import.csv` would fire it on all 15 seeded leads.
4. Add the segment branching above.

---

## Prompt for the Claude browser extension

> I'm in GoHighLevel and I need you to build a lead capture form. Walk me through it or do
> it directly, whichever this page allows.
>
> **Form name:** `Trueline — Roof Check Request`
>
> **Fields, in this order:**
>
> | Field | Type | Required |
> |---|---|---|
> | First Name | standard | yes |
> | Last Name | standard | no |
> | Email | standard | yes |
> | Phone | standard | yes |
> | What do you need? | dropdown / single select (custom field) | yes |
> | Anything we should know? | multi-line text | no |
>
> **The dropdown uses a custom field that most likely already exists.** Before creating
> anything, go to **Settings → Custom Fields** and look for a contact field named
> `What do you need?`. It was seen in this sub-account on 9 August.
>
> - **If it exists:** use it. Do not create a second field with this name — the form would
>   write to one and my workflow would read the other. Tell me its internal key and its
>   exact stored option values, and if those values differ from the table below, tell me
>   what they actually are rather than editing them.
> - **If it genuinely doesn't exist:** create it. Name `What do you need?`, type
>   single-select dropdown, with exactly these four options.
>
> The sentence is the **label** the visitor sees; the short string is the stored **value**:
>
> | Label | Value |
> |---|---|
> | My house has a leak or damage | `repair` |
> | No leak — I want my house checked before the rains | `care-plan` |
> | I have an apartment, several units, or more than one house | `multi-unit` |
> | I'm building new and have plans | `new-build` |
>
> Single select, not multi-select. Required.
>
> **On submit:** redirect to
> `https://api.leadconnectorhq.com/widget/booking/OzxJlo2ymaCQIpZC8sUi`
>
> **Styling, if the builder exposes it:** background `#F6F4EF`, text `#16232E`, submit
> button `#C4622D` with off-white text. Button label: `Get my free roof check`. No blue
> anywhere.
>
> **Do not** publish this to any funnel or site, and don't add it to an existing page.
> Just create and save the form.
>
> **Then tell me:**
> 1. Whether `What do you need?` already existed or you created it
> 2. The form's **embed code** (the full iframe or script snippet), pasted exactly
> 3. The custom field's **internal key/ID** for `What do you need?` — I need it for
>    workflow branching
> 4. Its four stored values, exactly as they read in GHL — whether they are `repair`,
>    `care-plan`, `multi-unit`, `new-build` or something else
> 5. Any error, exactly as shown
