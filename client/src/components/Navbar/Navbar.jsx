import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 mb-3">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link className="flex items-center" to="#">
          <img
            src="/src/assets/img/lockdev.webp"
            width="48"
            height="48"
            alt="favicon"
          />
        </Link>
        <button
          className="block lg:hidden p-2 border border-gray-400 rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="navbarNav"
        >
          <ul className="lg:flex lg:space-x-4">
            <li className="nav-item">
              <Link
                className="block py-2 px-4 text-white hover:text-gray-300"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="block py-2 px-4 text-white hover:text-gray-300"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="block py-2 px-4 text-white hover:text-gray-300"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <ul className="lg:flex lg:space-x-4 ml-auto">
            <li className="nav-item">
              <Link
                className="block py-2 px-4 text-white hover:text-gray-300"
                id="user-name"
                to="#"
              >
                NotLogged
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="logout"
                className="block py-2 px-4 text-white hover:text-gray-300"
                to="/login"
              >
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
