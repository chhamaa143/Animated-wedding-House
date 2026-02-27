import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  Star,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: id,
    name: "Royal Gold Foil Wedding Card",
    price: "₹2,499",
    description:
      "Elegant gold foil printed wedding card with traditional motifs. Perfect for Indian weddings.",
    rating: 4.8,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    details: {
      size: "5x7 inches",
      paper: "Premium Matte 350 GSM",
      printing: "Gold Foil + Emboss",
      quantity: "100 pieces",
      delivery: "5-7 business days",
    },
  };

  return (
    <div className="pt-20">
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-maroon hover:text-white"
                  onClick={() =>
                    setSelectedImage((prev) => Math.max(0, prev - 1))
                  }
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-maroon hover:text-white"
                  onClick={() =>
                    setSelectedImage((prev) =>
                      Math.min(product.images.length - 1, prev + 1),
                    )
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setSelectedImage(index)}
                    className={`h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === index ? "border-gold" : "border-transparent"}`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-cinzel font-bold text-maroon mb-4">
                {product.name}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="w-5 h-5 text-gold fill-current" />
                  <span className="ml-1 font-bold">{product.rating}</span>
                </div>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-3xl font-bold text-gold mb-6">
                {product.price}
              </p>

              <p className="text-gray-700 mb-8">{product.description}</p>

              {/* Details */}
              <div className="bg-cream p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-4">Product Details</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Size:</span>{" "}
                    {product.details.size}
                  </li>
                  <li>
                    <span className="font-medium">Paper:</span>{" "}
                    {product.details.paper}
                  </li>
                  <li>
                    <span className="font-medium">Printing:</span>{" "}
                    {product.details.printing}
                  </li>
                  <li>
                    <span className="font-medium">Quantity:</span>{" "}
                    {product.details.quantity}
                  </li>
                  <li>
                    <span className="font-medium">Delivery:</span>{" "}
                    {product.details.delivery}
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 bg-maroon text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Request Quote
                </button>
                <a
                  href="https://wa.me/918120461118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
