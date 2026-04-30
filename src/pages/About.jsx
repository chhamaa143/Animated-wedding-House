import React, { useEffect, useState } from 'react';
import { Heart, Users, Award, Star, Crown, Diamond, Sparkles, Quote, ChevronRight, Calendar, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, CheckCircle, TrendingUp, Shield, Truck, Clock, Palette, Printer, Package, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counterStarted, setCounterStarted] = useState(false);
  const [counters, setCounters] = useState({
    couples: 0,
    designs: 0,
    cities: 0,
    rating: 0
  });

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "15+ years",
      passion: "Wedding Design"
    },
    {
      name: "Priya Mehta",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "10+ years",
      passion: "Typography"
    },
    {
      name: "Amit Kumar",
      role: "Production Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "12+ years",
      passion: "Quality Control"
    }
  ];

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
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-white via-cream/20 to-white">
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="About Wedding House"
          className="w-full h-full object-cover transform scale-110 animate-slow-zoom"
        />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float opacity-20">
            <Crown className="w-16 h-16 text-gold" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
            <Diamond className="w-12 h-12 text-gold" />
          </div>
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 bg-gold/20 backdrop-blur-sm rounded-full mb-4 animate-fade-in-up">
              <span className="text-gold text-sm font-semibold tracking-wider">Wedding House</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-title">
              Our Story
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-white mx-auto mb-6 animate-width" />
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
              Crafting timeless memories since 2010
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-cream to-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-4">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-maroon mb-6">
                Wedding House: <br />
                <span className="text-gold">Union of Hearts</span>
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mb-6" />
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                Wedding House was born from a passion for beautiful design and a deep love for Indian weddings. 
                We understand that your wedding day is one of the most important days of your life - every detail matters, 
                especially the first impression your guests receive.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Since 2010, we've helped thousands of couples create stunning wedding invitations that reflect 
                their unique love story. From traditional Farman cards to modern minimalist designs, our 
                collection spans every style and tradition across India.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span className="text-sm text-gray-600">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span className="text-sm text-gray-600">Custom Designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span className="text-sm text-gray-600">Pan India Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="relative fade-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Wedding House Studio"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-maroon rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-maroon">5000+</div>
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
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-maroon mb-3">
              Milestones
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4" />
            <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
              Celebrating years of excellence in wedding stationery
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold via-maroon to-gold hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 fade-up`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:order-last'}`}>
                    <div className="bg-gradient-to-br from-cream to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="text-gold font-bold text-3xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-maroon mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold to-maroon rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gold rounded-full" />
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-maroon to-gold counter-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
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

      {/* Values Section - Enhanced */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Core Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-maroon mb-3">
              What Drives Us
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4" />
            <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
              Our commitment to excellence in every aspect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Heart className="w-10 h-10" />, title: "Passion", desc: "We pour our heart into every design", color: "from-rose-500 to-pink-500" },
              { icon: <Award className="w-10 h-10" />, title: "Quality", desc: "Premium materials and printing", color: "from-amber-500 to-orange-500" },
              { icon: <Users className="w-10 h-10" />, title: "Tradition", desc: "Respecting Indian wedding customs", color: "from-purple-500 to-indigo-500" },
              { icon: <Sparkles className="w-10 h-10" />, title: "Innovation", desc: "Modern designs with traditional touch", color: "from-cyan-500 to-blue-500" }
            ].map((value, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-cream to-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className={`inline-block p-4 bg-gradient-to-br ${value.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-maroon mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-maroon/5 to-gold/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Recognitions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-3">
              Awards & Achievements
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-maroon rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-maroon mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-500">{achievement.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-maroon mb-3">
              Meet Our Experts
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4" />
            <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
              Dedicated professionals passionate about your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-gradient-to-br from-cream to-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-maroon mb-1">{member.name}</h3>
                  <p className="text-gold font-semibold text-sm mb-3">{member.role}</p>
                  <div className="flex justify-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{member.passion}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-maroon to-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <Quote className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Wedding Journey?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-maroon rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
              <span>Book Consultation</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-maroon transition-all duration-300">
              View Collections
            </button>
          </div>
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes title-animation {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes width-grow {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes scroll-indicator {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-title {
          animation: title-animation 0.8s ease-out forwards;
        }
        
        .animate-width {
          animation: width-grow 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce-soft 2s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
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