import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Simple from './Simple'
import LandingPage from './LandingPage'
import Header from './Header'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import './index.css'
import HowItWorks from './HowItWorks'
import CTA from './CTA'
import Footer from './Footer'
import ProtocolInsights from './ProtocolInsights'


function App() {
 

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <CTA />
      <ProtocolInsights />
      <Footer />
    </>
  )
}

export default App
