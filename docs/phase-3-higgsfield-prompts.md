# Phase 3 Higgsfield Prompts — B Notes

*Planning document — prompts prepared, not sent*
*Last updated: 2026-07-12*

---

## Global rules

1. **Style preamble** must be byte-identical in every prompt (cohesion).
2. **No readable text** of any language — especially no Hebrew.
3. **No platform logos**, no student portraits as hero subject.
4. Hebrew UI copy is rendered in React overlays only.
5. Study-marker yellow appears **once** in the entire chain (Beat 3 bullet row).

---

## Style preamble (reuse verbatim)

```
Editorial technology aesthetic for an online lecture study tool. Premium matte paper and interface materials, architectural composition rather than toy-like, soft restrained cinematic studio lighting, gentle long shadows, shallow depth of field, calm and premium not flashy. Cohesive palette: warm paper #F4F0E5, ink charcoal #171915, B Notes blue #244F76 as the primary digital signal, digital light blue #9DC2D6 for live UI accents, interface white #FCFCFA for document surfaces, study-marker yellow #E5B94B used exactly once on one small highlight stripe. Matte surfaces, no neon, no holograms, no floating AI brain, no robots, no platform logos. Absolutely no text, no letters, no numbers, no Hebrew, no UI labels, no readable writing of any language.
```

---

## POC-1 — Master style-frame (FIRST GENERATION — blocked)

**Job type:** `gpt_image_2`  
**Aspect ratio:** 16:9  
**Resolution:** 2k  
**Quality:** high

### Prompt (exact)

```
Editorial technology aesthetic for an online lecture study tool. Premium matte paper and interface materials, architectural composition rather than toy-like, soft restrained cinematic studio lighting, gentle long shadows, shallow depth of field, calm and premium not flashy. Cohesive palette: warm paper #F4F0E5, ink charcoal #171915, B Notes blue #244F76 as the primary digital signal, digital light blue #9DC2D6 for live UI accents, interface white #FCFCFA for document surfaces, study-marker yellow #E5B94B used exactly once on one small highlight stripe. Matte surfaces, no neon, no holograms, no floating AI brain, no robots, no platform logos. Absolutely no text, no letters, no numbers, no Hebrew, no UI labels, no readable writing of any language.

Subject: A premium abstract online lecture environment seen through a dark graphite browser shell. The viewport shows a dim lecture stage with a subtle audio waveform, a few floating geometric slide fragments as soft rectangles, and small empty timestamp pill shapes without glyphs. Controlled information overload — speech and slides implied through abstract shapes only. The student is not the visual focus. Wide centered composition with headroom for HTML headline overlay above. Architectural, matte, restrained.
```

### Negative prompt

```
text, letters, numbers, hebrew, arabic, latin words, readable UI, subtitles, captions, watermark, logo, zoom logo, youtube logo, teams logo, neon glow, hologram, sci-fi HUD, AI brain, robot, human face portrait, student close-up, clay diorama, isometric toy, glossy plastic toy, cartoon, anime, lens flare, bloom, oversaturated, low quality, blurry, noisy, jpeg artifacts, duplicate yellow highlights
```

### CLI command (do not run until approved)

```bash
higgsfield generate create gpt_image_2 \
  --prompt "$(cat docs/phase-3-prompts/poc-1-style-frame.txt)" \
  --aspect_ratio 16:9 \
  --resolution 2k \
  --quality high \
  --wait --wait-timeout 15m --json
```

---

## POC-2 — Camera motion test (blocked)

**Job type:** `seedance_2_0`  
**Start image:** POC-1 output (local file path)  
**Duration:** 5s  
**Params:** `--mode std --resolution 1080p --aspect_ratio 16:9`

### Prompt (exact)

```
Editorial technology aesthetic for an online lecture study tool. Premium matte paper and interface materials, architectural composition rather than toy-like, soft restrained cinematic studio lighting, gentle long shadows, shallow depth of field, calm and premium not flashy. Cohesive palette: warm paper #F4F0E5, ink charcoal #171915, B Notes blue #244F76 as the primary digital signal, digital light blue #9DC2D6 for live UI accents, interface white #FCFCFA for document surfaces, study-marker yellow #E5B94B used exactly once on one small highlight stripe. Matte surfaces, no neon, no holograms, no floating AI brain, no robots, no platform logos. Absolutely no text, no letters, no numbers, no Hebrew, no UI labels, no readable writing of any language.

Single continuous cinematic camera move, no cuts. Continue the same slow, steady forward glide. The camera moves into the abstract online lecture viewport toward the audio waveform focal point. Floating slide fragments drift with subtle parallax. In the final second, settle back into a slow, steady forward glide toward the brighter panel edge ahead. Smooth, graceful, slow motion. No text, no captions.
```

### Negative prompt

```
text, letters, numbers, hebrew, readable UI, logo, zoom, youtube, neon, hologram, AI brain, robot, face, portrait, fast camera shake, whip pan, hard cut, flash, strobe, low quality
```

---

## Beat stills (full production — blocked)

### Beat 1 still

```
[STYLE PREAMBLE]

Subject: Wide establishing frame of a premium abstract online lecture environment inside a dark graphite browser shell. Dim lecture viewport, subtle audio waveform, floating geometric slide fragments, empty timestamp pill shapes. Controlled overload, no people as focal subject. Centered composition.
```

### Beat 2 still

```
[STYLE PREAMBLE]

Subject: Browser surface transitioning into organized panels. Abstract phrase-fragment tiles drift toward a single vertical B Notes blue hierarchy line. Light interface-white processing lane emerging from graphite shell. Empty timestamp pills, no glyphs.
```

### Beat 3 still

```
[STYLE PREAMBLE]

Subject: Clean interface-white editorial document surface. Abstract heading block rectangles without text, bullet row shapes, hierarchy line on margin. Exactly one bullet row has a small study-marker yellow highlight stripe. Matte paper warmth at edges.
```

### Beat 4 still (CTA rest)

```
[STYLE PREAMBLE]

Subject: Calm warm paper field with a subtle interface-white card silhouette and soft architectural shadow. Generous negative space in upper center for headline overlay. Single thin B Notes blue accent line. Minimal, resting, premium.
```

---

## Leg motion template (Beats 1–3)

```
[STYLE PREAMBLE]

Single continuous cinematic camera move, no cuts. Continue the same slow, steady forward glide. [BEAT-SPECIFIC MID MOVE]. In the final second, settle back into a slow, steady forward glide toward [NEXT BEAT DIRECTION]. Smooth, graceful, slow motion. No text, no captions.
```

**Beat 1 mid move:** subtle parallax on slide fragments; waveform pulses gently  
**Beat 2 mid move:** fragments converge along hierarchy line; panel lanes clarify  
**Beat 3 mid move:** document blocks align; yellow marker stripe briefly catches light  
**Beat 4 mid move:** minimal drift to rest — almost static

---

## Connector template (frame-locked)

```
[STYLE PREAMBLE]

Single continuous cinematic camera move, no cuts, no scene change. Continue the same slow forward glide from the exact same framing. Seamless carry through [TRANSITION DESCRIPTION]. Maintain identical lighting and palette. No text, no captions.
```

Use `--start-image` = previous leg last frame, `--end-image` = next scene still (per scroll-world seam method).

---

## Post-generation QA

- [ ] ffprobe confirms 16:9, 1080p
- [ ] No readable text in any frame (manual frame scrub)
- [ ] Yellow marker appears ≤1 time
- [ ] Palette matches design tokens
- [ ] Seam frame diff ≤ perceptual threshold at connectors
- [ ] Focal subject centred for mobile crop safety
