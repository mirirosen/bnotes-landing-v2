# Phase 3 Credit Budget — B Notes

*Planning document — no credits spent*
*Last updated: 2026-07-12*

---

## Tooling status

| Tool | Version / Status |
|------|------------------|
| Higgsfield CLI | 1.1.13 — installed |
| Higgsfield auth | **Not authenticated** (`higgsfield auth token` fails) |
| ffmpeg | **Not installed** |
| ffprobe | **Not installed** |
| scroll-world skill | Installed at `.agents/skills/scroll-world/` |

**Before any generation:**
1. User runs `higgsfield auth login`
2. Install ffmpeg: `winget install Gyan.FFmpeg`
3. Verify balance: `higgsfield workspace list` (after auth)

---

## Credit estimate disclaimer

Higgsfield credit costs vary by model, resolution, and duration. Exact per-job costs require authentication and `higgsfield model get <job_type>`. Figures below are **planning estimates** based on scroll-world skill patterns — verify against live balance before approval.

---

## Proof of concept (recommended first spend)

| Asset | Model | Params | Est. credits | Notes |
|-------|-------|--------|--------------|-------|
| POC-1 Style-frame | `gpt_image_2` | 16:9, 2k, high | ~3–8 | Master reference for entire chain |
| POC-2 Motion test | `seedance_2_0` | 1080p, 5s, std | ~15–40 | Validates glide, palette, no-text rule |

### Proposed POC total: ~20–50 credits

*Verify actual cost after `higgsfield auth login`.*

---

## Full Scroll World production (after POC approval)

| Category | Count | Model | Est. credits each | Subtotal |
|----------|-------|-------|-------------------|----------|
| Scene stills | 4 | `gpt_image_2` | ~3–8 | ~12–32 |
| Dive legs | 4 | `seedance_2_0` | ~15–40 | ~60–160 |
| Connectors | 3 | `seedance_2_0` | ~10–25 | ~30–75 |
| Re-roll buffer (15%) | — | — | — | ~15–40 |

### Proposed full chain total: ~120–310 credits

Includes one re-roll pass for seam/content-filter failures per scroll-world gotchas.

---

## Draft tier option

Run entire chain first on `seedance_2_0_mini` (720p, cheaper, frame-locked) for previz, then re-render finals on `seedance_2_0` at 1080p.

| Tier | Est. savings | Trade-off |
|------|--------------|-----------|
| Previz on mini | ~40–60% on video gens | 720p draft review only |
| Final on full | Full cost | Production quality |

---

## Phase 3A (no credits)

| Asset | Source | Cost |
|-------|--------|------|
| Extension screenshot | Product owner capture | 0 |
| Official logo | Brand kit | 0 |
| OG image | Design export | 0 |

---

## Proof of concept — success criteria

- [ ] Palette matches tokens (paper, ink, B Notes blue, digital blue, interface white)
- [ ] Graphite lecture environment reads as premium and architectural
- [ ] No readable text/Hebrew in any frame (scrub full clip)
- [ ] Study-marker yellow absent in POC-1 (Beat 1) — yellow only in Beat 3
- [ ] Motion is slow, continuous, no hard cuts
- [ ] Sufficient headroom/negative space for HTML headline overlay
- [ ] No platform logos, neon, holograms, AI motifs
- [ ] POC-2 last frame is usable as Beat 1 leg end-state

## Proof of concept — rejection criteria

Reject and re-prompt if any of:
- Readable text, numbers, or Hebrew glyphs appear
- Wrong art direction (toy diorama, neon sci-fi, hologram HUD)
- Platform logos visible
- Student face/portrait as focal subject
- Multiple yellow highlights
- Aggressive camera shake or whip pans
- NSFW/content-filter failure (re-roll per skill; try `kling3_0` as fallback if persistent)
- Motion too fast for scroll-scrub (feels like a trailer, not a glide)

---

## Approval gates

| Gate | Required approval |
|------|-------------------|
| POC-1 style-frame | Explicit user approval |
| POC-2 motion test | POC-1 accepted |
| Full chain | POC accepted + credit budget signed off |
| Deployment | Separate approval (out of scope) |

**Current status: STOPPED before any paid generation.**
