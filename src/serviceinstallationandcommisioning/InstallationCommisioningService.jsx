import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage2Content from "../components/ServicePage2Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";

function InstallationCommisioningService () {
    return(
        <>
            <Navbar/>
            <ServicePageText/>
            <ServicePageButton />
            <ServicePage2Content />
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
        </>
    )
}

export default InstallationCommisioningService;