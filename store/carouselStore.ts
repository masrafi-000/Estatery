import type {
	EmblaCarouselType,
	EmblaOptionsType
} from 'embla-carousel';
import { create } from 'zustand';

interface CarouselInstance {
	emblaApi: EmblaCarouselType | undefined;
	prevBtnDisabled: boolean;
	nextBtnDisabled: boolean;
	selectedIndex: number;
	scrollSnaps: number[];
}

interface CarouselState {
	carousels: { [id: string]: CarouselInstance };
	registerCarousel: (
		id: string,
		api: EmblaCarouselType,
		_options?: EmblaOptionsType
	) => void;
	unregisterCarousel: (id: string) => void;
	updateCarousel: (
		id: string,
		updates: Partial<CarouselInstance>
	) => void;
	getCarouselState: (id: string) => CarouselInstance | undefined;

	scrollPrev: (id: string) => void;
	scrollNext: (id: string) => void;
	scrollTo: (id: string, index: number) => void;

	onSelect: (id: string, api: EmblaCarouselType) => void;
}

export const useCarouselStore = create<CarouselState>((set, get) => ({
	carousels: {},

	registerCarousel: (id, api) => {
		set(state => ({
			carousels: {
				...state.carousels,
				[id]: {
					emblaApi: api,
					prevBtnDisabled: !api.canScrollPrev(),
					nextBtnDisabled: !api.canScrollNext(),
					selectedIndex: api.selectedScrollSnap(),
					scrollSnaps: api.scrollSnapList()
				}
			}
		}));
	},

	unregisterCarousel: id => {
		set(state => {
			const newCarousels = { ...state.carousels };
			delete newCarousels[id];
			return { carousels: newCarousels };
		});
	},

	updateCarousel: (id, updates) => {
		set(state => ({
			carousels: {
				...state.carousels,
				[id]: {
					...(state.carousels[id] || {}),
					...updates
				}
			}
		}));
	},

	getCarouselState: id => get().carousels[id],

	scrollPrev: id => get().carousels[id]?.emblaApi?.scrollPrev(),

	scrollNext: id => get().carousels[id]?.emblaApi?.scrollNext(),

	scrollTo: (id, index) =>
		get().carousels[id]?.emblaApi?.scrollTo(index),

	onSelect: (id, api) => {
		get().updateCarousel(id, {
			selectedIndex: api.selectedScrollSnap(),
			prevBtnDisabled: !api.canScrollPrev(),
			nextBtnDisabled: !api.canScrollNext(),
			scrollSnaps: api.scrollSnapList()
		});
	}
}));
