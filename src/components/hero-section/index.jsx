const HeroSection = () => (
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6  md:h-[70vh] xl:h-[82vh] h-[150vh]">
    {/* Left Section */}
    <div className="
      flex flex-col justify-between bg-[#3827C8] rounded-3xl 
      p-10 xl:p-16 w-full text-white
      transition duration-200 shadow-sm group
      hover:scale-[1.024] hover:shadow-xl hover:bg-[#463af7]
    ">
      <h1 className="
        text-center text-5xl md:text-3xl xl:text-5xl 
        font-normal leading-[1.15] mb-8
      ">
        DESIGN & TECH<br />
        AGENCY HELPING<br />
        BRANDS BECOME<br />
        <span className="text-[#ffd23f]">TOP 1%</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center text-base gap-5 mb-4">
          <img
            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67bdb3b2f4c3ff24144f7bc0_home-hero-fire.avif"
            loading="lazy"
            alt="Fire"
            className="w-12 h-12 object-contain"
          />
          <p className="text-xl">
            12 years of design-driven development for B2B products
          </p>
        </div>
        <button className="
          flex bg-[#ffd23f] text-black rounded-full px-6 py-2 mt-2
          transition duration-200 ease-in-out
          hover:bg-yellow-300 hover:scale-105 hover:shadow-lg cursor-pointer
        ">
          BOOK A CALL
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="
      flex items-center bg-[#ffd23f] rounded-3xl w-full p-6
      transition duration-200 shadow-sm group
      hover:scale-[1.024] hover:shadow-xl hover:bg-[#c5b16f]
    ">
      <div className="
        relative rounded-full mx-auto bg-[#f5f3f0]
        flex items-center justify-center shadow-lg
        w-full h-full aspect-[1/1] max-w-[500px] max-h-[500px]
      ">
        <video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
        >
          <source
            src="https://d3vlq52qrgdnc2.cloudfront.net/UIUX-Showreel-preview-big.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            aria-hidden="true"
            role="img"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="48"
            height="48"
            className="text-[#ffd23f] opacity-80"
          >
            <path d="M13.9 7.35a.7.7 0 0 1 0 1.213l-8.4 4.85a.7.7 0 0 1-1.05-.606v-9.7a.7.7 0 0 1 1.05-.606l8.4 4.85Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
