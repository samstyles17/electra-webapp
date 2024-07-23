import React from 'react';
import "./ProjectSectorial.css";
import Navbar from '../components/Navbar';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import Footer from "../components/Footer";

import kia1 from '../assets/img/kia/kia1.png';
import kia2 from '../assets/img/kia/kia2.png';
import kia3 from '../assets/img/kia/kia3.png';

import hhys1 from '../assets/img/hhys/hhys1.png';
import hhys2 from '../assets/img/hhys/hhys2.png';
import hhys3 from '../assets/img/hhys/hhys3.png';
import hhys4 from '../assets/img/hhys/hhys4.png';

import app1 from '../assets/img/appartment/app1.png';
import app2 from '../assets/img/appartment/app2.png';
import app3 from '../assets/img/appartment/app3.png';

import hos1 from '../assets/img/hospital/hos1.png';
import hos2 from '../assets/img/hospital/hos2.png';
import hos3 from '../assets/img/hospital/hos3.png';

import coco1 from '../assets/img/cocotuft/coco1.png';
import coco2 from '../assets/img/cocotuft/coco2.png';
import coco3 from '../assets/img/cocotuft/coco3.png';

import ec1 from '../assets/img/condiments/ec1.png';
import ec2 from '../assets/img/condiments/ec2.png';
import ec3 from '../assets/img/condiments/ec3.png';

import napier1 from '../assets/img/east_napier/napier1.png';
import napier2 from '../assets/img/east_napier/napier2.png';
import napier3 from '../assets/img/east_napier/napier3.png';

import tata1 from '../assets/img/tata/tata1.png';

import kiaLogo from '../assets/img/logo/kia_logo.svg';
import hhysLogo from '../assets/img/logo/hhys_logo.svg';
import appLogo from '../assets/img/logo/app_logo.svg';
import hosLogo from '../assets/img/logo/hos_logo.svg';
import cocoLogo from '../assets/img/logo/coco_logo.svg';
import ecLogo from '../assets/img/logo/ec_logo.svg';
import napierLogo from '../assets/img/logo/napier_logo.svg';
import tataLogo from '../assets/img/logo/tata_logo.svg';


