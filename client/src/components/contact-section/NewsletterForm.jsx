import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = e => {
    setEmail(e.target.value);
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleEmailBlur = e => {
    if (e.target.value && !isValidEmail(e.target.value)) {
      setError("Please enter a valid email address");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess("");
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSuccess("Thanks for subscribing!");
    setEmail("");
  };

  return (
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
          className={`w-full rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 bg-transparent border border-white border-opacity-30 ${error ? "border-red-500" : ""}`}
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
          <MdOutlineEmail color="black" />
        </button>
      </div>
      {error && (
        <div className="text-red-400 text-xs mt-2 ml-2" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="text-green-400 text-xs mt-2 ml-2" role="status">
          {success}
        </div>
      )}
    </form>
  );
}
