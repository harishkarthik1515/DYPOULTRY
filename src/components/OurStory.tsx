import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Custom hook for scroll animations
const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  React.useEffect(() => {
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
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const whyChooseUsCards = [
    {
      id: 1,
      title: "Poultry Wellness",
      description: "Happy, healthy birds raised in clean, climate-controlled EC poultry houses—where comfort, care, and modern farming go hand in hand."
    },
    {
      id: 2,
      title: "Humane Practices",
      description: "Rooted in ethical values, our farming practices are humane and welfare-focused—ensuring every bird is treated with care, dignity, and respect."
    },
    {
      id: 3,
      title: "Fresh & Safe",
      description: "Premium-quality chicken, hygienically processed with zero compromise on freshness—delivered clean, safe, and full of natural taste."
    },
    {
      id: 4,
      title: "Team Ethos",
      description: "Driven by care and trust, our dedicated team is committed to responsible farming and bringing you quality you can believe in."
    }
  ];
  
  return (
    <>
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          height: 200px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
      
      <section
        id="our-story"
        ref={sectionRef}
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: '#faf5e9' }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 left-5 w-48 h-48 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-5 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
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
              className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
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
          </div>

          {/* Main Story Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-primary-200 transition-all duration-1000 delay-300 ${
              sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="font-bold text-primary-600">Established in 2024</span>, we operate modern farms with a capacity of 1.25 lakh birds and are currently 
                  expanding with a new facility to house an additional 1 lakh birds.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our focus on <span className="font-semibold text-primary-600">biosecurity and hygiene</span> is backed by state-of-the-art infrastructure and a dedicated team 
                  driven by care and precision. We believe that healthy birds lead to healthy meals, and we raise them with 
                  that purpose in mind.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our farms are equipped with <span className="font-semibold text-primary-600">fully automated Environment Control (EC) systems</span> that regulate 
                  temperature, humidity, airflow, and lighting throughout the day. This ensures optimal living conditions 
                  tailored to each stage of bird growth, reduces stress, boosts immunity, and supports overall health and 
                  performance.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Within this well-managed environment, our birds are <span className="font-semibold text-primary-600">free to roam, stay active, and express 
                  natural behaviors</span>—keeping them happy, healthy, and thriving.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section with Flip Cards */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hover over the cards below to discover what makes us different
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUsCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`flip-card transition-all duration-700 delay-${500 + index * 100} ${
                    sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                  } ${flippedCard === card.id ? 'flipped' : ''}`}
                  onMouseEnter={() => setFlippedCard(card.id)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  <div className="flip-card-inner">
                    {/* Front of card */}
                    <div className="flip-card-front bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white shadow-xl relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8"></div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30 shadow-lg">
                          <span className="text-3xl">✅</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2">{card.title}</h4>
                        <div className="w-12 h-0.5 bg-white/50 mx-auto"></div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="flip-card-back bg-white shadow-lg border border-primary-200">
                      <div className="text-center">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section Placeholder */}
          <div className={`bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border border-primary-200 transition-all duration-1000 delay-900 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                From Our Founder
              </h3>
              <p className="text-lg text-gray-600 mb-6 italic">
                "Our journey began with a simple vision: to provide families with the highest quality, 
                ethically-raised poultry while respecting both our animals and our environment."
              </p>
              <div className="bg-white/60 rounded-xl p-6 border border-primary-200">
                <h4 className="font-bold text-primary-700 mb-2">Future Goals</h4>
                <p className="text-gray-700">
                  We're committed to expanding our sustainable farming practices, implementing cutting-edge 
                  technology for animal welfare, and becoming the region's leading example of ethical poultry farming.
                </p>
              </div>
            </div>
          </div>
          <div className={`bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 shadow-lg text-white text-center transition-all duration-700 delay-1100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            <div className="max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Explore More</h3>
              <p className="text-lg text-white/90 mb-8">
                Discover our farm facilities and hear what our customers have to say about our commitment to quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleNavClick('#meet-the-farm')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-medium rounded-lg transition-all duration-300 hover:bg-primary-50 transform hover:scale-105"
                >
                  Meet the Farm
                </button>
                <button
                  onClick={() => handleNavClick('#testimonials')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 transform hover:scale-105"
                >
                  Customer Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;