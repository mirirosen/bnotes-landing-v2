import { HeroMotion } from "@/components/hero/HeroMotion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { exports_, platforms } from "@/lib/content";

function ChipGroup({
  title,
  items,
  delay,
}: {
  title: string;
  items: readonly string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl border border-rule bg-interface p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-accent shadow-[0_0_8px_rgb(36_79_118/50%)]"
          />
          <p className="text-sm font-semibold text-ink">{title}</p>
          <span aria-hidden="true" className="h-px flex-1 bg-rule" />
        </div>
        <ul className="mt-5 flex flex-wrap gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_20px_rgb(36_79_118/10%)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/*
 * Merged "works everywhere, exports to everything" band — one compact stop
 * instead of two thin sections (platforms + exports).
 */
export function Platforms() {
  return (
    <section className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={platforms.eyebrow}
          title="עובד בכל מקום, יוצא לכל פורמט"
        />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-6">
            <ChipGroup title="מקורות הרצאה" items={platforms.sources} delay={0} />
            <ChipGroup title="דפדפנים" items={platforms.browsers} delay={100} />

            <Reveal delay={180}>
              <ul className="grid gap-4 sm:grid-cols-3">
                {exports_.formats.map((format) => (
                  <li key={format.label}>
                    <div className="group relative h-full overflow-hidden rounded-xl border border-rule bg-interface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgb(36_79_118/12%)]">
                      {/* folded paper corner (inline-end) */}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 size-7 bg-paper-deep shadow-[1px_1px_3px_rgb(23_25_21/12%)] [clip-path:polygon(0_0,100%_0,0_100%)]"
                      />
                      <p className="font-display text-base font-bold text-ink">
                        {format.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {format.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

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
