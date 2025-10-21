"use client";

import { useEffect, useState } from "react";

const images: string[] = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
  "/hero/hero6.jpg",
  "/hero/hero7.jpg",
  "/hero/hero8.jpg",
];

export const HeroBackground: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );

  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 w-full h-full bg-linear-to-br from-primary/20 via-background/30 to-accent/20" />
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImage && imagesLoaded[index]
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            display: imagesLoaded[index] ? "block" : "none",
          }}
        />
      ))}
    </div>
  );
};
