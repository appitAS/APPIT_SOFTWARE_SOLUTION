import {
  BenefitAILawyerData,
  faqAILawyerData,
  KeyfeaturesAILawyerData,
  whyChooseAILawyerData,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import CTA from "../../../components/pages/cta";
import FAQs from "../../../components/pages/faqs";
import KeyFeatures from "../../../components/pages/features/key-features";
import AILawyerHero from "../../../components/pages/products/ai-lawyers/ai-lawyer-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import VerticalTabs from "../../../components/pages/products/ai-lawyers/vertical-tabs";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooterSection";
import Footer from "../../../components/home/Footer";
import React from "react";

const sectionsData = [
  {
    title: "Transforming Legal Services with Intelligent AI Solutions",
    para: `At AppitSoftware, we understand the pressures law firms and legal departments face today—tight deadlines, increasing workloads, and the demand for precision. That's why our Legal AI Assistance Product Services are designed to streamline legal operations and enhance decision-making.
Our Legal AI Assistance Product Services integrate machine learning and natural language processing to provide instant support for case research, legal analysis, risk assessment, and compliance checks. By using these services, law firms can automate repetitive tasks, reduce errors, and focus more on strategic advisory roles.
Organizations that adopt our Legal AI Assistance Product Services experience faster turnaround times, improved client satisfaction, and enhanced operational efficiency. From contract analysis to predictive litigation outcomes, our AI tools act as a force multiplier for any legal team.`,
    image: "/images/laptop-mobile-banner.png",
    reverse: true,
  },
];

const sectionsData2 = [
  {
    title: "Empowering Law Firms with AI Lawyer Software Services",
    para: `In today's tech-driven world, the legal sector must evolve. AppitSoftware's AI Lawyer Software Services empower legal professionals by integrating the power of artificial intelligence into everyday practice.
From automating document review and legal research to compliance checks and case management, AI Lawyer Software Services streamline tasks and enhance accuracy. Our platforms can draft legal opinions, analyze case files in minutes, and support smarter decision-making.
With AI Lawyer Software Services, law firms boost productivity, reduce errors, and deliver faster, more precise legal outcomes. It's not about replacing lawyers—it's about equipping them for the future.`,
    image: "/images/ai-1.png",
  },
  {
    title: "Leading Innovation with Law AI Software Services",
    para: `At AppitSoftware, innovation drives everything we do. Our Law AI Software Services mark a new era in legal technology—blending advanced AI with legal expertise to deliver intelligent, tailored solutions.
With Law AI Software Services, legal teams can analyze case history, automate due diligence, streamline client intake, and predict litigation outcomes—all with greater speed and accuracy.
Whether serving corporate legal departments, boutique firms, or global practices, Law AI Software Services reduce costs, improve efficiency, and enhance decision-making.
Our mission is simple: to modernize legal workflows through Law AI Software Services, while upholding justice, integrity, and client-first values.`,
    image: "/images/ai-2.png",
    reverse: true,
  },
  {
    title: "Streamline Legal Workflows with Smart Document Automation",
    para: `Legal documentation is essential but often repetitive and error-prone. AppitSoftware's Legal Document Software Services simplify this process with intelligent automation.
Automatically draft, review, and manage everything from contracts and affidavits to wills and corporate policies. With AI-powered templates, clause libraries, and real-time compliance checks, your documents stay accurate and aligned with local laws.
Reduce drafting time, boost consistency, and improve client service—while integrating effortlessly with your existing case management systems for an end-to-end legal solution.`,
    image: "/images/ai-3.png",
  },
];

const page = () => {
  return (
    <>
      <TransparentHeader />
      <HideDefaultHeader />
      <AILawyerHero />
      <ImageWithTextSection
        sectionsData={sectionsData}
        className="bg-muted"
        mediaClassName="bg-white p-6 rounded-3xl"
        contentClassName="bg-white p-6 rounded-3xl"
        sameWidth
      />
      <VerticalTabs />
      <Benefits
        data={BenefitAILawyerData}
        heading={{
          title: "The Advantage of Choosing Our AI for Legal Practice",
          highlightText: "Advantage",
        }}
      />
      <KeyFeatures
        data={KeyfeaturesAILawyerData}
        heading={{
          title: "Who is AI Lawyer for?",
          para: "Explore features that boost your productivity. From document automation to advanced research, we've got the hard work covered.",
          highlightText: "Who",
        }}
        height
        cards={4}
        simpleBG
      />
      <ImageWithTextSection sectionsData={sectionsData2} />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <FAQs
        data={faqAILawyerData}
        heading={{
          title: "Got Questions? We've Got Answers (FAQs)",
          highlightText: "(FAQs)",
          }}
          />
          <CTA />
            <AboveFooterSection />
      <Footer />
    </>
  );
};

export default page;