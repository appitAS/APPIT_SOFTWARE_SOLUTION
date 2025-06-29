'use client';
import { useEffect } from 'react';
import Header from '@/components/home/Header';
import PlatformHero from '@/components/platform/PlatformHero';
import PlatformFeatures from '@/components/platform/PlatformFeatures';
import PlatformAdvantages from '@/components/platform/PlatformAdvantages';
import PlatformAdditionalFeatures from '@/components/platform/PlatformAdditionalFeatures';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import ChatWithAI from '@/components/platform/ChatWithAI';
import Script from 'next/script';

// Note: metadata is exported from metadata.js

export default function Platform() {
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
            "acquireLicensePage": "https://www.appitsoftware.com/platform/"
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
              "name": "What is the AskGenie AI Platform?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AskGenie AI is a platform that allows you to quickly build an AI assistant using data from Helpdesks, PDFs, CSVs, websites, and blogs to resolve customer queries—fast and at scale."
              }
            },{
              "@type": "Question",
              "name": "How can AskGenie AI improve customer support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AskGenie AI provides intuitive answers to customer FAQs by analyzing diverse online content such as blogs, knowledge bases, feedback, and reviews, ensuring precise responses to inquiries and enhancing customer experience through immediate support."
              }
            },{
              "@type": "Question",
              "name": "What data sources can AskGenie AI use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AskGenie AI can leverage data from multiple sources including helpdesk systems, PDF documents, CSV files, websites, and blogs to build comprehensive knowledge bases for customer support."
              }
            },{
              "@type": "Question",
              "name": "How quickly can I set up an AI assistant with AskGenie?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can quickly create and deploy your Gen AI assistant with AskGenie, enabling fast implementation of self-service support options for your customers."
              }
            },{
              "@type": "Question",
              "name": "How does AskGenie AI benefit businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AskGenie AI helps businesses provide self-service support options, reduce support ticket volume, improve customer satisfaction with immediate responses, and scale customer service operations efficiently."
              }
            }]
          })
        }}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <PlatformHero />
        <PlatformFeatures />
        <PlatformAdvantages />
        <PlatformAdditionalFeatures />
        <ChatWithAI />
        <AboveFooterSection />
        <Footer />
      </main>
    </>
  );
}