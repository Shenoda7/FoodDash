import React from "react";
import { Link, NavLink } from "react-router-dom"; // Add NavLink import
import logo from "../assets/Logo.svg";
import btata from "../assets/btata.png";
import search from "../assets/search.svg";

const Header = () => {
  return (
    <div className="navbar bg-orange-light ">
      <div className="container py-2 ">
        <div className="navbar-start flex gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>
              <li>
                <Link to="/serivce">Service</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-9 px-1 text-grey-dark font-semibold text-body-md">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "hover:text-black transition-all duration-300 ease-in-out"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "hover:text-black transition-all duration-300 ease-in-out"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "hover:text-black transition-all duration-300 ease-in-out"
                }
              >
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "hover:text-black transition-all duration-300 ease-in-out"
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "hover:text-black transition-all duration-300 ease-in-out"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <button className="bg-orange-dark p-[15px] rounded-full">
            <img src={search} alt="" />
          </button>
          <img src={btata} alt="" className="w-[50px] h-[50px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
