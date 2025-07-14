// src/pages/Feedback.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const feedbackData = [
  { label: 'Confidence', value: 8.5, max: 10 },
  { label: 'Technical Accuracy', value: 9, max: 10 },
  { label: 'Communication', value: 7.5, max: 10 },
  { label: 'Filler Words', value: 'Minimal', isText: true },
  { label: 'Speech Clarity', value: 'Good', isText: true },
];

const Feedback = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate('/dashboard'); // Ensure this route is defined in your router
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Interview Feedback</h2>

        <ul className="space-y-6">
          {feedbackData.map((item, index) => (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{item.label}</span>
                {!item.isText && (
                  <span className="text-sm text-gray-600">{item.value}/{item.max}</span>
                )}
              </div>
              {!item.isText ? (
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all"
                    style={{ width: `${(item.value / item.max) * 100}%` }}
                  ></div>
                </div>
              ) : (
                <div className="text-gray-600 pl-1">{item.value}</div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <button
            onClick={handleTryAgain}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
