
"use client"

import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarouselStore } from '@/store';

import type {EmblaOptionsType, EmblaCarouselType} from "embla-carousel"


interface UseCarouselZustandReturn {
  emblaRef: (instance: HTMLElement | null) => void;
  emblaApi: EmblaCarouselType | undefined;
  state: {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    selectedIndex: number;
    scrollSnaps: number[];
  };
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
}

export const useCarouselZustand = (id: string, options?: EmblaOptionsType): UseCarouselZustandReturn => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { registerCarousel, unregisterCarousel, getCarouselState, scrollPrev: storeScrollPrev, scrollNext: storeScrollNext, scrollTo: storeScrollTo, onSelect: storeOnSelect } = useCarouselStore();

  const carouselState = getCarouselState(id);


  useEffect(() => {
    if (emblaApi) {
      registerCarousel(id, emblaApi, options);


      const handleSelect = () => storeOnSelect(id, emblaApi);
      emblaApi.on('select', handleSelect);
      emblaApi.on('reInit', handleSelect);

      return () => {
        emblaApi.off('select', handleSelect);
        emblaApi.off('reInit', handleSelect);
        unregisterCarousel(id);
      };
    }
  }, [id, emblaApi, options, registerCarousel, unregisterCarousel, storeOnSelect]);


  useEffect(() => {
    if (emblaApi && !carouselState) {

       storeOnSelect(id, emblaApi);
    }
  }, [id, emblaApi, carouselState, storeOnSelect]);


  const scrollPrev = useCallback(() => {
    storeScrollPrev(id);
  }, [id, storeScrollPrev]);

  const scrollNext = useCallback(() => {
    storeScrollNext(id);
  }, [id, storeScrollNext]);

  const scrollTo = useCallback(
    (index: number) => {
      storeScrollTo(id, index);
    },
    [id, storeScrollTo]
  );

  return {
    emblaRef,
    emblaApi, // If you need direct API access in component
    state: {
      prevBtnDisabled: carouselState?.prevBtnDisabled ?? true,
      nextBtnDisabled: carouselState?.nextBtnDisabled ?? true,
      selectedIndex: carouselState?.selectedIndex ?? 0,
      scrollSnaps: carouselState?.scrollSnaps ?? [],
    },
    scrollPrev,
    scrollNext,
    scrollTo,
  };
};