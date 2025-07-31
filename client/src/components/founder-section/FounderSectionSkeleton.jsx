import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const FounderSectionSkeleton = () => (
  <section
    className="section max-h-[350px] flex flex-col md:flex-row-reverse items-start md:items-stretch justify-between rounded-xl mx-auto"
    aria-labelledby="founder-section-heading"
  >
    {/* Visually hidden heading for a11y/semantics */}
    <h2 id="founder-section-heading" className="sr-only">
      Founders of Halo Lab Overview
    </h2>

    {/* Text skeleton */}
    <div className="md:w-[60%] flex flex-col gap-5">
      <div className="w-full h-8 bg-gray-700 rounded my-2 animate-pulse" />
      <div className="w-[80%] h-8 bg-gray-700 rounded my-2 animate-pulse" />
      <div className="w-[60%] h-8 bg-gray-800 rounded my-2 animate-pulse" />
    </div>

    {/* Image + label skeleton */}
    <div className="flex gap-4 mt-3 items-center md:items-start md:w-1/4 md:flex-col">
      <div className="mb-2">
        <Suspense
          fallback={
            <div className="w-[158px] h-[64px] bg-gray-700 rounded-lg animate-pulse" />
          }
        >
          <LazyAvatar
            src=""
            alt=""
            className="rounded-lg shadow w-[158px] h-[64px] object-cover bg-gray-700 animate-pulse"
            draggable={false}
            aria-hidden="true"
          />
        </Suspense>
      </div>
      <div className="text-xs text-gray-500 text-center md:text-left mt-2 sm:text-xl rounded h-8 w-32 bg-gray-800 animate-pulse" />
    </div>
  </section>
);

export default FounderSectionSkeleton;
