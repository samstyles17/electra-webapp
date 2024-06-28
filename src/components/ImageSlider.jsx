import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../DesignCard.css'
import '../styles.css'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.75
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function ImageSlider(){
  return (
    <div className="carousel-container">
      <Carousel responsive={responsive}>      
        <div className="card">
          <img src="src/assets/img/sliding_image1.png" alt="Design and Consulting" className="card-image"/>
          <div className="card-content">
            <div className="card-number">
              <span className="montserrat-regular">1</span>
            </div>
            <div className="card-title">
              <span className="montserrat-regular">Design & Consulting</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/img/sliding_image2.png" alt="Design and Consulting" className="card-image"/>
          <div className="card-content">
            <div className="card-number">
              <span className="montserrat-regular">2</span>
            </div>
            <div className="card-title">
              <span className="montserrat-regular">Installation and Commisioning</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/img/sliding_image3.png" alt="Design and Consulting" className="card-image"/>
          <div className="card-content">
            <div className="card-number">3</div>
            <div className="card-title">
              <span className="montserrat-regular">Panel Board and Control Systems</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/img/sliding_image4.png" alt="Design and Consulting" className="card-image"/>
          <div className="card-content">
            <div className="card-number">4</div>
            <div className="card-title">
              <span className="montserrat-regular">Statuory Approvals and Compliances</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/img/sliding_image5.png" alt="Maintenance and Repair" className="card-image"/>
          <div className="card-content">
            <div className="card-number">5</div>
            <div className="card-title">
              <span className="montserrat-regular">Maintenance and Repair</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/img/sliding_image6.png" alt="Design and Consulting" className="card-image"/>
          <div className="card-content">
            <div className="card-number">5</div>
            <div className="card-title">
              <span className="montserrat-regular">Value-Added Services/ Other Services</span>
            </div>
          </div>
        </div>
    </Carousel>
    </div>
  );
}

export default ImageSlider;