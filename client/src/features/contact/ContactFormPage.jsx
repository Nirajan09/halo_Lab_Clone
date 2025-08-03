import { useState, useRef } from 'react';
import contactSchema from '../../utils/validateSchema';

const initialErrors = {
  name: "",
  email: "",
  phone: "",
  budget: "",
  project: "",
  file: "",
};

const ContactForm = () => {
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

  console.log("Submitting form with data:", form);
  console.log("Selected file:", selectedFile);

  try {
    await contactSchema.validate({ ...form, file: selectedFile }, { abortEarly: false });
    setErrors({});

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('budget', form.budget);
    formData.append('project', form.project);
    formData.append('file', selectedFile);

    console.log("FormData prepared, sending to backend...");

    const response = await fetch('http://localhost:4000/contact', {
      method: 'POST',
      body: formData,
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server responded with error:", errorData);
      alert(`Error: ${errorData.error || 'Something went wrong'}`);
      return;
    }

    const responseData = await response.json();
    console.log("Server success response:", responseData);

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
    console.log("Validation errors:", validationError);
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
          <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">{errors.name || ""}</div>
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
          <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">{errors.email || ""}</div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="flex gap-2 mb-1 md:mb-2 text-sm md:text-base font-semibold">
            Phone number<span className="text-red-500">*</span>
          </label>
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
          <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">{errors.phone || ""}</div>
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
          <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">{errors.budget || ""}</div>
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
        <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">{errors.project || ""}</div>
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
        <div className="min-h-[1rem] text-xs text-red-600 mt-1 transition-opacity duration-200 opacity-100">{errors.file || ""}</div>
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
  );
};

export default ContactForm;
