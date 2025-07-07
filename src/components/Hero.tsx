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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-100"
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
          <div className="text-center mb-16">
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

          {/* Values Section */}
          <div className="mb-16">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                Our Values & Vision
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-primary-600 font-semibold">
                  "Raising Happy, Healthy, Wholesome Chickens for Your Family"
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-200">
                    <p className="font-semibold text-primary-600 mb-2">"Wholesome Chicken, Raised Right"</p>
                    <p>Every aspect of our farming reflects our commitment to quality and care.</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-200">
                    <p className="font-semibold text-primary-600 mb-2">"Love in Every Feather. Freshness in Every Bite"</p>
                    <p>Our passion for ethical farming translates to exceptional taste and nutrition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ethics Section */}
          <div className="mb-16">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 mb-6">
                Our Ethical Standards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ethicalPractices.map((practice, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-200 transition-all duration-700 hover:shadow-xl hover:scale-105 gentle-float ${
                    isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${900 + index * 100}ms`,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                      {practice.icon}
                    </div>
                    <h3 className="font-bold text-lg text-primary-700">{practice.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{practice.description}</p>
                  <div className="mt-4 flex items-center text-primary-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Certified & Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            <a
              href="#our-story"
              className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg transition-all duration-500 hover:from-primary-700 hover:to-primary-800 hover:shadow-2xl hover:shadow-primary-500/30 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300">Discover Our Story</span>
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
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1400 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            {[
              { number: "40+", label: "Years of Excellence" },
              { number: "100%", label: "Cage-Free Environment" },
              { number: "24/7", label: "Veterinary Care" },
              { number: "0", label: "Artificial Hormones" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-primary-200">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
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