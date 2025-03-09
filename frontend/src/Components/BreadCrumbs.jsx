import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="text-gray-600 text-sm py-3">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const route = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <li key={route} className="flex items-center">
              <span className="mx-2">/</span>
              <Link to={route} className="hover:text-blue-500 capitalize">
                {path}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
