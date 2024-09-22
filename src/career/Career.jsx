import React from 'react'
import Navbar from '../components/Navbar'
import CareerHeader from '../components/CareerHeader'
import JobApplication from '../components/JobApplication'
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function Career() {
  return (
    <>
    <Helmet>
      <title>
        Electrapower Engineering Careers: Join Our Team for a Powerful Future
      </title>
      <meta 
        name = "description"
        content = "Explore exciting career opportunities at Electrapower Engineering, a leading 'A' grade electrical engineering and contracting company in Kerala"
      />
      <meta 
        name="keywords"
        content= "Electrapower, Electrapower Engineering,Jobs, Electrical, Engineering, Contractor"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Electrapower Engineering" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
    <div className='careers-container'>
    <Navbar/>
        <CareerHeader/>
        <JobApplication/>
        <Footer/>
    </div>
        
    </>
  )
}

export default Career