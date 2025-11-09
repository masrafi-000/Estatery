// import { Footer } from "@/components/shared/footer/footer";
import FeaturedProperties from "@/app/properties/_components/featured-properties";
import {
  BenefitsSection,
  HeroSection,
  TestimonialsSection,
} from "@/components/shared/home";

export default function page() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <BenefitsSection />
      <TestimonialsSection />
    </>
  );
}
