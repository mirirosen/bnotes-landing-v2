"use client";

import { useEffect, useRef } from "react";

/*
 * The ink thread follows the reader: a thin gradient progress line at the
 * very top of the viewport, filling from the reading start (right, RTL) as
 * the page is scrolled. Purely positional — it only moves with user scroll,
 * so it is reduced-motion-safe by nature.
 */
export function ScrollThread() {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 block h-[3px]"
    >
      <span
        ref={barRef}
        className="block h-full w-full origin-right bg-gradient-to-l from-digital via-accent to-marker"
        style={{ transform: "scaleX(0)", transition: "transform 80ms linear" }}
      />
    </span>
  );
}
