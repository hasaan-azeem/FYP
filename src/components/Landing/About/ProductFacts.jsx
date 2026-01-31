import React from 'react'

const ProductFacts = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-gray-900 to-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">
            Product Facts
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AI-Powered Risk Analysis",
              "Continuous Monitoring",
              "Predictive Analysis",
              "Compliance Tracking",
              "Comprehensive Reporting",
              "Real-Time Alerts",
            ].map((title, i) => (
              <div
                key={i}
                className="rounded-xl border border-emerald-500/40 bg-linear-to-br from-emerald-500/20 to-emerald-500/5 p-6 hover:scale-[1.03] transition-transform"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm">
                  Designed for modern, scalable cybersecurity operations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProductFacts