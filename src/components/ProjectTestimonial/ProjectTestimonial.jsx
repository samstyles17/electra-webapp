import React from 'react';
import "./ProjectTestimonial.css"
import logo_rect from "../../assets/img/logo/testi_logo_large.svg";
import logo_rect_mb from "../../assets/img/logo/mobile_logo_testi.svg";

const ProjectTestimonial = ({ image, title, info }) => {
    return (
        <div className="project-testimonial flex  items-center h-64">
            <svg className="blue-rectangle" width="94" height="4" viewBox="0 0 94 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="4" height="94" transform="rotate(-90 0 4)" fill="#3F9CDA" />
            </svg>

            <span className=" rotate-inverse  h-64 text-xl uppercase montserrat-regular tracking-wider px-2 text-center  text-white ">
                testimonials
            </span>
            <div className="h-64 project-testimonial-info text-lg montserrat-regular flex  gap-2 items-center  bg-white  shadow-outline">
                <div className="project-testimonial-logo flex  px-6 ">
                    {/* <span style={{backgroundImage: `url(${image})`}} className="project-round-image z-20"> 

                    </span>
                    <span style={{backgroundImage: `url(${logo_rect})`}} className="project-round-image z-2">

                    </span> */}
                    <img src={image} className="z-20 h-[154px] rounded-l-[15px] "

                    />


                    <img src={logo_rect} className=" z-2 -ml-[10px]" />
                    <img src={logo_rect_mb} className=" z-2 -ml-[10px] "  />
                </div>
                <div className="project-testimonial-text ">
                    <h4 className="text-orangetext text-sm ml-6 mb-8">{title}</h4>
                    <p className="text-base tracking-[.01em] px-10">
                        {`"${info}"`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectTestimonial;
