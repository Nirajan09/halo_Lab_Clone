import { memo } from "react";

const ExpandableRow = ({ label }) => (
  <div className="border-t border-white/10 flex justify-between group">
    <button
      type="button"
      className="w-full flex justify-between items-center py-4 text-left text-lg font-normal focus:outline-none transition"
      tabIndex={0}
      aria-label={label}
    >
      <span>{label}</span>
      <span
        className="
          flex items-center justify-center
          text-2xl border border-transparent
          rounded-full
          w-10 h-10
          transition-all duration-200
          group-hover:bg-white group-hover:text-[#3813c2] group-focus:bg-white group-focus:text-[#3813c2]
        "
        aria-hidden="true"
      >
        +
      </span>
    </button>
  </div>
);

export default memo(ExpandableRow);
