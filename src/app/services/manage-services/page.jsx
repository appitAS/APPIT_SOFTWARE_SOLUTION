import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";

import FAQs from "@/components/pages/faqs";
import CTA from "@/components/pages/cta";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";

const Page = () => {
  const oracleHeroData = {
    title: "Outsourced IT Support Services",
    para: `AppitSoftware delivers expert outsourced IT support to streamline operations, strengthen cybersecurity, and manage tech seamlessly.
So you can focus on growing your business.`,
    videoSrc: "/videos/msVideo1.mp4",
  };

  const sectionsData = [
    {
      title: `AI Business IT Support Services`,
      image: "/images/msImage1.png",
      reverse: true,
      lineByLine: [
        "AppitSoftware is a leading provider of AI-powered IT Support Services, transforming how businesses manage their technology. By harnessing artificial intelligence, we deliver proactive monitoring, predictive maintenance, and automated troubleshooting to reduce downtime and boost operational efficiency.",
        "Our AI-driven IT support solutions are customized to meet the evolving needs of modern enterprises, ensuring faster response times and smarter system management. From helpdesk automation and system optimization to intelligent incident resolution, AppitSoftware offers innovative tools that empower businesses to scale confidently. Rely on our AI Business IT Support Services to keep your operations secure, efficient, and uninterrupted.",
      ],
    },
  ];

  const sectionsData2 = [
    {
      title: `IT Consulting And Support Services`,
      image: "/images/msImage2.png",
      lineByLine: [
        "AppitSoftware delivers high-quality IT Consulting and Support Services to help businesses thrive in today’s dynamic tech landscape. Our experienced team offers strategic insights, hands-on expertise, and proactive support tailored to your business goals.",
        "We empower organizations to modernize their IT infrastructure, strengthen cybersecurity, and streamline operations for increased efficiency and growth.",
        "Whether you need to adopt new technologies, oversee complex IT initiatives, or manage daily operations, AppitSoftware provides reliable, scalable solutions. Partner with us for end-to-end IT support designed to drive long-term success.",
      ],
    },
    {
      title: `IT Technical Support Services`,
      image: "/images/msImage3.png",
      reverse: true,
      lineByLine: [
        "At AppitSoftware, we deliver reliable IT Technical Support Services tailored to the evolving needs of modern businesses. Our expert team ensures smooth operations through proactive monitoring, fast issue resolution, and continuous system optimization.",
        "By managing everything from software troubleshooting to network performance, we help minimize downtime, enhance security, and boost IT efficiency—so you can stay focused on your core business. Partner with AppitSoftware for dependable support in today’s fast-paced digital world.",
      ],
    },
  ];

  const faqData = [
    {
      question: "What are the outsourced IT Services offered by AppitSoftware?",
      answer: [
        "Oracle AI caters to industries like retail, healthcare, finance, manufacturing, and more.",
      ],
    },
    {
      question: "How can Al Business IT Support Services benefit my company?",
      answer: [
        "Implementation time varies but is typically completed within 4-8 weeks, depending on the complexity.",
      ],
    },
    {
      question:
        "What is included in AppitSoftware's IT Consulting And Support Services?",
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question:
        "Why should I choose AppitSoftware for IT Outsourcing Services?",
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question:
        "What makes AppitSoftware's IT Technical Support Services stand out?",
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question: "How does AppitSoftware integrate Al into IT Support Services?",
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
