import React, { useState } from "react";

const REPORT_TYPES = ["Summary Report", "Detailed Report", "Security Scan"];
const WEBSITES = ["All Websites", "example.com", "demo.com"];

const Reports = () => {
  const [reportType, setReportType] = useState(REPORT_TYPES[0]);
  const [dateRange, setDateRange] = useState("");
  const [website, setWebsite] = useState(WEBSITES[0]);
  const [generatedReports, setGeneratedReports] = useState([]);

  const generateReport = () => {
    const newReport = {
      id: Date.now(),
      type: reportType,
      date: dateRange || new Date().toLocaleDateString(),
      website,
    };
    setGeneratedReports([newReport, ...generatedReports]);
  };

  return (
    <div className="w-full space-y-6">
      {/* Generate New Report */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg space-y-4 shadow-md dark:shadow-gray-700">
        <h3 className="text-gray-900 dark:text-white font-semibold text-lg">
          Generate New Report
        </h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {/* Report Type */}
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-300 mb-1 text-sm">
              Report Type
            </label>
            <select
              className="p-2 rounded  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              {REPORT_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-300 mb-1 text-sm">
              Date Range
            </label>
            <input
              type="date"
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            />
          </div>

          {/* Website */}
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-300 mb-1 text-sm">
              Website
            </label>
            <select
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            >
              {WEBSITES.map((site) => (
                <option key={site}>{site}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Export as PDF
          </button>
          <button className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Export as CSV
          </button>
          <button
            onClick={generateReport}
            className="px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-white transition"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Generated Reports */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-700 space-y-2">
        <h3 className="text-gray-900 dark:text-white font-semibold text-lg">
          Generated Reports
        </h3>

        {generatedReports.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            No reports generated yet.
          </p>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse text-gray-900 dark:text-white">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="p-2 text-left">Report Type</th>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Website</th>
                </tr>
              </thead>
              <tbody>
                {generatedReports.map((report) => (
                  <tr
                    key={report.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-2">{report.type}</td>
                    <td className="p-2">{report.date}</td>
                    <td className="p-2">{report.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
