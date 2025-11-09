import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectConfig } from "@/data";
import { usePropertyStore } from "@/store";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";

interface ListingType {
  label: string;
  value: "all" | "buy" | "rent" | "sold";
}

const listingTypes: ListingType[] = [
  { label: "All", value: "all" },
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Sold", value: "sold" },
];

interface FilterSectionProps {
  localSearch: string;
  setLocalSearch: (search: string) => void;
  handleSearch: () => void;
  handleReset: () => void;
}

export const FilterSection = ({
  localSearch,
  setLocalSearch,
  handleSearch,
  handleReset,
}: FilterSectionProps) => {
  const { filters, setFilters } = usePropertyStore();
  const [showFilters, setShowFilters] = useState<boolean>(true);

  return (
    <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Search & Filter</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide" : "Show"} Filters
        </Button>
      </div>
      {showFilters && (
        <div className="space-y-4">
          <div className="flex gap-2">
            {listingTypes.map((type) => (
              <Button
                key={type.value}
                variant={
                  filters.listingType === type.value ? "default" : "outline"
                }
                size="sm"
                onClick={() => setFilters({ listingType: type.value })}
                className="flex-1"
              >
                {type.label}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Enter city, address, or property ID..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10"
              />
            </div>
            <Button onClick={handleSearch} size="lg">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {selectConfig.map((config) => {
              const Icon = config.icon;
              return (
                <Select
                  key={config.key}
                  value={config.value(filters)}
                  onValueChange={(value) =>
                    setFilters(config.onValueChange(value))
                  }
                >
                  <SelectTrigger className="w-full">
                    <Icon />
                    <SelectValue placeholder={config.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {config.items.map((item) => (
                      <SelectItem className="text-black" key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            })}
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={handleReset}>
              Reset Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
