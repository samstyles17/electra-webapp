import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles.css';

// Import images directly
import image1 from "../assets/img/expertise_webimage.webp";
import image2 from "../assets/img/agility_webimage.webp";
import image3 from "../assets/img/integrity_webimage.webp";
import image4 from "../assets/img/innovation_webimage.webp";
import image5 from "../assets/img/clientcentric_webimage.webp";
import image6 from "../assets/img/collaboration_webimage.webp";

const slides = [
  {
    title: "Expertise",
    image: image1,
    description: "Benefit from our team's extensive knowledge and skills in electrical engineering, ensuring proficient and reliable solutions."
  },
  { title: "Agility", image: image2, description: "Experience our quick and flexible response to your needs, adapting swiftly to changing project requirements and timelines." },
  { title: "Integrity", image: image3, description: "Trust in our commitment to honesty, transparency,and ethical conduct in all aspects of our work,fostering long-term partnerships based on integrity." },
  { title: "Innovation", image: image4, description: "Access cutting-edge solutions and technologies as we continuously explore new ideas and approaches to enhance efficiency and effectiveness." },
  { title: "Client centric", image: image5, description: "Enjoy personalised attention and tailored solutions that prioritise your unique requirements, ensuring your satisfaction and success." },
  { title: "Collaboration", image: image6, description: "We believe in teamwork and foster a collaborative environment where everyone's ideas are valued." },
];

const IntegrityCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [updateEvent, setUpdateEvent] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');
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

  const handleResize = () => {
    if (window.innerWidth <= 910) {
      setViewMode('mobile');
    } else if (window.innerWidth <= 1440) {
      setViewMode('tablet');
    } else {
      setViewMode('desktop');
    }
  };


  const handleAfterChange = (currentSlide) => {
    if(!updateEvent) setActiveIndex((prev) => prev + 1 === slides.length ? 0 : prev + 1);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEventUpdation = (index) => {
    setActiveIndex(index);
    setUpdateEvent(true);
    if (carouselRef.current) {
      carouselRef.current.goToSlide((index + 2) % slides.length);
    }
  };

  return (
    <section className="integrity-carousel-section">
      {viewMode !== 'desktop' ? (
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
                onClick={() => { handleEventUpdation(index)}}
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
                  <p style = {{ fontSize: '18px', lineHeight: '2.4rem' }}>{slide.description}</p>
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
