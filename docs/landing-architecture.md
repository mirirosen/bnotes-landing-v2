# Landing Page Architecture — B Notes

*Phase 2 — approved architecture, implemented as a static prototype*
*Language: Hebrew | Direction: RTL*
*Last updated: 2026-07-12*

This supersedes the Phase 1 draft architecture. It reflects the approved creative direction (A + B), verified product facts, and the approved hero copy.

---

## Implemented Section Map

| # | Section | Component |
|---|---------|-----------|
| 1 | Header | `Header.tsx` |
| 2 | Hero + hierarchy visual | `Hero.tsx`, `HeroVisual.tsx` |
| 3 | Transformation flow | `TransformationFlow.tsx` |
| 4 | Product demo placeholder | `ProductDemo.tsx` |
| 5 | Core value (raw vs structured) | `CoreValue.tsx` |
| 6 | How it works | `HowItWorks.tsx` |
| 7 | Supported platforms | `Platforms.tsx` |
| 8 | Export outputs | `Exports.tsx` |
| 9 | Pricing | `Pricing.tsx` |
| 10 | Privacy & trust | `Privacy.tsx` |
| 11 | FAQ | `Faq.tsx` |
| 12 | Final CTA | `FinalCta.tsx` |
| 13 | Footer | `Footer.tsx` |

Copy source: `src/lib/content.ts`
Design tokens: `docs/design-tokens.md`

---

**Single primary conversion:** Install B Notes from the official Chrome Web Store:
`https://chromewebstore.google.com/detail/b-notes/djdmbmibfjjmgoacidjlnholckcaplli`

**Secondary goal:** Make the product understandable within five seconds — a Chrome extension that transcribes online lectures in real time and turns them into a structured study summary.

---

## Approved Page Architecture (12 sections)

```
 1. Header               — wordmark, minimal nav, CTA
 2. Hero                 — signature hierarchy-line transformation, headline, CTA, trust line
 3. Product demo          — honest placeholder area (no fake screenshots)
 4. Core value            — raw transcription vs. structured summary
 5. How it works          — 3 real steps (install → lecture runs → structured summary)
 6. Supported platforms   — Zoom, YouTube, Panopto, Vimeo, Teams, any audio tab; Chrome/Edge
 7. Summary & exports     — Word, PDF, NotebookLM
 8. Pricing               — single verified plan (7-day trial, ₪9.90/mo, cancel anytime)
 9. Privacy & trust       — neutral approved wording only
10. FAQ                   — objection handling, native accordion
11. Final CTA             — value recap + install
12. Footer                — legal, contact
```

---

## Section Specifications

### 1. Header

- Text wordmark "B Notes" (no logo file available — flagged placeholder)
- Nav: "איך זה עובד", "מחיר", "שאלות" (anchor links to in-page sections)
- Persistent CTA button: "התקינו את B Notes ב-Chrome" → Chrome Web Store URL
- Solid paper background with a bottom hairline rule; no blur/glass effects

### 2. Hero

| Element | Content |
|---|---|
| Eyebrow | תוסף Chrome להרצאות אונליין |
| Headline | ההרצאה מתקדמת. החומר כבר מתארגן. |
| Subheadline | B Notes מתמלל את ההרצאה בזמן אמת והופך אותה בסיום לסיכום ברור, מחולק לנושאים ומוכן ללמידה. |
| Primary CTA | התקינו את B Notes ב-Chrome → Chrome Web Store URL |
| Trust line | 7 ימי התנסות ללא תשלום · לאחר מכן ₪9.90 לחודש · ביטול בכל עת |
| Signature visual | Hierarchy-line gather animation (see below) — labeled as an illustration, not a screenshot |

**Signature animation ("hierarchy line"):**
Scattered Hebrew lecture fragments animate toward a single vertical line and settle into a heading, two subheadings, and bullet points — a CSS/SVG-only, transform+opacity animation (GPU-cheap, no canvas, no animation library). Plays once on load, ends in the resolved state. Two variants controlled purely by CSS media queries (no client-side detection):
- Desktop + motion allowed → animated gather
- Mobile **or** `prefers-reduced-motion: reduce` → three static states (עומס / תמלול וארגון / סיכום) shown at once, no animation

### 3. Product demo (placeholder)

Honest, clearly-designed placeholder panel (browser-frame outline + label), not a fabricated screenshot. Marked in code with a visible TODO comment and reported as an open asset placeholder. Replace with real product screenshots/recordings in Phase 3 once provided.

### 4. Core value

Two-column contrast: "תמלול גולמי" (raw transcript — dense, unstructured lines) vs. "סיכום מבני" (structured summary — heading/subheading/bullet hierarchy), using the same hierarchy-line visual language as the hero, restrained.

### 5. How it works

Three verified steps:
1. מתקינים את B Notes מ-Chrome Web Store
2. צופים בהרצאה — התמלול מוצג בזמן אמת
3. בסיום ההקלטה מתקבל סיכום מסודר, מחולק לנושאים

