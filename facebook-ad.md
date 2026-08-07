# facebook-ad.md — Trueline Roof Care, Meta ads (DRAFT ONLY)

> **Safe mode.** Everything here stays a **draft** in Meta Ads Manager. No spend, no card,
> never publish. Drafts do not charge and do not deliver. Turning one on is a later step.

---

## The destination URL

**Live and public:** <https://trueline-roof-care.vercel.app>

Deployed from `site/index.html` to Vercel production (project `kennbutchoi/trueline-roof-care`,
8 August 2026). Verified anonymously: HTTP 200, correct page title, images serving, no auth
wall. Production was used deliberately rather than a preview URL — Vercel preview
deployments often carry Deployment Protection, which puts them behind a Vercel login and
would make the ad destination useless.

Redeploy after any edit to `site/index.html`:

```
cd site && vercel deploy --prod --yes
```

**Paste these exact URLs, one per draft.** The `utm_content` value is what lets you tell
the four hooks apart in analytics later.

| Draft | URL |
|---|---|
| 1 · carousel | `https://trueline-roof-care.vercel.app/?utm_source=facebook&utm_medium=paid&utm_campaign=six-signs&utm_content=carousel` |
| 2 · story-7800 | `https://trueline-roof-care.vercel.app/?utm_source=facebook&utm_medium=paid&utm_campaign=six-signs&utm_content=story` |
| 3 · taglish-380k | `https://trueline-roof-care.vercel.app/?utm_source=facebook&utm_medium=paid&utm_campaign=six-signs&utm_content=taglish` |
| 4 · the-18-peso-part | `https://trueline-roof-care.vercel.app/?utm_source=facebook&utm_medium=paid&utm_campaign=six-signs&utm_content=washer` |

On the carousel, every card gets the same URL as draft 1.

---

## What you are building: four drafts, not one

One ad is the assignment. A **tested creative set** is what a media buyer actually ships,
and it is a much better thing to talk over on camera. Four drafts, one variable at a time:

| # | Draft name | Format | Hook angle | Creative |
|---|---|---|---|---|
| 1 | `six-signs-carousel` | Carousel | Educational / contrarian | 5 square cards |
| 2 | `story-7800` | Single image | Testimonial, costly-mistake | `out-square/slide-01.png` |
| 3 | `taglish-380k` | Single image | Taglish pattern interrupt | `out-square/slide-01.png` |
| 4 | `the-18-peso-part` | Single image | Curiosity gap, one specific part | `out-square/slide-04.png` |

Drafts 2 and 3 share one creative on purpose — that isolates **copy** as the only
variable, which is how you actually learn which hook works. Draft 4 changes the creative
to test whether a diagram out-pulls a photograph.

---

## Assets

| Placement | Ratio | Where |
|---|---|---|
| Facebook + Instagram **Feed** | 4:5 | `carousel/out/slide-01…09.png` — 1080 × 1350 |
| **Carousel** ad cards | 1:1 | `carousel/out-square/slide-01…09.png` — 1080 × 1080 |
| **Stories + Reels** | 9:16 | `carousel/out-story/slide-01…09.png` — 1080 × 1920 |

All three are rendered from the **same HTML**. `slides.css` switches layout on
viewport-height media queries, so the sets can never drift apart — fix a typo once and
re-render all three.

```
python carousel/render.py            # 4:5  -> carousel/out/
python carousel/render.py --square   # 1:1  -> carousel/out-square/
python carousel/render.py --story    # 9:16 -> carousel/out-story/
```

**Why each ratio exists.**
- **Carousel cards are strictly 1:1.** Feeding a 4:5 slide into a carousel ad centre-crops
  it and cuts the price line off the bottom of every card.
- **Feed takes 4:5**, which occupies more screen than 1:1, so single image ads use the
  taller files.
- **Stories and Reels are 9:16 with safe zones.** Meta covers roughly the top 14% (profile
  name, "Sponsored") and the bottom 20% (CTA, swipe area). The story renders pad type into
  the middle band and let only the photography bleed past it. A 1:1 card dropped into a
  9:16 frame instead gets pillarboxed with flat colour, which reads as a mistake.

---

## Draft 1 — `six-signs-carousel`

**Format:** Carousel · **CTA button:** Learn more

