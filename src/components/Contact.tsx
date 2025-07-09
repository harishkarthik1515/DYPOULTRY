import React from 'react';
import { useInView } from '../utils/scrollAnimation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref: sectionRef, isInView: sectionVisible } = useInView();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-primary-600 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')" 
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`mb-4 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <span className="text-white font-semibold tracking-widest uppercase text-xs">Contact & Hours</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>
          
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-lg md:text-xl text-white/90 transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            Ready to experience the finest quality poultry? Contact us today for fresh, 
            ethically-raised chicken delivered straight from our farm.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 animate-slide-in-left' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-primary-700/50 rounded-xl p-8 shadow-lg backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-bold mb-8 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-white/90 hover:text-white transition-colors duration-200 text-lg"
                    >
                      (555) 123-4567
                    </a>
                    <p className="text-white/70 text-sm mt-1">Call us for orders and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:info@dypoultry.farm" 
                      className="text-white/90 hover:text-white transition-colors duration-200 text-lg"
                    >
                      info@dypoultry.farm
                    </a>
                    <p className="text-white/70 text-sm mt-1">Send us your questions anytime</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-white/90 text-lg">
                      123 Rural Route<br />
                      Farmington, CA 95123
                    </p>
                    <p className="text-white/70 text-sm mt-1">Fresh from our farm to your table</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Additional Info */}
          <div className={`transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 animate-slide-in-right' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-8">
              {/* Operating Hours */}
              <div className="bg-primary-700/50 rounded-xl p-8 shadow-lg backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock size={20} className="text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Operating Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white font-medium">Monday - Friday</span>
                    <span className="text-white/90">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white font-medium">Saturday</span>
                    <span className="text-white/90">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white font-medium">Sunday</span>
                    <span className="text-white/90">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Order Info */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <h4 className="font-bold text-white mb-3 text-lg">Quick Order</h4>
                <p className="text-white/90 mb-4 text-sm leading-relaxed">
                  Call us directly for same-day orders or to check availability. 
                  We recommend ordering 24 hours in advance for the best selection.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center space-x-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-all duration-200 hover:scale-105"
                >
                  <Phone size={16} />
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;