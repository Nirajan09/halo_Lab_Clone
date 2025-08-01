import { memo } from "react";
import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  return (
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
          width={40}
          height={40}
          decoding="async"
          aria-hidden="true"
          draggable={false}
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
        onClick={() => navigate("/contact")}
      >
        BOOK A CALL
      </button>
    </div>
  );
}

export default memo(CallToAction);
