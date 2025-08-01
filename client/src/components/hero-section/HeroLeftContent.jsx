import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useMemoizedValue } from "../../utils/useMemoizedValue";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

export default function HeroLeftContent() {
  const navigate = useNavigate();

  const fireIconUrl = useMemoizedValue(
    () =>
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67bdb3b2f4c3ff24144f7bc0_home-hero-fire.avif",
    []
  );

  return (
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
          onClick={() => navigate("/contact")}
        >
          BOOK A CALL
        </button>
      </div>
    </article>
  );
}
