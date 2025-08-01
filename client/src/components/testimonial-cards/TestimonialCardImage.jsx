import { Suspense, lazy } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

function SafeLazyAvatar(props) {
  return props.src ? <LazyAvatar {...props} /> : null;
}

export default function TestimonialCardImage({ src, alt }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Suspense fallback={<div className="w-full h-56 bg-gray-200 rounded-xl animate-pulse" />}>
        <SafeLazyAvatar
          src={src}
          alt={alt}
          className="rounded-xl shadow-lg w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </Suspense>
    </div>
  );
}
