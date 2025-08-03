import  { memo } from "react";

const FooterLinks = ({ links }) => (
  <div className="mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 items-center text-xs text-white/60">
    <div className="text-base">© Halo Lab. All rights reserved.</div>
    <div className="flex gap-6 mt-3 sm:mt-0 text-base w-full">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="
            flex items-center justify-center border border-white rounded-2xl w-50 h-12 text-center
            hover:bg-white hover:text-[#3813c2] hover:shadow-md
            focus:bg-white focus:text-[#3813c2] focus:shadow-md
            transition-all duration-200 text-sm md:text-base
          "
          tabIndex={0}
        >
          {label}
        </a>
      ))}
    </div>
  </div>
);

export default memo(FooterLinks);
