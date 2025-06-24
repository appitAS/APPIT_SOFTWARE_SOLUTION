import {
  faqATS,
  whyChooseAILawyerData,
  FeaturesOfATS,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import ATSFeatures from "../../../components/pages/products/ats/ats-features";
import CTA from "../../../components/pages/cta";
import ATSHighlights from "../../../components/pages/products/ats/ats-highlights";
import ContactUs from "../../../components/pages/products/ats/contact-us";
import ATSChatFeatures from "../../../components/pages/products/ats/ats-chat-features";
import FAQs from "../../../components/pages/faqs";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import ATSHero from "../../../components/pages/products/ats/ats-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import React from "react";

const sectionsData = [
  {
    title: "The Need for Smart Applicant Tracking System Services",
    para: `Traditional hiring methods—relying on spreadsheets, endless emails, and manual tasks—often lead to delays and missed opportunities.  Smart Applicant Tracking System transforms the way organizations attract, assess, and hire top talent.Our solution automates every step of the hiring journey, from job postings and resume screening to interview coordination and final offers. With intelligent workflows, real-time progress tracking, and AI-powered insights, recruiters can focus more on people—not paperwork.By adopting AppitSoftware’s Smart ATS, businesses can accelerate time-to-hire, lower recruitment costs, and build a smarter, data-driven hiring process.`,
    image: "/images/solution-ats.png",
    reverse: true,
  },
];
const sectionsData2 = [
  {
    title: "Powering Recruitment with AI ATS Software Services",
    para: `AI is revolutionizing recruitment, and AppitSoftware’s AI ATS Software Services harness automation and machine learning to streamline hiring.
Our platform analyzes resumes, ranks candidates by job fit, and predicts hiring outcomes—reducing bias and enabling data-driven decisions.
By automating tasks like resume parsing, candidate shortlisting, follow-ups, and interview scheduling, recruiters save time and engage candidates more effectively. Plus, real-time analytics provide insights into hiring performance.With AppitSoftware’s AI ATS, organizations can build diverse, high-quality teams while minimizing administrative workload.`,
    image: "/images/solution-ats1.png",
  },
  {
    title: "Enhancing Hiring Accuracy with AI Applicant Tracking Services",
    para: `Recruiting top talent requires precision at every stage. The  AppitSoftware’s AI Applicant Tracking Services streamline the process with intelligent tools to manage job requisitions, track candidates, and evaluate profiles.Our AI-driven system identifies the best candidates based on skills, experience, and cultural fit, while automating resume screening and ranking to reduce time-to-hire.
By focusing on qualified candidates, recruiters save time and effort, achieving fairer, more consistent hiring decisions that build stronger teams.`,
    image: "/images/solution-ats2.png",
    reverse: true,
  },
  {
    title:
      "Revolutionizing Talent Acquisition with Smart AI Recruiters Services",
    para: `Recruitment today demands agility, personalization, and intelligence. AppitSoftware’s Smart AI Recruiters combine AI chatbots, predictive analytics, and automation to transform the hiring process.From engaging candidates with smart conversations to predicting success likelihood, our services help recruiters work smarter. Real-time insights enable tailored strategies for better engagement and faster hires.With Smart AI Recruiters, organizations create a faster, smarter, and more personalized recruitment experience that boosts employer branding and candidate retention.`,
    image: "/images/solution-ats3.png",
  },
];

const page = () => {
  return (
    <>
      <TransparentHeader />
      <HideDefaultHeader />
      <ATSHero />
      <ImageWithTextSection sectionsData={sectionsData} />
      <Benefits
        data={FeaturesOfATS}
        heading={{
          title: "Features of Smart Applicant Tracking System - ATS",
          highlightText: "ATS",
        }}
      />
      <ATSChatFeatures />
      <ATSFeatures />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <ATSHighlights />
      <ImageWithTextSection sectionsData={sectionsData2} />
      <FAQs
        data={faqATS}
        heading={{
          title: "Got Questions? We've Got Answers (FAQs)",
          highlightText: "(FAQs)",
        }}
      />
      <CTA />
      <ContactUs />
      <AboveFooterSection />
      <Footer />
    </>
  );
};

export default page;
