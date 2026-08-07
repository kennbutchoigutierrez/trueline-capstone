# emails.md — Trueline Roof Care, HTML email system

Two emails, one design system. Both are **email-safe HTML**: table layout, inline CSS,
single 600px column, no JavaScript, no external stylesheet doing anything load-bearing.

| File | Subject | When it sends |
|---|---|---|
| `email-1-booked.html` | Your roof check is booked | Automation **A2**, on booking |
| `email-2-nurture.html` | Six signs it&rsquo;s a repair, not a re-roof | Automation **A1**, 24h after form with no booking |

Previews: `emails/preview/email-1.png`, `email-2.png`
Masthead source: `emails/masthead.html` → rendered to `site/email/masthead.png`

---

## What makes it a system, not two nice emails

Every message shares the same **masthead, copper button, callout treatment, sign-off block
and slate footer**. Change one and you change the brand everywhere. The nurture reuses the
carousel's Sign 03 card as an inline diagram, so the ads, the carousel and the inbox are
visibly the same numbered system — the card is even labelled `SIGN 03 OF 06`, which is the
same row 3 in the price list directly above it.

---

## The email-safe decisions, and why

**Georgia, not Fraunces.** Webfonts do not load in Gmail, Outlook, or Yahoo — the three
places this will actually be read. Both emails ship `'Fraunces', Georgia, 'Times New Roman',
serif`, so Apple Mail and iOS get Fraunces and everyone else gets Georgia. The design was
checked in Georgia, which is what most recipients see. A high-contrast serif over a sans
body is the look from `brief.md`; Georgia keeps that relationship intact.

**Images are hosted, not embedded.** Gmail and Outlook strip base64 `data:` images
entirely. Both emails pull from the live site:

```
https://trueline-roof-care.vercel.app/email/masthead.png
https://trueline-roof-care.vercel.app/email/sign-washer.png
```

Verified 200, `image/png`. **If the Vercel site ever goes down, the emails lose their
images** — that is the tradeoff for having them display at all.

**Nothing important lives only in an image.** Many clients block images by default, so
every headline, price and the CTA are live HTML text. Images carry descriptive `alt` text
and the emails read completely with images off.

**Tables everywhere.** `role="presentation"` on every layout table so screen readers skip
them. The button is a padded table cell with a background colour, not a styled `<div>` —
that is the only construction Outlook renders reliably.

**Other details:** hidden preheader text so the inbox preview is deliberate rather than
scraped from the first line; `color-scheme: light only` to stop dark-mode clients
inverting the palette into mud; a `@media` block that stacks padding on narrow screens,
which the clients that support it will use and the rest will ignore harmlessly.

---

## Bringing it into GoHighLevel

GHL renames these screens often. If yours does not match, describe what you see.

**The path we want:** build inside an automation's email step, using the code option, so
the email lives with the automation that sends it.

1. **Automation → Workflows →** open or create the workflow
   (A2 *Appointment Confirm & Show-Up* for email 1, A1 *Speed-to-Lead* for email 2)
2. **+ Add Action → Send Email**
3. Fill **Subject** (below), then look for **Edit in Builder** / **Design Email** on the
   body field
4. In the builder, choose the **Code / Import HTML / Custom Code** option rather than the
   drag-and-drop editor. Some versions put this behind **Templates → New → Code Editor**.
5. **Paste the entire file**, `<!doctype html>` through `</html>`
6. Watch the live preview, then **Save**

**Subjects**

```
Your roof check is booked
```
```
Six signs it's a repair, not a re-roof
```

---

## Merge fields

Both emails use `{{contact.first_name}}` in the greeting.

**Insert it with GHL's own merge-field picker rather than trusting the pasted text.** GHL
versions differ on syntax, and the picker always emits the form that instance expects. Find
`Hi {{contact.first_name}},` in the code, delete the token, and re-insert it from the
picker if the test shows it empty.

**It has no fallback.** A contact with no first name renders `Hi ,` which looks broken. Two
fixes: set a default value on the field in GHL if your version supports it, or change the
line to `Hi there,` and accept the loss of personalisation. Test with a contact that
*does* have a first name first, so you know the field itself works before you solve for
empties.

**Unsubscribe.** Both footers carry `{{unsubscribe_link}}`. GHL often appends its own
unsubscribe block automatically — if your test email shows two, delete mine from the footer
and keep GHL's, since theirs is the one tied to compliance.

---

## Test before you trust it

1. Send a test to yourself from the email step
2. **Check spam.** A first send from a shared sending address very often lands there, and
   can take a few minutes. That is normal and not a fault in the HTML.
3. Confirm it arrives **styled, not plain text**
4. Confirm the first name filled in
5. Open it on a phone — the layout should stay single-column with comfortable padding
6. Click the button and confirm it reaches the landing page
7. Load it with images blocked and check it still reads

**Screenshot the rendered email in an actual inbox, not in the GHL builder.** The builder
preview is not proof, and the inbox screenshot is what belongs in the video.

---

## Tracking

Both CTAs carry UTMs so email traffic separates from paid:

```
?utm_source=email&utm_medium=owned&utm_campaign=confirmation
?utm_source=email&utm_medium=owned&utm_campaign=nurture
```

---

## Rebuilding the masthead

```
# edit emails/masthead.html, then render at 1200x260 and redeploy
chrome --headless=new --window-size=1200,260 --screenshot=site/email/masthead.png emails/masthead.html
git add -A && git commit -m "..." && git push        # Vercel redeploys, inboxes pick it up
```

Because the images are served from the live site, a push updates the artwork in every
email already sitting in someone's inbox. Useful, and worth being careful with.
