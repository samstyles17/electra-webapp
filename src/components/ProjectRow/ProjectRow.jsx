import React from 'react';
import ImageSlider from '../ImageSlider';
import "./ProjectRow.css";
import img1 from "../../assets/img/image1601.jpg"
import ProjectSlider from '../ProjectSlider/ProjectSlider';

const ProjectRow = ({ data }) => {
    return (
        <>
            {
                data.map((e, i) => {
                    return (
                        <div className='row' key={i}>
                            <div className='col-1'>
                                <svg className="border-right" width="2" height="363" viewBox="0 0 2 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.23" d="M1 0.5V362.5" stroke="black" strokeDasharray="4 4" />
                                </svg>
                                <div className="card-h flex flex-col justify-between gap-5 ">
                                    <img src={e.img} alt="img1" className="card-h-img rounded-2xl" />
                                    <div className="card-h-info flex flex-row gap-10 items-center">
                                        <span className="card-h-index flex items-center justify-center">
                                            0{i + 1}
                                        </span>
                                        <span className="card-h-title">
                                            {/* Incheon Motors Pvt, Ltd */}
                                            {e.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 '>
                                <ProjectSlider images={e.images} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )



}

export default ProjectRow;
