# B Notes Cinematic Design — Skill

Reusable methodology for giving any B Notes surface (landing page, Chrome
extension UI, marketing assets) the cinematic "שולחן הלימוד" language.
Distilled from the full landing-page build (2026-07-13→15). Evidence and
history: `docs/phase-3-master-ledger.md`, `docs/phase-4a/generation-log.md`,
blueprint: `docs/reference-analysis/selected-blueprint-and-phase4a.md`.

---

## 1. The world (never break it)

One physical universe: **a study desk at night**.

| Element | Meaning | Rule |
|---|---|---|
| Laptop screen, cool blue glow | The online lecture — the noise | The only cool light source |
| Deep-blue satin ink ribbon | B Notes capturing speech | Satin/ink, NEVER neon/laser |
| Warm cream paper in lamp light | The structured summary — the payoff | The brightest surface in every frame |
| Ink strokes (indented) | Hierarchy: heading, subs, bullets | Abstract marks, never letters |
| ONE yellow highlighter stroke | The study marker | Exactly one per composition |
| Warm desk lamp | Human, calm | Motivated practical light only |

Palette tokens: paper `#F4F0E5` · deep paper `#EBE5D6` · ink `#171915` ·
accent blue `#244F76` · digital blue `#9DC2D6` · interface `#FCFCFA` ·
marker yellow `#E5B94B` · night stage `#141417→#121215` (cool charcoal,
never purple, never brown-muddy, never neon).

**Story order (RTL):** lecture (right / top) → thread → summary (left / bottom).

## 2. Motion discipline (the anti-dizziness law)

1. **Camera locked** in all loops — only objects micro-move (waveform pulses,
   ribbon sways, dust drifts, light breathes). Camera moves are allowed only
   in ONE authored hero move that plays once and settles.
2. **"Plays once → rests"**: authored moves end in complete stillness; loop
   videos are start=end frame-locked (Seedance `--start-image X --end-image X`).
3. **One video plays at a time**: every `<video>` is IntersectionObserver-paused
   off-screen (see `src/components/hero/HeroMotion.tsx`).
4. **prefers-reduced-motion** always gets the composed static frame. CSS
   entrances (reveal/settle) end in the final designed state so instant-jump
   under reduce is correct.
5. Scroll-driven elements (progress thread) move only with user scroll —
   inherently reduced-motion-safe.

## 3. Asset generation pipeline (Higgsfield CLI)

Executable: `%APPDATA%\npm\higgsfield.cmd` (never higgsfield.ps1).

**Hard-won gotchas — read before generating:**
- **PROMPTS MUST BE ONE LINE.** A newline in a PowerShell native arg truncates
  the command line: the model receives only the first line AND any flags after
  `--prompt` are silently dropped (this caused 4 failed generations, ~17cr).
  Always: flags first, `--prompt $singleLine` last.
- Verify aspect ratio support per model (`model get <id>`): Seedance has no
  3:2 — use `--aspect_ratio auto` to inherit from the start image.
- gpt_image_2 ignores aspect_ratio server-side and loves adding text — avoid.
  **nano_banana_pro** is the obedient workhorse (2cr, real 16:9/21:9/4:5,
  respects "no text"). **seedream_v5_pro** for painterly mood (3cr).
  **z_image** (0.15cr) for cheap diagnostics.
- Video: `seedance_2_0`, `--generate_audio false`, 1080p 5s = 45cr,
  8s = 72cr, 4k 8s = 176cr. `generate cost <model> [flags]` estimates free.
- Cost-gate every batch: `account status` → `generate cost` → disclose → run.
- Models may be plan-gated (`job_minimum_basic_plan_required` on free plan).

**Prompt scaffold (append per-asset composition to this):**
> night study desk world, warm desk-lamp key light pooling on warm cream
> paper, cool pale-blue glow accents, deep-blue satin ink ribbon motif, matte
> materials, near-black warm charcoal background with soft bokeh, cinematic
> photoreal-painterly still, premium editorial technology mood, absolutely no
> text no letters no numbers no logos no readable writing no people no hands
> no neon no purple

**Living-still video prompt scaffold:**
> Living cinematic still, subtle motion only, camera completely locked static:
> [object micro-motions], warm lamp light breathes softly, tiny dust motes
> drift, everything else perfectly still, seamless loop, no camera movement,
> no zoom, no new objects, no text, no letters, no people, no hands

**QA checklist per asset (reject = one reroll max, then stop):**
aspect correct · zero readable text/UI labels · exactly one yellow ·
thread is satin not neon · paper is brightest · fits the world · no stains/blobs.

**Consistency trick:** for N related vignettes, generate ONE wide render with
evenly-spaced vignettes and crop via CSS `background-size: N*100%` +
`background-position` — guaranteed style consistency, 1/N the cost.

## 4. Web integration patterns

- **Poster+video sandwich**: `<img>`(webp poster, real alt, lazy) in flow +
  absolutely-positioned `<video>` above it, mounted only via
  `matchMedia("(min-width:768px) and (prefers-reduced-motion: no-preference)")`
  (useSyncExternalStore, SSR renders nothing) → phones/reduced/no-JS get the
  still, and never download the mp4. See `HeroMotion.tsx`.
- **Per-device assets in media queries**: background-image URLs inside
  `@media (min/max-width)` blocks are only fetched when matched.
