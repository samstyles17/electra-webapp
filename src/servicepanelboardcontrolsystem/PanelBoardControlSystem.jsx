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
    images: [
      {src:img1, alt:"Electrapower Engineering technicians assembling a complex electrical panel board, showcasing their expertise in manufacturing and assembly."}, 
      {src:img2, alt:"Electrapower Engineering engineer inspecting a panel board, ensuring precise configuration and adherence to safety standards."}
    ],
    bullets: []
  },
  {
    heading: "Fabrication and Assembly",
    description: "We fabricate high-quality panel boards using premium materials and components. Our skilled technicians meticulously assemble and test each panel to ensure it meets stringent quality standards.",
    images: [
      {src:img3, alt:"A meticulously fabricated electrical panel board by Electrapower Engineering, showcasing its intricate internal components and wiring."}, 
      {src:img4, alt:"Electrapower Engineering technician skillfully assembling an electrical panel, showcasing their expertise in panel board fabrication."}
    ],
    bullets: ["Synchronisation Panels: Safe and reliable synchronisation of generators with the electrical grid."]
  },
  {
    heading: "Installation and Commissioning",
    description: "We provide professional installation and commissioning services for panel boards and control systems, ensuring seamless integration with your existing infrastructure and minimising disruptions to your operations.",
    images: [
      {src:img5, alt:"Electrapower Engineering technician expertly installing and commissioning an electrical panel board, ensuring its safe and efficient operation."}, 
      {src:img6, alt:"Electrapower Engineering technicians meticulously installing and commissioning an electrical panel board, ensuring its seamless operation."}
    ],
    bullets: []
  },
  {
    heading: "Specialized Panels",
    description: "We engineer and manufacture a wide range of custom-designed specialised panels to meet your unique industrial, commercial, and infrastructure needs. Our experienced team of engineers and technicians ensures that every panel is designed and built to the highest standards of quality, safety, and performance. We use only top-grade components and materials to guarantee long-lasting reliability.",
    images: [
      {src:img7, alt:"A complex electrical control panel in operation, monitored by an Electrapower Engineering technician ensuring its optimal performance."}, 
      {src:img8, alt:"A sophisticated electrical panel board with intricate wiring and components, demonstrating Electrapower Engineering's expertise in specialized panel systems."}
    ],
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
            ? "Services - Panel Board & Control System"
            : "Services - Panel Board & Control System"}
        </title>
        <meta
          name="description"
          content={
            isMobile
              ? "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems for your HT/LT projects."
              : "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems in Kerala. Expert solutions for optimal power management & control."
          }
        />
        <meta 
        name = "title"
        content = {isMobile
          ? "Electrical Panels & Control Systems in Kerala | Design & Fabrication"
          : "Electrical Panels & Control Systems in Kerala | Design & Fabrication"}
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
                "serviceType": "Electrical Panels & Control Systems in Kerala | Design & Fabrication",
                "provider": {
                  "@type": "Organization",
                  "name": "Electra Power",
                  "url": "https://electrapower.in/"
                },
                "url": "https://electrapower.in/services-panelboard-control-systems",
                "description": "Electrapower Engineering designs, fabricates & installs custom panel boards and control systems for your HT/LT projects."
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
