import React from 'react';
import FAQs from '@/components/pages/faqs';

const OutlookAICopilotFAQ = () => {
  const faqData = [
    {
      question: "What are Outlook AI Copilot Product Services offered by AppitSoftware?",
      answer: "AppitSoftware provides advanced Outlook AI Copilot Product Services that integrate artificial intelligence into Microsoft Outlook, enhancing productivity through smart suggestions, automated responses, and intelligent scheduling."
    },
    {
      question: "How can Outlook AI Copilot Software Services benefit my business communication?",
      answer: "Our Outlook AI Copilot Software Services enable users to streamline email management by auto-drafting replies, summarizing long threads, and prioritizing messages, saving time and reducing manual effort."
    },
    {
      question: "What is Outlook 365 AI Write Email Software and how does it work?",
      answer: "Outlook 365 AI Write Email Software from AppitSoftware uses natural language processing (NLP) to draft professional, context-aware emails automatically, improving communication speed and consistency."
    },
    {
      question: "Can AppitSoftware customize Outlook AI tools for specific business needs?",
      answer: "Yes, AppitSoftware customizes Outlook AI Copilot functionalities based on business workflows, including language preferences, tone adjustment, integration with CRM tools, and task automation."
    },
    {
      question: "Is the Outlook AI Copilot secure for enterprise communication?",
      answer: "Absolutely. AppitSoftware ensures enterprise-grade security and compliance in all Outlook AI Copilot solutions, including data encryption, secure API integrations, and adherence to Microsoft 365 security protocols."
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

export default OutlookAICopilotFAQ;
