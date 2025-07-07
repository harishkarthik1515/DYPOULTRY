import React, { useState, useEffect } from 'react';
import { useInView } from '../utils/scrollAnimation';
import { farmImages } from '../data/farmData';
import { ChevronLeft, ChevronRight, Play, Pause, Eye, Heart, Star } from 'lucide-react';

const MeetTheFarm: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [activeImage, setActiveImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(farmImages.length).fill(false));

  // Auto-rotate images
  useEffect(() => {
    if (!sectionVisible || !isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % farmImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [sectionVisible, isPlaying]);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % farmImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + farmImages.length) % farmImages.length);
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <section
      id="meet-the-farm"
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: '#faf5e9' }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
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
            Take a visual tour of our farm, where happy chickens roam freely in natural environments.
          </p>
        </div>

        {/* Modern Image Slider */}
        <div className="mb-16">
          <div 
            className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
              sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 scale-95'
            }`}
          >
            {/* Main Slider Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-primary-200">
              {/* Slider Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-primary-100 border-b border-primary-200">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-primary-700 font-medium text-sm">Farm Gallery</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 bg-white rounded-lg hover:bg-primary-50 transition-colors duration-200 border border-primary-200"
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-primary-600" />
                    ) : (
                      <Play className="w-4 h-4 text-primary-600" />
                    )}
                  </button>
                  <div className="text-primary-600 text-sm font-medium">
                    {activeImage + 1} / {farmImages.length}
                  </div>
                </div>
              </div>

              {/* Image Display Area */}
              <div className="relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
                {farmImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      activeImage === index 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-105 z-0'
                    }`}
                  >
                    {/* Loading Skeleton */}
                    {!imageLoaded[index] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-100 via-primary-50 to-primary-100 animate-pulse"></div>
                    )}
                    
                    <img
                      src={image}
                      alt={`Farm scene ${index + 1}`}
                      className="w-full h-full object-cover"
                      onLoad={() => handleImageLoad(index)}
                      style={{
                        filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                      }}
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 backdrop-blur-sm border border-white/50"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 backdrop-blur-sm border border-white/50"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-4 h-4 text-primary-600" />
                    <span className="text-primary-700 font-medium text-sm">
                      Farm Life in Action
                    </span>
                  </div>
                </div>
              </div>

              {/* Modern Thumbnail Navigation */}
              <div className="p-4 bg-gradient-to-r from-primary-50 to-primary-100">
                <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                  {farmImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                        activeImage === index 
                          ? 'border-primary-600 scale-110 shadow-lg' 
                          : 'border-transparent hover:border-primary-300 hover:scale-105'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {activeImage === index && (
                        <div className="absolute inset-0 bg-primary-600/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Farm Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Free-Range Living",
              description: "Our chickens spend their days outside in spacious pastures with natural shelter and protection.",
              color: "from-red-500 to-pink-600"
            },
            {
              icon: <Star className="w-6 h-6" />,
              title: "Ethical Treatment",
              description: "We follow the highest standards of animal welfare, ensuring our birds live stress-free, natural lives.",
              color: "from-yellow-500 to-orange-600"
            },
            {
              icon: <Eye className="w-6 h-6" />,
              title: "Sustainable Practices",
              description: "Our farm uses solar energy, rainwater collection, and organic composting to minimize environmental impact.",
              color: "from-green-500 to-emerald-600"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg border border-primary-200 transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-primary-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-700 delay-900 ${
          sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-4">Experience Our Farm</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Ready to see where your food comes from? Book a tour and witness our commitment to ethical farming firsthand.
            </p>
            <a
              href="#visit-us"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Schedule Your Visit</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFarm;