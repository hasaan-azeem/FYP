import { AuthContext } from "../../context/AuthContext";

import LineChart from "../../components/admin/charts/LineChart";
import Speedometer from "../../components/admin/charts/Speedometer";
import StatsGrid from "../../components/admin/StatsGrid";

const recentScans = [
  { status: "Completed", website: "example.com", score: 95 },
  { status: "Warning", website: "testsite.com", score: 72 },
  { status: "Critical", website: "vulnerable.com", score: 45 },
  { status: "Completed", website: "mysite.org", score: 88 },
  { status: "Warning", website: "demo.com", score: 65 },
];

const statusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    case "Warning":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    case "Critical":
      return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
  }
};

const Dashboard = () => {
  return (
    <div className="w-fulltext-black dark:text-white">
      {/* Stat boxes */}
      <StatsGrid />

      {/* Charts */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left column */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
          {/* Line chart */}
          <div className="bg-white dark:bg-gray-800 rounded shadow dark:shadow-none p-5">
            <h3 className="text-xl font-semibold mb-4">Scan Activity</h3>
            <div className="w-full h-64 md:h-80">
              <LineChart />
            </div>
          </div>

          {/* Recent Scan History */}
          <div className="bg-white dark:bg-gray-800 rounded shadow dark:shadow-none p-5 overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Recent Scan History</h3>

            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Website</th>
                  <th className="text-left px-4 py-2">Score</th>
                </tr>
              </thead>

              <tbody>
                {recentScans.map((scan, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td
                      className={`px-4 py-2 font-medium rounded ${statusColor(
                        scan.status,
                      )}`}
                    >
                      {scan.status}
                    </td>
                    <td className="px-4 py-2">{scan.website}</td>
                    <td className="px-4 py-2 font-bold">{scan.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {/* Speedometer */}
          <div className="bg-white dark:bg-gray-800 rounded shadow dark:shadow-none p-5 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Threat Level</h3>
            <div className="h-44 scale-75 md:scale-90 lg:scale-75">
              <Speedometer />
            </div>
          </div>

          {/* Threat list */}
          <div className="bg-white dark:bg-gray-800 rounded shadow dark:shadow-none p-5">
            <h3 className="text-xl font-semibold mb-4">Threats</h3>

            <ul className="space-y-2">
              <li className="flex justify-between bg-red-100 dark:bg-red-900 rounded p-2">
                <span>SQL Injection Detected</span>
                <span className="text-red-700 dark:text-red-300 font-bold">
                  High
                </span>
              </li>

              <li className="flex justify-between bg-yellow-100 dark:bg-yellow-900 rounded p-2">
                <span>Outdated Software Version</span>
                <span className="text-yellow-700 dark:text-yellow-300 font-bold">
                  Medium
                </span>
              </li>

              <li className="flex justify-between bg-green-100 dark:bg-green-900 rounded p-2">
                <span>Minor Security Warning</span>
                <span className="text-green-700 dark:text-green-300 font-bold">
                  Low
                </span>
              </li>

              <li className="flex justify-between bg-red-100 dark:bg-red-900 rounded p-2">
                <span>Cross-Site Scripting (XSS)</span>
                <span className="text-red-700 dark:text-red-300 font-bold">
                  High
                </span>
              </li>

              <li className="flex justify-between bg-yellow-100 dark:bg-yellow-900 rounded p-2">
                <span>Weak Password Detected</span>
                <span className="text-yellow-700 dark:text-yellow-300 font-bold">
                  Medium
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
