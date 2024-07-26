import React, { useEffect, useState } from 'react';
import './Services.css';
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import img1 from "../../assets/img/service1/service1_carousel1_img1.png";
import img2 from "../../assets/img/service1/service1_carousel1_img2.png";

const Services = ({ data , panel}) => {
    const [toggle, setToggle] = useState(false);

    return (
        data.map((e, i) => {
            return (
                <>
                <div className={`services ${i % 2 !== 0 && 'services-row-revese '} ${i === 3 &&  panel &&'service-panel-fix' }`}  >
                    <div className={`services-images ${i % 2 !== 0 && 'services-row-revese'}`}>
                        {e.images.map((e, i) => {
                            return (<img src={e} alt="" className='service-image' />)
                        })}
                    </div>
                    <div className='services-info'>
                        <div className="services-header" style={{ gap: e.heading.length > 30 && '30px'}}  >
                            <h2 className={'montserrat-regular '} style={{ fontSize: e.heading.length > 30 && '16px', wordSpacing: e.heading.length > 30 && '-0.01em' }}>{e.heading}</h2>
                            <span>
                                <svg className='services-svg-lg' width="114" height="6" viewBox="0 0 114 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.21" d="M109 3.49999L114 5.88674L114 0.113239L109 2.49999L109 3.49999ZM4.37114e-08 3.5L109.5 3.49999L109.5 2.49999L-4.37114e-08 2.5L4.37114e-08 3.5Z" fill="#202632" />
                                </svg>
                                <svg className='services-svg-mb' width="65" height="6" viewBox="0 0 65 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.21" d="M60 3.49999L65 5.88675L65 0.113243L60 2.49999L60 3.49999ZM4.37114e-08 3.5L60.5 3.49999L60.5 2.49999L-4.37114e-08 2.5L4.37114e-08 3.5Z" fill="#202632" />
                                </svg>

                            </span>
                            <p  >0{i + 1}</p>
                        </div>
                        <p className='services-description'>
                            {e.description}
                        </p>
                        { i !== 0&&  e.bullets && !panel &&
                              <div >
                              { i === 0 && e.bullets&&  <h4 className='services-list-head'>We are specialise in:</h4>}
                                 <ul className='services-list'>
                                     {e.bullets.map(e => <li>{e}</li>)}
                                 </ul>
                             </div>
                        }
                        {
                          i == 0 &&  e.bullets &&
                            <div style={{ display: toggle ? 'block' : 'none' }}>
                             { i === 0 && e.bullets&&  <h4 className='services-list-head'>We are specialise in:</h4>}
                                <ul className='services-list'>
                                    {e.bullets.map(e => <li>{e}</li>)}
                                </ul>
                            </div>
                        }
                        {i ==0 && e.bullets && !panel && <button onClick={() => setToggle(!toggle)}>{toggle ? 'Read Less' : "Read More"}</button>}
                    </div>
                    { i === 3&& panel &&  <div className='service-panel-list'>
                        <ul className='service-panel-list-1'>
                            {e.bullets.slice(0, 6).map((e) => {
                                return <li >{e}</li>
                            })}
                        </ul>
                        <ul className='service-panel-list-1'>
                            {e.bullets.slice(6, e.bullets.length).map((e) => {
                                return <li >{e}</li>
                            })}
                        </ul>
                    </div>
        }
                </div>
            </>
            );
        })
    )


}

export default Services;
