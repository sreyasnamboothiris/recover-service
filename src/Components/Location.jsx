import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkModeProvider";
import truck from "../assets/tow-truck.png"; // Ensure this image is in assets

const Location = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      id="location"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1 }}
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 transition-colors duration-500 relative ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 text-gray-900"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Location</h2>
      <p className="text-base md:text-lg max-w-sm md:max-w-2xl mb-8">
        We are based in <strong>New York, USA</strong>. Our service covers a wide area to ensure we reach you whenever needed.
      </p>

      {/* Embedded Map (Dummy Location - New York) */}
      <div className="w-full max-w-3xl h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Maps Location"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24169.250387206606!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b49763%3A0xb66f69db6a39a9d3!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1712768475621"
          allowFullScreen
        ></iframe>
      </div>

      {/* Truck Animation (Right to Left) */}
      <motion.img
        src={truck}
        alt="Truck"
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 md:bottom-5 right-0 w-20 md:w-36 opacity-80"
      />
    </motion.section>
  );
};

export default Location;
