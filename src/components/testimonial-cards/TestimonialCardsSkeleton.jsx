// src/sections/TestimonialCardSkeleton.jsx
import React, { lazy, Suspense } from "react";

// Use the same LazyAvatar for all images (future-proof, matches live code)
const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

// Replace array lengths as needed to match your real cards
const SKELETON_STAR_COUNT = 5;

function TestimonialCardSkeleton() {
  return (
    <section
      className="section flex flex-col items-center"
      aria-label="Success story testimonials"
    >
      <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-10">
        <div className="h-10 w-5/6 rounded bg-gray-600 animate-pulse mx-auto mb-2" />
        <div className="h-10 w-2/3 rounded bg-yellow-100 animate-pulse mx-auto" />
      </h1>
      <div className="bg-white p-8 w-full rounded-3xl shadow-lg group relative">
        <div className="relative bg-[#F5F5F7] rounded-3xl shadow-lg flex flex-col md:flex-row w-full p-2 md:p-8">
          {/* Left arrow (just skeleton, not interactive) */}
          <div
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-4 bg-gray-200 border border-gray-300 shadow opacity-0 group-hover:opacity-100"
            style={{ pointerEvents: "none" }}
          >
            <div className="w-6 h-6 rounded-full bg-gray-400 animate-pulse" />
          </div>

          {/* Text content skeleton */}
          <div className="flex-1 p-4 flex flex-col justify-center gap-2">
            <span className="flex items-center gap-2 mb-3 uppercase">
              <div className="h-5 w-20 bg-gray-400 rounded-full animate-pulse" />
              <Suspense fallback={<div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse ml-2" />}>
                <LazyAvatar
                  src=""
                  alt=""
                  className="w-6 h-6 rounded-full ml-2 object-cover bg-gray-200 animate-pulse"
                  aria-hidden="true"
                />
              </Suspense>
            </span>
            <div className="h-8 w-3/4 bg-gray-500 rounded animate-pulse mb-2" />
            <div className="flex items-center mb-2">
              {Array.from({ length: SKELETON_STAR_COUNT }).map((_, i) => (
                <Suspense key={i} fallback={<div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />}>
                  <LazyAvatar
                    src=""
                    alt=""
                    className="w-5 h-5 object-cover bg-gray-200 animate-pulse"
                    aria-hidden="true"
                  />
                </Suspense>
              ))}
            </div>
            <div className="h-6 w-4/5 bg-gray-300 rounded animate-pulse mb-2" />
            <div className="h-6 w-3/5 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="flex items-center gap-3 mt-2">
              <Suspense fallback={<div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />}>
                <LazyAvatar
                  src=""
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-yellow-400 object-cover bg-gray-200 animate-pulse"
                  aria-hidden="true"
                />
              </Suspense>
              <div>
                <div className="h-4 w-24 bg-gray-400 rounded animate-pulse mb-2" />
                <div className="h-3 w-16 bg-gray-300 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Work image skeleton */}
          <div className="flex-1 flex items-center justify-center min-h-[150px]">
            <Suspense fallback={<div className="w-full h-56 bg-gray-200 rounded-xl animate-pulse" />}>
              <LazyAvatar
                src=""
                alt=""
                className="rounded-xl shadow-lg w-full h-56 object-cover bg-gray-200 animate-pulse"
                aria-hidden="true"
              />
            </Suspense>
          </div>

          {/* Right arrow (skeleton only) */}
          <div
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-4 bg-gray-200 border border-gray-300 shadow opacity-0 group-hover:opacity-100"
            style={{ pointerEvents: "none" }}
          >
            <div className="w-6 h-6 rounded-full bg-gray-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCardSkeleton;
