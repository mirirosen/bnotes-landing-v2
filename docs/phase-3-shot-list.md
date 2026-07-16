# Phase 3 Shot List — B Notes Continuous Journey

*Planning document — no generation performed*
*Last updated: 2026-07-12*

---

## Format

| Field | Value |
|-------|-------|
| Chain model | `seedance_2_0` |
| Aspect ratio | 16:9 |
| Resolution | 1080p (`--mode std --resolution 1080p`) |
| Leg duration | 8s (connectors: 5s) |
| Audio | Off (mute in HTML; `-an` on encode) |
| Text in video | **None** — all Hebrew in HTML overlay |

---

## Beat 1 — ONLINE LECTURE

**Purpose:** Establish controlled information overload in a premium abstract lecture environment.

| Shot | Type | Description |
|------|------|-------------|
| 1.0 | Master still | Wide establishing frame: dark graphite browser chrome, lecture viewport, abstract waveform, floating geometric slide fragments, small timestamp pill shapes (empty/no glyphs) |
| 1.1 | Dive leg | Slow forward glide into lecture viewport; subtle parallax on slide fragments; audio bars pulse |
| 1.2 | Connector | Seamless forward carry toward transcript-capture surface |

**Visual notes:**
- Student is NOT the focus — environment and information density are
- Matte graphite `#1C1F24` lecture shell
- Digital light blue `#9DC2D6` for waveform/slide accent edges
- No platform logos, no readable URLs, no Hebrew

**HTML overlay (not in video):**
- Optional flow-bar label: "הרצאה אונליין"
- Lecture title in hero caption area only if needed for accessibility

---

## Beat 2 — CAPTURE AND ORGANIZATION

**Purpose:** Camera moves through browser surface; fragments are captured; hierarchy line groups topics.

| Shot | Type | Description |
|------|------|-------------|
| 2.0 | Scene still | Transitional frame: browser surface splitting into panel lanes; abstract phrase-fragment tiles drifting; vertical blue hierarchy line emerging |
| 2.1 | Dive leg | Forward glide along browser plane; fragments converge toward hierarchy line; timestamps as empty pills |
| 2.2 | Connector | Line extends; camera carries into summary document space |

**Visual notes:**
- Light interface white `#FCFCFA` panel emerging from graphite
- B Notes blue `#244F76` hierarchy line — single continuous vertical rule
- Digital light blue accents on live-state UI chrome
- Fragment shapes suggest speech/slides — not readable words

**HTML overlay:**
- Live transcript panel (Hebrew lines from `heroVisual.transcript`)
- "B Notes · תמלול חי" label
- Timestamps rendered in CSS

---

## Beat 3 — STRUCTURED SUMMARY

**Purpose:** Scene resolves into clean editorial study document.

| Shot | Type | Description |
|------|------|-------------|
| 3.0 | Scene still | Interface-white document surface, hierarchy line on margin, abstract heading blocks (rectangles, no text), one yellow marker stripe on a single bullet row |
| 3.1 | Dive leg | Gentle forward settle; document blocks align; hierarchy line completes |
| 3.2 | Connector | Camera eases into open paper-toned negative space |

**Visual notes:**
- Frank Ruhl Libre styling applied in HTML only
- Study-marker yellow `#E5B94B` on **one** bullet row only
- Matte paper warmth at document edges
- Export chip shapes (DOCX/PDF) as empty pills — labels in HTML

**HTML overlay:**
- Full structured summary from `heroVisual.outline`
- "סיכום לימודי" header
- Highlight on `שיווי משקל` (single marker use)

---

## Beat 4 — CTA RESTING FRAME

**Purpose:** Calm hold frame with negative space for headline and install CTA.

| Shot | Type | Description |
|------|------|-------------|
| 4.0 | Scene still | Warm paper `#F4F0E5` field, subtle interface-white card silhouette, soft shadow, architectural calm |
| 4.1 | Final leg | Minimal forward drift to rest; no new elements introduced |

**Visual notes:**
- No product chrome, no busy UI
- B Notes blue as thin accent line or corner signal only
- Generous upper/central negative space for copy

**HTML overlay:**
- Headline: "ההרצאה מתקדמת. החומר כבר מתארגן."
- Subheadline + Chrome CTA
- Trust line

---

## Proof-of-concept subset (pre-full production)

| Shot | Purpose |
|------|---------|
| POC-1 | Master style-frame — Beat 1 establishing still only |
| POC-2 | 5s forward glide from POC-1 last frame — validates motion, palette, seam readability |

Full chain after POC approval: 4 stills + 4 legs + 3 connectors = 11 video generations + 4 image generations.

---

## Mobile strategy (deferred)

Default: **desktop-only video** with CSS hero fallback on mobile (current Phase 2.6 behavior).

If mobile beta is approved later:
- Centre-weighted composition in all stills
- Optional `-m.mp4` lighter encodes per scroll-world skill
- Portrait crop risk documented

---

## Rejection triggers (any shot)

- Readable text or Hebrew glyphs in generated frames
- Platform logos (Zoom, YouTube, etc.)
- Neon, hologram, AI brain, robot motifs
- Study-marker yellow used more than once
- Toy-like/clay diorama aesthetic (wrong art direction)
- Visible seam pop between legs
- Student face as focal subject
