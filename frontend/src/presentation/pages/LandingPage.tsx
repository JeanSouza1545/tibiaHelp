import React from 'react'
import Header from '@presentation/components/Header'
import HeroSection from '@presentation/components/HeroSection'
import FeaturesSection from '@presentation/components/FeaturesSection'
import Footer from '@presentation/components/Footer'

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
