// src/sections/HeroServicesSectionSkeleton.jsx
import React, { lazy, Suspense } from "react";

// For CTA avatar skeleton, ensure consistency
const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const LIST_LINES = 5;

function ServicesListSkeleton() {
  return (
    <ul>
      {Array.from({ length: LIST_LINES }).map((_, i) => (
        <li
          key={i}
          className={`flex items-center justify-between py-2 w-full border-b border-[#b3b3b8] pb-1`}
          aria-hidden="true"
        >
          <div className="h-4 w-32 sm:w-40 bg-gray-300 rounded animate-pulse" />
          <div className="h-6 w-6 bg-gray-200 rounded animate-pulse ms-2" />
        </li>
      ))}
    </ul>
  );
}

const HeroServicesSectionSkeleton = () => (
  <section className="section min-h-[30vh] flex flex-col items-center justify-center" aria-labelledby="services-headline">
    {/* Headline */}
    <header className="text-center mb-12">
      <div className="mx-auto h-10 w-4/5 rounded bg-gray-500 animate-pulse mb-2" />
      <div className="mx-auto h-10 w-3/5 rounded bg-gray-500 animate-pulse mb-2" />
    </header>

    {/* Services Cards */}
    <div className="flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-6 md:p-10 w-full">
      {/* Design Card */}
      <article className="flex-1 rounded-xl px-4 py-6 shadow relative bg-[#F5F5F7]">
        <div className="flex items-center mb-4 border-b border-[#b3b3b8] w-full pb-1">
          <div className="h-6 w-20 bg-gray-400 rounded animate-pulse" />
        </div>
        <ServicesListSkeleton />
      </article>
      {/* Development Card */}
      <article className="flex-1 bg-[#F5F5F7] rounded-xl p-6 shadow relative">
        <div className="flex items-center mb-4 border-b border-[#b3b3b8] w-full pb-1">
          <div className="h-6 w-36 bg-gray-400 rounded animate-pulse" />
        </div>
        <ServicesListSkeleton />
      </article>
    </div>

    {/* Call to Action */}
    <div
      className="
        flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-[#231B41]
        px-6 py-4 w-full mx-auto mt-8 shadow-md
      "
    >
      <div className="flex items-center gap-6 mb-4 sm:mb-0">
        <Suspense
          fallback={
            <div className="hidden sm:block w-10 h-10 rounded-full bg-gray-600 animate-pulse" />
          }
        >
          <LazyAvatar
            src=""
            alt=""
            className="hidden sm:block w-10 h-10 rounded-full bg-gray-600 animate-pulse"
            width={40}
            height={40}
            aria-hidden="true"
            draggable={false}
          />
        </Suspense>
        <div className="h-5 w-60 sm:w-72 bg-gray-400 rounded animate-pulse" />
      </div>
      <div className="h-11 w-36 bg-yellow-200/90 rounded-full animate-pulse ml-6" />
    </div>
  </section>
);

export default HeroServicesSectionSkeleton;
