import { Link } from "react-router-dom";

const Footer = () => {
  const informationLinks = [
    { id: 1, name: "About Us", path: "#" },
    { id: 2, name: "Contact Us", path: "#" },
    { id: 3, name: "Privacy", path: "#" },
    { id: 4, name: "FAQs", path: "#" },
  ];

  const navigateLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "T-Shirts", path: "/t-shirts" },
    { id: 3, name: "SweatShirts", path: "/sweatshirts" },
    { id: 4, name: "Hoodies", path: "/hoodies" },
    { id: 5, name: "Kids", path: "/kids" },
  ];

  const socialLinks = ["facebook", "twitter", "pinterest", "youtube"];

  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo will be uploaded here */}
            <span className="text-xl font-semibold text-gray-900">
              CHIHCIFY
            </span>
          </Link>
          <p className="text-sm text-gray-500 mt-2">VIBE WITH CHICHIFY</p>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-sm font-medium text-gray-900 mb-3">
            INFORMATION
          </h2>
          <ul className="space-y-2">
            {informationLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-sm font-medium text-gray-900 mb-3">NAVIGATE</h2>
          <ul className="space-y-2">
            {navigateLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CHICHIFY. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center space-x-4">
          {socialLinks.map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-gray-500 hover:text-gray-800"
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
