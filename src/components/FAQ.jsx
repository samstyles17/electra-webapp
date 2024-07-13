// src/FAQ.js

import React, { useState } from 'react';
import '../styles.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "What services does your electrical engineering company provide?",
    "Do you offer residential electrical system design and installation?",
    "Can your company handle commercial electrical projects?",
    "Are your electrical engineers licensed and experienced?",
    "What types of industries do you provide electrical solutions for?",
    "Do you offer energy-efficient lighting design and installation?",
    "What makes your electrical engineering company stand out?"
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title montserrat-medium">FREQUENTLY <span className="faq-highlight">ASKED</span> QUESTIONS</h2>
      <hr className="faq-divider" />
      {questions.map((question, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question montserrat-regular" onClick={() => toggleQuestion(index)}>
            {question}
            <span className="faq-arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer montserrat-regular">
              {/* Add your answer here */}
              Answers will be available soon!!
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
