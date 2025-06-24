"use client";

const ATSChatFeatures = () => {
  const leftColumn = [
    "Job Posting & Sourcing via Chat",
    "Candidate Management through Conversational UI",
    "Applicant Tracking & Workflow Automation in Chat",
    "Interview & Evaluation via Chat",
    "Analytics & Reporting on Demand",
  ];

  const rightColumn = [
    "Integration & Extensibility through Chat",
    "Collaboration & Communication in Chat",
    "Onboarding & Offer Management via Chat",
    "AI & Automation through Conversational Flows",
    "Customization, Security & Compliance in Chat",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
          Transform Your Hiring with an AI-Powered Conversational Applicant
          Tracking System{" "}
          <span className="text-red-600 font-bold">(ATS)</span>
        </h2>

        {/* Subheading */}
        <p className="text-black max-w-5xl mx-auto mb-12 text-base font-bold sm:text-lg">
          Elevate your recruitment process using our innovative ATS powered by
          conversational AI. Manage every stage of hiring—from job posting and
          candidate engagement to interviews and onboarding—through a smart,
          chat-based interface.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-[#003366] text-white rounded-lg px-6 py-4 font-medium text-sm shadow-sm"
              >
                {item}
                <span className="text-xl">↓</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-[#003366] text-white rounded-lg px-6 py-4 font-medium text-sm shadow-sm"
              >
                {item}
                <span className="text-xl">↓</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSChatFeatures;
