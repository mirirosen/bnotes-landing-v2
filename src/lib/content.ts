/**
 * Centralized, verified copy and links for the B Notes landing page.
 * Every claim here traces back to `.agents/product-marketing.md`.
 * Do not add statistics, testimonials, or claims that aren't verified there.
 */

export const links = {
  chromeStore:
    "https://chromewebstore.google.com/detail/b-notes/djdmbmibfjjmgoacidjlnholckcaplli",
  privacyPolicy: "https://bnotes.ai/privacy",
  productionSite: "https://bnotes.ai/",
} as const;

export const brand = {
  name: "B Notes",
} as const;

export const nav = [
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#pricing", label: "מחיר" },
  { href: "#faq", label: "שאלות" },
] as const;

export const cta = {
  primary: "התקינו את B Notes ב־Chrome",
  headerMobile: "התקנה",
  microcopy: "התקנה דרך חנות Chrome הרשמית",
  secondary: "איך זה עובד",
} as const;

export const trustLine =
  "7 ימי התנסות ללא תשלום · לאחר מכן ₪9.90 לחודש · ביטול בכל עת";

export const trustLineMobile =
  "7 ימים ללא תשלום · לאחר מכן ₪9.90 לחודש · ביטול בכל עת";

export const hero = {
  eyebrow: "תוסף Chrome לסטודנטים בהרצאות אונליין",
  headline: "ההרצאה מתקדמת. החומר כבר מתארגן.",
  subheadline:
    "B Notes מתמלל את ההרצאה בזמן אמת והופך אותה בסיום לסיכום ברור, מחולק לנושאים ומוכן ללמידה.",
} as const;

export const heroVisual = {
  caption: "אילוסטרציה של התהליך — הממשק האמיתי יוצג בהמשך",
  lecture: {
    title: "מבוא לכלכלה: שוק ומחיר",
    path: "lecture.university.ac.il/eco101",
    slides: ["עקומת ביקוש", "שיווי משקל", "עלות שולית"],
  },
  transcript: [
    { time: "04:12", text: "היצע וביקוש קובעים את המחיר" },
    { time: "04:28", text: "בנקודת שיווי המשקל אין עודף" },
    { time: "04:41", text: "עלות שולית לעומת תועלת שולית" },
    { time: "04:55", text: "גמישות מחיר משפיעה על השוק" },
  ],
  floatingFragments: [
    "היצע וביקוש",
    "שיווי משקל",
    "עלות שולית",
    "גמישות מחיר",
  ],
  outline: {
    heading: "מבוא לכלכלה: שוק ומחיר",
    groups: [
      {
        subheading: "היצע, ביקוש ושיווי משקל",
        bullets: ["היצע וביקוש", "שיווי משקל"],
        highlight: "שיווי משקל",
      },
      {
        subheading: "עלות ותועלת",
        bullets: ["עלות שולית", "תועלת שולית"],
      },
      {
        subheading: "גמישות ועודפים",
        bullets: ["גמישות מחיר", "עודף יצרן"],
      },
    ],
  },
  mobileStates: [
    { id: "lecture", label: "הרצאה אונליין" },
    { id: "process", label: "תמלול וארגון" },
    { id: "summary", label: "סיכום לימודי" },
  ],
} as const;

export const transformationFlow = {
  eyebrow: "התהליך",
  title: "מהרעש של ההרצאה לסיכום שאפשר ללמוד ממנו",
  stages: [
    {
      label: "עומס מההרצאה",
      detail: "דיבור, שקפים ומידע רציף שקשה לעקוב אחריו",
    },
    {
      label: "תמלול בזמן אמת",
      detail: "B Notes מתמלל בזמן שההרצאה מתקדמת",
    },
    {
      label: "קיבוץ למבנה",
      detail: "נושאים, כותרות ותת־כותרות מתארגנים",
    },
    {
      label: "סיכום לימודי",
      detail: "חומר מסודר, מוכן ללמידה ולייצוא",
    },
  ],
} as const;

export const productDemo = {
  eyebrow: "המוצר בפעולה",
  title: "כך נראה B Notes בזמן הרצאה",
  body: "תמלול חי בזמן ההקלטה, לצד היסטוריה, שיתוף ושאלות על החומר — ישירות בתוך הדפדפן.",
  realLabel: "צילום מסך אמיתי מתוך התוסף",
  screenshotAlt:
    "ממשק התוסף B Notes בזמן הקלטת הרצאה: תמלול חי בעברית, יתרת דקות, כרטיסיות תמלול חי והיסטוריה, וכפתורי הקלטה, השהיה ועצירה",
  // Every highlight below is visible in the real capture shown beside it.
  highlights: [
    {
      title: "תמלול חי תוך כדי ההרצאה",
      detail: "הטקסט נכתב על המסך בזמן אמת, בעברית, בלי לעצור את הצפייה.",
    },
    {
      title: "הכול נשמר ומסודר",
      detail: "היסטוריית הקלטות, שיתוף ל-WhatsApp ושאלות על החומר — במקום אחד.",
    },
    {
      title: "שליטה מלאה בהקלטה",
      detail: "הקלטה, השהיה ועצירה בלחיצה, עם יתרת הדקות תמיד מול העיניים.",
    },
  ],
} as const;

