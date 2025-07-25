import { Suspense, lazy } from 'react';

const logos = [
  { component: lazy(() => import('../lazyloading-utils/trusted-companies/NokiaLogo')), key: 'nokia' },
  { component: lazy(() => import('../lazyloading-utils/trusted-companies/BumbleLogo')), key: 'bumble' },
  { component: lazy(() => import('../lazyloading-utils/trusted-companies/SchibstedLogo')), key: 'schibsted' },
  { component: lazy(() => import('../lazyloading-utils/trusted-companies/OperaLogo')), key: 'opera' },
  { component: lazy(() => import('../lazyloading-utils/trusted-companies/BonterraLogo')), key: 'bonterra' },
  { component: lazy(() => import('../lazyloading-utils/trusted-companies/ZoomLogo')), key: 'zoom' }
];

const LogoPlaceholder = () => (
  <div
    className="flex items-center justify-center rounded-lg bg-gray-200 animate-pulse"
    style={{ height: 48, width: 100 }}
    aria-hidden="true"
  />
);

const TrustedCompaniesSection = () => (
  <section
    className="section relative flex justify-center items-center min-h-[30vh] md:min-h-[25vh] border rounded-xl p-5 border-white"
    aria-label="Trusted companies"
  >
    <p className="absolute left-[25%] top-[-0.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center z-10 sm:text-[0.625rem] lg:text-base xl:text-lg">
      Trusted by global brands &amp; SMBs in the US and Europe
    </p>

    <Suspense
      fallback={
        <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center" aria-hidden="true">
          {[...Array(6)].map((_, i) => <LogoPlaceholder key={i} />)}
        </div>
      }
    >
      <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
        {logos.map((logo) => {
          const { component: Component, key } = logo;
          return (
            <Component
              key={key}
              className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain"
              aria-label={`${key} logo`}
            />
          );
        })}
      </div>
    </Suspense>
  </section>
);

export default TrustedCompaniesSection;
