import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        navigate('/' + href);
        return;
      }
      // If already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Farm Animation Section */}
        <div className="text-center mb-12">
          <div className="max-w-md mx-auto">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Happy Chickens, Happy Families
            </h3>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <img 
                src="/1084554013-preview-unscreen.gif" 
                alt="DY Poultry Farm - Happy Chickens Animation" 
                className="w-full h-auto max-h-64 object-contain rounded-xl"
              />
              <p className="text-white/90 text-sm mt-4 italic">
                "Where every bird thrives in a caring environment"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/dy 4 1.png" 
                alt="DY Poultry Farms" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">DY Poultry Farms</span>
                <span className="text-white/70 text-sm">Naturally Raised. Honestly Farmed.</span>
              </div>
            </div>
            <p className="mb-6 text-white/80">
              Fresh, quality poultry products since 2024. Committed to sustainable 
              farming practices and the highest standards of animal welfare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                 className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#our-values')}
                  className="text-white/80 hover:text-white transition-colors duration-200 hover:underline text-left"
                >
                  Our Values
                </button>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="text-white/80 hover:text-white transition-colors duration-200 hover:underline text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Products</h3>
            <ul className="space-y-3">
              {['Fresh Eggs', 'Whole Chickens', 'Chicken Cuts', 'Farm Store'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-600 text-center text-white/60 text-sm">
          <p className="mb-2">
            &copy; {currentYear} DY Poultry Farms. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;