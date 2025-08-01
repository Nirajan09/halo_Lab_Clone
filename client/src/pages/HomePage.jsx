import "../App.css"
import AchievementsSection from '../components/achivement-section'
import FounderSection from '../components/founder-section'
import HeroSection from '../components/hero-section'
import HeroServicesSection from '../components/hero-services'
import NavbarSection from '../components/header-section'
import TestimonialBannerSection from '../components/testimonial-banner'
import TrustedCompaniesSection from '../components/trusted-companies/TrustedCompaniesSection';
import StatCards from '../components/stats-cards'
import BlogSection from '../components/blog-section'
import BlogCards from '../components/blog-cards'
import ProjectDiscussionSection from '../components/project-discussion-section'
import ContactSection from '../components/contact-section'
import FooterSection from '../components/footer-section'
import TestimonialCard from '../components/testimonial-cards/TestimonialCard'
import ScrollFadeInSection from '../components/animate-utils/ScrollFadeIn'
import { useEffect, useState } from 'react'
import HeroSectionSkeleton from '../components/hero-section/HeroSectionSkeleton'
import FooterSectionSkeleton from '../components/footer-section/FooterSkeleton'
import TrustedCompaniesSkeleton from '../components/trusted-companies/TrustedCompaniesSkeleton'
import FounderSectionSkeleton from '../components/founder-section/FounderSectionSkeleton'
import AchievementsSectionSkeleton from '../components/achivement-section/AchievementSectionSkeleton'
import HeroServicesSectionSkeleton from '../components/hero-services/HeroServicesSkeleton'
import TestimonialBannerSectionSkeleton from '../components/testimonial-banner/TestimonialBannerSkeleton'
import TestimonialCardSkeleton from '../components/testimonial-cards/TestimonialCardsSkeleton'
import StatCardsSkeleton from '../components/stats-cards/StatCardsSkeleton'
import BlogSectionSkeleton from '../components/blog-section/BlogSectionSkeleton'
import ProjectDiscussionSectionSkeleton from '../components/project-discussion-section/ProjectDiscussionSkeleton'
import ContactSectionSkeleton from '../components/contact-section/ContactSectionSkeleton'
import BlogCardsSkeleton from '../components/blog-cards/BlogCardsSkeleton'

function SectionWithSkeleton({ loading, skeleton: Skeleton, children, ...fadeProps }) {
  const SkeletonComponent = Skeleton;
  return loading
    ? <SkeletonComponent />
    : <ScrollFadeInSection {...fadeProps}>{children}</ScrollFadeInSection>;
}

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 120);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
  {
    key: 'hero',
    component: <HeroSection />,
    skeleton: HeroSectionSkeleton,
  },
  {
    key: 'trusted-companies',
    component: <TrustedCompaniesSection />,
    skeleton: TrustedCompaniesSkeleton,
  },
  {
    key: 'founder',
    component: <FounderSection />,
    skeleton: FounderSectionSkeleton,
  },
  {
    key: 'achievements',
    component: <AchievementsSection />,
    skeleton: AchievementsSectionSkeleton,
  },
  {
    key: 'services',
    component: <HeroServicesSection />,
    skeleton: HeroServicesSectionSkeleton,
  },
  {
    key: 'testimonial-banner',
    component: <TestimonialBannerSection />,
    skeleton: TestimonialBannerSectionSkeleton,
  },
  {
    key: 'testimonial-card',
    component: <TestimonialCard />,
    skeleton: TestimonialCardSkeleton,
  },
  {
    key: 'stats',
    component: <StatCards />,
    skeleton: StatCardsSkeleton,
  },
  {
    key: 'blog-section',
    component: <BlogSection />,
    skeleton: BlogSectionSkeleton,
  },
  {
    key: 'blog-cards',
    component: <BlogCards />,
    skeleton: BlogCardsSkeleton,
  },
  {
    key: 'project-discussion',
    component: <ProjectDiscussionSection />,
    skeleton: ProjectDiscussionSectionSkeleton,
  },
  {
    key: 'contact',
    component: <ContactSection />,
    skeleton: ContactSectionSkeleton,
  },
  {
    key: 'footer',
    component: <FooterSection />,
    skeleton: FooterSectionSkeleton,
  },
];

  return (
    <div className='my-container'>
      <NavbarSection/>
      {sections.map(({ key, component, skeleton }) => (
          <SectionWithSkeleton
          key={key}
          loading={loading}
          skeleton={skeleton}
          >
          {component}
        </SectionWithSkeleton>
      ))}
      </div>
  );
}

export default Home;



