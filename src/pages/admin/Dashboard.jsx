import { AuthContext } from "../../context/AuthContext";

import BarChart from "../../components/admin/charts/BarChart";
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
      return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
    case "Warning":
      return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    case "Critical":
      return "bg-red-500/10 text-red-400 border border-red-500/20";
    default:
      return "bg-slate-500/10 text-slate-400 border border-slate-500/20";
  }
};

const scoreColor = (score) => {
  if (score >= 80) return "text-emerald-400";
  if (score >= 60) return "text-amber-400";
  return "text-red-400";
};

const scoreBarColor = (score) => {
  if (score >= 80) return "bg-emerald-500";
  if (score >= 60) return "bg-amber-500";
  return "bg-red-500";
};

const Dashboard = () => {
  return (
    <div className="w-full text-slate-100">
      {/* Stat boxes */}
      <StatsGrid />

      {/* Charts */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Left column */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">

          {/* Bar chart */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold tracking-wide">Scan Activity</h3>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">This Week</span>
            </div>
            <div className="w-full h-64 md:h-80">
              <BarChart />
            </div>
          </div>

          {/* Recent Scan History */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold tracking-wide">Recent Scan History</h3>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">{recentScans.length} entries</span>
            </div>

            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left pb-3 text-xs font-medium text-slate-500 uppercase tracking-widest px-2">Status</th>
                  <th className="text-left pb-3 text-xs font-medium text-slate-500 uppercase tracking-widest px-2">Website</th>
                  <th className="text-left pb-3 text-xs font-medium text-slate-500 uppercase tracking-widest px-2">Score</th>
                </tr>
              </thead>

              <tbody>
                {recentScans.map((scan, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors duration-150"
                  >
                    <td className="px-2 py-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md ${statusColor(scan.status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {scan.status}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-sm text-slate-300 font-mono">{scan.website}</td>
                    <td className="px-2 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${scoreBarColor(scan.score)}`}
                            style={{ width: `${scan.score}%` }}
                          />
                        </div>
                        <span className={`text-sm font-semibold font-mono ${scoreColor(scan.score)}`}>{scan.score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">

          {/* Speedometer */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="text-base font-semibold tracking-wide">Threat Level</h3>
              <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">Moderate</span>
            </div>
            <div className="h-44 scale-75 md:scale-90 lg:scale-75">
              <Speedometer />
            </div>
          </div>

          {/* Threat list */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold tracking-wide">Threats</h3>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">5 active</span>
            </div>

            <ul className="space-y-2.5">
              <li className="flex items-center justify-between bg-red-500/5 border border-red-500/15 rounded-xl p-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1 h-8 bg-red-500 rounded-full shrink-0" />
                  <span className="text-sm text-slate-200">SQL Injection Detected</span>
                </div>
                <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md">HIGH</span>
              </li>

              <li className="flex items-center justify-between bg-amber-500/5 border border-amber-500/15 rounded-xl p-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
                  <span className="text-sm text-slate-200">Outdated Software Version</span>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">MED</span>
              </li>

              <li className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1 h-8 bg-emerald-500 rounded-full shrink-0" />
                  <span className="text-sm text-slate-200">Minor Security Warning</span>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">LOW</span>
              </li>

              <li className="flex items-center justify-between bg-red-500/5 border border-red-500/15 rounded-xl p-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1 h-8 bg-red-500 rounded-full shrink-0" />
                  <span className="text-sm text-slate-200">Cross-Site Scripting (XSS)</span>
                </div>
                <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md">HIGH</span>
              </li>

              <li className="flex items-center justify-between bg-amber-500/5 border border-amber-500/15 rounded-xl p-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1 h-8 bg-amber-500 rounded-full shrink-0" />
                  <span className="text-sm text-slate-200">Weak Password Detected</span>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">MED</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;