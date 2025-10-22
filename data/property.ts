import { PropertyFilters } from "@/store/propertyStore";
import { FilterSelectConfig, Property } from "@/types";
import { Bath, Bed, DollarSign, Home } from "lucide-react";

export const selectConfig: FilterSelectConfig<PropertyFilters>[] = [
  {
    key: "propertyType",
    icon: Home,
    placeholder: "Property Type",
    items: [
      { value: "All", label: "All Types" },
      { value: "House", label: "House" },
      { value: "Apartment", label: "Apartment" },
      { value: "Condo", label: "Condo" },
      { value: "Townhouse", label: "Townhouse" },
      { value: "Land", label: "Land" },
    ],
    onValueChange: (value) => ({
      propertyType: value.toLowerCase() as PropertyFilters["propertyType"],
    }),
	value: (filters) => filters.propertyType.charAt(0).toUpperCase() + filters.propertyType.slice(1),
  },
  {
    key: "priceMax",
    icon: DollarSign,
    placeholder: "Max Price",
    items: [
      { value: "500000", label: "$500K" },
      { value: "1000000", label: "$1M" },
      { value: "2000000", label: "$2M" },
      { value: "5000000", label: "$5M" },
      { value: "10000000", label: "$10M+" },
    ],
    onValueChange: (value) => ({ priceMax: parseInt(value) }),
    value: (filters) => filters.priceMax?.toString(),
  },
  {
    key: "bedrooms",
    icon: Bed,
    placeholder: "Bedrooms",
    items: [
      { value: "0", label: "Any" },
      { value: "1", label: "1+" },
      { value: "2", label: "2+" },
      { value: "3", label: "3+" },
      { value: "4", label: "4+" },
      { value: "5", label: "5+" },
    ],
    onValueChange: (value) => ({ bedrooms: parseInt(value) }),
    value: (filters) => filters.bedrooms?.toString(),
  },
  {
    key: "bathrooms",
    icon: Bath,
    placeholder: "Bathrooms",
    items: [
      { value: "0", label: "Any" },
      { value: "1", label: "1+" },
      { value: "2", label: "2+" },
      { value: "3", label: "3+" },
      { value: "4", label: "4+" },
    ],
    onValueChange: (value) => ({ bathrooms: parseInt(value) }),
    value: (filters) => filters.bathrooms?.toString(),
  },
];


