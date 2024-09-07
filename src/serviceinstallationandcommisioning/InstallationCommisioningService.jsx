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
    images: [img1, img3]
  },
  {
    heading: "Internal Electrification:",
    description: "We offer comprehensive internal electrification solutions for residential, commercial, industrial and infrastructure projects of any scale. Our services include wiring, lighting installations, outlet and switch installations, and integration with automation systems.",
    images: [img6, img4]
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
    images: [img10, img12]
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
