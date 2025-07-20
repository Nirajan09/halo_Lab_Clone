
const HeroSectionSkeleton = () => (
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-h-[80vh] md:min-h-[60vh]">
    {/* Left Skeleton */}
    <div className="flex flex-col justify-between bg-gray-200 rounded-3xl p-6 sm:p-10 xl:p-16 w-full min-h-[360px] animate-pulse">
      <div className="space-y-4 mb-12">
        <div className="w-3/4 h-8 bg-gray-300 rounded" />
        <div className="w-2/3 h-8 bg-gray-300 rounded" />
        <div className="w-5/6 h-8 bg-gray-300 rounded" />
        <div className="w-1/4 h-8 bg-gray-300 rounded" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="h-6 w-48 bg-gray-300 rounded" />
      </div>
      <div className="h-10 w-32 rounded-full bg-gray-300 mt-2"></div>
    </div>
    {/* Right Skeleton */}
    <div className="flex items-center justify-center bg-gray-200 rounded-3xl w-full p-4 sm:p-6 min-h-[360px] animate-pulse">
      <div className="w-[90vw] max-w-[360px] sm:max-w-[420px] md:max-w-[380px] xl:max-w-[500px] aspect-square rounded-full bg-gray-300"></div>
    </div>
  </div>
);

export default HeroSectionSkeleton;
