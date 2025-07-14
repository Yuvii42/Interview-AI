// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/InterviewCard';

// Import your pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import InterviewStart from './pages/InterviewStart';
import Feedback from './pages/Feedback';
import History from './pages/History';

const App = () => {
  return (
    <Router>
        <Navbar />
      <div className="min-h-screen bg-gray-50">
        <main className="px-4 py-6 max-w-7xl mx-auto">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/interview" element={<InterviewStart />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
        
      </div>
      <Footer />
    </Router>
  );
};

export default App;