### 6. Supported platforms

List (verified): Zoom, YouTube, Panopto, Vimeo, Microsoft Teams, כל טאב בכרום שמשמיע אודיו.
Browser support line (verified): Google Chrome, Microsoft Edge, ודפדפנים מבוססי Chromium.

### 7. Summary & exports

Three verified export formats: Word (DOCX), PDF, Google NotebookLM. Presented as plain labeled items, not decorative icon cards.

### 8. Pricing

Single plan, verified terms only:
- 7 ימי התנסות ללא תשלום
- ₪9.90 לחודש לאחר מכן
- ביטול בכל עת

No tiers invented. No comparison table (nothing to compare against).

### 9. Privacy & trust

Approved neutral wording only:
> "האודיו מעובד לצורך התמלול. מידע נוסף זמין במדיניות הפרטיות."

Privacy policy link target is currently a placeholder (`#`) pending a verified URL — flagged as an open item, not linked to an invented address.

### 10. FAQ

Native `<details>/<summary>` accordion (accessible, keyboard-operable, no JS required):
1. באילו הרצאות אפשר להשתמש ב-B Notes?
2. באילו דפדפנים זה עובד?
3. מתי מתקבל הסיכום?
4. אילו שפות נתמכות?
5. איך אפשר לייצא את הסיכום?
6. מה קורה עם הפרטיות שלי?
7. כמה זה עולה?

### 11. Final CTA

Value recap headline + primary CTA repeated + trust line repeated.

### 12. Footer

© B Notes, privacy link (placeholder), contact — no aggressive outbound link to `bnotes.ai` (keeps focus on the single install conversion goal).

---

## Design Tokens

### Color

| Token | Value | Usage |
|-------|-------|-------|
| `--color-paper` | `#F1ECDE` | Page background |
| `--color-paper-deep` | `#E7DFC9` | Secondary panel background |
| `--color-ink` | `#211D17` | Primary text (warm near-black) |
| `--color-ink-soft` | `#5B5346` | Secondary text |
| `--color-rule` | `#C9BFA6` | Hairline dividers, hierarchy line |
| `--color-accent` | `#2F4C63` | Primary CTA, links, active states |
| `--color-accent-hover` | `#24394C` | CTA hover/active |
| `--color-accent-soft` | `#E3E7E4` | Backgrounds behind accent chips |

Rationale: warm paper ground shifted away from the generic AI "cream" default (`#F4F1EA`) toward a deeper, slightly more textured tone; deep blue accent instead of terracotta to read as studious/credible rather than trendy-AI.

### Typography

Two families only, both self-hosted via `next/font/google` with the Hebrew subset:

| Role | Family | Notes |
|------|--------|-------|
| Display / headings | Frank Ruhl Libre | Serif, editorial, distinct from generic Israeli SaaS sans defaults |
| Body / UI | Assistant | Humanist sans, high Hebrew readability at small sizes |

### Spacing & layout

- `dir="rtl"`, `lang="he"` on `<html>`
- Max content width: ~1180px for text sections
- Section vertical rhythm: generous (80–128px desktop, 48–64px mobile)
- Buttons: small radius (8px) — not zero-radius broadsheet, not pill-shaped SaaS default

---

## Technical Architecture (implemented)

```
src/
  app/
    layout.tsx          RTL, Hebrew lang, fonts, metadata
    page.tsx             Section composition
    globals.css          Design tokens, base styles
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      ProductDemo.tsx
      CoreValue.tsx
      HowItWorks.tsx
      Platforms.tsx
      Exports.tsx
      Pricing.tsx
      Privacy.tsx
      Faq.tsx
      FinalCta.tsx
    hero/
      HeroVisual.tsx
      HeroVisual.module.css
    ui/
      Button.tsx
      Container.tsx
      Eyebrow.tsx
      SectionHeading.tsx
  lib/
    content.ts            Centralized Hebrew copy + verified links
```

### Next.js 16 considerations applied
- No client components except where interactivity is required (Header CTA reuse via shared `Button`, `HeroVisual` needs no client JS — purely CSS-driven, so it stays a server component)
- `next/font/google` self-hosted fonts with `hebrew` + `latin` subsets
- Static metadata (no dynamic params in this route)
- No middleware/proxy, no PPR/cacheComponents needed for a static page

### Accessibility
- `prefers-reduced-motion` fallback built with CSS only (no JS branching)
- Visible focus states on all interactive elements
- FAQ via native `<details>/<summary>`
- Color contrast checked against WCAG AA for ink-on-paper and paper-on-accent combinations
- Minimum 44px touch targets on mobile CTAs

---

## Content Explicitly Excluded (by rule)

- Fabricated statistics, install counts, ratings
- Testimonials, quotes, or university logos
- Absolute privacy/local-processing claims
- Comparison tables against named competitors
- References to the legacy name "Lectify"
