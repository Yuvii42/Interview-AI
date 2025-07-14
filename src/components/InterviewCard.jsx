import React from 'react';
import { useNavigate } from 'react-router-dom';

const InterviewCard = ({ title, description, icon, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 cursor-pointer border border-gray-100 hover:border-blue-500"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-blue-100 p-2 rounded-full">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InterviewCard;
