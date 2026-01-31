import React from "react";

const FeatureHero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Feature.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      {/* Content */}
       <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-20">
        <div className="max-w-4xl text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight">
            WebXGaurd
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            A complete AI-driven security solution designed to protect, monitor,
            and strengthen modern web applications at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
