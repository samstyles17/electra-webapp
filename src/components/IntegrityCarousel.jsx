import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles.css';

// Import images directly
import image1 from "../assets/img/carimg1.png";
import image2 from "../assets/img/carimg2.png";
import image3 from "../assets/img/carimg3.png";
import image4 from "../assets/img/carimg4.png";
import image5 from "../assets/img/carimg5.png";
import image6 from "../assets/img/carimg6.png";

const slides = [
  {
    title: "Expertise",
    image: image1,
    description: "Benefit from our team's extensive knowledge and skills in electrical engineering, ensuring proficient and reliable solutions."
  },
  { title: "Agility", image: image2, description: "Experience our quick and flexible response to your needs, adapting swiftly to changing project requirements and timelines" },
  { title: "Integrity", image: image3, description: "Trust in our commitment to honesty, transparency,and ethical conduct in all aspects of our work,fostering long-term partnerships based on integrity." },
  { title: "Innovation", image: image4, description: "Access cutting-edge solutions and technologies as we continuously explore new ideas and approaches to enhance efficiency and effectiveness." },
  { title: "Client centric", image: image5, description: "Enjoy personalised attention and tailored solutions that prioritise your unique requirements, ensuring your satisfaction and success." },
  { title: "Collaboration", image: image6, description: "We believe in teamwork and foster a collaborative environment where everyone's ideas are valued." },
];

const IntegrityCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [updateEvent, setUpdateEvent] = useState(false);
  const carouselRef = useRef(null);
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

  const handleAfterChange = (currentSlide) => {
    if(!updateEvent) setActiveIndex((prev) => prev + 1 === slides.length ? 0 : prev + 1);
  };

  const isMobile = window.innerWidth <= 600;

  const handleEventUpdation = (index) => {
    setActiveIndex(index);
    setUpdateEvent(true);
    if (carouselRef.current) {
      carouselRef.current.goToSlide((index + 2) % slides.length);
    }
  };

  return (
    <section className="integrity-carousel-section">
      {isMobile ? (
        <div className="integrity-card-container">
          {slides.map((slide, index) => (
            <div key={index} className="integrity-card">
              <img src={slide.image} alt={slide.title} className="card-image" />
              <div className="card-description montserrat-regular">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="integrity-menu">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`integrity-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleEventUpdation(index)}
              >
                {slide.title}
                <hr />
              </div>
            ))}
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={!updateEvent}
            autoPlaySpeed={3000}
            infinite
            arrows={false}
            containerClass="integrity-carousel"
            afterChange={handleAfterChange}
            customTransition="transform 500ms ease-in-out"
            
            keyBoardControl
            ref={carouselRef}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <img src={slide.image} alt={slide.title} className="carousel-image" />
                <div className="carousel-description">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </>
      )}
    </section>
  );
};

export default IntegrityCarousel;
