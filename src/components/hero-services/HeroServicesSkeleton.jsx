

const ListSkeleton = ({rows}) => (
  <ul>
    {Array.from({length: rows}).map((_, i) => (
      <li
        key={i}
        className={
          `flex items-center justify-between py-2 w-full ` +
          (i < rows - 1 ? "border-b border-[#b3b3b8] pb-1" : "")
        }
      >
        <span className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"/>
        <span className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"/>
      </li>
    ))}
  </ul>
);

const HeroServicesSectionSkeleton = () => (
  <div className="section min-h-[30vh] flex flex-col items-center justify-center">
    {/* Headline Skeleton */}
    <div className="text-center mb-12">
      <div className="h-10 w-3/4 md:w-1/2 mx-auto bg-gray-700 rounded-lg animate-pulse" />
    </div>

    {/* Services Cards Skeleton */}
    <div className="flex flex-col sm:flex-row gap-8 bg-[#FFFFFF] rounded-2xl p-6 md:p-10 w-full">
      {/* Design Card Skeleton */}
      <div className="flex-1 rounded-xl px-4 py-6 shadow relative bg-[#F5F5F7]">
        <div className="flex items-center mb-4 border-b border-[#b3b3b8] w-full pb-1">
          <span className="h-6 w-24 bg-gray-400 rounded animate-pulse"/>
        </div>
        <ListSkeleton rows={5}/>
      </div>
      {/* Development Card Skeleton */}
      <div className="flex-1 bg-[#F5F5F7] rounded-xl p-6 shadow relative">
        <div className="flex items-center mb-4 border-b border-[#b3b3b8] w-full pb-1">
          <span className="h-6 w-32 bg-gray-400 rounded animate-pulse"/>
        </div>
        <ListSkeleton rows={5}/>
      </div>
    </div>

    {/* Call to Action Skeleton */}
    <div
      className="flex items-center flex-col sm:flex-row justify-between rounded-2xl bg-[#231B41]
      px-6 py-4 w-full mx-auto mt-8 shadow-md transition-colors duration-200 delay-150"
    >
      <div className="flex justify-between items-center gap-6 mb-4 sm:mb-0">
        <span className="flex items-center justify-center w-10 h-10 rounded-full">
          <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"/>
        </span>
        <span className="h-6 w-56 sm:w-80 md:w-80 bg-gray-600 rounded animate-pulse"/>
      </div>
      <div className="ml-6">
        <span className="h-9 w-32 bg-yellow-200 rounded-full animate-pulse block"/>
      </div>
    </div>
  </div>
);

export default HeroServicesSectionSkeleton;
