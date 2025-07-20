import React from "react";

// One skeleton card, matching your real card shape/sizes
const BlogCardSkeleton = () => (
  <div
    className="
      bg-[#3827C8] rounded-[2rem] pt-12 pb-10 px-10 relative min-h-[400px]
      flex flex-col justify-end shadow-lg
      animate-pulse
    "
  >
    {/* Image skeleton */}
    <div className="absolute left-1/2 -translate-x-1/2 top-8">
      <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-600 rounded-xl" />
    </div>
    <div className="mt-32">
      <div className="h-7 w-5/6 bg-gray-300 rounded mb-4" />
      <div className="h-4 w-2/5 bg-gray-400 rounded mb-2" />
    </div>
  </div>
);

const BlogCardsSkeleton = () => (
  <div className="bg-[#080827] section flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
      {Array.from({ length: 2 }).map((_, idx) => (
        <BlogCardSkeleton key={idx} />
      ))}
    </div>
  </div>
);

export default BlogCardsSkeleton;
