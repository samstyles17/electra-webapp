import React from 'react'
import Navbar from "../components/Navbar";
import ServicePageText  from '../components/ServicePageText';
import ServicePageButton from "../components/ServicePageButton";
import Footer from "../components/Footer";

function DesignConsultingService () {
    return(
        <>
            <Navbar/>
            <ServicePageText/>
            <ServicePageButton />
            <Footer/>

        </>
    )
}

export default DesignConsultingService;