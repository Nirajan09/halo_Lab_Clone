import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { defaultDescription, blogDescription } from "../../data/blogData";
import HotArticlesButton from "./HotArticlesButton";

const BlogSection = () => {
  const description = useMemoizedValue(
    () => blogDescription || defaultDescription,
    [blogDescription]
  );

  return (
    <section
      className="section flex items-center justify-between w-full"
      aria-labelledby="blog-section-heading"
    >
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 w-full items-center">
        <div className="flex lg:block justify-center lg:justify-start mb-8 md:mb-0">
          <HotArticlesButton />
        </div>

        <h2 id="blog-section-heading" className="sr-only">
          Halo Lab Blog Overview
        </h2>
        <p className="text-white text-lg md:text-3xl lg:text-4xl font-semibold leading-snug">
          {description}
        </p>
      </div>
    </section>
  );
};

export default memo(BlogSection);
