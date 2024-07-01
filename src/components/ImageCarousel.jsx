import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles
import img1 from '../assets/img/img1.png'; // Import your images
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import '../styles.css'; // Ensure the path is correct for your custom styles

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [img1, img2, img3]; // Array of image paths

const ImageCarousel = () => {
  return (
    <div className="slider-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all 1s"
        transitionDuration={1000}
      >
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
