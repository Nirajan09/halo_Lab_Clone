import { useRef, useState } from "react";
import contactSchema from "../utils/validateSchema";
import NavbarSection from "../components/header-section/index"
const initialErrors = {
  name: "",
  email: "",
  phone: "",
  budget: "",
  project: "",
  file: "",
};

const ContactUs = () => {
  const fileInputRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    project: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactSchema.validate({ ...form, file: selectedFile }, { abortEarly: false });
      setErrors({});
      setForm({
        name: "",
        email: "",
        phone: "",
        budget: "",
        project: "",
      });
      setSelectedFile(null);
      if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
      alert("Form submitted successfully!");
    } catch (validationError) {
      if (validationError.inner) {
        const formErrors = {};
        for (const err of validationError.inner) {
          if (!formErrors[err.path]) formErrors[err.path] = err.message;
        }
        setErrors(formErrors);
      }
    }
  };

  return (
    <div className="my-container ">
      <NavbarSection />
      <div className="mt-2 w-full h-auto flex flex-col lg:flex-row justify-between text-white">
        {/* Left Section */}
        <div className="lg:w-[35%] flex flex-col justify-center items-start mb-5 lg:mb-0">
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tighter">
            LET'S<br />TALK
          </h1>
          <ul className="space-y-1 md:space-y-2 mt-4 md:mt-8 list-none text-base md:text-lg">
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black mr-2">✔</span> We will respond to you within 24 hours.
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black mr-2">✔</span>We'll sign an NDA if requested.
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black mr-2">✔</span>Access to dedicated product specialists.
            </li>
          </ul>
          <div className="flex items-center mt-4 md:mt-10">
            <div>
              <div className="text-xs md:text-sm text-gray-300">DIRECT CONTACT:</div>
              <div className="text-sm md:text-lg">inquiry@halo-lab.com</div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <form
            className="w-full bg-white rounded-xl p-4 md:p-6 shadow-xl text-gray-700 flex flex-col justify-between h-full"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 flex-grow">
              {/* Full Name */}
              <div>
                <label className="flex gap-2 mb-1 md:mb-2 text-sm md:text-base font-semibold">
                  Full name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className={`w-full px-2 md:px-4 py-2 rounded border ${errors.name ? "border-red-600" : "border-gray-300"} text-sm md:text-base`}
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">
                  {errors.name || ""}
                </div>
              </div>

              {/* Company Email */}
              <div>
                <label className="flex gap-2 mb-1 md:mb-2 text-sm md:text-base font-semibold">
                  Company email<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  className={`w-full px-2 md:px-4 py-2 rounded border ${errors.email ? "border-red-600" : "border-gray-300"} text-sm md:text-base`}
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">
                  {errors.email || ""}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="flex gap-2 mb-1 md:mb-2 text-sm md:text-base font-semibold">Phone number<span className="text-red-500">*</span></label>
                <div className="flex">
                  <span className="bg-gray-100 border border-gray-300 px-2 flex items-center rounded-l font-mono text-xs md:text-sm">+977</span>
                  <input
                    type="tel"
                    name="phone"
                    className={`w-full px-2 md:px-4 py-2 rounded-r border ${errors.phone ? "border-red-600" : "border-gray-300"} text-sm md:text-base`}
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>
                <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">
                  {errors.phone || ""}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="flex gap-2 mb-1 md:mb-2 text-sm md:text-base font-semibold">
                  What is your budget?<span className="text-red-500">*</span>
                </label>
                <select
                  name="budget"
                  className={`w-full px-2 md:px-4 py-2 rounded border ${errors.budget ? "border-red-600" : "border-gray-300"} text-sm md:text-base`}
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget</option>
                  <option value="under_1L">Under Rs.100,000</option>
                  <option value="1L - 2L">Rs.100,000 - Rs.200,000</option>
                  <option value="2L - 3L">Rs.200,000 - Rs.300,000</option>
                  <option value="4L_plus">Rs.300,000 +</option>
                </select>
                <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">
                  {errors.budget || ""}
                </div>
              </div>
            </div>
            {/* About Project */}
            <div className="mt-2 md:mt-4">
              <label className="flex gap-2 mb-1 md:mb-2 text-sm md:text-base font-semibold">
                About project<span className="text-red-500">*</span>
              </label>
              <textarea
                name="project"
                className={`w-full px-2 md:px-4 py-2 rounded border ${errors.project ? "border-red-600" : "border-gray-300"} text-sm md:text-base resize-none`}
                rows={2}

                value={form.project}
                onChange={handleChange}
              />
              <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">
                {errors.project || ""}
              </div>
            </div>
            {/* File Input */}
            <div className="mt-2 md:mt-4">
              <label className="flex gap-2 mb-1 md:mb-2 text-sm md:text-base font-semibold">
                Attach file (PDF, JPEG, PNG, JPG) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept=".pdf, .jpeg, .jpg, .png"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                ref={fileInputRef}
                className={`w-full px-2 md:px-4 py-2 rounded border ${errors.file ? "border-red-600" : "border-gray-300"} text-sm md:text-base`}
              />
              <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">
                {errors.file || ""}
              </div>
            </div>
            {/* Submit and Policy */}
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-[#3515d6] hover:bg-[#21119c] text-white font-semibold px-4 py-2 md:py-3 rounded-full shadow transition-colors text-sm md:text-base"
              >
                SEND A MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
