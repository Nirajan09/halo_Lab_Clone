
const StatCardSkeleton = () => (
  <div
    className="
      rounded-2xl bg-[#2F1F4A] px-8 py-8 shadow-lg min-w-[270px] relative flex flex-col items-start
      border border-transparent animate-pulse
    "
  >
    <div className="h-11 w-3/4 bg-[#FDC448]/30 rounded mb-4" />
    <hr className="border-[#68568B] opacity-60 mb-4 w-full" />
    <div className="space-y-2 w-full">
      <div className="h-5 w-4/5 bg-[#DFD7F9]/30 rounded" />
      <div className="h-4 w-2/3 bg-[#DFD7F9]/20 rounded" />
    </div>
  </div>
);

const StatCardsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 section">
    {Array.from({ length: 3 }).map((_, i) => (
      <StatCardSkeleton key={i} />
    ))}
  </div>
);

export default StatCardsSkeleton;
