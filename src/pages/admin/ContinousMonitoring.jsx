import React from "react";
import { CirclePlus, ShieldCheck, ShieldAlert } from "lucide-react";

const ContinousMonitoring = () => {
  const websites = [
    {
      name: "aegis-security.com",
      status: "secure",
    },
    {
      name: "legacy-app.net",
      status: "expiring",
    },
  ];

  return (
    <div className="mb-6 p-2">
      <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Monitored Website
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-[#1ABC9C] text-white rounded-lg hover:bg-[#1EC8A0] focus:outline-none focus:ring-2 focus:ring-[#1EC8A0] transition"
          >
            <CirclePlus className="w-5 h-5" />
            <span className="">Add Website</span>
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {websites.map((site, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3"
            >
              <span className="text-sm font-medium text-gray-900">
                {site.name}
              </span>

              {site.status === "secure" ? (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Secure
                </div>
              ) : (
                <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
                  <ShieldAlert className="w-4 h-4" />
                  SSL Expiring Soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinousMonitoring;
