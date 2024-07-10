import React from "react";
import { useMediaQuery } from "@mui/material";
import logo from "../assets/img/logo.png";
import divider from "../assets/img/divider1.png";
import "../styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  const isMobile = useMediaQuery('(max-width:960px)'); // md breakpoint is 960px in MUI

  return (
    <>
      <div className="sticky-navbar">
        <div className="navbar bg-base-100 mt-2">
          {isMobile ? (
            <>
              <div className="navbar-start">
                <a href="/" className="ml-4">
                  <img src={logo} alt="logo" className="h-8 w-auto" /> {/* Adjusted logo size */}
                </a>
              </div>
              <div className="navbar-end mr-4">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost">
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
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0" // Adjusted position
                  >
                    <li>
                      <a href="/aboutus" className="montserrat-medium">About</a>
                    </li>
                    <li>
                      <a className="montserrat-medium">Services</a>
                    </li>
                    <li>
                      <Link to='/projectsectorial' className="montserrat-medium">Portfolio Projects</Link>
                    </li>
                    <li>
                      <a href="/allprojects" className="montserrat-medium">All Project</a>
                    </li>
                    <li>
                      <a href="/contact" className="montserrat-medium">Contact</a>
                    </li>
                    <li>
                      <a href="/enquire" className="montserrat-medium">Enquire</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
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
                      <a href="/aboutus" className="montserrat-medium">About</a>
                    </li>
                    <li>
                      <a className="montserrat-medium">Services</a>
                    </li>
                    <li>
                      <a className="montserrat-medium">Portfolio Projects</a>
                    </li>
                    <li>
                      <a href="/allprojects" className="montserrat-medium">All Project</a>
                    </li>
                  </ul>
                </div>
                <div className="ml-8">
                  <a href="/"><img src={logo} alt="logo" /></a>
                </div>
                <div className="mx-5">
                  <img src={divider} alt="divider" />
                </div>
                <div>
                  <h3 className="montserrat-regular">
                    'A' grade Electrical Contractors & Engineers
                  </h3>
                </div>
              </div>
            </>
          )}

          {!isMobile && (
            <>
              <div className="navbar-right hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a href="/aboutus" className="montserrat-medium">About</a>
                  </li>
                  <li>
                    <a className="montserrat-medium">Services</a>
                  </li>
                  <li>
                    <Link to='/projectsectorial' className="montserrat-medium">Portfolio Projects</Link>
                  </li>
                  <li>
                    <a href="/allprojects" className="montserrat-medium">All Project</a>
                  </li>
                </ul>
              </div>
              <div className="mx-3">
                <button className="btn btn-md px-8 bg-transparent rounded-full border-1 border-black">
                  <h3 className="montserrat-regular text-black">Contact</h3>
                </button>
              </div>
              <div className="">
                <button className="btn btn-md px-8 bg-orange rounded-full">
                  <h3 className="montserrat-regular text-white">Enquire</h3>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
