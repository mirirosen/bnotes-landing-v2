import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { exports_, platforms } from "@/lib/content";
import styles from "./Platforms.module.css";

const sourceMeta = [
  { glyph: "Z", tone: "bg-[#2d8cff] text-white" },
  { glyph: "▶", tone: "bg-[#ff0033] text-white" },
  { glyph: "P", tone: "bg-[#d7a126] text-[#171915]" },
  { glyph: "v", tone: "bg-[#1ab7ea] text-white" },
  { glyph: "T", tone: "bg-[#6264a7] text-white" },
  { glyph: "≋", tone: "bg-accent text-white" },
] as const;

const formatMeta = [
  { mark: "W", extension: "DOCX", color: "bg-[#2b579a] text-white" },
  { mark: "PDF", extension: "PDF", color: "bg-[#b7473a] text-white" },
  { mark: "✦", extension: "AI", color: "bg-[#e9edff] text-[#4153ad]" },
] as const;

export function Platforms() {
  return (
    <section className="overflow-hidden border-b border-rule py-12 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow={platforms.eyebrow}
          title="נכנס מכל מקום. יוצא מוכן."
          align="center"
        />

        <Reveal className="mt-8">
          <div className={`${styles.stage} rounded-[1.75rem] border border-rule p-4 shadow-[0_24px_65px_rgb(23_25_21/9%)] sm:p-6`}>
            <div className="relative z-10 grid gap-4 lg:grid-cols-[1fr_6rem_0.86fr] lg:items-center lg:gap-0">
              {/* Raw lecture sources read as the cool, noisy input — same
                  metaphor as the laptop's cool glow elsewhere: this is the
                  "before", not the payoff. */}
              <div className="rounded-2xl border border-[#2b3037] bg-[#17191d] p-4 shadow-[0_16px_40px_rgb(23_25_21/20%)] sm:p-5">
                <p className="text-xs font-bold tracking-[0.1em] text-digital">מקורות הרצאה</p>
                <ul className="mt-3 grid grid-cols-2 gap-2">
                  {platforms.sources.map((source, index) => {
                    const meta = sourceMeta[index];
                    return (
                      <li
                        key={source}
                        className={`flex min-h-12 items-center gap-2 rounded-xl border border-[#fcfcfa]/10 bg-[#fcfcfa]/5 px-3 py-2 ${index >= platforms.sources.length - 2 ? "col-span-2" : ""}`}
                      >
                        <span aria-hidden="true" className={`inline-flex size-7 shrink-0 items-center justify-center rounded-lg text-[0.7rem] font-bold ${meta.tone}`}>
                          {meta.glyph}
                        </span>
                        <span className="text-xs font-semibold leading-snug text-paper">{source}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div aria-hidden="true" className={styles.bridge}>
                <span className="relative z-10 inline-flex size-11 items-center justify-center rounded-xl border border-accent/25 bg-interface font-display text-base font-black text-accent shadow-[0_10px_22px_rgb(36_79_118/26%),inset_0_1px_0_rgb(255_255_255/70%),inset_0_-2px_3px_rgb(36_79_118/14%)]">B</span>
              </div>

              {/* The exported summary is the payoff — warm lit paper, same
                  rule as everywhere else in the page (the brightest surface
                  is always the structured result, never the raw input). */}
              <div className="rounded-2xl border border-rule/85 bg-interface p-4 shadow-[0_16px_36px_rgb(23_25_21/10%)] sm:p-5">
                <p className="text-xs font-bold tracking-[0.1em] text-accent">תוצרי הסיכום</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {exports_.formats.map((format, index) => {
                    const meta = formatMeta[index];
                    return (
                      <li key={format.label} className="flex min-h-14 items-center gap-3 rounded-xl border border-rule/75 bg-paper/65 px-3 py-2.5">
                        <span aria-hidden="true" className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-[0.65rem] font-black ${meta.color}`}>
                          {meta.mark}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-base font-bold text-ink">{format.label}</span>
                          <span className="block truncate text-xs text-ink-soft">{format.detail}</span>
                        </span>
                        <span className="rounded border border-rule bg-interface px-1.5 py-0.5 font-mono text-[0.58rem] font-bold text-ink-soft">
                          {meta.extension}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="relative z-10 mt-4 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#cbd7df] bg-[#edf3f6] px-4 py-3 text-xs sm:flex-row">
              <span className="font-bold tracking-[0.08em] text-accent">דפדפנים נתמכים</span>
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-ink-soft">
                {platforms.browsers.map((browser) => (
                  <li key={browser} className="flex items-center gap-1.5 font-semibold">
                    <span aria-hidden="true" className="inline-flex size-4 items-center justify-center rounded-full bg-accent text-[0.55rem] text-white">✓</span>
                    {browser}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
