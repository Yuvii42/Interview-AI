// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">InterviewAI</h2>
            <p className="text-sm text-gray-600 mt-2">
              Your AI-powered partner for interview preparation. Ace your interviews with smart practice!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
              <li><Link to="/profile" className="hover:text-blue-500">Profile</Link></li>
              <li><Link to="/history" className="hover:text-blue-500">Interview History</Link></li>
            </ul>
          </div>

          {/* Contact / Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: <a href="mailto:support@interviewai.com" className="text-blue-600 hover:underline">support@interviewai.com</a></li>
              <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/feedback" className="hover:text-blue-500">Feedback</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} InterviewAI. Built with 💡 using React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
