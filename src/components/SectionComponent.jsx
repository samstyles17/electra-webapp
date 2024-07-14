import React from 'react';
import '../styles.css';

function SectionComponent() {
  return (
    <div className="section-component-container">
      <div className="section-component-row">
        <div className="section-component-text-section">
          <h1 className="section-component-heading montserrat-medium">
            Driving Change,
          </h1>
          <h1 className="section-component-sub-heading montserrat-medium">
            Powering Possibilities
          </h1>
          <p className="section-component-paragraph montserrat-regular">
            We are catalysts for change. By pushing the boundaries of what's possible
            and harnessing the power of imagination, we not only drive change but
            also empower endless possibilities for our clients and partners.
          </p>
        </div>
      </div>
      <div className="section-component-row">
        <div className="section-component-stats-container">
          <div className="section-component-stat-item">
            <h2 className="section-component-stat-number text-orange">12+</h2>
            <p className="section-component-stat-description">Years of Experience</p>
          </div>
          <div className="section-component-stat-divider"></div>
          <div className="section-component-stat-item">
            <h2 className="section-component-stat-number section-component-text-orange">300+</h2>
            <p className="section-component-stat-description">Projects Delivered</p>
          </div>
          <div className="section-component-stat-divider"></div>
          <div className="section-component-stat-item">
            <h2 className="section-component-stat-number text-orange">250+</h2>
            <p className="section-component-stat-description">Happy Clients</p>
          </div>
        </div>
        <div className="section-component-vision-container">
          <div className="section-component-vision-box">
            <h2 className="section-component-vision-title montserrat-medium"><span className="section-component-dot"></span> OUR VISION</h2>
            <p className="section-component-vision-paragraph montserrat-medium">
              We envision leading the electrical industry with innovation and excellence.
              Rooted in trust and transparency, we aim to deliver tailored solutions
              that surpass expectations, empowering industries and communities with safe,
              reliable, and sustainable electrical solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="section-component-row">
        <div className="section-component-mission-container">
          <div className="section-component-mission-box">
            <h2 className="section-component-mission-title montserrat-medium"><span className="section-component-dot section-component-blue-dot"></span> OUR MISSION</h2>
            <ul className="section-component-mission-list montserrat-medium">
              <li>Delivering exceptional high-tension electrical contracting services.</li>
              <li>Ensuring safety and sustainability with clear communication in all projects.</li>
              <li>Exceeding customer expectations through continuous improvement.</li>
              <li>Powering progress and enhancing community life with reliable electrical solutions.</li>
              <li>Pioneering cutting-edge technologies and methodologies.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionComponent;
