import ServiceCTA from "@/components/shared/services/service-cta";
import ServicesHero from "@/components/shared/services/service-hero";
import { ServicesList } from "@/components/shared/services/service-list";
import ServiceProcess from "@/components/shared/services/service-process";

const page = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceCTA />
    </>
  );
};

export default page;
