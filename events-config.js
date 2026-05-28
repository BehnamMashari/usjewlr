/**
 * ╔══════════════════════════════════════════════════════╗
 * ║   USJEWLR — Promotional Events Configuration         ║
 * ║   Edit this file to update the announcement bar      ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * HOW TO USE:
 *  • Each event activates automatically between its start and end dates.
 *  • Set  active: true  on any event to force-show it right now (for preview/testing).
 *  • Leave  code: ''  if you don't want a promo code shown.
 *  • bg / color accept any CSS color value.
 *
 * BRAND COLORS FOR REFERENCE:
 *   Stone Brown : #8b7355
 *   Dark        : #2c2320
 *   Charcoal    : #4a3f38
 *   Greige      : #d9cdc1
 *   Cream       : #faf6f1
 */

const PROMO_EVENTS = [

  // ── Mother's Day ─────────────────────────────────────
  {
    id:       'mothers-day',
    name:     "Mother's Day",
    start:    '2026-05-08',
    end:      '2026-05-12',
    message:  "Celebrate Mom — Gift her something she'll cherish forever",
    code:     'MOMDAY20',
    discount: '20% off sitewide',
    bg:       '#7a5c4a',
    color:    '#faf6f1',
    active:   false,
  },

  // ── Valentine's Day ───────────────────────────────────
  {
    id:       'valentines',
    name:     "Valentine's Day",
    start:    '2026-02-10',
    end:      '2026-02-15',
    message:  "Share your love — fine jewelry for the one who means everything",
    code:     'LOVE15',
    discount: '15% off',
    bg:       '#6b3f3f',
    color:    '#faf6f1',
    active:   false,
  },

  // ── Black Friday ──────────────────────────────────────
  {
    id:       'black-friday',
    name:     "Black Friday",
    start:    '2026-11-26',
    end:      '2026-11-30',
    message:  "Black Friday — Our biggest event of the year is here",
    code:     'BF25',
    discount: '25% off everything',
    bg:       '#1a1814',
    color:    '#d9cdc1',
    active:   false,
  },

  // ── Cyber Monday ─────────────────────────────────────
  {
    id:       'cyber-monday',
    name:     "Cyber Monday",
    start:    '2026-11-30',
    end:      '2026-12-02',
    message:  "Cyber Monday — Last chance on our holiday sale",
    code:     'CYBER20',
    discount: '20% off',
    bg:       '#2c2320',
    color:    '#d9cdc1',
    active:   false,
  },

  // ── Holiday / Christmas ───────────────────────────────
  {
    id:       'christmas',
    name:     "Holiday Season",
    start:    '2026-12-10',
    end:      '2026-12-25',
    message:  "Holiday Gifting — Free gift wrapping on all orders",
    code:     'HOLIDAY10',
    discount: '10% off + free wrapping',
    bg:       '#3a3a2e',
    color:    '#f0e8de',
    active:   false,
  },

  // ── New Year ──────────────────────────────────────────
  {
    id:       'new-year',
    name:     "New Year",
    start:    '2026-12-31',
    end:      '2027-01-04',
    message:  "New Year, New You — Start 2027 with a little sparkle",
    code:     'NY2027',
    discount: '15% off',
    bg:       '#2c2320',
    color:    '#faf6f1',
    active:   false,
  },

  // ── Wedding Season ────────────────────────────────────
  {
    id:       'wedding-season',
    name:     "Wedding Season",
    start:    '2026-06-01',
    end:      '2026-07-15',
    message:  "Wedding Season — Complimentary engraving on all bridal jewelry",
    code:     'BRIDE2026',
    discount: 'Free engraving',
    bg:       '#8b7355',
    color:    '#faf6f1',
    active:   false,
  },

  // ── Summer Sale ───────────────────────────────────────
  {
    id:       'summer-sale',
    name:     "Summer Sale",
    start:    '2026-07-01',
    end:      '2026-07-31',
    message:  "Summer Sale — Select pieces up to 30% off",
    code:     'SUMMER30',
    discount: 'Up to 30% off',
    bg:       '#6b6040',
    color:    '#faf6f1',
    active:   false,
  },

  // ── Anniversary (customize the date each year) ────────
  {
    id:       'anniversary',
    name:     "8th Anniversary",
    start:    '2026-09-15',
    end:      '2026-09-18',
    message:  "Celebrating 8 years of USJEWLR — Thank you for your love",
    code:     'ANNI8',
    discount: '18% off',
    bg:       '#4a3f38',
    color:    '#faf6f1',
    active:   false,
  },

  // ── Add your own event here ───────────────────────────
  // {
  //   id:       'my-event',
  //   name:     "Event Name",
  //   start:    'YYYY-MM-DD',
  //   end:      'YYYY-MM-DD',
  //   message:  "Your message here",
  //   code:     'YOURCODE',
  //   discount: 'X% off',
  //   bg:       '#8b7355',
  //   color:    '#faf6f1',
  //   active:   false,
  // },

];

// ── Default bar (shown when no event is active) ───────────
const DEFAULT_PROMO = {
  messages: [
    "Free shipping on all orders over $150",
    "Complimentary gift packaging on every order",
    "GIA certified diamonds · Ethically sourced",
    "Use code WELCOME10 for 10% off your first order",
  ],
  code:    'WELCOME10',
  discount:'10% off first order',
  bg:      '#2c2320',
  color:   '#d9cdc1',
};
