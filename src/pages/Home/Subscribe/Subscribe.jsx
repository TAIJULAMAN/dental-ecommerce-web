import React from 'react';

const Subscribe = () => {
  return (
<div className="rounded-xl p-8 md:p-20 mx-auto w-full">
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
        className="w-full px-6 py-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
      />
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 shadow-md text-lg w-full max-w-[20rem]">
      Subscribe!
    </button>
  </div>
</div>
  );
};

export default Subscribe;