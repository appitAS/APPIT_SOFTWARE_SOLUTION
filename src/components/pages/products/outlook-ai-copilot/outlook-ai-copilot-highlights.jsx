"use client";

const OutlookAICopilotHighlights = () => {
  const highlights = [
    {
      title: "Supercharge Your Inbox with AI",
      desc: "Supercharge your inbox with AI: prioritize what matters, reply faster, and stay effortlessly organized. Let smart automation handle the clutter so you can focus on what really counts.",
    },
    {
      title: "Extract Actionable Tasks from Emails",
      desc: "A chatbot handles pre-screening questions, saving time by filtering unqualified candidates early. And it ensures consistent, efficient initial interactions and improves the hiring workflow.",
    },
    {
      title: "Pre-Meeting Intelligence",
      desc: "Pre-Meeting Intelligence arms you with key insights before every conversation — from attendee backgrounds to past interactions. Understand goals, context, and potential objections ahead of time. Walk into every meeting prepared, confident, and ready to drive results.",
    },
    {
      title: "Smarter Scheduling & Calendar Integration",
      desc: "Smarter Scheduling & Calendar Integration streamlines your day with AI-powered meeting coordination. Automatically find optimal meeting times, avoid conflicts, and sync across all your calendars. Get smart reminders, agenda suggestions, and real-time updates. Spend less time planning and more time doing.",
    },
    {
      title: "Multilingual AI Email Drafting",
      desc: "Multilingual AI Email Drafting helps you communicate effortlessly across languages. Draft professional, culturally aware emails in over 25 languages with just a few prompts. Perfect grammar, tone, and translation are handled automatically. Break language barriers and expand your global reach with ease.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-black mb-12">
          Outlook AI Copilot —{" "}
          <span className="text-red-500">Key Highlights</span>
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[30%] bg-white border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutlookAICopilotHighlights;
