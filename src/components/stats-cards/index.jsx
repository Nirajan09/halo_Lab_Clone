const stats = [
  {
    value: "$530M",
    label: (
      <>
        Total funds raised<br />
        by our clients
      </>
    ),
  },
  {
    value: "500+",
    label: (
      <>
        Completed projects<br />
        across industries
      </>
    ),
  },
  {
    value: "$25.86B",
    label: (
      <>
        Recent market cap of our<br />
        biggest client
      </>
    ),
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 ">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-[#2F1F4A] px-8 py-8 shadow-lg min-w-[270px] relative flex flex-col items-start"
        >
          <div className="text-[2.5rem] font-bold text-[#FDC448] mb-4 font-sans leading-none">
            {stat.value}
          </div>
          <hr className="border-[#68568B] opacity-60 mb-4 w-full" />
          <div className="text-base md:text-lg text-[#DFD7F9] font-semibold leading-snug">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
