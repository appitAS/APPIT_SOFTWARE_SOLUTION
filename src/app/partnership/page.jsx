'use client';
import { useEffect } from 'react';
import Header from '@/components/home/Header';
import PartnershipHero from '@/components/partnership/PartnershipHero';
import PartnershipServices from '@/components/partnership/PartnershipServices';
import PartnershipFeatures from '@/components/partnership/PartnershipFeatures';
import PartnershipBenefits from '@/components/partnership/PartnershipBenefits';
import ChatWithAI from '@/components/platform/ChatWithAI';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import Script from 'next/script';

export const metadata = {
  title: 'Odoo ERP Solutions | Official Odoo Partner - APPIT Software',
  description: 'Your business operations with APPIT Software Solutions Inc., an official Odoo ERP Solutions partner. We specialize in Odoo ERP implementations.',
  keywords: [
    'Odoo ERP Solutions',
    'Odoo partner',
    'Odoo ERP Software Solutions',
    'Odoo AI Software Services',
    'Odoo Inventory Software Services',
    'ERP implementation',
    'business operations software'
  ]
};

export default function Partnership() {
  // Initialize smooth scrolling behavior
  useSmoothScroll();
  
  return (
    <>
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/partnership/"
          })
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is the Odoo partnership with APPIT Software Solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT Software Solutions partners with Odoo to provide businesses with streamlined operations, enhanced efficiency, and scalable solutions tailored to their specific needs."
              }
            },{
              "@type": "Question",
              "name": "What services does APPIT Software offer for Odoo implementation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT Software offers a comprehensive range of Odoo services including business process automation, custom Odoo development, integration services, and implementation tailored to your industry needs."
              }
            },{
              "@type": "Question",
              "name": "How can Odoo help streamline business operations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Odoo helps streamline business operations by providing integrated solutions that automate processes, reduce manual work, improve efficiency, and enable seamless workflow management across departments."
              }
            },{
              "@type": "Question",
              "name": "What are the benefits of working with APPIT Software as an Odoo partner?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Working with APPIT Software as an Odoo partner provides benefits such as tailored solutions for your industry needs, expert implementation and support, seamless integration with existing systems, and optimized business processes."
              }
            },{
              "@type": "Question",
              "name": "How do I get started with Odoo through APPIT Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To get started with Odoo through APPIT Software, you can request a consultation or demo on the website, after which the team will assess your requirements and propose a tailored implementation plan for your business."
              }
            }]
          })
        }}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <PartnershipHero />
        <PartnershipServices />
        <PartnershipFeatures />
        <PartnershipBenefits />
        <ChatWithAI />
        <AboveFooterSection />
        <Footer />
      </main>
    </>
  );
}
