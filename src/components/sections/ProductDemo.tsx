import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TypedCaption } from "@/components/ui/TypedCaption";
import { howItWorks, productDemo } from "@/lib/content";

/*
 * One proof section, one focal point: the real extension screenshot beside
 * the three-step setup. The "transcript → structured summary" contrast used
 * to repeat as a fourth block here (a second bright panel competing with the
 * screenshot) — but the hero already shows it, the heading already says it,
 * and the screenshot already demonstrates it, so that block was cut rather
 * than compressed (density fix, round 6). One bright object on the dark
 * stage, generous room around it.
 */
export function ProductDemo() {
  return (
    <section
      id="how-it-works"
      className="hero-cinema on-dark relative overflow-hidden border-b border-[#2a2a2e] py-14 sm:py-16 lg:py-20"
    >
      <Container className="relative z-10">
        {/* No body line here: it only restated the title and the three
            steps right below it — cut rather than kept as filler. */}
        <SectionHeading
          eyebrow={productDemo.eyebrow}
          title="בזמן ההרצאה: תמלול חי. בסופה: סיכום מסודר."
          align="center"
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <Reveal>
            {/* Two real screenshots side by side — recording in progress,
                and the practice-quiz feature — instead of one. Flat and
                straight (no perspective tilt): these are real product UI,
                and a tilt here read as a rendering mistake rather than a
                deliberate effect. A small hover-lift on each keeps a touch
                of interactivity without tilting anything. */}
            <div className="mx-auto grid max-w-lg grid-cols-2 items-start gap-3 sm:gap-4">
              <div className="group">
                <div className="overflow-hidden rounded-2xl border border-digital/25 bg-[#14161a] shadow-[0_0_80px_rgb(252_252_250/13%),0_40px_80px_rgb(0_0_0/55%)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="flex items-center gap-1.5 border-b border-[#2b2f36] bg-[#191c21] px-3 py-2.5">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-digital opacity-60" />
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-digital opacity-40" />
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-digital opacity-30" />
                    <span className="ms-1 truncate text-[0.65rem] text-[#c9c2b2]">{productDemo.liveLabel}</span>
                  </div>
                  <Image
                    src="/media/extension-live-recording.png"
                    alt={productDemo.liveScreenshotAlt}
                    width={524}
                    height={580}
                    sizes="(min-width: 1024px) 260px, calc(50vw - 32px)"
                    loading="lazy"
                    className="block w-full saturate-[.92]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-2 h-5 w-3/4 rounded-[100%] bg-[#fcfcfa]/12 blur-xl"
                />
                {/* Types out once, the first time this scrolls into view —
                    a real line from this exact screenshot's own transcript,
                    proving "live" without animating inside the static PNG. */}
                <TypedCaption
                  text={productDemo.liveCaptionSample}
                  className="mt-1.5 block text-center text-[0.68rem] leading-relaxed text-digital"
                />
              </div>

              <div className="group">
                <div className="overflow-hidden rounded-2xl border border-digital/25 bg-[#14161a] shadow-[0_0_80px_rgb(252_252_250/13%),0_40px_80px_rgb(0_0_0/55%)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="flex items-center gap-1.5 border-b border-[#2b2f36] bg-[#191c21] px-3 py-2.5">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-digital opacity-60" />
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-digital opacity-40" />
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-digital opacity-30" />
                    <span className="ms-1 truncate text-[0.65rem] text-[#c9c2b2]">{productDemo.quizLabel}</span>
                  </div>
                  <Image
                    src="/media/extension-practice-quiz.png"
                    alt={productDemo.quizScreenshotAlt}
                    width={504}
                    height={885}
                    sizes="(min-width: 1024px) 260px, calc(50vw - 32px)"
                    loading="lazy"
                    className="block w-full saturate-[.92]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-2 h-5 w-3/4 rounded-[100%] bg-[#fcfcfa]/12 blur-xl"
                />
              </div>

              <p className="col-span-2 mt-1 text-center text-xs font-medium text-[#c9c2b2]">
                {productDemo.realLabel}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {/* No boxes, no body sentences: the numbered dot plus a hairline
                between items is enough separation, and the three titles
                already read as a complete flow (install → watch → get
                summary) — the explanatory sentence under each one was
                restating the section title one more time (text-density
                fix, round 7). */}
            <ol className="flex flex-col">
              {howItWorks.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-center gap-4 border-b border-[#fcfcfa]/10 py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-digital/35 bg-digital/10 font-display text-lg font-bold text-digital">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-paper">
                    {step.title}
                  </h3>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
