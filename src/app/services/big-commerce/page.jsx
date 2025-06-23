import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";
import FAQs from "@/components/pages/faqs";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Testimonials from "@/components/home/Testimonials";
import BenefitSection from "@/components/pages/big-commerce/BenefitSection";
import FormSection from "@/components/pages/big-commerce/FormSection";
import Footer from "@/components/home/Footer";


const Page = () => {
  const oracleHeroData = {
    title: "BigCommerce Solutions",
    para: "AI-powered BigCommerce solutions to build, scale, and optimize your online store with seamless customer experiences.",
    videoSrc: "/videos/bcVideo1.mp4",
    btnTitle: "Start the Project",
  };

  const sectionsData = [
    {
      title: "Custom BigCommerce Solutions Store Development",
      video: "/videos/bcVideo2.mp4",
      reverse: true,
      highlightText: "Custom BigCommerce",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      paraHighlightTextStyle: "font-bold",
      lineByLine: [
        "BigCommerce is a powerful SaaS eCommerce platform built for businesses of all sizes, offering a scalable, secure, and flexible foundation to grow online. With built-in support for mobile optimization, SEO, multi-channel selling, and advanced integrations, BigCommerce empowers brands to launch and manage high-performing digital stores effortlessly.",
        "At Appit, we elevate BigCommerce even further by integrating AI-driven solutions—including personalized product recommendations, smart inventory forecasting, dynamic pricing, and automated workflows. Our custom BigCommerce services are designed to streamline operations, enhance customer experiences, and drive measurable growth in today’s competitive eCommerce landscape.",
      ],
      paraHighlightText: ["SaaS", "AI-driven solutions—"],

    },
  ];

  const sectionsData1 = [
    {
      title: "Our AI-Driven BigCommerce Process",
      para: `We follow a structured, AI-powered approach to build, optimize, and scale your BigCommerce store—ensuring smarter workflows, personalized experiences, and faster go-to-market.`,
      image: "/images/bcImage1.png",
      // reverse: true,
      containerClassName:
        "flex flex-col items-center justify-center flex-col-reverse",
      contentClassName: "text-center md:text-left",
      classNameHeading: "!text-center md:text-left",
      highlightText: "Our AI-Driven ",
      sectionHeading: true,
      classNamePara: "text-center",
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
        sectionHeading
      />

      <WhyChoose
        data={whyChooseData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />

     <BenefitSection />

      <FormSection />

      <Testimonials />
      <FAQs
        data={faqData}
        heading={{
          title: "Frequently Asked Questions (FAQs)",
          highlightText: "(FAQs)",
        }}
        sectionClassName="py-10"
      />

      {/* <CTA /> */}
      <AboveFooterSection socialMediaLink={false} />
      <Footer />
    </>
  );
};

export default Page;
