"use client";

const DailyReportTable = () => {
  const reportData = [
    { label: "Date", value: "2025 - 06 - 17" },
    { label: "Login Time", value: "09:10" },
    { label: "Logout Time", value: "18:02" },
    { label: "AI Score", value: "82%" },
    { label: "Productive Time", value: "06 hrs 45mins" },
    { label: "Idle Time", value: "01 hrs 05mins" },
  ];

  const reportData2 = [
    { label: "Leave status", value: "Leave" },
    { label: "AI observation", value: "Focused on project" },
    { label: "Flagged emails", value: "01" },
    { label: "Data file incidents", value: "02" },
    { label: "Analytics submitted", value: "Yes" },
  ];

  return (
    <section className="pt-10 pb-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-blue-900 overflow-hidden">
            {/* Header */}
            <div className="border-b border-blue-800 px-6 py-5">
              <h2 className="text-2xl font-bold text-blue-900 text-center">
                Example Daily Report Structure
              </h2>
            </div>

            {/* Table Content */}
            <div className="p-6 sm:p-8">
              {/* Responsive: flex on large screens, stacked on small */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 space-y-6 pr-0 lg:pr-8">
                  {reportData.map((item, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <span className="min-w-[140px] font-semibold text-blue-900 text-base">
                        {item.label}
                      </span>
                      <span className="text-gray-800 text-base font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Vertical Divider */}
                <div className="hidden lg:block w-px bg-blue-900 mx-4" />

                {/* Right Column */}
                <div className="w-full lg:w-1/2 space-y-6 pl-0 lg:pl-8 mt-6 lg:mt-0">
                  {reportData2.map((item, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <span className="min-w-[140px] font-semibold text-blue-900 text-base">
                        {item.label}
                      </span>
                      <span className="text-gray-800 text-base font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyReportTable;
