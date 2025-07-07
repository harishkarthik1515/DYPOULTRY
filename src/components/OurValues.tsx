import React, { useState } from 'react';
import { useInView } from '../utils/scrollAnimation';
import { Heart, Star, Award, Users, Sparkles, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const OurValues: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      icon: <Sparkles className="w-6 h-6" />,
      title: "Holistic Approach",
      description: "Protecting and enriching land through natural methods, free from chemical or synthetic additives"
    }
  ];

  return (
    <section
      id="our-values"
      ref={sectionRef}
      className="relative overflow-hidden h-screen flex flex-col"
      style={{ backgroundColor: '#faf5e9' }}
    >
      {/* Values Section */}
      <div className="flex-1 flex items-center py-4 pt-16 md:pt-20">
        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Header Section */}
          <div className="text-center mb-4 md:mb-6">
            <div className={`mb-4 transition-all duration-700 ${
              sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-3 mb-1">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
                <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Our Values & Vision</span>
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
              Happy, Healthy, Wholesome Chickens
            </h2>
            
            <p className={`text-sm md:text-base text-gray-700 leading-relaxed max-w-xl mx-auto transition-all duration-700 delay-200 ${
              sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}>
              Our values guide every decision we make in treating animals with respect and care.
            </p>
          </div>

          {/* Values Cards Section */}
          <div className="grid lg:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            {values.map((value, index) => (
              <div
                key={value.id}
                className={`group transition-all duration-1000 delay-${300 + index * 200} ${
                  sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setHoveredCard(value.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border border-primary-200 transition-all duration-500 ${
                  hoveredCard === value.id ? 'shadow-2xl shadow-primary-500/10 scale-105 border-primary-300' : 'hover:shadow-xl'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === value.id 
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white scale-110' 
                        : 'bg-primary-100 text-primary-600'
                    }`}>
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-base md:text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vision Breakdown Section */}
          <div className={`transition-all duration-1000 delay-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-3 md:mb-4">
              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-800 mb-1">
                Our Three Pillars
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-700 delay-${800 + index * 100} ${
                    sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border border-primary-200 transition-all duration-300 hover:shadow-xl">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                      {point.icon}
                    </div>
                    <h4 className="font-bold text-xs md:text-sm text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed hidden md:block">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;