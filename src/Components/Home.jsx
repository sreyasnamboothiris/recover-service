import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkModeProvider";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, rotateX: 90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 1 }}
      className={`relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24 pt-24 md:pt-32 transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 text-gray-900"
      }`}
    >
      {/* Floating Bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="bubble w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-white opacity-40 absolute"
          initial={{
            x: `${Math.random() * 90}vw`,
            y: "100vh",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        ></motion.div>
      ))}

      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          🚀 Stranded? We’ve Got Your Back!
        </h2>
        <p className="text-lg md:text-xl font-semibold text-gray-800">
          Fast. Reliable. Hassle-Free.
        </p>
        <p className="text-base md:text-lg">
          Stuck on the road? No worries! Our expert recovery team is available{" "}
          <strong>24/7</strong> to assist you—whether it’s an emergency
          breakdown or accident recovery.
        </p>

        <div
          className={`rounded-lg p-4 md:p-6 shadow-md ${
            darkMode
              ? "bg-gray-800 text-gray-200"
              : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <h3 className="text-lg md:text-xl font-bold underline">
            🔧 Why Choose Us?
          </h3>
          <ul className="text-sm md:text-base space-y-2">
            <li>✔ <strong>24/7 Assistance</strong> – Anytime, anywhere.</li>
            <li>✔ <strong>Nationwide Coverage</strong> – We reach you fast.</li>
            <li>✔ <strong>All Vehicles Supported</strong> – Bikes, cars & more.</li>
            <li>✔ <strong>No Hidden Costs</strong> – Transparent pricing.</li>
          </ul>
        </div>

        <p className="text-sm md:text-lg font-semibold">
          ⏳ Because every second counts! Get moving <strong>safely</strong> and{" "}
          <strong>stress-free</strong> 🚗💨
        </p>
      </div>
    </motion.section>
  );
};

export default Home;
