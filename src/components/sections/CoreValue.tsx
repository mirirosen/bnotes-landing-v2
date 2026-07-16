import { HeroMotion } from "@/components/hero/HeroMotion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreValue } from "@/lib/content";

export function CoreValue() {
  return (
    <section className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={coreValue.eyebrow}
          title={coreValue.title}
          body={coreValue.body}
        />

        {/* The transformation as a physical object: tangled thread → laid lines */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-rule shadow-[0_24px_70px_rgb(23_25_21/12%)]">
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
          {/* Before: the raw noise — dark, like the lecture screen */}
          <div className="flex h-full flex-col rounded-2xl border border-[#2b2f36] bg-[#181b20] p-6 shadow-[0_0_40px_rgb(157_194_214/8%)] sm:p-8">
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
          <div
            aria-hidden="true"
            className="hidden items-center lg:flex"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-2xl text-accent shadow-[0_0_20px_rgb(36_79_118/20%)]">
              ←
            </span>
          </div>

          {/* After: the structured summary — warm lit paper */}
          <div className="flex h-full flex-col rounded-2xl border border-rule bg-interface p-6 shadow-[0_18px_50px_rgb(229_185_75/10%),0_4px_14px_rgb(23_25_21/6%)] sm:p-8">
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
