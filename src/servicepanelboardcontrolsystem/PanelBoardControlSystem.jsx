import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import ServicePageText from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
// import ServicePage3Content from "../components/ServicePage3Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

// import titleDivider from "../assets/img/service_text_divider.png";
import img1 from "../assets/img/service3/img1.webp";
import img2 from "../assets/img/service3/img2.webp";
import img3 from "../assets/img/service3/img3.webp";
import img4 from "../assets/img/service3/img4.webp";
import img5 from "../assets/img/service3/img5.webp";
import img6 from "../assets/img/service3/img6.webp";
import img7 from "../assets/img/service3/img7.webp";
import img8 from "../assets/img/service3/img8.webp";
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
    bullets: ["Synchronisation Panels: Safe and reliable synchronisation of generators with the electrical grid."]
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
    images: [img7, img8],
    bullets: [
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

function PanelBoardControlSystemService() {
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
            ? "Electrical Panels & Control Systems in Kerala | Design & Fabrication"
            : "Electrical Panels & Control Systems in Kerala | Design & Fabrication"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems for your HT/LT projects."
              : "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems in Kerala. Expert solutions for optimal power management & control."
          }
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar />
      <div className="service-all-width">
        <ServicePageText />
        <section id="services">
          <ServicePageButton />
          <Services data={sections} panel={true} />
          <ServicePageBottomButton />
        </section>
        <ServiceFooterCarousel />
        <Footer />
      </div>
    </>
  );
}

export default PanelBoardControlSystemService;
