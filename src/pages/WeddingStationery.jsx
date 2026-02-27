import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Filter,
  Search,
  Package,
  Clock,
  Star,
  ShoppingBag,
  ChevronRight,
  MessageCircle,
  Truck,
  Shield,
  Palette,
  Heart,
  X,
  Check,
} from "lucide-react";

const WeddingStationery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  // WhatsApp Configuration
  const whatsappNumber = "918120461118";
  const whatsappMessage = (item) =>
    `Hello! I'm interested in ordering:\n\n📦 *${item.name}*\n💰 Price: ${item.price}\n📋 Category: ${item.category}\n\nPlease send me more details and let me know how to proceed with ordering.`;

  // Stationery Categories
  const categories = [
    {
      id: "invitations",
      name: "Wedding Cards",
      icon: "💌",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "envelopes",
      name: "Shagun Envelopes",
      icon: "📜",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "cards-tags",
      name: "Cards & Tags",
      icon: "🍽️",
      color: "from-emerald-500 to-green-500",
    },
    {
      id: "bags-box",
      name: "Bags & Boxes",
      icon: "🎁",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "door-hanger",
      name: "Door Hangers",
      icon: "🚪",
      color: "from-purple-500 to-violet-500",
    },
    {
      id: "itinerary",
      name: "Itinerary",
      icon: "📋",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "menu-cards",
      name: "Menu Cards",
      icon: "🍽️",
      color: "from-red-500 to-pink-500",
    },
    {
      id: "standees",
      name: "Standees",
      icon: "🖼️",
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: "welcome-board",
      name: "Welcome Boards",
      icon: "🎨",
      color: "from-lime-500 to-green-500",
    },
    {
      id: "bottle-tag",
      name: "Bottle Tags",
      icon: "🏷️",
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: "gratitude-card",
      name: "Gratitude Cards",
      icon: "💝",
      color: "from-rose-500 to-pink-500",
    },
    {
      id: "luggage-tag",
      name: "Luggage Tags",
      icon: "🧳",
      color: "from-stone-500 to-gray-500",
    },
    {
      id: "post-card",
      name: "Post Cards",
      icon: "📮",
      color: "from-sky-500 to-blue-500",
    },
    {
      id: "rsvp-card",
      name: "RSVP Cards",
      icon: "📬",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "thank-you-card",
      name: "Thank You Cards",
      icon: "🙏",
      color: "from-fuchsia-500 to-purple-500",
    },
  ];

  // Stationery Products
  const stationeryProducts = [
    // DOOR HANGERS
    {
      id: 1,
      name: "Premium Door Hanger",
      category: "door-hanger",
      price: "₹299",
      description: "Elegant welcome door hangers for your wedding guests",
      image: "/products/doorhanger.webp",
      tags: ["Welcome", "Premium", "Custom"],
      delivery: "5-7 days",
      rating: 4.8,
      popular: true,
    },
    {
      id: 2,
      name: "Luxury Door Hanger Set",
      category: "door-hanger",
      price: "₹499",
      description: "Set of 10 luxury door hangers with gold foil",
      image: "/products/doorhanger.webp",
      tags: ["Luxury", "Gold Foil", "Set of 10"],
      delivery: "7-10 days",
      rating: 4.9,
      bestseller: true,
    },

    // ITINERARY
    {
      id: 3,
      name: "Wedding Itinerary Card",
      category: "itinerary",
      price: "₹199",
      description: "Beautifully designed itinerary cards for your wedding schedule",
      image: "/products/itnerary.png",
      tags: ["Schedule", "Elegant", "Custom"],
      delivery: "3-5 days",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pocket Wedding Timeline",
      category: "itinerary",
      price: "₹349",
      description: "Compact pocket-sized ceremony schedule",
      image: "/images/products/timeline.jpg",
      tags: ["Pocket", "Minimalist", "Convenient"],
      delivery: "5-7 days",
      rating: 4.4,
    },

    // MENU CARDS
    {
      id: 5,
      name: "Gold Foil Menu Cards",
      category: "menu-cards",
      price: "₹399",
      description: "Elegant menu cards with gold foil detailing",
      image: "/images/products/menu-card.jpg",
      tags: ["Gold Foil", "Luxury", "Reception"],
      delivery: "7-10 days",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Place Card Set (50 pcs)",
      category: "menu-cards",
      price: "₹1,499",
      description: "Personalized place cards for seating arrangement",
      image: "/images/products/place-card.jpg",
      tags: ["Personalized", "Calligraphy", "Elegant"],
      delivery: "10-14 days",
      rating: 4.8,
      popular: true,
    },

    // STANDEES
    {
      id: 7,
      name: "Welcome Standee",
      category: "standees",
      price: "₹2,499",
      description: "Large welcome standee for wedding entrance",
      image: "/images/products/standee.jpg",
      tags: ["Welcome", "Large", "Customizable"],
      delivery: "10-12 days",
      rating: 4.9,
      bestseller: true,
    },
    {
      id: 8,
      name: "Photo Standee",
      category: "standees",
      price: "₹1,999",
      description: "Photo standee for guest photo booth",
      image: "/images/products/photo-standee.jpg",
      tags: ["Photo", "Fun", "Interactive"],
      delivery: "8-10 days",
      rating: 4.6,
    },

    // STICKERS
    {
      id: 9,
      name: "Custom Wedding Stickers",
      category: "sticker",
      price: "₹99",
      description: "Personalized stickers for envelopes and gifts",
      image: "/images/products/sticker.jpg",
      tags: ["Custom", "Seal", "Pack of 50"],
      delivery: "3-5 days",
      rating: 4.5,
    },

    // TENT CARDS
    {
      id: 10,
      name: "Table Tent Cards",
      category: "tent-card",
      price: "₹249",
      description: "Elegant tent cards for table numbers",
      image: "/images/products/tent-card.jpg",
      tags: ["Table", "Numbers", "Set of 20"],
      delivery: "5-7 days",
      rating: 4.6,
    },

    // WELCOME BOARDS
    {
      id: 11,
      name: "Acrylic Welcome Board",
      category: "welcome-board",
      price: "₹3,499",
      description: "Premium acrylic welcome board with gold stand",
      image: "/images/products/welcome-board.jpg",
      tags: ["Acrylic", "Premium", "Reusable"],
      delivery: "12-15 days",
      rating: 4.9,
      popular: true,
    },
    {
      id: 12,
      name: "Mirror Welcome Sign",
      category: "welcome-board",
      price: "₹2,999",
      description: "Elegant mirror welcome sign with calligraphy",
      image: "/images/products/mirror-sign.jpg",
      tags: ["Mirror", "Elegant", "Calligraphy"],
      delivery: "10-14 days",
      rating: 4.8,
    },

    // BOTTLE TAGS
    {
      id: 13,
      name: "Personalized Bottle Tag",
      category: "bottle-tag",
      price: "₹8 per pc",
      description: "Make your big day unforgettable with our exquisitely designed wedding Bottle Tags",
      image: "/images/products/bottle-tag.webp",
      tags: ["Bar", "Drinks", "Modern"],
      delivery: "1-2 days",
      rating: 4.3,
    },

    // GRATITUDE CARDS
    {
      id: 14,
      name: "Gratitude Card Set",
      category: "gratitude-card",
      price: "₹299",
      description: "Beautiful thank you cards for your guests",
      image: "/images/products/gratitude.jpg",
      tags: ["Thank You", "Elegant", "Set of 25"],
      delivery: "5-7 days",
      rating: 4.7,
    },

    // LUGGAGE TAGS
    {
      id: 15,
      name: "Wedding Luggage Tag",
      category: "luggage-tag",
      price: "₹8 Per PC",
      description: "Add a unique and personal touch to your wedding with our beautifully crafted Wedding Luggage Tag Cards With Dori",
      image: "/images/products/card.png",
      tags: ["Seating", "Display", "Elegant"],
      delivery: "1-2 days",
      rating: 4.7,
      popular: true,
    },

    // POST CARDS
    {
      id: 16,
      name: "Wedding Post Card Set",
      category: "post-card",
      price: "₹199",
      description: "Beautiful post cards for wedding announcements",
      image: "/images/products/postcard.jpg",
      tags: ["Announcement", "Vintage", "Set of 20"],
      delivery: "3-5 days",
      rating: 4.5,
    },

    // RSVP CARDS
    {
      id: 17,
      name: "RSVP Card Set",
      category: "rsvp-card",
      price: "₹299",
      description: "Response cards with envelopes",
      image: "/images/products/rsvp.jpg",
      tags: ["Response", "Envelopes", "Set of 50"],
      delivery: "5-7 days",
      rating: 4.6,
    },

    // THANK YOU CARDS
    {
      id: 18,
      name: "Thank You Card Set",
      category: "thank-you-card",
      price: "₹349",
      description: "Post-wedding thank you cards with envelopes",
      image: "/images/products/thankyou.jpg",
      tags: ["Thank You", "Elegant", "Set of 50"],
      delivery: "5-7 days",
      rating: 4.8,
      popular: true,
    },

    // Envelopes
    {
      id: 19,
      name: "Copper Foil Envelope",
      category: "envelopes",
      price: "₹80",
      description: "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting, our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      image: "/images/products/copperfoil.png",
      tags: ["Copper", "Elegant", "Shagun"],
      delivery: "1-day",
      rating: 4.5,
    },
    {
      id: 20,
      name: "Silver Foil Envelope",
      category: "envelopes",
      price: "₹75",
      description: "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting, our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      image: "/images/products/silverfoil.png",
      tags: ["Silver", "Elegant", "Shagun"],
      delivery: "1-day",
      rating: 4.5,
    },
  ];

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all"
      ? stationeryProducts
      : stationeryProducts.filter(
          (product) => product.category === selectedCategory
        );

  // Filter by price range
  const priceFilteredProducts = filteredProducts.filter((product) => {
    const price = parseInt(product.price.replace(/[^0-9]/g, ""));
    return price >= priceRange.min && price <= priceRange.max;
  });

  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(whatsappMessage(product));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleBulkOrder = () => {
    if (selectedItems.length === 0) return;

    const itemsList = selectedItems
      .map((item) => `• ${item.name} - ${item.price}`)
      .join("\n");

    const total = selectedItems.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
      return sum + price;
    }, 0);

    const message = encodeURIComponent(
      `Hello! I would like to order the following items:\n\n${itemsList}\n\n💰 Total: ₹${total}\n\nPlease create a custom package for me with these items.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const toggleItemSelection = (product) => {
    if (selectedItems.find((item) => item.id === product.id)) {
      setSelectedItems(selectedItems.filter((item) => item.id !== product.id));
    } else {
      setSelectedItems([...selectedItems, product]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white pt-20">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-maroon via-maroon/90 to-gold overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6">
            Wedding Stationery Collection
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Everything you need for your perfect wedding - from door hangers to thank you cards
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Package className="w-4 h-4 text-gold" />
              <span className="text-white">50+ Designs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-white">Quick Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-white">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="sticky top-16 z-40 bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-maroon">Browse Categories</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-maroon"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
          <div className="flex overflow-x-auto pb-2 hide-scrollbar gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-maroon text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
                  }
                  className="w-full accent-maroon"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>₹{priceRange.min}</span>
                  <span>₹{priceRange.max}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-maroon text-white py-3 rounded-lg font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}



      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Selected Items Bar */}
        {selectedItems.length > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-gold/20 to-maroon/20 rounded-xl shadow-lg border border-gold/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-lg">
                  {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
                </div>
                <div className="text-gray-600">
                  Total: ₹
                  {selectedItems.reduce((sum, item) => {
                    const price = parseInt(item.price.replace(/[^0-9]/g, ""));
                    return sum + price;
                  }, 0).toLocaleString()}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedItems([])}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Clear
                </button>
                <button
                  onClick={handleBulkOrder}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 text-sm hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order All via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {priceFilteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {priceFilteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: product.id * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Product";
                    }}
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.bestseller && (
                      <span className="px-2 py-1 bg-gold text-maroon text-xs font-bold rounded-full">
                        BESTSELLER
                      </span>
                    )}
                    {product.popular && (
                      <span className="px-2 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => toggleItemSelection(product)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      selectedItems.find((item) => item.id === product.id)
                        ? "bg-gold text-maroon"
                        : "bg-white/90 text-gray-700 hover:bg-maroon hover:text-white"
                    }`}
                  >
                    {selectedItems.find((item) => item.id === product.id) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-3 py-1 bg-gold/20 text-maroon rounded-full">
                      {categories.find((c) => c.id === product.category)?.name || product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-maroon transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price & Delivery */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-gold font-bold text-xl">
                        {product.price}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        {product.delivery}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg hover:shadow-lg transition-all hover:scale-105 text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order
                    </button>
                    <button
                      onClick={() => toggleItemSelection(product)}
                      className={`px-3 py-2.5 border rounded-lg transition-all text-sm ${
                        selectedItems.find((item) => item.id === product.id)
                          ? "bg-gold text-maroon border-gold"
                          : "border-gray-300 hover:border-gold"
                      }`}
                    >
                      {selectedItems.find((item) => item.id === product.id) ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        "Select"
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Bulk Order CTA */}
        <div className="mt-16 bg-gradient-to-r from-maroon to-gold rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Tell us your requirements and we'll create a personalized stationery
            package just for your wedding
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hello! I need help creating a custom wedding stationery package. Can you help me with this?"
              );
              window.open(
                `https://wa.me/${whatsappNumber}?text=${message}`,
                "_blank"
              );
            }}
            className="bg-white text-maroon px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3 shadow-xl hover:scale-105 transform transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Chat for Custom Package
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default WeddingStationery;