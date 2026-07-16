# Scroll World Storyboard — B Notes

*Phase 1 storyboard — deferred to Phase 3*
*Phase 2 uses CSS/SVG hierarchy-line hero prototype instead*
*Approved visual direction: A (המחברת הנבנית) + B — not Direction C browser fly-through*
*Last updated: 2026-07-12*

> **Phase 3 note:** When Higgsfield assets are generated, adapt this storyboard to the editorial notebook / hierarchy-line aesthetic rather than the literal browser walkthrough originally drafted for Direction C.

---

## ⚠ Supersession Notice (Phase 2 approval)

The approved creative direction is now **A + B** ("המחברת הנבנית" + structural restraint), not Direction C ("בתוך ההרצאה") that this storyboard was originally built around. Phase 2 does not include any Scroll World / Higgsfield work, so this file has **not** been rewritten yet.

Before any Phase 3 Scroll World work begins, this storyboard needs a revision pass so its art direction, palette, and camera narrative match the approved editorial-notebook signature (hierarchy line gathering fragments into headings/bullets) rather than the literal browser/lecture framing below. Treat everything past this notice as a historical draft, not an approved production brief.

---

## Decision Log

### Accepted from brief foundation
The 5-scene continuous journey from lecture overload → extension process → structured summary → install CTA is **approved as the narrative spine**, with modifications below.

### Rejected / modified
| Brief element | Decision |
|---------------|----------|
| Generic "student finishes lecture" ending | **Modified** — end on study material readiness, not celebration |
| Equal weight per scene | **Modified** — Scene 4 (summary resolve) gets longest scroll dwell |
| Architecture B (diorama dive-out connectors) | **Rejected** — causes camera reversal / "rewind" feel wrong for flow-state product |
| Abstract scenes disconnected from browser | **Rejected** — hurts 5-second clarity |

### Recommended camera architecture
**Architecture A — continuous forward take**
- Legs chained from actual last frames
- No pull-back connectors
- Camera settles into slow forward drift at each seam
- One model across chain (default: `seedance_2_0` when generating in Phase 3)

---

## Story Summary

**One sentence:** The camera glides forward through a student's lecture session as chaos gradually becomes a structured study summary — ending at the Chrome install invitation.

**Emotional arc:** Overwhelm → focus → comprehension → readiness

**Total scenes:** 5 legs (no connectors)

---

## Scene Breakdown

### Scene 1 — "עומס" (Overload)

**Scroll label:** `overload`

**What the viewer sees:**
- Stylized browser viewport, RTL layout sensibility
- Online lecture in progress: speaker video, slide deck fragments, timeline scrubber
- Floating caption fragments in Hebrew (generic academic phrases, not real quotes)
- Visual density communicates cognitive load — tabs, timer, notification hints (subtle)

**Camera move:**
- Start high/outside the monitor on a student's desk (Israeli context: simple, not stereotyped)
- Slow forward glide toward the lecture viewport
- End settling into gentle forward drift approaching the browser depth

**Pinned copy (draft):**

| Field | Hebrew |
|-------|--------|
| Eyebrow | תוסף Chrome להרצאות אונליין |
| Title | הרצאה אונליין היא הרבה מידע בבת אחת. |
| Body | דיבור, שקפים וזמן — קשה לצאת ממנה עם חומר לימודי מסודר. |

**Pacing:** `scroll: 1.4`, `linger: 0.35`

**Mobile still:** Desk + browser with dense lecture UI.

---

### Scene 2 — "כניסה" (Into the Browser)

**Scroll label:** `enter`

**What the viewer sees:**
- Camera crosses into the browser plane
- Lecture player fills more of frame
- UI chrome abstracted (no Google trademarks)
- Sense of entering the work context

**Camera move:**
- Continue forward through browser bezel into lecture content
- Mid-leg: slight lateral track along the lecture timeline (expressive, justified by "scanning the lecture")
- End: forward drift toward where extension UI will appear

**Pinned copy:**

| Field | Hebrew |
|-------|--------|
| Eyebrow | בזמן ההרצאה |
| Title | B Notes עובד בתוך ההרצאה שלכם. |
| Body | בלי לעצור, בלי לאבד את הקצב — התוסף לוכד את מה שחשוב. |

**Pacing:** `scroll: 1.2`, `linger: 0.25`

**Mobile still:** Close browser frame on lecture player.

---

### Scene 3 — "בניית מבנה" (Structure Emerging)

**Scroll label:** `structure`

**What the viewer sees:**
- B Notes extension panel slides into view (RTL: from right)
- Scattered topic fragments begin grouping under headings
- Visual connection lines between related concepts (not mind-map cliché — clean indent tree)
- Lecture still playing in background, slightly defocused

**Camera move:**
- Forward drift toward extension panel
- Mid-leg: gentle half-orbit around the panel to reveal depth (subject: UI craft moment)
- End: forward drift into the forming outline

**Pinned copy:**

| Field | Hebrew |
|-------|--------|
| Eyebrow | מבנה, לא בלגן |
| Title | נושאים, כותרות וקשרים — מתארגנים לבד. |
| Body | במקום רשימת משפטים, מתקבל שלד לימודי שאפשר לעבוד איתו. |

**Pacing:** `scroll: 1.6`, `linger: 0.45` *(longest dwell — product magic moment)*

**Mobile still:** Extension panel with partial outline.

**Asset note:** Ideal if owner provides real extension UI screenshot as reference for Higgsfield still generation in Phase 3.

---

### Scene 4 — "סיכום לימודי" (Study Summary Resolved)

**Scroll label:** `summary`

