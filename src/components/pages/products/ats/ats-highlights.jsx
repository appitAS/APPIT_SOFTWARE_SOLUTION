"use client";

const ATSHighlights = () => {
  const highlights = [
    {
      title: "Smart candidate recommendations",
      desc: "Smart candidate recommendations use AI and data analytics to match job openings with the most suitable candidates. This streamlines hiring by analyzing skills, experience, and cultural fit for better recruitment outcomes.",
    },
    {
      title: "Chatbot for pre-screening questions",
      desc: "A chatbot for pre-screening questions automates the initial stages of the recruitment by engaging candidates in real-time. It asks relevant questions to assess qualifications, experience, and job fit",
    },
    {
      title: "Predictive analytics",
      desc: "Predictive analytics uses historical data, statistical models, and machine learning to forecast future outcomes. In HR, it helps anticipate employee turnover, hiring needs, and performance trends. This enables proactive decision-making and strategic workforce planning",
    },
    {
      title: "Auto-ranking and resume screening",
      desc: "Auto-ranking and resume screening leverage AI to quickly evaluate and rank candidates based on job requirements. The system scans resumes for key skills, experience, and the qualifications. It reduces manual effort and speeds up the shortlisting process. Recruiters get a prioritized list of the most suitable applicants",
    },
    {
      title: "Onboarding Automation",
      desc: "Onboarding automation streamlines the process of integrating new hires through digital tools and workflows. It handles tasks like document collection, training schedules, and system access setup. This ensures a consistent and efficient onboarding experience",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-black mb-12">
          AI & Automation Highlights
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 max-w-8xl mx-auto">
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

export default ATSHighlights;
