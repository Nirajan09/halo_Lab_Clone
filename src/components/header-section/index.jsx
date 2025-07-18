import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine, RiArrowDropUpLine, RiArrowDropRightLine } from "react-icons/ri";
import Menu from "./Menu";

const NavbarSection = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isHamBurgerOpen, setIsHamBurgerOpen] = useState(false);

  // Dropdown column data
  const designColumns = [
    ["UI/UX design", "Product audit", "Branding", "Rebranding"],
    ["Web design", "Landing page design", "Mobile app design", "Pitch deck design"],
  ];
  const devColumns = [
    ["Web development", "Webflow development", "MVP development", "CMS development"],
    ["Software development", "Mobile app development", "Chatbot development", "Cloud app development"],
  ];
  const resourceColumns = [["Our Blog", "Open Source"]];

  return (
    <header
      className={`
        relative text-white flex justify-between items-center flex-wrap border-t border-b border-white w-full  mt-6 z-[1000] py-[1rem]
        ${isServicesOpen || isHamBurgerOpen ? "border-b-0" : ""}
      `}
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      {/* Logo */}
      <div className="font-bold text-lg cursor-pointer">
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg"
            alt="Halo Lab Logo"
            className="h-8"
          />
        </a>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 flex justify-center max-lg:hidden">
        <ul className="flex list-none gap-2 p-0 m-0 flex-wrap">
          {/* SERVICES */}
          <li
            className="relative flex items-center uppercase text-[13px]"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            id="services"
          >
            <a href="/" className="flex items-center px-2 h-10 font-medium hover:text-[#FDC448] transition-colors">
              Services{" "}
              {isServicesOpen ? (
                <RiArrowDropUpLine className="ml-1" size={20} />
              ) : (
                <RiArrowDropDownLine className="ml-1" size={20} />
              )}
            </a>
            {/* SERVICES DROPDOWN */}
            {isServicesOpen && (
              <div
                className="absolute top-[150%] left-[260%] -translate-x-1/2 w-[80vw] flex bg-white text-black p-8 rounded-2xl shadow-2xl justify-center z-50"
                onMouseEnter={() => {
                  setIsServicesOpen(true);
                  setIsResourcesOpen(false);
                }}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {/* DESIGN COLUMN */}
                <div className="w-1/2 pr-8">
                  <h4 className="mb-2 ml-2 text-base font-bold">Design</h4>
                  <div className="flex gap-4">
                    {designColumns.map((col, idx) => (
                      <div className="w-1/2" key={idx}>
                        {col.map((text) => (
                          <div
                            className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition"
                            key={text}
                          >
                            <span>{text}</span>
                            <RiArrowDropRightLine className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]" size={24} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {/* DEVELOPMENT COLUMN */}
                <div className="w-1/2 pl-8 border-l border-gray-200">
                  <h4 className="mb-2 ml-2 text-base font-bold">Development</h4>
                  <div className="flex gap-4">
                    {devColumns.map((col, idx) => (
                      <div className="w-1/2" key={idx}>
                        {col.map((text) => (
                          <div
                            className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition"
                            key={text}
                          >
                            <span>{text}</span>
                            <RiArrowDropRightLine className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]" size={24} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* OTHER MENU ITEMS */}
          <li>
            <a href="/" className="uppercase text-[13px] px-2 h-10 flex items-center font-medium hover:text-[#FDC448] transition-colors">Projects</a>
          </li>
          <li>
            <a href="/" className="uppercase text-[13px] px-2 h-10 flex items-center font-medium hover:text-[#FDC448] transition-colors">Dedicated Team</a>
          </li>

          {/* RESOURCES (DROPDOWN) */}
          <li
            className="relative flex items-center uppercase text-[13px]"
            onMouseEnter={() => {
              setIsResourcesOpen(true);
              setIsServicesOpen(false);
            }}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <a href="/" className="flex items-center px-2 h-10 font-medium hover:text-[#FDC448] transition-colors">
              Resources{" "}
              {isResourcesOpen ? (
                <RiArrowDropUpLine className="ml-1" size={20} />
              ) : (
                <RiArrowDropDownLine className="ml-1" size={20} />
              )}
            </a>
            {isResourcesOpen && (
              <div
                className="absolute top-[140%] left-2/3 -translate-x-1/2 w-[20vw] min-w-[220px] flex bg-white text-black p-8 rounded-2xl shadow-2xl z-50"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <div className="w-full">
                  <div className="flex flex-col">
                    {resourceColumns[0].map((text) => (
                      <div
                        className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition"
                        key={text}
                      >
                        <span>{text}</span>
                        <RiArrowDropRightLine className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]" size={24} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="/" className="uppercase text-[13px] px-2 h-10 flex items-center font-medium hover:text-[#FDC448] transition-colors">Pricing</a>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <div className="block">
        <button
          className="bg-white text-black px-6 py-2 rounded-full font-bold cursor-pointer transition-all text-base hover:bg-[#FDC448] hover:text-[#0a0826] hover:shadow-lg hover:scale-105"
        >
          Contact Us
        </button>
      </div>

      {/* Hamburger Icon */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsHamBurgerOpen(!isHamBurgerOpen)}
      >
        {!isHamBurgerOpen ? <RxHamburgerMenu size={28} /> : <RxCross2 size={28} />}
      </div>

      {/* Mobile Menu Overlay */}
      {isHamBurgerOpen && (
        <div className="absolute left-0 top-full w-full">
          <Menu setIsHamBurgerOpen={setIsHamBurgerOpen} setIsServicesOpen={setIsServicesOpen} />
        </div>
      )}
    </header>
  );
};

export default NavbarSection;
