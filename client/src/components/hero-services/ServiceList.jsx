import { memo } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const LIST_ITEM_BASE_CLASSES =
  "cursor-pointer flex items-center justify-between py-2 w-full group transition-colors";

const getBorderClass = (i, arr) => (i < arr.length - 1 ? "border-b border-[#b3b3b8] pb-1" : "");

function ServiceList({ services, onSelect, onKeyDown, title }) {
  return (
    <article className="flex-1 rounded-xl px-4 py-6 shadow relative bg-[#F5F5F7]">
      <h2 className="flex items-center justify-between mb-4 border-b border-[#b3b3b8] w-full pb-1 text-xl font-semibold">
        {title}
      </h2>
      <ul>
        {services.map((label, i, arr) => (
          <li
            key={label}
            className={`${LIST_ITEM_BASE_CLASSES} ${getBorderClass(i, arr)}`}
            role="button"
            tabIndex={0}
            aria-label={label}
            onClick={() => onSelect(label)}
            onKeyDown={e => onKeyDown(label, e)}
          >
            <span className="text-base">{label}</span>
            <RiArrowRightUpLine
              className="opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default memo(ServiceList);
