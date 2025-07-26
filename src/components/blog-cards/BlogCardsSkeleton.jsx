import{ lazy, Suspense } from "react";

// Use the same lazy-loaded avatar for consistency
const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

// How many skeleton cards to render
const SKELETON_COUNT = 2; 

const BlogCardItemSkeleton = () => (
  <div
    className={`
      bg-[#3827C8] rounded-[2rem] pt-12 pb-10 px-10 relative min-h-[400px]
      flex flex-col justify-end shadow-lg
    `}
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="absolute left-1/2 -translate-x-1/2 top-8">
      <Suspense
        fallback={
          <div className="w-20 h-20 bg-gray-300 rounded-lg animate-pulse" />
        }
      >
        <LazyAvatar
          src="" // Blank skeleton image
          alt=""
          className="w-20 h-20 bg-gray-300 rounded-lg animate-pulse"
          draggable={false}
          aria-hidden="true"
        />
      </Suspense>
    </div>
    <div className="mt-32 w-full">
      {/* Title skeleton */}
      <div className="h-7 w-4/5 bg-gray-500 rounded my-2 animate-pulse" />
      {/* Category skeleton */}
      <div className="h-4 w-1/3 bg-gray-600 rounded my-2 animate-pulse" />
    </div>
  </div>
);

const BlogCardsSkeleton = () => (
  <section className="bg-[#080827] section flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
      {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
        <BlogCardItemSkeleton key={i} />
      ))}
    </div>
  </section>
);

export default BlogCardsSkeleton;
