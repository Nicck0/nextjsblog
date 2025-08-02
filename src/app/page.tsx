import FeaturedSection from '@/components/FeaturedSection'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen bg-background'>
     <Navigation/>
     <main>
      <HeroSection/>
      <FeaturedSection/>
     </main>
    </div>
  )
}

export default page
