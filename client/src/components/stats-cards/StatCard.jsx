export default function StatCard({ value, label, labelText }) {
  return (
    <article
      aria-label={labelText}
      tabIndex={0}
      role="region"
      className="
        rounded-2xl bg-[#2F1F4A] px-8 py-8 shadow-lg min-w-[270px] relative flex flex-col items-start
        transition-colors duration-300
        hover:bg-[#3b2660] hover:border-[#FDC448] hover:shadow-xl
        border border-transparent
        group
      "
    >
      <div className="text-[2.5rem] font-bold text-[#FDC448] mb-4 font-sans leading-none select-none">
        {value}
      </div>
      <hr className="border-[#68568B] opacity-60 mb-4 w-full transition-colors duration-300 group-hover:border-[#FDC448]" />
      <div className="text-base md:text-lg text-[#DFD7F9] font-semibold leading-snug">
        {label}
      </div>
    </article>
  );
}
