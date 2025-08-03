import { useState, memo, lazy} from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";

import { reviews as reviewsData } from "./testimonialsBannerData";
import ClutchBadge from "./ClutchBadge";
import ReviewSummary from "./ReviewSummary";
import TestimonialReview from "./TestimonialReview";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

function TestimonialBannerSection() {
  const reviews = useMemoizedValue(() => reviewsData, []);
  // repeat reviews 3 times only for mobile scroll effect
  const repeatedReviews = useMemoizedValue(() => [...reviews, ...reviews, ...reviews], [reviews]);

  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const currentReview = reviews[current];

  return (
    <section className="section" aria-label="Testimonials and reviews">
      <div className="max-w-2xl mx-auto flex flex-col items-start sm:items-center">
        <ClutchBadge />
        <h2 className="text-white text-2xl md:text-3xl font-normal max-w-3xl text-center sm:text-left">
          We've helped hundreds of partners, ranging from startups to medium-sized businesses to achieve their goals. And stellar feedback — is our reward!
        </h2>
      </div>

      {/* Testimonial banner grid */}
      <div className="mt-10 grid gap-10 overflow-x-auto lg:overflow-hidden">
        <div className="flex gap-8 animate-banner-scroll" style={{ width: `432px` }}>
          <ReviewSummary onPrev={handlePrev} onNext={handleNext} />
          {/* Show only current review on desktop */}
          <TestimonialReview review={currentReview} className="w-[400px] h-[40vh] lg:h-[60vh] lg:mr-20 xl:mr-40" isDesktopCurrent />
          {/* Show repeated reviews on mobile */}
          {repeatedReviews.map((review, idx) => (
            <TestimonialReview
              key={`${review.user}-${idx}`}
              review={review}
              className="w-[400px] h-[60vh]"
              isDesktopCurrent={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialBannerSection);
