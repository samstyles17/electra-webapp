import React, { useEffect, useState } from 'react';
import './Services.css';

import img1 from "../../assets/img/service1/service1_carousel1_img1.png";
import img2 from "../../assets/img/service1/service1_carousel1_img2.png";

const Services = ({ data }) => {
    const [toggle, setToggle] = useState(false);

    return (
        data.map((e, i) => {
            return (
                <div className={`services ${i % 2 !== 0 && 'services-row-revese'}`} >
                    <div className={`services-images ${i % 2 !== 0 && 'services-row-revese'}`}>
                        {e.images.map((e, i) => {
                            return (<img src={e} alt="" className='service-image' />)
                        })}

                    </div>
                    <div className='services-info'>
                        <div className="services-header">
                            <h2 className='montserrat-regular'>{e.heading}</h2>
                            <span>
                                <svg className='services-svg-lg' width="114" height="6" viewBox="0 0 114 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.21" d="M109 3.49999L114 5.88674L114 0.113239L109 2.49999L109 3.49999ZM4.37114e-08 3.5L109.5 3.49999L109.5 2.49999L-4.37114e-08 2.5L4.37114e-08 3.5Z" fill="#202632" />
                                </svg>
                                <svg className='services-svg-mb' width="65" height="6" viewBox="0 0 65 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.21" d="M60 3.49999L65 5.88675L65 0.113243L60 2.49999L60 3.49999ZM4.37114e-08 3.5L60.5 3.49999L60.5 2.49999L-4.37114e-08 2.5L4.37114e-08 3.5Z" fill="#202632" />
                                </svg>

                            </span>
                            <p>0{i + 1}</p>
                        </div>
                        <p className='services-description'>
                            {e.description}
                        </p>
                        {

                        e.bullets && 
                            <div style={{ display: toggle ? 'block' : 'none' }}>
                            <h4 className='services-list-head'>We are specialise in:</h4>
                            <ul className='services-list'>
                                {e.bullets.map(e => <li>{e}</li>)}
                            </ul>
                        </div>
        }
                        {i === 0 && e.bullets && <button onClick={() => setToggle(!toggle)}>{toggle ? 'Read Less' : "Read More"}</button>}
                    </div>
                    
                </div>
            );
        })
    )


}

export default Services;
