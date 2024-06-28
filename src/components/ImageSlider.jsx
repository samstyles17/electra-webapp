import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../DesignCard.css";
import "../styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.75,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ImageSlider() {
  return (
    <div className="carousel-container">
      <Carousel responsive={responsive}>
        {[...Array(6).keys()].map((i) => (
          <div className="card" key={i + 1}>
            <img
              src={`src/assets/img/sliding_image${i + 1}.png`}
              alt={`Slide ${i + 1}`}
              className="card-image"
            />
            <div className="card-content">
              <div className="card-top">
                <div className="card-number">
                  <span className="montserrat-regular">{i + 1}</span>
                </div>
                <div className="card-title">
                  <span className="montserrat-regular text-sm">
                    {getTitle(i + 1)}
                  </span>
                </div>
              </div>
              <div className="card-more-info">
                <div className="divider-container">
                  <hr className="solid" />
                </div>
                <div>
                  
                </div>
                <span className="montserrat-regular more-info-text text-sm">
                  More About
                  <span className="arrow-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-svg"
                    >
                      <circle cx="12" cy="12" r="11.5" fill="white" />
                      <path
                        d="M10 7L15 12L10 17"
                        stroke="#333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function getTitle(index) {
  switch (index) {
    case 1:
      return "Design & Consulting";
    case 2:
      return "Installation and Commissioning";
    case 3:
      return "Panel Board and Control Systems";
    case 4:
      return "Statutory Approvals and Compliances";
    case 5:
      return "Maintenance and Repair";
    case 6:
      return "Value-Added Services/ Other Services";
    default:
      return "";
  }
}

export default ImageSlider;
