import React, { useState, useEffect } from 'react';
import { Menu, X, Feather, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const leftNavigation = [
    { name: 'Our Values', href: '#our-values' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Sustainability', href: '#sustainability' },
  ];

  const rightNavigation = [
    { name: 'Meet the Farm', href: '#meet-the-farm' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Visit Us', href: '#visit-us' },
  ];

  const allNavigation = [...leftNavigation, ...rightNavigation];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-md border-b border-primary-100'
      }`}>
        <div className={`w-full transition-all duration-300 ease-out ${
          isScrolled 
            ? 'max-w-6xl mx-auto my-2 sm:my-3 rounded-full bg-white/95 backdrop-blur-xl shadow-xl border border-white/20' 
            : 'max-w-7xl mx-auto'
        } px-3 sm:px-4 lg:px-8`}>
          
          {/* Desktop Layout */}
          <div className={`hidden lg:grid lg:grid-cols-3 items-center w-full transition-all duration-300 ${
            isScrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
          }`}>
            
            {/* Left Navigation */}
            <nav className="flex items-center justify-start space-x-4 xl:space-x-6">
              {leftNavigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Centered Logo */}
            <div 
              className="flex items-center justify-center cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className={`bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-6 h-6 sm:w-8 sm:h-8'
              }`}>
                <Feather className={`text-white ${isScrolled ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-3 h-3 sm:w-5 sm:h-5'}`} />
              </div>
              <span className={`ml-2 font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent transition-all duration-300 ${
                isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}>
                DY Poultry
              </span>
            </div>

            {/* Right Navigation & CTA */}
            <div className="flex items-center justify-end space-x-4 xl:space-x-6">
              {/* Right Navigation */}
              <nav className="flex items-center space-x-4 xl:space-x-6">
                {rightNavigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Contact CTA Button */}
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 hover:scale-105 px-3 py-1.5 sm:px-4 sm:py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium text-xs sm:text-sm whitespace-nowrap">
                  Contact Us
                </span>
              </a>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className={`flex lg:hidden items-center justify-between w-full transition-all duration-300 ${
            isScrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
          }`}>
            
            {/* Mobile Menu Button - Left */}
            <button
              className="p-1.5 sm:p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 text-gray-700 mobile-menu-container flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

            {/* Centered Logo */}
            <div 
              className="flex items-center justify-center cursor-pointer absolute left-1/2 transform -translate-x-1/2"
              onClick={handleLogoClick}
            >
              <div className={`bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-6 h-6 sm:w-8 sm:h-8'
              }`}>
                <Feather className={`text-white ${isScrolled ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-3 h-3 sm:w-5 sm:h-5'}`} />
              </div>
              <span className={`ml-2 font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent transition-all duration-300 ${
                isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}>
                DY Poultry
              </span>
            </div>

            {/* Contact CTA Button - Right */}
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 hover:scale-105 px-2 py-1.5 sm:px-3 sm:py-2 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-xs sm:text-sm hidden sm:inline">
                Contact
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl mobile-menu-container overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center space-x-2" onClick={handleLogoClick}>
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                    <Feather className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent cursor-pointer">
                    DY Poultry
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {/* Navigation Links */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                      Navigation
                    </h3>
                    
                    <button
                      onClick={() => handleNavClick('#home')}
                      className="w-full flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium text-left"
                    >
                      <span>Home</span>
                    </button>

                    {allNavigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium text-left"
                      >
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Contact CTA Section */}
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-3">
                      Get in Touch
                    </h3>
                    
                    <a
                      href="tel:+1234567890"
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Us: (555) 123-4567</span>
                    </a>
                    
                    <div className="mt-3 text-center">
                      <p className="text-xs text-gray-500">
                        Available Monday - Saturday, 9am - 5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;