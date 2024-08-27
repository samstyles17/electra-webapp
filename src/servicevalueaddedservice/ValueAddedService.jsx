// import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
// import ServicePage6Content from "../components/ServicePage6Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';

import img1 from "../assets/img/service6/img1.webp";
import img2 from "../assets/img/service6/img2.webp";
import img3 from "../assets/img/service6/img3.webp";
import img4 from "../assets/img/service6/img4.webp";
import img5 from "../assets/img/service6/img5.webp";
import img6 from "../assets/img/service6/img6.webp";
import img7 from "../assets/img/service6/img7.webp";
import img8 from "../assets/img/service6/img8.webp";
import img9 from "../assets/img/service6/img9.webp";
import img10 from "../assets/img/service6/img10.webp";
import img11 from "../assets/img/service6/img11.webp";
import img12 from "../assets/img/service6/img12.webp";


const sections = [
    {
      heading: "Energy Management Systems (EMS)",
      description: "Our EMS solutions enable you to monitor, analyse, and optimise energy consumption in your buildings or facilities. By identifying energy-saving opportunities, you can reduce costs and contribute to a greener environment.",
      images: [img1, img2]
    },
    {
      heading: "Power Quality Analysis",
      description: "We assess power quality issues like voltage fluctuations and harmonics that can affect the performance and lifespan of your electrical equipment. Our analysis helps you identify and rectify these problems, ensuring optimal power quality for your operations",
      images: [img3, img4]
    },
    
    {
      heading: "Automation and Control Systems",
      description: "We design and implement advanced automation and control solutions that enhance the efficiency, safety, and reliability of your electrical systems. Our solutions can be tailored to a wide range of industrial and commercial applications.",
      images: [img5, img6]
    },
    {
      heading:"Building Management Systems (BMS)",
      description:"Integrate your electrical systems with a Building Management System (BMS) for centralised control and monitoring. This allows for efficient energy management, improved comfort, and enhanced security.",
      images:[img7, img8]
    },
    {
      heading:"Electrical Safety Training",
      description:"We offer comprehensive safety training programs for your employees, covering electrical hazards, safe work practices, and emergency procedures. Our training helps create a safer working environment and reduces the risk of accidents.",
      images:[img9, img10]
    },
    {
      heading:"Electrical Safety Audits",
      description:"Our detailed safety audits identify potential electrical hazards and ensure compliance with safety regulations. We provide comprehensive reports with recommendations for corrective actions, helping you maintain a safe and compliant electrical infrastructure.",
      images:[img11, img12]
    },
  ];

function MaintenaceRepairService () {
    return(
<>
<Helmet>
  <title>Value Added Services | Electrapower Engineering | Kerala</title>
  <meta name='description' content='Expert electrical design and consulting services for HT/LT installations, Panel Board, Control systems, and renewable energy projects. Partner with Electrapower for efficient and reliable solutions'/>
  <link rel='canonical' href={window.location.href}/>
</Helmet>
<Navbar/>
        <div className='service-all-width'>
            <ServicePageText/>
            <section id='services'>
            <ServicePageButton />
            <Services data={sections}  />
            </section>
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
        </div>
</>

    )
}

export default MaintenaceRepairService;