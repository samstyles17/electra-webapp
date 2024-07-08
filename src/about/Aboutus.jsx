import React from "react";
import AboutSec1 from "../components/AboutSec1";
import Navbar from "../components/Navbar";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import WhyChoose from "../components/WhyChoose";
import OurTeam from "../components/OurTeam";
import OurPeople from "../components/OurPeople";
import IntegrityCarousel from "../components/IntegrityCarousel";
import PartnerSection from "../components/PartnerSection";
import Footer from "../components/Footer";


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
        <OurPeople/>
        <IntegrityCarousel/>
        <PartnerSection/>
        <Footer/>
      </div>
    </>
  );
}

export default Aboutus;
