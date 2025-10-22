import React from 'react';
import ContactForm from '@/components/shared/contact/contact-form';
import ContactHero from '@/components/shared/contact/contact-hero';
import ContactInfo from '@/components/shared/contact/contact-info';
import { ContactMap } from '@/components/shared/contact/contact-map';

const page = () => {
	return (
		<div className='flex min-h-screen flex-col '>
			<main className='flex-1'>
				<ContactHero />
				<section className='py-16 md:py-24'>
					<div className='container mx-auto px-4'>
						<div className='grid gap-12 lg:grid-cols-2 items-start'>
							<ContactForm />
							<ContactInfo />
						</div>
					</div>
        </section>
        <ContactMap />
			</main>
		</div>
	);
};

export default page;
