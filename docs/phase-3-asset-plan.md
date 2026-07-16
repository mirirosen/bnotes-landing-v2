# Phase 3 Asset Plan — B Notes Scroll Cinematic

*Status: planning only — no assets generated*
*Last updated: 2026-07-12*

---

## Objective

Replace the CSS hero illustration with a **continuous scroll-scrubbed cinematic** that tells the same editorial-technology story as Phase 2.5:

**Online lecture → capture & organization → structured summary → CTA resting frame**

All readable Hebrew copy remains in **HTML/CSS overlays** — never embedded in generated video.

---

## Prerequisites (current state)

| Requirement | Status |
|-------------|--------|
| scroll-world skill installed | ✅ `.agents/skills/scroll-world/` |
| Higgsfield CLI | ✅ v1.1.13 on PATH |
| Higgsfield authenticated | ❌ `higgsfield auth token` → Not authenticated |
| ffmpeg | ❌ Not installed |
| ffprobe | ❌ Not installed |
| Phase 2.6 static landing | ✅ Complete |
| Verified copy in `content.ts` | ✅ |
| Design tokens | ✅ `docs/design-tokens.md` |
| Product screenshots | ⏳ Awaiting product owner (Phase 3A asset insertion) |

---

## Architecture

### Scroll engine
- Portable scrub engine: `.agents/skills/scroll-world/references/scrub-engine.js`
- Target wrapper: `src/lib/scroll-world/` + `ScrollWorldHero.tsx` (future)
- Feature flag: `USE_SCROLL_WORLD=false` until assets approved

### Seam strategy
- **Architecture A** — continuous forward take (not isometric diorama pull-out)
- Model default: `seedance_2_0` (frame-lock capable)
- Aspect ratio: **16:9** (desktop-native; mobile gets still fallback + lighter encode if beta opted in later)

### Text rule (non-negotiable)
Higgsfield generates **visual environments only** — abstract UI shapes, color fields, hierarchy-line geometry, paper surfaces.  
All Hebrew headlines, CTAs, transcript lines, and summary text are rendered in the React layer above/beside the video.

---

## Production phases

### Phase 3A — Asset insertion (no Higgsfield)
1. Real extension screenshot/recording → `ProductDemo`
2. Official logo → replace prototype monogram
3. OG image (1200×630)

### Phase 3B — Proof of concept (requires approval)
1. One master style-frame still
2. One short camera-motion test from that frame
3. Review against success/rejection criteria in `docs/phase-3-credit-budget.md`

### Phase 3C — Full Scroll World (requires approval + credits)
See `docs/phase-3-shot-list.md` for complete shot breakdown.

---

## Scene map (4 beats)

| # | Beat | Visual | HTML overlay |
|---|------|--------|--------------|
| 1 | Online lecture | Dark graphite browser/lecture environment, audio waveform, abstract slide fragments, timestamp chips (no readable text) | Optional eyebrow only |
| 2 | Capture & organization | Camera glides across browser surface; fragments gather; single blue hierarchy line | Live transcript panel (Hebrew) |
| 3 | Structured summary | Resolves to clean white editorial document surface | Summary headings/bullets (Hebrew) |
| 4 | CTA resting frame | Calm paper-toned negative space, subtle interface white panel | Headline + Chrome CTA |

---

## Art direction lock

- **Editorial technology** — architectural, matte, restrained
- Premium paper `#F4F0E5` and interface white `#FCFCFA`
- B Notes blue `#244F76` as primary digital signal
- Digital light blue `#9DC2D6` for live-state accents
- Study-marker yellow `#E5B94B` — **once**, on one key point
- No neon, holograms, AI brain, robots, platform logos
- No readable generated Hebrew in video

---

## Dependencies before any paid generation

1. `higgsfield auth login` (interactive OAuth — user action)
2. `winget install Gyan.FFmpeg` (or equivalent)
3. Credit budget approval
4. Explicit POC approval

---

## Deliverables checklist

- [x] `docs/phase-3-asset-plan.md` (this file)
- [x] `docs/phase-3-shot-list.md`
- [x] `docs/phase-3-higgsfield-prompts.md`
- [x] `docs/phase-3-credit-budget.md`
- [ ] POC style-frame (blocked — awaiting approval)
- [ ] POC motion test (blocked — awaiting approval)
- [ ] Full cinematic chain (blocked — Phase 3C)
