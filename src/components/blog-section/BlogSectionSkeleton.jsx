import React from "react";

const BlogSectionSkeleton = () => (
  <div className="section flex items-center justify-between w-full">
    <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 w-full items-center">
      {/* Hot Articles Badge Skeleton */}
      <div className="flex lg:block justify-center lg:justify-start mb-8 md:mb-0">
        <div
          className="
            max-w-[11rem] flex justify-center items-center bg-gray-200 rounded-full px-6 py-3 shadow-md
            animate-pulse
          "
        >
          <span className="h-5 w-24 rounded bg-gray-300" />
        </div>
      </div>

      {/* Headline Skeleton */}
      <div className="space-y-3 w-full">
        <div className="h-7 w-4/5 bg-gray-600 rounded animate-pulse" />
        <div className="h-7 w-3/5 bg-gray-600 rounded animate-pulse" />
        <div className="h-5 w-2/3 bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

export default BlogSectionSkeleton;
