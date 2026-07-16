# Selected B Notes Cinematic Direction — Blueprint & Phase 4A

Direction: **D1 — "שולחן הלימוד: החוט שמתארגן"** (The Study Desk — The Thread
That Organizes Itself), refined after the creative red-team pass.

## Red-team findings and refinements (Pass 3)

| Challenge | Finding | Refinement |
|-----------|---------|------------|
| Accidental copying | Night interior + emissive screens overlaps the reference's mood | Palette inverted: the reference is cool-dark with amber practicals; B Notes is **warm-paper-lit dark** — the paper (#F4F0E5 tone) is the brightest surface, the screen is the *cool* intruder (#9DC2D6). No neon, no LED strips, no room context beyond bokeh |
| Generic AI imagery | "Cozy desk at night" is a lo-fi cliché | The scene is *not cozy idle* — it is mid-work: the lecture is dense and noisy; the **thread laying itself into hierarchy lines** is the signature no stock scene has. The thread's end-state is literally the brand's hierarchy-line motif |
| Weak product clarity | A desk alone doesn't say "Chrome extension" | The laptop screen shows an abstract *browser-shaped* frame (dark graphite shell per the approved Phase 15 direction); the real product UI appears one scroll below as a real screenshot section; CTA copy says Chrome explicitly |
| Unnecessary complexity | Scroll-scrubbing the hero adds engineering risk | Hero is a **5s autoplay-once loop-to-rest** video with poster; scrubbing deferred as optional future enhancement |
| Generation dependency | Multi-shot needs would inflate cost | Exactly **one** style frame → **one** 5s motion test; the same locked frame serves poster, reduced-motion, mobile static, and OG image |
| Mobile behavior | 16:9 desk panorama crops poorly to portrait | The compositional diagonal (screen ← thread ← paper) is placed inside the central 3:2 safe zone; mobile uses the locked final frame (static) with HTML motion accents |
| Performance | Video payload | Budget: poster ≤ 150KB (AVIF/WebP), video ≤ 4MB (AV1/H.264 720–1080p), `preload="none"` + poster-first, `prefers-reduced-motion` never loads the video |
| Chrome-extension connection | Must not read as a movie about paper | The waveform + timestamps voice (already in the current HTML visual) remains as HTML/CSS elements bridging hero and product section |
| Brand conflict | Current site is bright paper; a dark hero could clash | The hero is "paper glowing in a dark room" — the page below transitions to full daylight paper; darkness is only the *first beat*, resolving into the existing bright editorial page |
| Distinction from reference | Structure check | B Notes keeps scroll, keeps instant CTA, no gate, no sound, no hotspots, no 3D runtime — a pre-rendered cinematic *image/video* in a scrolling conversion page. Different world, palette, camera grammar, IA |
| CTA integration | Overlay legibility over video | Reserved negative-space zone is enforced in the generation prompt (upper-left third dark and calm); CTA button uses existing accent blue with measured contrast |

## Final weighted score after refinement

| Criterion (weight) | Before | After |
|---|---|---|
| B Notes relevance (15) | 9 | 9 |
| Five-second clarity (15) | 9 | 9 |
| Cinematic impact (12) | 8 | 9 |
| Originality (12) | 7 | 8 |
| Product recognizability (10) | 9 | 9 |
| Conversion potential (10) | 9 | 9 |
| Performance (7) | 9 | 9 |
| Mobile feasibility (7) | 9 | 9 |
| Implementation feasibility (7) | 8 | 8 |
| Accessibility (5) | 9 | 9 |
| **Weighted total** | **8.55** | **8.83** |

---

# Production Blueprint

## Core idea
A single night-study scene where B Notes' transformation is physically
visible: the noise of a live online lecture becomes a warm, ordered page —
via one luminous ink-thread that lays itself into hierarchy lines.

## Product transformation
Online lecture (dense, cool, glowing) → live capture (the thread rising off
the waveform) → organization (thread weaving into indented line structure) →
study summary (warm lit paper, composed, at rest).

