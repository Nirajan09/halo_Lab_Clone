import { useEffect, useState, lazy, Suspense, memo } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { useMemoizedCallback } from "../../utils/useMemoizedCallback";
import { useMemoizedValue } from "../../utils/useMemoizedValue";

// DRY static import for lazy image usage
const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const AUTO_ADVANCE_DELAY = 5000; // ms

function TestimonialCard() {
  // Memoized cards array
  const cards = useMemoizedValue(() => [
    {
      tag: "marketplace",
      flagImageSrc: "../testimonials/flags/66ab56714b5a386eb1600483_flag-Switzerland.avif",
      works: "HomeQ's 67% yearly growth and acquisition by a $7B company",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "The team at Halo Lab crafted intuitive websites and landing pages. Their attention to detail and client focus were remarkable.",
      authorImage: "../testimonials/author/6728d40dd2f5fa23e0cf2409_review-ava_Peter-Hedlund.avif",
      authorName: "Peter Hedlund",
      authorDescription: "SVP, Marketing",
      workImage: "./testimonials/works/6719144ea7fcb629b8c71ae6_works-audit-HomeQ.avif"
    },
    // ... rest of your cards here ...
    {
      tag: "HEALTHCARE",
      flagImageSrc: "../testimonials/flags/66ab5671023787dcce263398_flag-Austria.avif",
      works: "Nyra Health achieved a 16% traffic increase with our fresh design solutions",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "Halo Lab delivered our healthcare platform, including industry-specific pages, adapting quickly to our needs and meeting all deadlines.",
      authorImage: "../testimonials/author/663ce808d9ada3c120697131_review-ava_Mario-Zusag.avif",
      authorName: "Mario Zusag",
      authorDescription: "CTO, nyra health",
      workImage: "./testimonials/works/678a885d60016fcf4a0ee5b5_results-NyraHealth.avif"
    }
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsCount = cards.length;

  // Auto-advance testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % cardsCount),
      AUTO_ADVANCE_DELAY
    );
    return () => clearInterval(interval);
  }, [cardsCount]);

  // Keyboard arrow navigation
  const handleKeyDown = useMemoizedCallback(
    (e) => {
      if (e.key === "ArrowRight") setCurrentIndex((currentIndex + 1) % cardsCount);
      else if (e.key === "ArrowLeft") setCurrentIndex((currentIndex - 1 + cardsCount) % cardsCount);
    },
    [currentIndex, cardsCount]
  );

  const prev = useMemoizedCallback(
    () => setCurrentIndex((currentIndex - 1 + cardsCount) % cardsCount),
    [currentIndex, cardsCount]
  );

  const next = useMemoizedCallback(
    () => setCurrentIndex((currentIndex + 1) % cardsCount),
    [currentIndex, cardsCount]
  );

  const card = cards[currentIndex];

  return (
    <section className="section flex flex-col items-center" aria-label="Success story testimonials" tabIndex={0} onKeyDown={handleKeyDown}>
      <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-10">
        WHERE GREAT IDEAS <br />
        <span className="text-[#FDC54B]">BECAME REAL RESULTS</span>
      </h1>
      <div className="bg-white p-8 w-full rounded-3xl shadow-lg group relative">
        <div className="relative bg-[#F5F5F7] rounded-3xl shadow-lg flex flex-col md:flex-row w-full p-2 md:p-8 transition-all duration-700 ease-in-out">
          {/* Left arrow */}
          <button
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-4 bg-white border border-gray-200 shadow
            opacity-0 pointer-events-none
            group-hover:opacity-100 group-hover:pointer-events-auto
            hover:bg-[#F5F5F7] hover:scale-110 transition cursor-pointer"
            onClick={prev}
            aria-label="previous testimonial"
            type="button"
            tabIndex={0}
          >
            <FaLessThan />
          </button>

          {/* Text content */}
          <div className="flex-1 p-4 flex flex-col justify-center">
            <span className="text-sm text-black font-normal mb-2 md:mb-4 flex items-center gap-1 uppercase">
              <span className="mt-1">{card.tag}</span>
              <Suspense fallback={<div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse ml-2" />}>
                <LazyAvatar
                  src={card.flagImageSrc}
                  alt={`${card.tag} flag`}
                  className="w-6 h-6 rounded-full ml-2 object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </Suspense>
            </span>
            <h3 className="text-black text-xl sm:text-2xl font-medium w-full md:max-w-[20ch] min-h-[10vh] md:min-h-[20vh]">{card.works}</h3>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Suspense key={i} fallback={<div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />}>
                  <LazyAvatar
                    src={card.starIcon}
                    alt="Rating Star"
                    className="w-5 h-5 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Suspense>
              ))}
            </div>
            <p className="text-[#4A4A5E] text-lg font-medium mb-4 min-h-[16vh] md:min-h-[22vh] w-full md:max-w-[32ch]">
              “{card.text}”
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Suspense fallback={<div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />}>
                <LazyAvatar
                  src={card.authorImage}
                  alt={card.authorName}
                  className="w-9 h-9 rounded-full border-2 border-yellow-400 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Suspense>
              <div>
                <div className="text-sm font-medium text-black">
                  {card.authorName}
                </div>
                <div className="text-xs text-gray-500">{card.authorDescription}</div>
              </div>
            </div>
          </div>

          {/* Work image */}
          <div className="flex-1 flex items-center justify-center">
            <Suspense fallback={<div className="w-full h-56 bg-gray-200 rounded-xl animate-pulse" />}>
              <LazyAvatar
                src={card.workImage}
                alt={`${card.tag} work`}
                className="rounded-xl shadow-lg w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </Suspense>
          </div>

          {/* Right arrow */}
          <button
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-4 bg-white border border-gray-200 shadow
            opacity-0 pointer-events-none
            group-hover:opacity-100 group-hover:pointer-events-auto
            hover:bg-[#F5F5F7] hover:scale-110 transition cursor-pointer"
            onClick={next}
            aria-label="next testimonial"
            type="button"
            tabIndex={0}
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialCard);
