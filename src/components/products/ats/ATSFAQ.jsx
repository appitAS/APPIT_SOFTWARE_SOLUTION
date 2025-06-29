import React from 'react';
import FAQs from '@/components/pages/faqs';

const ATSFAQ = () => {
  const faqData = [
    {
      question: "What is an ATS (Applicant Tracking System)?",
      answer: "An ATS is a software platform that helps organizations manage their end-to-end recruitment process—from job posting and resume screening to interviews, offer letters, and onboarding. It centralizes all hiring data, automates tasks, and improves collaboration between recruiters and hiring managers."
    },
    {
      question: "Who can use this ATS?",
      answer: "Our ATS is designed for startups, SMBs, enterprises, and recruitment agencies. Whether you're a solo recruiter or part of a 1,000+ employee HR department, the system scales to fit your needs."
    },
    {
      question: "Is resume parsing included?",
      answer: "Yes. Our built-in resume parser extracts contact info, skills, work history, education, and more from multiple resume formats (PDF, DOC, DOCX, etc.)—even in bulk."
    },
    {
      question: "Does your ATS support job board integrations?",
      answer: "Yes. You can post jobs to multiple job boards like LinkedIn, Naukri, Indeed, Monster, and more from a single dashboard with just one click."
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

export default ATSFAQ;
