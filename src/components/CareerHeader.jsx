import React from "react";
// import image2 from "../assets/img/teamimg2_webimage.webp"; // Replace with actual image path
import banner from "../assets/img/careers_banner.webp"
function CareerHeader() {
  return (
    <>
      <div className="career-header">
        <div className="career-header-overlay"></div>
        <img src={banner} alt="A group of electrapower electrical site engineers and technicians standing in front of a construction site, their shadows cast forward onto the ground." className="career-header-img" />
        <h1 className="career-header-title montserrat-medium">Careers</h1>
      </div>
    </>
  );
}

export default CareerHeader;
