import { Badge } from '@/components/ui/badge';
import type { Property } from '@/types';
import {
	Bath,
	Bed,
	Calendar,
	LucideIcon,
	MapPin,
	Maximize
} from 'lucide-react';

interface PriceAndInfoStats {
	title: string;
	value: number | string;
	icon: LucideIcon;
}

interface PropertyInfoProps {
	property: Property;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ property }) => {
	const stats: PriceAndInfoStats[] = [
		{ icon: Bed, title: 'Bedrooms', value: property.bedrooms },
		{ icon: Bath, title: 'Bathrooms', value: property.bathrooms },
		{
			icon: Maximize,
			title: 'Area',
			value: `${property.area.toLocaleString()} sqft`
		},
		{ icon: Calendar, title: 'Year Built', value: property.yearBuilt }
	];

	return (
		<div className='space-y-6'>
			{/* Header */}
			<div>
				<div className='mb-3 flex flex-wrap items-center gap-2'>
					<Badge className='bg-primary text-primary-foreground'>
						{property.listingType.toUpperCase()}
					</Badge>
					{property.featured && (
						<Badge variant='secondary'>Featured</Badge>
					)}
					<Badge variant='outline'>{property.propertyType}</Badge>
				</div>
				<h1 className='mb-3 text-balance text-3xl font-bold md:text-4xl'>
					{property.title}
				</h1>
				<div className='flex items-center gap-2 text-muted-foreground'>
					<MapPin className='h-5 w-5' />
					<span>
						{property.address}, {property.city}, {property.state}{' '}
						{property.zipCode}
					</span>
				</div>
			</div>

			{/* Price and Stats */}
			<div className='rounded-lg border border-border bg-card p-6'>
				<div className='mb-4 text-4xl font-bold text-primary'>
					${property.price.toLocaleString()}
					{property.listingType === 'rent' && (
						<span className='text-xl font-normal text-muted-foreground'>
							/month
						</span>
					)}
				</div>
				<div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
					{stats.map(item => (
						<div key={item.title} className='flex items-center gap-2'>
							<item.icon className='h-5 w-5 text-muted-foreground' />
							<div>
								<div className='text-sm text-muted-foreground'>
									{item.title}
								</div>
								<div className='font-semibold'>{item.value}</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Description */}
			<div>
				<h2 className='mb-4 text-2xl font-bold'>
					About This Property
				</h2>
				<p className='leading-relaxed text-muted-foreground'>
					{property.description}
				</p>
			</div>
		</div>
	);
};
export default PropertyInfo;
