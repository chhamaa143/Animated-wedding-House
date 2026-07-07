import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import Watermark from "../components/Watermark";

const WeddingStationery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Get category from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // WhatsApp Configuration
  const whatsappNumber = "918435111188";
  const whatsappMessage = (item) =>
    `Hello! I'm interested in ordering:\n\n📦 *${item.name}*\n💰 Price: ${item.price}\n📋 Category: ${item.category}\n\nPlease send me more details and let me know how to proceed with ordering.`;

  // Stationery Categories
  const categories = [
    { id: "all", name: "All Items", icon: "📦" },
    { id: "invitations", name: "Wedding Cards", icon: "💌" },
    { id: "envelopes", name: "Shagun Envelopes", icon: "📜" },
    { id: "cards-tags", name: "Cards & Tags", icon: "🏷️" },
    { id: "bags-box", name: "Bags & Boxes", icon: "🎁" },
    { id: "door-hanger", name: "Door Hangers", icon: "🚪" },
    { id: "itinerary", name: "Itinerary", icon: "📋" },
    { id: "menu-cards", name: "Menu Cards", icon: "🍽️" },
    { id: "standees", name: "Standees", icon: "🖼️" },
    { id: "welcome-board", name: "Welcome Boards", icon: "🎨" },
    { id: "bottle-tag", name: "Bottle Tags", icon: "🏷️" },
    { id: "gratitude-card", name: "Gratitude Cards", icon: "💝" },
    { id: "luggage-tag", name: "Luggage Tags", icon: "🧳" },
    { id: "post-card", name: "Post Cards", icon: "📮" },
    { id: "rsvp-card", name: "RSVP Cards", icon: "📬" },
    { id: "thank-you-card", name: "Thank You Cards", icon: "🙏" },
    { id: "sticker", name: "Stickers", icon: "⭐" },
    { id: "tent-card", name: "Tent Cards", icon: "🏕️" },
    { id: "petal-cone", name: "Petal Cones", icon: "🌸" },
  ];

  // Stationery Products - Fixed category IDs to match dropdown
  const stationeryProducts = [
    // DOOR HANGERS
    {
      id: 1,
      name: "Premium Door Hanger",
      category: "door-hanger",
      price: "₹15 each",
      description: "Elegant welcome door hangers for your wedding guests",
      image: "/images/products/door-hanger.jpg",
      tags: ["Welcome", "Premium", "Custom"],
      rating: 4.8,
      popular: true,
    },
    {
      id: 2,
      name: "Luxury Door Hanger Set",
      category: "door-hanger",
      price: "₹20 each",
      description: "Set of 10 luxury door hangers with gold foil",
      image: "/products/doorhanger.webp",
      tags: ["Luxury", "Gold Foil", "Set of 10"],
      rating: 4.9,
      bestseller: true,
    },

    // ITINERARY
    {
      id: 3,
      name: "Wedding Itinerary Card",
      category: "itinerary",
      price: "₹30 each",
      description: "Beautifully designed itinerary cards for your wedding schedule",
      image: "/products/1 (3).png",
      tags: ["Schedule", "Elegant", "Custom"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pocket Wedding Timeline",
      category: "itinerary",
      price: "₹25 each",
      description: "Compact pocket-sized ceremony schedule",
      image: "/products/itnerary.png",
      tags: ["Pocket", "Minimalist", "Convenient"],
      rating: 4.4,
    },

    // MENU CARDS
    {
      id: 5,
      name: "Gold Foil Menu Cards",
      category: "menu-cards",
      price: "₹50 each",
      description: "Elegant menu cards with gold foil detailing",
      image: "/images/products/menu-card.webp",
      tags: ["Gold Foil", "Luxury", "Reception"],
      delivery: "7-10 days",
      rating: 4.7,
    },

    // STANDEES
    {
      id: 6,
      name: "Welcome Standee",
      category: "standees",
      price: "₹2,499",
      description: "Large welcome standee for wedding entrance",
      image: "/images/products/welcom-standee.webp",
      tags: ["Welcome", "Large", "Customizable"],
      delivery: "10-12 days",
      rating: 4.9,
      bestseller: true,
    },
    {
      id: 7,
      name: "Photo Standee",
      category: "standees",
      price: "₹1,999",
      description: "Photo standee for guest photo booth",
      image: "/images/products/photobooth-standee.webp",
      tags: ["Photo", "Fun", "Interactive"],
      delivery: "8-10 days",
      rating: 4.6,
    },

    // STICKERS
    {
      id: 8,
      name: "Custom Wedding Stickers",
      category: "sticker",
      price: "₹99",
      description: "Personalized stickers for envelopes and gifts",
      image: "/images/products/wed-sticker.jpeg",
      tags: ["Custom", "Seal", "Pack of 50"],
      delivery: "3-5 days",
      rating: 4.5,
    },

    // TENT CARDS
    {
      id: 9,
      name: "Table Tent Cards",
      category: "tent-card",
      price: "₹35 each",
      description: "Elegant tent cards for table numbers",
      image: "/products/tent-card.png",
      tags: ["Table", "Numbers", "Set of 20"],
      delivery: "5-7 days",
      rating: 4.6,
    },

    // BOTTLE TAGS
    {
      id: 10,
      name: "Personalized Bottle Tag",
      category: "bottle-tag",
      price: "₹8 each",
      description: "Exquisitely designed wedding bottle tags",
      image: "/images/products/bottle-tag.webp",
      tags: ["Bar", "Drinks", "Modern"],
      delivery: "1-2 days",
      rating: 4.3,
    },

    // GRATITUDE CARDS
    {
      id: 11,
      name: "Gratitude Card Set",
      category: "gratitude-card",
      price: "₹10 each",
      description: "Beautiful thank you cards for your guests",
      image: "/images/products/thankyou-card.jpeg",
      tags: ["Thank You", "Elegant", "Set of 25"],
      delivery: "5-7 days",
      rating: 4.7,
    },

    // LUGGAGE TAGS
    {
      id: 12,
      name: "Wedding Luggage Tag",
      category: "luggage-tag",
      price: "₹8 each",
      description: "Beautifully crafted wedding luggage tags with dori",
      image: "/images/products/card.png",
      tags: ["Seating", "Display", "Elegant"],
      delivery: "1-2 days",
      rating: 4.7,
      popular: true,
    },

    // RSVP CARDS
    {
      id: 13,
      name: "RSVP Card Set",
      category: "rsvp-card",
      price: "₹10 each",
      description: "Response cards with envelopes",
      image: "/images/products/RSVP.jpeg",
      tags: ["Response", "Envelopes", "Set of 50"],
      delivery: "5-7 days",
      rating: 4.6,
    },

    // Envelopes
    {
      id: 14,
      name: "Copper Foil Envelope",
      category: "envelopes",
      price: "₹80 each",
      description: "Beautifully designed Shagun envelopes with copper foil",
      image: "/images/products/copperfoil.png",
      tags: ["Copper", "Elegant", "Shagun"],
      delivery: "1-day",
      rating: 4.5,
    },
    {
      id: 15,
      name: "Silver Foil Envelope",
      category: "envelopes",
      price: "₹75 each",
      description: "Beautifully designed Shagun envelopes with silver foil",
      image: "/images/products/silverfoil.png",
      tags: ["Silver", "Elegant", "Shagun"],
      delivery: "1-day",
      rating: 4.5,
    },
    {
      id: 16,
      name: "Flower/Petals Cone",
      category: "petal-cone",
      price: "₹75 each",
      description: "Beautiful flower and petals cone for your wedding",
      image: "/products/petal-cone.png",
      tags: ["Flower", "Elegant", "Cone"],
      delivery: "1-day",
      rating: 4.5,
    },
  ];

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all"
      ? stationeryProducts
      : stationeryProducts.filter(
          (product) => product.category === selectedCategory,
        );

  // Filter by price range
  const priceFilteredProducts = filteredProducts.filter((product) => {
    const price = parseInt(product.price.replace(/[^0-9]/g, ""));
    return price >= priceRange.min && price <= priceRange.max;
  });

  // Search filter
  const searchFilteredProducts = priceFilteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      `Hello! I would like to order the following items:\n\n${itemsList}\n\n💰 Total: ₹${total}\n\nPlease create a custom package for me with these items.`,
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

  // Handle category change with URL update
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // Update URL with category parameter
    navigate(`/weddingstationery?category=${categoryId}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#EFE5E7] pt-20">
      {/* Hero Section - New Theme */}
      <div className="relative py-16 bg-[#532D2A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#B392A4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#B392A4] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 pt-8">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-[#EFE5E7] mb-6">
            Wedding Stationery Collection
          </h1>
          <p className="text-xl text-[#EFE5E7]/80 max-w-3xl mx-auto mb-8">
            Everything you need for your perfect wedding - from door hangers to
            thank you cards
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-[#B392A4]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#B392A4]/30">
              <Package className="w-4 h-4 text-[#B392A4]" />
              <span className="text-[#EFE5E7]">50+ Designs</span>
            </div>
            <div className="flex items-center gap-2 bg-[#B392A4]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#B392A4]/30">
              <Clock className="w-4 h-4 text-[#B392A4]" />
              <span className="text-[#EFE5E7]">Quick Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-[#B392A4]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#B392A4]/30">
              <Star className="w-4 h-4 text-[#B392A4]" />
              <span className="text-[#EFE5E7]">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation - Fixed */}
      <div className="sticky top-16 z-40 bg-[#EFE5E7] shadow-lg border-b border-[#B392A4]/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-[#532D2A]">Browse Categories</h2>
            <div className="flex items-center gap-2">
              {/* Search Bar */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-4 py-1.5 border border-[#B392A4]/30 rounded-lg bg-white/50 text-sm focus:outline-none focus:border-[#B392A4] text-[#532D2A]"
                />
                <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-[#B392A4]" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-[#532D2A] hover:text-[#B392A4] transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
          
          {/* Category Buttons - Fixed to show all and filter correctly */}
          <div className="flex overflow-x-auto pb-2 hide-scrollbar gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? "bg-[#B392A4] text-white shadow-lg"
                    : "bg-white text-[#532D2A] hover:bg-[#B392A4]/20 border border-[#B392A4]/20"
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
          <div className="bg-[#EFE5E7] rounded-t-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-[#532D2A]">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5 text-[#532D2A]" />
              </button>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-[#532D2A]">Price Range</h4>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      max: parseInt(e.target.value),
                    })
                  }
                  className="w-full accent-[#B392A4]"
                />
                <div className="flex items-center justify-between text-sm text-[#532D2A]">
                  <span>₹{priceRange.min}</span>
                  <span>₹{priceRange.max}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-[#B392A4] hover:bg-[#532D2A] text-white py-3 rounded-lg font-medium transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar - Mobile */}
        <div className="sm:hidden mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#B392A4]/30 rounded-lg bg-white text-[#532D2A] placeholder-[#532D2A]/50 focus:outline-none focus:border-[#B392A4]"
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B392A4]" />
          </div>
        </div>

        {/* Selected Items Bar */}
        {selectedItems.length > 0 && (
          <div className="mb-6 p-4 bg-[#B392A4]/10 rounded-xl shadow-lg border border-[#B392A4]/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-lg text-[#532D2A]">
                  {selectedItems.length} item
                  {selectedItems.length > 1 ? "s" : ""} selected
                </div>
                <div className="text-[#532D2A]/70">
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
                  className="px-4 py-2 border border-[#B392A4]/30 rounded-lg hover:bg-[#B392A4]/10 transition-colors text-sm text-[#532D2A]"
                >
                  Clear
                </button>
                <button
                  onClick={handleBulkOrder}
                  className="bg-[#B392A4] hover:bg-[#532D2A] text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 text-sm hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order All via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid with Watermark */}
        {searchFilteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchFilteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: product.id * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#B392A4]/20 group"
              >
                {/* Product Image with Watermark */}
                <div className="relative h-56 overflow-hidden">
                  <Watermark
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={isMobile ? 100 : 100}
                    watermarkOpacity={0.5}
                    watermarkPosition="center"
                    watermarkGap={0}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2 z-10">
                    {product.bestseller && (
                      <span className="px-2 py-1 bg-[#B392A4] text-white text-xs font-bold rounded-full">
                        BESTSELLER
                      </span>
                    )}
                    {product.popular && (
                      <span className="px-2 py-1 bg-[#532D2A] text-white text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => toggleItemSelection(product)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 transform hover:scale-110 z-10 ${
                      selectedItems.find((item) => item.id === product.id)
                        ? "bg-[#B392A4] text-white"
                        : "bg-white/90 text-[#532D2A] hover:bg-[#B392A4] hover:text-white"
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
                    <span className="text-xs font-medium px-3 py-1 bg-[#B392A4]/20 text-[#532D2A] rounded-full">
                      {categories.find((c) => c.id === product.category)
                        ?.name || product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#B392A4] fill-current" />
                      <span className="text-sm font-medium text-[#532D2A]">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-[#532D2A] mb-2 line-clamp-1 group-hover:text-[#B392A4] transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#532D2A]/70 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-[#EFE5E7] text-[#532D2A]/70 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price & Delivery */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[#B392A4] font-bold text-xl">
                        {product.price}
                      </div>
                      {product.delivery && (
                        <div className="flex items-center gap-1 text-[#532D2A]/50 text-xs">
                          <Clock className="w-3 h-3" />
                          {product.delivery}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="flex-1 bg-[#B392A4] hover:bg-[#532D2A] text-white py-2.5 rounded-lg hover:shadow-lg transition-all hover:scale-105 text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order
                    </button>
                    <button
                      onClick={() => toggleItemSelection(product)}
                      className={`px-3 py-2.5 border rounded-lg transition-all text-sm ${
                        selectedItems.find((item) => item.id === product.id)
                          ? "bg-[#B392A4] text-white border-[#B392A4]"
                          : "border-[#B392A4]/30 text-[#532D2A] hover:border-[#B392A4]"
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
            <Package className="w-16 h-16 text-[#B392A4]/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#532D2A] mb-2">
              No products found
            </h3>
            <p className="text-[#532D2A]/60">Try selecting a different category</p>
          </div>
        )}

        {/* Bulk Order CTA */}
        <div className="mt-16 bg-[#532D2A] rounded-2xl p-8 text-center text-[#EFE5E7]">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Tell us your requirements and we'll create a personalized stationery
            package just for your wedding
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hello! I need help creating a custom wedding stationery package. Can you help me with this?",
              );
              window.open(
                `https://wa.me/${whatsappNumber}?text=${message}`,
                "_blank",
              );
            }}
            className="bg-[#B392A4] hover:bg-[#EFE5E7] hover:text-[#532D2A] text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-3 shadow-xl hover:scale-105 transform"
          >
            <MessageCircle className="w-6 h-6" />
            Chat for Custom Package
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default WeddingStationery;