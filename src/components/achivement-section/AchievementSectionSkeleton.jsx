import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../lazyloading-utils/LazyAvatar"));

const AchievementCardSkeleton = () => (
  <div className="flex flex-col items-center justify-center text-center bg-[#13143a] rounded-full w-42 h-42 sm:w-52 sm:h-52 lg:w-[290px] lg:h-[290px] mx-auto shadow-md">
    <Suspense
      fallback={
        <img
          src=""
          alt=""
          className="w-20 h-20 rounded-full object-cover bg-gray-700 animate-pulse mb-3"
          draggable={false}
          aria-hidden="true"
        />
      }
    >
      <LazyAvatar
        src=""
        alt=""
        className="w-20 h-20 rounded-full object-cover bg-gray-700 animate-pulse mb-3"
        draggable={false}
        aria-hidden="true"
      />
    </Suspense>
    <div className="h-5 w-36 sm:w-48 lg:w-56 bg-gray-700 rounded my-2 animate-pulse" />
    <div className="h-4 w-28 sm:w-32 bg-gray-800 rounded my-1 animate-pulse" />
  </div>
);

const AchievementsSectionSkeleton = () => (
  <section className="section md:px-10 rounded-xl mx-auto overflow-x-hidden">
    <div className="flex gap-8 min-w-max">
      {Array.from({ length: 8 }).map((_, i) => (
        <AchievementCardSkeleton key={i} />
      ))}
    </div>
  </section>
);

export default AchievementsSectionSkeleton;
