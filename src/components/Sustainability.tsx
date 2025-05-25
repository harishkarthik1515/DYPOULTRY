import React from 'react';
import { useInView } from '../utils/scrollAnimation';
import { ethicalPractices } from '../data/farmData';
import { Bird, Wheat, Home, Leaf } from 'lucide-react';

const Sustainability: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bird':
        return <Bird size={32} className="text-forest-600" />;
      case 'wheat':
        return <Wheat size={32} className="text-gold-500" />;
      case 'home':
        return <Home size={32} className="text-earth-600" />;
      case 'leaf':
        return <Leaf size={32} className="text-forest-500" />;
      default:
        return <Leaf size={32} className="text-forest-500" />;
    }
  };

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="py-20 relative bg-white"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-cream-200 clip-diagonal"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-cream-200 clip-diagonal-reverse"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`font-serif text-3xl md:text-4xl font-bold text-forest-700 mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Sustainability & Ethics
          </h2>
          <p className={`text-lg text-earth-700 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Our commitment to sustainable and ethical practices is at the heart of everything we do.
            We believe that healthy animals, healthy land, and healthy communities go hand in hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ethicalPractices.map((practice, index) => (
            <div
              key={practice.id}
              className={`bg-white rounded-lg p-6 shadow-soft transition-all duration-700 hover:shadow-md hover:translate-y-[-5px] ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-4 w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center">
                {getIcon(practice.icon)}
              </div>
              <h3 className="text-xl font-bold text-forest-700 mb-2">{practice.title}</h3>
              <p className="text-earth-700">{practice.description}</p>
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 bg-forest-600 rounded-lg p-8 shadow-lg text-white transition-all duration-700 delay-600 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="font-serif text-2xl font-bold mb-2">Our Sustainability Pledge</h3>
              <p className="text-cream-100">
                We're committed to carbon-neutral farming by 2030, with ongoing initiatives in 
                renewable energy, water conservation, and regenerative agriculture.
              </p>
            </div>
            <a
              href="#visit-us"
              className="inline-block px-6 py-3 bg-cream-200 text-forest-700 font-medium rounded-full transition-all duration-300 hover:bg-cream-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 30%);
        }
        .clip-diagonal-reverse {
          clip-path: polygon(0 0, 100% 70%, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default Sustainability;