import { useRef, useState } from "react";
import ContactInfoPage from "./ContactInfoPage";
import ContactFormPage from "./ContactFormPage";
import NavbarSection from "../header/NavbarSection";

const ContactUs = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="my-container">
      <NavbarSection />
      <div className="mt-2 w-full h-auto flex flex-col lg:flex-row justify-between text-white">
        <ContactInfoPage />
        <div className="flex-1 flex flex-col justify-center items-center">
          <ContactFormPage
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
