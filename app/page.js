import HomeBanner from '@/components/Home/HomeBanner'
import OurStory from '@/components/Home/OurStory'
import OurStoryCards from '@/components/Home/OurStoryCards'
import ScrollingIcons from '@/components/Home/ScrollingIcons'
import ServedStyle from '@/components/Home/ServedStyle'
import React from 'react'

const page = () => {
  return (
    <>
    <HomeBanner />
    <ScrollingIcons />
    <OurStoryCards />
    <OurStory />
    <ServedStyle />
    </>
  )
}

export default page
