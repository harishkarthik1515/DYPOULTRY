import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import SustainabilityPage from './pages/SustainabilityPage';

// Component to handle hash navigation
const HashNavigationHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Always scroll to top when navigating to a new page
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Handle hash navigation
    if (location.hash) {
      // If hash navigation but not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/' + location.hash, { replace: true });
        return;
      }
      
      // Small delay to ensure the page has rendered
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      
      return () => clearTimeout(timeoutId);
    }
  }, [location, navigate]);

  return null;
};

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
        <HashNavigationHandler />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;