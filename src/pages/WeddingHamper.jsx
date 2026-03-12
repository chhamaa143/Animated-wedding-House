import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Gift,
  Star,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Package,
  Clock,
  Truck,
  Shield,
  Check,
  Share2,
} from "lucide-react";
import Watermark from "../components/Watermark";

const WeddingHamper = () => {
  const [selectedHamper, setSelectedHamper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hampers = [
    {
      id: 1,
      name: "Essential Wedding Hamper",
      price: "₹2,499",
      originalPrice: "₹3,499",
      discount: "28% OFF",
      image: "/products/hamper.png",
      images: [
        "/products/hamper.png",
        "/products/hampers (1).png",
        "/products/hampers (2).png",
        "/products/hampers (4).png",
      ],
      items: "5 Items",
      rating: 4.5,
      reviews: 128,
      description:
        "Perfect for intimate weddings, this essential hamper includes all the basic stationery items needed for your special day. Beautifully packaged and ready to impress.",
      specifications: [
        { label: "Includes", value: "5 Premium Items" },
        { label: "Box Size", value: "12 x 12 x 6 inches" },
        { label: "Material", value: "Premium Cardboard Box" },
        { label: "Color", value: "Gold & Maroon" },
        { label: "Customization", value: "Available" },
      ],
      whatsIncluded: [
        "Wedding Card (50 pieces)",
        "Thank You Cards (50 pieces)",
        "Shagun Envelopes (50 pieces)",
        "Menu Cards (25 pieces)",
        "Return Gifts (25 pieces)",
      ],
      tags: ["Essential", "Basic", "Value Pack"],
      delivery: "5-7 business days",
      popular: false,
      bestseller: false,
      minOrder: 1,
    },
    {
      id: 2,
      name: "Premium Wedding Hamper",
      price: "₹4,999",
      originalPrice: "₹6,999",
      discount: "28% OFF",
      image: "/products/hampers (1).png",
      images: [
        "/products/hampers (1).png",
        "/products/hampers (2).png",
        "/products/hampers (4).png",
        "/products/hampers (8).png",
      ],
      items: "8 Items",
      rating: 4.8,
      reviews: 256,
      description:
        "Our premium hamper offers a complete wedding stationery solution with elegant packaging and high-quality materials. Perfect for medium-sized weddings.",
      specifications: [
        { label: "Includes", value: "8 Premium Items" },
        { label: "Box Size", value: "14 x 14 x 8 inches" },
        { label: "Material", value: "Luxury Rigid Box" },
        { label: "Color", value: "Rose Gold & White" },
        { label: "Customization", value: "Available" },
      ],
      whatsIncluded: [
        "Wedding Card (100 pieces)",
        "Thank You Cards (100 pieces)",
        "Shagun Envelopes (100 pieces)",
        "Menu Cards (50 pieces)",
        "Itinerary Cards (50 pieces)",
        "RSVP Cards (50 pieces)",
        "Return Gifts (50 pieces)",
        "Welcome Sign",
      ],
      tags: ["Premium", "Complete", "Elegant"],
      delivery: "5-7 business days",
      popular: true,
      bestseller: false,
      minOrder: 1,
    },
    {
      id: 3,
      name: "Luxury Wedding Hamper",
      price: "₹7,999",
      originalPrice: "₹9,999",
      discount: "20% OFF",
      image: "/products/hampers (2).png",
      images: [
        "/products/hampers (2).png",
        "/products/hampers (4).png",
        "/products/hampers (8).png",
        "/products/hampers (9).png",
      ],
      items: "12 Items",
      rating: 4.9,
      reviews: 189,
      description:
        "The ultimate luxury experience for your wedding. This premium hamper includes everything you need for a grand celebration with exquisite packaging and attention to detail.",
      specifications: [
        { label: "Includes", value: "12 Luxury Items" },
        { label: "Box Size", value: "16 x 16 x 10 inches" },
        { label: "Material", value: "Wooden Keepsake Box" },
        { label: "Color", value: "Gold & Maroon" },
        { label: "Customization", value: "Available" },
      ],
      whatsIncluded: [
        "Wedding Card (150 pieces)",
        "Thank You Cards (150 pieces)",
        "Shagun Envelopes (150 pieces)",
        "Menu Cards (100 pieces)",
        "Itinerary Cards (100 pieces)",
        "RSVP Cards (100 pieces)",
        "Place Cards (100 pieces)",
        "Welcome Sign",
        "Photo Booth Props",
        "Return Gifts (100 pieces)",
        "Guest Book",
        "Pen Stand",
      ],
      tags: ["Luxury", "Premium", "Complete"],
      delivery: "7-10 business days",
      popular: false,
      bestseller: true,
      minOrder: 1,
    },
    {
      id: 4,
      name: "Essential Wedding Hamper",
      price: "₹2,499",
      originalPrice: "₹3,499",
      discount: "28% OFF",
      image: "/products/hampers (4).png",
      images: [
        "/products/hampers (4).png",
        "/products/hampers (1).png",
        "/products/hampers (2).png",
        "/products/hampers (8).png",
      ],
      items: "5 Items",
      rating: 4.5,
      reviews: 98,
      description:
        "Perfect for intimate weddings, this essential hamper includes all the basic stationery items needed for your special day. Beautifully packaged and ready to impress.",
      specifications: [
        { label: "Includes", value: "5 Premium Items" },
        { label: "Box Size", value: "12 x 12 x 6 inches" },
        { label: "Material", value: "Premium Cardboard Box" },
        { label: "Color", value: "Gold & White" },
        { label: "Customization", value: "Available" },
      ],
      whatsIncluded: [
        "Wedding Card (50 pieces)",
        "Thank You Cards (50 pieces)",
        "Shagun Envelopes (50 pieces)",
        "Menu Cards (25 pieces)",
        "Return Gifts (25 pieces)",
      ],
      tags: ["Essential", "Basic", "Value Pack"],
      delivery: "5-7 business days",
      popular: false,
      bestseller: false,
      minOrder: 1,
    },
    {
      id: 5,
      name: "Premium Wedding Hamper",
      price: "₹4,999",
      originalPrice: "₹6,999",
      discount: "28% OFF",
      image: "/products/hampers (8).png",
      images: [
        "/products/hampers (8).png",
        "/products/hampers (1).png",
        "/products/hampers (2).png",
        "/products/hampers (4).png",
      ],
      items: "8 Items",
      rating: 4.8,
      reviews: 167,
      description:
        "Our premium hamper offers a complete wedding stationery solution with elegant packaging and high-quality materials. Perfect for medium-sized weddings.",
      specifications: [
        { label: "Includes", value: "8 Premium Items" },
        { label: "Box Size", value: "14 x 14 x 8 inches" },
        { label: "Material", value: "Luxury Rigid Box" },
        { label: "Color", value: "Gold & Maroon" },
        { label: "Customization", value: "Available" },
      ],
      whatsIncluded: [
        "Wedding Card (100 pieces)",
        "Thank You Cards (100 pieces)",
        "Shagun Envelopes (100 pieces)",
        "Menu Cards (50 pieces)",
        "Itinerary Cards (50 pieces)",
        "RSVP Cards (50 pieces)",
        "Return Gifts (50 pieces)",
        "Welcome Sign",
      ],
      tags: ["Premium", "Complete", "Elegant"],
      delivery: "5-7 business days",
      popular: true,
      bestseller: false,
      minOrder: 1,
    },
    {
      id: 6,
      name: "Luxury Wedding Hamper",
      price: "₹7,999",
      originalPrice: "₹9,999",
      discount: "20% OFF",
      image: "/products/hampers (9).png",
      images: [
        "/products/hampers (9).png",
        "/products/hampers (2).png",
        "/products/hampers (4).png",
        "/products/hampers (8).png",
      ],
      items: "12 Items",
      rating: 4.9,
      reviews: 203,
      description:
        "The ultimate luxury experience for your wedding. This premium hamper includes everything you need for a grand celebration with exquisite packaging and attention to detail.",
      specifications: [
        { label: "Includes", value: "12 Luxury Items" },
        { label: "Box Size", value: "16 x 16 x 10 inches" },
        { label: "Material", value: "Wooden Keepsake Box" },
        { label: "Color", value: "Gold & Maroon" },
        { label: "Customization", value: "Available" },
      ],
      whatsIncluded: [
        "Wedding Card (150 pieces)",
        "Thank You Cards (150 pieces)",
        "Shagun Envelopes (150 pieces)",
        "Menu Cards (100 pieces)",
        "Itinerary Cards (100 pieces)",
        "RSVP Cards (100 pieces)",
        "Place Cards (100 pieces)",
        "Welcome Sign",
        "Photo Booth Props",
        "Return Gifts (100 pieces)",
        "Guest Book",
        "Pen Stand",
      ],
      tags: ["Luxury", "Premium", "Complete"],
      delivery: "7-10 business days",
      popular: false,
      bestseller: true,
      minOrder: 1,
    },
  ];

  const whatsappNumber = "918120461118";

  // Open popup function
  const openHamperDetails = (hamper) => {
    setSelectedHamper(hamper);
    setSelectedImage(0);
    setActiveTab("description");
    document.body.style.overflow = "hidden";
  };

  // Close popup function
  const closeHamperDetails = () => {
    setSelectedHamper(null);
    document.body.style.overflow = "auto";
  };

  // Image navigation
  const nextImage = () => {
    if (selectedHamper) {
      setSelectedImage((prev) => (prev + 1) % selectedHamper.images.length);
    }
  };

  const prevImage = () => {
    if (selectedHamper) {
      setSelectedImage(
        (prev) =>
          (prev - 1 + selectedHamper.images.length) %
          selectedHamper.images.length,
      );
    }
  };

  // WhatsApp order handler
  const handleWhatsAppOrder = (hamper) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering:\n\n` +
        `📦 *${hamper.name}*\n` +
        `💰 Price: ${hamper.price}\n` +
        `📋 Items: ${hamper.items}\n` +
        `⭐ Rating: ${hamper.rating}/5\n\n` +
        `Please send me more details.`,
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon via-maroon/90 to-gold py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center text-white pt-8">
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
              Wedding Hampers
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Curated gift hampers for your special day
            </p>
          </div>
        </div>
      </section>

      {/* Hampers Grid */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {hampers.map((hamper) => (
              <div
                key={hamper.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openHamperDetails(hamper)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Watermark
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={isMobile ? 100 : 100}
                    watermarkOpacity={0.5}
                    watermarkPosition="center"
                    watermarkGap={0}
                  />

                  {/* Discount Badge */}
                  {hamper.discount && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      {hamper.discount}
                    </span>
                  )}

                  {/* Popular/Bestseller Badge */}
                  {hamper.bestseller && (
                    <span className="absolute top-3 right-3 bg-gold text-maroon text-xs font-bold px-2 py-1 rounded-full z-10">
                      BESTSELLER
                    </span>
                  )}
                  {hamper.popular && !hamper.bestseller && (
                    <span className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      POPULAR
                    </span>
                  )}

                  <button
                    className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full hover:bg-maroon hover:text-white transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to wishlist functionality
                    }}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-maroon transition-colors">
                    {hamper.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-gold font-bold text-xl">
                        {hamper.price}
                      </span>
                      {hamper.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          {hamper.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      {hamper.items}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <span className="ml-1 text-sm font-medium">
                      {hamper.rating}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      ({hamper.reviews} reviews)
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openHamperDetails(hamper);
                    }}
                    className="w-full text-center py-3 bg-maroon text-white rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hamper Details Popup */}
      {selectedHamper && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeHamperDetails}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeHamperDetails}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Images */}
                <div>
                  {/* Main Image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Watermark
                      src={selectedHamper.images[selectedImage]}
                      alt={selectedHamper.name}
                      className="w-full h-full object-cover"
                      watermarkSize={isMobile ? 100 : 100}
                      watermarkOpacity={0.5}
                      watermarkPosition="center"
                      watermarkGap={0}
                    />

                    {/* Navigation Arrows */}
                    {selectedHamper.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Discount Badge */}
                    {selectedHamper.discount && (
                      <span className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-full z-10">
                        {selectedHamper.discount}
                      </span>
                    )}

                    {/* Bestseller Badge */}
                    {selectedHamper.bestseller && (
                      <span className="absolute top-4 right-4 bg-gold text-maroon text-sm font-bold px-3 py-1.5 rounded-full z-10">
                        BESTSELLER
                      </span>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {selectedHamper.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {selectedHamper.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImage === index
                              ? "border-gold scale-105"
                              : "border-transparent hover:border-gray-300"
                          }`}
                        >
                          <Watermark
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            watermarkSize={20}
                            watermarkOpacity={0.1}
                            watermarkPosition="center"
                            watermarkGap={0}
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <Truck className="w-5 h-5 text-maroon" />
                      <span>Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <Shield className="w-5 h-5 text-maroon" />
                      <span>Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <Check className="w-5 h-5 text-maroon" />
                      <span>Customizable</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-maroon" />
                      <span>Fast Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div>
                  {/* Title & Category */}
                  <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-maroon mb-3">
                    {selectedHamper.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold fill-current" />
                      <span className="ml-1 font-bold text-lg">
                        {selectedHamper.rating}
                      </span>
                      <span className="text-gray-500 ml-1">
                        ({selectedHamper.reviews} reviews)
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        const shareText = encodeURIComponent(
                          `Check out this beautiful hamper from Wedding House!\n\n${selectedHamper.name}\nPrice: ${selectedHamper.price}\nRating: ${selectedHamper.rating}/5`,
                        );
                        window.open(
                          `https://wa.me/?text=${shareText}`,
                          "_blank",
                        );
                      }}
                      className="flex items-center gap-1 text-gray-500 hover:text-maroon transition-colors"
                    >
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-gold">
                        {selectedHamper.price}
                      </span>
                      {selectedHamper.originalPrice && (
                        <>
                          <span className="text-lg text-gray-400 line-through">
                            {selectedHamper.originalPrice}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Inclusive of all taxes
                    </p>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-4 border-b mb-4">
                    <button
                      onClick={() => setActiveTab("description")}
                      className={`pb-2 px-1 font-medium transition-colors relative ${
                        activeTab === "description"
                          ? "text-maroon"
                          : "text-gray-500 hover:text-maroon"
                      }`}
                    >
                      Description
                      {activeTab === "description" && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-maroon"></div>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("whatsIncluded")}
                      className={`pb-2 px-1 font-medium transition-colors relative ${
                        activeTab === "whatsIncluded"
                          ? "text-maroon"
                          : "text-gray-500 hover:text-maroon"
                      }`}
                    >
                      What's Included
                      {activeTab === "whatsIncluded" && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-maroon"></div>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("specifications")}
                      className={`pb-2 px-1 font-medium transition-colors relative ${
                        activeTab === "specifications"
                          ? "text-maroon"
                          : "text-gray-500 hover:text-maroon"
                      }`}
                    >
                      Specs
                      {activeTab === "specifications" && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-maroon"></div>
                      )}
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="mb-6">
                    {activeTab === "description" && (
                      <p className="text-gray-600 leading-relaxed">
                        {selectedHamper.description}
                      </p>
                    )}
                    {activeTab === "whatsIncluded" && (
                      <div className="space-y-2">
                        {selectedHamper.whatsIncluded.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeTab === "specifications" && (
                      <div className="grid grid-cols-2 gap-3">
                        {selectedHamper.specifications.map((spec, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-3 rounded-lg"
                          >
                            <span className="text-xs text-gray-500">
                              {spec.label}
                            </span>
                            <p className="font-medium text-sm">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedHamper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      Delivery: {selectedHamper.delivery}
                    </div>
                    {selectedHamper.minOrder && (
                      <div className="text-gray-600">
                        Min. Order: {selectedHamper.minOrder} piece
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        handleWhatsAppOrder(selectedHamper);
                        closeHamperDetails();
                      }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order on WhatsApp
                    </button>
                    <button
                      onClick={() => {
                        // Add to wishlist functionality
                        closeHamperDetails();
                      }}
                      className="px-6 py-4 border-2 border-maroon text-maroon rounded-lg font-bold hover:bg-maroon hover:text-white transition-all"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingHamper;
