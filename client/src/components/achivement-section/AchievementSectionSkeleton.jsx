import { lazy, Suspense } from 'react';

// Lazy load your reusable LazyAvatar
const LazyAvatar = lazy(() => import('../../utils/LazyAvatar'));

const CARD_COUNT = 8; 

// Skeleton for a single achievement card
const AchievementCardSkeleton = () => (
  <div
    className="flex flex-col items-center justify-center text-center bg-[#13143a] rounded-full 
    w-42 h-42 sm:w-52 sm:h-52 lg:w-[290px] lg:h-[290px] mx-auto shadow-md"
    tabIndex={-1}
    aria-hidden="true"
  >
    <Suspense
      fallback={
        // fallback div if LazyAvatar is not loaded yet
        <div className="w-20 h-20 rounded-full bg-gray-700 animate-pulse mb-3" />
      }
    >
      <LazyAvatar
        src="" // No src, this is a placeholder
        alt=""
        className="w-20 h-20 rounded-full object-cover bg-gray-700 animate-pulse mb-3"
        draggable={false}
        aria-hidden="true"
      />
    </Suspense>
    {/* Title skeleton */}
    <div className="h-5 w-36 sm:w-48 lg:w-56 bg-gray-700 rounded my-2 animate-pulse" />
  </div>
);

// Skeleton section for achievements
const AchievementsSectionSkeleton = () => (
  <section className="section md:px-10 rounded-xl mx-auto overflow-x-hidden">
    <div
      className="flex gap-8 min-w-max animate-achievements-marquee"
    >
      {Array.from({ length: CARD_COUNT }).map((_, i) => (
        <AchievementCardSkeleton key={i} />
      ))}
    </div>
  </section>
);

export default AchievementsSectionSkeleton;
