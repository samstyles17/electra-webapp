import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import ServicePage3Content from "../components/ServicePage3Content";
import ServicePageBottomButton from "../components/ServicePageBottomButton";
import ServiceFooterCarousel from "../components/ServicePageFooterCarousel";
import Footer from "../components/Footer";

function PanelBoardControlSystemService () {
    return(
        <>
            <Navbar/>
            <ServicePageText/>
            <ServicePageButton />
            <ServicePage3Content />
            <ServicePageBottomButton />
            <ServiceFooterCarousel/>
            <Footer/>
        </>
    )
}

export default PanelBoardControlSystemService;