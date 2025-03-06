import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkModeProvider";
import { FaCheckCircle, FaHandsHelping, FaShieldAlt, FaClock } from "react-icons/fa";
import truck from "../assets/tow-truck.png";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1 }}
      className={`min-h-screen flex flex-col items-center text-center p-6 md:p-12 transition-colors duration-500 relative ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 text-gray-900"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
      <p className="text-base sm:text-lg max-w-3xl mb-8 font-medium">
        We are a trusted <strong>24/7 vehicle recovery service</strong>, committed to helping you in breakdowns, accidents, 
        and emergencies. Our team ensures <strong>fast, reliable, and professional</strong> assistance, no matter where you are.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
        {[
          { icon: <FaClock />, title: "24/7 Service", desc: "Day or night, we are always available to assist you." },
          { icon: <FaShieldAlt />, title: "Reliable & Secure", desc: "We prioritize safety and handle your vehicle with care." },
          { icon: <FaHandsHelping />, title: "Expert Team", desc: "Our professionals are trained for quick and efficient service." },
          { icon: <FaCheckCircle />, title: "Affordable Pricing", desc: "Quality service at the best rates with no hidden charges." }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg shadow-md transition duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white text-gray-900 border border-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl text-blue-500">{item.icon}</div>
            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Vehicle Animation */}
      <div className="relative w-full h-40 mt-16 overflow-hidden">
        <motion.img
          src={truck}
          alt="Truck"
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-32 sm:w-40"
        />
      </div>
    </motion.section>
  );
};

export default About;
