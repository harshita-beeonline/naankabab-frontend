import CareerBanner from '@/components/Careers/CareerBanner'
import CurrentOpening from '@/components/Careers/CurrentOpening'
import WeOffer from '@/components/Careers/WeOffer'
import WhyJoinUs from '@/components/Careers/WhyJoinUs'
import React from 'react'

const page = () => {
  return (
    <>
     <CareerBanner /> 
     <WhyJoinUs />
     <WeOffer />
     <CurrentOpening />
    </>
  )
}

export default page
