import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorks } from "@/lib/content";

const stepMarkers = ["התקנה", "הרצאה", "סיכום"] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} align="center" />

        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 110}>
                {/* One 21:9 render cropped into thirds — the three steps share
                    a single physical world (RTL: install → lecture → summary) */}
                <div
                  aria-hidden="true"
                  className="aspect-[16/10] overflow-hidden rounded-xl border border-rule bg-[#16131078]"
                  style={{
                    backgroundImage: "url(/media/sections/steps-triptych.webp)",
                    backgroundSize: "300% auto",
                    backgroundPosition: `${[100, 50, 0][index]}% 55%`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-display text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {stepMarkers[index]}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-rule" />
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
