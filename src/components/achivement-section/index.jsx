import { lazy, Suspense, memo } from 'react';

// Lazy-loaded avatar component
const LazyAvatar = lazy(() => import('../lazyloading-utils/LazyAvatar'));

const achievements = [
  {
    avatarSrc: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245169d0dbda30cc38c_award-clutch.svg",
    title: "Top Team in the world on Dribbble",
    key: "dribbble",
  },
  {
    avatarSrc: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df22453a88d0237804696b_award-dribbble.svg",
    title: "Top 100 Global Service Providers by Clutch",
    key: "clutch",
  },
  {
    avatarSrc: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245d0569f8fce1a81c6_award-5stars.svg",
    title: "5 Stars Rating on GoodFirms",
    key: "goodfirms",
  },
  {
    avatarSrc: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2248b0570f11feddea87_award-upwork.svg",
    title: "100% Job Success on Upwork",
    key: "upwork",
  },
];

// Repeat to create marquee effect
const repeatedAchievements = Array(4).fill(achievements).flat();

const SCROLL_DURATION = 30; // seconds

// Memoized Achievements item
const AchievementItem = memo(function AchievementItem({ avatarSrc, title }) {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#13143a] rounded-full w-42 h-42 sm:w-52 sm:h-52 lg:w-[290px] lg:h-[290px] mx-auto shadow-md">
      <Suspense
        fallback={
          <div className="w-20 h-20 rounded-full bg-gray-500 animate-pulse" />
        }
      >
        <LazyAvatar
          src={avatarSrc}
          alt={title}
          className="w-20 h-20 rounded-full object-cover"
        />
      </Suspense>
      <span className="text-white text-sm sm:text-base lg:text-lg font-semibold px-4 mb-4">
        {title}
      </span>
    </div>
  );
});

function AchievementsSection() {
  return (
    <section className="section md:px-10 rounded-xl mx-auto overflow-x-hidden">
      <div
        className="flex gap-8 min-w-max animate-achievements-marquee"
        style={{
          animation: `achievements-marquee ${SCROLL_DURATION}s linear infinite`
        }}
      >
        {repeatedAchievements.map((item, idx) => (
          <AchievementItem
            avatarSrc={item.avatarSrc}
            title={item.title}
            key={`${item.key}-${idx}`}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(AchievementsSection);
