import { lazy, Suspense } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));
const AUTHOR_MAN_SRC = "../author/6596ea8404d31b14e01e406f_reviews-man.avif";

export default function ReviewSummary({ onPrev, onNext }) {
  return (
    <div
      className="rounded-2xl p-7 w-[400px] flex-shrink-0 overflow-hidden h-[60vh] flex-col shadow-lg hidden lg:flex xl:mr-71 relative"
      aria-label="Clutch rating summary"
    >
      <div className="h-[70vh]">
        <Suspense fallback={<div className="w-full h-full bg-gray-700 rounded-xl animate-pulse" />}>
          <LazyAvatar src={AUTHOR_MAN_SRC} alt="Testimonial author" className="w-100 object-cover" />
        </Suspense>
      </div>
      <div className="text-white absolute">
        <div className="text-[56px] font-normal">4.9</div>
        <p className="mt-30 text-2xl font-normal mb-6 z-30">
          Clutch average based on <br /> 80+ reviews. All chances <br />
          are you'll be impressed too.
        </p>
        <div className="flex justify-start gap-6">
          <button
            className="cursor-pointer rounded-full p-4 border border-white transition-transform duration-200 hover:bg-white hover:text-[#3719CA] hover:shadow-lg"
            aria-label="Previous testimonial"
            onClick={onPrev}
            type="button"
          >
            <FaLessThan />
          </button>
          <button
            className="cursor-pointer rounded-full p-4 border border-white transition-transform duration-200 hover:bg-white hover:text-[#3719CA] hover:shadow-lg"
            aria-label="Next testimonial"
            onClick={onNext}
            type="button"
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
}
