import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const HeroSectionSkeleton = () => (
  <section
    className="
      mt-6
      grid grid-cols-1 md:grid-cols-2 gap-6
      w-full
      min-h-[80vh] md:min-h-[60vh]
    "
    aria-labelledby="hero-title"
  >
    {/* Left Section */}
    <article
      className="
        flex flex-col justify-between 
        bg-[#3827C8] rounded-3xl 
        p-6 sm:p-10 xl:p-16 w-full text-white
        transition duration-200 shadow-sm group
        min-h-[360px]
      "
    >
      <h1
        id="hero-title"
        className="
          text-center md:text-left
          text-4xl md:text-3xl lg:text-5xl 
          font-normal leading-[1.15] mb-8
        "
      >
        <div className="h-8 w-3/4 rounded bg-gray-500 animate-pulse mx-auto md:mx-0 mb-2" />
        <div className="h-8 w-2/3 rounded bg-gray-500 animate-pulse mx-auto md:mx-0 mb-2" />
        <div className="h-8 w-2/3 rounded bg-gray-600 animate-pulse mx-auto md:mx-0 mb-2" />
        <div className="inline-block h-8 w-36 rounded bg-yellow-300/60 animate-pulse mx-auto md:mx-0 mt-2" />
      </h1>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center text-base gap-4 mb-4">
          <Suspense
            fallback={
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-400 animate-pulse" />
            }
          >
            <LazyAvatar
              src=""
              alt=""
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full bg-gray-400 animate-pulse"
              width={48}
              height={48}
              aria-hidden="true"
              draggable={false}
            />
          </Suspense>
          <div className="h-6 w-52 sm:w-64 bg-gray-600 rounded animate-pulse" />
        </div>
        <div className="h-11 w-40 bg-yellow-200/80 rounded-full animate-pulse mt-2" />
      </div>
    </article>

    {/* Right Section */}
    <aside
      className="
        flex items-center justify-center
        bg-[#ffd23f] rounded-3xl w-full p-4 sm:p-6
        transition duration-200 shadow-sm group
        min-h-[360px]
      "
      aria-label="Showreel video"
    >
      <div
        className="
          relative rounded-full mx-auto bg-[#f5f3f0]
          flex items-center justify-center shadow-lg
          w-[90vw] max-w-[360px] sm:max-w-[420px] md:max-w-[380px] xl:max-w-[500px]
          aspect-square
        "
      >
        {/* Video skeleton (circular placeholder) */}
        <div className="w-full h-full rounded-full bg-gray-200 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            role="img"
            aria-label="Play icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            width="48"
            height="48"
            className="text-yellow-300/70 opacity-90"
          >
            <path d="M13.9 7.35a.7.7 0 0 1 0 1.213l-8.4 4.85a.7.7 0 0 1-1.05-.606v-9.7a.7.7 0 0 1 1.05-.606l8.4 4.85Z" />
          </svg>
        </div>
      </div>
    </aside>
  </section>
);

export default HeroSectionSkeleton;
