import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));
const STAR_SRC = "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg";

export default function TestimonialReview({ review, className, isDesktopCurrent = false }) {
  return (
    <div
      className={`${className} bg-[#3719CA] rounded-2xl p-7 flex-shrink-0 flex flex-col shadow-lg transition-colors duration-300 ${
        isDesktopCurrent ? "hidden lg:flex" : "lg:hidden"
      }`}
      aria-label={`Testimonial by ${review.user}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-yellow-400 text-lg font-bold mt-1">{review.rating}</span>
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <Suspense key={i} fallback={<div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />}>
              <LazyAvatar src={STAR_SRC} alt="star icon" className="w-4 h-4" />
            </Suspense>
          ))}
        </div>
      </div>
      <p className={`text-white ${isDesktopCurrent ? "text-lg" : "text-base"} mb-6`}>{review.text}</p>
      <div className={`flex items-center gap-3 pt-2 mt-auto ${isDesktopCurrent ? "" : "border-t border-[#322570]"}`}>
        {review.avatar ? (
          <Suspense fallback={<div className="w-10 h-10 rounded-full bg-[#322570] animate-pulse" />}>
            <LazyAvatar
              src={review.avatar}
              alt={review.user}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#322570]"
            />
          </Suspense>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#322570]" />
        )}
        <div>
          <span className="block text-white font-semibold text-sm">{review.user}</span>
          <span className="block text-[#bcb7e5] text-xs">{review.title}</span>
        </div>
      </div>
    </div>
  );
}
