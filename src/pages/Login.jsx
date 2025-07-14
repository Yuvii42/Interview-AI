// src/pages/Login.jsx
import React from 'react';
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Login to your InterviewAI dashboard</p>

        <form className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute top-3 left-3" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 text-gray-400 absolute top-3 left-3" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Extra Text */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Don’t have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
