// import React, { useState, useEffect } from 'react'
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Vision from "../components/Vision";
import SuccessCards from "../components/SuccessCards";
import HomePortfolio from "../components/HomePortfolio";
import HomeClient from "../components/HomeClient";
import HomeTestimonial from "../components/HomeTestimonials";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is less than or equal to 768px for mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {isMobile
            ? "A Grade Electrical Contractors in Kerala | Electrapower Engineering"
            : "A Grade Electrical Contractors in Kerala | Electrapower Engineering"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Leading A-grade Electrical contractors in Kochi. HT/LT installations, Panel Boards, statutory approval & more"
              : "Kerala's leading A-grade electrical contractors based in Kochi. Experts in HT/LT installations, Panel Board fabrication, statutory approvals & More."
          }
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar />
      <div className="home">
        <Banner />
        <Hero />
        <ImageSlider />
        <About />
        <Vision />
        <SuccessCards />
        <HomePortfolio />
        <HomeClient />
        <HomeTestimonial />
        <Connect />
        <Footer />
      </div>
    </>
  );
}

export default Home;
