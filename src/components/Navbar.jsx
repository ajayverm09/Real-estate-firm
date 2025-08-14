import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/sales", label: "SALES" },
    { path: "/rental", label: "RENTALS" },
    { path: "/agents", label: "AGENTS" },
    { path: "/contact", label: "CONTACT" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="h-12 sm:h-14 md:h-16" src={logo} alt="Logo" />
          <div className="flex flex-col leading-none">
            <span className="text-gray-800 font-medium text-base sm:text-lg md:text-xl">
              COLTON PROPERTIES
            </span>
          </div>
        </div>

        <ul className="hidden md:flex gap-6 lg:gap-8 font-semibold text-sm sm:text-base">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-blue-500 ${
                  isActive(link.path) ? "text-blue-500" : "text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 px-4 pb-4 md:hidden font-semibold text-sm sm:text-base bg-white shadow-md">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-blue-500 ${
                  isActive(link.path) ? "text-blue-500" : "text-gray-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
