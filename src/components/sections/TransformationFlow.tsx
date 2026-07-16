import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { transformationFlow } from "@/lib/content";

/**
 * Direction B diagram logic: a real process sequence (not decorative numbering).
 * Each stage is a labeled state in the verified product flow.
 */
export function TransformationFlow() {
  const { stages } = transformationFlow;

  return (
    <section className="border-b border-rule bg-paper-deep py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={transformationFlow.eyebrow}
          title={transformationFlow.title}
          align="center"
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stages.map((stage, index) => {
            const isSummary = index === stages.length - 1;
            return (
              <li key={stage.label}>
                <Reveal delay={index * 90}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold tabular-nums ${
                        isSummary
                          ? "border border-marker bg-marker/25 text-ink"
                          : "border border-accent/30 bg-accent/10 text-accent"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {/* the thread: cools → warms toward the summary */}
                    <span
                      aria-hidden="true"
                      className={`h-0.5 flex-1 rounded-full bg-gradient-to-l ${
                        isSummary
                          ? "from-accent to-marker"
                          : "from-digital to-accent/50"
                      }`}
                    />
                  </div>
                  <p className="mt-4 font-display text-lg font-bold text-ink">
                    {stage.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {stage.detail}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
