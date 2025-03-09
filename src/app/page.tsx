import HeroSection from "@/components/sections/hero-section"; // Client component
import DescriptionSection from "@/components/sections/description-section";
import ProcessSection from "@/components/sections/process-section";
import TechStackSection from "@/components/sections/tech-stack-section";
// import ImportanceSection from "@/components/sections/importance-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-xl px-2 py-8 pt-12 sm:px-4">
      <HeroSection />
      <DescriptionSection />
      <TechStackSection />
      <ProcessSection />
      <PricingSection />
      {/* <ImportanceSection /> */}
      <ContactSection />
    </div>
  );
}
