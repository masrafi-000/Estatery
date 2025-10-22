'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import { selectConfig } from '@/data';
import { usePropertyStore } from '@/store';
import { MapPin, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const types = ['all', 'buy', 'rent', 'sold'] as const;

export const HeroSearchBar: React.FC = () => {
	const { filters, setFilters } = usePropertyStore();
	const [localSearch, setLocalSearch] = useState('');
	const router = useRouter();

	const handleSearch = async () => {
		setFilters({ searchQuery: localSearch });

		const params = new URLSearchParams();
		if (localSearch) params.set('search', localSearch);
		if (filters.propertyType !== 'all')
			params.set('type', filters.propertyType);
		if (filters.priceMax !== 10000000)
			params.set('maxPrice', filters.priceMax.toString());
		if (filters.bedrooms > 0)
			params.set('bedrooms', filters.bedrooms.toString());
		if (filters.bathrooms > 0)
			params.set('bathrooms', filters.bathrooms.toString());
		if (filters.listingType)
			params.set('listingType', filters.listingType);

		router.push(`/properties?${params.toString()}`);
	};

	const handleKeyDown = (e: React.KeyboardEvent) =>
		e.key === 'Enter' && handleSearch();

	return (
		<div className='mx-auto max-w-5xl rounded-xl border border-border bg-card p-4 shadow-lg md:p-6'>
			{/* Listing Type Toggle */}
			<div className='mb-4 flex gap-2 text-accent-foreground'>
				{types.map(type => (
					<Button
						key={type}
						variant={
							filters.listingType === type ? 'default' : 'outline'
						}
						size='sm'
						onClick={() => setFilters({ listingType: type })}
						className='flex-1'
					>
						{type.charAt(0).toUpperCase() + type.slice(1)}
					</Button>
				))}
			</div>

			{/* Main Search Input */}
			<div className='mb-4 flex gap-2'>
				<div className='relative flex-1'>
					<MapPin className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground' />
					<Input
						placeholder='Enter city, address, or property ID...'
						value={localSearch}
						onChange={e => setLocalSearch(e.target.value)}
						onKeyDown={handleKeyDown}
						className='pl-10 text-accent-foreground'
					/>
				</div>
				<Button
					onClick={handleSearch}
					size='lg'
					className='min-w-[120px]'
				>
					<Search className='mr-2 h-5 w-5' /> Search
				</Button>
			</div>

			{/* Advanced Filters */}
			<div className='grid gap-3 md:grid-cols-4 text-accent-foreground'>
				{selectConfig.map(config => {
					const Icon = config.icon;
					return (
						<Select
							key={config.key}
							value={config.value(filters)}
							onValueChange={value =>
								setFilters(config.onValueChange(value))
							}
						>
							<SelectTrigger className='w-full'>
								<Icon className='h-4 w-4 mr-2' />
								<SelectValue placeholder={config.placeholder} />
							</SelectTrigger>
							<SelectContent>
								{config.items.map(item => (
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
