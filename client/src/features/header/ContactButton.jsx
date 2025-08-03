import React from "react";
import { useNavigate } from "react-router-dom";

const ContactButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-white text-black px-3 py-1 rounded-full font-bold cursor-pointer transition-all text-base hover:bg-[#FDC448] hover:text-[#0a0826] hover:shadow-lg hover:scale-105"
      type="button"
      onClick={() => navigate("/contact")}
    >
      Contact Us
    </button>
  );
};

export default React.memo(ContactButton);
