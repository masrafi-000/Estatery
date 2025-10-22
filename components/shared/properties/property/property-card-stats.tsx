import { Property } from "@/types";
import { Bath, Bed, Maximize, type LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

interface PropertyStatsProps {
  property: Property;
}

export const PropertyStats = ({ property }: PropertyStatsProps) => {
  const stats: Stat[] = [
    { label: "Beds", value: property.bedrooms, icon: Bed },
    { label: "Baths", value: property.bathrooms, icon: Bath },
    {
      label: "sqft",
      value: property.area.toLocaleString(),
      icon: Maximize,
    },
  ];

  return (
    <div className="flex items-center justify-between gap-3 pb-4 border-b border-border/50">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-2 text-sm">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
            <stat.icon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
