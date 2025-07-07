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
      className="relative min-h-screen flex items-center py-8 overflow-hidden"
      style={{ backgroundColor: '#faf5e9' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-5 w-48 h-48 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Our Journey</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>

          <h2 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 delay-100 ${
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
          
          <p className={`text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            For over <span className="font-bold text-primary-600">40 years</span>, DY Poultry Farms has been committed to raising poultry with respect for 
            nature, animals, and our community. What started as a small family operation has grown into 
            a <span className="font-bold text-primary-600">model of sustainable farming</span> while maintaining our core values.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary-100 p-2">
                <img 
                  src="https://i.ibb.co/hFgHdvCS/Whats-App-Image-2025-04-03-at-5-47-19-PM.jpg" 
                  alt="DY Poultry Farms landscape" 
                  className="w-full h-[300px] lg:h-[400px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -right-4 bg-primary-100 rounded-2xl shadow-2xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">40+</div>
                  <div className="text-gray-600 text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative max-h-[500px] overflow-y-auto">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600"></div>
              
              <div className="space-y-6">
                {timelineEvents.map((event, index) => (
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
                    <div className={`absolute left-3 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                      hoveredEvent === event.id 
                        ? 'bg-primary-400 scale-125 shadow-primary-400/50' 
                        : 'bg-primary-500'
                    }`}></div>
                    
                    {/* Content Card */}
                    <div className={`ml-12 group cursor-pointer transition-all duration-300 ${
                      hoveredEvent === event.id ? 'transform scale-105' : ''
                    }`}>
                      <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 ${
                        hoveredEvent === event.id 
                          ? 'shadow-2xl shadow-primary-500/10 border-primary-200' 
                          : 'hover:shadow-xl'
                      }`}>
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold mb-2 transition-all duration-300 ${
                          hoveredEvent === event.id
                            ? 'bg-gradient-to-r from-primary-500 to-primary-400 text-white'
                            : 'bg-gradient-to-r from-primary-100 to-primary-100 text-primary-700'
                        }`}>
                          {event.year}
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
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

        {/* Bottom CTA Section */}
        <div className={`text-center mt-8 lg:mt-12 transition-all duration-1000 delay-1000 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-50 to-primary-50 rounded-3xl p-6 lg:p-8 border border-primary-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
              Ready to be part of our story?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Visit our farm and experience the difference that four decades of passionate farming makes.
            </p>
            <a
              href="#visit-us"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span>Plan Your Visit</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;