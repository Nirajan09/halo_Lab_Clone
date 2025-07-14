import { RiArrowRightUpLine } from "react-icons/ri";
const HeroServices = () => (
  
  <div className="my-container section min-h-[30vh] flex flex-col items-center justify-center py-4 ">
    {/* Headline */}
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-normal w-full  text-white leading-tight">
        WE TAKE PRODUCTS FROM ZERO TO HERO
      </h1>
    </div>

      {/* Services Cards */}
    <div className="flex flex-col sm:flex-row gap-8 bg-[#FFFFFF] rounded-2xl p-6 md:p-10 max-w-4xl w-full">
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
    <div className="mt-10 w-full flex justify-center p-6 pb-0 md:p-10 max-w-4xl">
      <div className="flex flex-1 flex-col sm:flex-row justify-between sm:justify-between items-center bg-[#221B40] rounded-xl px-6 py-4 gap-6 shadow-lg">
        <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656d9abe1664aff65f24a621_icon-halo.svg" loading="lazy" alt="" className="hidden sm:block"></img>
        <span className="text-white text-base font-medium">
          Need bold design or reliable code or both? You're in the right place.
        </span>
        <button className="bg-[#ffc23c] hover:bg-[#ffb300] text-[#19163a] text-base rounded-full px-12 py-2 transition">
          BOOK A CALL
        </button>
      </div>
    </div>
  </div>
);

export default HeroServices;
