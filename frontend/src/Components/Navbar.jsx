import logo from "../assets/Logo.svg";
// import {FaBars, FaTimes} from "react-icons/fa"
// import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

// const ResNavBar = () => {
//   const [menuOpen, setmenuOpen] = useState(false);
// }

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
    path: "#",
  },
  {
    id: 2,
    name: "T-Shirts",
    path: "#",
  },
  {
    id: 3,
    name: "SweatShirts",
    path: "#",
  },
  {
    id: 4,
    name: "Hoodies",
    path: "#",
  },
  {
    id: 5,
    name: "Kids",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Full-width bottom border */}
      <div className="w-full border-b-2 hidden lg:flex">
        <div className="container mx-auto flex justify-between font-thin py-1 px-4 text-md">
          {/* Top Links */}
          <div>
            <ul className="flex space-x-4">
              {topBar.map((data) => (
                <li key={data.id} className="transition-all duration-200">
                  <a href={data.path}>{data.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Icons */}
          <div className="flex space-x-4 cursor-pointer">
            <a href="" className="pr-4 transition-all duration-200">
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
          <img src={logo} alt="CHICHIFY" className="h-32" />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-6">
            {NavBar.map((data) => (
              <li key={data.id} className="transition-all duration-200">
                <a href={data.path}>{data.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
          <FaSearch />
          <FaUser />
          <FaShoppingCart />
        </div>
      </div>
      {/* <div className="flex items-center space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
