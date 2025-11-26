import { HeroSection } from "@/components/HeroSection";
import { EmotionalSection } from "@/components/EmotionalSection";
import { OfferSection } from "@/components/OfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BonusesSection } from "@/components/BonusesSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EmotionalSection />
      <OfferSection />
      <TestimonialsSection />
      <BonusesSection />
      <GuaranteeSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
