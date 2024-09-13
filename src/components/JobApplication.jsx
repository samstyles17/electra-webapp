import React from "react";
import JobAccordion from "./JobAccordion";
import ApplyForm from "./ApplyForm";

const JobApplication = () => {
  return (
    <div className="job-application-container">
      <div className="careers-left-column">
        <JobAccordion />
      </div>
      <div className="careers-right-column">
        <ApplyForm />
      </div>
    </div>
  );
};

export default JobApplication;
