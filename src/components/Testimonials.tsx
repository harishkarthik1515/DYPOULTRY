import React, { useState, useEffect } from 'react';
import { useInView } from '../utils/scrollAnimation';
import { testimonials } from '../data/farmData';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!sectionVisible) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [sectionVisible]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="h-screen flex items-center py-4 md:py-6 pt-16 md:pt-20 relative overflow-hidden"
      style={{ backgroundColor: '#faf5e9' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-primary-200 rounded-full opacity-20 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary-200 rounded-full opacity-25 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-1">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Testimonials</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-xl md:text-2xl lg:text-3xl font-bold text-primary-700 mb-2 md:mb-3 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            What Our Customers Say
          </h2>
          <p className={`text-sm md:text-base text-primary-700 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Here's what our customers say about DY Poultry Farms.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex overflow-hidden relative h-[200px] md:h-[220px]">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-1000 flex flex-col md:flex-row items-center gap-8 ${
                  activeTestimonial === index 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < activeTestimonial 
                      ? 'opacity-0 -translate-x-full z-0' 
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="md:w-1/3 mb-3 md:mb-0">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mx-auto border-2 md:border-3 border-primary-200 shadow-md">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-primary-600 text-white p-1 rounded-full">
                      <Quote size={8} className="md:w-3 md:h-3" />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-lg shadow-soft relative border border-primary-200">
                  <div className="absolute top-2 left-2 opacity-10">
                    <Quote size={16} className="md:w-6 md:h-6 text-primary-700" />
                  </div>
                  <p className="text-xs md:text-sm italic text-primary-700 mb-2 md:mb-3 relative z-10 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-bold text-primary-700 text-xs">{testimonial.name}</div>
                  <div className="text-primary-600 text-xs md:text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-3 md:mt-4 space-x-1">
            {testimonials.slice(0, 2).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-primary-600 w-4' : 'bg-primary-200 hover:bg-primary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;