- Encode: webp `-quality 82` (dark scenes compress absurdly well: 33-103KB);
  mp4 `libx264 -crf 23-26 -preset slow -an -movflags +faststart` (0.2-2MB).
- **Full-bleed scenes** escape the Container; feather top/bottom with
  gradients to the stage color; scrim behind overlaid copy (linear top +
  radial pool behind the text cluster) so copy never fights emissive areas.
- Copy is ALWAYS crisp HTML/DOM above media — never baked into assets.
- Film grain: static SVG feTurbulence data-URI at ~4.5% opacity on dark stages.
- Adaptive header: transparent over the dark hero (scoped light-chrome
  overrides) → paper-glass on scroll. ⚠️ `backdrop-filter` creates a
  containing block that traps `position:fixed` descendants (broke the mobile
  menu backdrop twice) — apply blur only at breakpoints where no fixed
  children live inside the header.
- ⚠️ RTL: logical properties (`inset-inline-*`) flip under `dir="rtl"` —
  position scene layers with physical left/right when they must match
  physical image coordinates (SVG/renders are physical).
- ⚠️ Full-bleed + transform scale > 1 overflows the viewport (rects exceed
  innerWidth even under overflow:hidden) — settle with translateY only.
- ⚠️ NEVER use quoted-url arbitrary Tailwind classes (`bg-[ url(...) ]`):
  after a mid-compile crash, Turbopack's cache can resurrect them as
  HTML-entity-escaped class names (`entity-apostrophe`) that hard-break the build even
  though the source is clean. Use a plain CSS class with the url instead.
  Recovery when it happens anyway: kill project node processes → delete
  `.next` → restart. (A first suite run on a cold dev server also produces
  mass timeout noise — always re-judge on a warm server.)
- Dark stages: scope light-chrome with `.on-dark` utility overrides, and
  restore ink inside bright "paper islands" with a nested `.on-light` scope
  (`.on-dark .on-light .text-ink { ... }`) — three-level specificity wins.

## 4b. Independent review loop (real consultants only)

- A REAL second opinion is available locally: OpenAI Codex CLI at
  `%LOCALAPPDATA%\OpenAI\Codex\bin\<hash>\codex.exe` (auth in `~/.codex`).
  Usage: pipe the brief via stdin (avoids the newline-truncation trap),
  attach screenshots with repeated `-i`, force `-s read-only`, capture with
  `-o reply.txt`. Streams can disconnect — retry with a smaller image payload.
- Protocol: write YOUR critique first; send consultants identical evidence
  without revealing it; synthesize by product impact, not majority vote.
- Never fabricate a consultant's reply; if a tool is unauthenticated/exhausted
  (e.g., Grok 402), record "unavailable" and continue.
- Review lens that caught the best finding here: "does the hero PROVE the
  product or only dramatize it?" — keep real product proof one scroll from
  the promise.

## 5. Verification contract

After every visual change: `npm run lint` · `npm run typecheck` ·
`npx playwright test` (70 tests: RTL/dir, single h1, CTA above fold + exact
store URL, no fabricated proof, touch targets ≥44px, no horizontal overflow,
reduced-motion completeness, keyboard nav, console/network clean) ·
`npm run build` · live visual check at 1440×900 + 390×844 (+t≈250ms early
frame: message must be readable before any animation finishes).
Dev-server note: first run after edits recompiles — a timing-failed first
suite run on a cold server is noise; re-run on a warm server before believing it.

## 6. Applying this skill to the Chrome extension UI

The extension (see real capture `docs/phase-4a/extension-raw.png`) is
currently purple/generic-SaaS — OFF-language. To migrate:
1. Swap palette to the tokens above (§1): paper surfaces, ink text, accent
   blue actions, ONE marker-yellow highlight (e.g., the active transcript line
   — it IS the study marker), digital blue for live/waveform states.
2. The live waveform is the brand's "alive" element — keep it digital blue,
   subtle pulse, camera-locked (no bouncing UI).
3. Recording state = the ribbon: a thin satin-blue progress/status line, not
   a red dot alone (add text state for a11y).
4. Summary view = the paper: warm cream card, display-serif Hebrew headings
   (Frank Ruhl Libre), hierarchy strokes as real indented structure.
5. Buy-minutes/upsell surfaces: night-stage dark with paper-light CTA —
   mirror the landing FinalCta.
6. Motion: micro only (200-300ms ease-out reveals, marker-sweep on
   highlights); respect prefers-reduced-motion; never animate layout.
7. Remove debug surfaces from production builds (the PROMPT DEBUG panel).

## 7. Asset inventory (public/media/)

hero/: hero-frame.webp 58K (desktop poster) · hero-frame-portrait.webp 37K
(mobile poster) · hero-motion-camera-2k.mp4 2.0M (8s dolly, once-fade) ·
hero-motion-portrait.mp4 181K (mobile loop) · hero-motion.mp4 1.0M (5s loop,
spare) · legacy mobile crop pair (hero-frame-mobile.webp, hero-motion-mobile.mp4).
sections/: chaos-to-order.webp 103K + chaos-motion.mp4 1.7M ·
steps-triptych.webp 34K (3 crops) · export-papers.webp 37K +
papers-motion.mp4 474K · finale-paper.webp 33K + finale-motion.mp4 1.1M.
Sources + raw renders: docs/phase-4a/.
