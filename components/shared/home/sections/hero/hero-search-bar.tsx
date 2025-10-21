"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { selectConfig } from "@/data";
import { usePropertyStore } from "@/store";
import { SelectValue } from "@radix-ui/react-select";
import { MapPin, Search } from "lucide-react";

const types = ["all", "buy", "rent", "sold"] as const;

export const HeroSearchBar: React.FC = () => {
  const { filters, setFilters } = usePropertyStore();

  return (
    <div className="mx-auto max-w-5xl rounded-xl border border-border bg-card p-4 shadow-lg md:p-6">
      {/* Listing type Toogle */}
      <div className="mb-4 flex gap-2">
        {types.map((type) => (
          <Button
            key={type}
            variant={filters.listingType === type ? "default" : "outline"}
            size="sm"
            onClick={() => setFilters({ listingType: type })}
            className="flex-1"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </div>

      {/* Main Serach Input */}
      <div className="mb-4 flex gap-2">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Enter city, address, or property ID..."
            // value={}
            // TODO: Need to change the onChange and value
            className="pl-10"
          />
        </div>
        <Button size="default" className="cursor-pointer min-w-[120px]">
          <Search className="mr-2 size-5" />
        </Button>
      </div>

      {/* Advance Filters */}
      <div className="grid gap-3 md:grid-cols-4">
        {selectConfig.map((config) => {
          const Icon = config.icon;
          return (
            <Select key={config.key}>
              <SelectTrigger className="w-[180px]">
                <Icon className="size-5 mr-2" />
                <SelectValue placeholder={config.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {config.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        })}
      </div>
    </div>
  );
};
