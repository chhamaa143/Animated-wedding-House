import React, { useEffect, useState } from 'react';
import { 
  Heart, Users, Award, Star, Crown, Diamond, Sparkles, 
  Quote, ChevronRight, Calendar, MapPin, Phone, Mail, 
  Instagram, Facebook, Twitter, Linkedin, CheckCircle, 
  TrendingUp, Shield, Truck, Clock, Palette, Printer, Package, Zap 
} from 'lucide-react';

const About = () => {
  const [counterStarted, setCounterStarted] = useState(false);
  const [counters, setCounters] = useState({
    couples: 0,
    designs: 0,
    cities: 0,
    rating: 0
  });

  // Counter animation
  useEffect(() => {
    const handleCounterScroll = () => {
      const counterSection = document.querySelector('.counter-section');
      if (counterSection) {
        const rect = counterSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !counterStarted) {
          setCounterStarted(true);
          
          const targets = { couples: 5000, designs: 1000, cities: 15, rating: 4.9 };
          const duration = 2000;
          const stepTime = 20;
          
          Object.keys(targets).forEach(key => {
            let start = 0;
            const target = targets[key];
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounters(prev => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
              }
            }, stepTime);
          });
        }
      }
    };

    window.addEventListener('scroll', handleCounterScroll);
    handleCounterScroll();
    return () => window.removeEventListener('scroll', handleCounterScroll);
  }, [counterStarted]);

  const milestones = [
    { year: "2010", title: "The Beginning", description: "Started our journey with a small studio in Indore" },
    { year: "2015", title: "Expansion", description: "Opened our first retail store and expanded team" },
    { year: "2018", title: "Digital Presence", description: "Launched online platform for pan-India reach" },
    { year: "2023", title: "Milestone", description: "Served 5000+ happy couples across India" }
  ];

  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, title: "Best Wedding Card Designer 2023", org: "India Wedding Awards" },
    { icon: <Award className="w-6 h-6" />, title: "Excellence in Craftsmanship", org: "National Handicraft Council" },
    { icon: <Star className="w-6 h-6" />, title: "Customer Choice Award", org: "WeddingSutra" }
  ];

  return (
    <div className="w-full overflow-x-hidden" style={{ backgroundColor: '#EFE5E7' }}>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#532D2A]/80 via-[#532D2A]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#532D2A]/60 via-transparent to-transparent z-10" />
        
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="About Wedding House"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20">
            <Crown className="w-16 h-16" style={{ color: '#B392A4' }} />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <Diamond className="w-12 h-12" style={{ color: '#B392A4' }} />
          </div>
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 backdrop-blur-sm rounded-full mb-4" style={{ backgroundColor: '#B392A420' }}>
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#B392A4' }}>Wedding House</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Our Story
            </h1>
            <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #B392A4, #FFFFFF)' }} />
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Crafting timeless memories since 2010
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: '#EFE5E7' }}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#B392A420' }}>
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#B392A4' }}>Our Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: '#532D2A' }}>
                Wedding House: <br />
                <span style={{ color: '#B392A4' }}>Union of Hearts</span>
              </h2>
              <div className="w-20 h-0.5 mb-6" style={{ background: 'linear-gradient(to right, #B392A4, #532D2A)' }} />
              <p className="text-base sm:text-lg mb-4 leading-relaxed" style={{ color: '#532D2A' }}>
                Wedding House was born from a passion for beautiful design and a deep love for Indian weddings. 
                We understand that your wedding day is one of the most important days of your life - every detail matters, 
                especially the first impression your guests receive.
              </p>
              <p className="text-base sm:text-lg mb-6 leading-relaxed" style={{ color: '#532D2A' }}>
                Since 2010, we've helped thousands of couples create stunning wedding invitations that reflect 
                their unique love story. From traditional Farman cards to modern minimalist designs, our 
                collection spans every style and tradition across India.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: '#B392A4' }} />
                  <span className="text-sm" style={{ color: '#532D2A' }}>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: '#B392A4' }} />
                  <span className="text-sm" style={{ color: '#532D2A' }}>Custom Designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: '#B392A4' }} />
                  <span className="text-sm" style={{ color: '#532D2A' }}>Pan India Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Wedding House Studio"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B392A4' }}>
                    <Heart className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#532D2A' }}>5000+</div>
                    <div className="text-xs text-gray-600">Happy Couples</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1 rounded-full mb-3" style={{ backgroundColor: '#B392A420' }}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#B392A4' }}>Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#532D2A' }}>
              Milestones
            </h2>
            <div className="w-20 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(to right, #B392A4, #532D2A)' }} />
            <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
              Celebrating years of excellence in wedding stationery
            </p>
          </div>

          <div className="relative">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8 mb-12">
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:order-last'}`}>
                    <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: '#EFE5E7' }}>
                      <div className="text-3xl font-bold mb-2" style={{ color: '#B392A4' }}>{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#532D2A' }}>{milestone.title}</h3>
                      <p style={{ color: '#532D2A' }}>{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B392A4' }}>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#532D2A' }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 sm:py-20 counter-section relative overflow-hidden" style={{ backgroundColor: '#532D2A' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: '#B392A4' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#EFE5E7' }} />
        </div>
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center text-white">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                {counters.couples.toLocaleString()}+
              </div>
              <div className="text-sm sm:text-base opacity-90">Happy Couples</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                {counters.designs.toLocaleString()}+
              </div>
              <div className="text-sm sm:text-base opacity-90">Designs</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                {counters.cities}+
              </div>
              <div className="text-sm sm:text-base opacity-90">Cities</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                {counters.rating}
              </div>
              <div className="text-sm sm:text-base opacity-90 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1 rounded-full mb-3" style={{ backgroundColor: '#B392A420' }}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#B392A4' }}>Core Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: '#532D2A' }}>
              What Drives Us
            </h2>
            <div className="w-20 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(to right, #B392A4, #532D2A)' }} />
            <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
              Our commitment to excellence in every aspect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Heart className="w-10 h-10" />, title: "Passion", desc: "We pour our heart into every design" },
              { icon: <Award className="w-10 h-10" />, title: "Quality", desc: "Premium materials and printing" },
              { icon: <Users className="w-10 h-10" />, title: "Tradition", desc: "Respecting Indian wedding customs" },
              { icon: <Sparkles className="w-10 h-10" />, title: "Innovation", desc: "Modern designs with traditional touch" }
            ].map((value, index) => (
              <div key={index} className="group relative p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center overflow-hidden" style={{ backgroundColor: '#EFE5E7' }}>
                <div className="inline-block p-4 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#B392A4' }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#532D2A' }}>{value.title}</h3>
                <p style={{ color: '#532D2A' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#EFE5E7' }}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full mb-3" style={{ backgroundColor: '#B392A420' }}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#B392A4' }}>Recognitions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#532D2A' }}>
              Awards & Achievements
            </h2>
            <div className="w-20 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(to right, #B392A4, #532D2A)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#B392A4' }}>
                  {achievement.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#532D2A' }}>{achievement.title}</h3>
                <p className="text-sm text-gray-500">{achievement.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: '#532D2A' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: '#B392A4' }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: '#EFE5E7' }} />
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <Quote className="w-12 h-12 mx-auto mb-6 opacity-80" style={{ color: '#B392A4' }} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Wedding Journey?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group" style={{ backgroundColor: '#B392A4' }}>
              <span>Book Consultation</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#532D2A] transition-all duration-300">
              View Collections
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Trophy icon component
const Trophy = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M12 15v7" />
    <path d="M12 15a5 5 0 0 0 5-5v-3H7v3a5 5 0 0 0 5 5Z" />
  </svg>
);

export default About;