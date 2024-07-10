import React from 'react';
import '../styles.css';
import map from '../assets/img/map.png';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="map-section">
        <img src={map} alt="Location Map" className="map-image" />
        <button className="locate-button">Locate in map</button>
      </div>
      <div className="info-section">
        <div className="info-box">
          <h3>FOR ENQUIRIES</h3>
          <p>office@electrapower.in</p>
        </div>
        <div className="info-box">
          <h3>HEADOFFICE</h3>
          <p>Electra Power Engineering<br />
            'A' Grade Electrical Contractors & Engineers<br />
            33/1305-A1, Chalikavattom, Vennala P.O,<br />
            Kochi, Kerala, INDIA - 682028
          </p>
        </div>
        <div className="phone-section">
          <div className="phone-box">
            <h3>PHONE NUMBER</h3>
            <p>+91 940 098 9363 <button className="call-button">Call</button></p>
          </div>
          <div className="phone-box">
            <p>+91 920 738 9111 <button className="call-button">Call</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
