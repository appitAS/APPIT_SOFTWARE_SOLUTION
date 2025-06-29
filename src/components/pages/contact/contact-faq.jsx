import React from 'react';
import FAQs from "@/components/pages/faqs";

const ContactFAQ = () => {
  const faqData = [
    {
      question: "How can I get in touch with Appit Software?",
      answer: "You can contact Appit Software using the contact form on the website, by email, or by reaching out to one of their global offices."
    },
    {
      question: "Where are the Appit Software offices located?",
      answer: [
        "USA: 16192 Coastal Highway, Lewes, DE 19958, USA",
        "Saudi Arabia: Office 254, Al Olaya Street, Riyadh, Kingdom of Saudi Arabia",
        "UAE: IFZA Business Park, DDPDubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates",
        "India: PSR Prime Towers, 704 C, 7th Floor, Adjacent to DLF Cyber City, Gachibowli, Hyderabad, Telangana, India-500032"
      ]
    },
    {
      question: "Are in-person appointments available at the offices?",
      answer: "Yes, appointments can be arranged by contacting the team through the website's contact form or by email."
    },
    {
      question: "What services can I get help with by contacting Appit Software?",
      answer: "You can get assistance with global IT services, support, and workspace solutions for your business."
    },
    {
      question: "How can I schedule a phone or Zoom call with Appit Software?",
      answer: "After you send a message or email through the website, a team member will coordinate a convenient time for a phone or Zoom call."
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

export default ContactFAQ;