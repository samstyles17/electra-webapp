import {useState, useEffect} from 'react';
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
      images: [
        {src:img1,alt:"Value- Added Service - Energy Management Systems (EMS) - Image 1 "}, 
        {src:img2, alt:"Value- Added Service - Energy Management Systems (EMS) - Image 2"}
      ]
    },
    {
      heading: "Power Quality Analysis",
      description: "We assess power quality issues like voltage fluctuations and harmonics that can affect the performance and lifespan of your electrical equipment. Our analysis helps you identify and rectify these problems, ensuring optimal power quality for your operations",
      images: [
        {src:img3, alt:"Technician using a clamp meter to measure current in an electrical panel, highlighting Electrapower Engineering's Power Quality Analysis services."}, 
        {src:img4, alt:"Electrician using a digital power analyzer to assess power quality, showcasing Electrapower Engineering's expertise."}
      ]
    },
    
    {
      heading: "Automation and Control Systems",
      description: "We design and implement advanced automation and control solutions that enhance the efficiency, safety, and reliability of your electrical systems. Our solutions can be tailored to a wide range of industrial and commercial applications.",
      images: [
        {src:img5, alt:"Advanced control room with monitors displaying industrial processes, representing Electrapower Engineering's Automation and Control Systems expertise."}, 
        {src:img6, alt:"Industrial control panel with buttons and indicators, showcasing Electrapower Engineering's automation solution"}
      ]
    },
    {
      heading:"Building Management Systems (BMS)",
      description:"Integrate your electrical systems with a Building Management System (BMS) for centralised control and monitoring. This allows for efficient energy management, improved comfort, and enhanced security.",
      images:[
        {src:img7, alt:"Centralized control panel for building management, showcasing Electrapower Engineering's BMS solutions for energy efficiency and comfort"}, 
        {src:img8, alt:"Technician using a testing device on network cables, highlighting Electrapower Engineering's expertise in integrating BMS for efficient building management."}
      ]
    },
    {
      heading:"Electrical Safety Training",
      description:"We offer comprehensive safety training programs for your employees, covering electrical hazards, safe work practices, and emergency procedures. Our training helps create a safer working environment and reduces the risk of accidents.",
      images:[
        {src:img9, alt:"Electrician demonstrating safety procedures during electrical work, highlighting Electrapower Engineering's training program."}, 
        {src:img10, alt:"Group of electricians attending a safety training session, emphasizing Electrapower Engineering's commitment to safe practices"}
      ]
    },
    {
      heading:"Electrical Safety Audits",
      description:"Our detailed safety audits identify potential electrical hazards and ensure compliance with safety regulations. We provide comprehensive reports with recommendations for corrective actions, helping you maintain a safe and compliant electrical infrastructure.",
      images:[
        {src:img11, alt:"Electrician conducting an electrical safety audit, ensuring compliance and minimizing risks."}, 
        {src:img12, alt:"Electrician using testing equipment on an electrical panel, showcasing Electrapower Engineering's electrical safety audit process."}
      ]
    },
  ];

function MaintenaceRepairService () {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      // Set the initial value
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return(
    <>
      <Helmet>
        <title>
          {isMobile
            ? "Services - Value added service"
            : "Services - Value added service"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Optimize energy use, reduce costs, & ensure safety with Electrapower Engineering's expert electrical services."
              : "Optimize energy use, reduce costs, and ensure safety with Electrapower Engineering's expert electrical services. EMS, power quality analysis, automation & more"
          }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "Electrical Automation | Control Systems | Safety Audits & More"
          : "Electrical Automation | Control Systems | Safety Audits & More"}
        />
        <meta 
            name="keywords"
            content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, energy management systems (EMS), power quality analysis, automation, control systems, building management systems (BMS), electrical safety training, electrical safety audits, Kerala, Electrapower, electrical contractor"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MGGQC38182"></script>
        <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MGGQC38182');
            `}
        </script>
        <script type="application/ld+json">
          {
          JSON.stringify(
              {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "serviceType": "Electrical Automation | Control Systems | Safety Audits & More",
                  "provider": {
                    "@type": "Organization",
                    "name": "Electra Power",
                    "url": "https://electrapower.in/"
                  },
                  "url": "https://electrapower.in/services-valueadded",
                  "description": "Optimize energy use, reduce costs, & ensure safety with Electrapower Engineering's expert electrical services."
              }
                                    
          )
          }
            
          </script>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
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