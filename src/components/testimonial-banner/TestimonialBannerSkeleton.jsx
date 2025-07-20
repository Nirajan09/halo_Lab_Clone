import React from "react";

const StarSkeleton = () => (
  <div className="w-4 h-4 bg-gray-600 rounded-full animate-pulse" />
);

const AvatarSkeleton = ({ className = "" }) => (
  <div className={`w-10 h-10 rounded-full bg-gray-700 animate-pulse ${className}`}/>
);

const DesktopTestimonialCardSkeleton = () => (
  <div className="hidden lg:flex bg-[#3719CA] rounded-2xl p-7 w-[400px] flex-shrink-0 h-[40vh] lg:h-[60vh] flex-col shadow-lg lg:mr-20 xl:mr-40">
    <div className="flex items-center gap-2 mb-2">
      <span className="h-6 w-8 bg-yellow-300 rounded animate-pulse" />
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => <StarSkeleton key={i} />)}
      </div>
    </div>
    <div className="bg-gray-500/60 rounded h-12 w-3/4 mb-3 animate-pulse" />
    <div className="bg-gray-600/60 rounded h-8 w-2/3 mb-4 animate-pulse" />
    <div className="mt-auto pt-2 flex gap-3">
      <AvatarSkeleton />
      <div className="flex flex-col justify-center">
        <span className="block w-24 h-4 bg-gray-600 rounded animate-pulse mb-1" />
        <span className="block w-32 h-3 bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

const MobileTestimonialCardSkeleton = () => (
  <div className="lg:hidden bg-[#3719CA] rounded-2xl p-7 w-[400px] flex-shrink-0 h-[40vh] sm:h-[60vh] flex flex-col shadow-lg">
    <div className="flex items-center gap-2 mb-2">
      <span className="h-6 w-8 bg-yellow-300 rounded animate-pulse" />
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => <StarSkeleton key={i} />)}
      </div>
    </div>
    <div className="bg-gray-500/60 rounded h-12 w-3/4 mb-3 animate-pulse" />
    <div className="bg-gray-600/60 rounded h-8 w-2/3 mb-4 animate-pulse" />
    <div className="mt-auto pt-2 flex gap-3 border-t border-[#322570]">
      <AvatarSkeleton />
      <div className="flex flex-col justify-center">
        <span className="block w-24 h-4 bg-gray-600 rounded animate-pulse mb-1" />
        <span className="block w-32 h-3 bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

const TestimonialBannerSectionSkeleton = () => (
  <section className="section">
    {/* Clutch badge + headline skeleton */}
    <div className="max-w-2xl mx-auto flex flex-col items-start sm:items-center">
      <div className="flex items-center justify-between gap-3 mb-5 border border-white rounded-3xl px-5 py-3">
        <AvatarSkeleton className="w-10 h-10" />
        <div className="bg-[#221d3a] px-8 py-2 rounded-full w-36 h-7 animate-pulse" />
      </div>
      <div className="h-8 w-5/6 md:w-4/5 bg-gray-700 rounded-lg animate-pulse mb-2"/>
      <div className="h-6 w-3/4 md:w-1/2 bg-gray-700 rounded-lg animate-pulse mb-1"/>
    </div>

    {/* Testimonial cards area */}
    <div className="mt-10 grid gap-10 overflow-x-auto lg:overflow-hidden">
      <div className="flex gap-8" style={{ width: `432px` }}>
        {/* Desktop left panel (author image & buttons skeleton) */}
        <div className="rounded-2xl p-7 w-[400px] flex-shrink-0 overflow-hidden h-[60vh] flex-col shadow-lg hidden lg:flex xl:mr-71 relative">
          {/* Main author image skeleton */}
          <div className="h-[70vh] flex items-center justify-center">
            <div className="w-full h-full bg-gray-800/70 rounded-xl animate-pulse" />
          </div>
          <div className="text-white absolute top-0 left-0 right-0 flex flex-col items-start">
            <div className="h-16 w-24 bg-gray-700 rounded mb-7 mt-12 animate-pulse" />
            <div className="h-6 w-36 bg-gray-700 rounded mb-5 animate-pulse" />
            <div className="flex gap-4 mt-12">
              <div className="h-8 w-8 rounded-full border border-white animate-pulse bg-gray-500" />
              <div className="h-8 w-8 rounded-full border border-white animate-pulse bg-gray-500" />
            </div>
          </div>
        </div>

        {/* Several sliding testimonial cards, both desktop and mobile */}
        {Array.from({ length: 2 }).map((_, i) => (
          <React.Fragment key={i}>
            <DesktopTestimonialCardSkeleton />
            <MobileTestimonialCardSkeleton />
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialBannerSectionSkeleton;
