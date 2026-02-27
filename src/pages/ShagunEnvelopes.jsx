import React from 'react';
import { Link } from 'react-router-dom';

const ShagunEnvelopes = () => {
  const categories = [
    { name: 'Box Envelope', image: 'https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹499' },
    { name: 'Pocket Size Envelope', image: 'https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹299' },
    { name: 'Regular Envelope', image: 'https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹199' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-maroon text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">Shagun Envelopes</h1>
          <p className="text-xl opacity-90">Beautiful envelopes for your blessings</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <Link key={index} to={`/shagunenvelope/${cat.name.toLowerCase().replace(/ /g, '-')}`} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                    <p className="text-gold font-bold">{cat.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShagunEnvelopes;