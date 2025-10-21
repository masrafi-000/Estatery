"use client";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";

const HeroSection: React.FC = () => {
  return (
    <section className="heroSection">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
