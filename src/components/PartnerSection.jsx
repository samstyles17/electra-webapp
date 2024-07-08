import React from 'react';
import '../styles.css';
import partnerImage from "../assets/img/partnerimg.png" // Adjust the path if necessary

const PartnerSection = () => {
    return (
        <div className="partner-section">
            <img src={partnerImage} alt="Partner" className="partner-image" />
        </div>
    );
};

export default PartnerSection;
