import React from 'react';
export default function Subscribe() {
  return (
    <div className="relative bg-[#171716] rounded-xl p-8 md:p-20 mx-auto w-full">
      {/* Blue shadow/glow effect at bottom-right corner */}
      <div className="absolute bottom-0 right-0">
        <div className="w-[500px] h-[500px] bg-[#136BFB] opacity-20 blur-3xl rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Stay Sharp with the Latest in Dental Supplies
          </h2>
          <p className="text-gray-300 text-lg md:text-xl py-4">
            Join our newsletter to access smart savings and clinical insights.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-full max-w-[50rem]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md text-lg w-full px-4 py-2 max-w-[20rem]">
            Subscribe!
          </button>
        </div>
      </div>
    </div>
  );
};