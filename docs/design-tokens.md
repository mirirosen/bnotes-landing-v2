# Design Tokens — B Notes Landing

*Phase 2.5 — editorial technology palette*
*Last updated: 2026-07-12*

---

## Typography (2 families)

| Role | Family | Usage |
|------|--------|-------|
| **Body / UI / Headlines** | Assistant | Headlines, nav, CTA, body, transcript |
| **Editorial / Summary** | Frank Ruhl Libre | Structured summary document in hero only |

Serif is **not** used for page headlines after Phase 2.5 — reserved for the summary document zone.

---

## Color

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-paper` | `#F4F0E5` | Page background |
| `--color-paper-deep` | `#EBE5D6` | Section tints, stage shadow base |
| `--color-ink` | `#171915` | Primary text |
| `--color-ink-soft` | `#4A4843` | Secondary text |
| `--color-rule` | `#D4CFC3` | Borders, hairlines |
| `--color-accent` | `#244F76` | B Notes Blue — CTA, hierarchy line, brand |
| `--color-accent-hover` | `#1B3D5C` | CTA hover |
| `--color-digital` | `#9DC2D6` | Digital Light Blue — timestamps, connectors, live UI |
| `--color-marker` | `#E5B94B` | Study Marker — key detected points only |
| `--color-interface` | `#FCFCFA` | Interface White — panels, buttons, zones |

**Study Marker rule:** Only for highlighted summary bullets and trial indicator dot — never decorative.

---

## Signature Element

**Hierarchy line** — continuous vertical rule (`2px`, B Notes Blue) in the processing zone, echoed in summary document.

Integrated hero stage zones:
1. Online lecture (browser + LIVE + slides)
2. B Notes processing (live transcript + hierarchy line)
3. Structured summary (editorial document + marker highlight)

---

## Motion

| Context | Behavior |
|---------|----------|
| Desktop hero | ~7s orchestrated sequence in 48s cycle (hold + subtle replay) |
| Mobile hero | 3 connected static states above fold |
| `prefers-reduced-motion` | Static resolved states |

No canvas. No animation libraries.

---

## Components (Phase 2.5)

| Component | Purpose |
|-----------|---------|
| `Logo` | Prototype monogram (replace with official asset) |
| `ChromeIcon` | Restrained CTA icon |
| `TrustLine` | Structured pricing reassurance |
| `HeroVisual` | Integrated 3-zone stage |
| `Button` | Premium CTA with optional microcopy |