export const coreValue = {
  eyebrow: "לא עוד תמלול גולמי",
  title: "ההבדל הוא במבנה, לא רק בטקסט",
  body: "תמלול גולמי הוא רצף מילים רציף שקשה לחזור אליו. B Notes בונה ממנו סיכום עם נושאים, כותרות ותת־כותרות — משהו שאפשר ללמוד ממנו.",
  before: {
    label: "תמלול גולמי",
    lines: [
      "אז נדבר היום על היצע וביקוש ואיך זה קובע מחיר בשוק ואחר כך נעבור לעלות שולית ותועלת שולית וגם נדבר קצת על גמישות מחיר וזה חשוב להבין את הקשר בין כל אלה",
    ],
  },
  after: {
    label: "סיכום מבני",
    heading: "היצע, ביקוש ומחיר שוק",
    bullets: ["היצע וביקוש קובעים שיווי משקל", "עלות שולית מול תועלת שולית", "גמישות מחיר משפיעה על שיווי המשקל"],
  },
} as const;

export const howItWorks = {
  eyebrow: "איך זה עובד",
  title: "שלושה שלבים, בלי לשנות הרגלים",
  steps: [
    {
      title: "מתקינים את B Notes",
      body: "הוספה ל-Chrome מהחנות הרשמית, בכמה שניות.",
    },
    {
      title: "צופים בהרצאה כרגיל",
      body: "התמלול מוצג בזמן אמת בזמן שההרצאה מתקדמת.",
    },
    {
      title: "מקבלים סיכום מסודר",
      body: "בסיום ההקלטה נבנה סיכום מחולק לנושאים, מוכן ללמידה.",
    },
  ],
} as const;

export const platforms = {
  eyebrow: "איפה זה עובד",
  title: "פלטפורמות ודפדפנים נתמכים",
  sources: ["Zoom", "YouTube", "Panopto", "Vimeo", "Microsoft Teams", "כל טאב בכרום שמשמיע אודיו"],
  browsers: ["Google Chrome", "Microsoft Edge", "דפדפנים נוספים מבוססי Chromium"],
} as const;

export const exports_ = {
  eyebrow: "הסיכום שלכם, בכל פורמט",
  title: "ייצוא הסיכום",
  formats: [
    { label: "Word", detail: "קובץ DOCX לעריכה חופשית" },
    { label: "PDF", detail: "מוכן להדפסה ולשיתוף" },
    { label: "Google NotebookLM", detail: "ייצוא ישיר להמשך עבודה" },
  ],
} as const;

export const pricing = {
  eyebrow: "מחיר",
  title: "תוכנית אחת, פשוטה וברורה",
  trialLabel: "7 ימי התנסות",
  trialDetail: "ללא תשלום",
  // U+200A hair space after ₪ — in the display serif the glyph otherwise
  // reads as the letter ש against the digits.
  priceLabel: "₪ 9.90",
  priceDetail: "לחודש, לאחר תקופת ההתנסות",
  cancelDetail: "ביטול בכל עת",
  // Verified claims only — each appears elsewhere on the page (demo/FAQ).
  valuePoints: [
    "תמלול חי במהלך ההרצאה",
    "סיכום מסודר בסיום כל הקלטה",
    "ייצוא ל-Word, PDF ו-NotebookLM",
    "עברית ואנגלית",
  ],
} as const;

export const privacy = {
  eyebrow: "פרטיות",
  title: "מה קורה עם ההרצאה שלכם",
  body: "האודיו מעובד לצורך התמלול. מידע נוסף זמין במדיניות הפרטיות.",
  linkLabel: "למדיניות הפרטיות",
} as const;

export const faq = {
  eyebrow: "שאלות",
  title: "שאלות נפוצות",
  items: [
    {
      question: "באילו הרצאות אפשר להשתמש ב-B Notes?",
      answer:
        "ב-Zoom, YouTube, Panopto, Vimeo, Microsoft Teams, וכל טאב בכרום שמשמיע אודיו.",
    },
    {
      question: "באילו דפדפנים זה עובד?",
      answer: "ב-Google Chrome, Microsoft Edge, ובדפדפנים נוספים מבוססי Chromium.",
    },
    {
      question: "מתי מתקבל הסיכום?",
      answer:
        "התמלול מוצג בזמן אמת בזמן ההרצאה. הסיכום המסודר נבנה בסיום ההקלטה.",
    },
    {
      question: "אילו שפות נתמכות?",
      answer: "עברית ואנגלית.",
    },
    {
      question: "איך אפשר לייצא את הסיכום?",
      answer: "ל-Word (DOCX), ל-PDF, ול-Google NotebookLM.",
    },
    {
      question: "מה קורה עם הפרטיות שלי?",
      answer: privacy.body,
    },
    {
      question: "כמה זה עולה?",
      answer: `${pricing.trialLabel} ${pricing.trialDetail}, ולאחר מכן ${pricing.priceLabel} ${pricing.priceDetail}. ${pricing.cancelDetail}.`,
    },
  ],
} as const;

export const finalCta = {
  title: "צאו מההרצאה עם סיכום שאפשר ללמוד ממנו.",
  body: "התקינו את B Notes ב-Chrome והתחילו מההרצאה הבאה.",
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} ${brand.name}`,
} as const;
