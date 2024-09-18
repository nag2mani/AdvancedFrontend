import React, { useState } from 'react';

function FAQComponent({ faqs }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); 
  };

  return (
    <div className="faq-section">
      <p>FAQs</p>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span>{expandedIndex === index ? 'x' : '+'}</span> 
          </div>
          {expandedIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQComponent;