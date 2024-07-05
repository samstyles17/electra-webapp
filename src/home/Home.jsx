import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Vision from "../components/Vision";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <ImageSlider />
      <About/>
      <Vision/>
    </>
  )
}

export default Home