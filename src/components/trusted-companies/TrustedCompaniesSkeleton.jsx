import React from 'react';

const LogoSkeleton = () => (
  <div
    className="flex items-center justify-center rounded-lg animate-pulse"
    style={{ height: '48px', width: '100px', background: '#e5e7eb' }} 
  >
    <div
      className="rounded h-6 w-20 bg-gray-300"
      style={{ background: '#d1d5db' }}
    />
  </div>
);

const TrustedCompaniesSkeleton = () => (
  <div className="section relative flex justify-center items-center min-h-[30vh] md:min-h-[25vh] border rounded-xl p-5 border-white">
    <p className="absolute left-[25%] top-[-0.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center mb-8 z-10 sm:text-size-xs lg:text-size-base xl:text-size-lg">
      Trusted by global brands &amp; SMBs in the US and Europe
    </p>
    <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <LogoSkeleton key={i} />
      ))}
    </div>
  </div>
);

export default TrustedCompaniesSkeleton;
