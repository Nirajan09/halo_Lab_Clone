import React from 'react'

const BlogSection = () => {
  return (
    <div className="bg-[#686bc4] flex items-center justify-between w-full">
      <div className="bg-red-700 grid lg:grid-cols-2 gap-12 w-full px-6 py-16 items-center">
        {/* Hot Articles Badge */}
        <div className="flex lg:block justify-center lg:justify-start mb-8 md:mb-0">
          <div className="max-w-[11rem] flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-base font-medium mr-2 text-gray-600">HOT ARTICLES</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-white text-4.5xl md:text-3xl font-semibold leading-snug">
            The Halo Lab blog is a treasure trove of our best technical tips and expert knowledge.Here you will discover all the valuable secrets and trends of the IT industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogSection