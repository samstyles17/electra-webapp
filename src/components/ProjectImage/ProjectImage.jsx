import React from 'react';

const ProjectImage = ({ images }) => {
    return (

        <div className="project-images flex  justify-around items-center gap-4 my-10 ">
            {images.map((e, i) =>
                <img src={e.url} alt={i} key={i} className="project-image" />
            )}
        </div>
    );
}

export default ProjectImage;
