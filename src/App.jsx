import './App.css'
import AchievementsSection from './components/achivement-section'
import FounderSection from './components/founder-section'
import HeroSection from './components/hero-section'
import HeroServicesSection from './components/hero-services'
import NavbarSection from './components/header-section'
import TestimonialBannerSection from './components/testimonial-banner'
import TrustedCompaniesSection from './components/trusted-companies'

function App() {


  return (
    <>
      <NavbarSection/>
      <HeroSection/>
      <TrustedCompaniesSection/>
      <FounderSection/>
      <AchievementsSection/>
      <HeroServicesSection/>
      <TestimonialBannerSection/>
    </>
  )
}

export default App
