import React from "react";
import Home from "./home/Home";
import Aboutus from "./about/Aboutus";
import { Route, Routes } from "react-router-dom";
import ProjectSectorial from "./projectsectorial/ProjectSectorial";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/projectsectorial" element={<ProjectSectorial />} />
      </Routes>
    </>
  );
}
