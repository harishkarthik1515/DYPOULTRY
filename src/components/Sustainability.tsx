import React from 'react';
import { useInView } from '../utils/scrollAnimation';
import { ethicalPractices } from '../data/farmData';
import { Bird, Wheat, Home, Leaf } from 'lucide-react';

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
      className="min-h-screen flex items-center py-8 relative"
      style={{ backgroundColor: '#faf5e9' }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Sustainability</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Sustainability & Ethics
          </h2>
          <p className={`text-base md:text-lg text-primary-700 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Our commitment to sustainable and ethical practices is at the heart of everything we do.
            We believe that healthy animals, healthy land, and healthy communities go hand in hand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {ethicalPractices.map((practice, index) => (
            <div
              key={practice.id}
              className={`bg-white rounded-lg p-4 lg:p-6 shadow-soft transition-all duration-700 hover:shadow-md hover:translate-y-[-5px] ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-3 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary-200 flex items-center justify-center">
                {getIcon(practice.icon)}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-primary-700 mb-2">{practice.title}</h3>
              <p className="text-sm lg:text-base text-primary-700 leading-relaxed">{practice.description}</p>
            </div>
          ))}
        </div>

        <div 
          className={`bg-primary-600 rounded-lg p-6 lg:p-8 shadow-lg text-white transition-all duration-700 delay-600 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-2/3 mb-4 lg:mb-0">
              <h3 className="font-serif text-xl lg:text-2xl font-bold mb-2">Our Sustainability Pledge</h3>
              <p className="text-sm lg:text-base text-white/90">
                We're committed to carbon-neutral farming by 2030, with ongoing initiatives in 
                renewable energy, water conservation, and regenerative agriculture.
              </p>
            </div>
            <a
              href="#visit-us"
              className="inline-block px-4 lg:px-6 py-2 lg:py-3 bg-white text-primary-700 font-medium rounded-full transition-all duration-300 hover:bg-primary-50 transform hover:scale-105 text-sm lg:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;