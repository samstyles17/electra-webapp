import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import "../styles.css"; // Ensure the path is correct
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';

function About() {
  return (
    <div className="section-container">
      <ImageCarousel/>
      <div className="text-container">
        <h3 className='montserrat-medium'>About <span>Us</span></h3>
          <hr />
          <br />
        <p className='montserrat-regular'>
          Established in 2013, we are an ‘A’ grade HT <span className=''>electrical contractors & engineers</span> known for trust and technical excellence. Our experienced team delivers comprehensive electrical solutions for projects of any scale.
        </p>
        <div className="bullets-container">
          <div className="bullet-point montserrat-regular my-5 text-sm">Seamless project management with turnkey expertise.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Client-centered pricing ensuring collaboration.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Unwavering trust for project success.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Technical excellence ensures optimal solutions.</div>
          <div className="bullet-point montserrat-regular my-5 text-sm">Proven success showcases track record.</div>
        </div>
        <div className="bottom-text montserrat-regular text-sm">
          <h4>          We are committed to fostering long-term partnerships, collaborating closely with our clients to translate their vision into a reality. With Electro Power Engineering as your partner, you can be confident that your electrical infrastructure is built to last, empowering your business for a brighter future.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;