# Phase 4A — Generation Log

## 2026-07-14 — Style frame, attempt 1 (single approved job)

| Field | Value |
|---|---|
| Model requested (blueprint) | gpt_image_2 · 16:9 · high · 2k — **BLOCKED**: `job_minimum_basic_plan_required` (free plan) |
| Also plan-blocked | seedream_v5_pro, seedream_v4_5 (same error; no job created, no credits charged) |
| Model used | **flux_2** (variant pro, resolution 2k requested, aspect_ratio 16:9 requested) |
| Job id | `fe625a4e-2e51-410f-8df9-27c6a603f435` |
| Result | docs/phase-4a/hero-style-frame.png (1.5 MB) |
| Cost charged | **1 credit** (balance 10 → 9) |
| Prompt | docs/phase-4a/hero-style-frame.prompt.txt |

## Visual QA against the blueprint checklist — **FAIL**

| Criterion | Result |
|---|---|
| 16:9 aspect | ✗ returned 1:1 (1024×1024) despite `--aspect_ratio 16:9` |
| Lecture density on screen (waveform/fragments/timestamps) | ✗ screen is blank white |
| Luminous ink thread (signature element) | ✗ absent |
| Paper with hierarchy strokes + exactly one yellow stroke | ✗ absent (closed notebook instead) |
| Reserved upper-left negative space | ✗ window + shelves occupy it |
| Warm-paper key light vs cool screen | Partial — lamp warm, screen cool but empty |
| No text/letters/logos | ✓ |
| Premium matte materials, no neon | ✓ |

## Decision (per blueprint gate)

Stopped after the single job — no rerolls executed. The image is a pleasant
generic night desk but misses every signature element of the direction; it
does not replace or improve the CSS/SVG hero. **Recommendation: do not
integrate.** A second attempt (with a shortened, element-forced prompt and/or
nano_banana_flash 16:9 at ~1.5 credits) requires a new explicit user approval.

---

## 2026-07-14 — Attempt 2 (after user upgraded to Plus, user-approved)

| Field | Value |
|---|---|
| Model | gpt_image_2 · requested 16:9 · high · 2k |
| Job id | `68d6004b-b0ab-47d9-9bfa-29311e8c4572` |
| Result | docs/phase-4a/hero-style-frame-v2.png (5 MB, **2048×2048 = 1:1**) |
| Cost | 7 credits (9 → 2) |

**Visual QA — FAIL:** 1:1 again despite the flag; readable text everywhere
(IDE code, book spines, sticky notes, handwriting, clock digits) violating the
hard negatives; developer desk instead of a lecture desk; no ink thread, no
paper hierarchy strokes, no controlled single yellow.

## Diagnostic (0.15 credits, z_image)

`--aspect_ratio "16:9"` produced **2048×1152 (exact 16:9)** on z_image →
the CLI flag works; gpt_image_2 (and FLUX.2) ignored the ratio model-side.

## Balance state

Account + workspace "Private" both show **plus plan, 1.85 credits**. The
1,200 monthly Plus credits have not been credited yet (transactions show only
spends). Next attempt options: nano_banana_flash 16:9 @ 1.5cr (fits current
balance, strongest instruction-following for "no text" briefs) — **user chose
to wait for the Plus credits to land first.**

---

## 2026-07-14 — Root cause found + final candidates (user-approved)

**ROOT CAUSE OF ALL EARLIER FAILURES:** multiline prompts passed via
PowerShell truncate the native command line at the first newline — models
received ONLY the first prompt line, and flags placed after `--prompt` (like
`--aspect_ratio`) were dropped entirely. Proven with a 0.15cr z_image A/B
(multiline override ignored + ratio reverted to 1:1). Fix: single-line prompt,
flags before `--prompt`.

| Attempt | Model | Result |
|---|---|---|
| Candidates v1 (truncated prompt) | seedream_v5_pro (3cr) + nano_banana_pro (2cr) | Both 1:1, generic desks — FAIL |
| Diagnostic | z_image (0.15cr ×2) | Confirmed truncation + ratio loss |
| **Candidates v2 (full prompt)** | seedream_v5_pro `a41287a8` (3cr) → 2720×1536; nano_banana_pro `57863774` (2cr) → 2752×1536 | **Both on-brief: waveform, ink ribbon, paper hierarchy strokes, single yellow, no text** |

## Final selection — user approved

**nano_banana_pro v2** (`candidate-nanobananapro-v2.png`) — most precise
storytelling: waveform → satin ribbon → indented outline strokes + one bold
yellow highlight. Integrated into the hero as `public/media/hero/hero-frame.webp`
(2048w, 58 KB, loaded only ≥768px; mobile keeps the CSS night flow; reduced
motion shows the static frame; CSS dark-stage remains as load fallback).

Total Phase 4A spend: 20.15 credits. Balance after: 1,191.7.
