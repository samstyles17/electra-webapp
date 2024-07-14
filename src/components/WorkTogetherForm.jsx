import React from "react";
import "../styles.css";
import illustration from "../assets/img/contactimg.png";

const WorkTogetherForm = () => {
  return (
    <div className="work-together-container">
      <div className="illustration-section">
        
        <h1 className="montserrat-medium">
            <hr />
          LET US <br />
          <span className="blue">
            WORK <span >TOGETHER</span>
          </span>
        </h1>
        <img
          src={illustration}
          alt="Work Together"
          className="illustration-image"
        />
      </div>
      <div className="form-section">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="form-input half-width  montserrat-medium"
          />
          <input
            type="text"
            placeholder="Enter Company Name"
            className="form-input half-width montserrat-medium"
          />
        </div>
        <input
          type="email"
          placeholder="Enter Email ID"
          className="form-input full-width montserrat-medium"
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="form-input full-width montserrat-medium"
        />
        <select className="form-input full-width montserrat-medium ">
          <option>Your Requesting as - DIRECTOR1</option>
          <option>Your Requesting as - DIRECTOR2</option>
          <option>Your Requesting as - DIRECTOR3</option>
          <option>Your Requesting as - DIRECTOR4</option>
          {/* Add more options as needed */}
        </select>
        <textarea
          placeholder="Your Requirements in words"
          className="form-input full-width textarea-input montserrat-regular"
        ></textarea>
        <button className="submit-button montserrat-medium">SUBMIT</button>
      </div>
    </div>
  );
};

export default WorkTogetherForm;
