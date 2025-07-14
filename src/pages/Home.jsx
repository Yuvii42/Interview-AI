// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon, ChatBubbleLeftRightIcon, BoltIcon } from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <main className="bg-gradient-to-br from-white via-blue-50 to-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Ace Your Interviews with <span className="text-blue-600">InterviewAI</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Get personalized mock interviews, AI feedback, and real-world questions to boost your confidence and land your dream job.
        </p>
        <div className="mt-8">
          <Link
            to="/signup"
            className="px-8 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why InterviewAI?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<SparklesIcon className="w-10 h-10 text-blue-500" />}
            title="Smart Questioning"
            description="Get intelligently generated questions based on your chosen domain and difficulty level."
          />
          <FeatureCard
            icon={<ChatBubbleLeftRightIcon className="w-10 h-10 text-green-500" />}
            title="Instant AI Feedback"
            description="Receive immediate, insightful feedback to improve your communication and technical skills."
          />
          <FeatureCard
            icon={<BoltIcon className="w-10 h-10 text-yellow-500" />}
            title="Realistic Mock Sessions"
            description="Simulate real interview environments to practice under pressure and build confidence."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-50">
        <h3 className="text-2xl font-semibold text-gray-800">
          Ready to transform your interview experience?
        </h3>
        <p className="text-gray-600 mt-2">Join thousands of learners already practicing with InterviewAI.</p>
        <div className="mt-6">
          <Link
            to="/signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Start Practicing Now
          </Link>
        </div>
      </section>
    </main>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default Home;
