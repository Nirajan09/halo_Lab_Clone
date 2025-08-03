import React from "react";

const MenuItem = ({ children, onClick, rightIcon = null, tabIndex = 0 }) => {
  return (
    <li
      className="flex items-center text-2xl font-semibold text-gray-900 mb-4 cursor-pointer select-none transition hover:text-indigo-600"
      role="menuitem"
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && onClick && onClick()}
    >
      <span className="flex-1">{children}</span>
      {rightIcon}
    </li>
  );
};

export default React.memo(MenuItem);
