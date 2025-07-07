import React from 'react';
import { useInView } from '../utils/scrollAnimation';
import { Sun, Heart, Recycle, Leaf } from 'lucide-react';

const Sustainability: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();

  const sustainabilityAreas = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Welfare",
      description: "Animal welfare isn't just a standard—it's a responsibility we take seriously. We place the well-being of our birds at the heart of everything we do. Our farms follow rigorous welfare standards, supported by regular internal and third-party audits to ensure ethical and responsible care. Each bird has continuous access to clean water and high-quality, locally produced feed designed to support healthy growth."
    },
    {
      id: 2,
      icon: <Sun className="w-8 h-8" />,
      title: "Powered by the Sun",
      description: "Our move into solar energy is rooted in purpose—to be part of the solution to the planet's growing environmental and energy needs. By tapping into the power of the sun, we're actively contributing to India's clean energy mission, cutting down emissions, and building a greener future. Today, our solar farms generate 2 MW of clean, renewable power, helping drive the transition toward a low-carbon, energy-secure tomorrow."
    },
    {
      id: 3,
      icon: <Recycle className="w-8 h-8" />,
      title: "Waste Management",
      description: "In line with our commitment to responsible farming, we follow a closed-loop waste management system that reflects both sustainability and environmental stewardship. Poultry litter from our broiler farms is carefully processed and utilized as a natural fertilizer for our mango orchards and dragon fruit plantations."
    }
  ];

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="py-20 relative"
      style={{ backgroundColor: '#faf5e9' }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Sustainability</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-6 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Sustainability & Ethics
          </h2>
          
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-primary-200 mb-12 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg md:text-xl text-primary-700 leading-relaxed italic">
              "To us, sustainability is about responsibly managing our land, water, and feed, while upholding and 
              advocating for the humane care of our most important responsibility — our chickens."
            </p>
          </div>
        </div>

        {/* Main Sustainability Areas */}
        <div className="space-y-12 mb-16">
          {sustainabilityAreas.map((area, index) => (
            <div
              key={area.id}
              className={`transition-all duration-700 delay-${300 + index * 200} ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-primary-200 transition-all duration-300 hover:shadow-xl ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } md:flex items-center gap-8`}>
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      {area.icon}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-700">
                      {area.title}
                    </h3>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solar Energy Highlight */}
        <div className={`bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-yellow-200 mb-12 transition-all duration-700 delay-900 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Sun className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Guided by Care
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              This isn't just an initiative—it's a reflection of our values, a commitment to sustainability, and a way of 
              giving back to the environment that supports us.
            </p>
            <div className="bg-white/60 rounded-xl p-6 border border-yellow-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">2 MW</div>
              <div className="text-gray-700 font-medium">Clean Renewable Power Generated</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`bg-primary-600 rounded-2xl p-8 md:p-12 shadow-lg text-white text-center transition-all duration-700 delay-1000 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Our Commitment to Tomorrow</h3>
            <p className="text-lg text-white/90 mb-8">
              Every decision we make today shapes the future of farming. Join us in creating a more sustainable, 
              ethical, and responsible approach to poultry farming.
            </p>
            <a
              href="#visit-us"
              className="inline-block px-8 py-4 bg-white text-primary-700 font-medium rounded-full transition-all duration-300 hover:bg-primary-50 transform hover:scale-105"
            >
              Experience Our Farm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;