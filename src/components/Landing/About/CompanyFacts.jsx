import React from "react";

const CompanyFacts = () => {
  return (
    <section className="relative w-full py-20 bg-linear-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Company Facts</h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Technologants is a forward-thinking software company delivering
            secure, scalable, and innovative digital solutions for businesses
            worldwide.
          </p>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {[
            { title: "Founded", value: "2022" },
            { title: "Headquarters", value: "University of Gujrat" },
            {
              title: "Team",
              value: "20+ developers, designers & IT specialists",
            },
            {
              title: "Services",
              value:
                "Software, Cloud, AI, Cybersecurity & Digital Transformation",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-emerald-500/40 bg-linear-to-br from-emerald-500/20 to-emerald-500/5 p-6 hover:scale-[1.03] transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyFacts;
