import { HeroMotion } from "./HeroMotion";
import styles from "./HeroVisual.module.css";

const DESKTOP_MOTION_QUERY =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";
const MOBILE_MOTION_QUERY =
  "(max-width: 767px) and (prefers-reduced-motion: no-preference)";

function FlowLabels() {
  return (
    <div className={styles.flowBar}>
      <span>הרצאה אונליין</span>
      <span className={styles.flowArrow} aria-hidden="true">
        ←
      </span>
      <span>B Notes · תמלול חי</span>
      <span className={styles.flowArrow} aria-hidden="true">
        ←
      </span>
      <span>סיכום לימודי</span>
    </div>
  );
}

/*
 * Cinematic night-desk hero. Desktop: the approved generated scene
 * (Phase 4A frame + Phase 4B motion) full-bleed inside the camera settle.
 * Mobile: a story-cropped 4:3 version of the same scene (tiny mp4 + poster).
 * Reduced motion / old browsers: the static frame only.
 */
export function HeroVisual() {
  return (
    <div className={styles.root}>
      <link
        rel="preload"
        as="image"
        href="/media/hero/hero-frame.webp"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/media/hero/hero-frame-portrait.webp"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <p className="sr-only">
        איור: שולחן לימוד בלילה — הרצאה אונליין מוקרנת על מסך המחשב, חוט דיו של
        B Notes אוסף את הנאמר ומסדר אותו על דף כסיכום עם כותרות ונקודות.
      </p>

      {/* Desktop: full-bleed scene in the camera settle */}
      <div className={styles.animatedRoot} aria-hidden="true">
        <div className={styles.scene}>
          <div className={styles.sceneCamera}>
            <div className={styles.sceneFrame} />
            <HeroMotion
              query={DESKTOP_MOTION_QUERY}
              src="/media/hero/hero-motion-camera-2k.mp4"
              poster="/media/hero/hero-frame.webp"
              mode="once-fade"
            />
          </div>
          <FlowLabels />
        </div>
      </div>

      {/* Mobile: story-cropped scene */}
      <div className={styles.staticRoot} aria-hidden="true">
        <div className={styles.mobileScene}>
          <div className={styles.mobileSceneFrame} />
          <HeroMotion
            query={MOBILE_MOTION_QUERY}
            src="/media/hero/hero-motion-portrait.mp4"
            poster="/media/hero/hero-frame-portrait.webp"
          />
          <FlowLabels />
        </div>
      </div>
    </div>
  );
}
