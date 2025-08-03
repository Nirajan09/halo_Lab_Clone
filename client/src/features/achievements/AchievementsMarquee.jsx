const SCROLL_DURATION = 30;

export default function AchievementsMarquee({ children }) {
  return (
    <div
      className="flex gap-8 min-w-max animate-achievements-marquee"
      style={{
        animation: `achievements-marquee ${SCROLL_DURATION}s linear infinite`,
      }}
    >
      {children}
    </div>
  );
}
