import React from "react";
import { Link } from "react-router-dom";
import { Gift, Star, Heart } from "lucide-react";

const WeddingHamper = () => {
  const hampers = [
    {
      id: 1,
      name: "Essential Wedding Hamper",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: "5 Items",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Premium Wedding Hamper",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: "8 Items",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Luxury Wedding Hamper",
      price: "₹7,999",
      image:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: "12 Items",
      rating: 4.9,
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-maroon text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Wedding Hampers
          </h1>
          <p className="text-xl opacity-90">
            Curated gift hampers for your special day
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {hampers.map((hamper) => (
              <div
                key={hamper.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-maroon hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{hamper.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gold font-bold">{hamper.price}</span>
                    <span className="text-sm text-gray-500">
                      {hamper.items}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <span className="ml-1 text-sm">{hamper.rating}</span>
                  </div>
                  <Link
                    to={`/product/${hamper.id}`}
                    className="block text-center py-2 bg-maroon text-white rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingHamper;
