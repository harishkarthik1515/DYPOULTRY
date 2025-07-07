import React, { useState } from 'react';
import { useInView } from '../utils/scrollAnimation';
import { Heart, Star, Award, Users, Sparkles, ArrowRight } from 'lucide-react';

const OurValues: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "Wholesome Chicken, Raised Right",
      description: "Every aspect of our farming reflects our commitment to quality and care. From the moment our chicks arrive to the day they reach your table, we ensure the highest standards of welfare and nutrition.",
      features: ["Premium feed quality", "Spacious living conditions", "Regular health monitoring", "Stress-free environment"]
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Love in Every Feather. Freshness in Every Bite",
      description: "Our passion for ethical farming translates to exceptional taste and nutrition. Each bird receives individual attention and care, resulting in superior quality meat that you can taste.",
      features: ["Hand-selected quality", "Farm-to-table freshness", "Rich flavor profile", "Optimal nutrition"]
    }
  ];

  const visionPoints = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Happy Chickens",
      description: "Creating an environment where our birds can express natural behaviors and live stress-free lives."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Healthy Practices",
      description: "Implementing the highest standards of hygiene, nutrition, and veterinary care."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Wholesome Products",
      description: "Delivering premium quality chicken that families can trust and enjoy with confidence."
    }
  ];

  return (
    <section
      id="our-values"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#faf5e9' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className={`mb-6 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-sm">Our Values & Vision</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>

          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${
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
          
          <p className={`text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            At DY Poultry Farms, our values guide every decision we make. We believe that when you treat animals with respect and care, it shows in the quality of the product and the satisfaction of our customers.
          </p>
        </div>

        {/* Values Cards Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`group transition-all duration-1000 delay-${300 + index * 200} ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCard(value.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-primary-200 transition-all duration-500 ${
                hoveredCard === value.id ? 'shadow-2xl shadow-primary-500/10 scale-105 border-primary-300' : 'hover:shadow-xl'
              }`}>
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === value.id 
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white scale-110' 
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {value.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/5 to-primary-600/5 opacity-0 transition-opacity duration-500 ${
                  hoveredCard === value.id ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Breakdown Section */}
        <div className={`transition-all duration-1000 delay-700 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Three Pillars
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything we do is built on these fundamental principles that ensure the best outcomes for our chickens, our customers, and our community.
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
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary-200 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h4 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
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

        {/* Call to Action Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-12 border border-primary-200">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Experience the Difference
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Taste the quality that comes from chickens raised with love, care, and the highest ethical standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#our-story"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
              >
                <span>Learn Our Story</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#visit-us"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary-600 text-primary-700 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span>Visit Our Farm</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;