import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import divider from "../assets/img/divider2.png";

function Hero() {
  const isMobile = useMediaQuery('(max-width:960px)'); // md breakpoint is 960px in MUI

  return (
    <div 
      style={{
        padding: '4rem 1rem'
      }} 
      className="bg-white"
    >
      <div 
        style={{
          maxWidth: '90rem'
        }}
        className="mx-auto"
      >
        <div className={`flex ${isMobile ? 'flex-col items-start' : 'items-start'}`}>
          <div className={`mr-4 flex-shrink-0 ${isMobile ? 'transform rotate-90 mb-1 ml-4' : ''}`}>
            <img src={divider} alt="divider" />
          </div>
          <div className={`flex-grow ${isMobile ? 'pr-0' : 'pr-11'}`}>
            <h1 className={`mb-6 montserrat-medium ${isMobile ? 'text-xl' : 'text-3xl'}`}>
              <span className="text-blacktext">LOOK NO FURTHER FOR </span>
              <span className="text-orangetext">YOUR ULTIMATE ELECTRICAL </span>
              <span style={{ fontSize: isMobile ? '1.25rem' : '2rem', color: '#0000FF' }}>PROJECT SOLUTIONS!</span>
            </h1>
            <p className={`montserrat-regular text-darkgreytext ${isMobile ? 'text-sm' : 'text-base mr-8 pr-8'}`}>
              Our commitment to electrical expertise extends beyond mere
              service - it's a pledge. We're dedicated to shaping the world
              with every connection, driving progress forward. With us, you're
              not simply a customer; you're a valued partner in illuminating
              the path towards a powerful future.
            </p>
          </div>
          {!isMobile && (
            <Link to="/designconsultingservice">
              <button className="btn btn-md rounded-full whitespace-nowrap ml-4 bg-[#F2F2F2]">
                <h3 className="montserrat-medium px-3 text-lg">OUR SERVICES →</h3>
              </button>
            </Link>
          )}
        </div>
        {isMobile && (
          <Link to="/designconsultingservice">
            <button className="btn btn-md rounded-full whitespace-nowrap mt-4 bg-[#F2F2F2]">
              <h3 className="montserrat-medium px-3 text-lg">OUR SERVICES →</h3>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hero;