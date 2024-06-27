import React from "react";
import divider from "../assets/img/divider2.png";

function Hero() {
  return (
    <div className="bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
            <div className="my-1">
                <img src={divider} alt="" />
            </div>
          <div className="max-w-4xl">
            <h1 className="text-3xl montserrat-medium mb-6">
              <span className="text-blacktext">LOOK NO FURTHER FOR </span>
              <span className="text-orangetext">YOUR ULTIMATE ELECTRICAL </span>
              <span className="text-bluetext">PROJECT SOLUTIONS!</span>
            </h1>
            <p className="montserrat-regular text-darkgreytext">
              Our commitment to electrical expertise extends beyond mere
              service - it's a pledge. We're dedicated to shaping the world
              with every connection, driving progress forward. With us, you're
              not simply a customer; you're a valued partner in illuminating
              the path towards a powerful future.
            </p>
          </div>
          <button className="btn btn-md btn-greybtn rounded-full whitespace-nowrap">
            <h3 className="montserrat-medium px-3 text-lg">OUR SERVICES →</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;