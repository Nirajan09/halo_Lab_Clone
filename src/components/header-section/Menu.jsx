import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

// Data arrays extracted for mapping
const designServices = [
  "UI/UX design",
  "Product audit",
  "Branding",
  "Rebranding",
  "Web design",
  "Landing page design",
  "Mobile app design",
  "Pitch deck design",
];

const developmentServices = [
  "Web development",
  "Webflow development",
  "MVP development",
  "CMS development",
  "Software development",
  "Mobile app development",
  "Chatbot development",
  "Cloud app development",
];

const resources = ["Our Blog", "Open Source"];

const Menu = () => {
  const [openServices, setOpenServices] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  // Common class for menu items for consistency
  const menuItemClass =
    "text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600";

  return (
    <>
      {/* Main Menu */}
      {!openServices && !openResources && (
        <div className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-8 z-50">
          <ul className="list-none m-0 p-0">
            <li
              className="flex items-center text-2xl font-semibold mb-4 cursor-pointer"
              onClick={() => setOpenServices(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpenServices(true)}
              aria-expanded={openServices}
              aria-controls="services-menu"
            >
              <span className="flex-1">Services</span>
              <RiArrowDropRightLine size={28} aria-hidden="true" />
            </li>
            {["Projects", "Dedicated team", "Pricing"].map((item) => (
              <li
                key={item}
                className="flex items-center text-2xl font-semibold mb-4 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && alert(item + " clicked")}
                onClick={() => alert(item + " clicked")}
                aria-label={item}
              >
                <span className="flex-1">{item}</span>
              </li>
            ))}
            <li
              className="flex items-center text-2xl font-semibold mb-0 cursor-pointer"
              onClick={() => setOpenResources(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpenResources(true)}
              aria-expanded={openResources}
              aria-controls="resources-menu"
            >
              <span className="flex-1">Resources</span>
              <RiArrowDropRightLine size={28} aria-hidden="true" />
            </li>
          </ul>
        </div>
      )}

      {/* Services Menu */}
      {openServices && (
        <div
          id="services-menu"
          className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-6 z-50 h-[55vh] overflow-auto"
        >
          <button
            onClick={() => setOpenServices(false)}
            className="flex items-center justify-between text-2xl font-medium mb-5 cursor-pointer text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
            aria-label="Back to main menu"
            type="button"
          >
            Back <RiArrowDropLeftLine size={28} aria-hidden="true" />
          </button>
          <hr className="border border-gray-300 mb-4" />

          {/* DESIGN */}
          <div>
            <h4 className="text-gray-400 text-base leading-tight tracking-wide mb-3 font-normal">
              DESIGN
            </h4>
            <div className="flex gap-2">
              <div className="flex flex-col gap-1 w-1/2">
                {designServices.slice(0, 4).map((service) => (
                  <div
                    key={service}
                    className={menuItemClass}
                    role="button"
                    tabIndex={0}
                    onClick={() => alert(service + " clicked")}
                    onKeyDown={(e) => e.key === "Enter" && alert(service + " clicked")}
                    aria-label={service}
                  >
                    {service}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                {designServices.slice(4).map((service) => (
                  <div
                    key={service}
                    className={menuItemClass}
                    role="button"
                    tabIndex={0}
                    onClick={() => alert(service + " clicked")}
                    onKeyDown={(e) => e.key === "Enter" && alert(service + " clicked")}
                    aria-label={service}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DEVELOPMENT */}
          <div>
            <h4 className="text-gray-400 text-base leading-tight tracking-wide mb-3 font-normal">
              DEVELOPMENT
            </h4>
            <div className="flex gap-2">
              <div className="flex flex-col gap-1 w-1/2">
                {developmentServices.slice(0, 4).map((service) => (
                  <div
                    key={service}
                    className={menuItemClass}
                    role="button"
                    tabIndex={0}
                    onClick={() => alert(service + " clicked")}
                    onKeyDown={(e) => e.key === "Enter" && alert(service + " clicked")}
                    aria-label={service}
                  >
                    {service}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                {developmentServices.slice(4).map((service) => (
                  <div
                    key={service}
                    className={menuItemClass}
                    role="button"
                    tabIndex={0}
                    onClick={() => alert(service + " clicked")}
                    onKeyDown={(e) => e.key === "Enter" && alert(service + " clicked")}
                    aria-label={service}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Menu */}
      {openResources && (
        <div
          id="resources-menu"
          className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-6 z-50 h-[55vh] overflow-auto"
        >
          <button
            onClick={() => setOpenResources(false)}
            className="flex items-center justify-between text-2xl font-medium mb-5 cursor-pointer text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
            aria-label="Back to main menu"
            type="button"
          >
            Back <RiArrowDropLeftLine size={28} aria-hidden="true" />
          </button>
          <hr className="border border-gray-300 mb-4" />
          <div className="flex gap-2">
            <div className="flex flex-col w-1/2">
              <div
                className={menuItemClass}
                role="button"
                tabIndex={0}
                onClick={() => alert("Our Blog clicked")}
                onKeyDown={(e) => e.key === "Enter" && alert("Our Blog clicked")}
                aria-label="Our Blog"
              >
                Our Blog
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div
                className={menuItemClass}
                role="button"
                tabIndex={0}
                onClick={() => alert("Open Source clicked")}
                onKeyDown={(e) => e.key === "Enter" && alert("Open Source clicked")}
                aria-label="Open Source"
              >
                Open Source
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
