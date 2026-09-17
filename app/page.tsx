import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Health } from "@/components/Health";
import { Hero } from "@/components/Hero";
import { Inquire } from "@/components/Inquire";
import { Litter } from "@/components/Litter";
import { LitterBand } from "@/components/LitterBand";
import { Nav } from "@/components/Nav";
import { Parents } from "@/components/Parents";
import { StickyBar } from "@/components/StickyBar";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { InquiryProvider } from "@/lib/inquiry";

export default function HomePage() {
  return (
    <InquiryProvider>
      <a className="skip-link" href="#story">
        Skip to story
      </a>
      <Nav />
      <main>
        <Hero />
        <Story />
        <LitterBand />
        <Health />
        <Parents />
        <Litter />
        <Testimonials />
        <FAQ />
        <Inquire />
      </main>
      <Footer />
      <StickyBar />
    </InquiryProvider>
  );
}
