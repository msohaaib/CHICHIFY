import { useState } from "react";
import logo from "../assets/Logo.svg";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const topBar = [
  {
    id: 1,
    name: "About Us",
    path: "#",
  },
  {
    id: 2,
    name: "Contact Us",
    path: "#",
  },
  {
    id: 3,
    name: "Privacy",
    path: "#",
  },
  {
    id: 4,
    name: "FAQs",
    path: "#",
  },
];

const NavBar = [
  {
    id: 1,
    name: "Home",
    path: "/", // Home page
  },
  {
    id: 2,
    name: "T-Shirts",
    path: "/t-shirts", // Route for T-Shirts
  },
  {
    id: 3,
    name: "SweatShirts",
    path: "/sweatshirts", // Route for SweatShirts
  },
  {
    id: 4,
    name: "Hoodies",
    path: "/hoodies", // Route for Hoodies
  },
  {
    id: 5,
    name: "Kids",
    path: "/kids", // Route for Kids
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar (Hidden on small screens) */}
      <div className="w-full border-b-2 hidden md:flex">
        <div className="container mx-auto flex justify-between font-thin py-1 px-4 text-md">
          {/* Top Links */}
          <ul className="flex space-x-4">
            {topBar.map((data) => (
              <li key={data.id} className="transition-all duration-200">
                <a href={data.path}>{data.name}</a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 cursor-pointer">
            <a href="#" className="pr-4 transition-all duration-200">
              Track Your Order
            </a>
            <FaFacebook className="hover:text-[#0866FF] transition-all duration-200" />
            <FaSquareInstagram className="hover:text-[#ED3640] transition-all duration-200" />
            <IoLogoWhatsapp className="hover:text-[#25D366] transition-all duration-200" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container mx-auto flex justify-between items-center h-20 px-3">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="CHICHIFY" className="h-28" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {NavBar.map((data) => (
            <li key={data.id} className="transition-all duration-200">
              <Link to={data.path}>{data.name}</Link>
            </li>
          ))}
        </ul>

        {/* Icons & Mobile Menu Button */}
        <div className="flex space-x-4 items-center text-2xl">
          <FaSearch />
          <FaUser />
          <FaShoppingCart />

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden z-50 fixed top-0 right-0 w-2/3 h-full bg-white shadow-md transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center space-y-6 mt-10">
          {NavBar.map((data) => (
            <li key={data.id} className="text-lg">
              <Link to={data.path} onClick={() => setMenuOpen(false)}>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
