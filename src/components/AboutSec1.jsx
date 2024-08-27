import React from 'react'

import '../styles.css'; // Ensure to import your CSS file
import aboutusimg from "../assets/img/aboutusimg1_webimage.webp"; 


function AboutSec1() {
  return (
    <>
     
      <div className="aboutus-container">
        <div className="aboutus-image-section">
          <img src={aboutusimg} alt="Engineer" className="aboutus-image" />
        </div>
        <div className="aboutus-text-section">
          <h3 className="aboutus-heading montserrat-medium">ELECTRA POWER ENGINEERING</h3>
          <h1 className="aboutus-title text-orange"><span className="text-bluetext">Energise A</span> Powerful <span className='text-black'>Future</span></h1>
          <p className="aboutus-paragraph montserrat-regular">
            Established in 2013, We are an ‘A’ grade HT electrical contracting firm based out of Kerala built on a legacy of trust and technical excellence. We are a team of seasoned technocrats, wielding a wealth of experience and knowledge to deliver comprehensive electrical solutions for projects of any scale.
          </p>
          <p className="aboutus-paragraph montserrat-regular">
            Our expertise encompasses every stage of your electrification journey – from conceptual design and meticulous planning to flawless execution with robust liaisoning. We operate with a customer-centric approach, prioritising clear communication and a deep understanding of your unique needs.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutSec1