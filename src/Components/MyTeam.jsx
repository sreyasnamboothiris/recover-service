import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkModeProvider";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  { id: 1, name: "John Doe", img: "https://via.placeholder.com/150", linkedin: "#", twitter: "#", instagram: "#" },
  { id: 2, name: "Jane Smith", img: "https://via.placeholder.com/150", linkedin: "#", twitter: "#", instagram: "#" },
  { id: 3, name: "Robert Brown", img: "https://via.placeholder.com/150", linkedin: "#", twitter: "#", instagram: "#" },
  { id: 4, name: "Emily Johnson", img: "https://via.placeholder.com/150", linkedin: "#", twitter: "#", instagram: "#" },
  { id: 5, name: "Michael Lee", img: "https://via.placeholder.com/150", linkedin: "#", twitter: "#", instagram: "#" },
  { id: 6, name: "Sophia Davis", img: "https://via.placeholder.com/150", linkedin: "#", twitter: "#", instagram: "#" },
];

const MyTeam = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      id="our team"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1 }}
      className={`min-h-screen flex flex-col items-center justify-center text-center p-6 md:p-10 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 text-gray-900"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 max-w-5xl">Meet Our Team</h2>
      <p className="text-base sm:text-lg max-w-5xl mb-10">
        Our dedicated team works tirelessly to provide the best vehicle recovery services. We are here to assist you 24/7.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-48 h-48 rounded-xl object-cover mb-4 border-4 border-gray-300 dark:border-gray-700"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>

            {/* Social Links */}
            <div className="flex mt-3 space-x-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 hover:text-blue-800 transition text-xl" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-600 transition text-xl" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-700 transition text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default MyTeam;
