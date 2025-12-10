import React from 'react';
import OurLocationBanner from '@/components/OurLocation/OurLocationBanner';
import OurLocationCard from '@/components/OurLocation/OurLocationCard';
import SearchLocation from '@/components/OurLocation/SearchLocation';

const page = () => {
  return (
    <>
     <OurLocationBanner />
     <OurLocationCard /> 
     <SearchLocation />
    </>
  )
}

export default page
