import React from 'react'
import Navbar from '../components/Navbar'
import ContactInfo from '../components/ContactInfo'
import WorkTogetherForm from '../components/WorkTogetherForm'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

function Enquire() {
  return (
    <>
        <div>
            <Navbar/>
            <ContactInfo/>
            <WorkTogetherForm/>
            <FAQ/>
            <Footer/>
        </div>
    </>
  )
}

export default Enquire