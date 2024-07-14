import React from 'react';
import '../styles.css';
import partnerImage from "../assets/img/partnerimg.png"; // Adjust the path if necessary
import partnerImagePortrait from "../assets/img/partner_section_potrait_img.png"; // Adjust the path if necessary

const PartnerSection = () => {
    return (
        <div className="partner-section">
            <img src={partnerImage} alt="Partner" className="partner-image" />
            <img src={partnerImagePortrait} alt="Partner Portrait" className="partner-image-portrait" />
        </div>
    );
};

export default PartnerSection;
