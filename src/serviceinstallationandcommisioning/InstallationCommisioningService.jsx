import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage2Content from "../components/ServicePage2Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';

import img1 from "../assets/img/service2/service2_carousel1_img1.png";
import img2 from "../assets/img/service2/service2_carousel1_img2.png";
import img3 from "../assets/img/service2/service2_carousel1_img3.png";
import img4 from "../assets/img/service2/service2_carousel2_img1.png";
import img5 from "../assets/img/service2/service2_carousel2_img2.png";
import img6 from "../assets/img/service2/service2_carousel2_img3.png";
import img7 from "../assets/img/service2/service2_carousel3_img2.png";
import img8 from "../assets/img/service2/service2_carousel3_img3.png";
import img9 from "../assets/img/service2/service2_carousel3_img4.png";
import img10 from "../assets/img/service2/service2_carousel4_img1.png";
import img11 from "../assets/img/service2/service2_carousel4_img2.png";
import img12 from "../assets/img/service2/service2_carousel4_img3.png";

const sections = [
  {
    heading: "Electrical Installations (HT/LT):",
    description: "Our skilled electricians provide professional installation services for high-tension (HT) and low-tension (LT) electrical systems. We ensure seamless integration of switchgear, transformers, panels, and other equipment, adhering to the highest safety and quality standards.",
    images: [img1, img2]
  },
  {
    heading: "Internal Electrification:",
    description: "We offer comprehensive internal electrification solutions for residential, commercial, industrial and infrastructure projects of any scale. Our services include wiring, lighting installations, outlet and switch installations, and integration with automation systems.",
    images: [img4, img5]
  },
  {
    heading: "Specialised Installations",
    description: "Electra Power Engineering specialises in the installation of complex electrical systems, including:",
    bullets: [
      "Generators and Backup Power Systems",
      "Solar Power Systems (Rooftop and Ground-Mounted)",
      "Electric Vehicle (EV) Charging Stations",
      "Fire Alarm Systems and Emergency Lighting"
    ],
    images: [img7, img8]
  },
  {
    heading: "Testing and Commissioning",
    description: "We rigorously test and commission all electrical installations to ensure optimal performance, safety, and compliance with industry standards. Our meticulous approach minimises downtime and ensures the longevity of your electrical systems.",
    images: [img10, img11]
  }
];


function InstallationCommisioningService () {
    return(
        <>
          <Navbar/>
          <div className='service-all-width'>
            <ServicePageText/>
            <section id='services'>
            <ServicePageButton />
            <Services data={sections}/>
            </section>
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
           </div>
        </>

    )
}

export default InstallationCommisioningService;