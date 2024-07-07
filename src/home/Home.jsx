import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Vision from "../components/Vision";
import Footer from "../components/Footer";
import Connect from "../components/Connect";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <ImageSlider />
      <About/>
      <Vision/>
      <Connect />
      <Footer />
    </>
  )
}

export default Home