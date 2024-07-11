import React from "react";
import Home from "./home/Home";
import Aboutus from "./about/Aboutus";
import AllProjects from "./pages/AllProjects";
import { Route, Routes } from "react-router-dom";
import ProjectSectorial from "./projectsectorial/ProjectSectorial";
import Enquire from "./enquire/Enquire";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/projectsectorial" element={<ProjectSectorial />} />
        <Route path="/allprojects" element={<AllProjects/>}/>
        <Route path="/enquire" element={<Enquire/>}/>
      </Routes>
    </>
  );
}