## Why it won
Highest weighted score (8.83): only direction scoring ≥9 on both 5-second
clarity and conversion while adding true cinematic depth; lowest production
and performance risk; single-asset pipeline.

## Distinction from the reference
- World: intimate study desk vs. creator's studio room.
- Palette: warm paper light vs. cool neon/amber cyberpunk.
- Grammar: one authored dolly in a *scrolling conversion page* vs. camera-flight
  IA in a no-scroll world.
- No gate, no sound layer, no hotspots, no runtime 3D, no terminal voice.
- Signature: the self-organizing hierarchy thread (absent from the reference).

## Opening frame
Desk edge-on, slightly elevated ¾ view. Right third (RTL reading start):
laptop in a dark graphite browser-shaped shell, screen alive with abstract
lecture density — waveform ribbon, slide fragments, empty timestamp shapes.
Center: the thread mid-air. Left third: blank warm paper in a soft lamp pool.
Upper-left: calm dark negative space reserved for HTML headline + CTA.

## Scene 1 — הרעש (0.0–1.5s)
Screen density pulses; waveform ribbon trembles; thread lifts off the
waveform. Camera begins a slow lateral dolly right→left (with RTL reading).

## Scene 2 — הלכידה (1.5–3.2s)
Thread arcs across the desk through the lamp pool, its cool blue warming as
it crosses; camera continues the dolly with a gentle push-in toward the paper.

## Scene 3 — הסדר (3.2–4.6s)
Thread lays itself onto the paper as indented hierarchy strokes — one long
heading line, two sub-lines, three short bullet strokes (abstract marks, no
letters). One stroke is marker-yellow (#E5B94B) — used exactly once.

## Final resting state (4.6–5.0s)
Camera settles frame-locked: composed paper glowing warm, laptop still alive
but softened in bokeh, thread now part of the page structure. This frame =
poster = reduced-motion = mobile static = OG image.

## Camera grammar
One continuous authored move: lateral dolly + 8–10% push-in, ease-out into a
full stop. No cuts, no orbit, no zoom bumps. Start and end frames locked
(Seedance start/end-image compatibility).

## Scroll / autoplay relationship
Hero video autoplays once (muted, playsInline), holds the final frame. Page
scrolls normally beneath. No scroll-scrubbing in v1.

## HTML headline placement
Headline + subheadline + CTA absolutely positioned over the reserved
upper-left negative space; identical Hebrew copy as today (approved copy is
untouchable). All text is DOM text — nothing readable inside the video.

## CTA placement
Primary CTA (התקינו את B Notes ב־Chrome) directly under the subheadline in the
negative-space zone, above the fold at 1440×900 and 390×844; trust line
beneath it.

## Desktop composition
16:9 hero media, full-bleed width, height clamped ~72–78vh; text zone
upper-left third; the thread diagonal leads the eye from headline → paper →
CTA cluster.

## Tablet behavior
Same 16:9 media, height ~60vh; text zone unchanged; safe-zone framing keeps
the diagonal intact at 1024×768.

## Mobile fallback
Static locked final frame (3:2-safe center crop) as an `<img>`/poster; HTML
waveform + timestamp micro-accents (existing CSS) provide motion; no video
download on mobile v1.

## Reduced-motion fallback
`prefers-reduced-motion: reduce` → poster only (final frame), no video
element; identical information (the composed page tells the whole story).

## Palette
Warm paper #F4F0E5 (brightest), ink charcoal #171915, B Notes blue #244F76
(thread start / CTA), digital light blue #9DC2D6 (screen glow), interface
white #FCFCFA (paper highlights), study-marker yellow #E5B94B (exactly one
stroke). Background room falls to deep warm charcoal — never purple, never
neon.

## Lighting
Single warm key: desk lamp pool on the paper (motivated practical). Cool
fill: screen glow from the right. Soft falloff, matte shadows, no bloom, no
god-rays.

