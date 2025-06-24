import {
  BenefitHelixAIData,
  faqHelixAiPharma,
  KeyfeaturesHelixAiPharma,
  whyChooseAILawyerData,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import CTA from "../../../components/pages/cta";
import FAQs from "../../../components/pages/faqs";
import KeyFeatures from "../../../components/pages/features/key-features";
import HelixAIPharmaHero from "../../../components/pages/products/helix-ai-pharma/helix-ai-pharma-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import React from "react";

const sectionsData = [
  {
    title: "Drug Discovery & Target Identification",
    para: `Drug discovery starts with a mission — the pursuit of new therapies that can change lives. At the core of this journey is target identification: discovering the key biological molecules that drive disease and present opportunities for treatment. At HelixAI Pharma, we take an integrated approach that blends advanced science, state-of-the-art AI technology, and deep industry knowledge to accelerate innovation and unlock new frontiers in drug discovery.`,
    image: "/images/drug.png",
    reverse: true,
  },
];
const sectionsData2 = [
  {
    title: "Preclinical Research & Experimentation",
    para: `Before a molecule becomes a therapy, it must prove its potential through rigorous preclinical research. At AppitSoftware, we provide end-to-end preclinical services to ensure safety, efficacy, and regulatory readiness—laying the groundwork for clinical success.`,
    bulletPoints: [
      {
        bold: "• Cell-Based Assays:",
        text: "Assess activity, toxicity, and mechanisms using diverse cellular models.",
      },
      {
        bold: "• Molecular & Biochemical Assays:",
        text: "Explore drug-target interactions and biomarker responses.",
      },
      {
        bold: "• High-Content Screening:",
        text: "Automate imaging and analysis for detailed compound evaluation.",
      },
    ],
    image: "/images/research.png",
  },
  {
    title: "Competitive Intelligence & Market Analysis",
    para: `At AppitSoftware, innovation drives everything we do. Our Law AI Software Services mark a new era in legal technology—blending advanced AI with legal expertise to deliver intelligent, tailored solutions.
With Law AI Software Services, legal teams can analyze case history, automate due diligence, streamline client intake, and predict litigation outcomes—all with greater speed and accuracy.
Whether serving corporate legal departments, boutique firms, or global practices, Law AI Software Services reduce costs, improve efficiency, and enhance decision-making.
Our mission is simple: to modernize legal workflows through Law AI Software Services, while upholding justice, integrity, and client-first values.`,
    image: "/images/market-analysis.png",
    reverse: true,
  },
];

const page = () => {
  return (
    <>
      <TransparentHeader />
      <HideDefaultHeader />
      <HelixAIPharmaHero />
      <ImageWithTextSection sectionsData={sectionsData} />
      <Benefits
        data={BenefitHelixAIData}
        heading={{
          title: "Instant Insights, Immediate Impact",
          para: "From complex challenges to clear solutions",
          highlightText: "Immediate Impact",
        }}
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

      <KeyFeatures
        data={KeyfeaturesHelixAiPharma}
        heading={{
          title: "Helix AI Key Specification",
          para: "HelixAI Pharma stands out for its comprehensive suite of AI-powered tools and platforms",
          highlightText: "Specification",
        }}
      />
      <FAQs
        data={faqHelixAiPharma}
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
