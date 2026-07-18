"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * Scroll-reveal wrapper: fades content up once when it enters the viewport.
 * Fail-visible: content renders visible and is hidden only after the
 * IntersectionObserver proves it is alive (first callback) AND reports the
 * element offscreen — so no JS, no observer, or a full-page screenshot can
 * never strand critical content at opacity 0. Under prefers-reduced-motion
 * the CSS forces content fully visible with no transition (see globals.css).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"shown" | "pending">("shown");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Fast scrolls can batch several entries into one callback — if any
        // of them saw the element on screen, reveal and stop observing.
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("shown");
          observer.disconnect();
        } else {
          setState("pending");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${state === "pending" ? "reveal-hidden" : "reveal-in"} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
