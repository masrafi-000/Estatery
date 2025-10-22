import { usePropertyStore } from '@/store';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export const useSearchAndFilters = () => {
	const { filters, setFilters, resetFilters } = usePropertyStore();
	const searchParams = useSearchParams();

	const [localSearch, setLocalSearch] = useState<string>('');
	const hasInitialized = useRef<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const search = searchParams.get('search');
		const type = searchParams.get('type');
		const maxPrice = searchParams.get('maxPrice');
		const bedrooms = searchParams.get('bedrooms');
		const bathrooms = searchParams.get('bathrooms');
		const listingType = searchParams.get('listingType');

		if (
			!hasInitialized.current &&
			(search ||
				type ||
				maxPrice ||
				bedrooms ||
				bathrooms ||
				listingType)
		) {
			setFilters({
				searchQuery: search || '',
				propertyType: type || 'all',
				priceMax: maxPrice ? Number.parseInt(maxPrice) : 10000000,
				bedrooms: bedrooms ? Number.parseInt(bedrooms) : 0,
				bathrooms: bathrooms ? Number.parseInt(bathrooms) : 0,
				listingType:
					(listingType as 'all' | 'buy' | 'rent' | 'sold') || 'all'
			});
			setLocalSearch(search || '');
			hasInitialized.current = true;
		}
	}, [searchParams, setFilters]);

	const handleSearch = () => {
		setIsLoading(true);
		setFilters({ searchQuery: localSearch });
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	};

	const handleReset = () => {
		setLocalSearch('');
		resetFilters();
		hasInitialized.current = false;
	};

	return {
		filters,
		setFilters,
		resetFilters,
		localSearch,
		setLocalSearch,
		isLoading,
		handleSearch,
		handleReset
	};
};
