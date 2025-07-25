import { useState, memo, useCallback } from 'react';
import { FaDribbble, FaInstagram, FaBehance, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { FaWebflow, FaWhatsapp } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";

// Static data outside component for stable references
const SERVICES = [
  "Projects",
  "Dedicated team",
  "Open Source",
  "Referral Program",
  "Contacts",
  "Blog",
];

const CONTACT_ICONS = [
  { icon: <FaDribbble />, hover: "hover:text-pink-400", label: "Dribbble", href: "#" },
  { icon: <FaInstagram />, hover: "hover:text-fuchsia-500", label: "Instagram", href: "#" },
  { icon: <FaBehance />, hover: "hover:text-blue-400", label: "Behance", href: "#" },
  { icon: <FaWebflow />, hover: "hover:text-indigo-400", label: "Webflow", href: "#" },
  { icon: <FaLinkedinIn />, hover: "hover:text-blue-500", label: "LinkedIn", href: "#" },
  { icon: <FaGithubAlt />, hover: "hover:text-gray-800", label: "GitHub", href: "#" },
];

const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const ContactSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Callbacks for handlers
  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value);
    if (error) setError('');
    if (success) setSuccess('');
  }, [error, success]);

  const handleEmailBlur = useCallback(e => {
    if (e.target.value && !isValidEmail(e.target.value)) {
      setError("Please enter a valid email address");
    }
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setSuccess('');
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError('');
    setSuccess('Thanks for subscribing!');
    setEmail('');
  }, [email]);

  return (
    <section className="section w-full text-white" aria-labelledby="contact-section-heading">
      <h2 id="contact-section-heading" className="sr-only">Contact Halo Lab</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-10">
        {/* Column 1: Newsletter & Social icons */}
        <div>
          <p className="text-2xl font-normal mb-6">
            Subscribe to our newsletter to stay in touch with the latest.
          </p>

          <form
            className="flex flex-col items-start mb-6"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            aria-label="Email newsletter subscription form"
          >
            <div className="relative md:w-full w-[90%]">
              <input
                type="email"
                placeholder="Your email address"
                className={`w-full rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 bg-transparent border border-white border-opacity-30 ${
                  error ? "border-red-500" : ""
                }`}
                aria-label="Email address"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                autoComplete="email"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-[#5842e3] cursor-pointer p-2 rounded-full transition-colors"
                aria-label="Submit email"
              >
                <MdOutlineEmail color='black' />
              </button>
            </div>
            {error && (
              <div className="text-red-400 text-xs mt-2 ml-2" role="alert">{error}</div>
            )}
            {success && (
              <div className="text-green-400 text-xs mt-2 ml-2" role="status">{success}</div>
            )}
          </form>

          <div className="mb-2 uppercase text-sm text-white/70 font-normal">Follow us here:</div>
          <div className="flex gap-4 mt-2">
            {CONTACT_ICONS.map(({ icon, hover, label, href }, idx) => (
              <a
                key={label}
                href={href}
                tabIndex={0}
                className={`
                  rounded-full p-2 sm:p-3 border border-white text-white transition-all duration-200
                  hover:bg-white hover:scale-110 hover:shadow-lg focus:bg-white focus:scale-110 focus:shadow-lg
                  ${hover} cursor-pointer
                `}
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <nav className="flex md:justify-end" aria-label="Services Navigation">
          <ul className="space-y-2 mt-6 md:mt-0">
            <li className="text-xl flex items-center gap-1 font-semibold select-none cursor-default">
              Our Services <span aria-hidden="true">+</span>
            </li>
            {SERVICES.map((service, idx) => (
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
                  className={`
                    transition-all duration-200
                    ${hoveredIndex === idx ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 -translate-y-1 translate-x-2"}
                  `}
                  size={20}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Contact Info */}
        <address className="space-y-6 flex flex-col lg:items-end not-italic">
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
              <FaWhatsapp size={25} aria-label="WhatsApp" />
              +1 (213) 337-8573
            </a>
          </div>
        </address>
      </div>
    </section>
  );
};

ContactSection.displayName = "ContactSection";
export default memo(ContactSection);
