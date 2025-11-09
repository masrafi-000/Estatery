import ServiceCTA from "@/app/services/_components/service-cta";
import ServicesHero from "@/app/services/_components/service-hero";
import { ServicesList } from "@/app/services/_components/service-list";
import ServiceProcess from "@/app/services/_components/service-process";

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
