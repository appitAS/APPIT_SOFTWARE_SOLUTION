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
import Testimonials from "@/components/home/Testimonials";
import WhatWeOfferSection from "@/components/pages/e-commerce/WhatWeOfferSection";
import WhyChooseSection from "@/components/pages/e-commerce/WhyChooseSection";

const Page = () => {
  const oracleHeroData = {
    title: "ECommerce Services",
    para: "Empowering Your E-Commerce Journey with Cutting-Edge Solutions",
    imageSrc: "/images/ecImage1.png",
  };

  const sectionsData = [
    {
      title: "E-Commerce Services",
      para: `At Appit, we specialize in helping businesses establish secure, scalable, and high-performing online stores. Whether you're launching a new venture or optimizing an existing platform, our tailored eCommerce solutions deliver measurable results. We offer end-to-end services—covering strategy, design, development, and marketing—to meet all your digital commerce needs. Backed by a team of certified professionals with extensive experience across various platforms and industries, we ensure your business gets the expertise it deserves.`,
      image: "/images/ecImage2.png",
      reverse: true,
    },
  ];

  const sectionsData2 = [
    {
      title: `Revolutionizing Digital Commerce with E-commerce Solutions Services`,
      para: `At AppitSoftware, we deliver robust and customizable eCommerce solutions tailored to your business goals—from store creation and payment integration to responsive design and smart features. Whether you're a startup or a global brand, our services are designed to boost performance, scalability, and conversions.
Our expert team focuses on user experience, automation, and future-ready technologies like AI to keep your platform competitive and customer-centric.`,
      image: "/images/ecImage3.png",
    },
    {
      title: `Empowering Businesses with Open Source E-commerce Platform Servicessd`,
      para: `At AppitSoftware, we offer end-to-end eCommerce software development services tailored to B2B, B2C, and marketplace models. From intuitive UI design to secure payment integration, our solutions are built for performance and seamless user experiences. Using the latest technologies and AI, we create fast, mobile-optimized platforms with intelligent automation and real-time analytics. Whether you're launching or upgrading, our custom solutions enhance engagement, retention, and operational efficiency—empowering your digital growth.`,
      image: "/images/ecImage4.png",
      reverse: true,
    },
    {
      title: `Revolutionizing Digital Commerce with E-commerce Solutions Services`,
      para: `AppitSoftware’s Open-Source E-Commerce Platform Services empower businesses with flexible, cost-effective solutions using platforms like Magento, WooCommerce, PrestaShop, and OpenCart. We provide expert customization, plugin development, and seamless integration to create scalable, high-performing online stores. With a focus on clean code, transparency, and third-party compatibility, our services deliver secure, adaptable platforms built for long-term growth.`,
      image: "/images/ecImage5.png",
      lineByLine: [
        "At AppitSoftware, we deliver robust and customizable eCommerce solutions tailored to your business goals—from store creation and payment integration to responsive design and smart features. Whether you're a startup or a global brand, our services are designed to boost performance, scalability, and conversions.",
        "Our expert team focuses on user experience, automation, and future-ready technologies like AI to keep your platform competitive and customer-centric.",
      ]
    },
    {
      title: `Streamlined Operations with E-commerce Management Services`,
      para: `AppitSoftware’s E-commerce Management Services simplify online business operations through product catalog updates, order tracking, inventory control, logistics, and performance reporting. With real-time dashboards, automation tools, and proactive support, we ensure smooth, efficient, and optimized operations. Partner with us for ongoing enhancements and strategic insights that keep your store competitive and growth-focused.`,
      image: "/images/ecImage6.png",
      reverse: true,
    },
    {
      title: `AI E-commerce Software Services: Smarter Retail Experiences`,
      para: `AppitSoftware’s AI E-commerce Software Services leverage machine learning, predictive analytics, and natural language processing to deliver personalized shopping experiences and smarter business decisions. From intelligent recommendations and chatbots to dynamic pricing and customer insights, our solutions drive engagement, boost revenue, and reduce cart abandonment. Designed for performance and adaptability, our AI services help businesses stay competitive, agile, and ready for the future of online retail.`,
      image: "/images/ecImage7.png",
    },
  ];

  

  const faqData = [
    {
      question: `What E-commerce Solutions Services does AppitSoftware offer?`,
      answer: [
        "Oracle AI caters to industries like retail, healthcare, finance, manufacturing, and more.",
      ],
    },
    {
      question: `What is included in your E-commerce Software Development Services?`,
      answer: [
        "Implementation time varies but is typically completed within 4-8 weeks, depending on the complexity.",
      ],
    },
    {
      question: `What are E-commerce Management Services, and how can they benefit my business?`,
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question: `How does AppitSoftware use Al in E-commerce Software Services?`,
      answer: [
        "Yes, Oracle AI adheres to the highest security standards, including GDPR compliance and end-to-end encryption.",
      ],
    },
    {
      question: `Why choose AppitSoftware for E-commerce development and management ?`,
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

      <ImageWithTextSection
        sectionsData={sectionsData2}
        backgroundImages={[
          {
            src: "/images/utils/lines-right.png",
            alt: "Decorative Lines",
            className: "absolute top-0 -right-[30%] lg:right-0 z-[-1]",
          },
          {
            src: "/images/utils/blue-paint-left.png",
            alt: "Blue Paint",
            className: "absolute top-0 -left-[55%] lg:left-0 z-[-1]",
          },
        ]}
      />

      <WhatWeOfferSection />

     <WhyChooseSection />

      <Testimonials />
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
