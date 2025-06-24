import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import KeyFeatures from "@/components/pages/features/key-features";
import Benefits from "@/components/pages/benefit-grid/benefit-section";
import FAQs from "@/components/pages/faqs";
import CTA from "@/components/pages/cta";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";

const Page = () => {
  const oracleHeroData = {
    title: "Digital Transformation Services",
    para: "Appit transforms customer experiences with AI, automation, and analytics. Our experts merge tech and industry skills to help you surpass expectations.",
    videoSrc: "/videos/dtsVideo1.mp4",
  };

  const sectionsData = [
    {
      title: "Redefining Industries through Digital Innovation",
      para: `In today’s digital era, businesses need to adapt to stay ahead. Appit Software provides end-to-end digital transformation solutions across industries like government, manufacturing, healthcare, and energy. We enable organizations to adopt advanced technologies while maintaining compliance, offering expert strategies, risk management, and smooth implementation to ensure long-term growth and resilience. Our tailored approach helps businesses unlock new opportunities and stay future-ready.`,
      video: "/videos/dtsVideo2.mp4",
      reverse: true,
    },
  ];

  const sectionsData2 = [
    {
      title: `Our Expertise`,
      para: `We provide strategic digital transformation consulting to align organizations with the latest technologies while ensuring regulatory compliance. Our Smart Solutions Consulting supports innovation across sectors—cities, transportation, healthcare, energy—integrating smart technologies with full adherence to compliance standards. Through Technology Transformation Consulting, we guide the secure implementation of AI, IoT, cloud, and automation, meeting all data and regulatory benchmarks. Additionally, our Process Transformation Consulting streamlines operations to boost efficiency, all within strict governance frameworks.`,
      image: "/images/dtsImage1.png",
    },
    {
      title: `Industries We Serve`,
      para: `We provide sector-specific consulting to support digital transformation with a strong focus on compliance. For governments, we enable smart cities, infrastructure, and grids while ensuring data privacy and cybersecurity. In manufacturing, our smart factory consulting drives Industry 4.0 adoption in line with ISO and regulatory standards. For the automotive sector, we support smart mobility and connected vehicle technologies that meet global safety and cybersecurity requirements. In healthcare, we guide the adoption of digital health solutions while ensuring compliance with medical device regulations. Our energy consulting modernizes grids and integrates renewables, aligned with ISO 50001 and sustainability standards.`,
      image: "/images/dtsImage2.png",
      reverse: true,
    },
  ];

  const BenefitData = [
    {
      iconSrc: "/images/svgs/benefit_1.svg",
      title: "Technology",
      para: `asd`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_2.svg",
      title: "People",
      para: `asd`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_3.svg",
      title: "Culture",
      para: `asd`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_4.svg",
      title: "Artificial Intelligence",
      para: `asd`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_4.svg",
      title: "Process",
      para: `asd`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_4.svg",
      title: "Holistic Offerings",
      para: `asd`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
  ];

  const KeyfeaturesData = [
    {
      title: `Architecture & Design`,
      para: `We design resilient, scalable enterprise systems with a focus on user experience. Our Digital Transformation services bring your vision to life.`,
      imageSrc: "/images/dtsImage3.png",
    },
    {
      title: `Application Modernization`,
      para: `We drive digital transformation by modernizing legacy systems through intelligent automation, specialized expertise, and global delivery.`,
      imageSrc: "/images/dtsImage4.png",
    },
    {
      title: `Enterprise Mobility`,
      para: `Our consultants deliver end-to-end mobility solutions—from device selection to security—ensuring a seamless user experience.`,
      imageSrc: "/images/dtsImage5.png",
    },
    {
      title: `Agile Transformation​`,
      para: `We provide end-to-end mobility solutions, from device selection to security, with a consistent user experience across devices.`,
      imageSrc: "/images/dtsImage6.png",
    },
    {
      title: `Big Data Analytics`,
      para: `We unlock the power of your data with big data analytics to drive smarter business decisions.`,
      imageSrc: "/images/dtsImage7.png",
    },
    {
      title: `Artificial Intelligence & ML`,
      para: `We solve business transformation challenges using NLP, machine learning, smart automation, and predictive analytics.`,
      imageSrc: "/images/dtsImage8.png",
    },
    {
      title: `Microservices & Serverless`,
      para: `We build scalable greenfield apps and reduce costs using microservices and serverless architecture.`,
      imageSrc: "/images/dtsImage9.png",
    },
    {
      title: `Cloud Migration​`,
      para: `Modernize your applications with our Digital Transformation Services to accelerate delivery, scale efficiently, and enhance security.`,
      imageSrc: "/images/dtsImage10.png",
    },
  ];
  const faqData = [
    {
      question: "What is Digital Transformation?",
      answer: [
        "Oracle AI caters to industries like retail, healthcare, finance, manufacturing, and more.",
      ],
    },
    {
      question: "What is digital transformation consulting ?",
      answer: [
        "Implementation time varies but is typically completed within 4-8 weeks, depending on the complexity.",
      ],
    },
    {
      question: "What are the challenges of digital transformation ?",
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question:
        "Why do Organaizations need Services of Digital Transformation Consultants?",
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
      />

      <Benefits
        data={BenefitData}
        heading={{
          title: "Key Features",
          para: "Unlock your potential with expert digital strategies that boost innovation & long-term success",
          highlightText: "Key",
        }}
      />

      <ImageWithTextSection
        sectionsData={sectionsData2}
      />

      <KeyFeatures
        data={KeyfeaturesData}
        cards={8}
        heading={{
          title: "Accelerate Your Digital Transformation",
          para: "Take the First Step Toward Digital Excellence!",
          highlightText: "Digital Transformation",
        }}
      />

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
