import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage4Content from "../components/ServicePage4Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';

import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service5/service5_carousel1_img1.png";
import img2 from "../assets/img/service5/service5_carousel1_img2.png";
import img3 from "../assets/img/service5/service5_carousel1_img3.png";
import img4 from "../assets/img/service5/service5_carousel1_img4.png";
import img5 from "../assets/img/service5/service5_carousel2_img1.png";
import img6 from "../assets/img/service5/service5_carousel2_img2.png";
import img7 from "../assets/img/service5/service5_carousel3_img1.png";
import img8 from "../assets/img/service5/service5_carousel3_img2.png";
import img9 from "../assets/img/service5/service5_carousel3_img3.png";
import img10 from "../assets/img/service5/service5_carousel3_img4.png";
import img11 from "../assets/img/service5/service5_carousel4_img1.png";
import img12 from "../assets/img/service5/service5_carousel4_img2.png";
import img13 from "../assets/img/service5/service5_carousel5_img1.png";
import img14 from "../assets/img/service5/service5_carousel5_img2.png";
import img15 from "../assets/img/service5/service5_carousel5_img3.png";
import img16 from "../assets/img/service5/service5_carousel5_img4.png";
const sections = [
    {
      heading: "Liaison with KSEB and Electrical Inspectorate",
      description: " We streamline the process of obtaining approvals and permits from the Kerala State Electricity Board (KSEB) and the Electrical Inspectorate. Our team handles all the necessary  documentation and coordination, ensuring timely approvals and compliance with local regulation.",
      images: [img1, img2]
    },
    {
      heading: "Short Circuit and Earthing Design",
      description: "We design and install earthing systems that comply with high end safety standards and regulations. Our solutions protect your electrical systems from short circuits and ensure the safety of your personnel and equipment.",
      images: [img5, img6]
    },
    
    {
      heading: "Approval for Electrical Installations (Addition/Modification)",
      description: "We assist you in obtaining approvals for new electrical installations or modifications to existing systems. Our team ensures that your projects comply with all relevant regulations and standards.",
      images: [img7, img8]
    },
    {
      heading:"GRID-Connected Solar Plant Approvals",
      description:"We facilitate the approval process for grid-connected solar power plants from authorities- KSEB and Inspectorate. Our expertise helps you navigate the regulatory landscape and obtain timely approvals efficiently.",
      images:[img11, img12],
    },
    {
      heading: "Obtaining Sanction for Energization",
      description:"We work closely with the Electrical Inspectorate to obtain sanction for energization after a thorough inspection and compliance verification of your electrical installation.",
      images:[img13, img14]
    }
  ];
  

function MaintenaceRepairService () {
    return(
        <>
        <Navbar/>
        <div className="service-all-width">
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