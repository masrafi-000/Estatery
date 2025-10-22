// import { staticProperties } from '@/lib/static-data'
import React from 'react'
// import PropertyCard from './components/property-card'
import AllPropertiesContent from '@/components/shared/properties/all-property-content'

const page = () => {
  return (
    <div className='bg-linear-to-br from-indigo-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950'>

    <div className='container mx-auto px-4 py-8'>
      <AllPropertiesContent />


      </div>
    </div>
  )
}

export default page