
const CircleSkeleton = ({ size = 24, className = "" }) => (
  <div
    className={`rounded-full bg-gray-200 animate-pulse ${className}`}
    style={{ width: size, height: size }}
  />
);

const TestimonialCardSkeleton = () => (
  <div className="section flex flex-col items-center">
    {/* Headline */}
    <div className="mb-10">
      <div className="h-8 w-2/3 md:w-1/2 mx-auto bg-gray-700 animate-pulse rounded mb-2" />
      <div className="h-8 w-1/2 md:w-1/3 mx-auto bg-yellow-300 animate-pulse rounded" />
    </div>

    {/* Card */}
    <div className="bg-white p-8 w-full rounded-3xl shadow-lg group">
      <div className="relative bg-[#F5F5F7] rounded-3xl shadow-lg flex flex-col md:flex-row w-full p-2 md:p-8 transition-all duration-700 ease-in-out min-h-[370px]">
        <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <CircleSkeleton size={36} className="bg-gray-300 border border-gray-100" />
        </div>
        {/* Text content skeleton */}
        <div className="flex-1 p-4 flex flex-col justify-center">
          {/* Tag & flag */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-5 w-24 bg-gray-300 animate-pulse rounded" />
            <CircleSkeleton size={24} />
          </div>
          {/* Title (works) */}
          <div className="h-7 w-9/12 bg-gray-200 rounded animate-pulse mb-4" />
          {/* Stars */}
          <div className="flex items-center gap-2 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <CircleSkeleton key={i} size={20} />
            ))}
          </div>
          {/* Testimonial text */}
          <div className="space-y-2 mb-4">
            <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-2/3 bg-gray-100 rounded animate-pulse" />
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse" />
          </div>
          {/* Author section */}
          <div className="flex items-center gap-3 mt-2">
            <CircleSkeleton size={36} />
            <div>
              <div className="h-4 w-28 bg-gray-300 rounded animate-pulse mb-1" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
        {/* Image skeleton */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full h-48 bg-gray-200 rounded-xl animate-pulse" />
        </div>
        {/* Right arrow skeleton */}
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <CircleSkeleton size={36} className="bg-gray-300 border border-gray-100" />
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCardSkeleton;
