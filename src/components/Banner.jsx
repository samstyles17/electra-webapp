import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import banner1 from "../assets/img/Banner2.png"
import banner2 from "../assets/img/Banner3.png"
import banner3 from "../assets/img/Banner4.png"
import banner4 from "../assets/img/Banner5.png"
import banner5 from "../assets/img/Banner6.png"


const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  }
};

const images = [banner1, banner2, banner3, banner4, banner5];

  function Banner() {
  return (
    <div className='banner-container'>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        containerClass="banner-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        showDots={false}
        pauseOnHover={false}
        rtl={true}>
        
        {images.map((src, index) => (
          <div key={index} className="banner-item">
            <img src={src} alt={`Slide ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </Carousel>

    </div>
  )
}

export default Banner