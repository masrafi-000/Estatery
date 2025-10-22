"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Property } from "@/types";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

interface PropertyImageProps {
  property: Property;
  isHovered: boolean;
  isFavorite: boolean;
  setIsFavorite: (value: boolean) => void;
}

export const PropertyImage = ({
  property,
  isHovered,
  isFavorite,
  setIsFavorite,
}: PropertyImageProps) => (
  <div className="relative aspect-4/3 overflow-hidden bg-muted">
    <motion.div
      className="h-full w-full"
      animate={{ scale: isHovered ? 1.1 : 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src={property.images[0] || "/placeholder.svg"}
        alt={property.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        loading="lazy"
      />
    </motion.div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Badges */}
    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Badge className="bg-primary text-primary-foreground shadow-lg backdrop-blur-sm font-semibold px-3 py-1">
          {property.listingType.toUpperCase()}
        </Badge>
      </motion.div>
      {property.featured && (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Badge className="bg-accent text-accent-foreground shadow-lg backdrop-blur-sm font-semibold px-3 py-1">
            Featured
          </Badge>
        </motion.div>
      )}
    </div>

    {/* Favorite Button */}
    <motion.div
      className="absolute right-4 top-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        size="icon"
        variant="secondary"
        className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background"
        onClick={(e) => {
          e.preventDefault();
          setIsFavorite(!isFavorite);
        }}
      >
        <motion.div
          animate={{ scale: isFavorite ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
            )}
          />
        </motion.div>
      </Button>
    </motion.div>

    {/* Price Tag - Visible on Hover */}
    <motion.div
      className="absolute bottom-4 left-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: isHovered ? 0 : 20,
        opacity: isHovered ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-background/95 backdrop-blur-md rounded-lg px-4 py-2 shadow-xl">
        <p className="text-2xl font-bold text-primary">
          ${property.price.toLocaleString()}
          {property.listingType === "rent" && (
            <span className="text-sm font-normal text-muted-foreground">
              /mo
            </span>
          )}
        </p>
      </div>
    </motion.div>
  </div>
);
