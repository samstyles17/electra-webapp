import {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import axios from "axios";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';
  

function MaintenaceRepairService () {
    const [isMobile, setIsMobile] = useState(false);
    const [sections, setSections] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try{
              const response = await axios.get('https://tn962s9r5i.execute-api.ap-south-1.amazonaws.com/v1//getService?service=maintenance-repair-service')
              const result = response.data;

              if (result.status_code == 200){
                  const sortData = result.data.sort((a,b) => a.position - b.position);
                  setSections(sortData);
              }else{
                  console.log(result.status_code);
              }
          } catch(error){
              console.error(error)
          }
      };

      fetchData()
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
              ? "Services - Maintenace & Repair"
              : "Services - Maintenace & Repair"}
          </title>
          <meta
            name="description"
            content={
              isMobile
                ? "Electrapower Engineering offers electrical maintenance services includes preventive maintenance, corrective repairs & AMCs"
                : "Prevent breakdowns & ensure safety with Electrapower Engineering's electrical maintenance services includes preventive maintenance, corrective repairs & AMCs"
            }
          />
          <meta 
          name = "title"
          content = {isMobile
            ? "Expert HT/LT Electrical Maintenance & Repair Services in Kerala"
            : "Expert HT/LT Electrical Maintenance & Repair Services in Kerala"}
          />
          <meta 
            name="keywords"
            content= "Electrapower Engineering,Electrapower Engineering Kerala ,Electrical Contractors , electrical, contractors ,Electrapower, Engineering, electrapower, engineering, electrapower engineering kerala, electrical maintenance, repair services, preventive maintenance, corrective maintenance, emergency response, AMCs, electrical systems, panel boards, Kerala, Electrapower, electrical contractor"
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
                  "serviceType": "Expert HT/LT Electrical Maintenance & Repair Services in Kerala",
                  "provider": {
                    "@type": "Organization",
                    "name": "Electra Power",
                    "url": "https://electrapower.in/"
                  },
                  "url": "https://electrapower.in/services-maintenance-repairs",
                  "description": "Electrapower Engineering offers electrical maintenance services includes preventive maintenance, corrective repairs & AMCs"
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