**Primary text**
> Most roofs condemned in Laguna have years left in them.
>
> Six things homeowners read as *palitan na* are usually repairs, and this is what each
> one actually costs. Two of them genuinely are not repairs, and we say so on the last
> card, because a list that never says yes to a re-roof is just a different kind of sales
> pitch.
>
> Free 18-point roof check this month across Santa Rosa, Biñan, Cabuyao, Calamba, San
> Pedro, Los Baños and Sta. Cruz. Itemized written quotation within 24 hours.

Only the first ~125 characters show before **See more**, so the first line is doing the
work. That is deliberate.

**Cards — recommended 5-card cut.** Every card gets the same destination URL.

| # | Image | Headline (≤40 char) | Description |
|---|---|---|---|
| 1 | `slide-01.png` | A ₱410,000 quote, on a sound roof | The job that started this |
| 2 | `slide-04.png` | The washer died, not the panel | ₱6,500 – ₱12,000 |
| 3 | `slide-02.png` | The leak is rarely above the stain | ₱6,500 – ₱14,000 |
| 4 | `slide-05.png` | Wind loosened it. It can be reset. | ₱9,000 – ₱22,000 |
| 5 | `slide-09.png` | Free 18-point roof check | Quote in 24 hours |

The card headline carries the *what it usually means* line, which is exactly why the
square images drop it — the two are designed to be read together, not to repeat.

**Want all eight?** Order `01, 02, 03, 04, 05, 06, 07, 09` and it still works (Meta allows
10). Five is the recommendation for cold paid traffic; the full set is the organic story.
Card `08` (the counterweight) stays organic — in a paid ad it dilutes a cold audience, and
its job is trust-building for people already paying attention.

Turn **off** "Automatically show the best performing cards first" if you want the ₱410,000
story to stay in position one. The sequence is an argument; shuffling it breaks the logic.

---

## Draft 2 — `story-7800`

**Format:** Single image, `out/slide-01.png` (4:5) · **CTA:** Learn more
**Headline:** We repair 7 of 10 roofs
**Description:** Free check, quote in 24 hours

**Primary text**
> Three contractors said I needed a full re-roof. The fourth one charged me ₱7,800.
>
> We repair 7 out of 10 roofs we are called to replace. When a roof genuinely is finished
> we hand you to one of two contractors we trust and make nothing, which is the only
> reason the other 70% means anything.
>
> Free 18-point inspection and an itemized written quotation within 24 hours. Normally
> ₱1,500, free this month across Laguna.

---

## Draft 3 — `taglish-380k`

**Format:** Single image, `out/slide-01.png` (4:5) · **CTA:** Learn more
**Headline:** Ayusin muna, bago palitan
**Description:** Free roof check this month

**Primary text**
> Bago ka pumayag sa ₱380,000 re-roof, read this first.
>
> February to May is the only sane window to open a roof and fix it properly. By August
> you are not repairing it, you are tarping it, and it costs more.
>
> Free 18-point roof check and an itemized written quotation within 24 hours, anywhere in
> Laguna. We will tell you if you need nothing at all.

Light Taglish in the hook, English in the body — that is how the market talks versus how
it reads, per `brief.md`. Do not translate the whole thing.

---

## Draft 4 — `the-18-peso-part`

**Format:** Single image, `out/slide-04.png` (4:5) · **CTA:** Learn more
**Headline:** The ₱18 part, the ₱25,000 bill
**Description:** Free roof check this month

**Primary text**
> A rubber washer costs eighteen pesos. The ceiling it ruins costs ₱25,000. Yan ang buong
> dahilan kung bakit may inspection.
>
> The washer under a tekscrew perishes in about eight years. The panel it sits on is
> usually still sound, which is why a roof that looks finished from the ground often is
> not.
>
> Free 18-point roof check, itemized written quote within 24 hours, across Laguna.

---

## Building it in Ads Manager

Meta moves this UI constantly. If a screen does not match, tell me what you are looking at
and I will work it out with you.

**1. Open and confirm the account.** `adsmanager.facebook.com` → check the **ad account
selector at the top left** is the account from the Facebook Ads module. Building in the
wrong account is the single most common wasted hour here.

**2. Click `+ Create`.**

**3. Objective → `Traffic`.** Not Leads, not Engagement. Traffic optimises for clicks to
an external URL, which is exactly what this is. Continue.

