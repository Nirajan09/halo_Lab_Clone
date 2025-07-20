import React from "react";

const AwardIconSkeleton = () => (
  <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse mx-auto" />
);

const ProjectDiscussionSectionSkeleton = () => (
  <div className="section lg:h-screen h-1/2 bg-gradient-to-br from-[#5a59b7] to-[#9164e6] rounded-[3rem] md:rounded-[5rem] p-6 md:p-12 flex flex-col items-center justify-center">
    {/* Main Card Skeleton */}
    <div className="bg-white rounded-[2.5rem] rounded-tr-[4rem] p-8 md:p-16 w-full max-w-4xl flex flex-col items-center shadow-lg mb-12">
      <div className="h-12 w-3/4 bg-gray-200 rounded mb-6 animate-pulse" />
      <div className="h-6 w-2/3 bg-gray-100 rounded mb-6 animate-pulse" />
      <div className="h-12 w-40 bg-[#c7bdfd] rounded-full animate-pulse mt-3" />
    </div>
    {/* Awards Grid Skeleton */}
    <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center mb-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="flex flex-col items-center gap-4">
          <AwardIconSkeleton />
          <div className="h-4 w-28 bg-gray-300 rounded opacity-60 animate-pulse mx-auto mb-1" />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectDiscussionSectionSkeleton;
