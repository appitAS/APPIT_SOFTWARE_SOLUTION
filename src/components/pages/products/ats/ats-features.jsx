"use client";

import Image from "next/image";

const ATSFeatures = () => {
  const features = [
    {
      title: "Custom Fields, Stages & Views",
      disc: [
        "Create fields specific to your industry or hiring type. Personalize views by role, stage, or team.",
      ],
      image: "/images/ats/ats-1.png",
    },
    {
      title: "Role-Based Access Controls",
      disc: [
        "Different access for Recruiters, Hiring Managers, Interviewers, HR Admins, Executives.",
      ],
      image: "/images/ats/ats-2.png",
    },
    {
      title: "Modular Design",
      disc: [
        "Enable/disable modules like Onboarding, Referral, Career Page, Background Checks as needed.",
      ],
      image: "/images/ats/ats-3.png",
    },
    {
      title: "No-Code Automation Builder",
      disc: [
        "Set rules like “If no interview is scheduled in 3 days → alert recruiter” or “If candidate rejects → move to pipeline X.”",
      ],
      image: "/images/ats/ats-4.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center mb-10">
          Customization & Scalability
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
              <p className="text-black text-sm leading-snug">
                {feature.disc[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ATSFeatures;
