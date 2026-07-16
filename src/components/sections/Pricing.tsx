import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cta, links, pricing } from "@/lib/content";

/*
 * The conversion moment as cinema: a night stage where the pricing card is
 * the single lit sheet of paper — lamp cone from above, light pool beneath,
 * gently levitating. Bright card = maximum contrast exactly where it counts.
 */
export function Pricing() {
  return (
    <section
      id="pricing"
      className="hero-cinema on-dark relative overflow-hidden border-b border-[#2a2a2e] py-16 sm:py-20 lg:py-24"
    >
      {/* lamp cone falling onto the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 z-0 mx-auto h-[460px] max-w-[620px] bg-[radial-gradient(50%_62%_at_50%_0%,rgb(244_240_229/13%),transparent_72%)]"
      />

      <Container className="relative z-10">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} align="center" />

        <Reveal className="mx-auto mt-12 max-w-md">
          <div className="on-light paper-float relative overflow-hidden rounded-3xl border border-[#f4f0e5]/25 bg-interface p-8 pt-10 text-center shadow-[0_0_110px_rgb(244_240_229/15%),0_45px_90px_rgb(0_0_0/55%)]">
            {/* the thread, resting on top of the price card */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-digital via-accent to-marker"
            />

            <p className="inline-flex items-center gap-2 rounded-full border border-marker/60 bg-marker/20 px-4 py-1.5 text-sm font-semibold text-ink">
              {pricing.trialLabel}
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-ink">
              {pricing.trialDetail}
            </p>

            <div className="my-6 h-px bg-rule" />

            <p className="font-display text-5xl font-bold tracking-tight text-ink">
              {pricing.priceLabel}
            </p>
            <p className="mt-2 text-sm text-ink-soft">{pricing.priceDetail}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft">
              <span aria-hidden="true" className="text-accent">
                ✓
              </span>
              {pricing.cancelDetail}
            </p>

            <Button
              href={links.chromeStore}
              target="_blank"
              rel="noopener noreferrer"
              showChromeIcon
              microcopy={cta.microcopy}
              className="mt-8 w-full"
            >
              {cta.primary}
            </Button>
          </div>

          {/* the light the paper throws on the desk */}
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-8 w-2/3 rounded-[100%] bg-[#f4f0e5]/10 blur-xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
