import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Router as Rooster } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-forest-800 text-cream-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              
              <span className="font-serif font-bold text-xl text-cream-200">DY Poultry Farms</span>
            </div>
            <p className="mb-6 text-cream-100/80">
              Naturally raised, ethically farmed poultry since 1982. Committed to sustainable 
              farming practices and the highest standards of animal welfare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-cream-200">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Our Story', 'Sustainability', 'Meet the Farm', 'Testimonials', 'Visit Us'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-cream-100/80 hover:text-cream-200 transition-colors duration-200 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-cream-200">Farm Products</h3>
            <ul className="space-y-3">
              {['Fresh Eggs', 'Whole Chickens', 'Chicken Cuts', 'Seasonal Specials', 'Farm Store', 'Wholesale'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-cream-100/80 hover:text-cream-200 transition-colors duration-200 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-cream-200">Newsletter</h3>
            <p className="mb-4 text-cream-100/80">
              Stay updated with farm news, seasonal products, and special events.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-forest-700 border border-forest-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cream-200 text-white placeholder-forest-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-gold-500 p-1 rounded-md transition-colors duration-200 hover:bg-gold-400"
                  aria-label="Subscribe"
                >
                  <Mail size={18} className="text-forest-800" />
                </button>
              </div>
              <p className="text-xs text-cream-100/60">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our farm.
              </p>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-forest-600 text-center text-cream-100/60 text-sm">
          <p className="mb-2">
            &copy; {currentYear} DY Poultry Farms. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-cream-200 transition-colors duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-cream-200 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;