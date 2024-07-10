import React from 'react';
import "./ProjectTitle.css";

const ProjectTitle = ({ index, title }) => {
    const words = title.split(' ');
    const wordCount = words.length;

    const applyColors = (words) => {
        const coloredWords = words.map((word, i) => {
            let colorClass = '';

            if (i < 3) {
                colorClass = 'text-orangetext'; 
            } else if (i >= wordCount - 3) {
                colorClass = 'text-bluetext'; 
            } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                colorClass = 'text-blacktext'; 
            }

            return (
                <span key={i} className={colorClass}>
                    {word} {}
                </span>
            );
        });

        return coloredWords;
    };

    return (
        <div className="project-title flex gap-5 items-center mb-4">
            <span className="border border-solid flex items-center justify-center text-2xl h-16 w-12 montserrat-regular">
                0{index + 1}
            </span>
            <p className="text-xl montserrat-regular tracking-wide ml-8 inline">
                {applyColors(words)}
            </p>
        </div>
    );
}

export default ProjectTitle;

