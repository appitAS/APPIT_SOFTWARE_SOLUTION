import {
  WorkisyForAIDrivenTalent,
  faqAITalentAcquisitionData,
  whyChooseAILawyerData,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import CTA from "../../../components/pages/cta";
import FAQs from "../../../components/pages/faqs";
import AITalentAcquisition from "../../../components/pages/products/ai-talent-acquisition/ai-talent-acquisition-hero";
import ContactUs from "../../../components/pages/products/ai-talent-acquisition/contact-us";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import VerticalTabs from "../../../components/pages/products/ai-talent-acquisition/country-stats";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooterSection";
import Footer from "../../../components/home/Footer";
import React from "react";

const sectionsData = [
  {
    title: "Introducing AI-Driven Talent Acquisition Product Services",
    para: `At AppitSoftware, we know traditional hiring methods can’t keep up with today’s digital demands. That’s why we offer AI-Driven Talent Acquisition Services to streamline how businesses source, assess, and onboard talent.Powered by machine learning and predictive analytics, our solutions analyze resumes, social profiles, and hiring trends to identify top candidates based on skill fit, cultural alignment, and long-term potential.Our clients experience faster hiring, better-quality candidates, and smarter, data-driven decision-making—enhancing both recruiter efficiency and candidate experience.
AppitSoftware’s AI Talent Acquisition Services go beyond tools—they’re strategic solutions for future-ready hiring.`,
    image: "/images/AI-Driven Talent.png",
    reverse: true,
  },
];

const sectionsData2 = [
  {
    para: `Workisy is not just a job portal – it’s an AI-powered career partner designed to help candidates find the right job faster and smarter. With over 10 million+ jobs listed globally, Workisy leverages the power of Artificial Intelligence to make the job search process simple, accurate, and effective.
• AI-Driven Job Matching
• Personalized Job Recommendations
• Easy Resume Upload & Profile Setup`,
    image: "/images/AI-Driven Job.png",
    reverse: true,
    showList: true,
  },
];

const sectionsData3 = [
  {
    title: "Empowering Hiring Teams with AI Recruitment Software Services",
    para: `Recruitment today is about building high-performing teams, not just filling roles. AppitSoftware’s AI Recruitment Software automates sourcing, screening, and ranking, ensuring only top candidates move forward—faster and with less bias.Our solutions integrate seamlessly with your existing HR tools, supporting everything from startup growth to enterprise-scale hiring. Optimize your process, boost recruiter productivity, and create standout candidate experiences with AI-driven recruitment.`,
    image: "/images/empowering-hiring.svg",
  },
  {
    title: "Streamlining Talent Acquisition with AI Hiring Software Services",
    para: `AppitSoftware’s AI Hiring Software accelerates recruitment with unmatched speed and precision. Automate resume screening, interview scheduling, and candidate communication with AI-powered tools and chatbots.Our platform identifies top talent, predicts success, and evaluates both soft and technical skills using NLP and analytics. Customizable for any industry, it enhances efficiency, reduces costs, and helps you hire the best—faster.`,
    image: "/images/Streamlining Talent.svg",
    reverse: true,
  },
  {
    title:
      "Enhancing Recruitment Operations with AI Recruitment Management System Services",
    para: `AppitSoftware’s AI Recruitment Management System simplifies hiring at scale with a centralized platform for end-to-end recruitment—from requisition to onboarding.Automated workflows, real-time analytics, and predictive insights help track KPIs like time-to-fill and cost-per-hire. Optimize recruiter workloads, reduce admin tasks, and ensure a consistent, high-quality hiring experience across all teams.`,
    image: "/images/Enhancing Recruitment.svg",
  },
];

const page = () => {
  return (
    <>
      <TransparentHeader />
      <HideDefaultHeader />
      <AITalentAcquisition />
      <ImageWithTextSection
        sectionsData={sectionsData}
        className="bg-muted"
        mediaClassName="bg-[#010F10] p-6 rounded-3xl"
        contentClassName="bg-white p-6 rounded-3xl"
        sameWidth
      />
      <VerticalTabs />
      <Benefits
        data={WorkisyForAIDrivenTalent}
        heading={{
          title: "Why Choose Workisy for AI-Driven Talent Acquisition?",
          highlightText: "AI-Driven Talent Acquisition?",
        }}
      />

      <ImageWithTextSection
        heading={{
          title: "How Workisy Benefits Candidates ?",
          highlightText: "Benefits Candidates ?",
        }}
        sectionsData={sectionsData2}
        className="bg-white"
        contentClassName="text-left"
      />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <ImageWithTextSection sectionsData={sectionsData3} />
      <ContactUs />

      <FAQs
        data={faqAITalentAcquisitionData}
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
