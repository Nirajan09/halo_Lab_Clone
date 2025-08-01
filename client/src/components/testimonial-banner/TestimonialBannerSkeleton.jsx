import  { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const SKELETON_MOBILE_COUNT = 6;

const TestimonialBannerSectionSkeleton = () => (
  <section className="section" aria-label="Testimonials and reviews">
    {/* Clutch badge and headline skeleton */}
    <div className="max-w-2xl mx-auto flex flex-col items-start sm:items-center">
      <div className="flex items-center justify-between gap-3 mb-5 border border-white rounded-3xl px-5 py-3">
        <Suspense fallback={<div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse" />}>
          <LazyAvatar src="" alt="" className="w-10 h-10 bg-gray-700 animate-pulse rounded-full" aria-hidden="true" />
        </Suspense>
        <div className="bg-[#221d3a] px-10 py-3 rounded-full text-xs font-bold tracking-wide w-32 h-6 animate-pulse" />
      </div>
      {/* Headline skeleton */}
      <div className="h-8 w-4/5 rounded bg-gray-600 animate-pulse mb-2" />
      <div className="h-7 w-2/3 rounded bg-gray-700 animate-pulse" />
    </div>

    {/* Banner grid area */}
    <div className="mt-10 grid gap-10 overflow-x-auto lg:overflow-hidden">
      <div className="flex gap-8 animate-banner-scroll" style={{ width: `432px` }}>
        {/* Desktop: author image & rating panel skeleton */}
        <div className="rounded-2xl p-7 w-[400px] flex-shrink-0 overflow-hidden h-[60vh] flex-col shadow-lg hidden lg:flex xl:mr-71 relative" aria-label="Clutch rating summary">
          <div className="h-[70vh]">
            <Suspense fallback={<div className="w-full h-full bg-gray-700 rounded-xl animate-pulse" />}>
              <LazyAvatar src="" alt="" className="w-full h-full object-cover bg-gray-700 rounded-xl animate-pulse" aria-hidden="true" />
            </Suspense>
          </div>
          <div className="text-white absolute left-6 bottom-8 w-60">
            <div className="text-[56px] font-normal h-14 w-16 bg-gray-900/70 rounded animate-pulse mb-4" />
            <div className="h-12 w-48 bg-gray-700 rounded animate-pulse mb-4" />
            <div className="h-5 w-24 bg-gray-700 rounded mb-5 animate-pulse" />
            <div className="flex justify-start gap-6 mt-8">
              <div className="rounded-full p-4 border border-white bg-gray-700 animate-pulse w-12 h-12" />
              <div className="rounded-full p-4 border border-white bg-gray-700 animate-pulse w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Desktop testimonial skeleton */}
        <div className="hidden lg:flex bg-[#3719CA] rounded-2xl p-7 w-[400px] flex-shrink-0 h-[60vh] flex-col shadow-lg lg:mr-20 xl:mr-40">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-10 bg-yellow-200/60 rounded animate-pulse" />
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Suspense key={i} fallback={<div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />}>
                  <LazyAvatar src="" alt="" className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" aria-hidden="true" />
                </Suspense>
              ))}
            </div>
          </div>
          <div className="h-6 w-72 bg-gray-400 rounded animate-pulse mb-3" />
          <div className="h-6 w-64 bg-gray-400 rounded animate-pulse mb-3" />
          <div className="h-6 w-40 bg-gray-300 rounded animate-pulse mb-6" />
          <div className="flex items-center gap-3 mt-auto pt-2">
            <Suspense fallback={<div className="w-10 h-10 rounded-full bg-[#322570] animate-pulse" />}>
              <LazyAvatar src="" alt="" className="w-10 h-10 rounded-full object-cover border-2 border-[#322570] bg-[#322570] animate-pulse" aria-hidden="true" />
            </Suspense>
            <div>
              <div className="h-4 w-28 bg-gray-500 rounded animate-pulse mb-2" />
              <div className="h-3 w-16 bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Mobile testimonials skeleton */}
        {Array.from({ length: SKELETON_MOBILE_COUNT }).map((_, idx) => (
          <div
            key={idx}
            className="lg:hidden bg-[#3719CA] rounded-2xl p-7 w-[400px] flex-shrink-0 h-[60vh] flex flex-col shadow-lg"
            aria-label="Testimonial loading skeleton"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-10 bg-yellow-200/60 rounded animate-pulse" />
              <div className="flex gap-2">
                {[...Array(5)].map((_, j) => (
                  <Suspense key={j} fallback={<div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />}>
                    <LazyAvatar src="" alt="" className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" aria-hidden="true" />
                  </Suspense>
                ))}
              </div>
            </div>
            <div className="h-6 w-72 bg-gray-400 rounded animate-pulse mb-3" />
            <div className="h-6 w-64 bg-gray-400 rounded animate-pulse mb-3" />
            <div className="h-6 w-40 bg-gray-300 rounded animate-pulse mb-6" />
            <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#322570]">
              <Suspense fallback={<div className="w-10 h-10 rounded-full bg-[#322570] animate-pulse" />}>
                <LazyAvatar src="" alt="" className="w-10 h-10 rounded-full object-cover border-2 border-[#322570] bg-[#322570] animate-pulse" aria-hidden="true" />
              </Suspense>
              <div>
                <div className="h-4 w-28 bg-gray-500 rounded animate-pulse mb-2" />
                <div className="h-3 w-16 bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialBannerSectionSkeleton;
