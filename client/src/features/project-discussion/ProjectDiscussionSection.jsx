import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { awards as awardsData } from "./awardsData";
import AwardCard from "./AwardCard";

const ProjectDiscussionSection = () => {
  const awards = useMemoizedValue(() => awardsData, []);

  return (
    <section
      className="section lg:h-screen h-1/2 bg-gradient-to-br from-[#5a59b7] to-[#9164e6] rounded-[3rem] md:rounded-[5rem] p-6 md:p-12 flex flex-col items-center justify-center
      "
      aria-labelledby="project-discuss-heading"
    >
      <article className="bg-white rounded-[2.5rem] rounded-tr-[4rem] p-8 md:p-16 w-full max-w-4xl flex flex-col items-center shadow-lg mb-12">
        <h2
          id="project-discuss-heading"
          className="text-[#15122E] text-3xl md:text-5xl lg:text-[50px] font-medium text-center mb-6"
        >
          Ready to discuss <br className="hidden md:block" /> your project with
          us?
        </h2>
        <p className="text-[#15122E] opacity-80 text-base md:text-xl text-center mb-8 max-w-2xl leading-relaxed">
          Let's talk about how we can craft a user experience that not <br />{" "}
          only looks great but drives real growth for your product.
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
          <AwardCard key={idx} subtitle={award.subtitle} image={award.image} />
        ))}
      </div>
    </section>
  );
};

export default memo(ProjectDiscussionSection);
