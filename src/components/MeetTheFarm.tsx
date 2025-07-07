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
      className="py-12 relative overflow-hidden"
      style={{ backgroundColor: '#faf5e9' }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Compact Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className={`mb-3 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
              <span className="text-primary-600 font-semibold tracking-widest uppercase text-xs">Farm Tour</span>
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Meet the Farm
          </h2>
          <p className={`text-base md:text-lg text-primary-700 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Take a visual tour of our farm, where happy chickens roam freely.
          </p>
        </div>

        {/* Compact Modern Image Slider */}
        <div className="mb-10">
          <div 
            className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
              sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 scale-95'
            }`}
          >
            {/* Main Slider Container - More Compact */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-200">
              {/* Compact Slider Header */}
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-50 to-primary-100 border-b border-primary-200">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-primary-700 font-medium text-xs">Farm Gallery</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 bg-white rounded-lg hover:bg-primary-50 transition-colors duration-200 border border-primary-200"
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? (
                      <Pause className="w-3 h-3 text-primary-600" />
                    ) : (
                      <Play className="w-3 h-3 text-primary-600" />
                    )}
                  </button>
                  <div className="text-primary-600 text-xs font-medium">
                    {activeImage + 1}/{farmImages.length}
                  </div>
                </div>
              </div>

              {/* Compact Image Display Area */}
              <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden">
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
                
                {/* Compact Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary-700 p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 backdrop-blur-sm border border-white/50"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary-700 p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 backdrop-blur-sm border border-white/50"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
                
                {/* Compact Image Info Overlay */}
                <div className="absolute bottom-2 left-2 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-white/50 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-3 h-3 text-primary-600" />
                    <span className="text-primary-700 font-medium text-xs">
                      Farm Life
                    </span>
                  </div>
                </div>
              </div>

              {/* Compact Thumbnail Navigation */}
              <div className="p-2 bg-gradient-to-r from-primary-50 to-primary-100">
                <div className="flex justify-center space-x-1 overflow-x-auto">
                  {farmImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative flex-shrink-0 w-12 h-8 rounded-md overflow-hidden transition-all duration-300 border ${
                        activeImage === index 
                          ? 'border-primary-600 scale-110 shadow-md' 
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
        
        {/* Compact Farm Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: <Heart className="w-5 h-5" />,
              title: "Free-Range Living",
              description: "Spacious pastures with natural shelter and protection.",
              color: "from-red-500 to-pink-600"
            },
            {
              icon: <Star className="w-5 h-5" />,
              title: "Ethical Treatment",
              description: "Highest standards ensuring stress-free, natural lives.",
              color: "from-yellow-500 to-orange-600"
            },
            {
              icon: <Eye className="w-5 h-5" />,
              title: "Sustainable Practices",
              description: "Solar energy and organic composting systems.",
              color: "from-green-500 to-emerald-600"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 shadow-lg border border-primary-200 transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-primary-700 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-primary-700 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Compact Call to Action */}
        
        
      </div>
    </section>
  );
};

export default MeetTheFarm;