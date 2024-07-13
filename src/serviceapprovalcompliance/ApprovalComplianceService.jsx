import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage4Content from "../components/ServicePage4Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";

function MaintenaceRepairService () {
    return(
        <>
        <Navbar/>
        <div className="service-all-width">
            <ServicePageText/>
            <ServicePageButton />
            <ServicePage4Content />
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
        </div>
        </>
 
    )
}

export default MaintenaceRepairService;