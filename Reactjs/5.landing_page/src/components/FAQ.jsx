import React from 'react';
import FAQComponent from './FAQComponent';

function FAQ() {
  const faqData = [
    {
      question: "What is the process of building a custom website?",
      answer: "The process starts with a discussion of your business needs and goals. From there, I create wireframes and design mockups, and after your approval, development begins. I ensure regular updates and collaboration throughout the project to meet your expectations."
    },
    {
      question: "How do you ensure that my website is optimized for search engines (SEO)?",
      answer: "I follow best practices for SEO during development by optimizing page load speed, implementing proper meta tags, using semantic HTML, and ensuring mobile responsiveness. I also structure content to make it easy for search engines to index."
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer: "Yes, I offer post-launch support and maintenance services. These include regular updates, security patches, performance optimization, and content updates to ensure your website stays current and secure."
    },
    {
      question: "Can you help me redesign an existing website?",
      answer: "Certainly! I can work on redesigning an existing website to improve its look, functionality, and user experience. Whether it's updating visuals or restructuring the site for better performance, I’ll ensure the redesign aligns with your business goals."
    }
  ];

  return (
    <div>
      <FAQComponent faqs={faqData} />
    </div>
  );
}

export default FAQ;