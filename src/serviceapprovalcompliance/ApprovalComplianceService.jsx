import {useState,useEffect} from 'react';
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
      images: [
        {src:img1, alt:"Documents and paperwork related to electrical approvals and compliance, representing Electrapower Engineering's liaison services with KSEB and the Electrical Inspectorate."}, 
        {src:img2, alt:"Electrapower Engineering's commitment to navigating the regulatory landscape for electrical projects in Kerala."}
      ]
    },
    {
      heading: "Short Circuit and Earthing Design",
      description: "We design and install earthing systems that comply with high end safety standards and regulations. Our solutions protect your electrical systems from short circuits and ensure the safety of your personnel and equipment.",
      images: [
        {src:img3, alt:"Electrapower Engineering technician using a thermal imaging camera to inspect electrical equipment, demonstrating their expertise in short circuit and earthing design for compliance and safety."}, 
        {src:img4, alt:"Electrical blueprints, circuit breaker, multimeter, and tools, showcasing Electrapower Engineering's focus on short circuit and earthing design for safety and compliance."}
      ]
    },
    
    {
      heading: "Approval for Electrical Installations (Addition/Modification)",
      description: "We assist you in obtaining approvals for new electrical installations or modifications to existing systems. Our team ensures that your projects comply with all relevant regulations and standards.",
      images: [
        {src:img5,alt:"Hands organizing paperwork, symbolizing Electrapower Engineering's meticulous approach to securing approvals for electrical installations and modifications."}, 
        {src:img6, alt:"Person reviewing documents, representing Electrapower Engineering's diligence in obtaining approvals for electrical installations and modifications."}
      ]
    },
    {
      heading:"GRID-Connected Solar Plant Approvals",
      description:"We facilitate the approval process for grid-connected solar power plants from authorities- KSEB and Inspectorate. Our expertise helps you navigate the regulatory landscape and obtain timely approvals efficiently.",
      images:[
        {src:img7,alt:"Stack of documents with a pen, symbolizing Electrapower Engineering's expertise in securing grid-connected solar plant approvals."}, 
        {src:img8, alt:"Solar panels on a rooftop, representing Electrapower Engineering's expertise in obtaining grid-connected solar plant approvals."}
      ],
    },
    {
      heading: "Obtaining Sanction for Energization",
      description:"We work closely with the Electrical Inspectorate to obtain sanction for energization after a thorough inspection and compliance verification of your electrical installation.",
      images:[
        {src:img9, alt:"Close-up of a person signing a document, representing Electrapower Engineering's assistance in obtaining necessary sanctions for energization projects."}, 
        {src:img10, alt:"Close-up of a hand signing a document, symbolizing Electrapower Engineering's assistance in obtaining energization sanctions."}
      ]
    }
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
              ? "KSEB & Electrical Inspectorate Approvals on time | HT/LT Projects"
              : "KSEB & Electrical Inspectorate Approvals on time | HT/LT Projects"}
          </title>
          <meta
            name="description"
            content={
              isMobile
                ? "Electrapower Engineering handle Faster KSEB & Electrical Inspectorate liaisoning, installation approvals."
                : "Simplify electrical approvals in Kerala with Electrapower Engineering. We handle KSEB & Electrical Inspectorate liaisoning, installation approvals & more!"
            }
          />
          <meta 
              name="keywords"
              content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, statutory approvals, compliance, electrical approvals, KSEB, Electrical Inspectorate, earthing design, short circuit design, installation approvals, solar plant approvals, energization sanction, Kerala, Electrapower, electrical contractor"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={window.location.href} />
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