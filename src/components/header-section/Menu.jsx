import { useState, useCallback, memo } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

// Data for services and resources, declared outside for stability/reusability
const DESIGN_SERVICES = [
  "UI/UX design", "Product audit", "Branding", "Rebranding",
  "Web design", "Landing page design", "Mobile app design", "Pitch deck design"
];
const DEVELOPMENT_SERVICES = [
  "Web development", "Webflow development", "MVP development", "CMS development",
  "Software development", "Mobile app development", "Chatbot development", "Cloud app development"
];
const RESOURCE_ITEMS = ["Our Blog", "Open Source"];

const Menu = () => {
  const [open, setOpen] = useState(""); // "" | "services" | "resources"

  // Handlers are stable (memoized)
  const openServices = useCallback(() => setOpen("services"), []);
  const openResources = useCallback(() => setOpen("resources"), []);
  const close = useCallback(() => setOpen(""), []);

  // Accessible Row item
  const NavRow = ({ children, onClick, rightIcon, ...props }) => (
    <li
      className="flex items-center text-2xl font-semibold text-gray-900 mb-4 cursor-pointer select-none transition hover:text-indigo-600"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && onClick && onClick()}
      role="menuitem"
      {...props}
    >
      <span className="flex-1">{children}</span>
      {rightIcon}
    </li>
  );

  return (
    <>
      {/* Main Menu */}
      {open === "" && (
        <nav
          className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-8 z-50"
          aria-label="Mobile Navigation"
        >
          <ul className="list-none m-0 p-0" role="menu">
            <NavRow onClick={openServices} rightIcon={<RiArrowDropRightLine size={28} />}>Services</NavRow>
            <NavRow>Projects</NavRow>
            <NavRow>Dedicated team</NavRow>
            <NavRow>Pricing</NavRow>
            <NavRow onClick={openResources} rightIcon={<RiArrowDropRightLine size={28} />}>Resources</NavRow>
          </ul>
        </nav>
      )}

      {/* Services Menu */}
      {open === "services" && (
        <nav
          className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-6 z-50 h-[55vh] overflow-auto"
          aria-label="Services"
        >
          <div
            className="flex items-center justify-between text-2xl font-medium mb-5 cursor-pointer text-gray-900"
            tabIndex={0}
            onClick={close}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && close()}
            role="button"
            aria-label="Back to main menu"
          >
            Back <RiArrowDropLeftLine size={28} />
          </div>
          <hr className="border border-gray-300 mb-4" />
          <div className="flex flex-col gap-6">
            {/* DESIGN */}
            <div>
              <h4 className="text-gray-400 text-base leading-tight tracking-wide mb-3 font-normal">DESIGN</h4>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-1/2">
                  {DESIGN_SERVICES.slice(0, 4).map(text => (
                    <div key={text} className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition hover:text-indigo-600" tabIndex={0}>{text}</div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  {DESIGN_SERVICES.slice(4).map(text => (
                    <div key={text} className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition hover:text-indigo-600" tabIndex={0}>{text}</div>
                  ))}
                </div>
              </div>
            </div>
            {/* DEVELOPMENT */}
            <div>
              <h4 className="text-gray-400 text-base leading-tight tracking-wide mb-3 font-normal">DEVELOPMENT</h4>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-1/2">
                  {DEVELOPMENT_SERVICES.slice(0, 4).map(text => (
                    <div key={text} className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition hover:text-indigo-600" tabIndex={0}>{text}</div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  {DEVELOPMENT_SERVICES.slice(4).map(text => (
                    <div key={text} className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition hover:text-indigo-600" tabIndex={0}>{text}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Resources Menu */}
      {open === "resources" && (
        <nav
          className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-6 z-50 h-[55vh] overflow-auto"
          aria-label="Resources"
        >
          <div
            className="flex items-center justify-between text-2xl font-medium mb-5 cursor-pointer text-gray-900"
            tabIndex={0}
            onClick={close}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && close()}
            role="button"
            aria-label="Back to main menu"
          >
            Back <RiArrowDropLeftLine size={28} />
          </div>
          <hr className="border border-gray-300 mb-4" />
          <div className="flex gap-2">
            {RESOURCE_ITEMS.map((text, i) => (
              <div className="flex flex-col w-1/2" key={i}>
                <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600" tabIndex={0}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

Menu.displayName = "Menu";
export default memo(Menu);
