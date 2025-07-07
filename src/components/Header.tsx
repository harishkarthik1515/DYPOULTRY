import React, { useState } from 'react';
import { Router as Rooster, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-100/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 md:px-6 h-12 md:h-14 flex items-center justify-between">
        {/* Logo */}
        <a  className="flex items-center space-x-3">
         
          <span className="font-serif font-bold text-lg md:text-xl text-primary-600">DY Poultry</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {['Home', 'Values', 'Story', 'Sustainability', 'Farm', 'Visit'].map((item, index) => {
            const fullNames = ['Home', 'Our Values', 'Our Story', 'Sustainability', 'Meet the Farm', 'Visit Us'];
            const href = fullNames[index].toLowerCase().replace(/\s+/g, '-');
            return (
            <a
              key={item}
              href={`#${href}`}
              className="text-xs lg:text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors duration-200"
            >
              {item}
            </a>
          )})}
          <a
            href="#contact"
            className="ml-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary-600 hover:text-primary-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 shadow-sm" style={{ backgroundColor: '#faf5e9' }}>
          <nav className="container mx-auto px-4 py-2 space-y-1">
            {['Home', 'Our Values', 'Our Story', 'Sustainability', 'Meet the Farm', 'Visit Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-1.5 text-sm font-medium text-primary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-2 px-4 py-1.5 text-center text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-full transition-all duration-200"
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