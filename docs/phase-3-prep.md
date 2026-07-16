# Phase 3 Preparation — B Notes Landing

*Status: ready to start when approved*
*Last updated: 2026-07-12*

---

## Prerequisites checklist

| Item | Status |
|------|--------|
| Hero narrative (lecture → transcript → summary) | ✅ Phase 2.5 complete |
| Verified copy & URLs | ✅ `src/lib/content.ts` |
| Design tokens | ✅ `docs/design-tokens.md` |
| Product demo placeholder frame (16:9) | ✅ `ProductDemo.tsx` |
| Higgsfield CLI authenticated | ⏳ User action required |
| ffmpeg installed | ⏳ `winget install Gyan.FFmpeg` |
| Credit budget approved | ⏳ Product owner |
| Real extension screenshots | ⏳ Product owner |
| Official logo asset | ⏳ Replaces prototype monogram |

---

## Phase 3 scope options

### A — Asset insertion (no Higgsfield)
1. Replace `ProductDemo` placeholder with real screenshot/recording
2. Replace prototype `Logo` with official brand asset
3. Add OG image (1200×630) from approved brand kit
4. Deploy to staging URL (DNS separate approval)

### B — Scroll World cinematic (Higgsfield)
Follow `docs/scroll-world-storyboard.md` adapted to **editorial technology** aesthetic:
- Scene 1: Lecture overload (browser)
- Scene 2: Live transcript panel
- Scene 3: Hierarchy line gathers topics
- Scene 4: Structured summary document
- Scene 5: Chrome install CTA

**Architecture:** Continuous forward take (A), not diorama pull-out (B)
**Model default:** `seedance_2_0`
**Mobile:** Desktop-only video + still fallback (unless mobile beta opted in)

### C — Integration steps for Scroll World
1. Copy `scrub-engine.js` → `src/lib/scroll-world/`
2. Create `ScrollWorldHero.tsx` client wrapper
3. Feature flag: `USE_SCROLL_WORLD=false` until assets exist
4. Keep current CSS hero as fallback

---

## Recommended order

1. **Real product screenshot** (highest conversion impact, zero credits)
2. **Official logo + OG image**
3. **Scroll World** (if budget allows)
4. **Deploy**

---

## Do not do without approval

- Higgsfield generation (costs credits)
- DNS changes
- Modifications to https://bnotes.ai/
- Fabricated metrics or testimonials
