import { RiArrowDropLeftLine } from "react-icons/ri";

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
  "Software development",
  "Mobile app development",
  "Chatbot development",
];

const MobileServiceList = ({ onBack }) => {
  return (
    <div className="absolute top-[70px] left-0 w-[96%] bg-white rounded-2xl shadow-lg p-6 z-50 h-[55vh] overflow-auto">
      {/* Back Button */}
      <div
        className="flex items-center gap-2 text-2xl font-medium mb-5 cursor-pointer text-gray-900"
        onClick={onBack}
      >
        Back <RiArrowDropLeftLine size={28} />
      </div>
      {/* Separator */}
      <hr className="border border-gray-300 mb-5" />
      {/* Sections */}
      <div className="flex flex-col gap-8">
        {/* DESIGN */}
        <div>
          <h4 className="text-gray-400 text-base tracking-wide mb-3 font-normal">
            DESIGN
          </h4>
          <div className="flex flex-wrap gap-2">
            {designServices.map((service, idx) => (
              <div
                className="text-gray-900 font-medium text-base py-4 px-2 cursor-pointer transition-colors hover:text-indigo-600"
                key={idx}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
        {/* DEVELOPMENT */}
        <div>
          <h4 className="text-gray-400 text-base tracking-wide mb-3 font-normal">
            DEVELOPMENT
          </h4>
          <div className="flex flex-wrap gap-2">
            {developmentServices.map((service, idx) => (
              <div
                className="text-gray-900 font-medium text-base py-4 px-2 cursor-pointer transition-colors hover:text-indigo-600"
                key={idx}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceList;
