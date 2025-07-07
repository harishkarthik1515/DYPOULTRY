import React, { useState } from 'react';
import { useInView } from '../utils/scrollAnimation';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const VisitUs: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <section
      id="visit-us"
      ref={sectionRef}
      className="min-h-screen flex items-center py-8 bg-primary-600 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')" 
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <span className="text-white font-semibold tracking-widest uppercase text-xs">Visit Us</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Visit Our Farm
          </h2>
          <p className={`text-base md:text-lg text-white/90 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            We welcome visitors to experience our farm firsthand. Book a tour to learn about our 
            sustainable practices and meet our happy chickens.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className={`transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 animate-slide-in-left' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-primary-700 rounded-lg p-4 lg:p-6 shadow-lg">
              <h3 className="font-serif text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Book a Farm Tour</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-3 mb-4">
                  <p className="text-white text-sm">Thank you! We've received your request and will contact you shortly to confirm your farm tour.</p>
                </div>
              ) : formStatus === 'error' ? (
                <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-3 mb-4">
                  <p className="text-white text-sm">There was an error submitting your request. Please try again or contact us directly.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="name" className="block text-xs lg:text-sm font-medium text-white/80 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-primary-500 border border-primary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-primary-300 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs lg:text-sm font-medium text-white/80 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-primary-500 border border-primary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-primary-300 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="date" className="block text-xs lg:text-sm font-medium text-white/80 mb-1">
                    Preferred Visit Date
                  </label>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-white/80 mr-2" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-3 py-2 bg-primary-500 border border-primary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white text-sm"
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="groupSize" className="block text-xs lg:text-sm font-medium text-white/80 mb-1">
                    Number of Visitors
                  </label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    required
                    className="w-full px-3 py-2 bg-primary-500 border border-primary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white text-sm"
                  >
                    <option value="">Select group size</option>
                    <option value="1-2">1-2 people</option>
                    <option value="3-5">3-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11+">11+ people</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-xs lg:text-sm font-medium text-white/80 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    className="w-full px-3 py-2 bg-primary-500 border border-primary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-primary-300 text-sm"
                    placeholder="Any special requirements or questions?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 lg:py-3 bg-white text-primary-600 font-medium rounded-md transition-all duration-300 hover:bg-primary-50 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 text-sm lg:text-base"
                >
                  Request Tour
                </button>
              </form>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 animate-slide-in-right' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-4 lg:space-y-6">
              <div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Farm Location</h3>
                <div className="bg-primary-700/50 rounded-lg overflow-hidden shadow-lg">
                  {/* Sample Map */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7223015224766!2d-122.41941708441293!3d37.77492977975915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1648176433982!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                  <div className="p-3">
                    <div className="flex items-start mb-3">
                      <MapPin size={16} className="text-white/80 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-white/90 text-sm">
                        123 Rural Route, Farmington<br />
                        Countryside County, CA 95123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Contact & Hours</h3>
                <div className="bg-primary-700/50 rounded-lg p-4 lg:p-6 shadow-lg">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone size={16} className="text-white/80 mr-2 flex-shrink-0" />
                      <p className="text-white/90 text-sm">(555) 123-4567</p>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="text-white/80 mr-2 flex-shrink-0" />
                      <p className="text-white/90 text-sm">info@dypoultry.farm</p>
                    </div>
                    <div className="flex items-start">
                      <Clock size={16} className="text-white/80 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 mb-1 text-sm"><strong>Farm Store Hours:</strong></p>
                        <p className="text-white/90 text-xs">Monday - Friday: 9am - 5pm</p>
                        <p className="text-white/90 text-xs">Saturday: 9am - 3pm</p>
                        <p className="text-white/90 text-xs">Sunday: Closed</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar size={16} className="text-white/80 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 mb-1 text-sm"><strong>Farm Tours:</strong></p>
                        <p className="text-white/90 text-xs">Available Wednesday - Saturday</p>
                        <p className="text-white/90 text-xs">By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;