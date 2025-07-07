import React, { useState, useEffect } from 'react';

// Mock timeline data
const timelineEvents = [
  {
    id: 1,
    year: "1980",
    title: "The Beginning",
    description: "Started as a small family operation with just 100 chickens and a dream of sustainable farming."
  },
  {
    id: 2,
    year: "1995",
    title: "Organic Certification",
    description: "Became one of the first certified organic poultry farms in the region, setting new standards for quality."
  },
  {
    id: 3,
    year: "2005",
    title: "Community Partnership",
    description: "Expanded our reach by partnering with local restaurants and farmers markets across the state."
  },
  {
    id: 4,
    year: "2015",
    title: "Sustainable Innovation",
    description: "Implemented solar power and rainwater harvesting systems, reducing our environmental footprint by 60%."
  },
  {
    id: 5,
    year: "2020",
    title: "Next Generation",
    description: "Third generation family members joined the business, bringing fresh ideas while honoring our traditions."
  }
];

// Custom hook for scroll animations
const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return { ref: setRef, isInView };
};

const OurStory: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  
  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative h-screen flex items-center py-4 md:py-6 pt-16 md:pt-20 overflow-hidden"
      style={{ backgroundColor: '#faf5e9' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-5 w-48 h-48 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-4 md:mb-6">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-1">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Our Journey</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>

          <h2 
            className={`font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 transition-all duration-700 delay-100 ${
              sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}
            style={{
              background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #a67c52 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Story
          </h2>
          
          <p className={`text-sm md:text-base text-gray-700 leading-relaxed transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            For over <span className="font-bold text-primary-600">40 years</span>, DY Poultry Farms has been committed to raising poultry with respect for 
            nature, animals, and our community.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Image Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-primary-100 p-1">
                <img 
                  src="https://i.ibb.co/hFgHdvCS/Whats-App-Image-2025-04-03-at-5-47-19-PM.jpg" 
                  alt="DY Poultry Farms landscape" 
                  className="w-full h-[150px] md:h-[200px] object-cover rounded-lg"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-2 -right-2 bg-primary-100 rounded-lg shadow-lg p-2 border border-gray-100">
                <div className="text-center">
                  <div className="text-base md:text-lg font-bold text-primary-600">40+</div>
                  <div className="text-gray-600 text-xs font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600"></div>
              
              <div className="space-y-3">
                {timelineEvents.slice(0, 3).map((event, index) => (
                  <div 
                    key={event.id}
                    className={`relative transition-all duration-700 ${
                      sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                    onMouseEnter={() => setHoveredEvent(event.id)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-2 w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                      hoveredEvent === event.id 
                        ? 'bg-primary-400 scale-125 shadow-primary-400/50' 
                        : 'bg-primary-500'
                    }`}></div>
                    
                    {/* Content Card */}
                    <div className="ml-7 group cursor-pointer">
                      <div className={`bg-white rounded-lg p-2 md:p-3 shadow-lg border border-gray-100 transition-all duration-300 ${
                        hoveredEvent === event.id 
                          ? 'shadow-2xl shadow-primary-500/10 border-primary-200' 
                          : 'hover:shadow-xl'
                      }`}>
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold mb-1 transition-all duration-300 ${
                          hoveredEvent === event.id
                            ? 'bg-gradient-to-r from-primary-500 to-primary-400 text-white'
                            : 'bg-gradient-to-r from-primary-100 to-primary-100 text-primary-700'
                        }`}>
                          {event.year}
                        </div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-primary-600 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;