## Materials
Matte paper with tooth, matte desk wood, soft-touch laptop shell (dark
graphite), ink-like luminous thread (satin, not laser/neon). Only the screen
and thread are emissive.

## Depth layers
FG: paper + pen (sharp) → MG: thread + lamp pool → BG: laptop screen (bright,
slightly soft) → far BG: room bokeh (near-black warm).

## Asset list
1. `hero-style-frame.png` — 1 gpt_image_2 style frame (Phase 4A, approval gate)
2. `hero-motion-test.mp4` — 1 seedance_2_0_mini 5s test (Phase 4B, separate gate)
3. `hero-final.mp4` — seedance_2_0 final (Phase 4C, separate gate)
4. `hero-poster.avif` — extracted final frame (ffmpeg, free)
5. Real product screenshot (user-provided, replaces the demo placeholder)

## Higgsfield image requirements
gpt_image_2 · 16:9 · highest available resolution/quality · prompt from file ·
no text/letters/logos in image · one job, no rerolls without human approval.

## Higgsfield video requirements
seedance_2_0_mini: 5s, start-image = approved style frame, end-image = same
frame (rest-state loop discipline), 720p test. seedance_2_0 final: 1080p, 5s,
same frame-lock. Neither is executed within this task.

## CSS/SVG requirements
Headline/CTA overlay grid; waveform + timestamp micro-motion (existing);
gradient scrim under the text zone (max 12% opacity); daylight transition
into the paper page below the hero.

## Real product screenshot requirements
One genuine extension capture (transcript panel during a lecture) placed in
the "המוצר בפעולה" section; clearly labeled real; replaces the placeholder.

## Performance budget
Poster ≤150KB; video ≤4MB, `preload="none"`, load after LCP; hero LCP element
= poster image; no layout shift (aspect-ratio reserved); mobile downloads
poster only.

## File-delivery strategy
`public/media/hero/` with AVIF poster + H.264 MP4 (+ optional AV1 WebM);
`<video muted playsinline autoplay poster>` with `<source>` order AV1 → H.264;
reduced-motion and mobile render `<img>` instead.

## Accessibility strategy
Poster/video `aria-hidden` with the existing sr-only scene description
updated; text contrast ≥4.5:1 over the scrim; focus-visible preserved; no
information exists only in motion.

## Browser fallback
No WebGL/JS dependency: `<video>` unsupported → poster `<img>`. Old browsers
get the exact static story.

## Human approval gates
1. Style-frame cost disclosure → approve → generate → **visual approval stop**.
2. Motion-test cost disclosure → approve → generate → visual approval stop.
3. Final generation cost disclosure → approve.
4. Real screenshot approval before replacing the placeholder.

## Production risks
- Thread may render as neon/laser (mitigate: "satin ink ribbon, matte glow").
- Paper strokes may render as readable text (hard negative: no letters).
- Warm/cool balance may drift purple (negative: no purple, no neon).
- Seedance may drift the locked frame (mitigate: start+end image, low motion
  strength).
- Marker-yellow may multiply (prompt: exactly one yellow stroke).

## Shot table

| Shot | Duration or scroll range | Camera | Foreground | Midground | Background | HTML overlay | Transition |
|------|--------------------------|--------|------------|-----------|------------|--------------|------------|
| S1 הרעש | 0.0–1.5s | Lateral dolly starts (right→left), eye-level ¾ | Desk edge, pen | Thread lifts off waveform | Laptop screen dense, cool glow | Headline fades in (0.6s) | Continuous |
| S2 הלכידה | 1.5–3.2s | Dolly continues + 8% push-in | Paper enters lamp pool | Thread arcs, cools→warms | Screen softens into bokeh | Subheadline + CTA settle | Continuous |
| S3 הסדר | 3.2–4.6s | Push-in decelerates | Paper fills left third | Thread lays hierarchy strokes; one yellow | Room falls near-black warm | Trust line fades under CTA | Continuous |
| S4 מנוחה | 4.6–5.0s (hold ∞) | Full stop, frame-locked | Composed page glowing | Thread = page structure | Soft screen pulse only | Full text cluster at rest | Hold = poster frame |

