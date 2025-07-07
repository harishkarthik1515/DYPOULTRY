import React, { useState, useEffect } from 'react';
import { ArrowRight, Feather, Heart, Shield, Award, Users, Calendar, MapPin, Leaf, Egg, Sun, Droplets } from 'lucide-react';

const Hero: React.FC = () => {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

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

  // Interactive poultry elements data
  const poultryElements = [
    {
      id: 'feed',
      icon: <Leaf className="w-4 h-4" />,
      title: 'Organic Feed',
      description: 'Premium quality organic feed for healthy growth',
      position: { top: '15%', left: '20%' },
      color: 'from-green-500 to-emerald-600',
      delay: '0s'
    },
    {
      id: 'eggs',
      icon: <Egg className="w-4 h-4" />,
      title: 'Fresh Eggs',
      description: 'Daily collection of farm-fresh eggs',
      position: { top: '25%', right: '15%' },
      color: 'from-yellow-500 to-orange-600',
      delay: '0.5s'
    },
    {
      id: 'water',
      icon: <Droplets className="w-4 h-4" />,
      title: 'Clean Water',
      description: 'Continuous access to fresh, clean water',
      position: { bottom: '30%', left: '15%' },
      color: 'from-blue-500 to-cyan-600',
      delay: '1s'
    },
    {
      id: 'sunshine',
      icon: <Sun className="w-4 h-4" />,
      title: 'Natural Light',
      description: 'Optimal lighting for bird wellness',
      position: { bottom: '20%', right: '25%' },
      color: 'from-yellow-400 to-amber-500',
      delay: '1.5s'
    },
    {
      id: 'care',
      icon: <Heart className="w-4 h-4" />,
      title: 'Loving Care',
      description: '24/7 monitoring and veterinary support',
      position: { top: '45%', left: '10%' },
      color: 'from-red-500 to-pink-600',
      delay: '2s'
    }
  ];

  return (
    <>
      <style jsx>{`
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
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
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
        
        .bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        
        .rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .scale-pulse {
          animation: scale-pulse 2s ease-in-out infinite;
        }
      `}</style>
      
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
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + i}s`,
              }}
            >
              <Feather 
                className="text-primary-600/30" 
                size={Math.random() * 12 + 8}
                style={{ transform: `rotate(${Math.random() * 360}deg)` }}
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20 sm:pt-24 pb-8 lg:py-0">
            
            {/* Left Farm Visual Section with Interactive Elements */}
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg h-[400px] lg:h-[500px] flex items-center justify-center">
                
                {/* Main GIF - No Frame */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src="/1084554013-preview-unscreen.gif" 
                    alt="DY Poultry Farm - Happy Chickens Animation" 
                    className="w-full h-full object-contain scale-pulse"
                    style={{ 
                      filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 30px rgba(166, 124, 82, 0.2))',
                    }}
                  />
                  
                  {/* Interactive Poultry Elements */}
                  {poultryElements.map((element, index) => (
                    <div
                      key={element.id}
                      className={`absolute cursor-pointer transition-all duration-500 ${
                        isVisible ? 'opacity-100 transform-none' : 'opacity-0 scale-0'
                      }`}
                      style={{
                        ...element.position,
                        animationDelay: element.delay,
                        transform: hoveredElement === element.id ? 'scale(1.2)' : 'scale(1)',
                      }}
                      onMouseEnter={() => setHoveredElement(element.id)}
                      onMouseLeave={() => setHoveredElement(null)}
                    >
                      {/* Pulsing Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${element.color} opacity-20 animate-ping`}></div>
                      
                      {/* Main Element */}
                      <div className={`relative w-12 h-12 bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 bounce-gentle border-2 border-white/50`}>
                        {element.icon}
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredElement === element.id && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-primary-200 z-20">
                          <h4 className="font-bold text-primary-700 text-sm mb-1">{element.title}</h4>
                          <p className="text-primary-600 text-xs">{element.description}</p>
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-l border-t border-primary-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Rotating Farm Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 rotate-slow">
                      <Feather className="w-6 h-6 text-primary-600/40" />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 rotate-slow" style={{ animationDirection: 'reverse' }}>
                      <Leaf className="w-5 h-5 text-green-600/40" />
                    </div>
                    <div className="absolute top-1/2 right-1/6 rotate-slow">
                      <Egg className="w-4 h-4 text-yellow-600/40" />
                    </div>
                  </div>
                </div>
                
                {/* Ambient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent rounded-full scale-150"></div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-6 text-gray-800 order-1 lg:order-2">
              {/* Status Badge */}
              <div className={`inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 text-sm font-semibold border border-primary-200 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}>
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 pulse-glow"></div>
                Premium Poultry Farm Since 2024
              </div>
              
              {/* Main Heading */}
              <div className={`space-y-3 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  Farm-Fresh Chicken
                  <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">
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
                  <div className="h-px bg-gradient-to-r from-primary-500 to-transparent flex-1"></div>
                  <Feather className="h-4 w-4 text-primary-600 bounce-gentle" />
                  <div className="h-px bg-gradient-to-l from-primary-500 to-transparent flex-1"></div>
                </div>
                
                {/* Compact CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  {/* Primary CTA Button - Compact */}
                  <button 
                    className="group relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-2.5 px-5 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm border border-primary-400/30"
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
                        {primaryHovered ? 'Our Values' : 'Discover Quality'}
                      </span>
                      <ArrowRight className={`h-4 w-4 transition-all duration-300 ${primaryHovered ? 'translate-x-1' : ''}`} />
                    </div>
                  </button>
                  
                  {/* Secondary CTA Button - Compact */}
                  <button 
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm text-primary-700 py-2.5 px-5 rounded-xl transition-all duration-300 font-semibold border border-primary-200 hover:bg-white hover:border-primary-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm"
                    onMouseEnter={() => setSecondaryHovered(true)}
                    onMouseLeave={() => setSecondaryHovered(false)}
                    onClick={() => handleScrollToSection('#visit-us')}
                  >
                    <div className="relative flex items-center space-x-2">
                      <MapPin className={`h-4 w-4 transition-all duration-300 ${secondaryHovered ? 'text-primary-600' : ''}`} />
                      <span className="font-semibold">
                        {secondaryHovered ? 'Book Tour' : 'Visit Farm'}
                      </span>
                      <Calendar className={`h-4 w-4 transition-all duration-300 ${secondaryHovered ? 'scale-110 text-primary-600' : ''}`} />
                    </div>
                  </button>
                </div>

                {/* Interactive Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                  {[
                    { icon: Shield, text: 'Biosecure', color: 'green', description: 'Advanced biosecurity protocols' },
                    { icon: Users, text: '1.25L+ Birds', color: 'blue', description: 'Large scale operations' },
                    { icon: Award, text: 'Premium Quality', color: 'primary', description: 'Certified quality standards' }
                  ].map(({ icon: Icon, text, color, description }, index) => (
                    <div 
                      key={index} 
                      className="group relative flex items-center space-x-2 cursor-pointer hover:text-primary-700 transition-colors duration-200"
                      onMouseEnter={() => setHoveredElement(`trust-${index}`)}
                      onMouseLeave={() => setHoveredElement(null)}
                    >
                      <div className={`w-1.5 h-1.5 bg-${color === 'primary' ? 'primary-600' : color + '-500'} rounded-full animate-pulse group-hover:scale-150 transition-transform duration-200`}></div>
                      <span className="group-hover:font-semibold transition-all duration-200">{text}</span>
                      <Icon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      
                      {/* Tooltip */}
                      {hoveredElement === `trust-${index}` && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-xl border border-primary-200 z-20">
                          <p className="text-primary-600 text-xs text-center">{description}</p>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-primary-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Compact Call-to-Action Subtitle */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-primary-200">
                  <p className="text-center text-gray-700 text-xs">
                    <span className="text-primary-600 font-semibold">Trusted by 1000+</span> families for premium poultry
                  </p>
                  <div className="flex justify-center mt-1 space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Stats Grid */}
              <div className={`grid grid-cols-3 gap-3 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}>
                {[
                  { number: '100%', label: 'Cage-Free', color: 'from-primary-500 to-primary-600', icon: <Feather className="w-3 h-3" /> },
                  { number: '24/7', label: 'Vet Care', color: 'from-primary-600 to-primary-700', icon: <Heart className="w-3 h-3" /> },
                  { number: '0%', label: 'Hormones', color: 'from-primary-700 to-primary-800', icon: <Shield className="w-3 h-3" /> }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center group cursor-pointer bg-white/40 backdrop-blur-sm rounded-lg p-3 border border-primary-200 hover:bg-white/60 transition-all duration-300"
                    onMouseEnter={() => setHoveredElement(`stat-${index}`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  >
                    <div className="flex items-center justify-center mb-1">
                      <div className={`text-primary-600 mr-1 ${hoveredElement === `stat-${index}` ? 'scale-110' : ''} transition-transform duration-300`}>
                        {stat.icon}
                      </div>
                    </div>
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