import React from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto mt-16 px-4">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header with profile image */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
          <img
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-4"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Replace with actual user image
            alt="Profile"
          />
          <h2 className="text-2xl font-bold">Yuvraj Singh</h2>
          <p className="text-sm text-blue-100 mt-1">Web Developer</p>
        </div>

        {/* Profile details */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="text-sm text-gray-500 uppercase">Email</h4>
              <p className="font-medium">xyz@gmail.com</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase">Phone</h4>
              <p className="font-medium">+91 9876543210</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase">Location</h4>
              <p className="font-medium">Gujarat, India</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase">Member Since</h4>
              <p className="font-medium">January 2023</p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-sm text-gray-500 uppercase">About Me</h4>
            <p className="text-gray-600 mt-1">
              Passionate Data Scientist with 5+ years of experience in building
              ML models and data pipelines. Skilled in Python, SQL, and cloud services.
              Loves transforming data into actionable insights.
            </p>
          </div>

          {/* Edit button */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              <PencilIcon className="h-5 w-5" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
