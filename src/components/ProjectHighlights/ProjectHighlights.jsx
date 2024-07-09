import React from 'react';

const ProjectHighlights = ({highlights}) => {
    return (
        <div className="project-highlights">
            <div className="flex flex-row items-center gap-5">
                <svg width="45" height="2" viewBox="0 0 45 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.19" d="M0 1L45 1" stroke="#F8753C" stroke-width="2" />
                </svg>
                <span className="text-orangetext text-2xl tracking-wide">
                    Projects Highlights
                </span>
            </div>
            <div>
                <ul className="list-none ml-20 p-5 h-auto montserrat-regular">
                    {
                        highlights.map((e,i) => {
return (
    <li key={i}>
    <h4 className="text-xl tracking-wide uppercase my-5">{e.heading}</h4>
    <p className="text-base tracking-wide">{e.info}</p>
</li>
)
                        })
                    }

            
                </ul>
            </div>
        </div>
    );
}

export default ProjectHighlights;
