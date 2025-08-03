import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";

import FounderText from "./FounderText";
import FounderImage from "./FounderImage";
import { founderImage, founderText } from "../../data/founderData";

const FounderSection = () => {
  const image = useMemoizedValue(() => founderImage, []);
  const text = useMemoizedValue(() => founderText, []);

  return (
    <section
      className="section max-h-[350px] flex flex-col md:flex-row-reverse items-start md:items-stretch justify-between rounded-xl mx-auto"
      aria-labelledby="founder-section-heading"
    >
      <h2 id="founder-section-heading" className="sr-only">
        Founders of Halo Lab Overview
      </h2>

      <FounderText text={text} />
      <FounderImage imageUrl={image} />
    </section>
  );
};

export default memo(FounderSection);
