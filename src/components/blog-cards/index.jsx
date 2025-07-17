import React, { useState } from "react";

const cards = [
    {
        title: "How to build a product — a full guide to the product development process",
        category: "DEVELOPMENT",
        imageBeforeAnimate: "../cards/BeforeAnimationImage1.png",
        imageAfterAnimate: "../cards/AfterAnimationImage1.png"
    },
    {
        title: "Tech stack for web development: how to arrange it correctly",
        category: "DEVELOPMENT",
        imageBeforeAnimate: "../cards/BeforeAnimationImage2.png",
        imageAfterAnimate: "../cards/AfterAnimationImage2.png"
    },
];

const BlogCards = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (

        <div className="bg-[#080827] section flex items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-[#3827C8] rounded-[2rem] pt-12 pb-10 px-10 relative min-h-[400px] flex flex-col justify-end shadow-lg"
                    >
                        <div className="absolute left-1/2 -translate-x-1/2 top-8">
                            <img className="cursor-pointer" src={hoveredIndex === idx?card.imageAfterAnimate:card.imageBeforeAnimate} onMouseEnter={()=>setHoveredIndex(idx)} onMouseLeave={()=>setHoveredIndex(null)} alt="" />
                        </div>
                        <div className="mt-32">
                            <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-6">
                                {card.title}
                            </h3>
                            <div className="text-white/80 text-sm font-normal tracking-wider mb-2">
                                {card.category}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default BlogCards;
