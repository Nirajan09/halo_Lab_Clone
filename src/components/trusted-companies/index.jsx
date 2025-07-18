import React, { Suspense, lazy } from 'react';

const NokiaLogo = lazy(() => import('../lazyloading-utils/trusted-companies/NokiaLogo'));
const BumbleLogo = lazy(() => import('../lazyloading-utils/trusted-companies/BumbleLogo'));
const SchibstedLogo = lazy(() => import('../lazyloading-utils/trusted-companies/SchibstedLogo'));
const OperaLogo = lazy(() => import('../lazyloading-utils/trusted-companies/OperaLogo'));
const BonterraLogo = lazy(() => import('../lazyloading-utils/trusted-companies/BonterraLogo'));
const ZoomLogo = lazy(() => import('../lazyloading-utils/trusted-companies/ZoomLogo'));

const TrustedCompaniesSection = () => {
  return (
    <div className="section relative flex justify-center items-center min-h-[30vh] md:min-h-[25vh] border rounded-xl p-5 border-white">
      <p className="absolute left-[25%] top-[-0.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center mb-8 z-10 sm:text-size-xs lg:text-size-base xl:text-size-lg">
        Trusted by global brands &amp; SMBs in the US and Europe
      </p>
      <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
        <Suspense fallback={<div style={{ height: '48px', width: '100px' }} />}>
          <NokiaLogo className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain" />
        </Suspense>
        <Suspense fallback={<div style={{ height: '48px', width: '100px' }} />}>
          <BumbleLogo className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain" />
        </Suspense>
        <Suspense fallback={<div style={{ height: '48px', width: '100px' }} />}>
          <SchibstedLogo className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain" />
        </Suspense>
        <Suspense fallback={<div style={{ height: '48px', width: '100px' }} />}>
          <OperaLogo className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain" />
        </Suspense>
        <Suspense fallback={<div style={{ height: '48px', width: '100px' }} />}>
          <BonterraLogo className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain" />
        </Suspense>
        <Suspense fallback={<div style={{ height: '48px', width: '100px' }} />}>
          <ZoomLogo className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain" />
        </Suspense>
      </div>
    </div>
  );
};

export default TrustedCompaniesSection;
