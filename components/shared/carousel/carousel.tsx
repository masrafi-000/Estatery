"use client";

import type { EmblaOptionsType } from "embla-carousel";
import React, { ReactNode } from "react";

import { useCarouselZustand } from "@/hooks/useCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./carousel.css";

interface CarouselProps {
  id: string;
  children: ReactNode;
  options?: EmblaOptionsType;
}

const Carousel: React.FC<CarouselProps> = ({ id, children, options }) => {
  const {
    emblaRef,
    state: { prevBtnDisabled, nextBtnDisabled, selectedIndex, scrollSnaps },
    scrollPrev,
    scrollNext,
    scrollTo,
  } = useCarouselZustand(id, options);

  return (
    <div className="relative">
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="hidden absolute z-1 top-1/2 size-10 text-white -left-5 rounded-full md:flex items-center justify-center bg-gray-900 dark:bg-gray-700 cursor-pointer"
      >
        <ArrowLeft size={20} />
      </button>
      <div className="embla relative" id={`embla-${id}`}>
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container">{children}</div>
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="embla__dots ">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`embla__dot ${
                  index === selectedIndex ? "embla__dot--selected" : ""
                }`}
                onClick={() => scrollTo(index)}
                type="button"
              />
            ))}
          </div>
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className=" rounded-full size-10 text-white flex items-center justify-center bg-gray-900 dark:bg-gray-700 cursor-pointer"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="rounded-full size-10 text-white flex items-center justify-center bg-gray-900 dark:bg-gray-700 cursor-pointer"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="hidden size-10 text-white  absolute z-1 top-1/2 -right-5 rounded-full md:flex items-center justify-center   bg-gray-900 dark:bg-gray-700 cursor-pointer"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
