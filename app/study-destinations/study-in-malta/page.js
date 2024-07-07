
import HomeBanner from '@/components/Home/HomeBanner'
import StudyInAus from '@/components/Study destinations/Study in Aus/StudyInAus'
import TopUniversities from '@/components/Study destinations/Study in Aus/TopUniversities'
import React from 'react'

export default function page() {
  return (
    <div >
        {/* <Banner></Banner> */}
        <HomeBanner></HomeBanner>
        <StudyInAus></StudyInAus>
        <TopUniversities></TopUniversities>
        {/* <HomeGetInTouch></HomeGetInTouch> */}
    </div>
  )
}
