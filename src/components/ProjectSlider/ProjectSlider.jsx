import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "./ProjectSlider.css";
import img1 from "../../assets/img/image1601.jpg";
import img2 from "../../assets/img/img3.png";
import img3 from "../../assets/img/sliding_image5.png";
import img4 from "../../assets/img/sliding_image6.png";
import { MdWindPower } from 'react-icons/md';


const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 350
  },

  tablet: {
    breakpoint: { max: 788, min: 464 },
    items: 1,
    partialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const ProjectSlider = ({ images }) => {
  const [state, setState] = useState(
    {}
  );

  console.log(images)
  return (
    <>
      <div className="carousel-container toggle-1">
        <Carousel partialVisible={true} responsive={responsive}>
          {
            images.map((element, index) => {
              return (
                <div className='slider-card'>
                  <img src={element.image_url} alt="" className='slider-image' />
                  <div className="slider-rectangle flex   items-center gap-5 px-5">
                    <span className='slider-index flex justify-center items-center'>
                      {index + 1}
                    </span>
                    <p className="slider-text">
                      {element.title}
                    </p>
                  </div>
                </div>
              )
            })
          }

        </Carousel>
      </div>
      <div className='toggle-2 flex flex-col items-center gap-6'>
        {
          images.map((element, index) => {
            return (
              <div className='slider-card'>
                <img src={element.image_url} alt="" className='slider-image' />
                <div className="slider-rectangle flex   items-center gap-5 px-5">
                  <span className='slider-index flex justify-center items-center'>
                    {index + 1}
                  </span>
                  <p className="slider-text">
                    {element.title}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default ProjectSlider;
