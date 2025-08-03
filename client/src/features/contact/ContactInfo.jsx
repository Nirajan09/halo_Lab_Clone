import { FaWhatsapp } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <address className="space-y-6 flex flex-col lg:items-end not-italic">
      <div>
        <div className="mb-2 uppercase text-sm text-white/70 font-normal">Drop us a line</div>
        <a href="mailto:inquiry@halo-lab.com" className="text-lg text-white hover:underline">
          inquiry@halo-lab.com
        </a>
      </div>
      <div>
        <div className="mb-2 uppercase text-sm text-white/70 font-normal">Call us</div>
        <a href="tel:+12133378573" className="flex items-center gap-2 text-lg text-white hover:underline">
          <FaWhatsapp size={25} aria-label="WhatsApp" />
          +1 (213) 337-8573
        </a>
      </div>
    </address>
  );
}
