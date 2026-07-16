# Reference Evidence Report — bina-ve-ze.com

Task: B Notes — Reference-to-Original Cinematic Blueprint (analysis only).
Date: 2026-07-14. All evidence gathered from the public production site via the
isolated Playwright MCP browser. No assets were downloaded for reuse; no forms
were submitted; non-essential cookies were declined.

## 1. Access status

| Item | Status |
|------|--------|
| Reference site | **ACCESSIBLE** — full experience inspected (splash → room → station) |
| CAPTCHA / bot blocking | None encountered |
| Cookie banner | Present; "דחה לא הכרחיות" (decline non-essential) clicked |
| Splash gate | "ENTER STUDIO" click required to enter; handled |
| Popup behavior | The site opened an unrelated Instagram tab once; closed without inspection |

## 2. Tooling status

| Layer | Status |
|-------|--------|
| Claude Code | 2.1.201 |
| Playwright MCP (isolated) | **PASS** — registered as `playwright: npx @playwright/mcp@latest`, connected; navigation, snapshots, screenshots, evaluate, network inspection all used |
| Playwright extension mode | **NOT AVAILABLE** — MCP server configured in isolated mode only; no extension bridge configured in this session. Not blocking (isolated evidence sufficient). |
| Chrome DevTools MCP | Not configured. **Not needed** — rendering mechanism was resolved with Playwright evidence alone. |

## 3. Viewports inspected

- Desktop 1440 × 900
- Tablet 1024 × 768
- Mobile 390 × 844 (including a fresh reload to verify mobile asset strategy)

## 4. Screenshot index

All under `docs/qa-artifacts/reference-bina-ve-ze/`:

| File | State captured |
|------|----------------|
| `desktop/ref-desktop-000-splash.png` | Boot splash: ASCII-glyph tunnel, glowing wordmark, ENTER STUDIO, sound opt-in |
| `desktop/ref-desktop-010-room-entry.png` | 3D studio room resting state with hotspot orbs + cookie banner |
| `desktop/ref-desktop-025-works-dropdown.png` | HTML menubar dropdown over live 3D scene |
| `desktop/ref-desktop-026-works-dropdown-settled.png` | Same, settled |
| `desktop/ref-desktop-050-station-code.png` | "Code projects" station: HTML overlay over blurred live room |
| `desktop/ref-desktop-051-station-code-settled.png` | Same, settled |
| `tablet/ref-tablet-room.png` | Room at 1024×768 — same scene, slightly wider crop |
| `mobile/ref-mobile-splash.png` | Splash at 390×844 |
| `mobile/ref-mobile-room.png` | Room at 390×844 — portrait camera crop, bottom "תחנות" handle |
| `mobile/ref-mobile-stations-drawer.png` | Mobile stations drawer (card grid, each card names its physical anchor) |

## 5. Scroll-point capture — N/A with evidence

The Phase 4 fixed-scroll-point protocol (0–100%) **does not apply**: the page
is not scrollable. Measured: `document.body.scrollHeight = 900` at a 900px
viewport (`scrollable: false`). There is no scroll choreography of any kind —
**camera flights replace scrolling entirely**. All "scroll" percentage frames
would be identical to the room resting state; capturing seven duplicates was
deliberately skipped ("do not create excessive duplicate screenshots").

## 6. Recording / trace method

Method 3 (dense sequential screenshots) was used: splash → entry → dropdown →
station flight → station settled, per viewport. Browser-context video recording
is not exposed by the Playwright MCP session, and a trace was not needed since
the experience is state-based, not scroll-based. Limitation: mid-flight camera
frames (~0.5–1.5s) are under-sampled; transition grammar was still observable
(one screenshot mid-flight plus settled states).

## 7. Experience map (transition map)

1. **Boot gate** — dark splash, "studio · system boot" eyebrow, animated glyph
   tunnel, loader status ("טוען את הסטודיו 99%"), ENTER STUDIO button, explicit
   sound opt-in ("with sound · tap to mute").