**What the viewer sees:**
- Full structured summary document — Direction A typography layer
- Clear heading hierarchy in Hebrew (H1 → H2 → bullets)
- Lecture player minimized or peripheral
- Calm, readable, "ready for exam study" feeling

**Camera move:**
- Slow forward glide along the summary document top-to-bottom flow (vertical scroll illusion within forward take)
- Settle on the most legible portion of the outline

**Pinned copy:**

| Field | Hebrew |
|-------|--------|
| Eyebrow | התוצאה |
| Title | סיכום לימודי ברור — מוכן אחרי ההרצאה. |
| Body | יוצאים עם חומר מסודר לחזרה, לדיון ולהכנה למבחן. |

**Pacing:** `scroll: 1.8`, `linger: 0.5` *(hero product payoff — longest scene)*

**Mobile still:** Full summary page beauty shot.

---

### Scene 5 — "התקנה" (Install CTA)

**Scroll label:** `install`

**What the viewer sees:**
- Camera pulls back only within the same forward-take grammar — slight widen, not reverse
- Browser with completed summary + subtle Chrome Web Store install prompt area
- Clean, quiet — no confetti, no neon

**Camera move:**
- Gentle crane-up and settle on CTA panel
- Final frame holds on install action

**Pinned copy:**

| Field | Hebrew |
|-------|--------|
| Eyebrow | צעד אחד |
| Title | התקינו את B Notes ב-Chrome. |
| Body | התחילו להפוך הרצאות אונליין לסיכומי לימוד מסודרים. |
| CTA | התקנה ב-Chrome Web Store |

**Pacing:** `scroll: 1.3`, `linger: 0.4`

**Mobile still:** CTA card on browser context.

---

## Art Direction Brief (for Phase 3 Higgsfield)

**Style preamble (shared across all stills):**
> Soft matte low-poly paper-craft architectural model, Israeli student study environment, warm morning light, restrained realism, shallow depth of field, no text rendered in image, no logos, cohesive palette: warm gray `#F0F2F5`, paper `#F6F3EC`, accent coral `#D4654A`, lecture dark `#1E2430`. Premium editorial craft — not toy diorama, not neon sci-fi.

**Scene still aspect ratio:** 3:2 (per scroll-world skill)
**Video aspect ratio:** 16:9
**Video model (Phase 3):** `seedance_2_0` default

**NSFW mitigation (from skill gotchas):**
- Prompts include: "empty, unoccupied, no people, architectural, tasteful" where interiors appear
- Budget 2–3 re-rolls per leg for university/lecture contexts

---

## Scrub Engine Config (preliminary)

```js
// Draft config — paths populated in Phase 3
mountScrollWorld(document.getElementById('world'), {
  brand: { name: 'B Notes' },
  diveScroll: 1.3,
  sections: [
    { id: 'overload',  label: 'עומס',      still: 'assets/sw/01-overload.webp',  clip: 'assets/sw/01-overload.mp4',  scroll: 1.4, linger: 0.35, accent: '#D4654A',
      eyebrow: 'תוסף Chrome להרצאות אונליין', title: 'הרצאה אונליין היא הרבה מידע בבת אחת.', body: '...' },
    { id: 'enter',     label: 'כניסה',     still: 'assets/sw/02-enter.webp',     clip: 'assets/sw/02-enter.mp4',     scroll: 1.2, linger: 0.25, accent: '#3A5F8C', ... },
    { id: 'structure', label: 'מבנה',      still: 'assets/sw/03-structure.webp', clip: 'assets/sw/03-structure.mp4', scroll: 1.6, linger: 0.45, accent: '#3E6B5A', ... },
    { id: 'summary',   label: 'סיכום',     still: 'assets/sw/04-summary.webp',   clip: 'assets/sw/04-summary.mp4',   scroll: 1.8, linger: 0.50, accent: '#2B4C7E', ... },
    { id: 'install',   label: 'התקנה',     still: 'assets/sw/05-install.webp',   clip: 'assets/sw/05-install.mp4',   scroll: 1.3, linger: 0.40, accent: '#D4654A',
      cta: { label: 'התקנה ב-Chrome Web Store', href: 'CHROME_STORE_URL_TBD' } },
  ],
  connectors: [], // Architecture A — no connectors
});
```

---

## Mobile & Fallback Strategy

### Desktop
Full scroll-scrub video chain via blob-loaded clips.

### Mobile (recommend asking user in Phase 3)
**Proposal:** Desktop-only video + mobile still sequence (per scroll-world beta guidance).
- Each section: `still` poster + swipe/step progression
- Sticky CTA throughout
- No `-m.mp4` encodes unless user opts into mobile beta

### prefers-reduced-motion
- Show `01-overload.webp` as hero poster
- Skip video chain entirely
- Static §4 transformation strip + §5 how-it-works carries narrative

---

## Phase 3 Prerequisites (before any generation)

- [ ] Higgsfield authenticated (`higgsfield auth login`)
- [ ] ffmpeg installed (`winget install Gyan.FFmpeg`)
- [ ] Credit budget approved (~5 stills + 5 video legs = 10 generations minimum)
- [ ] Chrome Web Store URL confirmed for Scene 5 CTA
- [ ] Extension UI reference screenshots from product owner
- [ ] Approved Hebrew copy for all pinned sections
- [ ] Decision: desktop-only vs. mobile beta encodes

---

## QA Checklist (Phase 3+)

- [ ] Seam screenshots before/after each leg boundary — no pop
- [ ] `video.seekable` works via blob URLs
- [ ] Hebrew copy readable at all scroll positions
- [ ] RTL overlay alignment correct
- [ ] Reduced motion fallback tested
- [ ] Mobile still sequence tested on real device
- [ ] CTA link goes to official Chrome Web Store only
