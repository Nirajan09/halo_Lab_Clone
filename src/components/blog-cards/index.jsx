import { useRef, useCallback, useState, lazy, Suspense, memo, useEffect } from "react";

// Single, shared, lazy-loaded image/avatar component
const LazyAvatar = lazy(() => import("../lazyloading-utils/LazyAvatar"));

const cards = [
  {
    title: "How to build a product — a full guide to the product development process",
    category: "DEVELOPMENT",
    imageBeforeAnimate: "../cards/BeforeAnimationImage1.png",
    imageAfterAnimate: "../cards/AfterAnimationImage1.png",
  },
  {
    title: "Tech stack for web development: how to arrange it correctly",
    category: "DEVELOPMENT",
    imageBeforeAnimate: "../cards/BeforeAnimationImage2.png",
    imageAfterAnimate: "../cards/AfterAnimationImage2.png",
  },
];

const IMAGE_HOVER_DELAY = 180; // ms

// Memoize BlogCardItem for minimal rerenders
const BlogCardItem = memo(function BlogCardItem({
  card,
  idx,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      key={idx}
      className={`
        bg-[#3827C8] rounded-[2rem] pt-12 pb-10 px-10 relative min-h-[400px] 
        flex flex-col justify-end shadow-lg
        transition-colors duration-300
        hover:bg-[#5143ea]
        group
      `}
      onMouseEnter={() => onMouseEnter(idx)}
      onMouseLeave={onMouseLeave}
      tabIndex={0} // for a11y focus
      role="article" // semantic grouping
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-8 transition-transform duration-600">
        <Suspense
          fallback={
            <div className="w-20 h-20 bg-gray-300 rounded-lg animate-pulse" />
          }
        >
          <LazyAvatar
            src={isActive ? card.imageAfterAnimate : card.imageBeforeAnimate}
            alt={card.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </Suspense>
      </div>
      <div className="mt-32">
        <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-6">
          {card.title}
        </h3>
        <div className="text-white/80 text-sm font-normal tracking-wider mb-2">
          {card.category}
        </div>
      </div>
    </div>
  );
});
BlogCardItem.displayName = "BlogCardItem";

const BlogCards = () => {
  const [delayedIdx, setDelayedIdx] = useState(null);
  const timer = useRef(null);

  // Only stable once, no need to re-create on every render
  const handleCardMouseEnter = useCallback((idx) => {
    timer.current = setTimeout(() => setDelayedIdx(idx), IMAGE_HOVER_DELAY);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    setDelayedIdx(null);
  }, []);

  // Effect cleanup: on component unmount prevent memory leak
  // Auto-cleanup timer if BlogCards is unmounted while hovering
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <section className="bg-[#080827] section flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {cards.map((card, idx) => (
          <BlogCardItem
            key={idx}
            card={card}
            idx={idx}
            isActive={delayedIdx === idx}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(BlogCards);
