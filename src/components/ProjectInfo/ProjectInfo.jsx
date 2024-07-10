import React from 'react';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import ProjectImage from '../ProjectImage/ProjectImage';
import ProjectDescription from '../ProjectDescription/ProjectDescription';
import ProjectHighlights from '../ProjectHighlights/ProjectHighlights';
import ProjectTestimonial from '../ProjectTestimonial/ProjectTestimonial';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import "./ProjectInfo.css";

const ProjectInfo = ({data}) => {
    return (
        <>
           <ProjectHeader />
           {
            data.map((e,i) => {
                return(
                    <div className="projectinfo">
                    <svg className="border-top-svg" width="1294" height="1" viewBox="0 0 1294 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.35" d="M0 0.5H1294" stroke="black" stroke-dasharray="6 6" />
                    </svg>
                    <svg width="320" className="border-top-sm" height="2" viewBox="0 0 320 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.39" d="M0 1H320" stroke="black" stroke-width="0.5" stroke-dasharray="3 3"/>
</svg>

                    <ProjectTitle index={i} title={e.title} />
                    <ProjectImage images={e.images} />
                    <ProjectDescription  description_one={e.description_one} description_two={e.description_two} />
                    <ProjectHighlights highlights={e.highlights} />
                    <ProjectTestimonial image={e.testimonial_logo} title={e.testimonial_head} info={e.testimonial_info} />
                </div>
                )
            })
           }
        </>

    );
}

export default ProjectInfo;
