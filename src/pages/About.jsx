import React from 'react';
import { Heart, Users, Award, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="About"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-5xl font-cinzel font-bold mb-4">Our Story</h1>
          <p className="text-xl">Crafting memories since 2010</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-maroon mb-6">Wedding House: Union of Hearts</h2>
            <p className="text-lg text-gray-700 mb-8">
              Wedding House was born from a passion for beautiful design and a love for Indian weddings. 
              We understand that your wedding day is one of the most important days of your life, and every 
              detail matters - especially the first impression your guests receive.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Since 2010, we've helped thousands of couples create stunning wedding invitations that reflect 
              their unique love story. From traditional Farman cards to modern minimalist designs, our 
              collection spans every style and tradition.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">5000+</div>
                <div className="text-gray-600">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">1000+</div>
                <div className="text-gray-600">Designs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">15+</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">4.9</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-8 gold-border rounded-xl">
              <Heart className="w-12 h-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p className="text-gray-600">We pour our heart into every design</p>
            </div>
            <div className="text-center p-8 gold-border rounded-xl">
              <Award className="w-12 h-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">Premium materials and printing</p>
            </div>
            <div className="text-center p-8 gold-border rounded-xl">
              <Users className="w-12 h-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tradition</h3>
              <p className="text-gray-600">Respecting Indian wedding customs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;