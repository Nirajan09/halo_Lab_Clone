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
import ScrollFadeInSection from './components/animate-utils/ScrollFadeIn'
import { useEffect, useState } from 'react'
import HeroSectionSkeleton from './components/hero-section/HeroSectionSkeleton'
import FooterSectionSkeleton from './components/footer-section/FooterSkeleton'
import TrustedCompaniesSkeleton from './components/trusted-companies/TrustedCompaniesSkeleton'
import FounderSectionSkeleton from './components/founder-section/FounderSectionSkeleton'
import AchievementsSectionSkeleton from './components/achivement-section/AchievementSectionSkeleton'
import HeroServicesSectionSkeleton from './components/hero-services/HeroServicesSkeleton'
import TestimonialBannerSectionSkeleton from './components/testimonial-banner/TestimonialBannerSkeleton'
import TestimonialCardSkeleton from './components/testimonial-cards/TestimonialCardsSkeleton'
import StatCardsSkeleton from './components/stats-cards/StatCardsSkeleton'
import BlogSectionSkeleton from './components/blog-section/BlogSectionSkeleton'
import ProjectDiscussionSectionSkeleton from './components/project-discussion-section/ProjectDiscussionSkeleton'
import ContactSectionSkeleton from './components/contact-section/ContactSectionSkeleton'
import BlogCardsSkeleton from './components/blog-cards/BlogCardsSkeleton'

function SectionWithSkeleton({ loading, Skeleton, children, ...fadeProps }) {
  return loading
    ? <Skeleton />
    : <ScrollFadeInSection {...fadeProps}>{children}</ScrollFadeInSection>;
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='my-container'>
      <NavbarSection />

      <SectionWithSkeleton loading={loading} Skeleton={HeroSectionSkeleton}>
        <HeroSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={TrustedCompaniesSkeleton}>
        <TrustedCompaniesSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={FounderSectionSkeleton}>
        <FounderSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={AchievementsSectionSkeleton}>
        <AchievementsSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={HeroServicesSectionSkeleton}>
        <HeroServicesSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={TestimonialBannerSectionSkeleton}>
        <TestimonialBannerSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={TestimonialCardSkeleton}>
        <TestimonialCard />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={StatCardsSkeleton}>
        <StatCards />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={BlogSectionSkeleton}>
        <BlogSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={BlogCardsSkeleton}>
        <BlogCards />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={ProjectDiscussionSectionSkeleton}>
        <ProjectDiscussionSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={ContactSectionSkeleton}>
        <ContactSection />
      </SectionWithSkeleton>

      <SectionWithSkeleton loading={loading} Skeleton={FooterSectionSkeleton}>
        <FooterSection />
      </SectionWithSkeleton>
    </div>
  );
}

export default App;
