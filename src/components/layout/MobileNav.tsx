"use client";

import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const main = document.querySelector<HTMLElement>("main");
    const footer = document.querySelector<HTMLElement>("footer");
    const previousOverflow = document.body.style.overflow;
    const previousMainInert = main?.inert ?? false;
    const previousFooterInert = footer?.inert ?? false;

    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    if (footer) footer.inert = true;

    const focusables = panel
      ? [...panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
      : [];
    const focusFrame = window.requestAnimationFrame(() => focusables[0]?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
        return;
      }

      if (event.key === "Tab" && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = previousMainInert;
      if (footer) footer.inert = previousFooterInert;
    };
  }, [open]);

  const closeAndRestoreFocus = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <div className="relative lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex size-11 touch-manipulation items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-paper-deep hover:text-accent"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
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
            tabIndex={-1}
            className="fixed inset-0 z-40 touch-manipulation bg-ink/20"
            aria-label="סגירת תפריט"
            onClick={closeAndRestoreFocus}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="תפריט ניווט"
            // end-0 (left in RTL): the trigger sits at the far-left of the
            // header, so a start-anchored panel would extend past the viewport.
            className="absolute end-0 top-[calc(100%+8px)] z-50 min-w-44 overscroll-contain rounded-xl border border-rule bg-interface p-2 shadow-lg"
          >
            <nav ref={panelRef} aria-label="ניווט ראשי">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block min-h-11 touch-manipulation rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-deep hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
