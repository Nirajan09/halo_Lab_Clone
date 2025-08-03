import  { useMemo } from "react";
import SectionRenderer from "./SectionRenderer";

import HeroSection from '../../features/hero/HeroSection'
import HeroSectionSkeleton from '../../features/hero/HeroSectionSkeleton'
import TrustedCompaniesSection from '../../features/trusted-companies/TrustedCompaniesSection'
import TrustedCompaniesSkeleton from '../../features/trusted-companies/TrustedCompaniesSkeleton'
import FounderSection from '../../features/founder/FounderSection'
import FounderSectionSkeleton from '../../features/founder/FounderSectionSkeleton'
import AchievementsSection from '../../features/achievements/AchievementsSection'
import AchievementsSectionSkeleton from '../../features/achievements/AchievementSectionSkeleton'
import HeroServicesSection from '../../features/hero/HeroServicesSection'
import HeroServicesSectionSkeleton from '../../features/hero/HeroServicesSkeleton'
import TestimonialBannerSection from '../../features/testimonial/TestimonialBannerSection'
import TestimonialBannerSectionSkeleton from '../../features/testimonial/TestimonialBannerSkeleton'
import TestimonialCard from '../../features/testimonial/TestimonialCard'
import TestimonialCardSkeleton from '../../features/testimonial/TestimonialCardsSkeleton'
import StatCards from '../../features/stats/StatCards'
import StatCardsSkeleton from '../../features/stats/StatCardsSkeleton'
import BlogSection from '../../features/blog/BlogSection'
import BlogSectionSkeleton from '../../features/blog/BlogSectionSkeleton'
import BlogCards from '../../features/blog/BlogCards'
import BlogCardsSkeleton from '../../features/blog/BlogCardsSkeleton'
import ProjectDiscussionSection from '../../features/project-discussion/ProjectDiscussionSection'
import ProjectDiscussionSectionSkeleton from '../../features/project-discussion/ProjectDiscussionSkeleton'
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
