import React from 'react'
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import banner1 from "../assets/img/banner_a.png"
import banner2 from "../assets/img/banner_b.png"
import banner3 from "../assets/img/banner_c.png"
import banner4 from "../assets/img/banner_d.png"
import banner5 from "../assets/img/banner_e.png"

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  }
};

const images = [
  { src: banner1, route: '/enquire' },
  { src: banner2, route: '/aboutus' },
  { src: banner3, route: '/allprojects' },
  { src: banner4, route: '/projectsectorial' },
  { src: banner5, route: "/designconsultingservice" },
];

function Banner() {
  return (
    <div className='banner-container'>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={7000}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={2000}
        containerClass="banner-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        showDots={false}
        pauseOnHover={false}
        rtl={true}>
        
        {images.map((image, index) => (
          <div key={index} className="banner-item">
            <Link to={image.route}>
              <img src={image.src} alt={`Slide ${index + 1}`} className="banner-image" />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
