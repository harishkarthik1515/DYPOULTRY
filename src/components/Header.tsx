import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Feather, User, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const navigation = [
    { name: 'Our Values', href: '#our-values' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Meet the Farm', href: '#meet-the-farm' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-md border-b border-primary-100'
      }`}>
        <div className={`w-full transition-all duration-300 ease-out ${
          isScrolled 
            ? 'max-w-4xl mx-auto my-2 sm:my-3 rounded-full bg-white/95 backdrop-blur-xl shadow-xl border border-white/20' 
            : 'max-w-7xl mx-auto'
        } px-3 sm:px-4 lg:px-8`}>
          <div className={`flex items-center justify-between w-full transition-all duration-300 ${
            isScrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
          }`}>
            
            {/* Logo */}
            <div 
              className="flex items-center flex-shrink-0 cursor-pointer min-w-0"
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-shrink-0">
              {isScrolled ? (
                // Compact navigation for scrolled state
                <div className="flex items-center space-x-6">
                  {navigation.slice(0, 3).map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              ) : (
                // Full navigation for normal state
                <div className="flex items-center space-x-4 xl:space-x-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0">
              
              {/* Search Bar */}
              <div className={`relative transition-all duration-300 hidden md:block flex-shrink-0 ${
                isSearchFocused 
                  ? 'w-48 lg:w-56' 
                  : isScrolled 
                    ? 'w-20 lg:w-24' 
                    : 'w-32 lg:w-40'
              }`}>
                <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                  <Search className={`text-gray-400 ${isScrolled ? 'h-3 w-3' : 'h-4 w-4'}`} />
                </div>
                <input
                  type="text"
                  placeholder={isScrolled ? "Search..." : "Search products..."}
                  className={`block w-full border rounded-lg transition-all duration-200 ${
                    isScrolled 
                      ? 'pl-6 sm:pl-7 pr-2 py-1 text-xs border-gray-200 focus:ring-1 focus:ring-primary-500 focus:border-transparent bg-white' 
                      : 'pl-7 sm:pl-8 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white'
                  }`}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>

              {/* Contact Section */}
              <div className="hidden sm:flex items-center space-x-2">
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowContactDropdown(!showContactDropdown)}
                    className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 px-3 py-1.5 sm:px-4 sm:py-2"
                  >
                    <Phone className="w-4 h-4 text-primary-600" />
                    <span className="font-medium text-xs sm:text-sm text-gray-700 whitespace-nowrap">
                      Contact
                    </span>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                  </button>

                  {/* Contact Dropdown */}
                  {showContactDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">Get in Touch</p>
                        <p className="text-xs text-gray-500">We'd love to hear from you</p>
                      </div>
                      <div className="py-1">
                        <a
                          href="tel:+1234567890"
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowContactDropdown(false)}
                        >
                          <Phone className="w-4 h-4 text-primary-600" />
                          <div>
                            <span className="block font-medium">(555) 123-4567</span>
                            <span className="text-xs text-gray-500">Call us directly</span>
                          </div>
                        </a>
                        <a
                          href="mailto:info@dypoultry.farm"
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setShowContactDropdown(false)}
                        >
                          <Mail className="w-4 h-4 text-primary-600" />
                          <div>
                            <span className="block font-medium">info@dypoultry.farm</span>
                            <span className="text-xs text-gray-500">Send us an email</span>
                          </div>
                        </a>
                        <button
                          onClick={() => {
                            handleNavClick('#visit-us');
                            setShowContactDropdown(false);
                          }}
                          className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <User className="w-4 h-4 text-primary-600" />
                          <div className="text-left">
                            <span className="block font-medium">Visit Our Farm</span>
                            <span className="text-xs text-gray-500">Schedule a tour</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="#visit-us"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#visit-us');
                  }}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 hover:scale-105 px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  <span className="font-medium text-xs sm:text-sm whitespace-nowrap">Visit Farm</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 text-gray-700 mobile-menu-container flex-shrink-0 ${
                  isScrolled ? 'ml-1' : 'ml-2'
                }`}
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
            </div>
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
                  {/* Mobile Search */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-sm"
                    />
                  </div>

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

                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium text-left"
                      >
                        <span>{item.name}</span>
                      </button>
                    ))}

                    {/* Contact Section */}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                        Contact Us
                      </h3>
                      
                      <div className="space-y-2">
                        <a
                          href="tel:+1234567890"
                          className="w-full flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                        >
                          <Phone className="w-4 h-4" />
                          <span>(555) 123-4567</span>
                        </a>
                        
                        <a
                          href="mailto:info@dypoultry.farm"
                          className="w-full flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                        >
                          <Mail className="w-4 h-4" />
                          <span>info@dypoultry.farm</span>
                        </a>

                        <button
                          onClick={() => handleNavClick('#visit-us')}
                          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <User className="w-4 h-4" />
                          <span>Visit Our Farm</span>
                        </button>
                      </div>
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