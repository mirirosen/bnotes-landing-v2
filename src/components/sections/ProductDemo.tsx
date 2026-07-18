import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productDemo } from "@/lib/content";

/*
 * Real product proof on a night stage: the actual extension capture floats
 * as a glowing 3D panel over the dark world (perspective tilt that straightens
 * on hover), beside "what you're seeing" markers as dark glass cards.
 * The screenshot itself stays untouched — truth in a cinematic frame.
 */
export function ProductDemo() {
  return (
    <section className="hero-cinema on-dark relative overflow-hidden border-b border-[#2a2a2e] py-16 sm:py-20 lg:py-24">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow={productDemo.eyebrow}
          title={productDemo.title}
          body={productDemo.body}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <Reveal className="order-1 lg:order-none">
            <ul className="flex flex-col gap-4">
              {productDemo.highlights.map((item, index) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-[#fcfcfa]/10 bg-[#fcfcfa]/5 p-4 backdrop-brightness-110"
                >
                  <span
                    className={`mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${
                      index === productDemo.highlights.length - 1
                        ? "border border-marker/70 bg-marker/20 text-marker"
                        : "border border-digital/40 bg-digital/10 text-digital"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-paper">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#c9c2b2]">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            {/* 3D floating panel: tilted in perspective, straightens on hover */}
            <div className="group mx-auto max-w-md [perspective:1400px]">
              <div className="overflow-hidden rounded-2xl border border-digital/25 bg-[#14161a] shadow-[0_0_90px_rgb(252_252_250/16%),0_40px_80px_rgb(0_0_0/50%)] transition-transform duration-700 ease-out [transform:rotateY(9deg)_rotateX(2deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)]">
                <div className="flex items-center gap-2 border-b border-[#2b2f36] bg-[#191c21] px-4 py-3">
                  <span className="size-2 rounded-full bg-digital opacity-60" />
                  <span className="size-2 rounded-full bg-digital opacity-40" />
                  <span className="size-2 rounded-full bg-digital opacity-30" />
                  <span className="ms-2 text-xs text-[#c9c2b2]">
                    B Notes — תמלול חי
                  </span>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element -- static asset, fixed size, no optimization pipeline needed */}
                <img
                  src="/media/extension-live-transcript.png"
                  alt={productDemo.screenshotAlt}
                  width={687}
                  height={739}
                  className="block w-full saturate-[.92]"
                />
              </div>
              {/* light the panel throws on the desk */}
              <div
                aria-hidden="true"
                className="mx-auto mt-2 h-6 w-3/4 rounded-[100%] bg-[#fcfcfa]/15 blur-xl"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-[#c9c2b2]">
              {productDemo.realLabel}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