**4. Campaign level.**
- Campaign name: `Trueline — Six Signs — DRAFT`
- **Special ad category: `None`.** Roof repair is a service. The Housing category is for
  housing *opportunities* — listings, rentals, sales, mortgages — and does not apply.
  Selecting it anyway would strip your location and age targeting for no reason.
- Advantage campaign budget: off, so each draft's budget stays readable.

**5. Ad set level.**
- Conversion location: **Website**
- Performance goal: **Maximise number of link clicks** (or landing page views)
- Budget: daily, ₱300. **A draft never spends this.** It exists so the estimates panel
  populates and the screen looks real on camera.
- Schedule: leave the default start date.
- Location: Santa Rosa, Biñan, Cabuyao, Calamba, San Pedro, Los Baños, Sta. Cruz — or a
  +15 km radius around Santa Rosa, which is simpler and covers most of them.
- Age **35–60**, all genders. That is segment A from `brief.md`.
- Placements: **Advantage+ (all placements) ON**, then open **Edit placement / asset
  customisation** on each and upload the matching ratio per surface — 4:5 for Feed, 9:16
  for Stories and Reels. Excluding cheap inventory to dodge a crop is the wrong trade;
  supplying the right crop is the fix.

  One real constraint: **Reels does not accept carousel ads.** Draft 1 will show Feed and
  Stories as eligible and grey Reels out. That is expected, not an error. Drafts 2–4 are
  single image and run everywhere.

**6. Ad level.**
- Identity: select your **Facebook Page** (and connect the Instagram account if prompted)
- Format: **Carousel** for draft 1, **Single image or video** for drafts 2–4
- Add media → upload the PNGs. For the carousel, **upload in the card order above** and
  confirm the order after upload; Meta sometimes reorders on multi-file upload.
- Fill primary text, headline, description per card
- Call to action: **Learn more**
- Website URL: your landing page **with the UTM string**

**7. Save as a draft — this is the step that matters.**
Do **not** click the green **Publish**. Instead click the **X / Close** at the top right.
Meta will ask what to do with unpublished changes → choose **Save as draft**. The campaign
then appears in your table with a **Draft** badge and a "Review and publish" button you
never press.

**Screenshot the table with that Draft badge visible.** That is your proof for the
end-of-day video.

---

## Draft safety, in one place

- A draft **cannot spend and cannot deliver.** Billing only ever begins at Publish.
- Never click **Publish** / **Review and publish** / **Confirm**.
- You do not need a card to build or save a draft. If Ads Manager hard-blocks you before
  you can save, stop and tell me the exact wording — do not add a payment method to get
  past it.
- Do not toggle any campaign, ad set, or ad switch to **On**.
- Duplicating a draft (for drafts 2–4) keeps it a draft. That is the fast way to build
  all four: build draft 1 fully, then **Duplicate** at the ad level three times and swap
  creative + copy.

---

## QA before you save each draft

- [ ] Destination URL loads for a logged-out stranger (test in incognito)
- [ ] URL carries its `utm_content` value, and each draft's value is different
- [ ] CTA button is **Learn more** on all four
- [ ] Carousel cards are in the intended order, and auto-reorder is **off**
- [ ] Every headline fits without a trailing ellipsis in the preview
- [ ] Preview checked in **Facebook Feed**, **Instagram Feed**, **Stories** and **Reels**
- [ ] Story previews: nothing important under the top 14% or bottom 20% overlay
- [ ] Peso figures on the image match the ones in `carousel/carousel.md`
- [ ] No exclamation points, no ALL-CAPS urgency, no platform blue anywhere
- [ ] Campaign shows the **Draft** badge and has never been published

---

## Notes for the pitch

- **Four drafts, one variable at a time.** 2 vs 3 isolates copy on identical creative;
  4 changes creative against a similar promise. That is a test matrix, not four guesses.
- **The creative is the offer.** Publishing a peso range on every symptom is a positioning
  decision almost nobody in this market makes, and it is the reason the ad can be
  educational instead of promotional.
- **The counterweight card is deliberately held back from paid.** Organic teaches, paid
  converts. Knowing which asset does which job is the actual skill.
- **One risk worth naming out loud:** the copper CTA bar drawn inside the slide-09 card
  looks like a button but is not one. Meta's deceptive-layout policy targets creative that
  mimics *platform* UI, which this does not, and branded buttons in creative are
  everywhere. It is low risk, but if a draft ever gets rejected on layout, that bar is the
  first thing to remove.
