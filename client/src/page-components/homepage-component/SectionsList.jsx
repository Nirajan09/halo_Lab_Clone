import  { useMemo } from "react";
import SectionRenderer from "./SectionRenderer";

import HeroSection from '../../components/hero-section/HeroSection'
import HeroSectionSkeleton from '../../components/hero-section/HeroSectionSkeleton'
import TrustedCompaniesSection from '../../components/trusted-companies/TrustedCompaniesSection'
import TrustedCompaniesSkeleton from '../../components/trusted-companies/TrustedCompaniesSkeleton'
import FounderSection from '../../features/footer/FounderSection'
import FounderSectionSkeleton from '../../features/footer/FounderSectionSkeleton'
import AchievementsSection from '../../components/achivement-section/AchievementsSection'
import AchievementsSectionSkeleton from '../../components/achivement-section/AchievementSectionSkeleton'
import HeroServicesSection from '../../components/hero-services/HeroServicesSection'
import HeroServicesSectionSkeleton from '../../components/hero-services/HeroServicesSkeleton'
import TestimonialBannerSection from '../../features/testimonial/TestimonialBannerSection'
import TestimonialBannerSectionSkeleton from '../../features/testimonial/TestimonialBannerSkeleton'
import TestimonialCard from '../../features/testimonial/TestimonialCard'
import TestimonialCardSkeleton from '../../features/testimonial/TestimonialCardsSkeleton'
import StatCards from '../../components/stats-cards/StatCards'
import StatCardsSkeleton from '../../components/stats-cards/StatCardsSkeleton'
import BlogSection from '../../features/blog/BlogSection'
import BlogSectionSkeleton from '../../features/blog/BlogSectionSkeleton'
import BlogCards from '../../features/blog/BlogCards'
import BlogCardsSkeleton from '../../features/blog/BlogCardsSkeleton'
import ProjectDiscussionSection from '../../components/project-discussion-section/ProjectDiscussionSection'
import ProjectDiscussionSectionSkeleton from '../../components/project-discussion-section/ProjectDiscussionSkeleton'
import ContactSection from '../../features/contact/ContactSection'
import ContactSectionSkeleton from '../../features/contact/ContactSectionSkeleton'
import FooterSection from '../../features/footer/FooterSection'
import FooterSectionSkeleton from '../../features/footer/FooterSkeleton'

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

function SectionsList({ loading }) {
  const memoSections = useMemo(() => sections, []);

  return (
    <>
      {memoSections.map(({ key, component, skeleton }) => (
        <SectionRenderer key={key} loading={loading} skeleton={skeleton}>
          {component}
        </SectionRenderer>
      ))}
    </>
  );
}

export default SectionsList;
