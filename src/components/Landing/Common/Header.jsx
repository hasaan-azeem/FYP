import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "About Us", link: "/aboutus" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm shadow-md h-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold text-[#059669]">
          WebXGuard
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link to={item.link} className="text-white">
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#059669] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth Buttons */}

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="group relative flex items-center space-x-2 px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#059669"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
            <span className="relative text-gray-100 font-medium">
              Login
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#059669] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          <Link
            to="/signup"
            className="bg-[#101828] border-2 border-[#059669] hover:bg-[#059669] transition-all duration-300 text-gray-100 px-6 py-2 rounded-lg font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#059669"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#059669"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className="text-white hover:text-[#059669]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/auth/dashboard/login"
                className="flex items-center justify-center space-x-2 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/auth/dashboard/signup"
                className="flex items-center justify-center bg-[#059669] text-white px-6 py-2 rounded-lg hover:bg-[#047857]"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
