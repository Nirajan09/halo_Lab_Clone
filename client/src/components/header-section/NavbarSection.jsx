import { useState } from "react";
import { useMemoizedCallback } from "../../utils";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import ContactButton from "./ContactButton";
import HamburgerToggle from "./HamburgerToggle";
import ServicesDropdown from "./ServicesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import MobileMenuContainer from "./MobileMenuContainer";

import {
  DESIGN_SERVICES as DESIGN_COLUMNS,
  DEVELOPMENT_SERVICES as DEV_COLUMNS,
  RESOURCE_ITEMS as RESOURCE_COLUMNS,
  STATIC_LINKS
} from "../../data/navbarMenuData";

const NavbarSection = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isHamBurgerOpen, setIsHamBurgerOpen] = useState(false);

  // memoized handlers
  const openServices = useMemoizedCallback(() => {
    setIsServicesOpen(true);
    setIsResourcesOpen(false);
  }, []);
  const openResources = useMemoizedCallback(() => {
    setIsResourcesOpen(true);
    setIsServicesOpen(false);
  }, []);
  const closeDropdowns = useMemoizedCallback(() => {
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
  }, []);
  const toggleHamburger = () => setIsHamBurgerOpen((v) => !v);
  const handleHamburgerKeyDown = useMemoizedCallback((e) => {
    if (e.key === "Enter" || e.key === " ") toggleHamburger();
  }, []);

  return (
    <header
      className={`relative text-white flex justify-between items-center flex-wrap border-t border-b border-white w-full mt-6 z-[1000] py-4 ${
        isServicesOpen || isHamBurgerOpen || isResourcesOpen ? "border-b-0" : ""
      }`}
      onMouseLeave={closeDropdowns}
      aria-label="Main Navigation"
    >
      <NavbarLogo />

      <nav className="flex-1 flex justify-center max-lg:hidden" aria-label="Primary">
        <ul className="flex list-none gap-2 p-0 m-0 flex-wrap">
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

            <ServicesDropdown
              isOpen={isServicesOpen}
              onMouseEnter={openServices}
              onMouseLeave={() => setIsServicesOpen(false)}
              designColumns={DESIGN_COLUMNS}
              devColumns={DEV_COLUMNS}
            />
          </li>

          <NavbarLinks links={STATIC_LINKS} />

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

            <ResourcesDropdown
              isOpen={isResourcesOpen}
              onMouseEnter={openResources}
              onMouseLeave={() => setIsResourcesOpen(false)}
              resourceColumns={RESOURCE_COLUMNS}
            />
          </li>
        </ul>
      </nav>

      <ContactButton />

      <HamburgerToggle
        isOpen={isHamBurgerOpen}
        toggle={toggleHamburger}
        onKeyDown={handleHamburgerKeyDown}
      />

      {isHamBurgerOpen && (
        <MobileMenuContainer
          setIsHamBurgerOpen={setIsHamBurgerOpen}
          setIsServicesOpen={setIsServicesOpen}
        />
      )}
    </header>
  );
};

export default NavbarSection;
