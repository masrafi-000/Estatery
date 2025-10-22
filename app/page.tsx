import { Footer } from "@/components/shared/footer/footer";
import { BenefitsSection, HeroSection, TestimonialsSection } from "@/components/shared/home";
import FeaturedProperties from "@/components/shared/properties/featured-properties";


export default function page() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
