import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

export default function TestimonialNavigationButton({ direction, onClick }) {
  const isLeft = direction === "left";
  const Icon = isLeft ? FaLessThan : FaGreaterThan;
  const sideClass = isLeft ? "left-0" : "right-0";
  const label = isLeft ? "previous testimonial" : "next testimonial";

  return (
    <button
      className={`hidden md:flex absolute ${sideClass} top-1/2 -translate-y-1/2 z-10 rounded-full p-4 bg-white border border-gray-200 shadow
        opacity-0 pointer-events-none
        group-hover:opacity-100 group-hover:pointer-events-auto
        hover:bg-[#F5F5F7] hover:scale-110 transition cursor-pointer`}
      onClick={onClick}
      aria-label={label}
      type="button"
      tabIndex={0}
    >
      <Icon />
    </button>
  );
}
