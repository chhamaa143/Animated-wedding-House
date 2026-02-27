import React from "react";
import { Link } from "react-router-dom";

const WeddingStationery = () => {
  const categories = [
    "Best Door Hanger",
    "Itinerary",
    "Menu Cards",
    "Standees",
    "Sticker",
    "Tent Card",
    "Welcome Board",
    "Bottle Tag",
    "Gratitude Card",
    "Luggage Tag",
    "Post Card",
    "RSVP Card",
    "Thank You Card",
  ];

  return (
    <div className="pt-20">
      <section className="bg-maroon text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Wedding Stationery
          </h1>
          <p className="text-xl opacity-90">
            Complete your wedding ensemble with our premium stationery
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to={`/weddingstationory/${cat.toLowerCase().replace(/ /g, "-")}`}
                className="group relative h-48 overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={`https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={cat}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {cat}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingStationery;
