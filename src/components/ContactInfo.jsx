import React from 'react';
import '../styles.css';
import img1 from '../assets/img/chaticon.svg';
import img2 from '../assets/img/headoff.svg';
import img3 from '../assets/img/loc.svg';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="map-section">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="450"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=33%2F1305-A1%2C+Chalikkavattom%2C+Vennala%2C+Ernakulam%2C+Kerala+682028&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Location Map"
            ></iframe>
            
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="top-info">
          <div className="info-box">
            <div className="info-header">
              <img src={img2} alt="Enquiries" className="info-logo" />
              <h3 className="montserrat-regular">FOR ENQUIRIES</h3>
            </div>
            <p className="montserrat-regular">office@electrapower.in</p>
          </div>
          <div className="info-box">
            <div className="info-header">
              <img src={img1} alt="Head Office" className="info-logo" />
              <h3 className="montserrat-regular">HEAD OFFICE</h3>
            </div>
            <p className="montserrat-regular">
              Electra Power Engineering
              <br />
              'A' Grade Electrical Engineers & Contractors
              <br />
              33/1305-A1, Chalikavattom, Vennala P.O,
              <br />
              Kochi, Kerala, INDIA - 682028
            </p>
          </div>
        </div>
        <div className="phone-section">
          <div className="phone-box">
            <div className="phone-header">
              <img src={img3} alt="Phone" className="info-logo" />
              <h3 className="montserrat-regular">PHONE NUMBER</h3>
            </div>
            <p className="montserrat-regular">
              +91 940 098 9363 <button className="call-button">Call</button>
            </p>
            <p className="montserrat-regular">
              +91 920 738 9111 <button className="call-button">Call</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
