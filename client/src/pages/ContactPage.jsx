import { useRef, useState } from "react";
import ContactInfo from "../page-components/contactpage-component/ContactInfo";
import ContactForm from "../page-components/contactpage-component/ContactForm";
import NavbarSection from "../features/header/NavbarSection";

const ContactUs = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="my-container">
      <NavbarSection />
      <div className="mt-2 w-full h-auto flex flex-col lg:flex-row justify-between text-white">
        <ContactInfo />
        <div className="flex-1 flex flex-col justify-center items-center">
          <ContactForm
            fileInputRef={fileInputRef}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
