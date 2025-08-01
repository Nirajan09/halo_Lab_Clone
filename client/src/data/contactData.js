import { FaDribbble, FaInstagram, FaBehance, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { FaWebflow} from "react-icons/fa6";

export const SERVICES = [
  "Projects",
  "Dedicated team",
  "Open Source",
  "Referral Program",
  "Contacts",
  "Blog",
];

export const CONTACT_ICONS = [
  { icon: FaDribbble, hover: "hover:text-pink-400", label: "Dribbble", href: "#" },
  { icon: FaInstagram, hover: "hover:text-fuchsia-500", label: "Instagram", href: "#" },
  { icon: FaBehance, hover: "hover:text-blue-400", label: "Behance", href: "#" },
  { icon: FaWebflow, hover: "hover:text-indigo-400", label: "Webflow", href: "#" },
  { icon: FaLinkedinIn, hover: "hover:text-blue-500", label: "LinkedIn", href: "#" },
  { icon: FaGithubAlt, hover: "hover:text-gray-800", label: "GitHub", href: "#" },
];
