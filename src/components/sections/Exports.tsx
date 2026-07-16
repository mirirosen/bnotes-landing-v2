import { HeroMotion } from "@/components/hero/HeroMotion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { exports_ } from "@/lib/content";

export function Exports() {
  return (
    <section className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={exports_.eyebrow} title={exports_.title} />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]">
          <ul className="flex flex-col justify-center gap-5">
            {exports_.formats.map((format, index) => (
              <li key={format.label}>
                <Reveal delay={index * 100}>
                  <div className="group relative overflow-hidden rounded-xl border border-rule bg-interface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgb(36_79_118/12%)]">
                    {/* folded paper corner (inline-end) */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 size-8 bg-paper-deep shadow-[1px_1px_3px_rgb(23_25_21/12%)] [clip-path:polygon(0_0,100%_0,0_100%)]"
                    />
                    <div className="flex items-center justify-between gap-3 pe-6">
                      <p className="font-display text-lg font-bold text-ink">
                        {format.label}
                      </p>
                      <span
                        aria-hidden="true"
                        className="inline-flex items-end gap-1 opacity-70"
                      >
                        <span className="h-1 w-8 rounded-full bg-accent/70" />
                        <span className="h-1 w-5 rounded-full bg-accent/40" />
                        <span className="h-1 w-3 rounded-full bg-digital/60" />
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {format.detail}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={150} className="hidden lg:block">
            <div className="relative h-full overflow-hidden rounded-2xl border border-rule shadow-[0_24px_70px_rgb(23_25_21/12%)]">
              {/* eslint-disable-next-line @next/next/no-img-element -- static asset */}
              <img
                src="/media/sections/export-papers.webp"
                alt="איור: שלושה דפי סיכום פרושים כמניפה על שולחן לאור מנורה, לצד סרט דיו כחול"
                width={1200}
                height={805}
                loading="lazy"
                className="block size-full object-cover"
              />
              <HeroMotion
                query="(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
                src="/media/sections/papers-motion.mp4"
                poster="/media/sections/export-papers.webp"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
