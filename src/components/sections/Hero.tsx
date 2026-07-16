import { HeroVisual } from "@/components/hero/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TrustLine } from "@/components/ui/TrustLine";
import { cta, hero, links } from "@/lib/content";

/*
 * Cinematic hero — "שולחן הלימוד: החוט שמתארגן".
 * Desktop: the generated scene fills the entire stage edge-to-edge (HeroVisual
 * turns absolute behind the copy at md+); the copy floats in the scrimmed
 * negative space. Mobile: copy first, story-cropped scene below.
 */
export function Hero() {
  return (
    <section className="hero-cinema hero-pull relative overflow-hidden border-b border-rule md:flex md:min-h-svh md:flex-col">
      <Container className="relative z-10 pt-6 sm:pt-8 md:pt-[14svh]">
        <div className="hero-copy max-w-2xl">
          <Eyebrow tone="light">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-2 text-[1.7rem] font-bold leading-[1.18] tracking-tight text-paper sm:mt-3 sm:text-4xl lg:text-[2.7rem]">
            {hero.headline}
          </h1>

          <div className="mt-5 flex flex-col items-start gap-2.5 sm:mt-6 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href={links.chromeStore}
              target="_blank"
              rel="noopener noreferrer"
              showChromeIcon
              microcopy={cta.microcopy}
            >
              {cta.primary}
            </Button>
            <a
              href="#how-it-works"
              className="min-h-11 inline-flex items-center text-sm font-medium text-[#c9c2b2] underline decoration-[#4a4436] decoration-2 underline-offset-4 hover:text-digital"
            >
              {cta.secondary} ↓
            </a>
          </div>

          <TrustLine tone="light" className="mt-4 sm:mt-5" />
        </div>
      </Container>

      {/* Mobile: in-flow below the copy · Desktop: absolute full-stage backdrop */}
      <div className="mt-4 md:mt-0">
        <HeroVisual />
      </div>
    </section>
  );
}
