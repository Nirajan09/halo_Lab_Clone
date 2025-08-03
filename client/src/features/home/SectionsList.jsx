import  { useMemo } from "react";
import SectionRenderer from "./SectionRenderer";

import HeroSection from '../hero/HeroSection'
import HeroSectionSkeleton from '../hero/HeroSectionSkeleton'
import TrustedCompaniesSection from '../trusted-companies/TrustedCompaniesSection'
import TrustedCompaniesSkeleton from '../trusted-companies/TrustedCompaniesSkeleton'
import FounderSection from '../founder/FounderSection'
import FounderSectionSkeleton from '../founder/FounderSectionSkeleton'
import AchievementsSection from '../achievements/AchievementsSection'
import AchievementsSectionSkeleton from '../achievements/AchievementSectionSkeleton'
import HeroServicesSection from '../hero/HeroServicesSection'
import HeroServicesSectionSkeleton from '../hero/HeroServicesSkeleton'
import TestimonialBannerSection from '../testimonial/TestimonialBannerSection'
import TestimonialBannerSectionSkeleton from '../testimonial/TestimonialBannerSkeleton'
import TestimonialCard from '../testimonial/TestimonialCard'
import TestimonialCardSkeleton from '../testimonial/TestimonialCardsSkeleton'
import StatCards from '../stats/StatCards'
import StatCardsSkeleton from '../stats/StatCardsSkeleton'
import BlogSection from '../blog/BlogSection'
import BlogSectionSkeleton from '../blog/BlogSectionSkeleton'
import BlogCards from '../blog/BlogCards'
import BlogCardsSkeleton from '../blog/BlogCardsSkeleton'
import ProjectDiscussionSection from '../project-discussion/ProjectDiscussionSection'
import ProjectDiscussionSectionSkeleton from '../project-discussion/ProjectDiscussionSkeleton'
import ContactSection from '../contact/ContactSection'
import ContactSectionSkeleton from '../contact/ContactSectionSkeleton'
import FooterSection from '../footer/FooterSection'
import FooterSectionSkeleton from '../footer/FooterSkeleton'

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
