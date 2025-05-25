import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background with Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px) scale(1.05)`,
        }}
      />

      {/* Dynamic Gradient Overlay */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(15, 23, 42, 0.3) 0%, 
              rgba(15, 23, 42, 0.7) 50%, 
              rgba(15, 23, 42, 0.9) 100%
            ),
            linear-gradient(135deg, 
              rgba(34, 197, 94, 0.1) 0%, 
              rgba(21, 128, 61, 0.3) 50%, 
              rgba(15, 23, 42, 0.8) 100%
            )
          `
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Decorative Element Above Title */}
        <div
          className={`mb-8 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="mt-24">
  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-4"></div>
  <div className="text-green-300 text-sm font-medium tracking-widest uppercase">
    Premium Farm Experience
  </div>
  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-4"></div>
</div>
        </div>

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
          }}
        >
          Naturally Raised.
          <br />
          <span className="text-green-300">Honestly Farmed.</span>
        </h1>

        <p
          className={`text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}
        >
          Discover a <span className="text-green-300 font-semibold">farm-to-table experience</span> built on care, ethics, and uncompromising quality.
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center gap-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}
        >
          <a
            href="#our-story"
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-lg transition-all duration-300 hover:from-green-700 hover:to-green-800 hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">Our Story</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </a>
          <a
            href="#visit-us"
            className="group relative px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">Visit the Farm</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Stats Section - Hidden on Mobile */}
        <div
          className={`hidden md:grid md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { number: '25+', label: 'Years of Experience' },
            { number: '100%', label: 'Organic Certified' },
            { number: '500+', label: 'Happy Families Served' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;