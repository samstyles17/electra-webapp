import React from "react";

const ApplyForm = () => {
  return (
    
    <div className="apply-form-container">
      <h2 className="careers-apply-text montserrat-medium">Apply Here</h2>
      <form className="apply-form">
        <div className="careers-form-group montserrat-regular">
          <label>First Name</label>
          <input type="text" name="firstName" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Last Name</label>
          <input type="text" name="lastName" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Email Address</label>
          <input type="email" name="email" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Mobile Number</label>
          <input type="tel" name="mobile" placeholder="+91XXXXX" />
          <button type="button" className="otp-button montserrat-regular">Send OTP</button>
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>WhatsApp Number</label>
          <input type="tel" name="whatsapp" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Role Applying For</label>
          <input type="text" name="role" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Total Experience in Years/Months</label>
          <input type="text" name="experience" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Current Annual CTC</label>
          <input type="text" name="ctc" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Upload Resume</label>
          <input type="file" name="resume" />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>
        <div className="careers-form-group-checkbox montserrat-regular">
          <label>
            <input type="checkbox" /> I accept the Terms & Conditions and
            Privacy Policy
          </label>
        </div>
        <button type="submit" className="careers-submit-button montserrat-regular">Submit</button>
      </form>
    </div>
  );
};

export default ApplyForm;
