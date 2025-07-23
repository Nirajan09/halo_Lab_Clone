import React from "react";

const badges = [
  {
    imageUrl:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d63873a54388b12ef_footer-label_clutch.svg",
    hoverContent: "80 + Reviews",
    alt: "Clutch",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d7c0d6dab48f949a9_footer-label_goodfirms.svg",
    hoverContent: "Top Web Developer",
    alt: "GoodFirms",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f514abf1b2f19d9f66915_footer-label_designrush.svg",
    hoverContent: "Winner 2023-2024",
    alt: "DesignRush",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d33c7c5c812c1642b_footer-label_dribbble.svg",
    hoverContent: "Top WorldWide",
    alt: "Dribbble",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d42950a479c0f2302_footer-label_webflow.svg",
    hoverContent: "Pro Partner",
    alt: "Webflow",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d611664f27fe65fbc_footer-label_prismic.svg",
    hoverContent: "Pro Partner",
    alt: "Prismic",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513df04de844e1461fb2_footer-label_sanity.svg",
    hoverContent: "Pro Partner",
    alt: "Sanity",
  },
];

const rows = [
  "Show all services",
  "Show all technologies",
  "Show all industries",
];

const FooterSection = () => (
  <footer className="section w-full pt-8 pb-4 text-white">
    {/* Badges*/}
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center mb-6">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="group relative cursor-pointer w-35  h-12 flex items-center justify-center gap-6"
        >
          {/* Static badge image */}
          <img
            src={badge.imageUrl}
            alt={badge.alt}
            loading="lazy"
            className="w-full h-12 object-contain bg-[#191A2E] rounded-lg transition-opacity duration-200 group-hover:opacity-0"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#fbfbfd] rounded-lg flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            <p className="font-semibold text-sm text-black">{badge.hoverContent}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mx-auto grid grid-rows-3">
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="border-t border-white/10 flex justify-between group"
        >
          <button className="w-full flex justify-between items-center py-4 text-left text-lg font-normal focus:outline-none transition">
            <span className="justify-self-center">{row}</span>
            <span
              className="
        flex items-center justify-center
        text-2xl border border-transparent
        rounded-full
        w-10 h-10
        transition-all duration-200
        group-hover:bg-white group-hover:text-black
      "
            >
              +
            </span>
          </button>
        </div>

      ))}
      <div className="border-t border-white/10 flex justify-between mt-1"></div>
    </div>

    {/* Bottom row */}
    <div className="mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 items-center text-xs text-white/60">
      <div className="text-base">
        © Halo Lab. All rights reserved
      </div>
      <div className="flex gap-6 mt-3 sm:mt-0 text-base w-full">
        {[
          { label: "Manage cookies", href: "#" },
          { label: "Terms and Conditions", href: "#" },
          { label: "Privacy Policy", href: "#" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
        flex items-center justify-center border border-white rounded-2xl w-50 h-12 text-center
        hover:bg-white hover:text-[#3813c2] hover:shadow-md 
        transition-all duration-200
      "
          >
            {item.label}
          </a>
        ))}
      </div>

    </div>
  </footer>
);

export default FooterSection;
