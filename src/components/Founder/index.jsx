import React from 'react'

const Founder = () => {
  return (
    <div className="my-container section max-h-[350px] flex flex-col  items-start justify-between px-8 py-12 md:flex-row-reverse rounded-xl  mx-auto ">
      <div className="mt-0 md:w-[60%]">
        <p className="text-white text-2xl lg:text-4xl font-medium leading-snug">
          Over the past 12 years, we've perfected our Design &amp; Development game and are eager to help passionate Founders perfect theirs.
          Success is a team play, right? Let's aim for the top together!
        </p>
      </div>
      <div className="flex justify-between gap-4 mt-3 items-center md:items-start md:w-1/4 md:flex-col">
        <div className="flex -space-x-4 mb-2">
          <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c90175fe3bf5e15444ddcf_ava-founders.avif" loading="lazy" height="" width="158" alt="halolab founders" decoding="async"></img>
        </div>
        <div className="text-xs text-gray-300 text-center md:text-left mt-2 sm:text-size-xl ">
          FOUNDERS<br />OF HALO LAB
        </div>
      </div>

      
    </div>
  );
}

export default Founder