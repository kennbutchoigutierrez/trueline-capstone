const pptxgen = require('pptxgenjs');

const SLATE = "16232E";
const STORM = "2C4356";
const CHALK = "F6F4EF";
const COPPER = "C4622D";
const MOSS = "3E6B57";
const MUTED = "9AA7B2";

const SERIF = "Cambria";
const SANS = "Calibri";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";           // 10" x 5.625"
pres.author = "Peter Gutierrez";
pres.title = "Peter Gutierrez — capability pitch";

function darkBg(slide) {
  slide.background = { color: SLATE };
}

// big copper ring, the repeated motif
function ring(slide, x, y, d, thickness) {
  slide.addShape(pres.ShapeType.ellipse, {
    x: x, y: y, w: d, h: d,
    fill: { type: "none" },
    line: { color: COPPER, width: thickness || 1.25 }
  });
}

function numeral(slide, n, x, y, size, bg, fg) {
  const d = size || 0.62;
  slide.addShape(pres.ShapeType.ellipse, {
    x: x, y: y, w: d, h: d,
    fill: { color: bg || COPPER }
  });
  slide.addText(String(n), {
    x: x, y: y, w: d, h: d,
    align: "center", valign: "middle",
    fontFace: SERIF, fontSize: d > 0.7 ? 22 : 15, bold: true,
    color: fg || CHALK, margin: 0
  });
}

/* ─────────────── 1 · title ─────────────── */
const s1 = pres.addSlide();
darkBg(s1);
ring(s1, 7.15, 0.55, 4.4, 1.5);
ring(s1, 8.35, 3.15, 2.0, 1);

s1.addText("LEAD-GENERATION SYSTEMS", {
  x: 0.62, y: 0.62, w: 6, h: 0.3,
  fontFace: SANS, fontSize: 11, bold: true, charSpacing: 2.2,
  color: COPPER, margin: 0
});
s1.addText("Peter Gutierrez", {
  x: 0.6, y: 1.25, w: 6.6, h: 0.85,
  fontFace: SERIF, fontSize: 42, bold: true, color: CHALK, margin: 0
});
s1.addText(
  "I build the machine that turns a stranger into a booked call: the page, the ads that feed it, the CRM behind it, and the follow-up that runs without anyone remembering to send it.",
  { x: 0.62, y: 2.3, w: 6.1, h: 1.5, fontFace: SANS, fontSize: 15.5,
    color: CHALK, lineSpacing: 24, margin: 0 }
);
s1.addText("Everything you are about to see, I built in one week.", {
  x: 0.62, y: 4.5, w: 6.5, h: 0.35,
  fontFace: SANS, fontSize: 13, italic: true, color: MUTED, margin: 0
});
s1.addNotes(
  "0:00-0:25 — Who you are and what you build. Say it in one sentence before anything appears on screen. " +
  "Do not open on a login page or a dashboard."
);

/* ─────────────── 2 · the map ─────────────── */
const s2 = pres.addSlide();
s2.background = { color: CHALK };
s2.addText("A system, not four deliverables", {
  x: 0.6, y: 0.55, w: 8.8, h: 0.6,
  fontFace: SERIF, fontSize: 34, bold: true, color: SLATE, margin: 0
});
s2.addText("Each piece is worth something. Wired together they compound.", {
  x: 0.62, y: 1.16, w: 8.8, h: 0.3,
  fontFace: SANS, fontSize: 14, color: STORM, margin: 0
});

