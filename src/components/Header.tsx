import React, { useState } from 'react';
import { Router as Rooster, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a  className="flex items-center space-x-3">
         
          <span className="font-serif font-bold text-xl text-forest-700">DY Poultry</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Home', 'Our Story', 'Sustainability', 'Meet the Farm', 'Visit Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-earth-700 hover:text-forest-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-full text-sm font-medium bg-forest-600 text-white hover:bg-forest-700 transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-forest-600 hover:text-forest-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="container mx-auto px-6 py-3 space-y-1">
            {['Home', 'Our Story', 'Sustainability', 'Meet the Farm', 'Visit Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-2 text-sm font-medium text-earth-700 hover:text-forest-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-3 px-4 py-2 text-center text-sm font-medium bg-forest-600 text-white hover:bg-forest-700 rounded-full transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;