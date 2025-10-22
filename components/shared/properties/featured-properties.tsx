
import { Button } from "@/components/ui/button";
import { staticProperties } from "@/data";
import { Property } from "@/types";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import { PropertyCard } from "./propertyCard";
import Carousel from "../carousel/carousel";

const FeaturedProperties = () => {
  const featuredData: Property[] = staticProperties.slice(0, 9);

  const carouselOptions: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground">
            Handpicked properties just for you
          </p>
        </div>

        {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
        <Carousel id="featured-properties-carousel" options={carouselOptions}>
          {featuredData.map((property) => (
            <div key={property.id} className="embla__slide">
              <PropertyCard property={property} />
            </div>
          ))}
        </Carousel>
        <div className="mt-2 flex items-center justify-center">
          <Link href="/properties" className="">
            <Button className="cursor-pointer">Veiw All Properties</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
