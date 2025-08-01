import  { useMemo } from "react";
import SectionRenderer from "./SectionRenderer";

import HeroSection from '../hero-section/HeroSection'
import HeroSectionSkeleton from '../hero-section/HeroSectionSkeleton'
import TrustedCompaniesSection from '../trusted-companies/TrustedCompaniesSection'
import TrustedCompaniesSkeleton from '../trusted-companies/TrustedCompaniesSkeleton'
import FounderSection from '../founder-section/FounderSection'
import FounderSectionSkeleton from '../founder-section/FounderSectionSkeleton'
import AchievementsSection from '../achivement-section/AchievementsSection'
import AchievementsSectionSkeleton from '../achivement-section/AchievementSectionSkeleton'
import HeroServicesSection from '../hero-services/HeroServicesSection'
import HeroServicesSectionSkeleton from '../hero-services/HeroServicesSkeleton'
import TestimonialBannerSection from '../testimonial-banner/TestimonialBannerSection'
import TestimonialBannerSectionSkeleton from '../testimonial-banner/TestimonialBannerSkeleton'
import TestimonialCard from '../testimonial-cards/TestimonialCard'
import TestimonialCardSkeleton from '../testimonial-cards/TestimonialCardsSkeleton'
import StatCards from '../stats-cards/StatCards'
import StatCardsSkeleton from '../stats-cards/StatCardsSkeleton'
import BlogSection from '../blog-section/BlogSection'
import BlogSectionSkeleton from '../blog-section/BlogSectionSkeleton'
import BlogCards from '../blog-cards/BlogCards'
import BlogCardsSkeleton from '../blog-cards/BlogCardsSkeleton'
import ProjectDiscussionSection from '../project-discussion-section/ProjectDiscussionSection'
import ProjectDiscussionSectionSkeleton from '../project-discussion-section/ProjectDiscussionSkeleton'
import ContactSection from '../contact-section/ContactSection'
import ContactSectionSkeleton from '../contact-section/ContactSectionSkeleton'
import FooterSection from '../footer-section/FooterSection'
import FooterSectionSkeleton from '../footer-section/FooterSkeleton'

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
