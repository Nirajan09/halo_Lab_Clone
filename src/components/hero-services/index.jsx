import { RiArrowRightUpLine } from "react-icons/ri";

const designServices = [
  "UI/UX design",
  "Web design",
  "Mobile app design",
  "Landing page design",
  "Branding",
];

const devServices = [
  "Web development",
  "Software development",
  "CMS development",
  "Webflow development",
  "Mobile development",
];

const HeroServicesSection = () => (
  <section className="section min-h-[30vh] flex flex-col items-center justify-center">
    {/* Headline */}
    <header className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-normal text-white leading-tight">
        WE TAKE PRODUCTS FROM ZERO TO HERO
      </h1>
    </header>

    {/* Services Cards */}
    <div className="flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-6 md:p-10 w-full">
      {/* Design Card */}
      <article className="flex-1 rounded-xl px-4 py-6 shadow relative bg-[#F5F5F7]">
        <h2 className="flex items-center justify-between mb-4 border-b border-[#b3b3b8] w-full pb-1 text-xl font-semibold">
          Design
        </h2>
        <ul>
          {designServices.map((label, i) => (
            <li
              key={label}
              className={`cursor-pointer flex items-center justify-between py-2 ${
                i < designServices.length - 1 ? "border-b border-[#b3b3b8] pb-1" : ""
              } w-full group`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && alert(`Selected ${label}`)}
              aria-label={label}
            >
              <span className="text-base">{label}</span>
              <RiArrowRightUpLine
                className="opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </article>

      {/* Development Card */}
      <article className="flex-1 bg-[#F5F5F7] rounded-xl p-6 shadow relative">
        <h2 className="flex items-center justify-between mb-4 border-b border-[#b3b3b8] w-full pb-1 text-xl font-semibold">
          Development
        </h2>
        <ul>
          {devServices.map((label, i) => (
            <li
              key={label}
              className={`cursor-pointer flex items-center justify-between py-2 ${
                i < devServices.length - 1 ? "border-b border-[#b3b3b8] pb-1" : ""
              } w-full group`}
              role="button"
              tabIndex={0}
              onClick={() => alert(`Selected ${label}`)}
              aria-label={label}
            >
              <span className="text-base">{label}</span>
              <RiArrowRightUpLine
                className="opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </article>
    </div>

    {/* Call to Action */}
    <div
      className="
        flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-[#231B41] 
        px-6 py-4 w-full mx-auto mt-8 shadow-md
        transition-colors duration-200 delay-150 hover:bg-[#362865]
      "
    >
      <div className="flex items-center gap-6 mb-4 sm:mb-0">
        <img
          src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656d9abe1664aff65f24a621_icon-halo.svg"
          alt=""
          loading="lazy"
          className="hidden sm:block w-10 h-10"
          aria-hidden="true"
        />
        <p className="text-white text-sm md:text-base lg:text-lg font-medium">
          Need <strong>bold design</strong> or <strong>reliable code</strong> or both? You're in the right place.
        </p>
      </div>
      <button
        className="
          cursor-pointer ml-6 px-5 py-2 bg-yellow-400 text-[#191531] rounded-full shadow 
          transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300
          text-sm md:text-base lg:text-lg font-normal whitespace-nowrap
        "
        type="button"
        aria-label="Book a call"
      >
        BOOK A CALL
      </button>
    </div>
  </section>
);

export default HeroServicesSection;
