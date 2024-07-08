import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles.css';

// Import images directly
import image1 from "../assets/img/routeimg1.png";
import image2 from "../assets/img/routeimg2.png";
import image3 from "../assets/img/routeimg3.png";
import image4 from "../assets/img/routeimg4.png";
import image5 from "../assets/img/routeimg5.png";
import image6 from "../assets/img/routeimg6.png";

const slides = [
  { title: "Expertise", image: image1 },
  { title: "Agility", image: image2 },
  { title: "Integrity", image: image3 },
  { title: "Innovation", image: image4 },
  { title: "Client centric", image: image5 },
  { title: "Collaboration", image: image6 },
];

const IntegrityCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="integrity-carousel-section">
      <div className="integrity-menu">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`integrity-item integrity-item-${index}`}
          >
            {slide.title}
            <hr />
          </div>
        ))}
      </div>
      
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={1500}
        infinite
        arrows={false}
        containerClass="integrity-carousel"
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.title} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default IntegrityCarousel;
