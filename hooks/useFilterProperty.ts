'use client';

import { staticProperties } from '@/data';
import { usePropertyStore } from '@/store';
import { useMemo } from 'react';

const useFilterProperty = () => {
	const { filters } = usePropertyStore();

	const filterdProperty = useMemo(() => {
		return staticProperties.filter(property => {
			const matchesSearch =
				!filters.searchQuery ||
				property.id.includes(filters.searchQuery) ||
				property.title
					.toLowerCase()
					.includes(filters.searchQuery.toLowerCase()) ||
				property.city
					.toLowerCase()
					.includes(filters.searchQuery.toLowerCase()) ||
				property.address
					.toLowerCase()
					.includes(filters.searchQuery.toLowerCase());

			const matchesType =
				filters.propertyType === 'all' ||
				property.propertyType === filters.propertyType;

			const matchesPrice =
				property.price >= filters.priceMin &&
				property.price <= filters.priceMax;

			const matchesBedrooms =
				filters.bedrooms === 0 ||
				property.bedrooms >= filters.bedrooms;

			const matchesBathrooms =
				filters.bathrooms === 0 ||
				property.bathrooms >= filters.bathrooms;

			const matchesListingType =
				filters.listingType === 'all' ||
				property.listingType === filters.listingType;

			return (
				matchesSearch &&
				matchesType &&
				matchesPrice &&
				matchesBedrooms &&
				matchesBathrooms &&
				matchesListingType
			);
		});
	}, [filters]);

	return filterdProperty;
};

export { useFilterProperty };
