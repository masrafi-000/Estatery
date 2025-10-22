import { Property } from "@/types";
import { PropertyCardSkeleton } from "../property-card-skeleton";
import { PropertyCard } from "../propertyCard";


interface PropertyGridProps {
    isLoading: boolean;
    properties: Property[];
}

export const PropertyGrid = ({ isLoading, properties }: PropertyGridProps) => {
   if (isLoading) {
        return (
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {Array.from({ length: 6 }).map((_, i) => (
                    <PropertyCardSkeleton key={i} />
                ))}
            </div>
        );
  }

  return (
     <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
  )
}