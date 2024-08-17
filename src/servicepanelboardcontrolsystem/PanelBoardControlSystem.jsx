import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage3Content from "../components/ServicePage3Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service3/service3_carousel1_img1.png";
import img2 from "../assets/img/service3/service3_carousel1_img2.png";
import img3 from "../assets/img/service3/service3_carousel2_img1.png";
import img4 from "../assets/img/service3/service3_carousel2_img2.png";
import img5 from "../assets/img/service3/service3_carousel3_img1.png";
import img6 from "../assets/img/service3/service3_carousel3_img2.png";
import img7 from "../assets/img/service3/service3_carousel3_img3.png";
import img8 from "../assets/img/service3/service3_carousel4_img1.png";
import img9 from "../assets/img/service3/service3_carousel4_img2.png";
import img10 from "../assets/img/service3/service3_carousel4_img3.png";
import img11 from "../assets/img/service3/service3_carousel4_img4.png";
import Services from '../components/Services/Services';




const sections = [
  {
    heading: "Design and Engineering",
    description: "Our experienced engineers design custom panel boards and control systems tailored to your specific needs. We incorporate the latest automation and control technologies, ensuring efficient and reliable operation of your electrical systems.",
    images: [img1, img2],
    bullets: []
  },
  {
    heading: "Fabrication and Assembly",
    description: "We fabricate high-quality panel boards using premium materials and components. Our skilled technicians meticulously assemble and test each panel to ensure it meets stringent quality standards.",
    images: [img3, img4],
    bullets: [   "Synchronisation Panels: Safe and reliable synchronisation of generators with the electrical grid."]
  },
  {
    heading: "Installation and Commissioning",
    description: "We provide professional installation and commissioning services for panel boards and control systems, ensuring seamless integration with your existing infrastructure and minimising disruptions to your operations.",
    images: [img5, img6],
    bullets: []
  },
  {
    heading: "Specialized Panels",
    description: "We engineer and manufacture a wide range of custom-designed specialised panels to meet your unique industrial, commercial, and infrastructure needs. Our experienced team of engineers and technicians ensures that every panel is designed and built to the highest standards of quality, safety, and performance. We use only top-grade components and materials to guarantee long-lasting reliability.",
    images: [img8, img11],
    bullets :  [
      "Power Control Centers (PCCs): Centralised control and protection for high-voltage power distribution systems.",
      "Motor Control Centers (MCCs): Efficient control and protection for multiple motors in industrial settings.",
      "Generator Control Panels: Seamless integration and control of generators for backup power supply.",
      "Automatic Mains Failure (AMF) Panels: Reliable automatic switching to backup power in case of mains failure.",
      "Programmable Logic Controller (PLC) Panels: Versatile automation control solutions for complex industrial processes.",
      "Rittal Panels (modular enclosure systems): Versatile and scalable enclosures for various electrical applications.",
      "Automatic Power Factor Correction (APFC) Panels: Improve power factor and reduce energy costs for optimal efficiency.",
      "Control Desks: Ergonomic operator interfaces for efficient monitoring and control of electrical systems.",
      "Drive Panels (VFD Panels): Precise control of motor speed and torque for enhanced energy efficiency.",
      "Metering Panels: Accurate energy monitoring and data collection for informed decision-making.",
      "Bus Duct Systems: Efficient and flexible power distribution for large commercial and industrial facilities.",
      "Synchronisation Panels: Safe and reliable synchronisation of generators with the electrical grid."
    ]
  }
];

function PanelBoardControlSystemService () {
    return(
        <>
        <Helmet>
          <title>Panel Board & Control Systems Service | Electrapower Engineering | Kerala</title>
          <meta name='description' content='Expert electrical design and consulting services for HT/LT installations, Panel Board, Control systems, and renewable energy projects. Partner with Electrapower for efficient and reliable solutions.'/>
          <link rel='canonical' href={window.location.href}/>
        </Helmet>
        <Navbar/>
        <div className='service-all-width'>
            <ServicePageText/>
            <section id='services'>
            <ServicePageButton />
            <Services data={sections} panel={true} />
            <ServicePageBottomButton />
            </section>
            <ServiceFooterCarousel/>
            <Footer/>
        </div>
        </>
    )
}

export default PanelBoardControlSystemService;