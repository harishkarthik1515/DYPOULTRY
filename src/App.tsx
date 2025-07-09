import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import SustainabilityPage from './pages/SustainabilityPage';
import MeetTheFarmPage from './pages/MeetTheFarmPage';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-900" style={{ backgroundColor: '#faf5e9' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/meet-the-farm" element={<MeetTheFarmPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;