import React from "react";

const NavbarLogo = () => (
  <div className="font-bold text-lg cursor-pointer" tabIndex={0} aria-label="Go to home">
    <a href="/" className="flex items-center">
      <img
        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg"
        alt="Halo Lab Logo"
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-8"
      />
    </a>
  </div>
);

export default React.memo(NavbarLogo);
