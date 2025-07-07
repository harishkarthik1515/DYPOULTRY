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

  const ethicalPractices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Raised Cage-free",
      description: "Spacious, well-ventilated, climate-controlled barns with freedom to move and interact naturally"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Free of Added Steroids & Hormones",
      description: "Following Indian government regulations since 2011 - it's the law, and we follow it without compromise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Licensed Veterinarian Monitored",
      description: "Every flock cared for by licensed veterinarians with structured healthcare programs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Animal-Welfare Trained Farmers",
      description: "All personnel trained in humane handling and chicken care for stress-free environments"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Holistic Approach",
      description: "Protecting and enriching land through natural methods, free from chemical or synthetic additives"
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
        
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        .floating-element {
          animation: floatUp 8s infinite linear;
        }
        
        .gentle-float {
          animation: gentleFloat 3s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-14"
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
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-h-full overflow-y-auto">
          
          {/* Hero Header Section */}
          <div className="text-center mb-6 md:mb-8">
            {/* Trust Badge */}
            <div
              className={`mb-4 md:mb-6 flex justify-center transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              <div className="inline-flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-full shadow-lg border border-primary-200">
                <div className="w-3 h-3 bg-primary-600 rounded-full pulse-glow"></div>
                <span className="text-primary-700 font-semibold text-xs md:text-sm tracking-wide">TRUSTED SOURCE FOR HYGIENIC CHICKEN</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className={`font-serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transition-all duration-1000 delay-200 ${
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
              className={`text-sm md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              Under the care of <span className="font-semibold text-primary-600">smart technology</span> and <span className="font-semibold text-primary-600">dedicated hands</span> — because healthy flocks begin with thoughtful, modern farming.
            </p>

            {/* Mission Statement */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-lg border border-primary-200 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              <p className="text-sm md:text-lg text-primary-700 font-medium italic">
                "Ethically farmed poultry — because good food starts with good farming."
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            <a
              href="#our-values"
              className="group relative px-6 md:px-8 py-2 md:py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm md:text-base transition-all duration-500 hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300">Our Values</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-150"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-all duration-700 origin-center"></div>
            </a>
            <a
              href="#visit-us"
              className="group relative px-6 md:px-8 py-2 md:py-3 rounded-full bg-white/90 backdrop-blur-sm border-2 border-primary-600 text-primary-700 font-semibold text-sm md:text-base transition-all duration-500 hover:bg-primary-600 hover:text-white hover:shadow-xl transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300">Visit Farm</span>
              <div className="absolute inset-0 rounded-full bg-primary-600 scale-0 group-hover:scale-100 transition-all duration-700 origin-center"></div>
            </a>
          </div>

          {/* Bottom Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            {[
              { number: "40+", label: "Years of Excellence" },
              { number: "100%", label: "Cage-Free Environment" },
              { number: "24/7", label: "Veterinary Care" },
              { number: "0", label: "Artificial Hormones" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-primary-200">
                <div className="text-lg md:text-2xl font-bold text-primary-600 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;