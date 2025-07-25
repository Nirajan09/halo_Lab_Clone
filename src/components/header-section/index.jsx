import { useState, useCallback, memo } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine, RiArrowDropUpLine, RiArrowDropRightLine } from "react-icons/ri";
import Menu from "./Menu";

// Static arrays declared outside component for referential stability
const DESIGN_COLUMNS = [
  ["UI/UX design", "Product audit", "Branding", "Rebranding"],
  ["Web design", "Landing page design", "Mobile app design", "Pitch deck design"],
];

const DEV_COLUMNS = [
  ["Web development", "Webflow development", "MVP development", "CMS development"],
  ["Software development", "Mobile app development", "Chatbot development", "Cloud app development"],
];

const RESOURCE_COLUMNS = ["Our Blog", "Open Source"];

// Avoid recreating handlers on every render
const NavbarSection = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isHamBurgerOpen, setIsHamBurgerOpen] = useState(false);

  // Callback handlers to avoid unnecessary function re-creations
  const openServices = useCallback(() => {
    setIsServicesOpen(true);
    setIsResourcesOpen(false);
  }, []);
  const openResources = useCallback(() => {
    setIsResourcesOpen(true);
    setIsServicesOpen(false);
  }, []);
  const closeDropdowns = useCallback(() => {
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
  }, []);

  // Keyboard accessibility: toggle hamburger on Enter/Space
  const handleHamburgerKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") setIsHamBurgerOpen((v) => !v);
    },
    []
  );

  return (
    <header
      className={`relative text-white flex justify-between items-center flex-wrap border-t border-b border-white w-full mt-6 z-[1000] py-4 ${isServicesOpen || isHamBurgerOpen || isResourcesOpen ? "border-b-0" : ""
        }`}
      onMouseLeave={closeDropdowns}
      aria-label="Main Navigation"
    >
      {/* Logo */}
      <div className="font-bold text-lg cursor-pointer" tabIndex={0} aria-label="Go to home">
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg"
            alt="Halo Lab Logo"
            className="h-8"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </a>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 flex justify-center max-lg:hidden" aria-label="Primary">
        <ul className="flex list-none gap-2 p-0 m-0 flex-wrap">
          {/* SERVICES Dropdown */}
          <li
            className="relative flex items-center uppercase"
            onMouseEnter={openServices}
            onMouseLeave={() => setIsServicesOpen(false)}
            id="services"
          >
            <button
              className="flex items-center px-2 h-10 font-medium hover:text-[#FDC448] transition-colors bg-transparent border-none cursor-pointer"
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              aria-controls="services-dropdown"
              tabIndex={0}
              type="button"
            >
              Services{" "}
              {isServicesOpen ? (
                <RiArrowDropUpLine className="ml-1" size={20} />
              ) : (
                <RiArrowDropDownLine className="ml-1" size={20} />
              )}
            </button>
            {isServicesOpen && (
              <div
                id="services-dropdown"
                className="absolute top-[81%] left-[18vw] -translate-x-1/2 mt-2 w-[1100px] max-w-[95vw] flex bg-white text-black p-8 rounded-2xl shadow-2xl justify-center z-50"
                onMouseEnter={openServices}
                onMouseLeave={() => setIsServicesOpen(false)}
                role="menu"
                aria-label="Design and Development"
              >
                {/* Design Column */}
                <div className="w-1/2 pr-8">
                  <h4 className="mb-2 ml-2 text-base font-bold">Design</h4>
                  <div className="flex gap-4">
                    {DESIGN_COLUMNS.map((col, idx) => (
                      <div className="w-1/2" key={`design-col-${idx}`}>
                        {col.map((text) => (
                          <div
                            className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition group"
                            key={text}
                            role="menuitem"
                            tabIndex={0}
                          >
                            <span>{text}</span>
                            <RiArrowDropRightLine
                              className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]"
                              size={24}
                              aria-hidden="true"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Development Column */}
                <div className="w-1/2 pl-8 border-l border-gray-200">
                  <h4 className="mb-2 ml-2 text-base font-bold">Development</h4>
                  <div className="flex gap-4">
                    {DEV_COLUMNS.map((col, idx) => (
                      <div className="w-1/2" key={`dev-col-${idx}`}>
                        {col.map((text) => (
                          <div
                            className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition group"
                            key={text}
                            role="menuitem"
                            tabIndex={0}
                          >
                            <span>{text}</span>
                            <RiArrowDropRightLine
                              className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]"
                              size={24}
                              aria-hidden="true"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Static menu items */}
          {["Projects", "Dedicated Team"].map((item) => (
            <li key={item}>
              <a
                href="/"
                className="uppercase text-[13px] px-2 h-10 flex items-center font-medium hover:text-[#FDC448] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}

          {/* RESOURCES Dropdown */}
          <li
            className="relative flex items-center uppercase"
            onMouseEnter={openResources}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button
              className="flex items-center px-2 h-10 font-medium hover:text-[#FDC448] transition-colors bg-transparent border-none cursor-pointer"
              aria-haspopup="true"
              aria-expanded={isResourcesOpen}
              aria-controls="resources-dropdown"
              tabIndex={0}
              type="button"
            >
              Resources{" "}
              {isResourcesOpen ? (
                <RiArrowDropUpLine className="ml-1" size={20} />
              ) : (
                <RiArrowDropDownLine className="ml-1" size={20} />
              )}
            </button>
            {isResourcesOpen && (
              <div
                id="resources-dropdown"
                className="absolute top-[81%] left-[6vw] -translate-x-1/2 w-[20vw] min-w-[220px] flex bg-white text-black p-8 rounded-2xl shadow-2xl z-50"
                onMouseEnter={openResources}
                onMouseLeave={() => setIsResourcesOpen(false)}
                role="menu"
                aria-label="Resources"
              >
                <div className="w-full">
                  <div className="flex flex-col">
                    {RESOURCE_COLUMNS.map((text) => (
                      <div
                        className="flex items-center justify-between py-2 px-3 font-medium text-[15px] rounded hover:bg-gray-100 cursor-pointer transition group"
                        key={text}
                        role="menuitem"
                        tabIndex={0}
                      >
                        <span>{text}</span>
                        <RiArrowDropRightLine
                          className="opacity-0 group-hover:opacity-100 transition text-[#5125ff]"
                          size={24}
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <a
              href="/"
              className="uppercase text-[13px] px-2 h-10 flex items-center font-medium hover:text-[#FDC448] transition-colors"
            >
              Pricing
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <div>
        <button
          className="bg-white text-black px-3 py-1 rounded-full font-bold cursor-pointer transition-all text-base hover:bg-[#FDC448] hover:text-[#0a0826] hover:shadow-lg hover:scale-105"
          type="button"
        >
          Contact Us
        </button>
      </div>

      {/* Hamburger Icon */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsHamBurgerOpen((v) => !v)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={handleHamburgerKeyDown}
      >
        {!isHamBurgerOpen ? <RxHamburgerMenu size={28} /> : <RxCross2 size={28} />}
      </div>

      {/* Mobile Menu Overlay */}
      {isHamBurgerOpen && (
        <div className="absolute left-0 top-full w-full z-40">
          <Menu setIsHamBurgerOpen={setIsHamBurgerOpen} setIsServicesOpen={setIsServicesOpen} />
        </div>
      )}
    </header>
  );
};

NavbarSection.displayName = "NavbarSection";
export default memo(NavbarSection);
