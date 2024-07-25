import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ContactInfo from '../components/ContactInfo'
import WorkTogetherForm from '../components/WorkTogetherForm'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

function Enquire() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div>
        <Navbar/>
        <div id="contactInfo">
          <ContactInfo/>
        </div>
        <div id="workTogetherForm">
          <WorkTogetherForm/>
        </div>
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}

export default Enquire