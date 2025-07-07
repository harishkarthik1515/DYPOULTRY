import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const dynamicWords = ['Naturally Raised', 'Ethically Sourced', 'Farm Fresh', 'Sustainably Grown'];

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

  // Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = dynamicWords[currentWordIndex];
      
      if (!isDeleting && currentCharIndex < currentWord.length) {
        setCurrentCharIndex(currentCharIndex + 1);
      } else if (isDeleting && currentCharIndex > 0) {
        setCurrentCharIndex(currentCharIndex - 1);
      } else if (!isDeleting && currentCharIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % dynamicWords.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentWordIndex, dynamicWords]);

  // Generate floating particles
  const generateParticles = () => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
  };

  const [particles] = useState(generateParticles);

  // Generate dynamic mesh gradient points
  const generateMeshPoints = () => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 8 + 4,
    }));
  };

  const [meshPoints] = useState(generateMeshPoints);

  return (
    <>
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes meshFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-15px, 20px) scale(0.9); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }
        
        @keyframes energyPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes liquidWave {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 70% 30% 60% 40% / 40% 70% 60% 30%; }
          75% { border-radius: 40% 70% 30% 60% / 70% 40% 50% 70%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        
        @keyframes morphBlob {
          0%, 100% { 
            border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
            transform: rotate(0deg) scale(1);
          }
          14% { 
            border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
            transform: rotate(51deg) scale(1.1);
          }
          28% { 
            border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
            transform: rotate(102deg) scale(0.9);
          }
          42% { 
            border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
            transform: rotate(153deg) scale(1.05);
          }
          56% { 
            border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
            transform: rotate(204deg) scale(1.15);
          }
          70% { 
            border-radius: 50% 50% 33% 67% / 55% 68% 32% 45%;
            transform: rotate(255deg) scale(0.95);
          }
          84% { 
            border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
            transform: rotate(306deg) scale(1.08);
          }
        }
        
        .floating-element {
          animation: floatUp 15s infinite linear;
        }
        
        .mesh-gradient {
          animation: meshFloat 12s infinite ease-in-out;
        }
        
        .energy-orb {
          animation: energyPulse 3s infinite ease-in-out;
        }
        
        .liquid-blob {
          animation: liquidWave 8s infinite ease-in-out;
        }
        
        .morph-blob {
          animation: morphBlob 20s infinite ease-in-out;
        }
        
        .stagger-1 { animation-delay: 0s; }
        .stagger-2 { animation-delay: 0.1s; }
        .stagger-3 { animation-delay: 0.2s; }
        .stagger-4 { animation-delay: 0.3s; }
        .stagger-5 { animation-delay: 0.4s; }
        .stagger-6 { animation-delay: 0.5s; }
      `}</style>
      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background with Enhanced Parallax */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate3d(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px, 0) scale(1.05)`,
          }}
        />

        {/* Dynamic Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-60">
          {meshPoints.map((point, index) => (
            <div
              key={point.id}
              className={`absolute w-96 h-96 mesh-gradient stagger-${(index % 6) + 1}`}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                background: `radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
                transform: `translate(-50%, -50%) scale(${point.scale})`,
                filter: 'blur(40px)',
                animationDuration: `${point.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(15, 23, 42, 0.2) 0%, 
                rgba(15, 23, 42, 0.6) 40%, 
                rgba(15, 23, 42, 0.85) 100%
              ),
              linear-gradient(135deg, 
                rgba(166, 124, 82, 0.15) 0%, 
                rgba(166, 124, 82, 0.25) 30%, 
                rgba(166, 124, 82, 0.1) 70%,
                rgba(15, 23, 42, 0.8) 100%
              )
            `
          }}
        />

        {/* Floating Energy Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute energy-orb floating-element`}
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                background: `radial-gradient(circle, rgba(166, 124, 82, 0.4) 0%, rgba(166, 124, 82, 0.2) 50%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(10px)',
                animationDelay: `${i * 2}s`,
                animationDuration: `${12 + i * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-green-300/30 to-blue-300/30 animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                transform: `translate3d(${Math.sin(Date.now() * 0.001 + particle.id) * 10}px, ${Math.cos(Date.now() * 0.001 + particle.id) * 10}px, 0)`,
              }}
            />
          ))}
        </div>

        {/* Morphing Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div 
            className="absolute w-80 h-80 morph-blob bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20"
            style={{
              top: '10%',
              left: '5%',
              filter: 'blur(20px)',
            }}
          />
          <div 
            className="absolute w-60 h-60 liquid-blob bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-green-400/20"
            style={{
              bottom: '15%',
              right: '10%',
              filter: 'blur(15px)',
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          
          {/* Enhanced Decorative Element */}
          <div
            className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary-600/80 via-primary-600 to-transparent mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-600 to-transparent animate-pulse"></div>
              </div>
              <div className="absolute -top-1 left-0 w-3 h-3 bg-primary-600 rounded-full">
                <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="text-primary-300 text-sm font-medium tracking-widest uppercase mx-4">
              <span className="inline-block animate-pulse">Premium Farm Experience</span>
            </div>
            <div className="relative">
              <div className="w-24 h-0.5 bg-gradient-to-l from-primary-600/80 via-primary-600 to-transparent mb-4">
                <div className="absolute inset-0 bg-gradient-to-l from-primary-600 via-primary-600 to-transparent animate-pulse"></div>
              </div>
              <div className="absolute -bottom-1 right-0 w-3 h-3 bg-primary-600 rounded-full">
                <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Dynamic Typing Title */}
          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #dcfce7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
              minHeight: '1.2em',
            }}
          >
            <span className="inline-block">
              {dynamicWords[currentWordIndex].substring(0, currentCharIndex)}
              <span className="animate-pulse text-primary-600">|</span>
            </span>
            <br />
            <span className="text-primary-300">Honestly Farmed.</span>
          </h1>

          {/* Enhanced Description */}
          <p
            className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            Discover a <span className="text-green-300 font-semibold relative">
            Discover a <span className="text-primary-300 font-semibold relative">
              farm-to-table experience
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-transparent animate-pulse"></span>
            </span> built on care, ethics, and uncompromising quality.
          </p>

          {/* Enhanced Buttons with Advanced Hover Effects */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            <a
              href="#our-story"
              className="group relative px-12 py-5 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg transition-all duration-500 hover:from-primary-700 hover:to-primary-800 hover:shadow-2xl hover:shadow-primary-500/30 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-primary-100">Our Story</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-150"></div>
              <div className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-all duration-700 origin-center"></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary-300/50 scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></div>
            </a>
            <a
              href="#visit-us"
              className="group relative px-12 py-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg transition-all duration-500 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-primary-100">Visit the Farm</span>
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-all duration-700 origin-center"></div>
              <div className="absolute inset-0 rounded-full border-2 border-white/40 scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;