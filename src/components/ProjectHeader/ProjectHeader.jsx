import React from 'react';
import "./ProjectHeader.css"
const ProjectHeader = () => {

    return (
        <div className="project-header">
            <span>
         
            </span>
            <div className="mt-12 mb-4 flex flex-col">
                <div className="flex items-center justify-between">
                    <h2 className="text-[38px] -tracking-[0.03em]">Powerfully placed <span>success </span><span>Stories</span></h2>
                    <div className="project-header-span flex  items-center gap-x-2">
                        <span className='circle circle-1'>&nbsp;</span>
                        <span className='circle circle-2'>&nbsp;</span>
                        <span className='span-3'>120+</span>
                        <span className='span-4'>Satisfied Client</span>
                        <span>120+ Satisfied Client</span>
                   </div>
                </div>
                <p className="project-header-title border text-base tracking-[0.2em] text-center rounded-[13px] mt-10 ">
                ELECTRA POWER ENGINEERING
                </p>
            </div>
        </div>
    );
}

export default ProjectHeader;
