import { HeroMotion } from "@/components/hero/HeroMotion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustLine } from "@/components/ui/TrustLine";
import { cta, finalCta, links } from "@/lib/content";

/*
 * Cinematic bookend: an intimate close-up of the summary paper, gently alive
 * (looping living-still on desktop), heavily scrimmed so the copy leads.
 */
export function FinalCta() {
  return (
    <section className="hero-cinema relative overflow-hidden py-20 sm:py-24">
      <div aria-hidden="true" className="finale-backdrop absolute inset-0" />
      <HeroMotion
        query="(min-width: 768px) and (prefers-reduced-motion: no-preference)"
        src="/media/sections/finale-motion.mp4"
        poster="/media/sections/finale-paper.webp"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#141417]/88 via-[#141417]/64 to-[#141417]/88"
      />

      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-paper [text-wrap:balance] sm:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#c9c2b2]">{finalCta.body}</p>

        <div className="mt-8 flex justify-center">
          <Button
            href={links.chromeStore}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="chrome_store_click"
            data-analytics-placement="final-cta"
            showChromeIcon
            microcopy={cta.microcopy}
          >
            {cta.primary}
          </Button>
        </div>

        <TrustLine tone="light" className="mt-5 justify-center" />
      </Container>
    </section>
  );
}