export const staticProperties: Property[] = [
	{
		id: '1',
		title: 'Modern Luxury Villa with Ocean View',
		description:
			'Stunning modern villa featuring panoramic ocean views, infinity pool, and state-of-the-art amenities. This architectural masterpiece offers the ultimate in luxury living with spacious open-plan living areas, gourmet kitchen, and expansive outdoor entertaining spaces.',
		price: 2850000,
		address: '123 Ocean Drive',
		city: 'Miami Beach',
		state: 'FL',
		zipCode: '33139',
		propertyType: 'house',
		listingType: 'buy',
		bedrooms: 5,
		bathrooms: 4,
		area: 4500,
		images: [
			'/modern-luxury-villa-ocean-view.jpg',
			'/luxury-villa-interior.png',
			'/infinity-pool-ocean.jpg'
		],
		amenities: [
			'Ocean View',
			'Infinity Pool',
			'Home Theater',
			'Wine Cellar',
			'Smart Home',
			'Gym',
			'Garage',
			'Garden'
		],
		yearBuilt: 2022,
		agent: {
			name: 'Sarah Johnson',
			email: 'sarah.johnson@estatery.com',
			phone: '(305) 555-0123',
			image: '/professional-woman-realtor.jpg'
		},
		featured: true,
		createdAt: '2025-01-15'
	},
	{
		id: '2',
		title: 'Downtown Luxury Apartment',
		description:
			'Sophisticated high-rise apartment in the heart of downtown. Features floor-to-ceiling windows, modern finishes, and access to premium building amenities including rooftop pool, fitness center, and concierge service.',
		price: 3500,
		address: '456 Main Street, Unit 2401',
		city: 'New York',
		state: 'NY',
		zipCode: '10001',
		propertyType: 'apartment',
		listingType: 'rent',
		bedrooms: 2,
		bathrooms: 2,
		area: 1200,
		images: [
			'/luxury-apartment-downtown-city-view.jpg',
			'/modern-apartment-living-room.png',
			'/luxury-apartment-kitchen.png'
		],
		amenities: [
			'City View',
			'Doorman',
			'Gym',
			'Pool',
			'Parking',
			'Pet Friendly',
			'Balcony'
		],
		yearBuilt: 2020,
		agent: {
			name: 'Michael Chen',
			email: 'michael.chen@estatery.com',
			phone: '(212) 555-0456',
			image: '/professional-realtor.png'
		},
		featured: true,
		createdAt: '2025-01-20'
	},
	{
		id: '3',
		title: 'Charming Suburban Family Home',
		description:
			'Beautiful family home in a quiet suburban neighborhood. Features spacious backyard, updated kitchen, hardwood floors throughout, and close proximity to top-rated schools and parks.',
		price: 675000,
		address: '789 Maple Avenue',
		city: 'Austin',
		state: 'TX',
		zipCode: '78701',
		propertyType: 'house',
		listingType: 'buy',
		bedrooms: 4,
		bathrooms: 3,
		area: 2800,
		images: [
			'/suburban-family-home-exterior.jpg',
			'/family-backyard.png',
			'/modern-kitchen.png'
		],
		amenities: [
			'Backyard',
			'Garage',
			'Fireplace',
			'Hardwood Floors',
			'Updated Kitchen',
			'Near Schools'
		],
		yearBuilt: 2015,
		agent: {
			name: 'Emily Rodriguez',
			email: 'emily.rodriguez@estatery.com',
			phone: '(512) 555-0789',
			image: '/professional-woman-realtor.jpg'
		},
		featured: true,
		createdAt: '2025-01-18'
	},
	{
		id: '4',
		title: 'Contemporary Condo with City Views',
		description:
			"Sleek contemporary condo offering stunning city skyline views. Open-concept design with premium finishes, chef's kitchen, and access to building amenities.",
		price: 2800,
		address: '321 Park Boulevard, #1502',
		city: 'San Francisco',
		state: 'CA',
		zipCode: '94102',
		propertyType: 'condo',
		listingType: 'rent',
		bedrooms: 2,
		bathrooms: 2,
		area: 1100,
		images: [
			'/contemporary-condo-city-view.jpg',
			'/modern-condo-interior.png',
			'/condo-balcony-city.jpg'
		],
		amenities: [
			'City View',
			'Gym',
			'Concierge',
			'Parking',
			'Balcony',
			'Storage'
		],
		yearBuilt: 2019,
		agent: {
			name: 'David Kim',
			email: 'david.kim@estatery.com',
			phone: '(415) 555-0234',
			image: '/professional-realtor.png'
		},
		featured: false,
		createdAt: '2025-01-22'
	},
	{
		id: '5',
		title: 'Elegant Townhouse in Historic District',
		description:
			'Beautifully restored townhouse in the historic district. Combines classic charm with modern updates, featuring original hardwood floors, exposed brick, and a private patio.',
		price: 895000,
		address: '567 Heritage Lane',
		city: 'Boston',
		state: 'MA',
		zipCode: '02108',
		propertyType: 'townhouse',
		listingType: 'buy',
		bedrooms: 3,
		bathrooms: 2,
		area: 2200,
		images: [
			'/historic-townhouse.png',
			'/townhouse-interior-exposed-brick.jpg',
			'/townhouse-patio.jpg'
		],
		amenities: [
			'Historic',
			'Patio',
			'Hardwood Floors',
			'Exposed Brick',
			'Updated',
			'Near Transit'
		],
		yearBuilt: 1890,
		agent: {
			name: 'Jennifer Walsh',
			email: 'jennifer.walsh@estatery.com',
			phone: '(617) 555-0567',
			image: '/professional-woman-realtor.jpg'
		},
		featured: false,
		createdAt: '2025-01-19'
	},
	{
		id: '6',
		title: 'Spacious Loft in Arts District',
		description:
			'Industrial-chic loft in the vibrant arts district. Features soaring ceilings, exposed ductwork, polished concrete floors, and oversized windows flooding the space with natural light.',
		price: 3200,
		address: '890 Industrial Way, Unit 304',
		city: 'Los Angeles',
		state: 'CA',
		zipCode: '90013',
		propertyType: 'apartment',
		listingType: 'rent',
		bedrooms: 1,
		bathrooms: 1,
		area: 1400,
		images: [
			'/industrial-loft-interior.jpg',
			'/loft-high-ceilings.jpg',
			'/loft-kitchen.jpg'
		],
		amenities: [
			'High Ceilings',
			'Natural Light',
			'Parking',
			'Pet Friendly',
			'Near Transit',
			'Arts District'
		],
		yearBuilt: 2018,
		agent: {
			name: 'Alex Martinez',
			email: 'alex.martinez@estatery.com',
			phone: '(213) 555-0890',
			image: '/professional-person-realtor.jpg'
		},
		featured: false,
		createdAt: '2025-01-21'
	},
	{
		id: '7',
		title: 'Modern Luxury Villa with Ocean View',
		description:
			'Stunning modern villa featuring panoramic ocean views, infinity pool, and state-of-the-art amenities. This architectural masterpiece offers the ultimate in luxury living with spacious open-plan living areas, gourmet kitchen, and expansive outdoor entertaining spaces.',
		price: 2850000,
		address: '123 Ocean Drive',
		city: 'Miami Beach',
		state: 'FL',
		zipCode: '33139',
		propertyType: 'house',
		listingType: 'buy',
		bedrooms: 5,
		bathrooms: 4,
		area: 4500,
		images: [
			'/modern-luxury-villa-ocean-view.jpg',
			'/luxury-villa-interior.png',
			'/infinity-pool-ocean.jpg'
		],
		amenities: [
			'Ocean View',
			'Infinity Pool',
			'Home Theater',
			'Wine Cellar',
			'Smart Home',
			'Gym',
			'Garage',
			'Garden'
		],
		yearBuilt: 2022,
		agent: {
			name: 'Sarah Johnson',
			email: 'sarah.johnson@estatery.com',
			phone: '(305) 555-0123',
			image: '/professional-woman-realtor.jpg'
		},
		featured: true,
		createdAt: '2025-01-15'
	},
	{
		id: '8',
		title: 'Downtown Luxury Apartment',
		description:
			'Sophisticated high-rise apartment in the heart of downtown. Features floor-to-ceiling windows, modern finishes, and access to premium building amenities including rooftop pool, fitness center, and concierge service.',
		price: 3500,
		address: '456 Main Street, Unit 2401',
		city: 'New York',
		state: 'NY',
		zipCode: '10001',
		propertyType: 'apartment',
		listingType: 'rent',
		bedrooms: 2,
		bathrooms: 2,
		area: 1200,
		images: [
			'/luxury-apartment-downtown-city-view.jpg',
			'/modern-apartment-living-room.png',
			'/luxury-apartment-kitchen.png'
		],
		amenities: [
			'City View',
			'Doorman',
			'Gym',
			'Pool',
			'Parking',
			'Pet Friendly',
			'Balcony'
		],
		yearBuilt: 2020,
		agent: {
			name: 'Michael Chen',
			email: 'michael.chen@estatery.com',
			phone: '(212) 555-0456',
			image: '/professional-realtor.png'
		},
		featured: true,
		createdAt: '2025-01-20'
	},
	{
		id: '9',
		title: 'Charming Suburban Family Home',
		description:
			'Beautiful family home in a quiet suburban neighborhood. Features spacious backyard, updated kitchen, hardwood floors throughout, and close proximity to top-rated schools and parks.',
		price: 675000,
		address: '789 Maple Avenue',
		city: 'Austin',
		state: 'TX',
		zipCode: '78701',
		propertyType: 'house',
		listingType: 'buy',
		bedrooms: 4,
		bathrooms: 3,
		area: 2800,
		images: [
			'/suburban-family-home-exterior.jpg',
			'/family-backyard.png',
			'/modern-kitchen.png'
		],
		amenities: [
			'Backyard',
			'Garage',
			'Fireplace',
			'Hardwood Floors',
			'Updated Kitchen',
			'Near Schools'
		],
		yearBuilt: 2015,
		agent: {
			name: 'Emily Rodriguez',
			email: 'emily.rodriguez@estatery.com',
			phone: '(512) 555-0789',
			image: '/professional-woman-realtor.jpg'
		},
		featured: true,
		createdAt: '2025-01-18'
	},
	{
		id: '10',
		title: 'Contemporary Condo with City Views',
		description:
			"Sleek contemporary condo offering stunning city skyline views. Open-concept design with premium finishes, chef's kitchen, and access to building amenities.",
		price: 2800,
		address: '321 Park Boulevard, #1502',
		city: 'San Francisco',
		state: 'CA',
		zipCode: '94102',
		propertyType: 'condo',
		listingType: 'rent',
		bedrooms: 2,
		bathrooms: 2,
		area: 1100,
		images: [
			'/contemporary-condo-city-view.jpg',
			'/modern-condo-interior.png',
			'/condo-balcony-city.jpg'
		],
		amenities: [
			'City View',
			'Gym',
			'Concierge',
			'Parking',
			'Balcony',
			'Storage'
		],
		yearBuilt: 2019,
		agent: {
			name: 'David Kim',
			email: 'david.kim@estatery.com',
			phone: '(415) 555-0234',
			image: '/professional-realtor.png'
		},
		featured: false,
		createdAt: '2025-01-22'
	},
	{
		id: '11',
		title: 'Elegant Townhouse in Historic District',
		description:
			'Beautifully restored townhouse in the historic district. Combines classic charm with modern updates, featuring original hardwood floors, exposed brick, and a private patio.',
		price: 895000,
		address: '567 Heritage Lane',
		city: 'Boston',
		state: 'MA',
		zipCode: '02108',
		propertyType: 'townhouse',
		listingType: 'buy',
		bedrooms: 3,
		bathrooms: 2,
		area: 2200,
		images: [
			'/historic-townhouse.png',
			'/townhouse-interior-exposed-brick.jpg',
			'/townhouse-patio.jpg'
		],
		amenities: [
			'Historic',
			'Patio',
			'Hardwood Floors',
			'Exposed Brick',
			'Updated',
			'Near Transit'
		],
		yearBuilt: 1890,
		agent: {
			name: 'Jennifer Walsh',
			email: 'jennifer.walsh@estatery.com',
			phone: '(617) 555-0567',
			image: '/professional-woman-realtor.jpg'
		},
		featured: false,
		createdAt: '2025-01-19'
	},
	{
		id: '12',
		title: 'Spacious Loft in Arts District',
		description:
			'Industrial-chic loft in the vibrant arts district. Features soaring ceilings, exposed ductwork, polished concrete floors, and oversized windows flooding the space with natural light.',
		price: 3200,
		address: '890 Industrial Way, Unit 304',
		city: 'Los Angeles',
		state: 'CA',
		zipCode: '90013',
		propertyType: 'apartment',
		listingType: 'rent',
		bedrooms: 1,
		bathrooms: 1,
		area: 1400,
		images: [
			'/industrial-loft-interior.jpg',
			'/loft-high-ceilings.jpg',
			'/loft-kitchen.jpg'
		],
		amenities: [
			'High Ceilings',
			'Natural Light',
			'Parking',
			'Pet Friendly',
			'Near Transit',
			'Arts District'
		],
		yearBuilt: 2018,
		agent: {
			name: 'Alex Martinez',
			email: 'alex.martinez@estatery.com',
			phone: '(213) 555-0890',
			image: '/professional-person-realtor.jpg'
		},
		featured: false,
		createdAt: '2025-01-21'
	}
];
