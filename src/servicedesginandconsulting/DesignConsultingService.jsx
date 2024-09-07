import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import ServicePageText from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";
import Services from '../components/Services/Services';
import { Helmet } from 'react-helmet-async';

import img1 from "../assets/img/service1/img1.webp";
import img2 from "../assets/img/service1/img2.webp";
import img4 from "../assets/img/service1/img3.webp";
import img5 from "../assets/img/service1/img4.webp";
import img7 from "../assets/img/service1/img5.webp";
import img8 from "../assets/img/service1/img6.webp";
import img10 from "../assets/img/service1/img7.webp";
import img11 from "../assets/img/service1/img8.webp";

const sections = [
    {
        heading: "Electrical System Design",
        description: "Electra Power Engineering provides expert electrical system design services for residential, commercial, industrial, and infrastructure projects. Our experienced engineers leverage the latest technologies and industry best practices to create tailored designs that optimise safety, efficiency, and cost-effectiveness.",
        bullets_heading: "We specialise in",
        bullets: [
            "Conceptual Design and Load Calculations",
            "Detailed Engineering Design (Schematic Drawings, Cable Schedules, Equipment Layouts)",
            "Design for Specific Applications (Residential, Commercial, Industrial, Infrastructure)."
        ],
        images: [img1, img2]
    },
    {
        heading: "Energy Audits And Analysis",
        description: "Our comprehensive energy audits identify opportunities to reduce energy consumption and lower costs. We analyse your existing electrical systems, identify inefficiencies, and recommend tailored solutions that align with your budget and sustainability goals.",
        bullets: [],
        images: [img5, img4]
    },
    {
        heading: "Value Engineering",
        description: "We specialise in value engineering, optimising your electrical designs to minimise costs without compromising quality or safety. Our team of experts identifies cost-effective alternatives and innovative solutions to maximise the value of your investment.",
        bullets: [],
        images: [img8, img7]
    },
    {
        heading: "Technical Consulting",
        description: "Need expert advice on electrical codes, standards, or regulations? Electra Power Engineering offers comprehensive technical consulting services. We provide feasibility studies, technical due diligence, and expert recommendations to ensure your electrical projects are compliant, safe, and efficient.",
        bullets: [],
        images: [img11, img10]
    }
];

function DesignConsultingService() {
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
                        ? "Electrical Design & Consulting Services | Electrapower Engineering"
                        : "Electrical Design & Consulting Services | Electrapower Engineering"}
                </title>
                <meta
                    name="description"
                    content={
                        isMobile
                            ? "Expert electrical design & consulting services in Kerala. Electrapower Engineering optimises your projects"
                            : "Expert electrical design & consulting services in Kerala. Electrapower Engineering optimises your projects for efficiency, safety & more. Contact us today"
                    }
                />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Navbar />
            <ServicePageText />
            <section id="services">
                <ServicePageButton />
                <Services data={sections} />
            </section>
            <ServicePageBottomButton />
            <ServiceFooterCarousel />
            <Footer />
        </>
    );
}

export default DesignConsultingService;
