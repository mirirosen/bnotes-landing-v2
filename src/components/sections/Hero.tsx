import { HeroVisual } from "@/components/hero/HeroVisual";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TrustLine } from "@/components/ui/TrustLine";
import { hero } from "@/lib/content";

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
        {/* Desktop: pushed to the physically-left side of the scene — the
            open, uncluttered stretch above the paper — instead of sitting
            over the laptop. Mobile is unaffected (copy stacks above the
            visual in normal flow there). */}
        <div className="hero-copy max-w-2xl md:ms-auto">
          <Eyebrow tone="light">{hero.eyebrow}</Eyebrow>
          {/* The scene-setting headline ("ההרצאה מתקדמת...") was cut — it
              read as mood, not information. The one sentence that actually
              says what the product does is now the h1 itself. */}
          <h1 className="mt-2 max-w-xl text-[1.4rem] font-bold leading-[1.3] tracking-tight text-paper [text-wrap:pretty] sm:mt-3 sm:text-[1.75rem] lg:text-[2rem]">
            {hero.subheadline}
          </h1>

          {/* No CTA button/secondary link here anymore — the header's own
              CTA is now the single above-the-fold action on every
              breakpoint (see Header.tsx), so the hero doesn't repeat it. */}
          <TrustLine tone="light" className="mt-5 sm:mt-6" />
        </div>
      </Container>

      {/* Mobile: in-flow below the copy · Desktop: absolute full-stage backdrop */}
      <div className="mt-4 md:mt-0">
        <HeroVisual />
      </div>
    </section>
  );
}
