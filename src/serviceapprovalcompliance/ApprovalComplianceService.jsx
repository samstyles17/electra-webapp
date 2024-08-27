// import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
// import ServicePage4Content from "../components/ServicePage4Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';

// import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service4/img1.webp";
import img2 from "../assets/img/service4/img2.webp";
import img3 from "../assets/img/service4/img3.webp";
import img4 from "../assets/img/service4/img4.webp";
import img5 from "../assets/img/service4/img5.webp";
import img6 from "../assets/img/service4/img6.webp";
import img7 from "../assets/img/service4/img7.webp";
import img8 from "../assets/img/service4/img8.webp";
import img9 from "../assets/img/service4/img9.webp";
import img10 from "../assets/img/service4/img10.webp"
const sections = [
    {
      heading: "Liaison with KSEB and Electrical Inspectorate",
      description: "We streamline the process of obtaining approvals and permits from the Kerala State Electricity Board (KSEB) and the Electrical Inspectorate. Our team handles all the necessary documentation and coordination, ensuring timely approvals and compliance with local regulations.",
      images: [img1, img2]
    },
    {
      heading: "Short Circuit and Earthing Design",
      description: "We design and install earthing systems that comply with high end safety standards and regulations. Our solutions protect your electrical systems from short circuits and ensure the safety of your personnel and equipment.",
      images: [img3, img4]
    },
    
    {
      heading: "Approval for Electrical Installations (Addition/Modification)",
      description: "We assist you in obtaining approvals for new electrical installations or modifications to existing systems. Our team ensures that your projects comply with all relevant regulations and standards.",
      images: [img5, img6]
    },
    {
      heading:"GRID-Connected Solar Plant Approvals",
      description:"We facilitate the approval process for grid-connected solar power plants from authorities- KSEB and Inspectorate. Our expertise helps you navigate the regulatory landscape and obtain timely approvals efficiently.",
      images:[img7, img8],
    },
    {
      heading: "Obtaining Sanction for Energization",
      description:"We work closely with the Electrical Inspectorate to obtain sanction for energization after a thorough inspection and compliance verification of your electrical installation.",
      images:[img9, img10]
    }
  ];
  

function MaintenaceRepairService () {
    return(
        <>
        <Helmet>
          <title>Approvals & Compliance Services | Electrapower Engineering | Kerala</title>
          <meta name='description' content='Expert electrical design and consulting services for HT/LT installations, Panel Board, Control systems, and renewable energy projects. Partner with Electrapower for efficient and reliable solutions.'/>
          <link rel='canonical' href={window.location.href}/>
        </Helmet>
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