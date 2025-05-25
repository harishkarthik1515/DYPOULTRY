import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Sustainability from './components/Sustainability';
import MeetTheFarm from './components/MeetTheFarm';
import Testimonials from './components/Testimonials';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

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
    <div className="min-h-screen font-sans text-gray-900">
      <Header />
      <Hero />
      <OurStory />
      <Sustainability />
      <MeetTheFarm />
      <Testimonials />
      <VisitUs />
      <Footer />
    </div>
  );
}

export default App;