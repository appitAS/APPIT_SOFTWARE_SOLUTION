import React from 'react';
import FAQs from '@/components/pages/faqs';

const TrackNexusFAQ = () => {
  const faqData = [
    {
      question: "What is the main objective of this system?",
      answer: "The main objective is to use AI-powered analytics and security features to monitor employee productivity, detect non-work activities, ensure data security, and provide transparency through detailed reporting and mandatory review processes."
    },
    {
      question: "How does the system track employee productivity?",
      answer: "The system continuously captures screenshots, logs user activities, and records application usage. AI analyzes these inputs to classify activities as productive, unproductive, or neutral, calculates a productivity (AI) score, and provides breakdowns in daily reports."
    },
    {
      question: "How does the system identify leave days?",
      answer: "If an employee does not log in at all during a workday (excluding weekends and company holidays), the system automatically marks that day as a \"Leave\" day in the reports."
    },
    {
      question: "How are screenshots and activities used for monitoring?",
      answer: "Screenshots are captured at configurable intervals during active sessions. AI uses OCR and image recognition to analyze screenshots, identifying open applications, websites, and document types. This data is correlated with activity logs for precise time mapping."
    },
    {
      question: "What measures are in place to protect data privacy and confidentiality?",
      answer: "Track Nexus enhances data security by monitoring outgoing emails and file transfers for potential risks, flagging when official emails are sent to personal addresses or sensitive files are transferred externally. All incidents are logged with comprehensive details and real-time alerts notify designated personnel. The system implements robust role-based access controls to ensure only authorized personnel can view sensitive information."
    },
    {
      question: "What kind of reports does Track Nexus generate?",
      answer: "Track Nexus offers automated day-wise and summary productivity reports that include key metrics such as leave status, AI Score, flagged non-work activities, and any data privacy incidents. The system supports data export in PDF and CSV formats for seamless integration with internal reporting processes."
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

export default TrackNexusFAQ;
