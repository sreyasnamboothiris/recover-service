import React, { useContext, useState } from "react";
import { DarkModeContext } from "../DarkModeProvider";

const ContactUs = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center text-center p-6 md:p-10 transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 text-gray-900"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h2>
      <p className="text-base sm:text-lg max-w-xl mb-8">
        📍 <strong>Address:</strong> 123 Street, City, Country <br />
        📞 <strong>Phone:</strong> +123 456 7890 <br />
        ✉️ <strong>Email:</strong> support@example.com
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-4xl p-6 rounded-lg shadow-md transition duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white border border-gray-300"
        }`}
      >
        <div className="mb-4">
          <label className="block text-left text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                : "bg-gray-100 border-gray-300 focus:ring-blue-400"
            }`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                : "bg-gray-100 border-gray-300 focus:ring-blue-400"
            }`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-sm font-semibold mb-1">
            Message / Feedback
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message or feedback"
            rows="4"
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 resize-none ${
              darkMode
                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                : "bg-gray-100 border-gray-300 focus:ring-blue-400"
            }`}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
