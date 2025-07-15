import './App.css'
import Achievements from './components/Achivements'
import Founder from './components/Founder'
import Hero from './components/Hero'
import HeroServices from './components/HeroServices'
import Navbar from './components/Navbar'
import TestimonialsBanner from './components/TestimonialsBanner'
import TrustedCompanies from './components/TrustedCompanies'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <TrustedCompanies/>
      <Founder/>
      <Achievements/>
      <HeroServices/>
      <TestimonialsBanner/>
    </>
  )
}

export default App
