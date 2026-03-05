import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Package,
  Clock,
  Star,
  ShoppingBag,
  ChevronRight,
  MessageCircle,
  Truck,
  Shield,
  Check,
  Heart,
  Filter,
  X,
  ChevronDown,
  Menu,
} from "lucide-react";

const ShagunEnvelopes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState("popular");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // WhatsApp Configuration
  const whatsappNumber = "918120461118";
  const whatsappMessage = (item) =>
    `Hello! I'm interested in ordering:\n\n📦 *${item.name}*\n💰 Price: ${item.price}\n📋 Category: ${item.category}\n\nPlease send me more details.`;

  // Categories
  const categories = [
    {
      id: "all",
      name: "All Envelopes",
      icon: "📬",
      color: "from-maroon to-gold",
      count: 15,
    },
    {
      id: "box-envelope",
      name: "Box Envelope",
      icon: "📦",
      color: "from-blue-500 to-cyan-500",
      description: "Premium rigid box envelopes for special occasions",
      count: 5,
      popular: true,
    },
    {
      id: "pocket-envelope",
      name: "Pocket Size Envelope",
      icon: "📩",
      color: "from-green-500 to-emerald-500",
      description: "Compact pocket-sized envelopes for convenience",
      count: 5,
      popular: true,
    },
    {
      id: "regular-envelope",
      name: "Regular Envelope",
      icon: "✉️",
      color: "from-amber-500 to-orange-500",
      description: "Classic standard size envelopes",
      count: 5,
      popular: false,
    },
  ];

  // Products Data
  const allProducts = [
    // Box Envelopes - Multiple Designs
    {
      id: 1,
      name: "Premium Gold Foil Box Envelope",
      category: "box-envelope",
      price: "₹599",
      originalPrice: "₹799",
      discount: "25% OFF",
      image: "/images/products/box-envelope-gold.jpg",
      images: [
        "/images/products/box-envelope-gold-1.jpg",
        "/images/products/box-envelope-gold-2.jpg",
        "/images/products/box-envelope-gold-3.jpg",
      ],
      description:
        "Luxurious box envelope with gold foil detailing. Perfect for wedding shagun and special occasions.",
      specifications: [
        { label: "Size", value: "6 x 4 x 1 inches" },
        { label: "Material", value: "Premium Rigid Cardboard" },
        { label: "Color", value: "Gold & Maroon" },
        { label: "Closure", value: "Magnetic Flap" },
        { label: "Includes", value: "Matching inner sleeve" },
      ],
      tags: ["Premium", "Gold Foil", "Magnetic"],
      delivery: "3-5 days",
      rating: 4.9,
      reviews: 128,
      popular: true,
      bestseller: true,
      minOrder: 10,
    },
    {
      id: 2,
      name: "Silver Embossed Box Envelope",
      category: "box-envelope",
      price: "₹549",
      image: "/images/products/box-envelope-silver.jpg",
      description:
        "Elegant silver embossed box envelope with traditional motifs.",
      tags: ["Silver", "Embossed", "Elegant"],
      delivery: "3-5 days",
      rating: 4.8,
      reviews: 95,
      popular: true,
    },
    {
      id: 3,
      name: "Red Velvet Box Envelope",
      category: "box-envelope",
      price: "₹699",
      image: "/images/products/box-envelope-velvet.jpg",
      description: "Luxurious velvet finish box envelope for royal gifting.",
      tags: ["Velvet", "Luxury", "Premium"],
      delivery: "4-6 days",
      rating: 4.9,
      reviews: 76,
      bestseller: true,
    },
    {
      id: 4,
      name: "Peach Blossom Box Envelope",
      category: "box-envelope",
      price: "₹499",
      image: "/images/products/box-envelope-peach.jpg",
      description: "Beautiful peach-colored box envelope with floral patterns.",
      tags: ["Floral", "Colorful", "Festive"],
      delivery: "3-5 days",
      rating: 4.7,
      reviews: 64,
    },
    {
      id: 5,
      name: "Royal Blue Box Envelope",
      category: "box-envelope",
      price: "₹549",
      image: "/images/products/box-envelope-blue.jpg",
      description: "Deep blue box envelope with gold border.",
      tags: ["Royal", "Gold Border", "Elegant"],
      delivery: "3-5 days",
      rating: 4.8,
      reviews: 82,
    },

    // Pocket Envelopes
    {
      id: 6,
      name: "Pocket Gold Foil Envelope",
      category: "pocket-envelope",
      price: "₹349",
      originalPrice: "₹499",
      discount: "30% OFF",
      image: "/images/products/pocket-gold.jpg",
      description:
        "Compact pocket envelope with gold foil accents. Perfect for gift cards and small shagun.",
      tags: ["Gold Foil", "Compact", "Elegant"],
      delivery: "2-4 days",
      rating: 4.7,
      reviews: 112,
      popular: true,
    },
    {
      id: 7,
      name: "Pocket Silk Finish Envelope",
      category: "pocket-envelope",
      price: "₹299",
      image: "/images/products/pocket-silk.jpg",
      description: "Smooth silk finish pocket envelope in assorted colors.",
      tags: ["Silk", "Colorful", "Smooth"],
      delivery: "2-4 days",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 8,
      name: "Pocket Floral Design Envelope",
      category: "pocket-envelope",
      price: "₹329",
      image: "/images/products/pocket-floral.jpg",
      description: "Beautiful floral printed pocket envelopes.",
      tags: ["Floral", "Printed", "Vibrant"],
      delivery: "3-5 days",
      rating: 4.7,
      reviews: 56,
    },
    {
      id: 9,
      name: "Pocket Embossed Border Envelope",
      category: "pocket-envelope",
      price: "₹379",
      image: "/images/products/pocket-embossed.jpg",
      description: "Elegant embossed border design on premium paper.",
      tags: ["Embossed", "Premium", "Elegant"],
      delivery: "3-5 days",
      rating: 4.8,
      reviews: 43,
    },
    {
      id: 10,
      name: "Pocket Pearl Finish Envelope",
      category: "pocket-envelope",
      price: "₹399",
      image: "/images/products/pocket-pearl.jpg",
      description: "Lustrous pearl finish envelope for special occasions.",
      tags: ["Pearl", "Lustrous", "Premium"],
      delivery: "4-6 days",
      rating: 4.9,
      reviews: 38,
      bestseller: true,
    },

    // Regular Envelopes
    {
      id: 11,
      name: "Classic White Regular Envelope",
      category: "regular-envelope",
      price: "₹199",
      originalPrice: "₹249",
      discount: "20% OFF",
      image: "/images/products/regular-white.jpg",
      description: "Classic white envelopes for everyday use. Pack of 50.",
      tags: ["Classic", "White", "Pack of 50"],
      delivery: "1-2 days",
      rating: 4.8,
      reviews: 245,
      popular: true,
    },
    {
      id: 12,
      name: "Premium Cream Envelope",
      category: "regular-envelope",
      price: "₹249",
      image: "/images/products/regular-cream.jpg",
      description: "Elegant cream-colored envelopes with subtle texture.",
      tags: ["Cream", "Textured", "Premium"],
      delivery: "2-3 days",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 13,
      name: "Gold Border Regular Envelope",
      category: "regular-envelope",
      price: "₹299",
      image: "/images/products/regular-gold-border.jpg",
      description: "Classic envelopes with elegant gold border.",
      tags: ["Gold Border", "Elegant", "Formal"],
      delivery: "2-3 days",
      rating: 4.8,
      reviews: 134,
    },
    {
      id: 14,
      name: "Pastel Color Envelope Set",
      category: "regular-envelope",
      price: "₹279",
      image: "/images/products/regular-pastel.jpg",
      description: "Assorted pastel colored envelopes. Set of 40.",
      tags: ["Pastel", "Colorful", "Assorted"],
      delivery: "3-4 days",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 15,
      name: "Handmade Paper Envelope",
      category: "regular-envelope",
      price: "₹329",
      image: "/images/products/regular-handmade.jpg",
      description:
        "Eco-friendly handmade paper envelopes with natural texture.",
      tags: ["Handmade", "Eco-friendly", "Natural"],
      delivery: "4-5 days",
      rating: 4.9,
      reviews: 87,
      bestseller: true,
    },
  ];

  // Filter products by category
  const filteredByCategory =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  // Sort products
  const sortedProducts = [...filteredByCategory].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          parseInt(a.price.replace(/[^0-9]/g, "")) -
          parseInt(b.price.replace(/[^0-9]/g, ""))
        );
      case "price-high":
        return (
          parseInt(b.price.replace(/[^0-9]/g, "")) -
          parseInt(a.price.replace(/[^0-9]/g, ""))
        );
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  // Filter by price range
  const filteredProducts = sortedProducts.filter((product) => {
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
      `Hello! I would like to order the following envelopes:\n\n${itemsList}\n\n💰 Total: ₹${total}\n\nPlease create a custom package for me.`,
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

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Get current category name
  const currentCategory =
    categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white pt-20">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-maroon via-maroon/90 to-gold overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4">
            Shagun Envelopes Collection
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Beautiful envelopes for your blessings, crafted with love and
            tradition
          </p>
        </div>
      </div>

      {/* Category Navigation with Dropdown */}
      <div className="sticky top-16 z-40 bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Dropdown */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-maroon to-gold text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  <span>{currentCategory.icon}</span>
                  <span>{currentCategory.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu - Click on any category to show its products */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                          selectedCategory === cat.id
                            ? "bg-gold/10 text-maroon font-medium"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{cat.icon}</span>
                          <div>
                            <div className="text-sm font-medium">
                              {cat.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {cat.count} items
                            </div>
                          </div>
                        </div>
                        {cat.popular && (
                          <span className="text-xs bg-gold/20 text-maroon px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Category Links */}
              <div className="flex gap-2">
                {categories.slice(1, 4).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? "bg-maroon text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-maroon text-white rounded-lg"
            >
              <Menu className="w-5 h-5" />
              <span>{currentCategory.name}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile Menu - Click on any category to show its products */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                    selectedCategory === cat.id
                      ? "bg-gold/10 text-maroon font-medium"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{cat.name}</div>
                      <div className="text-xs text-gray-500">
                        {cat.count} items
                      </div>
                    </div>
                  </div>
                  {cat.popular && (
                    <span className="text-xs bg-gold/20 text-maroon px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category Description */}
      {selectedCategory !== "all" && (
        <div className="bg-gradient-to-r from-gold/10 to-maroon/10 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-start gap-4">
              <div className="text-4xl">
                {categories.find((c) => c.id === selectedCategory)?.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-maroon mb-2">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </h3>
                <p className="text-gray-600">
                  {
                    categories.find((c) => c.id === selectedCategory)
                      ?.description
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-bold text-maroon">
              {filteredProducts.length}
            </span>{" "}
            of {filteredByCategory.length} products
          </p>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold text-sm"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Selected Items Bar */}
        {selectedItems.length > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-gold/20 to-maroon/20 rounded-xl shadow-lg border border-gold/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-lg">
                  {selectedItems.length} envelope
                  {selectedItems.length > 1 ? "s" : ""} selected
                </div>
                <div className="text-gray-600">
                  Total: ₹
                  {selectedItems
                    .reduce((sum, item) => {
                      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
                      return sum + price;
                    }, 0)
                    .toLocaleString()}
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
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: product.id * 0.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Envelope";
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
                    {product.discount && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        {product.discount}
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

                  {/* Category Indicator */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
                      {categories.find((c) => c.id === product.category)?.icon}
                      {categories.find((c) => c.id === product.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {/* Title & Rating */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-800 line-clamp-1 group-hover:text-maroon transition-colors flex-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 ml-2">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-gold">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Delivery & Reviews */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {product.delivery}
                    </div>
                    <div>({product.reviews} reviews)</div>
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

                  {/* Min Order Info */}
                  {product.minOrder && (
                    <p className="text-xs text-gray-500 mt-3">
                      Min. Order: {product.minOrder} pieces
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No envelopes found
            </h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Bulk Order CTA */}
        <div className="mt-16 bg-gradient-to-r from-maroon to-gold rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Bulk Envelopes?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Get custom envelopes with your wedding details printed
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hello! I need custom shagun envelopes for my wedding. Can you help?",
              );
              window.open(
                `https://wa.me/${whatsappNumber}?text=${message}`,
                "_blank",
              );
            }}
            className="bg-white text-maroon px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3 shadow-xl hover:scale-105 transform transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Chat for Bulk Order
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Options */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Sort By</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">
                Price Range (Max: ₹{priceRange.max})
              </h4>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    max: parseInt(e.target.value),
                  })
                }
                className="w-full accent-maroon"
              />
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

export default ShagunEnvelopes;
