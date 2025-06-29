import React from 'react';
import FAQs from '@/components/pages/faqs';

const HelixAIPharmaFAQ = () => {
  const faqData = [
    {
      question: "What is the HelixAI Pharma Product Platform?",
      answer: "HelixAI Pharma Product Platform is an advanced, AI-powered solution designed to accelerate pharmaceutical research, drug discovery, clinical development, and regulatory compliance. It integrates domain-specific generative AI, data analytics, and workflow automation to drive efficiency and innovation across the pharmaceutical pipeline."
    },
    {
      question: "How does HelixAI use AI in pharmaceutical research?",
      answer: "HelixAI leverages generative AI and machine learning to analyze large-scale scientific, clinical, and proprietary datasets. It helps identify novel drug candidates, optimize preclinical and clinical workflows, and provide actionable insights for regulatory and market intelligence."
    },
    {
      question: "Is my data secure on the HelixAI Pharma Platform?",
      answer: "Yes. HelixAI is built with enterprise-grade security and privacy in mind. Your proprietary data is protected, not used for model training, and can be deployed securely in your preferred environment—cloud, on-premises, or hybrid."
    },
    {
      question: "Can HelixAI integrate with our existing systems?",
      answer: "Absolutely. The platform supports integration with internal and external APIs, allowing you to connect your existing data sources, laboratory systems, and business applications for seamless workflow automation."
    },
    {
      question: "How does HelixAI support regulatory compliance?",
      answer: "HelixAI provides AI-curated regulatory updates, automates documentation, and ensures data integrity for faster, more accurate regulatory submissions. It helps you stay ahead of evolving requirements and maintain audit readiness."
    },
    {
      question: "How do I get started with HelixAI Pharma Product Platform?",
      answer: "Contact the HelixAI team to schedule a demo or consultation. They will guide you through the platform's features and help tailor a solution to your organization's needs."
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

export default HelixAIPharmaFAQ;
