import CostEstimator from '@/components/CostEstimator'
import HomePopularCountries from '@/components/Home/HomePopularCountries'
import React from 'react'

export default function page() {
  return (
    <>
      <HomePopularCountries></HomePopularCountries>
      <CostEstimator></CostEstimator>
    </>
  )
}
