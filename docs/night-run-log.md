# Night Run — UI/UX Perfection Loop (2026-07-15)

Autonomous overnight loop: expert audit → consult GPT (real, via local Codex
CLI `codex exec`) → fix → verify (lint/tsc/Playwright suite/build + Playwright
MCP visual + Claude browser pane) → repeat. Extension-mode Playwright remains
NOT CONFIGURED in this environment (requires user-installed bridge extension +
server reconfiguration) — documented blocker; isolated MCP + in-app browser
used instead.

## Iteration 1

### Claude's independent critique (written BEFORE consulting GPT)

Evidence: audit-1280x720.png, audit-1920x950.png, hero-mobile-portrait.png,
site-3d-full.png; console: 0 errors 0 warnings.

| # | Sev | Finding | Evidence | Proposed fix |
|---|-----|---------|----------|--------------|
| 1 | P1 | CTA + trust line ride the laptop's bright screen at 1280–1920 widths — the scene-corner radial scrim doesn't track the copy cluster across viewports | audit-1280x720 / audit-1920x950 | Attach a soft radial scrim to the copy container itself (travels with the text at every size) |
| 2 | P1 | No og:image / twitter card — shares render textless | layout.tsx metadata | 1200×630 crop of the hero frame + openGraph.images + twitter summary_large_image |
| 3 | P2 | 404 page is unstyled default — breaks the world on a bad link | no not-found.tsx | Branded night-stage not-found.tsx with home CTA |
| 4 | P2 | ProductDemo card is the only major block without a Reveal — motion language inconsistency | code | Wrap in Reveal |
| 5 | P3 | Mobile header CTA (התקנה) at-top reads dim on the dark stage | hero-mobile-portrait | Bump at-top override contrast (border/text alpha) |

Initial verdict: **Go with changes** (the P1s).

### GPT consultation (Codex CLI, model gpt-5.6-sol) — REAL response received

_Sent the same evidence + questions, without revealing Claude's critique.
First attempt failed (stream disconnect to chatgpt.com backend after 5
reconnects); retry with a smaller image payload succeeded._

GPT's key points (faithful summary):
1. 5-sec clarity reasonable; **audience only implied** — "for students" not explicit.
2. Metaphor communicates "audio becomes notes" well (especially mobile), less so "live" and transcript-vs-summary distinction.
3. Cinematics premium and differentiated; **8s camera move is long while reading**; poster/reduced-motion/responsive encodes needed (already in place — not visible from screenshots).
4. CTA strong but **crowding/contrast issues around CTA + trust line over variable imagery** (matches Claude #1).
5. **Single biggest flaw: the hero dramatizes without proving — no real product output near the fold.**
6. Top-3: real product output above/near the fold; explicit audience; shorter move + consistent dark scrim behind text.
7. Remove: the floating "N" control (— it is Next.js DevTools, dev-only, absent in production; no action) and the faint mobile header CTA if it can't be made actionable.
8. Verdict: **Go with changes.**

### Synthesis & decisions

| Finding | Source | Decision |
|---|---|---|
| Copy/CTA contrast over imagery | Both (Claude #1 = GPT #4/#6c) | **Fixed**: `.hero-copy::before` radial scrim that travels with the copy cluster (verified 1280/1920) |
| Product proof far from fold | GPT (#5/#6a) — strongest unique finding | **Fixed**: ProductDemo (real screenshot) moved to directly after the hero |
| Audience implicit | GPT (#6b) | **Fixed**: eyebrow → "תוסף Chrome לסטודנטים בהרצאות אונליין" |
| 8s move long | GPT (#3) | **Fixed**: 1.25× speed-up → 6.4s (arc preserved, settle intact) |
| Mobile header CTA dim | Both | **Fixed**: at-top override — brighter text/border + subtle digital fill |
| og:image missing | Claude #2 | **Fixed**: 1200×630 crop (52KB jpg) + openGraph.images + twitter card |
| Unbranded 404 | Claude #3 | **Fixed**: night-stage not-found.tsx |
| ProductDemo lacked Reveal | Claude #4 | **Fixed** |
| Floating "N" | GPT #7 | No action — Next.js dev overlay, dev-only |

### Iteration 1 results
lint ✓ · typecheck ✓ · Playwright 70/70 exit 0 ✓ · production build ✓ ·
visual verify at 1280×720 / 1440×900 / 1920×950 / 390×844 ✓ · 404 page ✓ ·
verified in Claude in-app browser ✓ · console 0 errors 0 warnings ✓

## Iteration 2 (re-audit)

Fresh full-page pass after fixes: section order reads promise→proof→process;
copy cluster legible at all tested widths; no regressions found. Remaining
known limitation: Playwright **extension-mode** still NOT CONFIGURED
(requires user-installed bridge + MCP server flag) — isolated MCP + in-app
browser cover the verification instead.

**Final verdict: the loop converged — no open P0/P1. Site is GO.**

## Iteration 3 (morning polish pass, user-requested)

Findings & fixes:
- ProductDemo floated alone on an empty band → balanced 2-col: real capture
  beside three numbered "what you're seeing" markers (every claim visible in
  the capture; third marker carries the yellow).
- Exports cards too sparse → added abstract ink-bar motif per card.
- Section rhythm normalized (TransformationFlow py-16/20/24).
- CoreValue before/after cards equalized (h-full) + bigger thread arrow.

Incident: the previous suite run's webServer died mid-compile and the zombie
corrupted the Turbopack cache (`.next`) — compiled CSS contained an
HTML-entity-encoded url class (`entity-apostrophe`) that source code never had. Fix:
kill project node processes, delete `.next`, fresh dev server. Lesson added
for the future: a mid-compile crash can corrupt `.next`; when the dev server
500s on a class that looks fine in source — clear the cache before debugging code.

Results: lint ✓ tsc ✓ build ✓ **Playwright 70/70 exit 0** on healthy server.
