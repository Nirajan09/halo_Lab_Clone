import { memo } from "react";

import HeroLeftContent from "./HeroLeftContent";
import HeroRightVideo from "./HeroRightVideo";

const HeroSection = () => {
  return (
    <section
      className="
        mt-6 
        grid grid-cols-1 md:grid-cols-2 gap-6
        w-full
        min-h-[80vh] md:min-h-[60vh]
      "
      aria-labelledby="hero-title"
    >
      <HeroLeftContent />
      <HeroRightVideo />
    </section>
  );
};

export default memo(HeroSection);
