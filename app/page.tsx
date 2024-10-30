import About from "@/components/Global/About";
import Affiliate from "@/components/Global/Affiliate";
import Contact from "@/components/Global/Contact";
import CTA from "@/components/Global/CTA";
import Hero from "@/components/Global/Hero";
import HowItWorks from "@/components/Global/HowItWorks";
import Portfolio from "@/components/Global/Portfolio";
import Pricing from "@/components/Global/Pricing";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden h-full">
      <Hero />
      <About />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <CTA />
      <Affiliate />
      <Contact />
    </main>
  );
}
