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
          <div className="mt-8 flex flex-col sm:flex-row gap-2 items-stretch w-full max-w-3xl mx-auto">
            {/* Protocol Dropdown */}
            <div className="relative shrink-0">
              <select className="appearance-none bg-gray-800 text-white px-4 py-3 text-center border border-gray-700 focus:outline-none rounded-lg sm:rounded-l-lg sm:rounded-r-none w-full sm:w-auto">
                <option value="http">http://</option>
                <option value="https">https://</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0  -right-1 flex items-center pr-2 ">
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
              className="flex-1 px-4 py-3 bg-gray-900 text-white border border-gray-700 focus:outline-none rounded-lg sm:rounded-none w-full"
            />

            {/* Start Scan Button */}
            <a
              href="/signup"
              className="bg-[#059669] hover:bg-[#047857] transition text-white px-6 py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-semibold text-center w-full sm:w-auto"
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
