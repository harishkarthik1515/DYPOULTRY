import React, { useEffect, useState } from 'react';
import { Shield, Heart, Leaf, Award, Users, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
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
        
        .floating-element {
          animation: floatUp 8s infinite linear;
        }
        
        .pulse-glow {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
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
              className="absolute rounded-full bg-primary-600/20 floating-element"
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

        {/* Main Content Container */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Hero Header Section */}
          <div className="text-center mb-12">
            {/* Trust Badge */}
            <div
              className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary-200">
                <div className="w-3 h-3 bg-primary-600 rounded-full pulse-glow"></div>
                <span className="text-primary-700 font-semibold text-sm tracking-wide">YOUR TRUSTED SOURCE FOR HYGIENIC, BIOSECURE CHICKEN</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
              style={{
                background: 'linear-gradient(135deg, #1f2937 0%, #374151 30%, #a67c52 70%, #8b6644 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.1',
              }}
            >
              Farm-Fresh Chicken<br />
              <span className="text-primary-600">Where Every Bird Thrives</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              Under the care of <span className="font-semibold text-primary-600">smart technology</span> and <span className="font-semibold text-primary-600">dedicated hands</span> — because healthy flocks begin with thoughtful, modern farming.
            </p>

            {/* Mission Statement */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-primary-200 max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              <p className="text-lg md:text-xl text-primary-700 font-medium italic">
                "Ethically farmed poultry — because good food starts with good farming."
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            <a
              href="#our-values"
              className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg transition-all duration-500 hover:from-primary-700 hover:to-primary-800 hover:shadow-2xl hover:shadow-primary-500/30 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300">Our Values & Vision</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-150"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-all duration-700 origin-center"></div>
            </a>
            <a
              href="#visit-us"
              className="group relative px-10 py-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-primary-600 text-primary-700 font-semibold text-lg transition-all duration-500 hover:bg-primary-600 hover:text-white hover:shadow-2xl hover:shadow-primary-500/20 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300">Visit Our Farm</span>
              <div className="absolute inset-0 rounded-full bg-primary-600 scale-0 group-hover:scale-100 transition-all duration-700 origin-center"></div>
            </a>
          </div>

          {/* Bottom Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            {[
              { number: "40+", label: "Years of Excellence" },
              { number: "100%", label: "Cage-Free Environment" },
              { number: "24/7", label: "Veterinary Care" },
              { number: "0", label: "Artificial Hormones" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-200">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;