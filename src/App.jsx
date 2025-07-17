import './App.css'
import AchievementsSection from './components/achivement-section'
import FounderSection from './components/founder-section'
import HeroSection from './components/hero-section'
import HeroServicesSection from './components/hero-services'
import NavbarSection from './components/header-section'
import TestimonialBannerSection from './components/testimonial-banner'
import TrustedCompaniesSection from './components/trusted-companies'
import StatCards from './components/stats-cards'
import BlogSection from './components/blog-section'
import BlogCards from './components/blog-cards'
import ProjectDiscussionSection from './components/project-discussion-section'
import ContactSection from './components/contact-section'
import FooterSection from './components/footer-section'
import TestimonialCard from './components/testimonial-cards'

function App() {


  return (
    <>
      <div className='my-container'>
        <NavbarSection />
        <HeroSection />
        <TrustedCompaniesSection />
        <FounderSection />
        <AchievementsSection />
        <HeroServicesSection />
        <TestimonialBannerSection />
        <TestimonialCard/>
        <StatCards />
        <BlogSection />
        <BlogCards />
        <ProjectDiscussionSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  )
}

export default App
