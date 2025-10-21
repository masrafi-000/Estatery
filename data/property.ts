import { PropertyFilters } from "@/store/propertyStore";
import { FilterSelectConfig } from "@/types";
import { Bath, Bed, DollarSign, Home } from "lucide-react";

export const selectConfig: FilterSelectConfig<PropertyFilters>[] = [
  {
    key: "propertyType",
    icon: Home,
    placeholder: "Property Type",
    items: [
      { value: "All", label: "All Types" },
      { value: "House", label: "House" },
      { value: "Apartment", label: "Apartment" },
      { value: "Condo", label: "Condo" },
      { value: "Townhouse", label: "Townhouse" },
      { value: "Land", label: "Land" },
    ],
    onValueChange: (value) => ({
      propertyType: value.toLowerCase() as PropertyFilters["propertyType"],
    }),
    value: (filters) => filters.propertyType,
  },
  {
    key: "priceMax",
    icon: DollarSign,
    placeholder: "Max Price",
    items: [
      { value: "500000", label: "$500K" },
      { value: "1000000", label: "$1M" },
      { value: "2000000", label: "$2M" },
      { value: "5000000", label: "$5M" },
      { value: "10000000", label: "$10M+" },
    ],
    onValueChange: (value) => ({ priceMax: parseInt(value) }),
    value: (filters) => filters.priceMax?.toString(),
  },
  {
    key: "bedrooms",
    icon: Bed,
    placeholder: "Bedrooms",
    items: [
      { value: "0", label: "Any" },
      { value: "1", label: "1+" },
      { value: "2", label: "2+" },
      { value: "3", label: "3+" },
      { value: "4", label: "4+" },
      { value: "5", label: "5+" },
    ],
    onValueChange: (value) => ({ bedrooms: parseInt(value) }),
    value: (filters) => filters.bedrooms?.toString(),
  },
  {
    key: "bathrooms",
    icon: Bath,
    placeholder: "Bathrooms",
    items: [
      { value: "0", label: "Any" },
      { value: "1", label: "1+" },
      { value: "2", label: "2+" },
      { value: "3", label: "3+" },
      { value: "4", label: "4+" },
    ],
    onValueChange: (value) => ({ bathrooms: parseInt(value) }),
    value: (filters) => filters.bathrooms?.toString(),
  },
];
