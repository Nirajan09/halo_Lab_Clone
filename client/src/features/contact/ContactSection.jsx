import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { SERVICES, CONTACT_ICONS } from "../contact/contactData";
import NewsletterForm from "./NewsletterForm";
import SocialIcons from "./SocialIcons";
import ServicesNav from "./ServicesNav";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  const services = useMemoizedValue(() => SERVICES, []);
  const contactIcons = useMemoizedValue(() => CONTACT_ICONS, []);

  return (
    <section className="section w-full text-white" aria-labelledby="contact-section-heading">
      <h2 id="contact-section-heading" className="sr-only">
        Contact Halo Lab
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-10">
        {/* Column 1: Newsletter & Social icons */}
        <div>
          <p className="text-2xl font-normal mb-6">
            Subscribe to our newsletter to stay in touch with the latest.
          </p>
          <NewsletterForm />
          <SocialIcons icons={contactIcons} />
        </div>

        {/* Column 2: Navigation */}
        <ServicesNav services={services} />

        {/* Column 3: Contact Info */}
        <ContactInfo />
      </div>
    </section>
  );
};

export default memo(ContactSection);
