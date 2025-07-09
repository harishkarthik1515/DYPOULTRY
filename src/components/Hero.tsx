import React, { useState, useEffect } from 'react';
import { ArrowRight, Feather, Heart, Shield, Award, Users, Calendar, MapPin, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking with throttling
  useEffect(() => {
    let throttleTimer: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
        throttleTimer = null as any;
      }, 16); // ~60fps
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* CSS Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatUp {
            0% { transform: translateY(20px) rotate(0deg); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          
          .floating-element {
            animation: floatUp 8s infinite linear;
          }
          
          .pulse-glow {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .animate-shimmer {
            animation: shimmer 1.5s ease-in-out;
          }
        `
      }} />
      
      <section
        id="home"
        className="min-h-screen relative overflow-hidden pt-16"
        style={{ backgroundColor: '#faf5e9' }}
      >
        {/* Animated Background with Enhanced Parallax */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate3d(${(mousePosition.x - 50) * 0.01}px, ${(mousePosition.y - 50) * 0.01}px, 0) scale(1.02)`,
          }}
        />

        {/* Enhanced Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(250, 245, 233, 0.1) 0%, 
                rgba(250, 245, 233, 0.7) 40%, 
                rgba(250, 245, 233, 0.9) 100%
              ),
              linear-gradient(135deg, 
                rgba(166, 124, 82, 0.1) 0%, 
                rgba(166, 124, 82, 0.2) 30%, 
                rgba(250, 245, 233, 0.8) 70%,
                rgba(250, 245, 233, 0.95) 100%
              )
            `
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-600/20 floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20 sm:pt-24 pb-8 lg:py-0">
            
            {/* Left Farm Visual Section */}
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg h-[400px] lg:h-[500px] flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="DY Poultry Farm - Happy Chickens" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Floating Farm Points */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-orange-600 rounded-full animate-pulse shadow-lg shadow-orange-600/50"></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-6 text-gray-800 order-1 lg:order-2">
              {/* Status Badge */}
              <div className={`inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-orange-700 text-sm font-semibold border border-orange-200 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}>
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2 pulse-glow"></div>
                Premium Poultry Farm Since 2024
              </div>
              
              {/* Main Heading */}
              <div className={`space-y-3 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  Farm-Fresh Chicken
                  <span className="block bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
                    Where Every Bird
                  </span>
                  <span className="block text-gray-700">Thrives</span>
                </h1>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl font-light">
                  Ethically farmed poultry with smart technology and dedicated care — because healthy flocks begin with thoughtful, modern farming.
                </p>
              </div>

              {/* Compact CTA Section */}
              <div className={`space-y-5 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className="h-px bg-gradient-to-r from-orange-500 to-transparent flex-1"></div>
                  <Feather className="h-4 w-4 text-orange-600" />
                  <div className="h-px bg-gradient-to-l from-orange-500 to-transparent flex-1"></div>
                </div>
                
                {/* Compact CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  {/* Primary CTA Button - Compact */}
                  <button 
                    className="group relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white py-2.5 px-5 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm border border-orange-400/30"
                    onMouseEnter={() => setPrimaryHovered(true)}
                    onMouseLeave={() => setPrimaryHovered(false)}
                    onClick={() => handleScrollToSection('#our-values')}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                    
                    {/* Button Content */}
                    <div className="relative flex items-center space-x-2">
                      <Heart className={`h-4 w-4 transition-all duration-300 ${primaryHovered ? 'animate-bounce' : ''}`} />
                      <span className="font-bold">
                        {primaryHovered ? 'Our Values and Vision' : 'Discover Quality'}
                      </span>
                      <ArrowRight className={`h-4 w-4 transition-all duration-300 ${primaryHovered ? 'translate-x-1' : ''}`} />
                    </div>
                  </button>
                  
                  {/* Secondary CTA Button - Compact */}
                  <button 
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm text-orange-700 py-2.5 px-5 rounded-xl transition-all duration-300 font-semibold border border-orange-200 hover:bg-white hover:border-orange-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm"
                    onMouseEnter={() => setSecondaryHovered(true)}
                    onMouseLeave={() => setSecondaryHovered(false)}
                    onClick={() => handleScrollToSection('#visit-us')}
                  >
                    <div className="relative flex items-center space-x-2">
                      <MapPin className={`h-4 w-4 transition-all duration-300 ${secondaryHovered ? 'text-orange-600' : ''}`} />
                      <span className="font-semibold">
                        {secondaryHovered ? 'Book Tour' : 'Visit Farm'}
                      </span>
                      <Calendar className={`h-4 w-4 transition-all duration-300 ${secondaryHovered ? 'scale-110 text-orange-600' : ''}`} />
                    </div>
                  </button>
                </div>

                {/* Compact Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                  {[
                    { icon: Shield, text: 'Biosecure', color: 'green' },
                    { icon: Users, text: '1.25L+ Birds', color: 'blue' },
                    { icon: Award, text: 'Premium Quality', color: 'orange' }
                  ].map(({ icon: Icon, text, color }, index) => (
                    <div key={index} className="group flex items-center space-x-2 cursor-pointer hover:text-orange-700 transition-colors duration-200">
                      <div className={`w-1.5 h-1.5 bg-${color === 'orange' ? 'orange-600' : color + '-500'} rounded-full animate-pulse group-hover:scale-150 transition-transform duration-200`}></div>
                      <span className="group-hover:font-semibold transition-all duration-200">{text}</span>
                      <Icon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  ))}
                </div>

                {/* Compact Call-to-Action Subtitle */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-orange-200">
                  <p className="text-center text-gray-700 text-xs">
                    <span className="text-orange-600 font-semibold">Trusted by 1000+</span> families for premium poultry
                  </p>
                  <div className="flex justify-center mt-1 space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-orange-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Stats Grid */}
              <div className={`grid grid-cols-3 gap-3 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}>
                {[
                  { number: '100%', label: 'Cage-Free', color: 'from-orange-500 to-orange-600' },
                  { number: '24/7', label: 'Vet Care', color: 'from-orange-600 to-orange-700' },
                  { number: '0%', label: 'Hormones', color: 'from-orange-700 to-orange-800' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`text-lg md:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-xs font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;