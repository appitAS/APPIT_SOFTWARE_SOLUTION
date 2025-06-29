import React from 'react';
import FAQs from '@/components/pages/faqs';

const AboutFAQ = () => {
  const faqData = [
    {
      question: "Who is APPIT Software?",
      answer: "APPIT Software is a provider of IT services and business solutions focused on delivering value to clients through innovative and agile technology."
    },
    {
      question: "What is the mission of APPIT Software?",
      answer: "APPIT Software's mission is to deliver IT services and business solutions that exceed client expectations, enabling businesses to grow and deliver higher customer satisfaction."
    },
    {
      question: "How does APPIT Software help businesses?",
      answer: "By adopting up-to-date, agile, and innovative IT solutions, APPIT Software helps businesses improve their operations, efficiency, and customer satisfaction."
    },
    {
      question: "What kind of IT services does APPIT Software offer?",
      answer: "While this page focuses on the company's approach, APPIT Software's services generally include software development, consulting, and business solutions tailored to client needs."
    },
    {
      question: "Why should I choose APPIT Software for my business?",
      answer: "APPIT Software is dedicated to exceeding client expectations and continuously updating its technology and solutions to add value to its clients' businesses."
    },
    {
      question: "How does APPIT Software ensure value for clients?",
      answer: "By staying agile, innovative, and customer-focused, APPIT Software ensures clients receive solutions that meet and often surpass their business objectives."
    }
  ];

  return (
    <FAQs
      data={faqData}
      heading={{
        title: "Frequently Asked Questions (FAQs)",
        highlightText: "(FAQs)",
      }}
    />
  );
};

export default AboutFAQ;
