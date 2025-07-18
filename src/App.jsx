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
import ScrollFadeIn from './components/animate-utils/ScrollFadeIn'

function App() {
  return (
    <div className='my-container'>
      <NavbarSection />
      <ScrollFadeIn><HeroSection /></ScrollFadeIn>
      <ScrollFadeIn ><TrustedCompaniesSection /></ScrollFadeIn>
      <ScrollFadeIn ><FounderSection /></ScrollFadeIn>
      <ScrollFadeIn ><AchievementsSection /></ScrollFadeIn>
      <ScrollFadeIn ><HeroServicesSection /></ScrollFadeIn>
      <ScrollFadeIn ><TestimonialBannerSection /></ScrollFadeIn>
      <ScrollFadeIn ><TestimonialCard/></ScrollFadeIn>
      <ScrollFadeIn ><StatCards /></ScrollFadeIn>
      <ScrollFadeIn ><BlogSection /></ScrollFadeIn>
      <ScrollFadeIn ><BlogCards /></ScrollFadeIn>
      <ScrollFadeIn ><ProjectDiscussionSection /></ScrollFadeIn>
      <ScrollFadeIn ><ContactSection /></ScrollFadeIn>
      <ScrollFadeIn ><FooterSection /></ScrollFadeIn>
    </div>
  );
}

export default App
