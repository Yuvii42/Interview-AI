// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">AI Interview</Link>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link>
            <Link to="/profile" className={isActive("/profile")}>Profile</Link>
            <Link to="/history" className={isActive("/history")}>History</Link>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/dashboard" onClick={toggleMenu} className="block py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/profile" onClick={toggleMenu} className="block py-2 text-gray-700 hover:text-blue-600">Profile</Link>
          <Link to="/history" onClick={toggleMenu} className="block py-2 text-gray-700 hover:text-blue-600">History</Link>
          <Link to="/login" onClick={toggleMenu} className="block py-2 mt-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
