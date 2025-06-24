import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";
import KeyFeatures from "@/components/pages/features/key-features";
import FAQs from "@/components/pages/faqs";
import CTA from "@/components/pages/cta";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";
import AccrelerateSection from "@/components/pages/generative-ai/AccrelerateSection";

const Page = () => {
  const oracleHeroData = {
    title: "Generative AI Advisory and Solutions",
    para: "Empowering businesses with tailored AI strategies and innovative generative solutions to enhance creativity, streamline operations, and drive smarter decision-making.",
    videoSrc: "/videos/gnVideo1.mp4",
    btnTitle: "Business Outcomes",
  };

  const sectionsData = [
    {
      title: "GenMind Consulting And Services",
      image: "/images/gnImage1.png",
      reverse: true,
      paraHighlightText: ["GenMind Consulting And Services"],
      lineByLine: [
        "GenMind Consulting And Services, the strategic division of AppitSoftware, is dedicated to helping businesses harness the power of AI and automation. Our expert consultants work closely with clients to develop tailored strategies that drive digital transformation, streamline workflows, and enhance data-driven decision-making.",
        "From identifying opportunities to implementing scalable AI solutions, GenMind ensures businesses are equipped to thrive in a rapidly evolving landscape. With a focus on innovation, agility, and growth, we help organizations confidently navigate change and lead in the age of AI.",
      ],
    },
  ];

  const sectionsData2 = [
    {
      title: `Gen AI Software Services`,
      image: "/images/gnImage2.png",
      paraHighlightText: ["Gen AI Software Services"],
      lineByLine: [
        "AppitSoftware’s Gen AI Software Services deliver real-time insights and automate decision-making with precision. Our offerings include machine learning models, LLM integration, and intelligent automation tailored to industries like retail, healthcare, and fintech.",
        "We provide customized solutions—such as predictive analytics, recommendation engines, and virtual agents—built on our fifth-generation AI architecture. These services ensure scalability, security, and high performance to keep you ahead in a competitive market.",
      ],
    },
    {
      title: `Legal AI Software Services`,
      para: `Legal firms and corporate legal departments are under constant pressure to do more with fewer resources. AppitSoftware’s Legal AI Software Services bring automation, speed, and accuracy to key legal tasks. Our solutions streamline contract analysis, document review, compliance tracking, and legal research. By leveraging generative AI and natural language processing, we help reduce manual workloads and improve decision-making. From tracking regulatory changes to automating document drafting, our tools boost productivity and precision. With AppitSoftware, legal professionals can focus on high-value work while AI handles the repetitive tasks.`,
      image: "/images/gnImage3.png",
      reverse: true,
      paraHighlightText: ["Legal AI Software Services"],
    },
  ];

  const section3 = [
    {
      title: `GenAI Application Development Services`,
      para: `Innovation goes beyond ideas—it’s about smart execution. AppitSoftware turns concepts into reality with expert GenAI Application Development Services, building intelligent, user-focused web, mobile, and enterprise solutions. Our AI-powered platforms learn, adapt, and interact naturally with users. From voice assistants to predictive dashboards, we deliver scalable, future-ready applications. Whether you're launching a product or modernizing systems, we help you accelerate innovation and time-to-market. Our latest GenAI solutions focus on context-aware, self-learning capabilities that give your business a real-time edge.`,
      image: "/images/gnImage9.png",
      paraHighlightText: ["GenAI Application Development Services"],
    },
    {
      title: `Microsoft CRM Products and Services`,
      para: `AppitSoftware provides expert Microsoft CRM Products and Services, empowering businesses to boost customer engagement and streamline operations. We deliver end-to-end solutions around Dynamics 365, integrating sales, service, and marketing into one seamless platform. Our tailored CRM strategies offer real-time insights and personalized customer interactions aligned with your sales goals. Certified professionals ensure smooth implementation, customization, and ongoing support. Whether you're onboarding or optimizing, we help you overcome industry-specific challenges. With AppitSoftware, expect efficient, data-driven processes and measurable business growth.`,
      image: "/images/gnImage10.png",
      reverse: true,
      paraHighlightText: ["Microsoft CRM Products and Services"],
    },
  ];

  const KeyfeaturesData = [
    {
      title: `Recognizing the Relevant Concern`,
      para: `We help you identify the most critical issue to address, instead of adapting large language models to fit every scenario.`,
      imageSrc: "/images/gnImage4.png",
    },
    {
      title: `Presentation of viability`,
      para: `Before committing substantial resources, we conduct a proof of concept to validate that LLMs achieve the intended outcomes.`,
      imageSrc: "/images/gnImage5.png",
    },
    {
      title: `Customization and Integration`,
      para: `We specialize in customizing large language models (LLMs) to meet the specific needs of businesses for targeted applications.`,
      imageSrc: "/images/gnImage6.png",
    },
    {
      title: `Extreme Testing`,
      para: `Extensive testing is performed to detect and resolve potential issues, ensuring the solution’s reliability and performance.`,
      imageSrc: "/images/gnImage7.png",
    },
    {
      title: `Deployment and Supervision`,
      para: `Evaluating performance and its alignment with business goals is essential for achieving long-term success.`,
      imageSrc: "/images/gnImage8.png",
    },
  ];

  const faqData = [
    {
      question: `What is GenMind Consulting and services at AppitSoftware?`,
      answer: [
        "Oracle AI caters to industries like retail, healthcare, finance, manufacturing, and more.",
      ],
    },
    {
      question: `What do you Gen AI Software Services include?`,
      answer: [
        "Implementation time varies but is typically completed within 4-8 weeks, depending on the complexity.",
      ],
    },
    {
      question: `How can Legal AI software services help law firms and legal departments?`,
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question: `What are GenAI application development Services?`,
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question: `What Microsoft CRM products and services does AppitSoftware offer?`,
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question: `Why choose AppitSoftware for AI and CRM services?`,
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
  ];
  return (
    <>
      <TransparentHeader />
      <HideDefaultHeader />
      <OracleHero data={oracleHeroData} className="md:ml-[51px] mr-auto" />

      <ImageWithTextSection
        sectionsData={sectionsData}
        backgroundImages={[
          {
            src: "/images/utils/lines-left.png",
            alt: "Decorative Lines",
            className: "absolute top-0 -left-[30%] lg:left-0 z-[-1]",
          },
          {
            src: "/images/utils/blue-paint-right.png",
            alt: "Blue Paint",
            className: "absolute top-0 -right-[55%] lg:right-0 z-[-1]",
          },
        ]}
      />

      <WhyChoose
        data={whyChooseData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />

      <ImageWithTextSection sectionsData={sectionsData2} />

      <KeyFeatures
        data={KeyfeaturesData}
        classNameHeading="text-white text-center font-semibold"
        simpleBG
        cards={5}
        className="bg-[#072A4A] text-white"
        classNamePara="text-white"
        heading={{
          title: "Our Methodology",
          para: "Building and scaling advanced Generative AI solutions for real-world impact.",
          highlightText: "Our",
        }}
      />

      <ImageWithTextSection sectionsData={section3} />

      <AccrelerateSection />

      <FAQs
        data={faqData}
        heading={{
          title: "Frequently Asked Questions (FAQs)",
          highlightText: "(FAQs)",
        }}
        sectionClassName="py-10"
      />

      <CTA />
      <AboveFooterSection socialMediaLink={false} />
      <Footer />
    </>
  );
};

export default Page;
