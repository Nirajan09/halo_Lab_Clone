import { memo } from "react";

const BlogSection = () => (
  <section
    className="section flex items-center justify-between w-full"
    aria-labelledby="blog-section-heading"
  >
    <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 w-full items-center">
      {/* Hot Articles Badge */}
      <div className="flex lg:block justify-center lg:justify-start mb-8 md:mb-0">
        <button
          type="button"
          tabIndex={0}
          aria-label="Show Hot Articles"
          className="
            max-w-[11rem] flex justify-center items-center bg-white rounded-full px-6 py-3
            shadow-md transition-all duration-200 cursor-pointer
            hover:shadow-lg hover:scale-105 hover:bg-yellow-100
            focus:outline-none focus:ring-2 focus:ring-yellow-300
          "
        >
          <span className="text-base font-medium mr-2 text-gray-600 transition-colors duration-200 select-none">
            HOT ARTICLES
          </span>
        </button>
      </div>

      <h2 id="blog-section-heading" className="sr-only">
        Halo Lab Blog Overview
      </h2>
      <p className="text-white text-lg md:text-3xl lg:text-4xl font-semibold leading-snug">
        The Halo Lab blog is a treasure trove of our best technical tips and expert knowledge.
        Here you will discover all the valuable secrets and trends of the IT industry.
      </p>
    </div>
  </section>
);

export default memo(BlogSection);
