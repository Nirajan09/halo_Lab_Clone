import { lazy, Suspense } from "react";

const LazyAvatar = lazy(() => import("../lazyloading-utils/LazyAvatar"));

const awards = [
  {
    subtitle: "4.9 AVG. SCORE BASED ON 80+ REVIEWS",
    image:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/66e0344627580704633cecfb_award-color-clutch.svg",
  },
  {
    subtitle: "TOP RATED COMPANY WITH 100% JOB SUCCESS",
    image:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/66d9d649ca478502f2b11fc1_award-color-upwork.svg",
  },
  {
    subtitle: "FEATURED WEB DESIGN AGENCY IN UAE",
    image:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/66d9d649c65781f52fc3f9ff_award-color-sortlist.svg",
  },
  {
    subtitle: "TOP DESIGN AGENCY WORLDWIDE",
    image:
      "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/66e41801230bc5baa05c898b_award-color-dribbble.svg",
  },
];

const ProjectDiscussionSection = () => (
  <section
    className="
      section 
      lg:h-screen h-1/2 
      bg-gradient-to-br from-[#5a59b7] to-[#9164e6] 
      rounded-[3rem] md:rounded-[5rem] 
      p-6 md:p-12 
      flex flex-col items-center justify-center
    "
  >
    {/* Main Card */}
    <article className="bg-white rounded-[2.5rem] rounded-tr-[4rem] p-8 md:p-16 w-full max-w-4xl flex flex-col items-center shadow-lg mb-12">
      <h2 className="text-[#15122E] text-3xl md:text-5xl lg:text-[50px] font-medium text-center mb-6">
        Ready to discuss <br className="hidden md:block" /> your project with us?
      </h2>
      <p className="text-[#15122E] opacity-80 text-base md:text-xl text-center mb-8 max-w-2xl leading-relaxed">
        Let's talk about how we can craft a user experience that not <br /> only looks great but drives real growth for your product.
      </p>
      <button
        type="button"
        className="
          cursor-pointer 
          bg-[#3813c2] text-white rounded-full px-8 py-3 
          flex items-center font-normal text-base 
          transition-all duration-200 
          hover:bg-[#2f0ba5] hover:scale-105 hover:shadow-lg 
          focus:outline-none focus:ring-4 focus:ring-[#2f0ba5] 
          focus:ring-opacity-50
        "
        aria-label="Book a call"
      >
        BOOK A CALL
      </button>
    </article>

    {/* Awards Grid */}
    <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center mb-4">
      {awards.map((award, idx) => (
        <div key={idx} className="flex flex-col items-center gap-4">
          <Suspense fallback={<div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />}>
            <LazyAvatar src={award.image} alt={award.subtitle} />
          </Suspense>
          <div className="text-white text-xs md:text-sm opacity-70 uppercase tracking-tight">
            {award.subtitle}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectDiscussionSection;
