import { useState } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
// import { FiMenu, FiX } from "react-icons/fi"; // Importing menu icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">Quiz App</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:gap-4 absolute md:relative  left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all ${
            isOpen ? "block top-16" : "hidden top-0"
          }`}
        >
          <li className="md:inline-block block mb-3 md:mb-0">
            <Link
              to="/create-questions"
              className="block text-white hover:bg-blue-500 px-4 py-2 rounded-md transition"
              onClick={() => setIsOpen(false)}
            >
              Create Questions
            </Link>
          </li>
          <li className="md:inline-block block">
            <Link
              to="/display-questions"
              className="block text-white hover:bg-blue-500 px-4 py-2 rounded-md transition"
              onClick={() => setIsOpen(false)}
            >
              Display Questions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
