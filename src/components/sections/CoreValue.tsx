import { HeroMotion } from "@/components/hero/HeroMotion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreValue } from "@/lib/content";

/*
 * The mid-page dark anchor: raw noise vs. structured summary on a night
 * stage. The raw-transcript card belongs to the dark; the structured card is
 * the single lit paper island (.on-light restores ink inside .on-dark).
 */
export function CoreValue() {
  return (
    <section className="hero-cinema on-dark relative overflow-hidden border-b border-[#2a2a2e] py-16 sm:py-20 lg:py-24">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow={coreValue.eyebrow}
          title={coreValue.title}
          body={coreValue.body}
        />

        {/* The transformation as a physical object: tangled thread → laid lines */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-[#fcfcfa]/12 shadow-[0_30px_80px_rgb(0_0_0/45%)]">
            {/* eslint-disable-next-line @next/next/no-img-element -- static asset */}
            <img
              src="/media/sections/chaos-to-order.webp"
              alt="איור: פקעת חוט כחולה סבוכה מרחפת מעל מסך מחשב, והחוט נפרם ומונח כקווים ישרים ומסודרים על דף נייר לאור מנורה"
              width={1800}
              height={764}
              loading="lazy"
              className="block w-full"
            />
            <HeroMotion
              query="(min-width: 768px) and (prefers-reduced-motion: no-preference)"
              src="/media/sections/chaos-motion.mp4"
              poster="/media/sections/chaos-to-order.webp"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Before: the raw noise — part of the night */}
          <div className="flex h-full flex-col rounded-2xl border border-[#2b2f36] bg-[#181b20]/90 p-6 shadow-[0_0_40px_rgb(157_194_214/8%)] sm:p-8">
            <p className="text-sm font-semibold text-digital">
              {coreValue.before.label}
            </p>
            <p className="mt-4 text-sm leading-loose text-[#fcfcfa]/55 italic">
              {coreValue.before.lines[0]}
            </p>
            <div aria-hidden="true" className="mt-5 flex items-end gap-1 opacity-50">
              {[5, 9, 6, 11, 7, 10, 5, 8, 12, 6, 9, 7].map((h, i) => (
                <span
                  key={i}
                  className="w-1 rounded-sm bg-digital"
                  style={{ height: `${h * 2}px` }}
                />
              ))}
            </div>
          </div>

          {/* The thread carries the noise into structure */}
          <div aria-hidden="true" className="hidden items-center lg:flex">
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-digital/40 bg-digital/10 text-2xl text-digital shadow-[0_0_20px_rgb(157_194_214/25%)]">
              ←
            </span>
          </div>

          {/* After: the structured summary — the lit paper island */}
          <div className="on-light flex h-full flex-col rounded-2xl border border-[#f4f0e5]/25 bg-interface p-6 shadow-[0_0_90px_rgb(244_240_229/14%),0_30px_70px_rgb(0_0_0/45%)] sm:p-8">
            <p className="text-sm font-semibold text-accent">{coreValue.after.label}</p>
            <div className="mt-4 border-e-2 border-accent ps-4 pe-4">
              <p className="font-display text-lg font-bold text-ink">
                {coreValue.after.heading}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {coreValue.after.bullets.map((bullet, index) => (
                  <li
                    key={bullet}
                    className={`text-sm ${
                      index === 0
                        ? "rounded bg-marker/25 px-2 py-0.5 font-medium text-ink"
                        : "text-ink-soft"
                    }`}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
