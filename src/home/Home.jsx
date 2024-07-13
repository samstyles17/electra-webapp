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


function Home() {
  return (
    <>
          <Navbar />
      <div className="home">
      <Banner />
      <Hero />
      <ImageSlider />
      <About/>
      <Vision/>
      <SuccessCards />
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