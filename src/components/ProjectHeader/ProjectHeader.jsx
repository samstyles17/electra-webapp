import React from 'react';
import "./ProjectHeader.css"
import header_bg from "../../assets/img/project_header-bg.png"
const ProjectHeader = () => {

    return (
        <div>
            <img src={header_bg} alt="" className="h-80 w-full" />
            <div className="mt-12 mb-4">
                <div className="flex items-center justify-around">
                    <h2 className="text-[38px] -tracking-[0.03em]">Powerfully placed success Stories</h2>
                    <div className="project-header-span flex flex-row items-center gap-x-2">
                        <span className='circle circle-1'>&nbsp;</span>
                        <span className='circle circle-2'>&nbsp;</span>
                        <span>300+</span>
                        <span>Projects delivered</span>
                   </div>
                </div>
                <p className="project-header-title border text-base tracking-[0.2em] text-center py-2.5 px-1.5 rounded-[13px] mt-10 ml-[190px]">
                ELECTRA POWER ENGINEERING
                </p>
            </div>
        </div>
    );
}

export default ProjectHeader;
