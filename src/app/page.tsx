import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollThread } from "@/components/ui/ScrollThread";
import { Hero } from "@/components/sections/Hero";
import { Platforms } from "@/components/sections/Platforms";
import { Pricing } from "@/components/sections/Pricing";
import { ProductDemo } from "@/components/sections/ProductDemo";

export default function Home() {
  return (
    <>
      <ScrollThread />
      <Header />
      {/* Four decisive acts: promise → proof → compatibility → decision. */}
      <main id="main" className="flex-1">
        <Hero />
        <ProductDemo />
        <Platforms />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
