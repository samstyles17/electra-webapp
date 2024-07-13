import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage1Content from "../components/ServicePage1Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";

function DesignConsultingService () {
    return(
        <>
            <Navbar/>
            <div className="service-all-width">
            <ServicePageText/>
            <ServicePageButton />
            <ServicePage1Content />
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
            </div>
        </>
    )
}

export default DesignConsultingService;