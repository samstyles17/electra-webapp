import React from 'react';
import Slider from "react-slick";

const ProjectImage = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <>
        <div className="project-images flex  justify-between  gap-5 my-10">
            {images.map((e, i) =>
                <img src={e.url} alt={i} key={i} className="project-image rounded-[14px]" />
            )}
        </div>
        <div className="project-images-slider">
          {
            images.length > 1 ?    <Slider {...settings}>
            {images.map((e, i) =>
                    <img src={e.url} alt={i} key={i} className="project-image rounded-[14px]" />
                )}
            </Slider> :  images.map((e, i) =>
                    <img src={e.url} alt={i} key={i} className="project-image rounded-[14px]" />
                )
          }  
     
        </div>
        </>

    );
}

export default ProjectImage;
