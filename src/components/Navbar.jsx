import React from "react";
import logo from "../assets/img/logo.png";
import divider from "../assets/img/divider1.png";
import "../styles.css";

function Navbar() {
  return (
    <>
      <div className="sticky-navbar">
        <div className="navbar bg-base-100 mt-2">
          <div className="navbar-start flex items-center">
            <div className="ml-2 lg:ml-8">
              <a href="/">
                <img src={logo} alt="logo" className="h-8 w-auto" />
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex items-center">
            <div className="mx-5">
              <img src={divider} alt="divider" className="h-4 w-auto" />
            </div>
            <div>
              <h3 className="montserrat-regular text-sm">
                'A' grade Electrical Contractors & Engineers
              </h3>
            </div>
          </div>
          <div className="navbar-end flex items-center">
            <div className="hidden lg:flex items-center">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="/aboutus" className="montserrat-medium">
                    About
                  </a>
                </li>
                <li>
                  <a className="montserrat-medium">Services</a>
                </li>
                <li>
                  <a className="montserrat-medium">Portfolio Projects</a>
                </li>
                <li>
                  <a className="montserrat-medium">All Project</a>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex mx-3">
              <button className="btn btn-md px-8 bg-transparent rounded-full border-1 border-black">
                <h3 className="montserrat-regular text-black">Contact</h3>
              </button>
            </div>
            <div className="hidden lg:flex">
              <button className="btn btn-md px-8 bg-orange rounded-full">
                <h3 className="montserrat-regular text-white">Enquire</h3>
              </button>
            </div>
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost ml-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 w-30 shadow"
              >
                <li>
                  <a href="/aboutus" className="montserrat-medium">
                    About
                  </a>
                </li>
                <li>
                  <a className="montserrat-medium">Services</a>
                </li>
                <li>
                  <a className="montserrat-medium">Portfolio Projects</a>
                </li>
                <li>
                  <a className="montserrat-medium">All Project</a>
                </li>
                <li>
                  <a className="montserrat-medium">Contact</a>
                </li>
                <li>
                  <a className="montserrat-medium">Enquire</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
