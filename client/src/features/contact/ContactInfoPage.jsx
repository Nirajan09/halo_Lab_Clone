const ContactInfo = () => (
  <div className="lg:w-[35%] flex flex-col justify-center items-start mb-5 lg:mb-0 text-white">
    <h1 className="text-5xl md:text-8xl font-bold leading-tighter">
      LET'S<br />TALK
    </h1>
    <ul className="space-y-1 md:space-y-2 mt-4 md:mt-8 list-none text-base md:text-lg">
      <li className="flex items-center">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black mr-2">✔</span> We will respond to you within 24 hours.
      </li>
      <li className="flex items-center">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black mr-2">✔</span>We'll sign an NDA if requested.
      </li>
      <li className="flex items-center">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black mr-2">✔</span>Access to dedicated product specialists.
      </li>
    </ul>
    <div className="flex items-center mt-4 md:mt-10">
      <div>
        <div className="text-xs md:text-sm text-gray-300">DIRECT CONTACT:</div>
        <div className="text-sm md:text-lg">inquiry@halo-lab.com</div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
