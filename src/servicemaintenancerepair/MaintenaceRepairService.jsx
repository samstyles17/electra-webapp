import {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
// import ServicePage5Content from "../components/ServicePage5Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';

import img1 from "../assets/img/service5/img1.webp";
import img2 from "../assets/img/service5/img2.webp";
import img3 from "../assets/img/service5/img3.webp";
import img4 from "../assets/img/service5/img4.webp";
import img5 from "../assets/img/service5/img5.webp";
import img6 from "../assets/img/service5/img6.webp";

const sections = [
    {
      heading: "Preventive Maintenance",
      description: "We offer proactive maintenance programs to keep your electrical systems and panel boards running smoothly. Our services include regular inspections, cleaning, testing, and calibration of equipment to prevent breakdowns and extend the lifespan of your electrical infrastructure.",
      images: [img1, img2]
    },
    {
      heading: "Corrective Maintenance",
      description: "Our team of experts is available 24/7 to respond to electrical emergencies and provide prompt repair services. We diagnose and resolve issues quickly, minimising downtime and ensuring the safety of your premises.",
      images: [img3, img4]
    },
    
    {
      heading: "Annual Maintenance Contracts (AMCs)",
      description: "Our comprehensive AMCs provide peace of mind by covering all your electrical maintenance needs. With regular inspections, preventive maintenance, and priority emergency response, we keep your electrical systems operating at peak performance.",
      images: [img5, img6]
    }
  ];
  

function MaintenaceRepairService () {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return(
    <>
        <Helmet>
          <title>
            {isMobile
              ? "Expert HT/LT Electrical Maintenance & Repair Services in Kerala"
              : "Expert HT/LT Electrical Maintenance & Repair Services in Kerala"}
          </title>
          <meta
            name="description"
            content={
              isMobile
                ? "Electrapower Engineering offers electrical maintenance services includes preventive maintenance, corrective repairs & AMCs"
                : "Prevent breakdowns & ensure safety with Electrapower Engineering's electrical maintenance services includes preventive maintenance, corrective repairs & AMCs"
            }
          />
          <link rel="canonical" href={window.location.href} />
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