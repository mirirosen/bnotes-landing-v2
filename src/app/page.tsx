import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollThread } from "@/components/ui/ScrollThread";
import { CoreValue } from "@/components/sections/CoreValue";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Platforms } from "@/components/sections/Platforms";
import { Pricing } from "@/components/sections/Pricing";
import { Privacy } from "@/components/sections/Privacy";
import { ProductDemo } from "@/components/sections/ProductDemo";

export default function Home() {
  return (
    <>
      <ScrollThread />
      <Header />
      {/* Rhythm: dark opening act (hero+proof) → paper → dark anchor →
          paper → dark conversion → paper → dark finale */}
      <main id="main" className="flex-1">
        <Hero />
        <ProductDemo />
        <HowItWorks />
        <CoreValue />
        <Platforms />
        <Pricing />
        <Privacy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
