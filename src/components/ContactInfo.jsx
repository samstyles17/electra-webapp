import React from 'react';
import '../styles.css';
import map from '../assets/img/map.png';
import img1 from '../assets/img/enquiryimg.png';
import img2 from '../assets/img/headofficeimg.png';
// import img3 from '../assets/img/callimg.png';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="map-section">
        <img src={map} alt="Location Map" className="map-image" />
        <button className="locate-button">Locate in map</button>
      </div>
      <div className="info-section">
        <div className="top-info">
          <div className="info-box">
            <h3 className='montserrat-regular'><img src={img1} alt="" />FOR ENQUIRIES</h3>
            <p className='montserrat-regular'>office@electrapower.in</p>
          </div>
          <div className="info-box">
            <h3><img src={img2} alt="" />HEADOFFICE</h3>
            <p className='montserrat-regular'>Electra Power Engineering<br />
              'A' Grade Electrical Contractors & Engineers<br />
              33/1305-A1, Chalikavattom, Vennala P.O,<br />
              Kochi, Kerala, INDIA - 682028
            </p>
          </div>
        </div>
        <div className="phone-section">
          <div className="phone-box">
            <h3 className='montserrat-regular'>PHONE NUMBER</h3>
            <p className='montserrat-regular'>+91 940 098 9363 <button className="call-button">Call</button></p>
          </div>
          <div className="phone-box">
            <p className='montserrat-regular'>+91 920 738 9111 <button className="call-button">Call</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
