import React from 'react';
import FAQs from '@/components/pages/faqs';

const CareerFAQ = () => {
  const faqData = [
    {
      question: "What types of roles are available at Appit Software?",
      answer: "Appit Software offers a wide range of full-time positions across IT and business solutions, including roles in Gen AI customer experience, Oracle and ServiceNow AI, risk management, outsourced IT support and more."
    },
    {
      question: "What is the hiring process at Appit Software?",
      answer: [
        "Our hiring process typically includes:",
        "Application review",
        "Initial screening (phone/video)",
        "Technical assessment/task",
        "Panel interviews",
        "Final interview with leadership",
        "Reference checks and offer"
      ]
    },
    {
      question: "Does Appit Software offer remote or flexible working options?",
      answer: "While the career page may not specify this, many IT companies today offer flexible or remote working options. For details on Appit Software's policy, please check individual job postings or contact the HR team."
    },
    {
      question: "What is the culture like at Appit Software?",
      answer: "Appit Software promotes a culture of innovation, automation, and growth. Employees are encouraged to innovate, automate processes, and support the company's vision from strategy to execution."
    },
    {
      question: "What kind of skills and background is Appit Software looking for?",
      answer: "Candidates with expertise in AI, IT, business solutions, e-commerce platforms, software development, and digital transformation are highly valued. Specific requirements depend on the role."
    },
    {
      question: "Does Appit Software offer internships or entry-level positions?",
      answer: "The current career page emphasizes full-time positions, but you can inquire directly for internship or entry-level opportunities."
    },
    {
      question: "How can I apply for a position at Appit Software?",
      answer: "You can explore current openings on the careers page and follow the application instructions for each role. If no direct instructions are listed, consider contacting Appit Software via their contact page."
    },
    {
      question: "What is the approach to professional growth at Appit Software?",
      answer: "The company supports growth through continuous learning, innovation, and involvement in cutting-edge projects across various industries."
    }
  ];

  return (
    <FAQs
      data={faqData}
      heading={{
        title: "Frequently Asked Questions (FAQs)",
        highlightText: "(FAQs)",
      }}
      sectionClassName="py-10"
    />
  );
};

export default CareerFAQ;
