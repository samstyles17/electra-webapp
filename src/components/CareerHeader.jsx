import React from "react";
import image2 from "../assets/img/teamimg2_webimage.webp"; // Replace with actual image path

function CareerHeader() {
  return (
    <>
      <div className="career-header">
        <div className="career-header-overlay"></div>
        <img src={image2} alt="Banner1" className="career-header-img" />
        <h1 className="career-header-title montserrat-medium">Careers</h1>
      </div>
    </>
  );
}

export default CareerHeader;
