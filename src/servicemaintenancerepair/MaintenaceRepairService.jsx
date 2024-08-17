import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage5Content from "../components/ServicePage5Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';

import img1 from "../assets/img/service4/service4_carousel1_img1.png";
import img2 from "../assets/img/service4/service4_carousel1_img2.png";
import img3 from "../assets/img/service4/service4_carousel1_img3.png";
import img4 from "../assets/img/service4/service4_carousel1_img4.png";
import img5 from "../assets/img/service4/service4_carousel1_img5.png";
import img6 from "../assets/img/service4/service4_carousel1_img6.png";
import img7 from "../assets/img/service4/service4_carousel2_img1.png";
import img8 from "../assets/img/service4/service4_carousel2_img2.png";
import img9 from "../assets/img/service4/service4_carousel2_img3.png";
import img10 from "../assets/img/service4/service4_carousel2_img4.png";
import img11 from "../assets/img/service4/service4_carousel2_img5.png";
import img12 from "../assets/img/service4/service4_carousel2_img6.png";
import img13 from "../assets/img/service4/service4_carousel3_img1.png";
import img14 from "../assets/img/service4/service4_carousel3_img2.png";

const sections = [
    {
      heading: "Preventive Maintenance",
      description: "We offer proactive maintenance programs to keep your electrical systems and panel boards running smoothly. Our services include regular inspections, cleaning, testing, and calibration of equipment to prevent breakdowns and extend the lifespan of your electrical infrastructure.",
      images: [img7, img6]
    },
    {
      heading: "Corrective Maintenance",
      description: "Our team of experts is available 24/7 to respond to electrical emergencies and provide prompt repair services. We diagnose and resolve issues quickly, minimising downtime and ensuring the safety of your premises.",
      images: [img4, img1]
    },
    
    {
      heading: "Annual Maintenance Contracts (AMCs)",
      description: "Our comprehensive AMCs provide peace of mind by covering all your electrical maintenance needs. With regular inspections, preventive maintenance, and priority emergency response, we keep your electrical systems operating at peak performance.",
      images: [img13, img14]
    }
  ];
  

function MaintenaceRepairService () {
    return(
    <>
        <Helmet>
          <title>Maintenace & Repair Services | Electrapower Engineering | Kerala</title>
          <meta name='description' content='Expert electrical design and consulting services for HT/LT installations, Panel Board, Control systems, and renewable energy projects. Partner with Electrapower for efficient and reliable solutions.'/>
          <link rel='canonical' href='/maintenacerepairservice'/>
          <link />
        </Helmet>
        <Navbar/>
        <div className='service-all-width'>
            <ServicePageText/>
            <section id='services'>
            <ServicePageButton />
            <Services data={sections} />
            </section>
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
        </div>
    </>
   
    )
}

export default MaintenaceRepairService;