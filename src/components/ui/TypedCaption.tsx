"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/*
 * Types out `text` once, character by character, the first time it scrolls
 * into view — proving a transcription is "live" without faking motion
 * inside a static screenshot (see ProductDemo.tsx).
 *
 * Fail-visible like Reveal.tsx: starts fully visible (revealedCount =
 * text.length) and is only reset to the typing-in-progress state once BOTH
 * the IntersectionObserver is confirmed alive AND reduced-motion is
 * confirmed off — so no JS/observer failure, old browser, or
 * prefers-reduced-motion can ever strand the caption empty or mid-word.
 */
export function TypedCaption({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealedCount, setRevealedCount] = useState(text.length);
  const [typing, setTyping] = useState(false);

  const reducedMotion = useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined" || reducedMotion) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealedCount(0);
          setTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!typing) return;
    const id = setInterval(() => {
      setRevealedCount((count) => {
        if (count >= text.length) {
          clearInterval(id);
          setTyping(false);
          return count;
        }
        return count + 1;
      });
    }, 28);
    return () => clearInterval(id);
  }, [typing, text]);

  return (
    <span ref={ref} className={className}>
      {reducedMotion ? text : text.slice(0, revealedCount)}
      {typing && (
        <span
          aria-hidden="true"
          className="blink-cursor ms-0.5 inline-block h-[0.9em] w-0.5 translate-y-[0.15em] bg-current align-middle"
        />
      )}
    </span>
  );
}