const cards = [
  ["A page that converts", "A clear promise, prices in public, and a form that asks the one question that matters."],
  ["Ads that feed it", "A carousel and four ad drafts, one hook angle each, pointed at the page."],
  ["A CRM behind it", "Every lead in one place, moving from new, to booked, to sold."],
  ["Follow-up that runs itself", "Four workflows and branded email, firing on their own within sixty seconds."]
];
cards.forEach(function (c, i) {
  const col = i % 2, row = Math.floor(i / 2);
  const x = 0.6 + col * 4.5, y = 1.72 + row * 1.72;
  s2.addShape(pres.ShapeType.roundRect, {
    x: x, y: y, w: 4.2, h: 1.5, rectRadius: 0.06,
    fill: { color: "FFFFFF" },
    line: { color: "DCD7CC", width: 0.75 },
    shadow: { type: "outer", blur: 10, offset: 2, angle: 90, color: "16232E", opacity: 0.07 }
  });
  numeral(s2, i + 1, x + 0.28, y + 0.28, 0.44, COPPER, CHALK);
  s2.addText(c[0], {
    x: x + 0.84, y: y + 0.26, w: 3.1, h: 0.35,
    fontFace: SERIF, fontSize: 17, bold: true, color: SLATE, margin: 0
  });
  s2.addText(c[1], {
    x: x + 0.28, y: y + 0.76, w: 3.66, h: 0.62,
    fontFace: SANS, fontSize: 12.5, color: STORM, lineSpacing: 16, margin: 0
  });
});
s2.addNotes(
  "0:25-0:45 — The map. Say the parts out loud once so the viewer knows the shape of what is coming, " +
  "then get off this slide. Do not read the cards."
);

