const stats = [
  {
    value: "$530M",
    label: (
      <>
        Total funds raised<br />
        by our clients
      </>
    ),
    labelText: "Total funds raised by our clients",
  },
  {
    value: "500+",
    label: (
      <>
        Completed projects<br />
        across industries
      </>
    ),
    labelText: "Completed projects across industries",
  },
  {
    value: "$25.86B",
    label: (
      <>
        Recent market cap of our<br />
        biggest client
      </>
    ),
    labelText: "Recent market cap of our biggest client",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 section">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          aria-label={stat.labelText}
          className="
            rounded-2xl bg-[#2F1F4A] px-8 py-8 shadow-lg min-w-[270px] relative flex flex-col items-start
            transition-colors duration-300
            hover:bg-[#3b2660] hover:border-[#FDC448] hover:shadow-xl
            border border-transparent
          "
        >
          <div className="text-[2.5rem] font-bold text-[#FDC448] mb-4 font-sans leading-none">
            {stat.value}
          </div>
          <hr className="border-[#68568B] opacity-60 mb-4 w-full transition-colors duration-300 group-hover:border-[#FDC448]" />
          <div className="text-base md:text-lg text-[#DFD7F9] font-semibold leading-snug">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
