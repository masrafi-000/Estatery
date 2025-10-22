import { Check } from "lucide-react"

interface PropertyAmenitiesProps {
  amenities: string[]
}

const  PropertyAmenities: React.FC<PropertyAmenitiesProps> = ({ amenities }) =>{
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-2xl font-bold">Amenities & Features</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyAmenities
