import { useRef, useState, useEffect, memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { useMemoizedCallback } from "../../utils/useMemoizedCallback";
import BlogCardItem from "./BlogCardItem";
import { blogCardsData } from "../../data/blogCardsData";

const IMAGE_HOVER_DELAY = 180;

const BlogCards = () => {
  const cards = useMemoizedValue(() => blogCardsData, []);
  const [delayedIdx, setDelayedIdx] = useState(null);
  const timer = useRef(null);

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
