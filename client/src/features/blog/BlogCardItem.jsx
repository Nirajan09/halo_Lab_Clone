import { memo, lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const BlogCardItem = memo(function BlogCardItem({ card, idx, isActive, onMouseEnter, onMouseLeave }) {
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
      tabIndex={0}
      role="article"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-8 transition-transform duration-600">
        <Suspense fallback={<div className="w-20 h-20 bg-gray-300 rounded-lg animate-pulse" />}>
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
        <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-6">{card.title}</h3>
        <div className="text-white/80 text-sm font-normal tracking-wider mb-2">{card.category}</div>
      </div>
    </div>
  );
});

BlogCardItem.displayName = "BlogCardItem";

export default BlogCardItem;
