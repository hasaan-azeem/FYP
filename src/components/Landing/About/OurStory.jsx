import React from 'react'

const OurStory = () => {
  return (
     <section className="relative w-full bg-linear-to-b from-gray-950 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/4 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Our Story
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              WebXGuard was founded with a simple mission: make the digital
              world safer. What began as a small group of passionate engineers
              is now a trusted security platform.
            </p>
            <p className="text-gray-300 text-lg">
              Every scan and insight we deliver helps organizations innovate
              securely and confidently.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-56 h-56 bg-emerald-500/30 blur-3xl rounded-full" />
            <img
              src="/web-security.png"
              alt="Cybersecurity Illustration"
              className="relative w-64 sm:w-72 md:w-full max-w-sm"
            />
          </div>
        </div>
      </section>
  )
}

export default OurStory