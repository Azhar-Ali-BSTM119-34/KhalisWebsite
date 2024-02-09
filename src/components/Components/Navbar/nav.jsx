import React from "react";
import logo from "../../assets/khalisLogo.jpg";

function Navbar() {
  return (
    <nav className="bg-black bg-opacity-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="Flowbite Logo" />
        </a>
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden md:flex flex-grow items-center justify-end"
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            <li>
              <a
                href="#"
                className="text-lg text-gray-900 hover:bg-gray-100 p-3 rounded-md md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white no-underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Services"
                className="text-lg text-gray-900 hover:bg-gray-100 p-3 rounded-md md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white no-underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/Pricing"
                className="text-lg text-gray-900 hover:bg-gray-100 p-3 rounded-md md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white no-underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="text-lg text-gray-900 hover:bg-gray-100 p-3 rounded-md md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white no-underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