---

# Revised Phase 4A Prompt (ready to paste — DO NOT EXECUTE in this task)

```
You are executing Phase 4A for the B Notes landing page: generate exactly ONE
Higgsfield style frame for the approved cinematic direction "שולחן הלימוד:
החוט שמתארגן" (Study Desk — the thread that organizes itself).

PROJECT ROOT: C:\projects\bnotes-landing-v2
BLUEPRINT: docs/reference-analysis/selected-blueprint-and-phase4a.md

HARD RULES
- Exactly one provider-side image job. No automatic rerolls, no variants, no
  batch. A reroll requires a new explicit human approval.
- No video generation of any kind in this phase.
- Do not modify application source code. Do not deploy. Do not commit.
- Resolve the Higgsfield executable as higgsfield.cmd (PATH, then
  %APPDATA%\npm\higgsfield.cmd). Never invoke higgsfield.ps1.

COST GATE (blocking)
1. Query the CLI for current workspace, plan, credit balance, and the cost of
   one gpt_image_2 generation at 16:9 high quality.
2. Print: current credits, job cost, credits remaining after the job.
3. If cost cannot be determined exactly, present the closest documented range
   and its source.
4. STOP and ask for explicit human approval ("approve generation") before
   creating the job. Do not proceed on silence.

PROMPT FILE
Write the generation prompt to docs/phase-4a/hero-style-frame.prompt.txt and
pass it via file (avoid embedding long prompts in shell commands; use
Windows-safe quoting). The prompt must request:

- Cinematic still, 16:9, photoreal-painterly hybrid, editorial technology mood
- A night study desk, slightly elevated three-quarter view
- RIGHT third: laptop in a dark graphite browser-shaped shell, screen filled
  with ABSTRACT lecture density: waveform ribbon, slide-like fragments, empty
  timestamp shapes — controlled information overload, cool light blue glow
  (#9DC2D6 family)
- CENTER: a single luminous satin ink-thread (deep blue #244F76 family)
  rising off the waveform and arcing across the desk toward the paper —
  matte glow, ink-like, NOT neon, NOT laser
- LEFT third: warm matte paper (#F4F0E5 family) in a soft desk-lamp pool; the
  thread lays into indented hierarchy strokes: one long heading stroke, two
  sub-strokes, three short bullet strokes — abstract marks only
- EXACTLY ONE stroke in study-marker yellow (#E5B94B); no other yellow
- Upper-left third: calm dark negative space reserved for HTML copy
- Lighting: single warm practical lamp key + cool screen fill; matte shadows
- Materials: paper tooth, matte wood, soft graphite; only screen and thread
  emissive

NEGATIVES (mandatory)
no text, no readable writing, no Hebrew, no letters, no numbers, no logos, no
platform branding, no fake UI labels, no fake screenshot, no neon, no purple,
no holograms, no AI brain, no robots, no glowing SaaS dashboard, no childish
clay-toy appearance, no people, no hands

EXECUTION
- Create the single gpt_image_2 job at 16:9, highest supported quality.
- Download the result to docs/phase-4a/hero-style-frame.png (document the
  exact CLI download command used).
- Record job id, cost charged, and credits remaining in
  docs/phase-4a/generation-log.md.

STOP GATE
After the image is saved, STOP completely and request human visual approval
against the blueprint checklist (palette fidelity, thread material, single
yellow stroke, negative space, no text). Do not generate anything further,
do not reroll, do not start video, regardless of the visual result.

All Hebrew marketing copy remains HTML/CSS on the page — never inside the
generated image.
```

*(End of ready-to-paste prompt.)*
