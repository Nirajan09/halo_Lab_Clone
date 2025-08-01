import React from "react";

const DropdownMenu = ({ id, isOpen, onMouseEnter, onMouseLeave, ariaLabel, className, children }) => {
  if (!isOpen) return null;

  return (
    <div
      id={id}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default React.memo(DropdownMenu);
