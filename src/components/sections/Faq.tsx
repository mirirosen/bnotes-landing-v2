import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/lib/content";

/**
 * Native <details>/<summary> accordion: accessible and keyboard-operable
 * without any client-side JavaScript.
 */
export function Faq() {
  return (
    <section id="faq" className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mt-10 flex flex-col gap-3">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-rule bg-interface px-5 py-2.5 shadow-sm transition-colors open:border-accent/40 open:shadow-[0_12px_34px_rgb(36_79_118/8%)]"
            >
              {/* summary carries the vertical padding so the touch target is ≥44px */}
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-2.5 font-display text-lg text-ink">
                {item.question}
                <span
                  aria-hidden="true"
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-rule text-lg text-ink-soft transition-all group-open:rotate-45 group-open:border-accent/40 group-open:text-accent"
                >
                  +
                </span>
              </summary>
              <p className="mt-1 border-s-2 border-marker/70 pb-3 ps-4 text-base leading-relaxed text-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
