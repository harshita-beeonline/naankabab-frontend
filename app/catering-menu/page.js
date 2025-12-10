import BuffetStyle from '@/components/CateringMenu/BuffetStyle'
import CateringCards from '@/components/CateringMenu/CateringCards'
import CorporateCatering from '@/components/CateringMenu/CorporateCatering'
import CraftedWithCare from '@/components/CateringMenu/CraftedWithCare'
import PrivateEvents from '@/components/CateringMenu/PrivateEvents'
import SushiStyle from '@/components/CateringMenu/SushiStyle'
import React from 'react'

const page = () => {
  return (
    <>
     <CateringCards /> 
     <CorporateCatering />
     <SushiStyle />
     <PrivateEvents />
     <BuffetStyle />
     <CraftedWithCare />
    </>
  )
}

export default page
