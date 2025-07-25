import { Suspense, lazy, memo } from "react";

// One shared lazy image import for all logos
const LazyAvatar = lazy(() => import("../lazyloading-utils/LazyAvatar"));

// Constant array outside render for stability and referential integrity
const LOGOS = [
  {
    src: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65c4cdd76ec1f96fd1e9ff8b_logo-nokia.svg",
    alt: "Nokia logo",
    key: "nokia",
  },
  {
    src: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c186489234871b0050d8d1_logo-bumble.svg",
    alt: "Bumble logo",
    key: "bumble",
  },
  {
    src: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c18648d1201ba13fea32fe_logo-schibsted.svg",
    alt: "Schibsted logo",
    key: "schibsted",
  },
  {
    src: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65c4cdd71a615f6f78fabaf4_logo-opera.svg",
    alt: "Opera logo",
    key: "opera",
  },
  {
    src: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c18648d559059598d91f6b_logo-bonterra.svg",
    alt: "Bonterra logo",
    key: "bonterra",
  },
  {
    src: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c18648f7fac6ef7ff45ea9_logo-zoom.svg",
    alt: "Zoom logo",
    key: "zoom",
  },
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
    aria-labelledby="trusted-companies-title"
  >
    <p
      id="trusted-companies-title"
      className="absolute left-[25%] top-[-0.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center z-10 sm:text-[0.625rem] lg:text-base xl:text-lg"
    >
      Trusted by global brands &amp; SMBs in the US and Europe
    </p>

    <Suspense
      fallback={
        <div
          className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center"
          aria-hidden="true"
        >
          {LOGOS.map((_, i) => <LogoPlaceholder key={i} />)}
        </div>
      }
    >
      <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
        {LOGOS.map(({ src, alt, key }) => (
          <LazyAvatar
            key={key}
            src={src}
            alt={alt}
            className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain"
            width={100}
            height={48}
            loading="lazy"
            decoding="async"
            draggable={false}
            aria-label={alt}
          />
        ))}
      </div>
    </Suspense>
  </section>
);

export default memo(TrustedCompaniesSection);
