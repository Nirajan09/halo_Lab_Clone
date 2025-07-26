import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

// Number of visible award cards (matches your real array)
const AWARD_COUNT = 4;

const ProjectDiscussionSectionSkeleton = () => (
  <section
    className="
      section 
      lg:h-screen h-1/2 
      bg-gradient-to-br from-[#5a59b7] to-[#9164e6] 
      rounded-[3rem] md:rounded-[5rem] 
      p-6 md:p-12 
      flex flex-col items-center justify-center
    "
    aria-labelledby="project-discuss-heading"
  >
    <article className="bg-white rounded-[2.5rem] rounded-tr-[4rem] p-8 md:p-16 w-full max-w-4xl flex flex-col items-center shadow-lg mb-12">
      <h2
        id="project-discuss-heading"
        className="text-[#15122E] text-3xl md:text-5xl lg:text-[50px] font-medium text-center mb-6"
      >
        <div className="mx-auto mb-2 h-10 w-5/6 rounded bg-gray-200 animate-pulse" />
        <div className="mx-auto mb-2 h-10 w-3/4 rounded bg-gray-200 animate-pulse" />
      </h2>
      <div className="text-[#15122E] opacity-80 text-base md:text-xl text-center mb-8 max-w-2xl leading-relaxed">
        <div className="h-6 w-3/4 mx-auto rounded bg-gray-100 animate-pulse mb-2" />
        <div className="h-6 w-2/3 mx-auto rounded bg-gray-100 animate-pulse mb-2" />
        <div className="h-6 w-1/2 mx-auto rounded bg-gray-100 animate-pulse" />
      </div>
      <div className="h-12 w-52 bg-[#e6e1f7] rounded-full animate-pulse my-4" />
    </article>
    {/* Awards Grid Skeleton */}
    <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center mb-4">
      {Array.from({ length: AWARD_COUNT }).map((_, idx) => (
        <div key={idx} className="flex flex-col items-center gap-4">
          <Suspense
            fallback={
              <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
            }
          >
            <LazyAvatar
              src=""
              alt=""
              className="w-16 h-16 rounded-full bg-gray-200 animate-pulse"
              aria-hidden="true"
            />
          </Suspense>
          <div className="h-5 w-24 md:w-28 rounded bg-gray-200 animate-pulse mx-auto" />
        </div>
      ))}
    </div>
  </section>
);

export default ProjectDiscussionSectionSkeleton;
