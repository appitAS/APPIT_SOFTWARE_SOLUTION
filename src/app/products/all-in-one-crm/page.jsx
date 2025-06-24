import { faqAllInOneCRM, whyChooseAILawyerData } from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import ImageTextBlack from "../../../components/layout/image-text-black";
import CRMFeaturesGrid from "../../../components/pages/products/all-in-one-crm/crm-features-grid";
import AICRMFeaturesSection from "../../../components/layout/ai-features-section";
import CTA from "../../../components/pages/cta";
import ContactUs from "../../../components/pages/products/all-in-one-crm/contact-us";
import FAQs from "../../../components/pages/faqs";
import AllInOneCRMHero from "../../../components/pages/products/all-in-one-crm/all-in-one-crm-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import React from "react";

const featuresImageSection1 = [
  {
    heading: "Core Modules & Features",
    subheading: "Discover Real Business Benefits through Generative AI",
    title: "Lead Management",
    bulletPoints: [
      {
        text: "Capture leads from web forms, emails, social media, calls, and chat.",
      },
      {
        text: "Auto-assign leads to sales reps using round-robin or rule-based logic.",
      },
      {
        text: "Lead scoring based on engagement, activity, and source.",
      },
      {
        text: "Lead timeline: See every touchpoint and communication in one place.",
      },
      {
        text: "Smart filters, tags, and segmentation tools.",
      },
    ],
    image: "/images/crm-black-section-1.png",
  },
];

const featuresImageSection2 = [
  {
    heading: "Customization & Scalability ",
    title: "Custom Fields, Views & Pipeline Stages",
    para: "Add unlimited custom fields to contacts, deals, or companies. Custom pipeline stages let you reflect the unique customer flow at your business. Design your sales pipeline stages to reflect your real process—whether it’s a simple 3-step funnel or a complex multi-stage deal flow.",
    image: "/images/crm-black-section-2.png",
  },
  {
    title: "Role-Based Access & Permission Layers",
    para: "Define roles (e.g., Sales Rep, Manager, Support Agent) and assign granular permissions for every team and field access. Ensure sensitive data stays protected while enabling seamless team-wide sharing—enhancing security and clarity across your organization.",
    image: "/images/crm-black-section-3.png",
  },
  {
    title: "Modular Architecture – Add or Remove Features Anytime",
    para: "Need more tools as your business grows? Easily activate new modules like Invoicing, Helpdesk, or Marketing Automation when needed. Want to simplify for a solo workflow? Disable what you don’t use. No coding or migration needed.",
    image: "/images/crm-black-section-4.png",
  },
];

const sectionsData = [
  {
    title: "Why Choose an All-In-One CRM Solution?",
    para: `AppitSoftware’s All-In-One CRM Solution unifies sales, marketing, and customer support in a single, seamless platform. Say goodbye to juggling multiple tools—manage leads, automate sales, track service requests, and gain actionable insights, all in one place.Designed to simplify business processes, our CRM provides centralized access to customer data, helping teams personalize interactions and build stronger relationships. With automation, integration, and real-time analytics, AppitSoftware gives your business the edge it needs to grow.`,
    image: "/images/solution-crm.png",
  },
];
const sectionsData2 = [
  {
    title: "The Power of AppitSoftware’s All-In-One CRM Product Services",
    para: `At AppitSoftware, we know every business is unique. That’s why our All-In-One CRM Product Services are fully customizable and scalable perfect for startups and global enterprises alike.Our CRM solution includes powerful features like lead scoring, workflow automation, omnichannel communication, and in-depth reporting to streamline operations and boost sales performance.With AI-driven analytics, gain predictive insights into customer behavior and market trends to drive smarter, data-backed decisions.AppitSoftware’s CRM helps break down silos, enhance team collaboration, and make every customer interaction count..`,
    image: "/images/solution-crm1.png",
  },
  {
    title: "Unlocking Business Potential with All-In-One CRM Software Services",
    para: `The right software can transform how you manage customer relationships. AppitSoftware’s All-In-One CRM Software Services offer a powerful, user-friendly platform that streamlines every aspect of CRM.Key features include contact management, sales automation, support ticketing, campaign tracking, and customizable dashboards—all accessible across devices for real-time collaboration.Our CRM integrates seamlessly with tools like email marketing platforms, ERP systems, and social media, ensuring consistent communication and efficient workflows.With AppitSoftware, businesses can boost efficiency, increase customer satisfaction, and drive long-term growth.`,
    image: "/images/solution-crm2.png",
    reverse: true,
  },
  {
    title: "Streamlining Operations with All-In-One CRM Tools Services",
    para: `Effective customer relationship management starts with the right tools. AppitSoftware’s All-In-One CRM Tools Services offer a complete toolkit to optimize every interaction.Key features include sales pipeline visualization, task automation, customer segmentation, email marketing, and real-time analytics—designed to boost collaboration and speed up decision-making across teams.
With built-in AI, businesses can automate follow-ups, nurture leads, and resolve inquiries faster—all with an intuitive interface that ensures quick adoption and minimal training.AppitSoftware helps businesses save time, reduce errors, and deliver standout customer experiences that drive lasting loyalty.`,
    image: "/images/solution-crm3.png",
  },
];

const page = () => {
  return (
    <>
      <TransparentHeader />
      <HideDefaultHeader />
      <AllInOneCRMHero />
      <AICRMFeaturesSection />

      <ImageWithTextSection sectionsData={sectionsData} />
      <ImageTextBlack sectionsData={featuresImageSection1} />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <CRMFeaturesGrid />
      <ImageTextBlack sectionsData={featuresImageSection2} />
      <ImageWithTextSection sectionsData={sectionsData2} />
      <ContactUs />

      <FAQs
        data={faqAllInOneCRM}
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
