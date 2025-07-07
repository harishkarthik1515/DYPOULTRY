import React from 'react';
import { useInView } from '../utils/scrollAnimation';
import { ethicalPractices } from '../data/farmData';
import { Bird, Wheat, Home, Leaf, ArrowRight } from 'lucide-react';

const Sustainability: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bird':
        return <Bird size={32} className="text-primary-600" />;
      case 'wheat':
        return <Wheat size={32} className="text-primary-500" />;
      case 'home':
        return <Home size={32} className="text-primary-600" />;
      case 'leaf':
        return <Leaf size={32} className="text-primary-500" />;
      default:
        return <Leaf size={32} className="text-primary-500" />;
    }
  };

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="h-screen flex items-center py-4 md:py-6 pt-16 md:pt-20 relative"
      style={{ backgroundColor: '#faf5e9' }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Sustainability</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-3 md:mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Our Ethical Standards
          </h2>
          <p className={`text-sm md:text-base text-primary-700 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            We maintain the highest standards of animal welfare and sustainable farming practices, 
            ensuring every bird receives the care and respect they deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {ethicalPractices.slice(0, 6).map((practice, index) => (
            <div
              key={practice.id}
              className={`bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border border-primary-200 transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-600 text-white rounded-full flex items-center justify-center">
                  {getIcon(practice.icon)}
                </div>
                <h3 className="font-bold text-sm md:text-base text-primary-700">{practice.title}</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{practice.description}</p>
              <div className="mt-2 md:mt-3 flex items-center text-primary-600">
                <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                <span className="text-xs font-medium">Certified & Verified</span>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 md:p-6 border border-primary-200 text-center transition-all duration-700 delay-600 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-lg md:text-xl font-serif font-bold text-gray-800 mb-2 md:mb-3">
            Experience the Difference
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            Taste the quality that comes from chickens raised with love, care, and the highest ethical standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#our-story"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              <span>Learn Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#visit-us"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-primary-600 text-primary-700 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              <span>Visit Our Farm</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;