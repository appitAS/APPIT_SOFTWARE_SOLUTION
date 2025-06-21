"use client"

const DailyReportTable = () => {
  const reportData = [
    { label: "Date", value: "2025 - 06 - 17" },
    { label: "Login Time", value: "09:10" },
    { label: "Logout Time", value: "18:02" },
    { label: "AI Score", value: "82%" },
    { label: "Productive Time", value: "06 hrs 45mins" },
    { label: "Idle Time", value: "01 hrs 05mins" },
  ]

  const reportData2 = [
    { label: "Leave status", value: "Leave" },
    { label: "AI observation", value: "Focused on project" },
    { label: "Flagged emails", value: "01" },
    { label: "Data file incidents", value: "02" },
    { label: "Analytics submitted", value: "Yes" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-blue-600 shadow-lg overflow-hidden">
            {/* Header */}
            <div className=" border-b-2 border-blue-600 p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 text-center">
                Example Daily Report Structure
              </h2>
            </div>

            {/* Table Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  {reportData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3"
                    >
                      <span className="font-semibold text-blue-700 text-sm sm:text-base mb-1 sm:mb-0">
                        {item.label}
                      </span>
                      <span className="text-gray-800 text-sm sm:text-base font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {reportData2.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3"
                    >
                      <span className="font-semibold text-blue-700 text-sm sm:text-base mb-1 sm:mb-0">
                        {item.label}
                      </span>
                      <span className="text-gray-800 text-sm sm:text-base font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DailyReportTable
