import React, { useState } from "react";
import { Shield, AlertTriangle, Search, CheckCircle } from "lucide-react";

const Vulnerabilities = () => {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState([]);

  const handleScan = () => {
    if (!url) return;

    // demo results, replace with backend API later
    setResults([
      {
        title: "SQL Injection Risk",
        severity: "High",
        description: "Input fields are not sanitized properly",
      },
      {
        title: "Missing HTTPS",
        severity: "Medium",
        description: "Website does not enforce secure protocol",
      },
      {
        title: "Outdated Library",
        severity: "Low",
        description: "One dependency is outdated",
      },
    ]);
  };

  const getColor = (level) => {
    if (level === "High") return "text-red-500";
    if (level === "Medium") return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <section className="min-h-screen text-white ">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <div className="flex justify-center mb-4">
          <Shield size={48} className="text-blue-500" />
        </div>

        <h1 className="text-4xl text-black dark:text-white md:text-5xl font-bold mb-4">
          Vulnerability Scanner
        </h1>

        <p className="text-gray-400">
          Scan your website or API to detect common security risks and issues
        </p>
      </div>

      {/* Scan box */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none"
          />

          <button
            onClick={handleScan}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center gap-2 transition"
          >
            <Search size={18} />
            Scan Now
          </button>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          {results.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className={getColor(item.severity)} />
                <h3 className="font-semibold">{item.title}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-3">
                {item.description}
              </p>

              <span className={`font-semibold ${getColor(item.severity)}`}>
                {item.severity}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tips section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <CheckCircle className="mx-auto mb-3 text-green-500" />
          <h3 className="font-semibold mb-2">Keep Dependencies Updated</h3>
          <p className="text-gray-400 text-sm">
            Always update libraries to avoid known exploits
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <CheckCircle className="mx-auto mb-3 text-green-500" />
          <h3 className="font-semibold mb-2">Use HTTPS</h3>
          <p className="text-gray-400 text-sm">
            Encrypt traffic between users and your server
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <CheckCircle className="mx-auto mb-3 text-green-500" />
          <h3 className="font-semibold mb-2">Validate Inputs</h3>
          <p className="text-gray-400 text-sm">
            Sanitize user data to prevent injection attacks
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vulnerabilities;
