import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ChromeIcon } from "./ChromeIcon";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  showChromeIcon?: boolean;
  microcopy?: string;
};

export function Button({
  variant = "primary",
  showChromeIcon = false,
  microcopy,
  className = "",
  children,
  ...props
}: ButtonProps & { children: ReactNode }) {
  const base =
    "group inline-flex min-h-11 touch-manipulation flex-col items-center justify-center gap-0.5 rounded-xl px-6 py-2.5 text-base font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200";

  const styles =
    variant === "primary"
      ? "btn-shine border border-[#9dc2d6]/25 bg-gradient-to-b from-[#2e618e] to-[#1e4266] text-interface shadow-[0_6px_22px_rgb(36_79_118/38%),inset_0_1px_0_rgb(255_255_255/14%)] hover:from-[#356c9c] hover:to-[#245078] hover:shadow-[0_10px_32px_rgb(36_79_118/48%),inset_0_1px_0_rgb(255_255_255/16%)] active:scale-[0.98]"
      : "bg-transparent text-ink underline decoration-rule decoration-2 underline-offset-4 hover:text-accent";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      <span className="inline-flex items-center gap-2">
        {showChromeIcon ? <ChromeIcon /> : null}
        {children}
      </span>
      {microcopy ? (
        <span className="text-[11px] font-normal opacity-80">{microcopy}</span>
      ) : null}
    </a>
  );
}
