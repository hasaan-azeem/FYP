import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/About_hero.jpeg"
        alt="About WebXGuard"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
            About Us
          </h1>
          <p className="mt-6 max-w-2xl text-gray-300 text-base sm:text-lg">
            Building secure, intelligent, and future-ready digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
