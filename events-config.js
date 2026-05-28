/**
 * USJEWLR — Promotional Events Configuration
 * Edit this file to update the announcement bar AND the homepage hero.
 *
 * Each event activates automatically between its start and end dates.
 * Set  active: true  to force-show it right now (preview/testing).
 *
 * hero.headline supports <br> and <em> tags.
 */

const PROMO_EVENTS = [

  // ── Mother's Day ────────────────────────────────────────────
  {
    id:       'mothers-day',
    name:     "Mother's Day",
    start:    '2026-05-08',
    end:      '2026-05-12',
    message:  "Celebrate Mom — Gift her something she'll cherish forever",
    code:     'MOMDAY20',
    discount: '20% off sitewide',
    bg:       '#4a6b5c',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "Mother's Day 2026",
      headline: "For Mom,<br>With<br><em>All Your</em><br>Love",
      sub:      "Give her a gift as extraordinary as she is. 20% off sitewide — use code MOMDAY20.",
      cta:      "Shop Mother's Day",
      ctaLink:  "shop.html?occ=gifts",
      cta2:     "View Gift Guide",
      cta2Link: "shop.html?occ=gifts",
    },
  },

  // ── Father's Day ─────────────────────────────────────────────
  {
    id:       'fathers-day',
    name:     "Father's Day",
    start:    '2026-06-14',
    end:      '2026-06-21',
    message:  "Celebrate Dad — Fine jewelry and watches for the man who has everything",
    code:     'DAD15',
    discount: '15% off',
    bg:       '#2a3a28',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "Father's Day 2026",
      headline: "For Dad,<br>A Gift<br><em>Worth</em><br>Remembering",
      sub:      "Fine jewelry and timepieces for the man who deserves the best. 15% off with code DAD15.",
      cta:      "Shop for Dad",
      ctaLink:  "shop.html?occ=gifts",
      cta2:     "View Men's Collection",
      cta2Link: "shop.html",
    },
  },

  // ── Valentine's Day ──────────────────────────────────────────
  {
    id:       'valentines',
    name:     "Valentine's Day",
    start:    '2026-02-10',
    end:      '2026-02-15',
    message:  "Share your love — fine jewelry for the one who means everything",
    code:     'LOVE15',
    discount: '15% off',
    bg:       '#5c3a3a',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "Valentine's Day",
      headline: "Tell Her<br>She Is<br><em>Your</em><br>Everything",
      sub:      "Express your love with fine jewelry she will cherish forever. 15% off with code LOVE15.",
      cta:      "Shop Valentine's Gifts",
      ctaLink:  "shop.html?occ=anniversary",
      cta2:     "Shop Engagement Rings",
      cta2Link: "shop.html?occ=engagement",
    },
  },

  // ── Graduation ───────────────────────────────────────────────
  {
    id:       'graduation',
    name:     "Graduation Season",
    start:    '2026-05-15',
    end:      '2026-06-10',
    message:  "Congratulations, Graduate — Celebrate her achievement with fine jewelry",
    code:     'GRAD10',
    discount: '10% off',
    bg:       '#374a35',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "Graduation 2026",
      headline: "She Did It.<br>Celebrate<br><em>Her</em><br>Achievement",
      sub:      "Mark her milestone with a piece she will treasure for a lifetime. 10% off with code GRAD10.",
      cta:      "Shop Graduation Gifts",
      ctaLink:  "shop.html?occ=graduation",
      cta2:     "View Necklaces",
      cta2Link: "shop.html?cat=necklaces",
    },
  },

  // ── Wedding Season ───────────────────────────────────────────
  {
    id:       'wedding-season',
    name:     "Wedding Season",
    start:    '2026-06-22',
    end:      '2026-07-15',
    message:  "Wedding Season — Complimentary engraving on all bridal jewelry",
    code:     'BRIDE2026',
    discount: 'Free engraving',
    bg:       '#5c7a58',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "Wedding Season 2026",
      headline: "The Ring<br>She Has<br><em>Always</em><br>Dreamed Of",
      sub:      "Complimentary engraving on all bridal jewelry this wedding season. Use code BRIDE2026.",
      cta:      "Shop Bridal",
      ctaLink:  "shop.html?occ=wedding",
      cta2:     "Shop Engagement Rings",
      cta2Link: "shop.html?occ=engagement",
    },
  },

  // ── Summer Sale ──────────────────────────────────────────────
  {
    id:       'summer-sale',
    name:     "Summer Sale",
    start:    '2026-07-16',
    end:      '2026-07-31',
    message:  "Summer Sale — Select pieces up to 30% off",
    code:     'SUMMER30',
    discount: 'Up to 30% off',
    bg:       '#4a6b3a',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "Summer Sale",
      headline: "Up to 30%<br>Off Select<br><em>Fine</em><br>Jewelry",
      sub:      "Our summer sale is here. Shop curated pieces at exceptional prices — while they last.",
      cta:      "Shop the Sale",
      ctaLink:  "shop.html?sale=true",
      cta2:     "View New Arrivals",
      cta2Link: "shop.html",
    },
  },

  // ── Black Friday ─────────────────────────────────────────────
  {
    id:       'black-friday',
    name:     "Black Friday",
    start:    '2026-11-26',
    end:      '2026-11-29',
    message:  "Black Friday — Our biggest event of the year is here",
    code:     'BF25',
    discount: '25% off everything',
    bg:       '#1a2018',
    color:    '#c8d8c5',
    active:   false,
    hero: {
      label:    "Black Friday",
      headline: "Our Biggest<br>Sale<br><em>of the</em><br>Year",
      sub:      "25% off everything — our once-a-year event. Don't miss it.",
      cta:      "Shop Black Friday",
      ctaLink:  "shop.html?sale=true",
      cta2:     "View All Jewelry",
      cta2Link: "shop.html",
    },
  },

  // ── Cyber Monday ─────────────────────────────────────────────
  {
    id:       'cyber-monday',
    name:     "Cyber Monday",
    start:    '2026-11-30',
    end:      '2026-12-02',
    message:  "Cyber Monday — Last chance on our holiday sale",
    code:     'CYBER20',
    discount: '20% off',
    bg:       '#1e2e1e',
    color:    '#c8d8c5',
    active:   false,
    hero: {
      label:    "Cyber Monday",
      headline: "Last Chance<br>on Our<br><em>Holiday</em><br>Sale",
      sub:      "20% off sitewide — today only. Use code CYBER20 at checkout.",
      cta:      "Shop Now",
      ctaLink:  "shop.html?sale=true",
      cta2:     "View All Collections",
      cta2Link: "shop.html",
    },
  },

  // ── Holiday / Christmas ──────────────────────────────────────
  {
    id:       'christmas',
    name:     "Holiday Season",
    start:    '2026-12-03',
    end:      '2026-12-25',
    message:  "Holiday Gifting — Free gift wrapping on all orders",
    code:     'HOLIDAY10',
    discount: '10% off + free wrapping',
    bg:       '#2a3a28',
    color:    '#e6efe6',
    active:   false,
    hero: {
      label:    "Holiday Season 2026",
      headline: "The Gift<br>of Fine<br><em>Jewelry</em>",
      sub:      "Free gift wrapping on every order. Make this holiday season truly unforgettable.",
      cta:      "Shop Holiday Gifts",
      ctaLink:  "shop.html?occ=gifts",
      cta2:     "View Gift Ideas",
      cta2Link: "shop.html?occ=gifts",
    },
  },

  // ── New Year ──────────────────────────────────────────────────
  {
    id:       'new-year',
    name:     "New Year",
    start:    '2026-12-26',
    end:      '2027-01-04',
    message:  "New Year, New You — Start 2027 with a little sparkle",
    code:     'NY2027',
    discount: '15% off',
    bg:       '#1e2e1e',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "New Year 2027",
      headline: "A New Year,<br>A New<br><em>You</em>",
      sub:      "Step into 2027 with something beautiful. 15% off with code NY2027.",
      cta:      "Shop New Arrivals",
      ctaLink:  "shop.html",
      cta2:     "View Collections",
      cta2Link: "product.html",
    },
  },

  // ── Anniversary ───────────────────────────────────────────────
  {
    id:       'anniversary',
    name:     "8th Anniversary",
    start:    '2026-09-15',
    end:      '2026-09-18',
    message:  "Celebrating 8 years of USJEWLR — Thank you for your love",
    code:     'ANNI8',
    discount: '18% off',
    bg:       '#374a35',
    color:    '#f4f7f4',
    active:   false,
    hero: {
      label:    "8th Anniversary",
      headline: "Eight Years<br>of Timeless<br><em>Elegance</em>",
      sub:      "Thank you for eight beautiful years. Celebrate with us — 18% off everything.",
      cta:      "Shop the Collection",
      ctaLink:  "shop.html",
      cta2:     "Our Story",
      cta2Link: "about.html",
    },
  },

];

// ── Default hero & bar (shown when no event is active) ─────────
const DEFAULT_PROMO = {
  messages: [
    "Free shipping on all orders over $150",
    "Complimentary gift packaging on every order",
    "GIA certified diamonds — ethically sourced",
    "Use code WELCOME10 for 10% off your first order",
  ],
  code:    'WELCOME10',
  discount:'10% off first order',
  bg:      '#1e2e1e',
  color:   '#c8d8c5',
  hero: {
    label:    "New Collection 2026",
    headline: "Adorn<br>Yourself in<br><em>Timeless</em><br>Elegance",
    sub:      "Handcrafted fine jewelry that celebrates life's most cherished moments. Each piece tells a story as unique as you are.",
    cta:      "Shop Collection",
    ctaLink:  "shop.html",
    cta2:     "Our Story",
    cta2Link: "about.html",
  },
};