import { lazy, Suspense, memo } from "react";

// DRY: static LazyAvatar import path for sharing across app
const LazyAvatar = lazy(() => import("../lazyloading-utils/LazyAvatar"));

const FOUNDER_IMAGE =
  "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c90175fe3bf5e15444ddcf_ava-founders.avif";

const FounderSection = () => (
  <section
    className="section max-h-[350px] flex flex-col md:flex-row-reverse items-start md:items-stretch justify-between rounded-xl mx-auto"
    aria-labelledby="founder-section-heading"
  >
    {/* Visually hidden heading for a11y/semantics */}
    <h2 id="founder-section-heading" className="sr-only">
      Founders of Halo Lab Overview
    </h2>

    {/* Text */}
    <div className="md:w-[60%]">
      <p className="text-white text-justify text-2xl lg:text-4xl font-medium leading-snug">
        Over the past 12 years, we&apos;ve perfected our Design &amp; Development game and are eager to help passionate Founders perfect theirs.
        Success is a team play, right? Let&apos;s aim for the top together!
      </p>
    </div>

    {/* Image + label */}
    <div className="flex gap-4 mt-3 items-center md:items-start md:w-1/4 md:flex-col">
      <div className="mb-2">
        <Suspense
          fallback={
            <div className="w-[158px] h-[64px] bg-gray-700 rounded-lg animate-pulse" />
          }
        >
          <LazyAvatar
            src={FOUNDER_IMAGE}
            alt="Founders of Halo Lab"
            className="rounded-lg shadow w-[158px] h-[64px] object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </Suspense>
      </div>
      <div
        className="text-xs text-gray-300 text-center md:text-left mt-2 sm:text-xl hover:underline transition-all cursor-pointer select-none"
        tabIndex={0}
        aria-label="Founders of Halo Lab"
      >
        FOUNDERS<br />OF HALO LAB
      </div>
    </div>
  </section>
);

export default memo(FounderSection);
