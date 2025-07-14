// src/pages/InterviewStart.jsx
import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

const InterviewStart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 transition-all duration-300 hover:shadow-blue-200">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full shadow-inner">
            <RocketLaunchIcon className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Ready to Launch Your Interview?
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-lg mb-8">
          This session will simulate a real interview environment with AI-generated questions based on your selected domain.
        </p>

        {/* Start Button */}
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            🚀 Start Mock Interview
          </button>
        </div>

        {/* Optional Footer Note */}
        <p className="text-sm text-center text-gray-400 mt-6">
          Interviews typically last 10–15 minutes. Stay calm and give your best!
        </p>
      </div>
    </div>
  );
};

export default InterviewStart;
