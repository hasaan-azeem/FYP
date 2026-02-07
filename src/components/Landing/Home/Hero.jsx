import React from "react";
import heroVideo from "../../../assets/hero.mp4";

const Hero = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false} // hides default controls
        controlsList="nodownload" // disables browser download button
        disablePictureInPicture // disables PiP
        onContextMenu={(e) => e.preventDefault()} // disables right-click
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight">
            Detect Vulnerabilities, <br />
            <span className="text-[#059669]">Ensure Compliance</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-100">
            Empower your web security with smart scanning and actionable
            insights for safer digital operations.
          </p>

          {/* URL Scanner Input */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
            {/* Protocol Dropdown */}
            <div className="relative shrink-0">
              <select className="appearance-none bg-gray-800 text-white px-3 sm:px-7  py-3 border border-gray-700 focus:outline-none rounded-t-lg sm:rounded-l-lg sm:rounded-t-none">
                <option value="http">http://</option>
                <option value="https">https://</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* URL Input */}
            <input
              type="text"
              placeholder="Enter website URL"
              className="flex-1 min-w-0 px-3 sm:px-4 py-3 bg-gray-900 text-white border-t border-b border-gray-700 focus:outline-none"
            />

            {/* Start Scan Button */}
            <a
              href="/signup"
              className="shrink-0 bg-[#059669] hover:bg-[#047857] transition text-white px-4 sm:px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none font-semibold text-center"
            >
              Start Scan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
