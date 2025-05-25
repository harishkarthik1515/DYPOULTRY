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
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cream-200 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-forest-100 rounded-full opacity-30 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gold-100 rounded-full opacity-40 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`font-serif text-3xl md:text-4xl font-bold text-forest-700 mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            What Our Customers Say
          </h2>
          <p className={`text-lg text-earth-700 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            We're proud to serve our community with the highest quality poultry products.
            Here's what some of our customers have to say about DY Poultry Farms.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex overflow-hidden relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
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
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto border-4 border-cream-200 shadow-md">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-forest-600 text-white p-2 rounded-full">
                      <Quote size={16} />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 bg-cream-100 p-6 md:p-8 rounded-lg shadow-soft relative">
                  <div className="absolute top-4 left-4 opacity-10">
                    <Quote size={48} className="text-forest-700" />
                  </div>
                  <p className="text-lg md:text-xl italic text-earth-700 mb-6 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-bold text-forest-700">{testimonial.name}</div>
                  <div className="text-earth-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-forest-600 w-6' : 'bg-forest-200 hover:bg-forest-300'
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