import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { platforms } from "@/lib/content";

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
      <div className="h-full rounded-2xl border border-rule bg-interface p-6 shadow-sm">
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

export function Platforms() {
  return (
    <section className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={platforms.eyebrow} title={platforms.title} />

        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2">
          <ChipGroup title="מקורות הרצאה" items={platforms.sources} delay={0} />
          <ChipGroup title="דפדפנים" items={platforms.browsers} delay={120} />
        </div>
      </Container>
    </section>
  );
}
