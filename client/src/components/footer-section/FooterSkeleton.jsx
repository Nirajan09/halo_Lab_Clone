// Animated gray box for badge placeholders
const BadgeSkeleton = () => (
  <div className="w-full h-12 bg-gray-700 rounded-lg animate-pulse" />
);

// Row skeleton for "Show all ..." expandable rows
const ExpandRowSkeleton = () => (
  <div className="border-t border-white/10 flex justify-between group">
    <button className="w-full flex justify-between items-center py-4 text-left text-lg font-normal focus:outline-none transition">
      <span className="h-6 w-36 bg-gray-600 rounded animate-pulse" />
      <span
        className="
          flex items-center justify-center
          border border-transparent rounded-full
          w-10 h-10 ml-3
          bg-gray-600 animate-pulse
        "
      />
    </button>
  </div>
);

const FooterSectionSkeleton = () => (
  <footer className="section w-full pt-8 pb-4 text-white">
    {/* Badges */}
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center mb-6">
      {Array.from({ length: 7 }).map((_, i) => (
        <BadgeSkeleton key={i} />
      ))}
    </div>

    {/* Expanding rows */}
    <div className="mx-auto grid grid-rows-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <ExpandRowSkeleton key={i} />
      ))}
      <div className="border-t border-white/10 flex justify-between mt-1"></div>
    </div>

    {/* Bottom row */}
    <div className="mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 items-center text-xs text-white/60">
      <div className="h-6 w-44 bg-gray-600 rounded animate-pulse" />
      <div className="flex gap-4 mt-3 sm:mt-0 w-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="
              flex items-center justify-center border border-white rounded-2xl
              w-40 h-10 bg-gray-700 animate-pulse
            "
          />
        ))}
      </div>
    </div>
  </footer>
);

export default FooterSectionSkeleton;
