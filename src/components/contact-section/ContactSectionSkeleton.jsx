import React from "react";

// A reusable circle for icons/skeleton avatars
const CircleSkeleton = ({ size = 32, className = "" }) => (
  <div
    className={`rounded-full bg-gray-300 animate-pulse ${className}`}
    style={{ width: size, height: size }}
  />
);

const ContactSectionSkeleton = () => (
  <section className="section w-full text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 md:gap-10">
      {/* Column 1: Newsletter & Social icons skeleton */}
      <div>
        <div className="h-6 w-5/6 bg-gray-400 rounded mb-4 animate-pulse" />
        <div className="h-6 w-3/5 bg-gray-300 rounded mb-6 animate-pulse" />
        {/* Email input skeleton */}
        <div className="relative md:w-full w-[90%] mb-6">
          <div className="w-full h-12 bg-gray-300 rounded-full animate-pulse" />
          <CircleSkeleton
            size={36}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400"
          />
        </div>
        <div className="mb-2 h-4 w-36 bg-gray-500 rounded animate-pulse" />
        {/* Social icons skeleton */}
        <div className="flex gap-4 mt-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <CircleSkeleton key={i} size={32} />
          ))}
        </div>
      </div>

      {/* Column 2: Navigation skeleton */}
      <div className="flex md:justify-end">
        <ul className="space-y-2 mt-6 md:mt-0 w-[12.5rem]">
          <li className="h-6 w-3/4 bg-gray-500 rounded animate-pulse mb-2" />
          {Array.from({ length: 6 }).map((_, idx) => (
            <li key={idx} className="flex gap-3 items-center">
              <div className="h-5 w-24 bg-gray-400 rounded animate-pulse" />
              <CircleSkeleton size={18} />
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Contact info skeleton */}
      <div className="space-y-8 flex flex-col lg:items-end">
        <div>
          <div className="mb-2 h-4 w-16 bg-gray-400 rounded animate-pulse" />
          <div className="h-5 w-32 bg-gray-300 rounded animate-pulse" />
        </div>
        <div>
          <div className="mb-2 h-4 w-14 bg-gray-400 rounded animate-pulse" />
          <div className="flex items-center gap-2">
            <CircleSkeleton size={25} />
            <div className="h-5 w-32 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSectionSkeleton;
