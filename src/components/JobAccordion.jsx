import React, { useState, useEffect } from "react";

const JobAccordion = ({ onJobTitlesChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const jobDetails = [
    {
      title:"Accountant Assistant",
      location:"Ernakulam, Kerala",
      experience:"1+ Year",
      job_status: "Open",
      description:"We are seeking a motivated and detail-oriented Accountant Assistant to join our team. You will play a crucial role in supporting the financial operations of our electrical contracting firm. This position involves various accounting, administrative, and customer service tasks.",
      responsibilities:[
        "Accounting: Accurately record financial transactions, Process invoices and payments, Assist in preparing financial statements",
        "Administrative Support: Manage office tasks such as filing, printing, and emailing, Organize and maintain financial records",
        "Customer Service: Communicate with clients and vendors regarding payments and invoices, Address any billing inquiries",
        "Payroll: Assist with payroll processing, Verify timesheets and calculate vacation/sick time",
        "Financial Reporting: Help create and update financial reports (balance sheets, cash flow statements, etc.)",
        "Reconciliation: Reconcile financial accounts, including accounts receivable and payable",
        "Budgeting: Evaluate financial budgets and track expenses",
        "Compliance: Ensure compliance with company policies and procedures"
      ],
      skillsets:[
        "Strong understanding of accounting principles and practices", 
        "Proficiency in Microsoft Office Suite (especially Excel)" ,
        "Excellent attention to detail and accuracy", 
        "Effective communication and interpersonal skills", 
        "Ability to work independently and as part of a team "
      ],
      requirements:[
        "Bachelor's degree in Commerce (B.Com) or higher. ",
        "1+ year of experience in an electrical contracting firm or a related field"
      ],
      education:"Bachelor's degree in Commerce (B.Com) or higher",
      benefits:"Competitive salary. Opportunities for professional growth and development. Work in a dynamic and innovative environment."
    },
    {
      title: "Electrical Site Engineer",
      location: "Kerala",
      experience: "2+ Years",
      job_status: "Open",
      description: "Electrapower Engineering, a leading A-Grade HT electrical contracting firm, is seeking a highly motivated and experienced Electrical Site Engineer to join our team.",
      responsibilities: [
        "Oversee and coordinate all on-site electrical activities.",
        "Manage project timelines, budgets, and resources.",
        "Review and interpret electrical drawings, specifications, and schematics.",
        "Conduct regular inspections and quality checks.",
        "Supervise and guide a team of electricians and technicians.",
        "Maintain effective communication with clients.",
        "Implement and enforce safety protocols.",
        "Prepare and submit regular progress reports."
      ],
      skillsets: [
        "Strong knowledge of electrical system design.",
        "Project management and site coordination skills.",
        "Ability to read electrical schematics and plans.",
        "Excellent communication and leadership skills."
      ],
      requirements: [
        "B.Tech/Diploma in Electrical and Electronics Engineering (EEE).",
        "Minimum 2 years of experience in electrical projects, preferably with an A-Grade Electrical Contractor."
      ],
      education: "B.Tech/Diploma in Electrical and Electronics Engineering"
    },
    {
      title: "Electrician",
      location: "Kerala",
      experience: "1-2 Years",
      job_status: "Open",
      description: "Electrapower Engineering is seeking skilled Electricians to join our team. The ideal candidate will have a strong technical background in electrical installations, maintenance, and repair.",
      responsibilities: [
        "Install, maintain, and repair electrical systems.",
        "Perform routine electrical maintenance tasks.",
        "Inspect transformers, circuit breakers, and electrical components.",
        "Troubleshoot and resolve electrical malfunctions.",
        "Adhere to safety protocols and regulations.",
        "Collaborate effectively with team members to complete projects."
      ],
      skillsets: [
        "Proficient in electrical installations and repairs.",
        "Ability to read and interpret electrical drawings.",
        "Strong troubleshooting and problem-solving skills.",
        "Good communication and teamwork abilities."
      ],
      requirements: [
        "ITI Electrical (Wireman, Electrician) or Diploma in Electrical Engineering.",
        "1 to 2 years of experience in electrical work, preferably with an A-Grade Electrical Contractor."
      ],
      education: "ITI Electrical/Diploma in Electrical Engineering"
    }
  ];

  useEffect(() => {
    const titles = jobDetails.map(job => job.title);
    onJobTitlesChange(titles);
  }, [onJobTitlesChange]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className="accordion">
      {jobDetails.map((job, index) => (
        <div key={index}>
          <button
            className="accordion-button flex justify-between items-center py-2 w-full text-left bg-gray-100 rounded-lg mb-2"
            onClick={() => handleClick(index)}
          >
            <span className="montserrat-bold">{job.title}</span>
            <span
              className="rounded-full border border-gray-500 p-2 w-6 h-6 flex items-center justify-center"
            >
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content ">
              <h4 className="montserrat-regular py-3">{job.experience} | {job.location}</h4>
              <p className="montserrat-regular py-3"><strong>Position Status: </strong>{job.job_status}</p>
              <p className="montserrat-regular py-3"><strong>Responsibilities:</strong></p>
              <ul className="py-2 list-disc mx-5">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="montserrat-regular py-1">{resp}</li>
                ))}
              </ul>
              <p className="montserrat-regular py-3"><strong>Skillsets Required:</strong></p>
              <ul className="py-2 list-disc mx-5">
                {job.skillsets.map((skill, idx) => (
                  <li key={idx} className="montserrat-regular py-1">{skill}</li>
                ))}
              </ul>
              <p className="montserrat-regular py-3"><strong>Requirements:</strong> {job.requirements}</p>
              <p className="montserrat-regular py-3"><strong>Education:</strong> {job.education}</p>
            </div>
          )}
          {index < jobDetails.length - 1 && (
            <hr className="border-t-1 my-4 careers-divider" />
          )}
        </div>
      ))}
    </div>
  );
};

export default JobAccordion;