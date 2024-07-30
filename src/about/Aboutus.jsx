import React, { useRef, useEffect } from "react";
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
import SectionComponent from "../components/SectionComponent";

function Aboutus() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    rowRefs.current.forEach(row => {
      if (row) observer.observe(row);
    });

    return () => {
      rowRefs.current.forEach(row => {
        if (row) observer.unobserve(row);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="aboutus">
        <div ref={el => rowRefs.current[0] = el}><AboutSec1 /></div>
        <div ref={el => rowRefs.current[1] = el}><SectionComponent/></div>
        <div ref={el => rowRefs.current[2] = el}><WhyChoose /></div>
        <div ref={el => rowRefs.current[3] = el}><OurTeam /></div>
        <div ref={el => rowRefs.current[4] = el}><OurPeople/></div>
        <div ref={el => rowRefs.current[5] = el}><IntegrityCarousel/></div>
        <div ref={el => rowRefs.current[6] = el}><PartnerSection/></div>
        <div ref={el => rowRefs.current[7] = el}><Footer /></div>
      </div>
    </>
  );
}

export default Aboutus;
