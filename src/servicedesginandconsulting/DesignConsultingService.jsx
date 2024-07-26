import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage1Content from "../components/ServicePage1Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';

import img1 from "../assets/img/service1/service1_carousel1_img1.png";
import img2 from "../assets/img/service1/service1_carousel1_img2.png";
import img4 from "../assets/img/service1/service1_carousel2_img1.png";
import img5 from "../assets/img/service1/service1_carousel2_img2.png";
import img7 from "../assets/img/service1/service1_carousel3_img1.png";
import img8 from "../assets/img/service1/service1_carousel3_img2.png";
import img10 from "../assets/img/service1/service1_carousel4_img1.png";
import img11 from "../assets/img/service1/service1_carousel4_img2.png";


const sections = [
    {
      heading: "Electrical System Design",
      description: "Electra Power Engineering provides expert electrical system design services for residential, commercial, industrial, and infrastructure projects. Our experienced engineers leverage the latest technologies and industry best practices to create tailored designs that optimise safety, efficiency, and cost-effectiveness.",
      bullets_heading: "We are specialise in",
      bullets: [
        "Conceptual Design and Load Calculations",
        "Detailed Engineering Design (Schematic Drawings, Cable Schedules, Equipment Layouts)",
        "Design for specific applications"
      ],
      images: [img1, img2]
    },
    {
      heading: "Energy Audits And Analysis",
      description: "Our comprehensive energy audits identify opportunities to reduce energy consumption and lower costs. We analyse your existing electrical systems, identify inefficiencies, and recommend tailored solutions that align with your budget and sustainability goals.",
      bullets: [
    
      ],
      images: [img4, img5]
    },
    {
      heading: "Value Engineering",
      description: "We specialise in value engineering, optimising your electrical designs to minimise costs without compromising quality or safety. Our team of experts identifies cost-effective alternatives and innovative solutions to maximise the value of your investment.",
      bullets: [
     
      ],
      images: [img7, img8]
    },
    {
      heading: "Technical Consulting",
      description: "Need expert advice on electrical codes, standards, or regulations? Electra Power Engineering offers comprehensive technical consulting services. We provide feasibility studies, technical due diligence, and expert recommendations to ensure your electrical projects are compliant, safe, and efficient.",
      bullets: [
      
      ],
      images: [img10, img11]
    }
  ];
  

function DesignConsultingService () {
    return(
        <>
            <Navbar/>
            <ServicePageText/>
            <section id='services'>
            <ServicePageButton />
            <Services data={sections} />
            </section>
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
            
        </>
    )
}

export default DesignConsultingService;