import { Suspense, lazy } from "react";

const LazyAvatar = lazy(() => import("../../utils/LazyAvatar"));

function SafeLazyAvatar(props) {
  return props.src ? <LazyAvatar {...props} /> : null;
}

export default function TestimonialCardContent({ card }) {
  return (
    <div className="flex-1 p-4 flex flex-col justify-center">
      <span className="text-sm text-black font-normal mb-2 md:mb-4 flex items-center gap-1 uppercase">
        <span className="mt-1">{card.tag}</span>
        <Suspense fallback={<div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse ml-2" />}>
          <SafeLazyAvatar
            src={card.flagImageSrc}
            alt={`${card.tag} flag`}
            className="w-6 h-6 rounded-full ml-2 object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </Suspense>
      </span>

      <h3 className="text-black text-xl sm:text-2xl font-medium w-full md:max-w-[20ch] min-h-[10vh] md:min-h-[20vh]">
        {card.works}
      </h3>

      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Suspense key={i} fallback={<div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />}>
            <SafeLazyAvatar
              src={card.starIcon}
              alt="Rating Star"
              className="w-5 h-5 object-cover"
              loading="lazy"
              decoding="async"
            />
          </Suspense>
        ))}
      </div>

      <p className="text-[#4A4A5E] text-lg font-medium mb-4 min-h-[16vh] md:min-h-[22vh] w-full md:max-w-[32ch]">
        “{card.text}”
      </p>

      <div className="flex items-center gap-3 mt-2">
        <Suspense fallback={<div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />}>
          <SafeLazyAvatar
            src={card.authorImage}
            alt={card.authorName}
            className="w-9 h-9 rounded-full border-2 border-yellow-400 object-cover"
            loading="lazy"
            decoding="async"
          />
        </Suspense>

        <div>
          <div className="text-sm font-medium text-black">{card.authorName}</div>
          <div className="text-xs text-gray-500">{card.authorDescription}</div>
        </div>
      </div>
    </div>
  );
}
