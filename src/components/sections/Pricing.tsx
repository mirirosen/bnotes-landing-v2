import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cta, faq, finalCta, links, pricing, privacy } from "@/lib/content";
import styles from "./Pricing.module.css";

const essentialFaq = [
  faq.items[2],
  {
    question: "איפה זה עובד?",
    answer: `${faq.items[0].answer} ${faq.items[1].answer}`,
  },
  faq.items[5],
] as const;

const conciseValuePoints = [
  pricing.valuePoints[0],
  pricing.valuePoints[1],
  pricing.valuePoints[3],
] as const;

/* Price, risk reversal, and the three decisive objections share one closing
 * section. There is no second CTA scene after this one: the page ends once the
 * visitor has enough information to choose. */
export function Pricing() {
  return (
    <section
      id="pricing"
      className="hero-cinema on-dark relative overflow-hidden pt-14 sm:pt-16 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto h-[520px] w-[760px] max-w-full bg-[linear-gradient(180deg,rgb(229_185_75/13%),rgb(229_185_75/4%)_58%,transparent_88%)] blur-[44px] [clip-path:polygon(50%_-8%,8%_104%,92%_104%)]"
      />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={`${pricing.trialLabel}. אחר כך ${pricing.priceLabel} בחודש.`}
          align="center"
        />

        <div className="mx-auto mt-9 grid max-w-5xl gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            {/* The lit paper gently levitates in the lamp light — see
                paper-float/shadow-breathe in globals.css. The grounding
                shadow breathes in counter-phase so the card reads as
                resting on, not painted onto, the dark stage. */}
            <div className={`${styles.offerCard} on-light paper-float`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.12em] text-accent">תקופת ניסיון</p>
                  <p className="mt-2 font-display text-2xl font-bold text-ink">
                    <span className={styles.trialMark}>{pricing.trialLabel} — {pricing.trialDetail}</span>
                  </p>
                </div>
                <span className="rounded-full border border-rule bg-paper px-3 py-1 text-[0.62rem] font-bold tracking-[0.08em] text-ink-soft">
                  מנוי חודשי
                </span>
              </div>

              <div className={styles.priceBlock}>
                <div dir="ltr" className={styles.priceLockup} aria-label={pricing.priceLabel}>
                  <span className={styles.currency}>₪</span>
                  <span className={styles.amount}>23.90</span>
                </div>
                <p className="mt-1 text-sm text-ink-soft">{pricing.priceDetail}</p>
              </div>

              <p className="mt-5 text-[0.65rem] font-bold tracking-[0.12em] text-accent">מה כלול</p>
              <ul className={styles.valueList}>
                {conciseValuePoints.map((point) => (
                  <li key={point} className={styles.valueItem}>
                    <span aria-hidden="true" className={styles.check}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
                <li className={styles.valueItem}>
                  <span aria-hidden="true" className={styles.check}>✓</span>
                  <span>{pricing.cancelDetail}</span>
                </li>
              </ul>

              <Button
                href={links.chromeStore}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="chrome_store_click"
                data-analytics-placement="pricing"
                showChromeIcon
                microcopy={cta.microcopy}
                className="mt-6 w-full"
              >
                {cta.primary}
              </Button>
            </div>

            {/* grounding: the shadow the floating card casts, breathing in
                counter-phase with paper-float, over the light it throws */}
            <div
              aria-hidden="true"
              className="shadow-breathe mx-auto -mt-1 h-6 w-1/2 rounded-[100%] bg-black/50 blur-lg"
            />
            <div
              aria-hidden="true"
              className="mx-auto mt-1 h-8 w-2/3 rounded-[100%] bg-[#f4f0e5]/10 blur-xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <div id="faq" className="scroll-mt-28">
              <p className="text-xs font-bold tracking-[0.12em] text-digital">לפני שמתקינים</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-paper [text-wrap:balance]">
                שאלות נפוצות
              </h2>

              <div className="mt-5 flex flex-col gap-2.5">
                {essentialFaq.map((item, index) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-[#fcfcfa]/12 bg-[#fcfcfa]/5 px-4 py-1.5 open:border-digital/35 open:bg-[#fcfcfa]/8"
                  >
                    <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-2 font-display text-lg text-paper">
                      {item.question}
                      <span aria-hidden="true" className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[#fcfcfa]/20 text-lg text-[#c9c2b2] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="border-s-2 border-marker/70 pb-3 ps-4 text-sm leading-relaxed text-[#c9c2b2]">
                      {item.answer}
                    </p>
                    {index === essentialFaq.length - 1 ? (
                      <a
                        href={links.privacyPolicy}
                        className="mb-3 ms-4 inline-flex min-h-11 items-center text-sm font-semibold text-digital underline decoration-digital/35 underline-offset-4 hover:text-paper"
                      >
                        {privacy.linkLabel}
                      </a>
                    ) : null}
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Cinematic bookend: an intimate close-up of the summary paper closes
          the loop the hero opened, instead of the page just stopping on the
          pricing card. Kept as the tail of THIS section (not a 5th top-level
          section) — see responsive.spec.ts's 4-section regression test —
          and deliberately compact: the page-length budget has little slack
          left after the restructure. */}
      <div className="finale-backdrop relative z-10 mt-14 overflow-hidden border-t border-[#2a2a2e] sm:mt-16 lg:mt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#141417]/90 via-[#141417]/74 to-[#141417]/90"
        />
        <Container className="relative z-10 py-10 text-center sm:py-12">
          <p className="mx-auto max-w-sm font-display text-xl font-bold leading-snug text-paper [text-wrap:balance] sm:text-2xl">
            {finalCta.title}
          </p>
          <div className="mt-5 flex justify-center">
            <Button
              href={links.chromeStore}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="chrome_store_click"
              data-analytics-placement="final-bookend"
              showChromeIcon
              microcopy={cta.microcopy}
            >
              {cta.primary}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
