import React, { useState } from "react";

const ApplyForm = () => {
  const [agree, setAgree] = useState(false);
  const [fileError, setFileError] = useState(""); // To store file size error message

  const jobTitles = ["Electrical Site Engineer", "Electrician"]; // Replace with actual job titles
  const maxFileSize = 2 * 1024 * 1024; // Maximum file size (2MB)

  const handleSubmit = (e) => {
    if (!agree) {
      e.preventDefault(); // Prevent form submission if the checkbox is not checked
      alert("Please accept the Terms & Conditions and Privacy Policy.");
    }

    if (fileError) {
      e.preventDefault(); // Prevent form submission if there's a file error
      alert("Please upload a file smaller than 2MB.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > maxFileSize) {
      setFileError("File size exceeds 2MB limit.");
    } else {
      setFileError(""); // Clear the error if file size is valid
    }
  };

  return (
    <div className="apply-form-container">
      <h2 className="careers-apply-text montserrat-medium">Apply Here</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="careers-form-group montserrat-regular">
          <label>
            First Name <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" name="firstName" required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            Last Name <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" name="lastName" required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" name="email" required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            Mobile Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            placeholder="+91XXXXX"
            pattern="^\+?\d{10,13}$"
            title="Please enter a valid phone number"
            required
          />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            WhatsApp Number <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="tel"
            name="whatsapp"
            pattern="^\+?\d{10,13}$"
            title="Please enter a valid WhatsApp number"
            required
          />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            Role Applying For <span style={{ color: "red" }}>*</span>
          </label>
          <select name="role" required>
            <option value="">Select a role</option>
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            Total Experience (Months) <span style={{ color: "red" }}>*</span>
          </label>
          <input type="number" name="experience" min="0" required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            Current Annual CTC <span style={{ color: "red" }}>*</span>
          </label>
          <input type="number" name="ctc" min="0" required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>
            Upload Resume <span style={{ color: "red" }}>*</span>
          </label>
          <input type="file" name="resume" onChange={handleFileChange} required />
          {fileError && <p style={{ color: "red" }}>{fileError}</p>} {/* Show error message */}
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Message</label>
          <textarea name="message" maxLength="200"></textarea>
        </div>
        <div className="careers-form-group-checkbox montserrat-regular">
          <label>
            <input
              type="checkbox"
              onChange={() => setAgree(!agree)}
            />{" "}
            I accept the Terms & Conditions and Privacy Policy
          </label>
        </div>
        <button
          type="submit"
          className="careers-submit-button montserrat-regular"
          disabled={!agree}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
