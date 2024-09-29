import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 bg-black shadow-md mt-3 p-4 rounded-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo Start */}
        <Link to="/">
          <span className="self-center text-4xl text-white font-bold hover:text-gray-300 transition duration-300">
          BlogNest
          </span>
        </Link>
        {/* Logo End */}

        {/* Hamburger Start */}
        <label className="btn-circle bg-black swap swap-rotate md:hidden">
          <input onClick={toggleMenu} type="checkbox" />
          <svg
            className="swap-off fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {/* Hamburger End */}

        {/* Navbar Links Start */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
         <ul  className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 bg-gray-800">
            <li>
              <Link
                 className="block py-2 px-4 text-white rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-300"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                 className="block py-2 px-4 text-white rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-300"
                to="/dashboard"
              >
                DashBoard
              </Link>
            </li>
            <li>
              <Link
 className="block py-2 px-4 text-white rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-300"                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-4 text-white rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-300"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
 className="block py-2 px-4 text-white rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-300"                to="/register"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-4 text-white rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-300"
                to="/logout"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
        {/* Navbar Links End */}

      </div>
    </nav>
  );
};

export default Navbar;
// className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 bg-gray-800"
//  className="block py-2 px-4 text-white rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg md:hover:bg-transparent md:border-0 md:hover:text-gray-300"