2. **Room reveal** — full-viewport 3D studio at night. Warm LED strip along the
   ceiling edge, cyberpunk city through the window, desk with dual monitors,
   arcade cabinet with a playing screen, bookshelf, couch, camera tripod,
   plants. Six glowing hotspot orbs anchored to physical objects.
3. **Hint layer** — persistent caption: "רחף על נקודת אור · לחיצה פותחת תחנה";
   an easter-egg status line ("ביצי פסחא").
4. **Station open** — clicking a hotspot / nav item flies the camera toward the
   anchor object (whoosh-in sound), URL deep-links (e.g. `/space/code`), and an
   HTML overlay opens **over the live room, blurred** (depth-of-field backdrop).
   Station UI is styled as an in-world computer ("studio/code/termfleet" path
   bar, BUILD LOG panel, repo-card carousel).
5. **Station close** — "חזרה לחדר" reverses the flight (whoosh-out).

## 8. Visual and motion analysis

### First-screen impact
- The first screen is a **narrative gate**, not a layout: a boot sequence that
  promises "you are about to enter a place." Anticipation is manufactured
  before any content is shown.
- The eye lands on the glowing wordmark → ENTER button; there is exactly one
  action available. (Portfolio logic — a conversion landing must not gate its
  CTA this way.)

### Three-dimensional language
- Real 3D room, human-eye-height camera, mild perspective.
- Depth comes from **light, not gradients**: baked global illumination
  (lightmap textures such as `lm_wall_back.png` were fetched), practical light
  sources — amber LED strip, monitor glow, window city glow, arcade screen.
- Materials are matte and tactile (wood shelves, fabric couch, plant leaves);
  screens are the only emissive surfaces → screens read as "alive."
- One warm accent (amber LED) against a cool dark room sets the hierarchy.

### Camera grammar
- Resting state: static camera with subtle idle (hover parallax).
- Navigation: **point-to-point camera flights** (push-in toward the anchor
  object) with ease-out arrival; reverse flight on close. Sound-synced
  (whoosh-in/out mp3s confirmed in network log).
- No orbit, no free movement — the camera is always authored.

### Scroll choreography
- None. Zero page scroll. The world replaces the page; flights replace scroll.

### Typography
- HTML text is always crisp DOM text above the canvas — nothing readable is
  baked into the 3D scene.
- Hebrew UI text + monospace English for "system" elements (BUILD LOG, repo
  names, path bars). The mono/system voice is a deliberate identity device.

### Color, light, material
- Dominant: near-black warm purple; accents: amber (physical light) and pink
  neon (brand); station overlays warm dark-paper tones.
- The splash uses pink glyph-art on near-black — terminal aesthetic.

### Premium execution — specific observable decisions
1. Baked lightmaps → soft believable shadows impossible with CSS.
2. Diegetic UI: hotspots are physical light orbs *in* the scene; station UIs
   are framed as in-world screens; navigation labels name physical anchors
   ("מסך שמאל", "לוח הקיר").
3. Sound design bound to interaction (open/close/whoosh/light-on ×4 variants).
4. Deep-linkable stations (`/space/code`) — the world has an information
   architecture, it is not a gimmick.
5. Dedicated hidden accessibility navigation (buttons per station) + skip link.
6. Easter eggs reward exploration.
7. Live in-scene video textures (arcade loop, window city loop) keep the world
   breathing at rest.

## 9. Technical evidence

### DOM
- Exactly **1 canvas**, full viewport (backing 1800×1125 for 1440×900 CSS ≈
  1.25× supersample; 487×1055 for 390×844 on mobile).
- **0 `<video>` elements, 0 `<img>` elements** in the DOM — all media lives
  inside the WebGL scene (video textures) or CSS.
- 2 SVGs (UI icons). Body not scrollable. React root present; Vite-style
  hashed bundles (`index-BqYhQJJT.js` entry).

