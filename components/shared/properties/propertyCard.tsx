"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Property } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PropertyImage } from "./property/property-card-image";
import { PropertyStats } from "./property/property-card-stats";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 p-0 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
        <PropertyImage
          {...{ property, isHovered, isFavorite, setIsFavorite }}
        />

        {/* Content Section */}
        <CardContent className="p-5">
          {/* Title */}
          <motion.h3
            className="text-xl font-bold mb-3 line-clamp-1 group-hover:text-primary transition-colors"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {property.title}
          </motion.h3>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-sm line-clamp-1">
              {property.city}, {property.state}
            </span>
          </div>

          {/* Property Stats */}
          <PropertyStats property={property} />

          {/* View Details Button */}
          <motion.div
            onClick={() => router.push(`/properties/${property.id}`)}
            className="mt-4"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/properties/${property.id}`);
              }}
              className="w-full justify-between group/btn hover:bg-primary/5 h-11"
            >
              <span className="font-semibold">View Details</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
