import {
  faqOutlookAICopilot,
  whyChooseAILawyerData,
  FeaturesOfOutlookAICopilot,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import OutlookAICopilotFeatures from "../../../components/pages/products/outlook-ai-copilot/outlook-ai-copilot-features";
import CTA from "../../../components/pages/cta";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import ContactUs from "../../../components/pages/products/outlook-ai-copilot/contact-us";
import OutlookAICopilotHighlights from "../../../components/pages/products/outlook-ai-copilot/outlook-ai-copilot-highlights";
import FAQs from "../../../components/pages/faqs";
import OutlookAICopilotHero from "../../../components/pages/products/outlook-ai-copilot/outlook-ai-copilot-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import React from "react";

const sectionsData = [
  {
    title:
      "Transforming Communication with Outlook AI Copilot Product Services",
    para: `AppitSoftware’s Outlook AI Copilot Product Services streamline email communication by integrating AI assistance directly into Outlook. Using advanced machine learning, the Copilot helps users compose, edit, and manage emails quickly and professionally.Ideal for busy professionals, sales teams, and customer service departments, this tool boosts productivity, reduces response times, and ensures consistent, high-quality communication across the board.`,
    image: "/images/solution-outlook-ai-copilot.png",
    reverse: true,
  },
];
const sectionsData2 = [
  {
    title: "Maximizing Productivity with Outlook AI Copilot Software Services",
    para: `AppitSoftware’s Outlook AI Copilot Software Services streamline email management with smart automation and communication enhancements. Features include automatic draft creation, grammar correction, tone adjustment, and predictive text suggestions—saving time while improving clarity and engagement.With intelligent follow-up reminders and task integrations, our AI Copilot ensures important emails are never missed. It's the ideal productivity tool for professionals managing high email volumes and multiple priorities.`,
    image: "/images/solution-outlook-ai-copilot1.png",
  },
  {
    title: "Write Smarter and Faster with Outlook 365 AI Write Email Software Services",
    para: `AI Write Email Software Services enhance email writing directly within Microsoft Outlook 365. With real-time assistance like smart autocomplete, tone adjustment, context-aware suggestions, and email summarization, users can write clearer, more professional emails faster.Ideal for any role—sales, marketing, HR, or admin—this tool ensures your communication is always polished, efficient, and effective.`,
    image: "/images/solution-outlook-ai-copilot2.png",
    reverse: true,
  },
];

const page = () => {
  return (
    <>
      <TransparentHeader />
      <HideDefaultHeader />
      <OutlookAICopilotHero />
      <ImageWithTextSection sectionsData={sectionsData} />
      <Benefits
        data={FeaturesOfOutlookAICopilot}
        heading={{
          title: "Features of Outlook AI Copilot",
          highlightText: "AI Copilot",
        }}
      />
      <OutlookAICopilotFeatures />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <OutlookAICopilotHighlights />
      <ImageWithTextSection sectionsData={sectionsData2} />
      <FAQs
        data={faqOutlookAICopilot}
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
