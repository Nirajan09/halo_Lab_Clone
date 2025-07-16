import React, { useState } from 'react'
import { FaDribbble, FaInstagram, FaBehance, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { FaWebflow, FaWhatsapp } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
const ContactSection = () => {
    const services = [
        "Projects", "Dedicated team", "Open Source", "Referral Program", "Contacts", "Blog",
    ]
    const contactIcons=[
        <FaDribbble />,<FaInstagram />,<FaBehance />, <FaWebflow />,<FaLinkedinIn />,<FaGithubAlt />
    ]
    const [hoveredIndex, setHoveredIndex] = useState(null)
    return (
        <section className="section w-full  text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 md:gap-10 ">
                {/* Column 1: Newsletter & Social icons */}
                <div>
                    <h2 className="text-2xl font-normal mb-6">
                        Subscribe to our newsletter to 
                        stay in touch with the latest.
                    </h2>
                    <form className="flex items-center mb-6">
                        <div className="relative ">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 bg-transparent border border-white border-opacity-30"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-[#5842e3] cursor-pointer p-2 rounded-full"
                                aria-label="Submit email"
                            >
                                <MdOutlineEmail color='black' />
                            </button>
                        </div>
                    </form>
                    <div className="mb-2 uppercase text-sm text-white/70 font-normal">Follow us here:</div>
                    <div className="flex gap-4 mt-2">
                        {
                            contactIcons.map((icons,idx)=>(

                            <div key={idx} className="rounded-full p-2 sm:p-3 border border-white">
                                {icons}
                            </div>
                            ))
                        }
                        
                    </div>
                </div>
                {/* Column 2: Navigation */}
                <div className='flex md:justify-end'>
                    <ul className="space-y-2 mt-6 md:mt-0 ">
                        <li className="text-xl flex items-center gap-1">Our Services <span>+</span></li>
                        {
                            services.map((service, idx) => (
                                <div key={idx} className='flex hover:cursor-pointer gap-6 items-center w-[12.5rem]'>
                                    <li className='text-xl' onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>{service}</li>
                                    {
                                        hoveredIndex===idx && <CgArrowTopRight />
                                    }
                                    
                                </div>
                            ))
                        }
                    </ul>
                </div>
                {/* Column 3: Contact Info */}
                <div className="space-y-6 flex flex-col lg:items-end">
                    <div>
                        <div className="mb-2 uppercase text-sm text-white/70 font-normal">Drop us a line</div>
                        <a href="mailto:inquiry@halo-lab.com" className="text-lg text-white hover:underline">
                            inquiry@halo-lab.com
                        </a>
                    </div>
                    <div>
                        <div className="mb-2 uppercase text-sm text-white/70 font-normal">Call us</div>
                        <a
                            href="tel:+12133378573"
                            className="flex items-center gap-2 text-lg text-white hover:underline"
                        >

                            <FaWhatsapp size={25}/>
                            +1 (213) 337-8573
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection