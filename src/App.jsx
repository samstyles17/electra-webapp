import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import ImageSlider from "./components/ImageSlider";
import About from "./components/About";
export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <ImageSlider />
      <About/>
    </>
  );
}
