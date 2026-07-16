"use client";

import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-paper-deep hover:text-accent"
        aria-expanded={open}
        aria-controls={panelId}
        // Stable accessible name; open/closed state is conveyed by aria-expanded.
        aria-label="פתיחת תפריט"
        onClick={() => setOpen((value) => !value)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M3 5.5h14M3 10h14M3 14.5h14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-ink/20"
            aria-label="סגירת תפריט"
            onClick={() => setOpen(false)}
          />
          <nav
            id={panelId}
            // end-0 (left in RTL): the trigger sits at the far-left of the
            // header, so a start-anchored panel would extend past the viewport.
            className="absolute end-0 top-[calc(100%+8px)] z-50 min-w-44 rounded-xl border border-rule bg-interface p-2 shadow-lg"
            aria-label="ניווט ראשי"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-deep hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </>
      ) : null}
    </div>
  );
}
