import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

export default function AwardCard({ subtitle, image }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Suspense fallback={<div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />}>
        <LazyAvatar src={image} alt={subtitle} />
      </Suspense>
      <div className="text-white text-xs md:text-sm opacity-70 uppercase tracking-tight">{subtitle}</div>
    </div>
  );
}
