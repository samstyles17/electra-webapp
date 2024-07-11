import React from 'react';
import "./ProjectHighlights.css";

const ProjectHighlights = ({highlights}) => {
    return (
        <div className="project-highlights h-auto">
            <div className="flex flex-row items-center gap-5">
                <svg width="45" height="2" viewBox="0 0 45 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.19" d="M0 1L45 1" stroke="#F8753C" stroke-width="2" />
                </svg>
                <span className="text-orangetext text-2xl tracking-wide">
                    Projects Highlights
                </span>
            </div>
            <div>
                <ul className="project-highlight-list list-none  h-auto montserrat-regular">
                <svg className='list-svg' width="20" height="455" viewBox="0 0 20 455" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        {`.mask-alpha { mask-type: alpha; }`}
      </style>
    </defs>
    <mask id="mask0_1267_1524" className="mask-alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="455">
      <path d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" fill="#5782C2"/>
      <path d="M19 121C19 125.971 14.9706 130 10 130C5.02944 130 1 125.971 1 121C1 116.029 5.02944 112 10 112C14.9706 112 19 116.029 19 121Z" fill="#5782C2"/>
      <path d="M19 232C19 236.971 14.9706 241 10 241C5.02944 241 1 236.971 1 232C1 227.029 5.02944 223 10 223C14.9706 223 19 227.029 19 232Z" fill="#5782C2"/>
      <path d="M19 343C19 347.971 14.9706 352 10 352C5.02944 352 1 347.971 1 343C1 338.029 5.02944 334 10 334C14.9706 334 19 338.029 19 343Z" fill="#5782C2"/>
      <path d="M19 445C19 449.971 14.9706 454 10 454C5.02944 454 1 449.971 1 445C1 440.029 5.02944 436 10 436C14.9706 436 19 440.029 19 445Z" fill="#5782C2"/>
      <path d="M10 25V106M10 136V217M10 247V328M10 358V431" stroke="#5782C2"/>
    </mask>
    <g mask="url(#mask0_1267_1524)">
      <path className="animated-path" d="M60 201C60 357.297 37.6142 484 10 484C-17.6142 484 -40 357.297 -40 201C-40 44.7034 -17.6142 -82 10 -82C37.6142 -82 60 44.7034 60 201Z" fill="#649DF3"/>
    </g>
  </svg>


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
