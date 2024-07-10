import React from "react";
import Home from "./home/Home";
import Aboutus from "./about/Aboutus";
import { Route, Routes } from "react-router-dom";
import Enquire from "./enquire/Enquire";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/enquire" element={<Enquire/>}/>
      </Routes>
    </>
  );
}
