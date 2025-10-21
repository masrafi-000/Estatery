import { Footer } from "@/components/shared/footer/footer";
import { BenefitsSection, HeroSection, TestimonialsSection } from "@/components/shared/home";


export default function page() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
