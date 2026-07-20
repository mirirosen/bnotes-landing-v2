"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import styles from "./HeroVisual.module.css";

/*
 * A media-query-gated hero video layer. Rendered only when the given query
 * matches (e.g. desktop width + motion allowed) — other clients never
 * download the video; the static poster frame beneath is their experience
 * (and the SSR output).
 *
 * mode="loop": endless subtle loop (mobile living-still).
 * mode="once-fade": plays the authored camera move once, then gently fades
 * out to reveal the composed wide poster beneath — the scene always comes
 * to rest on the canonical frame.
 */
export function HeroMotion({
  query,
  src,
  poster,
  mode = "loop",
  loading = "lazy",
}: {
  query: string;
  src: string;
  poster: string;
  mode?: "loop" | "once-fade";
  loading?: "eager" | "lazy";
}) {
  const [ended, setEnded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(loading === "eager");
  const layerRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const subscribe = useMemo(
    () => (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query],
  );

  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );

  // Below-fold motion does not create a <video> (and therefore cannot fetch
  // its source) until the stage is close to the viewport. The hero opts into
  // eager loading explicitly so its authored opening still starts at once.
  useEffect(() => {
    const layer = layerRef.current;
    if (!enabled || shouldLoad || !layer) return;

    // IntersectionObserver is available in every browser supported by Next.js.
    // If it is absent, the static poster remains the intentional fallback.
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px", threshold: 0 },
    );

    observer.observe(layer);
    return () => observer.disconnect();
  }, [enabled, shouldLoad]);

  // Battery + calm discipline: pause looping videos while off-screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled || !shouldLoad) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [enabled, shouldLoad]);

  if (!enabled) return null;

  return (
    <span ref={layerRef} className={styles.motionLayer} aria-hidden="true">
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={`${styles.sceneVideo} ${ended ? styles.sceneVideoResting : ""}`}
          autoPlay
          muted
          loop={mode === "loop"}
          playsInline
          preload={loading === "eager" ? "auto" : "none"}
          poster={poster}
          onEnded={mode === "once-fade" ? () => setEnded(true) : undefined}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </span>
  );
}
