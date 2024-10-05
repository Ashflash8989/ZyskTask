import React from 'react';
import img from './Asset/w-1.jpg'
import logo from './Asset/logo.png'

const Header = () => {
  return (
    <header className="w-full py-4 px-6 shadow-sm bg-white flex justify-items-start ">
      {/* Left Section: Logo */}
      <div className="flex justify-items-start me-8 space-x-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-lg font-semibold text-gray-800">Untitled UI</span>
      </div>

      {/* Center: Navigation Menu */}
      <nav className="hidden md:flex space-x-8 text-gray-600">
        <a href="/" className="hover:text-gray-800 transition duration-300">
          Home
        </a>
        <div className="relative group">
          <button className="hover:text-gray-800 transition duration-300 inline-flex items-center">
            Products
            <svg
              className="w-4 h-4 ml-1 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40">
            <a href="/product-1" className="block px-4 py-2 hover:bg-gray-100">
              Product 1
            </a>
            <a href="/product-2" className="block px-4 py-2 hover:bg-gray-100">
              Product 2
            </a>
            <a href="/product-3" className="block px-4 py-2 hover:bg-gray-100">
              Product 3
            </a>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-gray-800 transition duration-300 inline-flex items-center">
            Resources
            <svg
              className="w-4 h-4 ml-1 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40">
            <a href="/resource-1" className="block px-4 py-2 hover:bg-gray-100">
              Resource 1
            </a>
            <a href="/resource-2" className="block px-4 py-2 hover:bg-gray-100">
              Resource 2
            </a>
            <a href="/resource-3" className="block px-4 py-2 hover:bg-gray-100">
              Resource 3
            </a>
          </div>
        </div>

        <a href="/pricing" className="hover:text-gray-800 transition duration-300">
          Pricing
        </a>
      </nav>

      {/* Right Section: User Avatar */}
      <div className="ml-auto flex space-x-4">
        <img
          src={img}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
