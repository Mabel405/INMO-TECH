"use client"
import { useState } from "react"
import { Banner } from '@/components/Banner'
import { Properties } from "@/components/Properties"
import { dataProperties } from "@/components/Properties/Properties.data"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Services } from '@/components/Services'
import { About } from "@/components/About"
import { TransitionPage } from '@/components/TransitionPage'
import dynamic from "next/dynamic"

const LocationMap = dynamic(
  () => import('../components/Location').then(module => module.Location),
  { ssr: false }
)

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(dataProperties)

  const handleSearch = (filters: { location: string, type: string, priceRange: string }) => {
    const results = dataProperties.filter(prop => {
      const matchLoc = filters.location
        ? prop.location.toLowerCase().includes(filters.location.toLowerCase())
        : true
      const matchType = filters.type
        ? prop.type.toLowerCase() === filters.type.toLowerCase()
        : true
      let matchPrice = true
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number)
        matchPrice = prop.price >= min && prop.price <= max
      }
      return matchLoc && matchType && matchPrice
    })
    setFilteredProperties(results)
  }

  const handleSelectDistrict = (district: string) => {
    const results = dataProperties.filter(prop =>
      prop.location.toLowerCase().includes(district.toLowerCase())
    )
    setFilteredProperties(results)
  }

  return (
    <>
      <TransitionPage />
      <Header />
      <main>
        <Banner onSearch={handleSearch} />

        <Properties data={filteredProperties} />

        <div className="container mx-auto px-4">
          <About />
          <Services />
          <LocationMap onSelectDistrict={handleSelectDistrict} />
        </div>

        <Footer />
      </main>
    </>
  )
}