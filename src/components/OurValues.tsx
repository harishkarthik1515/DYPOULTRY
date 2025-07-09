import React, { useState } from 'react';
import { useInView } from '../utils/scrollAnimation';
import { Heart, Star, Award, Users, Sparkles, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const OurValues: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const values = [
    {
      id: 1,
      icon: <Heart className="w-6 h-6" />,
      title: "Wholesome Chicken, Raised Right",
      description: "Every aspect of our farming reflects our commitment to quality and care.",
    },
    {
      id: 2,
      icon: <Sparkles className="w-6 h-6" />,
      title: "Love in Every Feather. Freshness in Every Bite",
      description: "Our passion for ethical farming translates to exceptional taste and nutrition.",
    }
  ];

  const visionPoints = [
    {
      icon: <Star className="w-5 h-5" />,
      title: "Happy Chickens",
      description: "Creating stress-free environments where birds express natural behaviors."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Healthy Practices",
      description: "Implementing highest standards of hygiene, nutrition, and veterinary care."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Wholesome Products",
      description: "Delivering premium quality chicken that families can trust."
    }
  ];

  const ethicalPractices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Raised Cage-free",
      description: "Spacious, well-ventilated, climate-controlled barns with freedom to move and interact naturally",
      image: "https://i.ibb.co/b5h50WL1/Group-390.png"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Free of Added Steroids & Hormones",
      description: "Following Indian government regulations since 2011 - it's the law, and we follow it without compromise",
      image: "https://i.ibb.co/Qv44dNyz/Group-391.png"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Licensed Veterinarian Monitored",
      description: "Every flock cared for by licensed veterinarians with structured healthcare programs",
      image: "https://i.ibb.co/RTqnq4Pt/Group-387.png"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Animal-Welfare Trained Farmers",
      description: "All personnel trained in humane handling and chicken care for stress-free environments",
      image: "https://i.ibb.co/VpSMsFsM/Group-388.png"
    }
  ];

  return (
    <section
      id="our-values"
      ref={sectionRef}
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: '#faf5e9' }}
    >
      {/* Values Section */}
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-4 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Our Values & Vision</span>
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
            Raising Happy, Healthy, Wholesome Chickens for Your Family
          </h2>
          
          <p className={`text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Our values guide every decision we make in treating animals with respect and care.
          </p>
        </div>

        {/* Values Cards Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`group transition-all duration-1000 delay-${300 + index * 200} ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCard(value.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary-200 transition-all duration-500 ${
                hoveredCard === value.id ? 'shadow-2xl shadow-primary-500/10 scale-105 border-primary-300' : 'hover:shadow-xl'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === value.id 
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white scale-110' 
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Breakdown Section */}
        <div className={`transition-all duration-1000 delay-700 mb-16 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Three Pillars
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is built on these fundamental principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 delay-${800 + index * 100} ${
                  sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary-200 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Standards Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 mb-6">
              Our Ethical Standards
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We maintain the highest standards of animal welfare and sustainable farming practices, 
              ensuring every bird receives the care and respect they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethicalPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary-200 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                onClick={() => setSelectedCard(index)}
              >
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center">
                      {practice.icon}
                    </div>
                    <h3 className="font-bold text-sm text-primary-700">{practice.title}</h3>
                  </div>
                  <div className="mb-3">
                    <img 
                      src={practice.image} 
                      alt={practice.title}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center text-primary-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    <span className="text-xs font-medium">Certified & Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedCard !== null && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="relative">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                  >
                    <span className="text-gray-600 text-xl">×</span>
                  </button>

                  {/* Modal content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center">
                        {ethicalPractices[selectedCard].icon}
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-700">
                        {ethicalPractices[selectedCard].title}
                      </h2>
                    </div>

                    <div className="mb-6">
                      <img 
                        src={ethicalPractices[selectedCard].image} 
                        alt={ethicalPractices[selectedCard].title}
                        className="w-full h-auto max-h-96 object-contain rounded-xl shadow-lg mx-auto"
                      />
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        {ethicalPractices[selectedCard].description}
                      </p>
                      <div className="flex items-center text-primary-600 bg-primary-50 p-4 rounded-lg">
                        <CheckCircle className="w-5 h-5 mr-3" />
                        <span className="font-medium">Certified & Verified by Industry Standards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action Section */}
        <div className={`bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 shadow-lg text-white text-center transition-all duration-700 delay-1200 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-lg text-white/90 mb-8">
              See our values in action at our farm and discover why families trust DY Poultry for their quality chicken needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#meet-the-farm');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-medium rounded-full transition-all duration-300 hover:bg-primary-50 transform hover:scale-105"
              >
                Tour Our Farm
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#testimonials');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 transition-all duration-300 hover:bg-white/30 transform hover:scale-105"
              >
                Customer Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;