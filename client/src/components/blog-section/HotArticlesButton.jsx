import React, { memo } from "react";

const HotArticlesButton = () => (
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
);

export default memo(HotArticlesButton);