const data = [
    {
        title: "Kerala's largest Kia showroom and workshop by Incheon Motors, featuring India's largest EV charging station",
        images: [
            { url: kia1 }, { url: kia2 }, { url: kia3 }
        ],
        description_one: "Electra Power Engineering partnered with Incheon Motors Pvt. Ltd., the largest Kia dealer in Kerala, to electrify the future of automotive retail. We spearheaded the comprehensive electrical design and installation for their flagship showroom and workshop in Nettoor, Kerala, a facility that proudly houses India's largest EV charging station by Incheon Kia.",

        description_two: "This project exemplifies our commitment to sustainable infrastructure and cutting-edge technology. Our team not only ensured the showroom and workshop's seamless operation with robust power systems but also played a crucial role in promoting the adoption of electric vehicles through the installation of state-of-the-art charging infrastructure.",

        highlights: [
            {
                heading: "High-Capacity Power Infrastructure",
                info: "Successfully installed and integrated  a 400 kVA transformer and a 250 kVA transformer, along with a 250 kVA DG set, to provide ample power for the showroom, workshop, and EV charging station."
            },
            {
                heading: "india's Largest Kia EV Charging Station",
                info: "Installed and commissioned a 240 kW EV charging station, the largest of its kind in India, to cater to the growing demand for electric vehicles."
            },
            {
                heading: "Rapid Charging Infrastructure Deployment",
                info: "Demonstrated exceptional project management and execution capabilities by completing the fast-charging station approval, installation, and commissioning within a mere 30 days."
            },
            {
                heading: "Exceptional Project Delivery",
                info: "Successfully completed the entire project, from initial approvals to final commissioning, in just 90 days, showcasing our agility and commitment to exceeding client expectations."
            },
            {
                heading: "Sustainable Energy Integration",
                info: "Installed a 115.2 kWp solar power system, contributing to the facility's energy efficiency and reducing its carbon footprint."
            },
        ],
        testimonial_logo: kiaLogo,
        testimonial_head: "Mr. Reji, VP Operations, Incheon Motors Pvt. Ltd",
        testimonial_info: "Electra Power Engineering proved to be a reliable and efficient partner throughout the entire project. Their expertise in electrical engineering, coupled with their commitment to quality and timely delivery, exceeded our expectations. We are highly satisfied with the results and confident that our upgraded electrical infrastructure will support our growth for years to come."
    },
    {
        title: "Revolutionising hardware trading with scalable electrical solutions for HHYS Inframart",
        images: [
            { url: hhys1 },
            { url: hhys2 },
            { url: hhys3 },
            { url: hhys4 }
        ],
        description_one: "Electra Power Engineering, a trusted name in electrical contracting and engineering, partnered with HHYS Inframart, one of Kerala's largest hardware trading companies, to elevate their electrical infrastructure. Recognizing the need for a robust and scalable power solution to support their expanding operations, HHYS Inframart entrusted Electra Power Engineering with a turnkey project to modernise their electrical systems.",

        description_two: "Our team delivered a comprehensive solution that addressed HHYS Inframart's growing energy demands while ensuring reliability and efficiency. The project exemplifies our expertise in designing, installing, and commissioning complex electrical systems for large-scale commercial establishments. By seamlessly integrating state-of-the-art equipment and advanced technology, we empowered HHYS Inframart to optimise their operations and meet the evolving needs of their business.",

        highlights: [
            {
                heading: "Turnkey Project",
                info: "Electra Power Engineering handled the entire project from start to finish, providing a hassle-free experience for HHYS Inframart. Our scope included design, procurement, installation, testing, liaising, and commissioning of the electrical infrastructure."
            },
            {
                heading: "Multi-Level Power Enhancement",
                info: "Successfully installed and integrated multiple power sources, including:  A 250 kVA transformer and a 250 kVA DG set for office area. A 400 kVA transformer & 250 kVA DG set for new hardware area 250 kVA transformer and 250 kVA DG set for Tile showroom 82.5 kVA DG set for low segment tile showroom."
            },
            {
                heading: "Enhanced Reliability and Efficiency",
                info: "The upgraded electrical infrastructure significantly improved HHYS Inframart's power reliability, eliminating downtime risks and ensuring consistent operation of their critical systems."
            },
            {
                heading: "Scalability for Future Growth",
                info: "The new system is designed to accommodate future expansion and increased power demands, providing a flexible and adaptable solution for HHYS Inframart's long-term growth plans."
            },
        ],
        testimonial_logo: hhysLogo,
        testimonial_head: "Mr. Yaseem, GM, HHYS Inframart.",
        testimonial_info: "Electra Power Engineering proved to be a reliable and efficient partner throughout the entire project. Their expertise in electrical engineering, coupled with their commitment to quality and timely delivery, exceeded our expectations. We are highly satisfied with the results and confident that our upgraded electrical infrastructure will support our growth for years to come."
    },
    {
        title: "Luxury living redefined through reliable electrical innovations with RDS Legacy Apartments",
        images: [
            { url: app1 },
            { url: app2 },
            { url: app3 }
        ],
        description_one: "Electra Power Engineering has partnered with RDS Realties Ltd., a renowned builder in Kerala, to illuminate their prestigious RDSLegacy Apartments project in Kochi. Recognized for their commitment to quality and luxury, RDS Realities entrusted Electra Power Engineering with the turnkey electrical design and installation for this landmark residential development.",

        description_two: "",

        highlights: [
            {
                heading: "Turnkey Project",
                info: "Electra Power Engineering handled the complete electrical scope, from initial design and planning to procurement, installation, testing, and commissioning, ensuring a streamlined and efficient project execution."
            },
            {
                heading: "High-Capacity Power Infrastructure",
                info: "Installed and integrated a 500 kVA transformer to meet the high energy demands of the luxury apartment complex."
            },
            {
                heading: "Backup Power Solution:",
                info: "Implemented a 160 kVA DG set to provide reliable backup power, guaranteeing uninterrupted essential services for residents in case of power outages."
            },
            {
                heading: "Efficient Project Execution",
                info: "Completed the entire project within minimum time frame, adhering to the builder's strict schedule and ensuring timely handover of the apartments."
            },
            {
                heading: "Seamless Integration",
                info: "Worked closely with RDS Realities to seamlessly integrate the electrical systems with the building's architecture and other amenities, maintaining the aesthetic appeal while ensuring functionality."
            },
        ],
        testimonial_logo: appLogo,
        testimonial_head: "- Mr. Abraham Mampally, GM, RDS Realties Ltd.",
        testimonial_info: "Electra Power Engineering's team displayed exceptional professionalism and technical expertise throughout the project. Their attention to detail and commitment to quality were evident in every aspect of their work. The electrical systems they installed are not only reliable but also seamlessly integrated with the building's design. We are extremely pleased with their contribution to RDS Legacy Apartments."
    },
    {
        title: "Empowering healthcare with cutting-edge electrical infrastructure for Kerala's First Nuclear Medicine Center",
        images: [
            { url: hos1 },
            { url: hos2 },
            { url: hos3 }
        ],
        description_one: "Electra Power Engineering, a pioneer in electrical contracting and engineering, partnered with Imaging Lily Pvt. Ltd. to illuminate the future of healthcare in Kerala. We were entrusted with the turnkey electrical design and installation for Kerala's first all-inclusive nuclear medicine and radiology centre, located in the heart of Kochi.",

        description_two: "",

        highlights: [
            {
                heading: "Turnkey Electrical Solution",
                info: "Electra Power Engineering provided a complete turnkey solution, handling all aspects of the electrical project, from initial design and planning to procurement, installation, testing, and commissioning. This streamlined approach ensured a seamless and efficient project execution, minimising disruptions to Imaging Lily's operations."
            },
            {
                heading: "Critical Power Infrastructure",
                info: "Successfully installed and integrated a 250 kVA transformer and a 200 kVA DG set to provide a robust and reliable power supply for the centre's sophisticated medical equipment, ensuring uninterrupted operation and patient safety."
            },
            {
                heading: "Specialized Medical Electrical Systems:",
                info: "Designed and implemented specialised electrical systems to meet the unique requirements of a nuclear medicine and radiology facility, including grounding, shielding, and isolation systems for sensitive medical equipment."
            },
            {
                heading: "Rapid Project Delivery",
                info: "Completed the entire project within a tight 90-day timeframe, demonstrating our agility and commitment to meeting the client's urgent needs. Our efficient project management ensured that the center could commence operations without delay."
            },
        ],
        testimonial_logo: hosLogo,
        testimonial_head: "Dr. Dennis Idikula Y, MD, Imaging Lily Pvt. Ltd.",
        testimonial_info: "Electra Power Engineering's team went above and beyond to understand the specific electrical needs of our nuclear medicine and radiology center. Their meticulous attention to detail, adherence to safety regulations, and timely project delivery were instrumental in getting our facility up and running smoothly. We are highly impressed with their expertise and professionalism."
    },
    {
        title: "Transforming mat manufacturing with advanced electrical upgrades for Travancore Cocotuft",
        images: [
            { url: coco1 },
            { url: coco2 },
            { url: coco3 }
        ],
        description_one: "Electra Power Engineering collaborated with Travancore Cocotuft (P) Ltd., the world's largest doormat manufacturer and exporter,to upgrade their electrical infrastructure. Acknowledging the necessity for a robust and sustainable power solution to support theirextensive manufacturing operations, Travancore Cocotuft relied on Electra Power Engineering to design, install, and commission astate-of-the-art electrical system.",

        description_two: "",

        highlights: [
            {
                heading: "High-Capacity Power Generation",
                info: "Installed and integrated a 400 kVA DG set and a 250 kVA generator, ensuring uninterrupted power supply for critical manufacturing processes and minimising downtime risks."
            },
            {
                heading: "Sustainable Energy Integration",
                info: "Installed a 230.16 kWp solar power system, significantly reducing Travancore Cocotuft's reliance on conventional energy sources and minimising their carbon footprint."
            },
            {
                heading: "Continuous Project Support:",
                info: "Provided ongoing support and maintenance to ensure the optimal performance and longevity of the installed electrical systems, maximising uptime and minimising disruptions to production."
            },
            {
                heading: "Energy Efficiency Optimization:",
                info: "Conducted a comprehensive energy audit to identify areas for improvement and implemented energy-efficient solutions resulting in significant cost savings and reduced environmental impact."
            },
        ],
        testimonial_logo: cocoLogo,
        testimonial_head: "Mr. Vishnu, GM, Travancore Cocotuft (P) Ltd.",
        testimonial_info: "Electra Power Engineering's team demonstrated exceptional technical knowledge and professionalism throughout the project. Their ability to understand our specific manufacturing requirements and deliver a customised solution was outstanding. The new electrical system has significantly improved our operational efficiency and reduced our energy costs. We are grateful for their partnership and highly recommend their services."
    },
    {
        title: "Spicing up production with enhanced electrical infrastructure for Eastern Condiments",
        images: [
            { url: ec1 },
            { url: ec2 },
            { url: ec3 }
        ],
        description_one: "Electra Power Engineering, a trusted leader in electrical contracting and engineering, partnered with Eastern Condiments, India's largest spice exporter and a major player in the food industry, to enhance their electrical infrastructure. As a renowned brand backed by Orkla, Eastern Condiments sought a robust and efficient electrical system to support their expanding production lines for Masala and Roaster products.",

        description_two: "Recognizing the critical role of reliable power in maintaining production efficiency and product quality, Eastern Condiments entrusted Electra Power Engineering with the electrification of their 440 kW Masala plant and 245 kW Roaster. This project demonstrates our expertise in designing and implementing electrical solutions for large-scale manufacturing facilities, ensuring uninterrupted operations and adherence to industry standards.",

        highlights: [
            {
                heading: "High-Capacity Power Generation:",
                info: "Successfully designed, installed, and commissioned electrical systems for a 440 kW Masala Plant and a 245 kW Roaster, ensuring optimal power supply for the efficient production of spices and masalas."
            },
            {
                heading: "Specialized Electrical Solutions:",
                info: "Implemented specialised electrical systems tailored to the unique needs of the food processing industry, including hygienic wiring, explosion-proof lighting, and safety interlocks to protect equipment and personnel."
            },
            {
                heading: "Rapid Project Execution:",
                info: "Completed the entire electrification project within a tight three-month timeframe, minimising disruptions to Eastern Condiments' production schedule and ensuring a timely launch of the new production lines."
            },
            {
                heading: "Enhanced Efficiency and Productivity:",
                info: "The upgraded electrical infrastructure significantly improved the efficiency and productivity of the Masala Plant and Roaster, enabling Eastern Condiments to meet growing demand for their products."
            },
        ],
        testimonial_logo: ecLogo,
        testimonial_head: "Mr. Salam, Plant Manager, Eastern Condiments.",
        testimonial_info: "Electra Power Engineering's team exhibited exceptional professionalism and technical expertise throughout the project. Their ability to understand our specific manufacturing requirements and deliver a customised solution within a tight schedule was commendable. The upgraded electrical infrastructure has significantly enhanced our production capabilities and overall efficiency."
    },
    {
        title: "Preserving heritage with electrifying solutions at Chungath Group's luxury resort, Napier Heritage",
        images: [
            { url: napier1 },
            { url: napier2 },
            { url: napier3 }
        ],
        description_one: "We partnered with Napier Heritage, a prestigious heritage resort owned by the renowned Chungath business group, to enhance its electrical infrastructure. Located in the heart of historic Fort Kochi, Napier Heritage seamlessly blends exquisite Dutch-Portuguese grandeur with modern comforts.",

        description_two: "Electra Power Engineering was entrusted with the turnkey electrical design and installation for this iconic property. Our team's expertise ensured that the resort's historical charm was preserved while providing a state-of-the-art electrical system that met the demands of a modern luxury hotel. This project exemplifies our ability to deliver tailored electrical solutions for hospitality establishments, where aesthetics, functionality, and reliability are paramount.",

        highlights: [
            {
                heading: "Turnkey Electrical Solution",
                info: "Electro Power Engineering provided a complete turnkey solution, overseeing all aspects of the electrical project, from design and planning to procurement, installation, testing, and commissioning. This comprehensive approach ensured a seamless and efficient project execution, minimising disruptions to the resort's operations."
            },
            {
                heading: "Reliable Backup Power",
                info: "Installed a 62.5 kVA DG set to provide reliable backup power, ensuring uninterrupted guest services and comfort even during power outages."
            },
            {
                heading: "Aesthetically Integrated Electrical Systems",
                info: "Designed and installed electrical systems that seamlessly blend with the heritage architecture of the resort, maintaining its historical charm while providing modern amenities."
            },
            {
                heading: "Efficient Project Management",
                info: "Completed the entire project within a six-month time frame, adhering to the client's schedule and ensuring the timely opening of the resort."
            },
            {
                heading: "Enhanced Guest Experience",
                info: "The upgraded electrical infrastructure contributes to a seamless and enjoyable guest experience, providing ample power for lighting, air conditioning, entertainment systems, and other modern amenities."
            },
        ],
        testimonial_logo: napierLogo,
        testimonial_head: "Mr. Rajeev Poal, MD (Chungath Group).",
        testimonial_info: "Electra Power Engineering's team demonstrated exceptional professionalism and technical expertise throughout the project. They understood the unique challenges of working with a heritage property and delivered a customised electrical solution that met our specific needs. The result is a beautifully illuminated and functional resort that exceeds our guests' expectations."
    },
    {
        title: "Driving Kerala forward with TATA Motors' first exclusive EV showroom with Luxon Motors pvt Ltd",
        images: [
            { url: tata1 },
        ],
        description_one: "Electra Power Engineering, pioneers in electrical contracting and engineering, partnered with Luxon Motos Pvt. Ltd., the largestTata Motors dealer in Kerala, to illuminate the future of mobility. We were entrusted with the electrical design and installation of Kerala's first exclusive TATA Motors EV showroom in Palarivattom, Kochi.",

        description_two: "",

        highlights: [
            {
                heading: "Robust Power Infrastructure",
                info: "Successfully installed and integrated a 250 kVA transformer and a 250 kVA DG set to provide a reliable and uninterrupted power supply for the showroom's diverse needs, from vehicle charging stations to sophisticated lighting systems."
            },
            {
                heading: "Rapid Project Execution",
                info: "Demonstrated exceptional project management and execution skills by completing the entire electrical installation within a remarkable 90-day timeframe, exceeding the client's expectations and ensuring the timely launch of the showroom."
            },
            {
                heading: "Client-Centric Approach",
                info: "Worked closely with Luxon Motos to understand their unique requirements and tailored our solutions to meet their specific needs, ensuring a fully customised and functional electrical system."
            },
            {
                heading: "Quality and Safety",
                info: "Adhered to the highest industry standards for electrical installations, prioritising safety and reliability throughout the project. We ensured that all electrical components and systems were thoroughly tested and certified before commissioning."
            },
        ],
        testimonial_logo: tataLogo,
        testimonial_head: "Mr. Shaji, Project Manager, Luxon Motos Pvt. Ltd.",
        testimonial_info: "Electra Power Engineering's team displayed remarkable professionalism, technical expertise, and a deep understanding of our vision for the EV showroom. Their commitment to delivering a world-class electrical solution within an ambitious timeline was truly impressive. We are extremely satisfied with their work and highly recommend their services."
    },
]
const ProjectSectorial = () => {
    return (
        <>
        <Navbar />
        <div className="project-sectorial">
            <ProjectInfo data={data} />
            <Footer />
        </div>
        </>

    );
}

export default ProjectSectorial;
