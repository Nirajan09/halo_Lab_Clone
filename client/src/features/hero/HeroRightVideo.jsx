import { useMemoizedValue } from "../../utils/useMemoizedValue";

export default function HeroRightVideo() {
  const videoSrc = useMemoizedValue(
    () => "https://d3vlq52qrgdnc2.cloudfront.net/UIUX-Showreel-preview-big.mp4",
    []
  );

  return (
    <aside
      className="
        flex items-center justify-center
        bg-[#ffd23f] rounded-3xl w-full p-4 sm:p-6
        transition duration-200 shadow-sm group
        hover:scale-[1.024] hover:shadow-xl hover:bg-[#c5b16f]
        min-h-[360px]
      "
      aria-label="Showreel video"
    >
      <div
        className="
          relative rounded-full mx-auto bg-[#f5f3f0]
          flex items-center justify-center shadow-lg
          w-[90vw] max-w-[360px] sm:max-w-[420px] md:max-w-[380px] xl:max-w-[500px]
          aspect-square
        "
      >
        <video
          className="w-full h-full object-cover rounded-full"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster=""
          aria-label="Showreel video playing"
          tabIndex={-1}
          width="500"
          height="500"
          style={{ background: "#f5f3f0" }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            role="img"
            aria-label="Play icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            width="48"
            height="48"
            className="text-[#ffd23f] opacity-80"
          >
            <path d="M13.9 7.35a.7.7 0 0 1 0 1.213l-8.4 4.85a.7.7 0 0 1-1.05-.606v-9.7a.7.7 0 0 1 1.05-.606l8.4 4.85Z" />
          </svg>
        </div>
      </div>
    </aside>
  );
}
