
const achievements = [
  {
    img: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df22453a88d0237804696b_award-dribbble.svg",
    alt: "Dribbble",
    title: "Top Team in the world on Dribbble",
  },
  {
    img: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245169d0dbda30cc38c_award-clutch.svg",
    alt: "Clutch",
    title: "Top 100 Global Service Providers by Clutch",
  },
  {
    img: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245d0569f8fce1a81c6_award-5stars.svg",
    alt: "GoodFirms",
    title: "5 Stars Rating on GoodFirms",
  },
  {
    img: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2248b0570f11feddea87_award-upwork.svg",
    alt: "Upwork",
    title: "100% Job Success on Upwork",
  },
];

const Achievements = () => {
  return (
    <div className="min-h-[150px] sm:min-h-[200px] container  section  py-12 flex justify-between items-center rounded-xl overflow-x-auto xl:overflow-visible">
      <div className="flex gap-8 md:w-[60%]">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center bg-[#13143a] rounded-full w-42 h-42 sm:w-52 sm:h-52 lg:w-[290px] lg:h-[290px] mx-auto shadow-md"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-12 h-12 mb-4 object-contain"
              loading="lazy"
            />
            <span className="text-white text-base md:text-lg font-semibold  px-4">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
