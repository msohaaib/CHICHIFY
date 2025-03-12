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
import Modal from "../Components/Model";
import LoginForm from "../Pages/LoginForm";
import SignupForm from "../Pages/SignUpForm";

const topBar = [
  { id: 1, name: "About Us", path: "#" },
  { id: 2, name: "Contact Us", path: "#" },
  { id: 3, name: "Privacy", path: "#" },
  { id: 4, name: "FAQs", path: "#" },
];

const NavBar = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "T-Shirts", path: "/t-shirts" },
  { id: 3, name: "SweatShirts", path: "/sweatshirts" },
  { id: 4, name: "Hoodies", path: "/hoodies" },
  { id: 5, name: "Kids", path: "/kids" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full">
      {/* Top Bar */}
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
          <FaUser
            className="cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
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

      {/* Login/Signup Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isLogin ? <LoginForm /> : <SignupForm />}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 mt-4"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </button>
      </Modal>
    </div>
  );
};

export default Navbar;
