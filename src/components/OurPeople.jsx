import React from 'react';
import '../styles.css';
import peopleImage from '../assets/img/peopleimg.png'; // Replace with the correct path

const OurPeople = () => {
  return (
    <section className="our-people-section">
      <div className="our-people-container">
        <div className="people-content">
          <img 
            src={peopleImage} 
            alt="Our People" 
            className="people-image" 
          />
          <div className="people-text">
            <h2 className="people-title montserrat-regular">
              <h2 className="highlight-orange">Our {" "}<span className="highlight-blue">People</span></h2>
            </h2>
            <p className="people-paragraph montserrat-regular">
              Our greatest asset is our people, including experienced engineers, skilled technicians, 
              project managers, and support staff. Passionate and dedicated, our team operates in unison, 
              driven by commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
        <hr style={{ width: '100%', height: '1px', backgroundColor: '#333', border: 'none', marginBottom: '20px', opacity:'75%' }} />
        <div className="route-content">
          <h2 className="route-title montserrat-regular">
            <h2 className="highlight-blue">OUR ROUTE <span className="highlight-orange">TO SUCCESS</span></h2> 
          </h2>
          <p className="route-paragraph montserrat-regular">
            Discover our expertise in electrical engineering, where innovation meets reliability. With a focus 
            on cutting-edge solutions, we specialise in delivering seamless integration and Industry standard 
            project practices. Our team's deep technical knowledge ensures excellence in every project, setting 
            new standards in electrical engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