/* ─────────────── 3-6 · section cards ─────────────── */
const sections = [
  ["01", "The page",
   "A visitor lands, gets a straight promise and real prices, and tells me which of three problems they have.",
   "What I can build for you: a page that earns the click it paid for."],
  ["02", "The ads",
   "Nine carousel slides and four ad drafts, built from one creative source and rendered at three ratios.",
   "What I can build for you: creative that survives every placement without a bad crop.",
   "ON SCREEN NEXT: the rendered creative from carousel/out and the four hook angles from " +
   "ad-drafts.md. Do NOT open Ads Manager — the drafts in there are part-built, and this is the " +
   "section meant to prove range."],
  ["03", "The CRM",
   "Six stages from new lead to won, fifteen real leads on the board, and dead deals that keep their history.",
   "What I can build for you: a pipeline that tells you where money actually stalls."],
  ["04", "The follow-up",
   "Four workflows. A reply inside sixty seconds, then a sequence that branches on who the lead actually is.",
   "What I can build for you: the part that runs when nobody is at their desk."]
];
function adSlides() {
  /* 4a · the carousel itself */
  const a = pres.addSlide();
  darkBg(a);
  a.addText("NINE SLIDES, ONE ARGUMENT", {
    x: 0.62, y: 0.42, w: 6, h: 0.3,
    fontFace: SANS, fontSize: 11, bold: true, charSpacing: 2.2, color: COPPER, margin: 0
  });
  a.addText("Hook, six signs, then the counterweight", {
    x: 0.6, y: 0.78, w: 8.8, h: 0.5,
    fontFace: SERIF, fontSize: 27, bold: true, color: CHALK, margin: 0
  });

  const shots = [
    ["img/card-hook.png", "01 · the hook"],
    ["img/card-sign.png", "03 · one of six signs"],
    ["img/card-cta.png",  "09 · the ask"]
  ];
  shots.forEach(function (sh, i) {
    const w = 2.32, h = 2.9, x = 0.72 + i * 2.92, y = 1.5;
    a.addImage({
      path: sh[0], x: x, y: y, w: w, h: h,
      shadow: { type: "outer", blur: 12, offset: 3, angle: 90, color: "000000", opacity: 0.35 }
    });
    a.addText(sh[1], {
      x: x, y: y + h + 0.1, w: w, h: 0.28,
      fontFace: SANS, fontSize: 11, color: MUTED, align: "center", margin: 0
    });
  });
  a.addText("Every peso figure on these cards is a real range from the price list.", {
    x: 0.62, y: 4.94, w: 8.8, h: 0.3,
    fontFace: SANS, fontSize: 12, italic: true, color: MUTED, margin: 0
  });
  a.addNotes(
    "Say: nine slides that argue one thing — most roofs get replaced when they needed a repair. " +
    "The diagrams are hand-drawn, not stock. Do not narrate each card."
  );

  /* 4b · one source, three ratios */
  const b = pres.addSlide();
  b.background = { color: CHALK };
  b.addText("ONE SOURCE, THREE RATIOS", {
    x: 0.62, y: 0.42, w: 6, h: 0.3,
    fontFace: SANS, fontSize: 11, bold: true, charSpacing: 2.2, color: COPPER, margin: 0
  });
  b.addText("Nothing gets a bad crop", {
    x: 0.6, y: 0.78, w: 8.8, h: 0.5,
    fontFace: SERIF, fontSize: 27, bold: true, color: SLATE, margin: 0
  });

  const ratios = [
    ["img/ratio-45.png",  2.16, 2.7,  "4:5 · feed"],
    ["img/ratio-11.png",  2.4,  2.4,  "1:1 · carousel card"],
    ["img/ratio-916.png", 1.72, 3.05, "9:16 · Stories and Reels"]
  ];
  const gap = 0.62;
  const totalW = ratios.reduce(function (t, r) { return t + r[1]; }, 0) + gap * (ratios.length - 1);
  let cx = (10 - totalW) / 2;
  const baseline = 4.42;                       // all three sit on one baseline
  ratios.forEach(function (r) {
    b.addImage({
      path: r[0], x: cx, y: baseline - r[2], w: r[1], h: r[2],
      shadow: { type: "outer", blur: 10, offset: 2, angle: 90, color: "16232E", opacity: 0.18 }
    });
    b.addText(r[3], {
      x: cx - 0.3, y: baseline + 0.12, w: r[1] + 0.6, h: 0.28,
      fontFace: SANS, fontSize: 11, bold: true, color: STORM, align: "center", margin: 0
    });
    cx += r[1] + gap;
  });
  b.addText("Same HTML source, three viewport-height media queries. Fix a typo once, re-render three times.", {
    x: 0.6, y: 4.94, w: 8.8, h: 0.3,
    fontFace: SANS, fontSize: 12, italic: true, color: STORM, align: "center", margin: 0
  });
  b.addNotes(
    "The line that lands here: excluding Stories to dodge a bad crop is the wrong instinct — " +
    "supply the right crop instead."
  );

  /* 4c · four ads, one test */
  const c = pres.addSlide();
  darkBg(c);
  ring(c, 8.0, 3.3, 2.6, 1);
  c.addText("FOUR ADS, ONE TEST", {
    x: 0.62, y: 0.42, w: 6, h: 0.3,
    fontFace: SANS, fontSize: 11, bold: true, charSpacing: 2.2, color: COPPER, margin: 0
  });
  c.addText("Written so the result means something", {
    x: 0.6, y: 0.78, w: 8.8, h: 0.5,
    fontFace: SERIF, fontSize: 27, bold: true, color: CHALK, margin: 0
  });

  const drafts = [
    ["six-signs-carousel", "The full educational sequence"],
    ["story-7800",         "Photo · English testimonial"],
    ["taglish-380k",       "Same creative, Taglish interrupt — isolates copy"],
    ["the-18-peso-part",   "Diagram instead of photo — isolates creative"]
  ];
  drafts.forEach(function (d, i) {
    const y = 1.62 + i * 0.72;
    numeral(c, i + 1, 0.66, y + 0.03, 0.4, COPPER, CHALK);
    c.addText(d[0], {
      x: 1.24, y: y - 0.04, w: 2.9, h: 0.3,
      fontFace: SANS, fontSize: 13.5, bold: true, color: COPPER, margin: 0
    });
    c.addText(d[1], {
      x: 1.24, y: y + 0.22, w: 6.4, h: 0.3,
      fontFace: SANS, fontSize: 13, color: CHALK, margin: 0
    });
  });
  c.addText("Two pairs, one variable each. Four ads that can actually tell you why one won.", {
    x: 0.62, y: 4.72, w: 8.8, h: 0.35,
    fontFace: SANS, fontSize: 13, italic: true, color: MUTED, margin: 0
  });
  c.addNotes(
    "This is the strategy beat, and it is rarer than being able to make a nice image. " +
    "Say: two of these share creative so the only variable is the copy, and one swaps the " +
    "photo for a diagram against the same promise. A test you can learn from, not four guesses."
  );
}

