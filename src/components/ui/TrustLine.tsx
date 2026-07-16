import { trustLine, trustLineMobile } from "@/lib/content";

const parts = trustLine.split(" · ");

export function TrustLine({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "light";
}) {
  const textColor = tone === "light" ? "text-[#c9c2b2]" : "text-ink-soft";
  const dotColor = tone === "light" ? "text-[#5a5344]" : "text-rule";

  return (
    // The accessible content is the aria-label; the two inner variants are
    // presentation-only (one per breakpoint) so tech that reads raw text
    // doesn't encounter the line twice.
    <div className={className} role="note" aria-label={trustLine}>
      <p
        aria-hidden="true"
        className={`text-center text-xs leading-relaxed sm:hidden ${textColor}`}
      >
        {trustLineMobile}
      </p>

      <p
        aria-hidden="true"
        className={`hidden items-center gap-2 text-center text-sm sm:flex ${textColor}`}
      >
        {parts.map((part, index) => (
          <span key={part} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className={dotColor}>
                ·
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5 font-medium">
              {index === 0 ? (
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-marker"
                />
              ) : null}
              {part}
            </span>
          </span>
        ))}
      </p>
    </div>
  );
}
