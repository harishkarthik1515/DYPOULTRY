import React, { useState, useEffect } from 'react';
import { useInView } from '../utils/scrollAnimation';
import { farmImages } from '../data/farmData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MeetTheFarm: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [activeImage, setActiveImage] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    if (!sectionVisible) return;
    
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % farmImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [sectionVisible]);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % farmImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + farmImages.length) % farmImages.length);
  };

  return (
    <section
      id="meet-the-farm"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#faf5e9' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 2.828 17.272 15.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.828V0h.284zM0 5.657l25.456 25.456-1.414 1.414L0 8.485v-2.83zm0 5.657l22.627 22.627-1.414 1.414L0 14.14v-2.83zm0 5.657l19.8 19.8-1.415 1.413L0 19.8v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.456v-2.83zM0 28l14.142 14.142-1.414 1.414L0 31.113v-2.83zM0 33.656l11.314 11.314-1.414 1.414L0 36.77v-2.83zm0 5.658l8.485 8.485-1.414 1.414L0 42.425v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 48.083v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.74v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.657 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.828V0h-.284zM60 5.657L34.544 31.113l1.414 1.414L60 8.485v-2.83zm0 5.657L37.373 33.97l1.414 1.414L60 14.14v-2.83zm0 5.657L40.2 39.8l1.415 1.413L60 19.8v-2.83zm0 5.657L43.03 45.97l1.414 1.415L60 25.456v-2.83zM60 28L45.858 42.142l1.414 1.414L60 31.113v-2.83zM60 33.656L48.686 44.97l1.414 1.414L60 36.77v-2.83zm0 5.658l-8.485 8.485 1.414 1.414L60 42.425v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 48.083v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.74v-2.83zM39.9 16.385l1.414-1.414L30 3.657 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 11.485l7.07 7.07z' fill='%23a67c52' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')" 
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Farm Tour</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-6 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Meet the Farm
          </h2>
          <p className={`text-lg md:text-xl text-primary-700 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Take a visual tour of our farm, where happy chickens roam freely in natural environments, 
            with access to fresh air, clean water, and organic feed.
          </p>
        </div>

        {/* Image slider */}
        <div className="mb-16">
          <div 
            className={`relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ${
              sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative aspect-video">
              {farmImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    activeImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Farm scene ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary-700 p-3 rounded-full transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary-700 p-3 rounded-full transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {farmImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeImage === index ? 'bg-primary-600 w-6' : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Facts about the farm */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Free-Range Living",
              description: "Our chickens spend their days outside in spacious pastures with natural shelter and protection."
            },
            {
              title: "Ethical Treatment",
              description: "We follow the highest standards of animal welfare, ensuring our birds live stress-free, natural lives."
            },
            {
              title: "Sustainable Practices",
              description: "Our farm uses solar energy, rainwater collection, and organic composting to minimize environmental impact."
            }
          ].map((fact, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-700 hover:shadow-xl ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-primary-700 mb-4">{fact.title}</h3>
              <p className="text-primary-700 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`text-center transition-all duration-700 delay-900 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="#visit-us"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-medium rounded-full transition-all duration-300 hover:bg-primary-700 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Visit Our Farm
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFarm;