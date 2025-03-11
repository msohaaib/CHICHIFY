const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Social Links */}
        <div>
          <h2 className="text-xl font-semibold">haute</h2>
          <p className="text-gray-600 mt-2">
            Our mission is to offer you the best selection of Nordic design,
            whether well-established or up-and-coming.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-black">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-black">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="hover:text-black">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigate</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Catalog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Journal
              </a>
            </li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Informations</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-black">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Store Locations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-600 mb-3">
            Subscribe to get notified about product launches, special offers,
            and news.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="hi@haute.woostify"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2021 Haute. Developed by Woostify.
      </div>
    </footer>
  );
};

export default Footer;
