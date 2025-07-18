import React, { Suspense, lazy } from 'react';

const logos = [
  { Component: lazy(() => import('../lazyloading-utils/trusted-companies/NokiaLogo')), key: 'nokia' },
  { Component: lazy(() => import('../lazyloading-utils/trusted-companies/BumbleLogo')), key: 'bumble' },
  { Component: lazy(() => import('../lazyloading-utils/trusted-companies/SchibstedLogo')), key: 'schibsted' },
  { Component: lazy(() => import('../lazyloading-utils/trusted-companies/OperaLogo')), key: 'opera' },
  { Component: lazy(() => import('../lazyloading-utils/trusted-companies/BonterraLogo')), key: 'bonterra' },
  { Component: lazy(() => import('../lazyloading-utils/trusted-companies/ZoomLogo')), key: 'zoom' }
];

const LogoPlaceholder = () => (
  <div
    className="flex items-center justify-center rounded-lg"
    style={{ height: '48px', width: '100px', background: '#eee' }}
  />
);

const TrustedCompaniesSection = () => (
  <div className="section relative flex justify-center items-center min-h-[30vh] md:min-h-[25vh] border rounded-xl p-5 border-white">
    <p className="absolute left-[25%] top-[-0.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center mb-8 z-10 sm:text-size-xs lg:text-size-base xl:text-size-lg">
      Trusted by global brands &amp; SMBs in the US and Europe
    </p>
    <Suspense
      fallback={
        <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
          {[...Array(6)].map((_, i) => <LogoPlaceholder key={i} />)}
        </div>
      }
    >
      <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
        {logos.map(({ Component, key }) => (
          <Component
            key={key}
            className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain"
          />
        ))}
      </div>
    </Suspense>
  </div>
);

export default TrustedCompaniesSection;
