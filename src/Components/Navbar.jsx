import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="bg-white dark:bg-[#02054d] transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={Logo} alt="CHICHIFY" className="w-32 lg:w-40" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-4 lg:space-x-8 text-gray-800 dark:text-gray-100 text-sm lg:text-base">
            <li>
              <Link
                to="/"
                className="whitespace-nowrap hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="whitespace-nowrap hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="whitespace-nowrap hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="whitespace-nowrap hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/track-order"
                className="whitespace-nowrap hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
              >
                Track Your Order
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons and Dark Mode Switch */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            {/* Search Icon */}
            <FiSearch
              className="text-xl hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
              onClick={() => setSearchOpen(!searchOpen)} // Toggle search input on icon click
            />
            {/* Search Input */}
            <div
              className={`absolute left-[-250px] -top-2 transition-all duration-300 ease-in-out ${
                searchOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <input
                type="text"
                placeholder="Search Products..."
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#02054d] text-gray-800 dark:text-gray-100"
              />
            </div>
          </div>

          <p className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer">
            Login
          </p>
          <FaShoppingCart className="text-xl hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer" />

          {/* Light/Dark Mode Switch */}
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none dark:text-gray-100"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 dark:text-gray-100 text-sm">
          <li>
            <Link
              to="/"
              onClick={closeMenu} // Close menu after clicking
              className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={closeMenu} // Close menu after clicking
              className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu} // Close menu after clicking
              className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu} // Close menu after clicking
              className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/track-order"
              onClick={closeMenu} // Close menu after clicking
              className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
            >
              Track Your Order
            </Link>
          </li>
          {/* Mobile Icons */}
          <li>
            <p className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer">
              Login
            </p>
          </li>
          <div className="flex space-x-6">
            <li>
              <FiSearch
                className="text-xl hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
                onClick={() => setSearchOpen(!searchOpen)} // Toggle search on mobile click
              />
            </li>
            <li>
              <FaShoppingCart className="text-xl hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer" />
            </li>
            {/* Dark Mode Switch */}
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-xl hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer"
              >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
