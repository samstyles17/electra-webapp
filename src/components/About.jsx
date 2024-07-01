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
        <h2>About Us</h2>
        <p>
          Established in 2013, we are an ‘A’ grade HT electrical contractors & engineers known for trust and technical excellence. Our experienced team delivers comprehensive electrical solutions for projects of any scale.
        </p>
        <div className="bullets-container">
          <div className="bullet-point">Seamless project management with turnkey expertise.</div>
          <div className="bullet-point">Client-centered pricing ensuring collaboration.</div>
          <div className="bullet-point">Unwavering trust for project success.</div>
          <div className="bullet-point">Technical excellence ensures optimal solutions.</div>
          <div className="bullet-point">Proven success showcases track record.</div>
        </div>
        <div className="bottom-text">
          We are committed to fostering long-term partnerships, collaborating closely with our clients to translate their vision into a reality. With Electro Power Engineering as your partner, you can be confident that your electrical infrastructure is built to last, empowering your business for a brighter future.
        </div>
      </div>
    </div>
  );
}

export default About;
