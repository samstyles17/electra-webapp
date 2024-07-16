import React from 'react';

const ProjectImage = ({ images }) => {
    return (

        <div className="project-images flex  justify-between  gap-5 my-10">
            {images.map((e, i) =>
                <img src={e.url} alt={i} key={i} className="project-image rounded-[14px]" />
            )}
        </div>
    );
}

export default ProjectImage;
