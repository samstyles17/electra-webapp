import React from 'react';

const ProjectTitle = ({index,title }) => {
    return (
        <div className="flex flex-row gap-5 items-center mb-4">

               <span className="border border-solid border-red-200 flex items-center justify-center text-2xl h-16 w-12 montserrat-regular"> 
                    0{index + 1}
                </span>
                <p className="text-xl montserrat-regular tracking-wide ml-8">{title}</p>
        </div>
    );
}

export default ProjectTitle;
