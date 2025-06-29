import React from 'react';
import FAQs from '@/components/pages/faqs';

const AITalentAcquisitionFAQ = () => {
  const faqData = [
    {
      question: "What are AI-Driven Talent Acquisition Product Services from AppitSoftware?",
      answer: "AppitSoftware's AI-Driven Talent Acquisition Product Services use artificial intelligence to automate and enhance the hiring process, from candidate sourcing to onboarding, delivering faster and smarter recruitment results."
    },
    {
      question: "How do your AI Recruitment Software Services help HR teams?",
      answer: "Our AI Recruitment Software Services streamline the hiring workflow by screening resumes, ranking candidates, and scheduling interviews—saving HR teams time while improving candidate quality and experience."
    },
    {
      question: "What features are included in your AI Hiring Software Services?",
      answer: "AppitSoftware's AI Hiring Software includes automated job matching, resume parsing, chatbot-driven applicant interaction, predictive analytics, and seamless integration with popular HR systems and job portals."
    },
    {
      question: "Can your AI Recruitment Management System Services be customized for different industries?",
      answer: "Yes, our AI Recruitment Management System is fully customizable for various sectors including IT, healthcare, finance, retail, and more—ensuring tailored workflows and AI algorithms for precise hiring."
    },
    {
      question: "Is your AI recruitment system suitable for high-volume hiring?",
      answer: "Absolutely. AppitSoftware's AI-powered recruitment solutions are built to handle large volumes of applications efficiently, making them ideal for enterprises with ongoing and bulk hiring needs."
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

export default AITalentAcquisitionFAQ;
