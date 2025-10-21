import { create } from "zustand";

export interface PropertyFilters {
  searchQuery: string;
  propertyType: string;
  priceMin: number;
  priceMax: number;
  bedrooms: number;
  bathrooms: number;
  listingType: "all" | "buy" | "rent" | "sold";
}

interface PropertyStore {
  filters: PropertyFilters;
  setFilters: (filters: Partial<PropertyFilters>) => void;
  resetFilters: () => void;
}

const defaultFiltes: PropertyFilters = {
  searchQuery: "",
  propertyType: "all",
  priceMin: 0,
  priceMax: 10000000,
  bedrooms: 0,
  bathrooms: 0,
  listingType: "all",
};

export const usePropertyStore = create<PropertyStore>((set) => ({
  filters: defaultFiltes,
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () => set({ filters: defaultFiltes }),
}));
