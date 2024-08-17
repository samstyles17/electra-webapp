import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Vision from "../components/Vision";
import SuccessCards from "../components/SuccessCards";
import HomePortfolio from "../components/HomePortfolio";
import HomeClient from "../components/HomeClient";
import HomeTestimonial from  "../components/HomeTestimonials"
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


function Home() {
  return (
    <>
      <Helmet>
        <title>Electrapower Engineering | HT/LT Power & Electrical Solutions | Kerala</title>
        <meta name='description' content="Trusted 'A' Grade Electrical Engineers & Contractors in Kerala. Specializing in HT/LT installations, Sub Stations, & renewable energy solutions. Energize your future with Electrapower!" />
        <link rel='canonical' href='/'/>
      </Helmet>
      <Navbar />
      <div className="home">
      <Banner />
      <Hero />
      <ImageSlider />
      <About/>
      <Vision/>
      <SuccessCards/>
      <HomePortfolio />
      <HomeClient />
      <HomeTestimonial />
      <Connect />
      <Footer />
    </div>
    </>

  )
}

export default Home