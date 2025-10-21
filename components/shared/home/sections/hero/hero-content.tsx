'use client'

import { HeroSearchBar } from "./hero-search-bar"



export const HeroContent: React.FC = () => {
  return (
    <div className='relative z-10 container mx-auto px-4'>
      <div className='mx-auto max-w-4xl text-center'>
        <h1 className='mb-3 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl'>
          Find Your Dream Home
        </h1>
        <p className='mb-5 text-pretty text-lg dark:text-white md:text-xl'>
          Discover the perfect property from our extensive collection of homes, apartments, and commercial spaces
        </p>
        <HeroSearchBar />
      </div>
    </div>
  )
}
