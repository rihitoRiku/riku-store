import HeroSection from "@/components/sections/hero-section";
import DescriptionSection from "@/components/sections/description-section";
import ProcessSection from "@/components/sections/process-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";
import ReviewsSection from "@/components/sections/reviews-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DescriptionSection />
      <TechStackSection />
      <ProcessSection />
      <PricingSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
