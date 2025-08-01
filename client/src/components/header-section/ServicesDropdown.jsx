import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import DropdownMenu from "./DropdownMenu";

const ServicesDropdown = ({ isOpen, onMouseEnter, onMouseLeave, designColumns, devColumns }) => {
  return (
    <DropdownMenu
      id="services-dropdown"
      isOpen={isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ariaLabel="Design and Development"
      className="absolute top-[81%] left-[18vw] -translate-x-1/2 mt-2 w-[1100px] max-w-[95vw] flex bg-white text-black p-8 rounded-2xl shadow-2xl justify-center z-50"
    >
      <div className="w-1/2 pr-8">
        <h4 className="mb-2 ml-2 text-base font-bold">Design</h4>
        <div className="flex gap-4">
          {designColumns.map((col, idx) => (
            <div key={`design-col-${idx}`} className="w-1/2">
              {col.map(text => (
                <div key={text} className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition group" role="menuitem" tabIndex={0}>
                  <span>{text}</span>
                  <RiArrowDropRightLine className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]" size={24} aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 pl-8 border-l border-gray-200">
        <h4 className="mb-2 ml-2 text-base font-bold">Development</h4>
        <div className="flex gap-4">
          {devColumns.map((col, idx) => (
            <div key={`dev-col-${idx}`} className="w-1/2">
              {col.map(text => (
                <div key={text} className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition group" role="menuitem" tabIndex={0}>
                  <span>{text}</span>
                  <RiArrowDropRightLine className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]" size={24} aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </DropdownMenu>
  );
};

export default React.memo(ServicesDropdown);
