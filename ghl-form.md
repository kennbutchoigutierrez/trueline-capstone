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
> **The dropdown needs a custom field.** Name it `What do you need?`, type single-select
> dropdown, with exactly these four options. The sentence is the **label** the visitor
> sees; the short string is the stored **value**:
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
> 1. The form's **embed code** (the full iframe or script snippet), pasted exactly
> 2. The custom field's **internal key/ID** for `What do you need?` — I need it for
>    workflow branching
> 3. Whether the four dropdown values saved as `repair`, `care-plan`, `multi-unit`,
>    `new-build` exactly, or whether GHL rewrote them
> 4. Any error, exactly as shown
