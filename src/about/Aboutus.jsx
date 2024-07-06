import React from "react";
import AboutSec1 from "../components/AboutSec1";
import Navbar from "../components/Navbar";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import WhyChoose from "../components/WhyChoose";
import OurTeam from "../components/OurTeam";

function Aboutus() {
  return (
    <>
      <div>
        <Navbar />
        <AboutSec1 />
        <Vision />
        <Mission />
        <WhyChoose />
        <OurTeam />
      </div>
    </>
  );
}

export default Aboutus;
