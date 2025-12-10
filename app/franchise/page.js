import FranchiseBanner from '@/components/Franchise/FranchiseBanner'
import OurPromise from '@/components/Franchise/OurPromise'
import Overview from '@/components/Franchise/Overview'
import WhyFranchise from '@/components/Franchise/WhyFranchise'
import React from 'react'

const page = () => {
  return (
    <>
    <FranchiseBanner />
    <WhyFranchise />
    <OurPromise />
    <Overview />
    </>
  )
}

export default page
