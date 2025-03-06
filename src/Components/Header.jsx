import React, { useContext, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkModeProvider";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed top-0 left-0 py-4 px-6 flex justify-between items-center z-50 shadow-md transition-all duration-300
          ${darkMode ? "bg-gray-900 text-white shadow-gray-700" : "bg-white text-gray-900 shadow-gray-400"}`}
      >
        <h1 className="text-xl font-bold">Vehicle Recovery</h1>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-6">
            {["home", "services", "about", "location", "our team", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer transition-colors duration-300 
                    ${darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right section: Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md transition-all duration-300 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-16 left-0 w-full h-screen p-6 shadow-lg z-50 md:hidden transition-all duration-300 
            ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
          <ul className="flex flex-col space-y-6 text-lg">
            {["home", "services", "about", "location", "our team", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer transition-colors duration-300 text-center block py-2 
                    ${darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Header;