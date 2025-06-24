"use client";

import Image from "next/image";

const OutlookAICopilotFeatures = () => {
  const features = [
    {
      title: "Sales Teams",
      bulletPoints: ["Quick replies, lead follow-ups, and proposal generation"],
      image: "/images/outlook-ai-copilot/ai-copilot-1.png",
    },
    {
      title: "Consultants",
      bulletPoints: ["Summarize updates, write polished responses"],
      image: "/images/outlook-ai-copilot/ai-copilot-2.png",
    },
    {
      title: "Executives",
      bulletPoints: ["Inbox management, time-saving summaries"],
      image: "/images/outlook-ai-copilot/ai-copilot-3.png",
    },
    {
      title: "Support Teams,HR & Admins",
      bulletPoints: [
        "Auto-reply drafts and case summaries",
        "Interview coordination, polite rejection emails",
      ],
      image: "/images/outlook-ai-copilot/ai-copilot-4.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center mb-10">
          Who is This For?
        </h2>

        {/* Cards Grid */}
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

              {/* Only show bullet points for the 4th card */}
              {idx === 3 ? (
                <ul className="list-disc list-inside text-black text-sm leading-snug">
                  {feature.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-black text-sm">{feature.bulletPoints[0]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutlookAICopilotFeatures;
