import React, { lazy, Suspense } from "react";

const FounderImage = lazy(() => import("../lazyloading-utils/founder-section/FounderSection"));

const FounderSection = () => (
  <section className="section max-h-[350px] flex flex-col md:flex-row-reverse items-start md:items-stretch justify-between rounded-xl mx-auto">
    {/* Text Section */}
    <div className="md:w-[60%]">
      <p className="text-white text-justify text-2xl lg:text-4xl font-medium leading-snug">
        Over the past 12 years, we&apos;ve perfected our Design &amp; Development game and are eager to help passionate Founders perfect theirs.
        Success is a team play, right? Let&apos;s aim for the top together!
      </p>
    </div>
    {/* Image + Caption Section */}
    <div className="flex gap-4 mt-3 items-center md:items-start md:w-1/4 md:flex-col">
      <div className="mb-2">
        <Suspense fallback={<div className="w-[158px] h-[64px] bg-gray-700 rounded-lg animate-pulse" />}>
          <FounderImage className="rounded-lg shadow" />
        </Suspense>
      </div>
      <div className="text-xs text-gray-300 text-center md:text-left mt-2 sm:text-xl hover:underline transition-all cursor-pointer">
        FOUNDERS<br />OF HALO LAB
      </div>
    </div>
  </section>
);

export default FounderSection;
