import  { lazy, Suspense } from "react";

// Lazy load shared avatar for placeholder consistency
const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

const LOGO_COUNT = 6;

// Single placeholder using LazyAvatar for skeleton fidelity
const LogoSkeleton = () => (
  <Suspense
    fallback={
      <div
        className="flex items-center justify-center rounded-lg bg-gray-200 animate-pulse"
        style={{ height: 48, width: 100 }}
        aria-hidden="true"
      />
    }
  >
    <LazyAvatar
      src=""
      alt=""
      className="rounded-lg bg-gray-200 animate-pulse"
      style={{ width: 100, height: 48, objectFit: "contain" }}
      aria-hidden="true"
      draggable={false}
    />
  </Suspense>
);

const TrustedCompaniesSectionSkeleton = () => (
  <section
    className="section relative flex justify-center items-center min-h-[30vh] md:min-h-[25vh] border rounded-xl p-5 border-white"
    aria-labelledby="trusted-companies-title"
  >
    <p
      id="trusted-companies-title"
      className="absolute left-[25%] top-[-0.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center z-10 sm:text-[0.625rem] lg:text-base xl:text-lg"
    >
      Trusted by global brands &amp; SMBs in the US and Europe
    </p>
    <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center" aria-hidden="true">
      {Array.from({ length: LOGO_COUNT }).map((_, i) => (
        <LogoSkeleton key={i} />
      ))}
    </div>
  </section>
);

export default TrustedCompaniesSectionSkeleton;
