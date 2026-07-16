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
}: {
  query: string;
  src: string;
  poster: string;
  mode?: "loop" | "once-fade";
}) {
  const [ended, setEnded] = useState(false);
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

  // Battery + calm discipline: pause looping videos while off-screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;
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
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={videoRef}
      className={`${styles.sceneVideo} ${ended ? styles.sceneVideoResting : ""}`}
      autoPlay
      muted
      loop={mode === "loop"}
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      onEnded={mode === "once-fade" ? () => setEnded(true) : undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
