import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";

import FAQs from "@/components/pages/faqs";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";
import Testimonials from "@/components/home/Testimonials";
import FormSection from "@/components/pages/big-commerce/FormSection";

const Page = () => {
  const oracleHeroData = {
    title: "Adobe Commerce Solutions (Magento)",
    para: "Adobe Commerce (Magento) is a flexible, secure eCommerce platform for businesses of all sizes. At Appit, we deliver scalable, custom solutions to fit your unique needs.",
    videoSrc: "/videos/adbVideo1.mp4",
  };

  const sectionsData = [
    {
      title: "Custom Adobe Commerce Solutions with AI Integration",
      video: "/videos/adbVideo2.mp4",
      reverse: true,
      highlightText: "Adobe Commerce Solutions",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      lineByLine: [
        "AI-Driven Shopping Suggestions : Deliver real-time product suggestions based on customer behavior and preferences.",
        "Tailored eCommerce Experiences : Deliver personalized storefronts and offers based on customer preferences.",
        "Automated workflows : Streamline orders, inventory, and alerts to save time.",
        "Dynamic pricing and search : Adjust prices and search results in real time based on user behavior and demand.",
        "Smart Inventory Forecasting : Predict stock requirements based on historical trends, traffic, and seasonal demand.",
        "Voice & Visual Search Integration : Enable users to search using voice commands or images for a more intuitive shopping experience.",
      ],
      paraHighlightText: [
        "AI-Driven Shopping Suggestions",
        "Tailored eCommerce Experiences",
        "Automated workflows",
        "Dynamic pricing and search",
        "Smart Inventory Forecasting",
        "Voice & Visual Search Integration",
      ],
      paraHighlightTextStyle: "font-bold",
    },
  ];

  const sectionsData1 = [
    {
      title: "Benefits & Seamless Adobe Commerce Migration Services",
      para: `Adobe Commerce Services provide businesses with a powerful, scalable, and flexible platform to build and manage advanced eCommerce experiences. From seamless cloud-based infrastructure to robust security and PCI compliance, it ensures stability and trust. The platform supports both B2C and B2B models, allowing businesses to expand across diverse markets with ease. With features like AI-powered personalization, innovative extensions, and an intuitive administration panel, businesses can craft tailored user experiences and streamline backend operations. Adobe Commerce also enables an effective omnichannel strategy, ERP integration, and centralized inventory management from multiple sources—while the drag-and-drop Page Builder simplifies content updates without developer input. Altogether, Adobe Commerce services empower brands to deliver seamless, secure, and customized shopping experiences across all digital touchpoints.`,
      image: "/images/adbImage1.png",
      // reverse: true,
      containerClassName:
        "flex flex-col items-center justify-center flex-col-reverse",
      contentClassName: "text-center md:text-left",
      classNameHeading: "!text-center md:text-left",
      highlightText: "Benefits & Seamless",
      sectionHeading: true,
    },
  ];

  const sectionsData2 = [
    {
      title: "What We Offer with Adobe Commerce Solutions",
      para: `Explore our core Adobe Commerce offerings, thoughtfully crafted to meet the demands of modern eCommerce. From secure, scalable infrastructure and seamless third-party integrations to AI-powered personalization and responsive design, our solutions are built to optimize performance, enhance customer experience, and support long-term growth.`,
      image: "/images/adbImage2.png",
      containerClassName:
        "flex flex-col items-center justify-center flex-col-reverse",
      contentClassName: "text-center md:text-left",
      classNameHeading: "!text-center md:text-left",
      highlightText: "What We Offer",
      sectionHeading: true,
      paraHighlightText:["AI-powered"],
      paraHighlightTextStyle: "text-[#EC1C26] font-bold text-center",
    },
  ];

  const sectionsData3 = [
    {
      title: "AI-Driven Performance Tuning for Adobe Commerce Success",
      para: `Leverage custom Adobe Commerce development infused with AI and automation to deliver personalized shopping experiences and optimized performance at scale. Our solutions are built to adapt to your specific business model—whether you're running a B2C storefront or a complex B2B operation. With intelligent features like real-time product recommendations, dynamic search, predictive analytics, and automated workflows, we help you streamline operations and enhance customer engagement. From custom theme design and module development to seamless third-party integrations, our Adobe Commerce services are tailored to meet your exact requirements while future-proofing your store for growth.`,
      image: "/images/adbImage3.png",
      highlightText: "AI-Driven Performance",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      paraHighlightText: [" AI and automation","B2C", "B2B"],
      paraHighlightTextStyle: " font-bold",
    },
    {
      title: "Personalized Adobe Commerce Solutions Built for Your Needs",
      para: `Leverage custom Adobe Commerce development infused with AI and automation to deliver personalized shopping experiences and optimized performance at scale. Our solutions are built to adapt to your specific business model—whether you're running a B2C storefront or a complex B2B operation. With intelligent features like real-time product recommendations, dynamic search, predictive analytics, and automated workflows, we help you streamline operations and enhance customer engagement. From custom theme design and module development to seamless third-party integrations, our Adobe Commerce services are tailored to meet your exact requirements while future-proofing your store for growth.`,
      image: "/images/adbImage4.png",
      reverse: true,
      highlightText: "Personalized Adobe Commerce Solutions",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      paraHighlightText: [" AI and automation","B2C", "B2B"],
      paraHighlightTextStyle: " font-bold",
    },
  ];

  const faqData = [
    {
      question: `What industries can benefit from Oracle AI?`,
      answer: [
        "Oracle AI caters to industries like retail, healthcare, finance, manufacturing, and more.",
      ],
    },
    {
      question: `Oracle AI caters to industries like retail, healthcare, finance, manufacturing, and more.`,
      answer: [
        "Implementation time varies but is typically completed within 4-8 weeks, depending on the complexity.",
      ],
    },
    {
      question: `Is Oracle AI secure?`,
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

      <ImageWithTextSection sectionsData={sectionsData} />

      <ImageWithTextSection
        sectionsData={sectionsData1}
        contentClassName="text-center md:text-left items-center md:items-start"
      />

      <WhyChoose
        data={whyChooseData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />

      <ImageWithTextSection
        sectionsData={sectionsData2}
       className={`bg-gradient-to-tl from-[#BEFFA3] to-[#DFF0FF]`}
      />

      <ImageWithTextSection sectionsData={sectionsData3} />

      <Testimonials />

      <FormSection />

      <FAQs
        data={faqData}
        heading={{
          title: "Frequently Asked Questions (FAQs)",
          highlightText: "(FAQs)",
        }}
        sectionClassName="py-10"
      />

      <AboveFooterSection socialMediaLink={false} />
      <Footer />
    </>
  );
};

export default Page;
