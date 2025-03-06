import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkModeProvider";
import { FaCarCrash, FaWrench, FaGasPump, FaBatteryFull, FaLock, FaTruck } from "react-icons/fa";
import truck from "../assets/tow-truck.png";

const services = [
  { icon: <FaCarCrash />, title: "Accident Recovery", desc: "Quick and safe accident site vehicle recovery." },
  { icon: <FaWrench />, title: "Roadside Assistance", desc: "Flat tires, minor repairs, and emergency support." },
  { icon: <FaGasPump />, title: "Fuel Delivery", desc: "Out of fuel? We bring it to you anywhere, anytime." },
  { icon: <FaBatteryFull />, title: "Jump Start", desc: "Dead battery? We get your car running again fast." },
  { icon: <FaLock />, title: "Car Lockout", desc: "Locked out? We help you get back inside your vehicle." },
  { icon: <FaTruck />, title: "Towing Service", desc: "Safe and reliable towing to your preferred location." }
];

const Service = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1 }}
      className={`min-h-screen flex flex-col items-center justify-center text-center p-6 md:p-10 transition-colors duration-500 relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-base sm:text-lg max-w-2xl mb-8">
        We provide 24/7 emergency vehicle recovery services, including towing, roadside assistance, and breakdown support.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg shadow-md transition duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl text-blue-500">{service.icon}</div>
            <h3 className="text-lg font-semibold mt-3">{service.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Truck Animation */}
      <div className="relative w-full h-40 mt-16 overflow-hidden">
        <motion.img
          src={truck}
          alt="Truck"
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-40"
        />
      </div>
    </motion.section>
  );
};

export default Service;
