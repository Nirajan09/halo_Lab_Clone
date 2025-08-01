import React from "react";

const links = ["Projects", "Dedicated Team", "Pricing"];

const NavbarLinks = () => (
  <>
    {links.map(item => (
      <li key={item}>
        <a
          href="/"
          className="px-2 h-10 flex items-center font-medium hover:text-[#FDC448] transition-colors"
        >
          {item}
        </a>
      </li>
    ))}
  </>
);

export default React.memo(NavbarLinks);
