import React from 'react'
import Navbar from '../components/Navbar'
import CareerHeader from '../components/CareerHeader'
import JobApplication from '../components/JobApplication'
import Footer from "../components/Footer";

function Career() {
  return (
    <>
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