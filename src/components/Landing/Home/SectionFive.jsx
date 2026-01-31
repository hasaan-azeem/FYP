import React from 'react'

const SectionFive = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-gray-900 to-gray-950 py-20">
       

        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-3/4 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 leading-snug mb-6 animate-fadeInUp">
              Every Vulnerability{" "}
              <span className="text-[#059669]">Addressed</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              WebXGaurd provides comprehensive detection and analysis of web
              application vulnerabilities to ensure robust security. It covers
              the OWASP Top 10, including SQL injection, cross-site scripting
              (XSS), authentication and session management flaws, as well as
              security misconfigurations and other potential weaknesses. By
              systematically identifying and addressing each risk, we deliver
              actionable insights that protect sensitive data, maintain system
              integrity, and enhance the overall resilience of your
              applications.
            </p>
          </div>

          {/* Image with glow effect */}
          <div className="md:w-1/4 h-40 w-50 flex justify-center">
            {/* Decorative glow */}
            <div className="absolute w-62 h-62 bg-[#059669] opacity-20 blur-3xl rounded-full"></div>
            <img
              src="/print-mark-svgrepo-com.svg"
              alt="Continuous Security Illustration"
              className="relative w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>
  )
}

export default SectionFive