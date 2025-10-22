export interface FilterSelectConfig<T> {
  key: keyof T;
  icon: React.ElementType;
  placeholder: string;
  items: { value: string; label: string }[];
  onValueChange: (value: string) => Partial<T>;
  value: (filters: T) => string | undefined;
}

export interface PropertyStats {
  label: string;
  value: string;
  icon: React.ElementType;
}


export interface Property {
  id: string
  title: string
  description: string
  price: number
  address: string
  city: string
  state: string
  zipCode: string
  propertyType: "house" | "apartment" | "condo" | "townhouse" | "land"
  listingType: "buy" | "rent" | "sold"
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  amenities: string[]
  yearBuilt: number
  agent: {
    name: string
    email: string
    phone: string
    image: string
  }
  featured: boolean
  createdAt: string
}