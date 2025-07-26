import { useRef, useState, lazy, Suspense, memo, useEffect } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { useMemoizedCallback } from "../../utils/useMemoizedCallback";

// Single, shared, lazy-loaded image/avatar component
const LazyAvatar = lazy(() => import("../lazyloading-utils/LazyAvatar"));

// Cards data (could come from props/api in the future)
const cardsData = [
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

// Memoized BlogCardItem for minimal re-renders
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

// Main BlogCards component
const BlogCards = () => {
  const cards = useMemoizedValue(() => cardsData, [cardsData]);
  const [delayedIdx, setDelayedIdx] = useState(null);
  const timer = useRef(null);

  // Use custom hook for memoizing callbacks
  const handleCardMouseEnter = useMemoizedCallback((idx) => {
    timer.current = setTimeout(() => setDelayedIdx(idx), IMAGE_HOVER_DELAY);
  }, []);

  const handleCardMouseLeave = useMemoizedCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    setDelayedIdx(null);
  }, []);

  // Cleanup timer on unmount to prevent memory leak
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
