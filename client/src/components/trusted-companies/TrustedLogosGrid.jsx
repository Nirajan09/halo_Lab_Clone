import { Suspense, memo } from "react";
import LazyAvatar from "../../utils/LazyAvatar";
import LogoPlaceholder from "./LogoPlaceholder";

const TrustedLogosGrid = memo(({ logos }) => (
  <Suspense
    fallback={
      <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center" aria-hidden="true">
        {logos.map((_, i) => <LogoPlaceholder key={i} />)}
      </div>
    }
  >
    <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
      {logos.map(({ src, alt, key }) => (
        <LazyAvatar
          key={key}
          src={src}
          alt={alt}
          className="transition duration-200 hover:shadow-lg hover:scale-105 p-2 cursor-pointer object-contain"
          loading="lazy"
          decoding="async"
          draggable={false}
          aria-label={alt}
        />
      ))}
    </div>
  </Suspense>
));

export default TrustedLogosGrid;
