import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Vision from "../components/Vision";
import SuccessCards from "../components/SuccessCards";
import HomeTestimonial from  "../components/HomeTestimonials"
import Connect from "../components/Connect";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <ImageSlider />
      <About/>
      <Vision/>
      <SuccessCards />
      <HomeTestimonial />
      <Connect />
      <Footer />
    </>
  )
}

export default Home