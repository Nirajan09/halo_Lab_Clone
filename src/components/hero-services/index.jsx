import { RiArrowRightUpLine } from "react-icons/ri";
const HeroServicesSection = () => (

  <div className="section min-h-[30vh] flex flex-col items-center justify-center">
    {/* Headline */}
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-normal w-full  text-white leading-tight">
        WE TAKE PRODUCTS FROM ZERO TO HERO
      </h1>
    </div>

    {/* Services Cards */}
    <div className="flex flex-col sm:flex-row gap-8 bg-[#FFFFFF] rounded-2xl p-6 md:p-10  w-full">
      {/* Design Card */}
      <div className="flex-1 rounded-xl px-4 py-6 shadow relative bg-[#F5F5F7]">
        <div className="flex items-center justify-between mb-4 border-b border-[#b3b3b8] w-full pb-3">
          <span className="text-xl font-semibold ">Design</span>
        </div>
        <ul>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base ">UI/UX design</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base ">Web design</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base ">Mobile app design</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base ">Landing page design</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="text-base">Branding</span>
            <RiArrowRightUpLine />
          </li>
        </ul>
      </div>
      {/* Development Card */}
      <div className="flex-1 bg-[#F5F5F7] rounded-xl p-6 shadow relative">
        <div className="flex items-center justify-between mb-4 border-b border-[#b3b3b8] w-full pb-3">
          <span className="text-xl font-semibold ">Development</span>
        </div>
        <ul>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base  " >Web development</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base ">Software development</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base ">CMS development</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2 border-b border-[#b3b3b8] w-full pb-3">
            <span className="text-base ">Webflow development</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex items-center justify-between py-2">
            <span className="text-base">Mobile development</span>
            <RiArrowRightUpLine />
          </li>
        </ul>
      </div>
    </div>

    {/* Call to Action */}
    <div className="flex items-center flex-col sm:flex-row justify-between rounded-2xl bg-[#231B41] px-6 py-4 w-full mx-auto mt-8 shadow-md">
      <div className="flex justify-between items-center gap-6 mb-4 sm:mb-0 ">
        <span className="flex items-center justify-center w-10 h-10 rounded-full">
          <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656d9abe1664aff65f24a621_icon-halo.svg" loading="lazy" alt="" className="hidden sm:block"></img>
        </span>
        <span className="text-white text-sm md:text-base lg:text-lg font-medium">
          Need <span className="font-bold">bold design</span> or <span className="font-bold">reliable code</span> or both? You're in the right place.
        </span>
      </div>
      <button
        className="ml-6 px-5 py-2  bg-yellow-400 text-[#191531] rounded-full shadow transition hover:bg-yellow-300 focus:outline-none"
        type="button"
      >
        BOOK A CALL
      </button>
    </div>

  </div>
);

export default HeroServicesSection;
