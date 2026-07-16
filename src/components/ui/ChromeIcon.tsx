export function ChromeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2a10 10 0 0 1 8.66 5H12V2z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M3.34 7A10 10 0 0 0 2 12h10V7H3.34z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M5.64 18.5A10 10 0 0 0 12 22v-10H7.5l-1.86 6.5z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}
