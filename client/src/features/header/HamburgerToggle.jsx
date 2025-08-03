import React from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const HamburgerToggle = ({ isOpen, toggle, onKeyDown }) => {
  return (
    <div
      className="lg:hidden cursor-pointer"
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-label="Toggle menu"
      onKeyDown={onKeyDown}
    >
      {!isOpen ? <RxHamburgerMenu size={28} /> : <RxCross2 size={28} />}
    </div>
  );
};

export default React.memo(HamburgerToggle);
