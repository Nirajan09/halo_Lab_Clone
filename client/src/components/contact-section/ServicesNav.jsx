import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";

export default function ServicesNav({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="flex md:justify-end" aria-label="Services Navigation">
      <ul className="space-y-2 mt-6 md:mt-0">
        <li className="text-xl flex items-center gap-1 font-semibold select-none cursor-default">
          Our Services <span aria-hidden="true">+</span>
        </li>
        {services.map((service, idx) => (
          <li
            key={service}
            className="flex gap-3 items-center w-[12.5rem] group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            tabIndex={0}
            role="link"
            aria-label={service}
          >
            <span className="text-xl">{service}</span>
            <CgArrowTopRight
              className={`transition-all duration-200 ${hoveredIndex === idx ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 -translate-y-1 translate-x-2"}`}
              size={20}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
