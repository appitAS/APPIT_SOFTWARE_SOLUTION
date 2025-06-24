"use client";

import Image from "next/image";
import Container from "./container";
import Section from "./section-box";

const AICRMFeaturesSection = () => {
  const featuresData = [
    {
      icon: "/images/crm/crm-1.svg",
      title: "Predictive analytics for lead scoring and prioritization",
      description: "AI algorithms analyze lead scoring and prioritization",
    },
    {
      icon: "/images/crm/crm-2.svg",
      title: "Sales Forecasting & Pipeline Analytics",
      description:
        "Advanced predictive models for sales forecasting and pipeline analysis",
    },
    {
      icon: "/images/crm/crm-3.svg",
      title: "Conversational AI Assistant",
      description:
        "Intelligent virtual assistant for customer queries, lead qualification, and task automation",
    },
    {
      icon: "/images/crm/crm-4.svg",
      title: "Sentiment Analysis & Communication Intelligence",
      description: "Real-time sentiment analysis and agency detection",
    },
    {
      icon: "/images/crm/crm-5.svg",
      title: "Generative AI for Content Creation",
      description:
        "Generate personalized emails, summaries, and marketing content",
    },
    {
      icon: "/images/crm/crm-6.svg",
      title: "AI-Powered Workflow Automation",
      description: "Automate workflow automation and macro suggestions",
    },
    {
      icon: "/images/crm/crm-7.svg",
      title: "Smart Segmentation & Personalization",
      description: "Intelligent customer segmentation and personalization",
    },
    {
      icon: "/images/crm/crm-8.svg",
      title: "AI Chatbots & Self-Service",
      description:
        "AI chatbots for customer support, lead qualification, and appointment scheduling",
    },
    {
      icon: "/images/crm/crm-9.svg",
      title: "Data Enrichment & Quality Control",
      description: "Automatic data enrichment, deduplication, and validation",
    },
    {
      icon: "/images/crm/crm-10.svg",
      title: "Omnichannel Engagement & Smart Notifications",
      description:
        "AI-powered omnichannel engagement and intelligent notifications",
    },
    {
      icon: "/images/crm/crm-11.svg",
      title: "Advanced Insights & Alerts",
      description:
        "AI-driven analytics, real-time reporting, and anomaly detection",
    },
    {
      icon: "/images/crm/crm-12.svg",
      title: "Security, Compliance & CRM Dashboards",
      description:
        "Enterprise security and data with smart compliance monitoring",
    },
  ];

  return (
    <Section className="py-10 bg-white relative overflow-hidden">
      {/* Background Network Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/background-network.svg"
          alt="background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Next-Generation AI-Powered CRM - Intelligent Automation
          </h2>
          <p className="mt-2 text-1xl text-base text-gray-600">
            Here are the AI features and capabilities for next-generation
            AI-powered CRM
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row bg-white rounded-lg px-2 py-2 text-left shadow-sm hover:shadow-md transition-all duration-300 border"
              style={{ borderColor: "#01518E" }}
            >
              <div className="mr-3 w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-semibold text-xs sm:text-sm leading-tight mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[11px] sm:text-xs leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AICRMFeaturesSection;
