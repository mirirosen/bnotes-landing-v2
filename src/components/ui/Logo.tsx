/**
 * Prototype B monogram — replace with official logo asset when available.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#244F76" />
        <path
          d="M11 8h6.2c2.8 0 4.6 1.5 4.6 3.9 0 1.4-.6 2.4-1.6 3 1.2.5 2 1.8 2 3.4 0 2.5-2 4.3-5 4.3H11V8zm2.8 3v3.2h2.9c1.2 0 1.9-.6 1.9-1.6 0-1-.7-1.6-1.9-1.6h-2.9zm0 6.2v3.5h3.1c1.4 0 2.3-.7 2.3-1.8 0-1.1-.9-1.7-2.3-1.7h-3.1z"
          fill="#FCFCFA"
        />
        <circle cx="23.5" cy="23.5" r="2.5" fill="#E5B94B" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-ink">B Notes</span>
        <span className="mt-0.5 text-[10px] font-medium text-digital">תוסף Chrome</span>
      </span>
    </span>
  );
}
