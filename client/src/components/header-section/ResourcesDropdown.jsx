import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import DropdownMenu from "./DropdownMenu";

const ResourcesDropdown = ({ isOpen, onMouseEnter, onMouseLeave, resourceColumns }) => {
  return (
    <DropdownMenu
      id="resources-dropdown"
      isOpen={isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ariaLabel="Resources"
      className="absolute top-[81%] left-[6vw] -translate-x-1/2 w-[20vw] min-w-[220px] flex bg-white text-black p-8 rounded-2xl shadow-2xl z-50"
    >
      <div className="flex flex-col w-full">
        {resourceColumns.map(text => (
          <div key={text} className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition group" role="menuitem" tabIndex={0}>
            <span>{text}</span>
            <RiArrowDropRightLine className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]" size={24} aria-hidden="true" />
          </div>
        ))}
      </div>
    </DropdownMenu>
  );
};

export default React.memo(ResourcesDropdown);
