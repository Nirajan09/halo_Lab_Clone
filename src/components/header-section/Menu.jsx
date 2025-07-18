import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Menu = () => {
  const [openServices, setOpenServices] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  return (
    <>
      {/* Main Menu */}
      {!openServices && !openResources && (
        <div className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-8 z-50">
          <ul className="list-none m-0 p-0">
            <li
              className="flex items-center text-2xl font-semibold text-gray-900 mb-4 cursor-pointer"
              onClick={() => setOpenServices(true)}
            >
              <span className="flex-1">Services</span>
              <RiArrowDropRightLine size={28} />
            </li>
            <li className="flex items-center text-2xl font-semibold text-gray-900 mb-4 cursor-pointer">
              <span className="flex-1">Projects</span>
            </li>
            <li className="flex items-center text-2xl font-semibold text-gray-900 mb-4 cursor-pointer">
              <span className="flex-1">Dedicated team</span>
            </li>
            <li className="flex items-center text-2xl font-semibold text-gray-900 mb-4 cursor-pointer">
              <span className="flex-1">Pricing</span>
            </li>
            <li
              className="flex items-center text-2xl font-semibold text-gray-900 mb-0 cursor-pointer"
              onClick={() => setOpenResources(true)}
            >
              <span className="flex-1">Resources</span>
              <RiArrowDropRightLine size={28} />
            </li>
          </ul>
        </div>
      )}

      {/* Services Menu */}
      {openServices && (
        <div className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-6 z-50 h-[55vh] overflow-auto">
          <div
            className="flex items-center justify-between text-2xl font-medium mb-5 cursor-pointer text-gray-900"
            onClick={() => setOpenServices(false)}
          >
            Back <RiArrowDropLeftLine size={28} />
          </div>
          <hr className="border border-gray-300 mb-4" />
          <div className="flex flex-col gap-6">
            {/* DESIGN GROUP */}
            <div>
              <h4 className="text-gray-400 text-base leading-tight tracking-wide mb-3 font-normal">
                DESIGN
              </h4>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-1/2">
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    UI/UX design
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Product audit
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Branding
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Rebranding
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Web design
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Landing page design
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Mobile app design
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Pitch deck design
                  </div>
                </div>
              </div>
            </div>

            {/* DEVELOPMENT GROUP */}
            <div>
              <h4 className="text-gray-400 text-base leading-tight tracking-wide mb-3 font-normal">
                DEVELOPMENT
              </h4>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-1/2">
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Web development
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Webflow development
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    MVP development
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    CMS development
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Software development
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Mobile app development
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Chatbot development
                  </div>
                  <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                    Cloud app development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Menu */}
      {openResources && (
        <div className="absolute top-[10px] left-[2vw] w-[96%] bg-white rounded-2xl shadow-lg p-6 z-50 h-[55vh] overflow-auto">
          <div
            className="flex items-center justify-between text-2xl font-medium mb-5 cursor-pointer text-gray-900"
            onClick={() => setOpenResources(false)}
          >
            Back <RiArrowDropLeftLine size={28} />
          </div>
          <hr className="border border-gray-300 mb-4" />
          <div className="flex gap-2">
            <div className="flex flex-col w-1/2">
              <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
                Our Blog
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="text-gray-900 font-medium text-base py-4 px-0 cursor-pointer transition-colors hover:text-indigo-600">
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
