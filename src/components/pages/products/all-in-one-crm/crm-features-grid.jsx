"use client";

import Image from "next/image";

const CRMFeaturesGrid = () => {
  const features = [
    {
      title: "Sales Pipeline & Deal Tracking",
      bulletPoints: [
        "Drag-and-drop visual sales pipeline",
        "Multiple pipeline stages with automation triggers",
        "Track deal stage, probability, revenue forecast, and timeline",
        "Email sync, call logs, and notes directly inside each deal.",
      ],
      image: "/images/crm-feature-1.png",
    },
    {
      title: "Contact & Company Management",
      bulletPoints: [
        "Unified view of every customer and company profile",
        "Enriched profiles using social & company insights",
        "Relationship hierarchy mapping",
        "Relationship history, tasks, documents, and attachments.",
      ],
      image: "/images/crm-feature-2.png",
    },
    {
      title: "Email & Communication Automation",
      bulletPoints: [
        "Pre-designed email integration with templates and tracking",
        "Bulk email campaigns with A/B testing",
        "Drip email sequences",
        "Auto-logging of all interactions under contact/deal timeline",
      ],
      image: "/images/crm-feature-3.png",
    },
    {
      title: "Tasks, Notes & Reminders",
      bulletPoints: [
        "Task automation: Create follow-ups automatically",
        "Notes, tasks with deadlines and linking",
        "Daily planner with alerts and smart reminders.",
      ],
      image: "/images/crm-feature-4.png",
    },
    {
      title: "Invoicing & Billing",
      bulletPoints: [
        "Generate branded invoices directly from each deal",
        "Track payments, send reminders, and manage taxes",
        "Multiple currencies and recurring invoice support.",
      ],
      image: "/images/crm-feature-5.png",
    },
    {
      title: "Customer Support Ticketing",
      bulletPoints: [
        "Integrated help desk/ticket system",
        "Multichannel ticket creation (Email, Chat, Web)",
        "SLA tracking, escalation rules, and autoreplies",
        "Knowledge base and chatbot integration.",
      ],
      image: "/images/crm-feature-6.png",
    },
    {
      title: "Marketing Automation",
      bulletPoints: [
        "Email drip campaigns, newsletters, SMS, and WhatsApp integration",
        "Campaign segmentation for targeted campaigns",
        "Landing page builder with lead capture",
        "Social media post scheduler.",
      ],
      image: "/images/crm-feature-7.png",
    },
    {
      title: "Reports & Dashboards",
      bulletPoints: [
        "Custom dashboards per role/user",
        "Sales forecasting, funnel analytics, visual KPIs",
        "Task/activity reports",
        "Autologging of all interactions under contact/deal timeline",
      ],
      image: "/images/crm-feature-8.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow border border-black p-5 flex flex-col gap-4 text-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={250}
                height={250}
                className="object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {feature.title}
              </h3>
              <ul className="list-disc list-inside text-black text-sm leading-snug">
                {feature.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMFeaturesGrid;
