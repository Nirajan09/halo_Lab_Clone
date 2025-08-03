import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

export default function FounderImage({ imageUrl }) {
  return (
    <div className="flex gap-4 mt-3 items-center md:items-start md:w-1/4 md:flex-col">
      <div className="mb-2">
        <Suspense
          fallback={<div className="w-[158px] h-[64px] bg-gray-700 rounded-lg animate-pulse" />}
        >
          <LazyAvatar
            src={imageUrl}
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
  );
}
