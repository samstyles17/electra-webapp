import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header montserrat-regular'>
      <div className="header-body">
        <h3 className='heading-secondary uppercase  text text-blacktext'>ELECTRA POWER ENGINEERING</h3>
        <div className='heading-primary'>
          <span className='border-left'>&nbsp;</span>
          <h1 className="heading-primary-1 mt-3">
            <span className="text-blacktext">Pioneering Excellence </span>
            <span className='text text-grey-200'> with</span>
          </h1>
          <h1 className="heading-primary-1">
            <span className="text-blacktext">Our Mastery in </span>
            <span className='text text-grey-200'>Electrical Solutions</span>
          </h1>
        </div>
        <div className='heading-primary d-block'>
          <h1 className="heading-primary-1 mt-3">
            <span className="text-blacktext">Pioneering Excellence </span>
            <span className='text text-grey-200'> with</span>
          </h1>
          <h1 className="heading-primary-1">
            <span className="text-blacktext"> Our Mastery in </span>
            <span className='text text-grey-200'>Electrical Solutions </span>
          </h1>
        </div>
        <p className="heading-description tracking-wide mt-4 text text-blacktext">Explore the extensive range of Electra Power Engineering’s transformative projects,showcasing our expertise in delivering state of the art electrical solutions across diverse industries. Each project exemplifies our commitment to innovation, safety and exceeding client expectations.</p>
        <div className="header-span flex flex-row items-center gap-x-2">
          <span className='circle circle-1'>&nbsp;</span>
          <span className='circle circle-2'>&nbsp;</span>
          <span>300+</span>
          <span>Projects delivered</span>
        </div>
        <div className="header-span-2 flex flex-row items-center gap-x-2">
          <span className='circle circle-1'>&nbsp;</span>
          <span className='circle circle-2'>&nbsp;</span>
          <span>300+</span>
          <span>Projects delivered</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
