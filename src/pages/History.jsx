// src/pages/History.jsx
import React from 'react';
import { CalendarDaysIcon, TrophyIcon } from '@heroicons/react/24/outline';

const History = () => {
  const history = [
    { date: '2025-05-20', domain: 'Frontend Development', score: 87 },
    { date: '2025-05-18', domain: 'Backend Engineering', score: 75 },
    { date: '2025-05-10', domain: 'Data Structures', score: 92 },
    { date: '2025-05-01', domain: 'System Design', score: 68 },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📈 Interview History</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {history.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.domain}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDaysIcon className="w-4 h-4 mr-1" />
                {item.date}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TrophyIcon className="w-5 h-5 text-yellow-500" />
              <span
                className={`font-bold text-lg ${
                  item.score >= 85
                    ? 'text-green-600'
                    : item.score >= 70
                    ? 'text-blue-600'
                    : 'text-red-600'
                }`}
              >
                {item.score}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
