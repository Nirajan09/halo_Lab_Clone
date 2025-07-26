import { lazy, Suspense, memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";

// Lazy load LazyAvatar for DRY consistency
const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const HeroSection = () => {
  // Memoize URLs for DRY consistency and future-proofing
  const fireIconUrl = useMemoizedValue(
    () =>
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67bdb3b2f4c3ff24144f7bc0_home-hero-fire.avif",
    []
  );
  const videoSrc = useMemoizedValue(
    () => "https://d3vlq52qrgdnc2.cloudfront.net/UIUX-Showreel-preview-big.mp4",
    []
  );

  return (
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
          hover:scale-[1.024] hover:shadow-xl hover:bg-[#463af7]
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
          DESIGN &amp; TECH<br />
          AGENCY HELPING<br />
          BRANDS BECOME<br />
          <span className="text-[#ffd23f]">TOP 1%</span>
        </h1>
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center text-base gap-4 mb-4">
            <Suspense
              fallback={
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-400 animate-pulse" />
              }
            >
              <LazyAvatar
                src={fireIconUrl}
                loading="lazy"
                alt="Animated fire icon"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                width={48}
                height={48}
                decoding="async"
                draggable={false}
              />
            </Suspense>
            <p className="text-base sm:text-xl">
              12 years of design-driven development for B2B products
            </p>
          </div>
          <button
            className="
              flex bg-[#ffd23f] text-black rounded-full px-6 py-2 mt-2
              transition duration-200 ease-in-out
              hover:bg-yellow-300 hover:scale-105 hover:shadow-lg cursor-pointer
              text-base sm:text-lg
              focus:outline-none focus:ring-2 focus:ring-yellow-300
            "
            type="button"
            aria-label="Book a call"
          >
            BOOK A CALL
          </button>
        </div>
      </article>

      {/* Right Section */}
      <aside
        className="
          flex items-center justify-center
          bg-[#ffd23f] rounded-3xl w-full p-4 sm:p-6
          transition duration-200 shadow-sm group
          hover:scale-[1.024] hover:shadow-xl hover:bg-[#c5b16f]
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
          <video
            className="w-full h-full object-cover rounded-full"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster=""
            aria-label="Showreel video playing"
            tabIndex={-1}
            width="500"
            height="500"
            style={{ background: "#f5f3f0" }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              role="img"
              aria-label="Play icon"
              fill="currentColor"
              viewBox="0 0 16 16"
              width="48"
              height="48"
              className="text-[#ffd23f] opacity-80"
            >
              <path d="M13.9 7.35a.7.7 0 0 1 0 1.213l-8.4 4.85a.7.7 0 0 1-1.05-.606v-9.7a.7.7 0 0 1 1.05-.606l8.4 4.85Z" />
            </svg>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default memo(HeroSection);
