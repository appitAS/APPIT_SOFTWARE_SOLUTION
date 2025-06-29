import React from 'react';
import FAQs from '@/components/pages/faqs';

const AllInOneCRMFAQ = () => {
  const faqData = [
    {
      question: "What is AppitSoftware's All-In-One CRM Solution?",
      answer: "AppitSoftware's All-In-One CRM Solution is a unified platform that combines customer data management, sales tracking, marketing automation, and customer support tools into a single, AI-enhanced system."
    },
    {
      question: "What do your All-In-One CRM Product Services include?",
      answer: "Our All-In-One CRM Product Services cover implementation, configuration, AI integration, user training, and ongoing support to ensure the CRM aligns perfectly with your business processes."
    },
    {
      question: "How does your All-In-One CRM Software Services improve business efficiency?",
      answer: "AppitSoftware's CRM Software Services utilize AI to automate repetitive tasks, provide predictive insights, and streamline customer interactions, helping businesses improve conversion rates and customer satisfaction."
    },
    {
      question: "Can your All-In-One CRM Tools Services be customized for specific industries?",
      answer: "Yes, we tailor our CRM tools for various industries, including retail, healthcare, real estate, and finance, ensuring the features and AI capabilities meet sector-specific needs."
    },
    {
      question: "Is AppitSoftware's CRM solution scalable for growing businesses?",
      answer: "Absolutely. Our All-In-One CRM is designed to scale with your business, offering modular features and cloud-based infrastructure that support expansion, multiple users, and advanced analytics."
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

export default AllInOneCRMFAQ;
