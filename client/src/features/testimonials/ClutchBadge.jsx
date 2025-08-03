import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));
const CLUTCH_SRC = "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/659faade8c491caeb4e43ac5_logo-clutch.svg";

export default function ClutchBadge() {
  return (
    <div className="flex items-center justify-between gap-3 mb-5 border border-white rounded-3xl px-5 py-3">
      <Suspense fallback={<div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse" />}>
        <LazyAvatar src={CLUTCH_SRC} alt="Clutch logo" className="w-10 h-10" />
      </Suspense>
      <div className="bg-[#221d3a] px-4 py-1 rounded-full text-xs font-bold tracking-wide text-white">80+ REVIEWS</div>
    </div>
  );
}
