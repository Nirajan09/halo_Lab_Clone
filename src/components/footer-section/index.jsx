import React from "react";

const badges = [
    {
        imageUrl: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d63873a54388b12ef_footer-label_clutch.svg",
        hoverContent: '80 + Reviews',
    },
    {
        imageUrl: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d7c0d6dab48f949a9_footer-label_goodfirms.svg",
        hoverContent: 'Top Web Developer',
    },
    {
        imageUrl: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f514abf1b2f19d9f66915_footer-label_designrush.svg",
        hoverContent: 'Winner 2023-2024',
    },
    {
        imageUrl: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d33c7c5c812c1642b_footer-label_dribbble.svg",
        hoverContent: 'Top WorldWide',
    },
    {
        imageUrl: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d42950a479c0f2302_footer-label_webflow.svg",
        hoverContent: 'Pro Partner',
    },
    {
        imageUrl: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513d611664f27fe65fbc_footer-label_prismic.svg",
        hoverContent: 'Pro Partner',
    },
    {
        imageUrl: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513df04de844e1461fb2_footer-label_sanity.svg",
        hoverContent: 'Pro Partner',
    },
];

const FooterSection = () => (
    <footer className="section w-full pt-8 pb-4 text-white">
        {/* Badges*/}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 justify-items-center mb-6">
            {badges.map((badge, idx) => (
                <div key={idx} className="group">
                    <div className="flex items-center bg-[#191A2E] rounded-lg group-hover:hidden">
                        <img src={badge.imageUrl} alt="" lazy="loading" className="w-full" />
                    </div>
                    <div className="bg-[#fbfbfd] cursor-pointer text-black rounded-lg hidden group-hover:flex w-40 h-12 items-center justify-center text-center">
                        <p className="font-semibold text-sm">{badge.hoverContent}</p>
                    </div>
                </div>
            ))}
        </div>


        <div className="mx-auto grid grid-rows-3">
            <div className="border-t border-white/10 flex justify-between group">
                <button className="w-full flex justify-between items-center py-4 text-left text-lg font-normal focus:outline-none">
                    <span className="col-span-1 justify-self-center">Show all services</span>
                    <span className="col-span-1 text-2xl justify-self-end border
                    border-transparent group-hover:rounded-full px-3 py-1 group-hover:bg-white group-hover:text-black">+</span>
                </button>
            </div>
            <div className="border-t border-white/10 flex justify-between group">
                <button className="w-full flex justify-between items-center py-4 text-left text-lg font-normal focus:outline-none">
                    <span className="col-span-1 justify-self-center">Show all technologies</span>
                    <span className="col-span-1 text-2xl justify-self-end border
                    border-transparent group-hover:rounded-full px-3 py-1 group-hover:bg-white group-hover:text-black">+</span>
                </button>
            </div>
            <div className="border-t border-white/10 flex justify-between group">
                <button className="w-full flex justify-between items-center py-4 text-left text-lg font-normal focus:outline-none">
                    <span className="col-span-1 justify-self-center">Show all industries</span>
                    <span className="col-span-1 text-2xl justify-self-end border
                    border-transparent group-hover:rounded-full px-3 py-1 group-hover:bg-white group-hover:text-black">+</span>
                </button>
            </div>
            <div className="border-t border-white/10 flex justify-between mt-1"></div>
        </div>

        {/* Bottom row */}
        <div className="mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 items-center text-xs text-white/60 ">
            <div className="text-base">© Halo Lab. All rights reserved</div>
            <div className="flex gap-6 mt-3 sm:mt-0 text-base w-full">
  <a
    href="#"
    className="flex items-center justify-center hover:underline border border-white rounded-2xl w-50 text-center h-12"
  >
    Manage cookies
  </a>
  <a
    href="#"
    className="flex items-center justify-center hover:underline border border-white rounded-2xl w-50 text-center h-12"
  >
    Terms and Conditions
  </a>
  <a
    href="#"
    className="flex items-center justify-center hover:underline border border-white rounded-2xl w-50 text-center h-12"
  >
    Privacy Policy
  </a>
</div>

        </div>
    </footer>
);

export default FooterSection;
