import React from 'react';
import "./ProjectTestimonial.css"
import logo_circle from "../../assets/img/logo-circle.png";

const ProjectTestimonial = ({ image, title, info }) => {
    return (
        <div className="project-testimonial flex  items-center h-64">
            <svg className="blue-rectangle" width="94" height="4" viewBox="0 0 94 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="4" height="94" transform="rotate(-90 0 4)" fill="#3F9CDA" />
            </svg>

            <span className=" rotate-inverse  h-64 text-xl uppercase montserrat-regular tracking-wider px-2 text-center  text-white ">
                testimonials
            </span>
            <div className="h-64 project-testimonial-info text-lg montserrat-regular flex  justify-center items-center  bg-white  shadow-outline">
                <div className="project-testimonial-logo flex px-6">

                    <img src={image} alt="" className="rounded-full z-20" />


                    <img src={logo_circle} alt="" className="rounded-full z-10" />
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
