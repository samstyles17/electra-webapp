import React, { useState } from "react";

const JobAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const jobDetails = [
    {
      title: "Kia Experienced Consultant",
      location: "Kerala",
      experience: "0-4 Years",
      description: "We are looking for Kia Experienced Consultant to join our showrooms located in Nettoor, Edappally, Kottayam, Desom, Thrissur and Palakkad. Candidates who have completed UG/Diploma with 0-4 years of experience can apply.",
      responsibilities: [
        "Be the first point of contact between customers and dealership",
        "Demonstrate features and options on all Kia cars",
        "Drive sales targets",
        "Ensure highest customer satisfaction"
      ],
      skillsets: [
        "Excellent interpersonal and customer service skills",
        "A persuasive personality",
        "Great networking skills",
        "Verbal and communication skills",
        "Basic knowledge and understanding of automobile industry and related terminologies"
      ],
      requirements: [
        "Must have LMV License."
      ],
      education: "UG/Diploma"
    },
    {
      title: "Content Strategist",
      location: "Kerala",
      experience: "2-5 Years",
      description: "We are seeking a Content Strategist to join our marketing team to plan and create engaging content that aligns with our brand's goals.",
      responsibilities: [
        "Develop and manage content strategies",
        "Create and edit written and visual content",
        "Collaborate with marketing and design teams"
      ],
      skillsets: [
        "Excellent writing and editing skills",
        "Strong understanding of SEO",
        "Creative mindset"
      ],
      requirements: [
        "Must have experience in content creation and strategy."
      ],
      education: "Bachelor's in Communications or related field"
    },
    {
      title: "General Technician",
      location: "Kerala",
      experience: "1-3 Years",
      description: "We are looking for a General Technician to support our workshop with car maintenance and repairs.",
      responsibilities: [
        "Perform vehicle diagnostics",
        "Conduct repairs and maintenance",
        "Ensure quality control"
      ],
      skillsets: [
        "Strong mechanical skills",
        "Problem-solving ability",
        "Experience with vehicle repairs"
      ],
      requirements: [
        "Must have technical diploma or equivalent experience."
      ],
      education: "Technical Diploma"
    },
    {
      title: "Call Centre Executive",
      location: "Kerala",
      experience: "0-2 Years",
      description: "We are hiring a Call Centre Executive to manage customer queries and support.",
      responsibilities: [
        "Handle inbound and outbound calls",
        "Resolve customer queries",
        "Provide product and service information"
      ],
      skillsets: [
        "Good communication skills",
        "Customer service orientation",
        "Problem-solving ability"
      ],
      requirements: [
        "Must have basic computer skills."
      ],
      education: "High School Diploma or higher"
    }
  ];
  

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {jobDetails.map((job, index) => (
        <div key={index}>
          <button
            className="accordion-button flex justify-between items-center py-2 w-full text-left bg-gray-100 rounded-lg mb-2"
            onClick={() => handleClick(index)}
          >
            <span>{job.title}</span>
            <span
              className="rounded-full border border-gray-500 p-2 w-6 h-6 flex items-center justify-center"
            >
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              <h4 className="montserrat-regular py-3">{job.experience} | {job.location}</h4>
              <p className="montserrat-regular py-3"><strong>Responsibilities:</strong></p>
              <ul className="py-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="montserrat-regular py-1">{resp}</li>
                ))}
              </ul>
              <p className="montserrat-regular py-3"><strong>Skillsets Required:</strong></p>
              <ul className="py-2">
                {job.skillsets.map((skill, idx) => (
                  <li key={idx} className="montserrat-regular py-1">{skill}</li>
                ))}
              </ul>
              <p className="montserrat-regular py-3"><strong>Requirements:</strong> {job.requirements}</p>
              <p className="montserrat-regular py-3"><strong>Education:</strong> {job.education}</p>
            </div>
          )}
          {/* Divider */}
          {index < jobDetails.length&& (
            <hr className="border-t-1 my-4 careers-divider" />
          )}
        </div>
      ))}
    </div>
  );
};

export default JobAccordion;