### Rendering mechanism — **CONFIRMED: real-time WebGL2**
- Canvas context probe: `webgl2` (CONFIRMED by probing the live canvas).
- `models/studio-room.opt.glb?v=14` fetched, **10,350 KB decoded** (CONFIRMED).
- Lightmap/texture PNGs (`lm_wall_back.png` 137 KB, `floor-wood.png` 1,470 KB,
  `studio-night.png` 200 KB) (CONFIRMED).
- Video textures: arcade loop MP4 7,101 KB (filename reveals it was generated
  with Seedance: `..._seedance_720p_16-9_24fps_...mp4`), window city loop
  776 KB (CONFIRMED).
- Not scroll-scrubbed video, not frame sequence, not Lottie, not canvas-2D.

### Libraries
| Library | Verdict | Evidence |
|---------|---------|----------|
| Three.js | **STRONG EVIDENCE** | GLB pipeline + WebGL2 + React SPA; globals hidden by bundling |
| React Three Fiber | **PROBABLE** | React root + chunk split incl. `animations-*.js`; no direct proof |
| React | **CONFIRMED** | React root, sonner toasts, Radix-style menubar roles |
| Vite | **STRONG EVIDENCE** | hash-named `index-*.js` chunk pattern |
| GSAP / ScrollTrigger / Lenis / Locomotive / Lottie / Webflow | **NOT FOUND** | no globals, no matching resources |
| Custom audio manager | **CONFIRMED** | 15+ interaction mp3s fetched on demand |

### CSS / browser mechanisms
- 5 `prefers-reduced-motion` rule blocks found in stylesheets (boot bars,
  toasts, spin keyframes). Canvas behavior under reduced motion: **UNKNOWN**
  (not directly emulatable in this session).
- Menubar/dropdown/tooltips are plain HTML/CSS above the canvas.

### Performance / delivery
- 46 requests on desktop entry; DOMContentLoaded ≈ 64 ms (SPA shell, then
  assets stream behind the boot loader — the splash doubles as a loading
  screen; loader reached "99%" while assets arrived).
- JS ≈ 2.5 MB decoded across chunks; per-station chunks are lazy
  (`services-*.js` etc. load on demand).
- Transfer sizes for same-origin fetches were not exposed
  (`transferSize = 0`) — transfer size unavailable; decoded sizes reported.
- Heaviest items: GLB 10.35 MB decoded + arcade MP4 7.1 MB.

## 10. Mobile comparison

| Dimension | Desktop | Mobile | Verdict |
|-----------|---------|--------|---------|
| Scene | 3D room | Same 3D room | **Same media, cropped** (CONFIRMED — same GLB `?v=14`, same MP4s fetched after mobile reload) |
| Camera | Wide room view | Portrait crop (arcade + shelf + desk edge) | Reframed, not simplified |
| Hotspots | Hover orbs + menubar | Orbs remain; bottom sheet "תחנות" drawer with card grid | Interaction adapted |
| Nav | Menubar | Hamburger | Standard |
| Payload | ~20 MB decoded | Same (no mobile-light assets observed) | Heavy on mobile — deliberate trade-off |
| Scroll | None | None | Same |

## 11. Unresolved unknowns

- Canvas animation behavior under `prefers-reduced-motion` (UNKNOWN).
- Exact animation library inside the bundle (R3F/drei PROBABLE, unverified).
- Real transfer (compressed) sizes for same-origin assets (unavailable).
- Whether a WebGL-unsupported fallback exists (not testable here; UNKNOWN).
- Mid-flight camera easing curves (under-sampled; qualitative only).

## 12. Rendering-mechanism conclusion

**CONFIRMED: a single-page React app rendering one authored 3D room in
real-time WebGL2 (GLB + baked lightmaps + video textures), navigated by
sound-synced camera flights to deep-linked HTML station overlays. No scroll,
no page video, no frame sequences.**
