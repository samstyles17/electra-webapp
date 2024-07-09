import React from 'react';
import kia1 from "../../assets/img/portfolio_card1.png"
import kia2 from "../../assets/img/portfolio_card2.png"
import kia3 from "../../assets/img/portfolio_card3.png"
import { ImGift } from 'react-icons/im';
const ProjectImage = ({images}) => {
    console.log(images)
 

    return (
        
        <div className="flex flex-row justify-around items-center gap-4 my-10 ">
    {images.map((e,i) => 
        <img src={e.url} alt='' />
    )}
        </div>
    );
}

export default ProjectImage;
