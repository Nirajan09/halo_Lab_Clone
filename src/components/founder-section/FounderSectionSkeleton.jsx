import React from "react";

const FounderSectionSkeleton = () => (
  <div className="section max-h-[350px] flex flex-col md:flex-row-reverse items-start md:items-stretch justify-between rounded-xl mx-auto">
    {/* Text Section Skeleton */}
    <div className="md:w-[60%] flex flex-col justify-center">
      {/* Big lines for the paragraph */}
      <div className="space-y-3">
        <div className="h-7 w-5/6 bg-gray-700 rounded animate-pulse" />
        <div className="h-7 w-4/5 bg-gray-700 rounded animate-pulse" />
        <div className="h-7 w-3/4 bg-gray-700 rounded animate-pulse" />
        <div className="h-7 w-2/3 bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
    {/* Image + Caption Skeleton */}
    <div className="flex gap-4 mt-3 items-center md:items-start md:w-1/4 md:flex-col">
      <div className="mb-2">
        <div className="w-[158px] h-[64px] bg-gray-700 rounded-lg animate-pulse" />
      </div>
      <div className="w-28 h-4 bg-gray-600 rounded mx-auto md:mx-0 mt-2 animate-pulse" />
    </div>
  </div>
);

export default FounderSectionSkeleton;
