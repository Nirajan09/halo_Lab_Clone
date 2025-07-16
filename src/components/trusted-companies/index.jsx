import React from 'react'

const TrustedCompaniesSection = () => {
    return (
        <div className="section relative flex justify-center items-center min-h-[30vh] md:min-h-[25vh] border rounded-xl p-5 border-white ">
            <p className="absolute left-[25%] top-[-.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center mb-8 z-10 sm:text-size-xs lg:text-size-base xl:text-size-lg">
                Trusted by global brands &amp; SMBs in the US and Europe
            </p>
            <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
                <div>
                    <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65c4cdd76ec1f96fd1e9ff8b_logo-nokia.svg" alt="" />
                </div>
                <div>
                    <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c186489234871b0050d8d1_logo-bumble.svg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c18648d1201ba13fea32fe_logo-schibsted.svg" alt="" />
                </div>
                <div>
                    <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65c4cdd71a615f6f78fabaf4_logo-opera.svg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c18648d559059598d91f6b_logo-bonterra.svg" alt="" />
                </div>
                <div>
                    <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67c18648f7fac6ef7ff45ea9_logo-zoom.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default TrustedCompaniesSection