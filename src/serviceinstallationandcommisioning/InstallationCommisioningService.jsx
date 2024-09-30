import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import ServicePageText from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';

import img1 from "../assets/img/service2/img1.webp";
import img3 from "../assets/img/service2/img2.webp";
import img4 from "../assets/img/service2/img3.webp";
import img6 from "../assets/img/service2/img4.webp";
import img7 from "../assets/img/service2/img5.webp";
import img8 from "../assets/img/service2/img6.webp";
import img10 from "../assets/img/service2/img7.webp";
import img12 from "../assets/img/service2/img8.webp";

const sections = [
  {
    heading: "Electrical Installations (HT/LT):",
    description: "Our skilled electricians provide professional installation services for high-tension (HT) and low-tension (LT) electrical systems. We ensure seamless integration of switchgear, transformers, panels, and other equipment, adhering to the highest safety and quality standards.",
    images: [
      {src:img1, alt:"High-voltage electrical equipment with insulators and wires, showcasing Electrapower Engineering's expertise in HT/LT Electrical Installations and Commissioning"}, 
      {src:img3, alt:"Electricians working on high-voltage electrical installations, showcasing Electrapower Engineering's expertise in HT/LT Electrical Installations & Commissioning"}
    ]
  },
  {
    heading: "Internal Electrification:",
    description: "We offer comprehensive internal electrification solutions for residential, commercial, industrial and infrastructure projects of any scale. Our services include wiring, lighting installations, outlet and switch installations, and integration with automation systems.",
    images: [
      {src:img6, alt:"A jumble of wires and electrical components inside an open electrical panel, highlighting the importance of professional Internal Electrification services by Electrapower Engineering."},
      {src:img4, alt:"An electrical panel with organized wiring and components, demonstrating Electrapower Engineering's professional Internal Electrification services."}
    ]
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
    images: [
      {src:img7, alt:"Electrapower Engineering technician working on a complex electrical panel, demonstrating their expertise in Specialized Installations & Commissioning"}, 
      {src:img8, alt:"Electrapower Engineering technicians skillfully installing solar panels in a challenging environment, showcasing their expertise in Specialized Installations"}
    ]
  },
  {
    heading: "Testing and Commissioning",
    description: "We rigorously test and commission all electrical installations to ensure optimal performance, safety, and compliance with industry standards. Our meticulous approach minimises downtime and ensures the longevity of your electrical systems.",
    images: [
      {src:img10, alt:"Electrapower Engineering technicians performing testing and commissioning procedures on electrical equipment"}, 
      {src:img12, alt:"Electrapower Engineering's Testing and Commissioning services, ensuring the safety and functionality of electrical systems."}
    ]
  }
];

function InstallationCommisioningService() {
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

  return (
    <>
      <Helmet>
        <title>
          {isMobile
            ? "Electrical Installation & Commissioning | Electrapower Engineering"
            : "Electrical Installation & Commissioning | Electrapower Engineering"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Need reliable electrical installations in Kerala? Electrapower Engineering provides HT/LT specialised installations, internal electrification & more!"
              : "Need reliable electrical installations in Kerala? Electrapower Engineering's skilled electricians handle HT/LT specialised installations, internal electrification & more!"
          }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "Electrical Installation & Commissioning | Electrapower Engineering"
          : "Electrical Installation & Commissioning | Electrapower Engineering"} 
        />
        <meta 
            name="keywords"
            content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, panel board, control systems, electrical panel, custom panel design, panel fabrication, installation, commissioning, PCC, MCC, generator control panel, AMF panel, PLC panel, Rittal panel, APFC panel, control desk, VFD panel, metering panel, bus duct system, synchronization panel, Kerala, Electrapower, electrical contractor"
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
                  "serviceType": "Electrical Installation & Commissioning | Electrapower Engineering",
                  "provider": {
                    "@type": "Organization",
                    "name": "Electra Power",
                    "url": "https://electrapower.in/"
                  },
                  "url": "https://electrapower.in/services-installation-commisioning",
                  "description": "Need reliable electrical installations in Kerala? Electrapower Engineering's skilled electricians handle HT/LT specialised installations, internal electrification & more!"
              }
                                    
          )
          }
          
          </script>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar />
      <div className="service-all-width">
        <ServicePageText />
        <section id="services">
          <ServicePageButton />
          <Services data={sections} />
        </section>
        <ServicePageBottomButton />
        <ServiceFooterCarousel />
        <Footer />
      </div>
    </>
  );
}

export default InstallationCommisioningService;
