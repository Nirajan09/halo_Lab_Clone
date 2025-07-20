import React, { lazy, Suspense } from 'react';

const DribbbleAward = lazy(() => import('../lazyloading-utils/achievement-section/DribbleAward'));
const ClutchAward = lazy(() => import('../lazyloading-utils/achievement-section/ClutchAward'));
const GoodFirmsAward = lazy(() => import('../lazyloading-utils/achievement-section/GoodFirmsAward'));
const UpworkAward = lazy(() => import('../lazyloading-utils/achievement-section/UpworkAward'));

const achievements = [
  {
    Img: DribbbleAward,
    title: "Top Team in the world on Dribbble",
    key: "dribbble"
  },
  {
    Img: ClutchAward,
    title: "Top 100 Global Service Providers by Clutch",
    key: "clutch"
  },
  {
    Img: GoodFirmsAward,
    title: "5 Stars Rating on GoodFirms",
    key: "goodfirms"
  },
  {
    Img: UpworkAward,
    title: "100% Job Success on Upwork",
    key: "upwork"
  },
];

const repeatedAchievements = [
  ...achievements,
  ...achievements,
  ...achievements,
  ...achievements,
];

const SCROLL_DURATION = 30; // seconds

const AchievementsSection = () => (
  <div className="section md:px-10 rounded-xl mx-auto overflow-x-hidden">
    <div
      className="flex gap-8 min-w-max animate-achievements-marquee"
      style={{
        animation: `achievements-marquee ${SCROLL_DURATION}s linear infinite`
      }}
    >
      {repeatedAchievements.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center text-center bg-[#13143a] rounded-full w-42 h-42 sm:w-52 sm:h-52 lg:w-[290px] lg:h-[290px] mx-auto shadow-md"
        >
          <Suspense fallback={
            <div className="bg-gray-700 rounded-full w-20 h-20 animate-pulse" />
          }>
            <item.Img className="w-20 h-20 object-contain" />
          </Suspense>
          <span className="text-white text-sm sm:text-base lg:text-lg font-semibold px-4 mb-4">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default AchievementsSection;
