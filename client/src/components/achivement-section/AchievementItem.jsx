import { memo, lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const AchievementItem = memo(({ avatarSrc, title }) => (
  <div
    className="flex flex-col items-center justify-center text-center bg-[#13143a] rounded-full 
    w-42 h-42 sm:w-52 sm:h-52 lg:w-[290px] lg:h-[290px] mx-auto shadow-md"
    tabIndex={0}
  >
    <Suspense fallback={<div className="w-20 h-20 rounded-full bg-gray-500 animate-pulse" />}>
      <LazyAvatar
        src={avatarSrc}
        alt={title}
        className="w-20 h-20 rounded-full object-cover"
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </Suspense>
    <span className="text-white text-sm sm:text-base lg:text-lg font-semibold px-4 mb-4 select-none">
      {title}
    </span>
  </div>
));

AchievementItem.displayName = "AchievementItem";

export default AchievementItem;