sections.forEach(function (sec, si) {
  const s = pres.addSlide();
  darkBg(s);
  ring(s, 7.6, 1.05, 3.4, 1.25);
  s.addText(sec[0], {
    x: 0.62, y: 0.72, w: 1.2, h: 0.4,
    fontFace: SANS, fontSize: 12, bold: true, charSpacing: 2.4, color: COPPER, margin: 0
  });
  s.addText(sec[1], {
    x: 0.6, y: 1.3, w: 6.4, h: 0.8,
    fontFace: SERIF, fontSize: 40, bold: true, color: CHALK, margin: 0
  });
  s.addText(sec[2], {
    x: 0.62, y: 2.32, w: 6.0, h: 1.0,
    fontFace: SANS, fontSize: 15, color: CHALK, lineSpacing: 23, margin: 0
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 3.72, w: 6.2, h: 0.78, rectRadius: 0.05,
    fill: { color: STORM }
  });
  s.addText(sec[3], {
    x: 0.85, y: 3.72, w: 5.7, h: 0.78,
    fontFace: SANS, fontSize: 13.5, bold: true, color: CHALK, valign: "middle", margin: 0
  });
  s.addNotes(
    "Flash card — two seconds, then switch to the live screen. Say the 'what I can build for you' line, " +
    "not the description. The description is there so you remember the angle." +
    (sec[4] ? "\n\n" + sec[4] : "")
  );
  if (si === 1) adSlides();          // the two creative slides follow "02 · The ads"
});

/* ─────────────── 7 · close ─────────────── */
const s7 = pres.addSlide();
darkBg(s7);
ring(s7, -1.1, 2.5, 3.6, 1.25);

s7.addText("If you are running the business", {
  x: 0.6, y: 0.72, w: 8.8, h: 0.4,
  fontFace: SANS, fontSize: 12, bold: true, charSpacing: 2.2, color: COPPER, margin: 0
});
s7.addText("I can build this for you.", {
  x: 0.58, y: 1.22, w: 8.8, h: 0.8,
  fontFace: SERIF, fontSize: 40, bold: true, color: CHALK, margin: 0
});

const closes = [
  "Your CRM set up, with every lead in one place",
  "The funnel and the page that fills it",
  "The ads that feed the page",
  "The follow-up that runs on its own"
];
closes.forEach(function (t, i) {
  const y = 2.28 + i * 0.44;
  s7.addShape(pres.ShapeType.ellipse, {
    x: 0.66, y: y + 0.1, w: 0.14, h: 0.14, fill: { color: COPPER }
  });
  s7.addText(t, {
    x: 1.0, y: y, w: 5.4, h: 0.36,
    fontFace: SANS, fontSize: 15, color: CHALK, margin: 0
  });
});

s7.addShape(pres.ShapeType.roundRect, {
  x: 6.55, y: 2.3, w: 2.85, h: 0.92, rectRadius: 0.06,
  fill: { color: COPPER }
});
s7.addText("Book a call with me", {
  x: 6.55, y: 2.3, w: 2.85, h: 0.92,
  align: "center", valign: "middle",
  fontFace: SANS, fontSize: 16, bold: true, color: CHALK, margin: 0
});
s7.addText("REPLACE WITH YOUR BOOKING LINK", {
  x: 6.55, y: 3.32, w: 2.85, h: 0.3,
  align: "center", fontFace: SANS, fontSize: 10.5, bold: true,
  charSpacing: 0.6, color: MOSS, margin: 0
});
s7.addText("Peter Gutierrez", {
  x: 0.6, y: 4.62, w: 4, h: 0.32,
  fontFace: SERIF, fontSize: 15, bold: true, color: CHALK, margin: 0
});
s7.addNotes(
  "4:10-4:45 — The close. Name the next step out loud; do not let the slide do it alone. " +
  "Swap the placeholder for a real booking link BEFORE recording."
);

pres.writeFile({ fileName: process.argv[2] })
  .then(function (f) { console.log("wrote " + f); });
