import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Heart,
  Star,
  Filter,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  MessageCircle,
  Truck,
  Shield,
  Award,
  Check,
  Share2,
} from "lucide-react";

const WeddingCards = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [sortBy, setSortBy] = useState("popular");
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [showFilters, setShowFilters] = useState(false);

  // Product View State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'detail'
  
  // Quick View State
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(100);
  const [selectedSet, setSelectedSet] = useState("100");
  const [activeTab, setActiveTab] = useState("description");

  const categories = [
    "Anant Bandhan",
    "Farman Card",
    "Forever in Gold",
    "Legend Wedding Card",
    "Riwaaz Wed Card",
    "Royal Vows",
    "Sunehri Shaadi",
    "Vivah Sutra",
    "Wedding Card",
    "Customized Wedding Card",
    "Beautiful Classic Card",
    "Emboss Card",
    "Gold Effect Card",
    "Luxury Card",
    "Metallic Card",
    "Natural Card",
    "Premium Card",
    "Silver Effect Card",
    "Special Card",
  ];

  // Enhanced product data with more items
  const allCards = [
    {
      id: 1,
      name: "Royal Gold Foil Card",
      category: "Luxury Card",
      price: 2499,
      image: "/images/products/luxury (1).webp",
      rating: 4.8, 
      reviews: 128,
      popular: true,
      new: false,
      description:
        "Elegant gold foil printed wedding card with traditional Indian motifs. Features premium matte finish paper and comes with matching envelopes.",
      images: [
        "/images/products/luxury (1).webp",
        "/images/products/luxury (2).webp",
        "/images/products/luxury (3).webp",
        "/images/products/luxury (4).webp",
      ],
      slabRates: [
        { quantity: 20, price: 2000, perPiece: 100 },
        { quantity: 50, price: 4000, perPiece: 80 },
        { quantity: 100, price: 7000, perPiece: 70 },
        { quantity: 200, price: 13000, perPiece: 65 },
        { quantity: 300, price: 18000, perPiece: 60 },
        { quantity: 500, price: 27500, perPiece: 55 },
      ],
      specifications: [
        { label: "Paper Type", value: "Premium Matte 350 GSM" },
        { label: "Size", value: "5 x 7 inches" },
        { label: "Printing", value: "Gold Foil + Emboss" },
        { label: "Color", value: "Maroon & Gold" },
        { label: "Envelope", value: "Included" },
        { label: "Customization", value: "Available (₹500 extra)" },
      ],
    },
    {
      id: 2,
      name: "Traditional Farman",
      category: "Farman Card",
      price: 1999,
      image: "/images/products/farman-wed-card (3).png",
      rating: 4.7,
      reviews: 95,
      popular: true,
      new: false,
      description:
        "Traditional Farman style wedding card with intricate designs. Perfect for traditional Indian weddings.",
      images: [
        "/images/products/farman-wed-card (3).png",
        "/images/products/farman-wed-card (4).png",
        "/images/products/farman-wed-card (6).png",
        "/images/products/farman-wed-card (7).png",
      ],    
      slabRates: [
        { quantity: 20, price: 1600, perPiece: 80 },
        { quantity: 50, price: 3500, perPiece: 70 },
        { quantity: 100, price: 6000, perPiece: 60 },
        { quantity: 200, price: 11000, perPiece: 55 },
        { quantity: 300, price: 15000, perPiece: 50 }, 
        { quantity: 500, price: 22500, perPiece: 45 },
      ],
      specifications: [
        { label: "Paper Type", value: "Textured 300 GSM" },
        { label: "Size", value: "5 x 7 inches" },
        { label: "Printing", value: "Digital Print" },
        { label: "Color", value: "Multicolor" },
        { label: "Envelope", value: "Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 3,
      name: "Anant Bandhan Special",
      category: "Anant Bandhan",
      price: 3499,
      image: "/images/products/anant-bandhan (1).png",
      rating: 4.9,
      reviews: 156,
      popular: true,
      new: true,
      description:
        "Beautiful Anant Bandhan design symbolizing eternal love. Features intricate patterns and gold accents.",
      images: [
        "/images/products/anant-bandhan (1).png",
        "/images/products/anant-bandhan (2).png",
        "/images/products/anant-bandhan (3).png",
        "/images/products/anant-bandhan (4).png",
      ],
      slabRates: [
        { quantity: 20, price: 2800, perPiece: 140 },
        { quantity: 50, price: 6000, perPiece: 120 },
        { quantity: 100, price: 10500, perPiece: 105 },
        { quantity: 200, price: 19000, perPiece: 95 },
        { quantity: 300, price: 25500, perPiece: 85 },
        { quantity: 500, price: 37500, perPiece: 75 },
      ],
      specifications: [
        { label: "Paper Type", value: "Premium Silk 400 GSM" },
        { label: "Size", value: "6 x 8 inches" },
        { label: "Printing", value: "Gold Foil + Emboss" },
        { label: "Color", value: "Maroon & Gold" },
        { label: "Envelope", value: "Premium Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 4,
      name: "Royal Vows Gold",
      category: "Royal Vows",
      price: 2999,
      image: "/images/products/Royal Vows-631 (1).png",
      rating: 4.8,
      reviews: 112,
      popular: false,
      new: false,
      description:
        "Royal Vows collection featuring regal designs perfect for royal-themed weddings.",
      images: [
        "/images/products/Royal Vows-631 (1).png",
        "/images/products/Royal Vows-631 (2).png",
        "/images/products/Royal Vows-631 (3).png",
        "/images/products/Royal Vows-631 (4).png",
      ],
      slabRates: [
        { quantity: 20, price: 2400, perPiece: 120 },
        { quantity: 50, price: 5000, perPiece: 100 },
        { quantity: 100, price: 9000, perPiece: 90 },
        { quantity: 200, price: 16000, perPiece: 80 },
        { quantity: 300, price: 21000, perPiece: 70 },
        { quantity: 500, price: 30000, perPiece: 60 },
      ],
      specifications: [
        { label: "Paper Type", value: "Premium Matte 350 GSM" },
        { label: "Size", value: "5 x 7 inches" },
        { label: "Printing", value: "Gold Foil" },
        { label: "Color", value: "Gold & White" },
        { label: "Envelope", value: "Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 5,
      name: "Sunehri Shaadi Deluxe",
      category: "Sunehri Shaadi",
      price: 4499,
      image: "/images/products/Sunehri Shaad-L-09 (1).png",
      rating: 4.9,
      reviews: 203,
      popular: true,
      new: true,
      description:
        "Luxurious golden wedding card for grand celebrations. Features intricate gold work on premium paper.",
      images: [
        "/images/products/Sunehri Shaad-L-09 (1).png",
        "/images/products/Sunehri Shaad-L-09 (2).png",
        "/images/products/Sunehri Shaad-L-09 (3).png",
        "/images/products/Sunehri Shaad-L-09 (4).png",
      ],
      slabRates: [
        { quantity: 20, price: 3600, perPiece: 180 },
        { quantity: 50, price: 8000, perPiece: 160 },
        { quantity: 100, price: 14000, perPiece: 140 },
        { quantity: 200, price: 25000, perPiece: 125 },
        { quantity: 300, price: 33000, perPiece: 110 },
        { quantity: 500, price: 47500, perPiece: 95 },
      ],
      specifications: [
        { label: "Paper Type", value: "Premium Silk 400 GSM" },
        { label: "Size", value: "6 x 8 inches" },
        { label: "Printing", value: "Gold Foil + Emboss" },
        { label: "Color", value: "Gold & Maroon" },
        { label: "Envelope", value: "Premium Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 6,
      name: "Vivah Sutra Classic",
      category: "Vivah Sutra",
      price: 2799,
      image: "/images/products/vivah-sutra (1).png",
      rating: 4.6,
      reviews: 87,
      popular: false,
      new: false,
      description:
        "Classic Vivah Sutra design with traditional elements. Perfect for Hindu wedding ceremonies.",
      images: [
        "/images/products/vivah-sutra (1).png",
        "/images/products/vivah-sutra (2).png",
        "/images/products/vivah-sutra (3).png",
        "/images/products/vivah-sutra (4).png",
      ],
      slabRates: [
        { quantity: 20, price: 2200, perPiece: 110 },
        { quantity: 50, price: 4800, perPiece: 96 },
        { quantity: 100, price: 8400, perPiece: 84 },
        { quantity: 200, price: 15000, perPiece: 75 },
        { quantity: 300, price: 19800, perPiece: 66 },
        { quantity: 500, price: 28000, perPiece: 56 },
      ],
      specifications: [
        { label: "Paper Type", value: "Matte 300 GSM" },
        { label: "Size", value: "5 x 7 inches" },
        { label: "Printing", value: "Digital Print" },
        { label: "Color", value: "Red & Gold" },
        { label: "Envelope", value: "Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 7,
      name: "Forever in Gold",
      category: "Forever in Gold",
      price: 3999,
      image: "/images/products/legend (1).png",
      rating: 4.8,
      reviews: 145,
      popular: true,
      new: false,
      description:
        "Elegant gold-themed wedding card symbolizing forever love. Features rose gold accents.",
      images: [
        "/images/products/legend (1).png",
        "/images/products/legend (2).png",
        "/images/products/legend (3).png",
        "/images/products/legend (4).png",
      ],
      slabRates: [
        { quantity: 20, price: 3200, perPiece: 160 },
        { quantity: 50, price: 7000, perPiece: 140 },
        { quantity: 100, price: 12000, perPiece: 120 },
        { quantity: 200, price: 21000, perPiece: 105 },
        { quantity: 300, price: 27000, perPiece: 90 },
        { quantity: 500, price: 37500, perPiece: 75 },
      ],
      specifications: [
        { label: "Paper Type", value: "Premium Silk 350 GSM" },
        { label: "Size", value: "5.5 x 7.5 inches" },
        { label: "Printing", value: "Rose Gold Foil" },
        { label: "Color", value: "Gold & White" },
        { label: "Envelope", value: "Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 8,
      name: "Legend Wedding Card",
      category: "Legend Wedding Card",
      price: 3299,
      image: "/images/products/legend (1).png",
      rating: 4.7,
      reviews: 78,
      popular: false,
      new: true,
      description:
        "Legendary design for your legendary love story. Unique and memorable wedding invitation.",
      images: [
        "/images/products/legend (1).png",
        "/images/products/legend (2).png",
        "/images/products/legend (3).png",
        "/images/products/legend (4).png",
      ],
      slabRates: [
        { quantity: 20, price: 2600, perPiece: 130 },
        { quantity: 50, price: 5800, perPiece: 116 },
        { quantity: 100, price: 10000, perPiece: 100 },
        { quantity: 200, price: 18000, perPiece: 90 },
        { quantity: 300, price: 24000, perPiece: 80 },
        { quantity: 500, price: 33000, perPiece: 66 },
      ],
      specifications: [
        { label: "Paper Type", value: "Premium Matte 350 GSM" },
        { label: "Size", value: "6 x 8 inches" },
        { label: "Printing", value: "Silver Foil" },
        { label: "Color", value: "Blue & Silver" },
        { label: "Envelope", value: "Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 9,
      name: "Riwaaz Wed Card",
      category: "Riwaaz Wed Card",
      price: 2199,
      image: "/images/products/riwaaz (1).png",
      rating: 4.5,
      reviews: 92,
      popular: false,
      new: false,
      description:
        "Traditional Riwaaz design with cultural elements. Perfect for traditional weddings.",
      images: [
        "/images/products/riwaaz (1).png",
        "/images/products/riwaaz (2).png",
        "/images/products/riwaaz (3).png",
        "/images/products/riwaaz (4).png",
      ],
      slabRates: [
        { quantity: 20, price: 1800, perPiece: 90 },
        { quantity: 50, price: 4000, perPiece: 80 },
        { quantity: 100, price: 7000, perPiece: 70 },
        { quantity: 200, price: 13000, perPiece: 65 },
        { quantity: 300, price: 17400, perPiece: 58 },
        { quantity: 500, price: 25000, perPiece: 50 },
      ],
      specifications: [
        { label: "Paper Type", value: "Matte 300 GSM" },
        { label: "Size", value: "5 x 7 inches" },
        { label: "Printing", value: "Digital Print" },
        { label: "Color", value: "Red & Gold" },
        { label: "Envelope", value: "Included" },
        { label: "Customization", value: "Available" },
      ],
    },
    {
      id: 10,
      name: "Emboss Card Premium",
      category: "Emboss Card",
      price: 3799,
      image: "/images/products/emboss (1).webp",
      rating: 4.8,
      reviews: 134,
      popular: true,
      new: false,
      description:
        "Beautiful embossed card with raised textures. Adds a touch of elegance to your invitation.",
      images: [
        "/images/products/emboss (1).webp",
        "/images/products/emboss (2).webp",
        "/images/products/emboss (3).webp",
        "/images/products/emboss (4).webp",
      ],
      slabRates: [
        { quantity: 20, price: 3000, perPiece: 150 },
        { quantity: 50, price: 6500, perPiece: 130 },
        { quantity: 100, price: 11500, perPiece: 115 },
        { quantity: 200, price: 20000, perPiece: 100 },
        { quantity: 300, price: 26400, perPiece: 88 },
        { quantity: 500, price: 37500, perPiece: 75 },
      ],
      specifications: [
        { label: "Paper Type", value: "Premium Textured 350 GSM" },
        { label: "Size", value: "5 x 7 inches" },
        { label: "Printing", value: "Emboss + Gold Foil" },
        { label: "Color", value: "Maroon & Gold" },
        { label: "Envelope", value: "Premium Included" },
        { label: "Customization", value: "Available" },
      ],
    },
  ];

  // Update selected category when URL param changes
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [category]);

  // Debug: Log current selected category and cards
  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("All Cards:", allCards.map(c => ({ name: c.name, category: c.category })));
  }, [selectedCategory]);

  // Filter cards based on selected category and price range
  const filteredCards = allCards.filter((card) => {
    // Convert both to lowercase slugs for comparison
    const cardCategorySlug = card.category.toLowerCase().replace(/ /g, "-");
    const selectedCategorySlug = selectedCategory.toLowerCase();
    
    const matchesCategory = selectedCategory === "all" || cardCategorySlug === selectedCategorySlug;
    
    const matchesPrice = card.price >= priceRange.min && card.price <= priceRange.max;
    
    // Debug log for first few cards
    if (card.id <= 3) {
      console.log(`Card: ${card.name}, Category: ${card.category}, Slug: ${cardCategorySlug}, Selected: ${selectedCategorySlug}, Match: ${matchesCategory}`);
    }
    
    return matchesCategory && matchesPrice;
  });

  // Sort cards
  const sortedCards = [...filteredCards].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  const handleCategoryClick = (cat) => {
    const categorySlug = cat.toLowerCase().replace(/ /g, "-");
    console.log("Clicking category:", cat, "Slug:", categorySlug);
    setSelectedCategory(categorySlug);
    navigate(`/weddingcards/${categorySlug}`);
    setFilterOpen(false);
    setShowFilters(false); // Close mobile filters after selection
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSortBy("popular");
    setPriceRange({ min: 0, max: 10000 });
    navigate("/weddingcards");
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  // Product View Functions
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setViewMode("detail");
    setSelectedImage(0);
    setSelectedSet("100");
    setQuantity(100);
    setActiveTab("description");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToGrid = () => {
    setSelectedProduct(null);
    setViewMode("grid");
  };

  // Quick View Functions
  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setSelectedImage(0);
    setSelectedSet("100");
    setQuantity(100);
    setActiveTab("description");
    document.body.style.overflow = "hidden";
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (quickViewProduct) {
      setSelectedImage((prev) => (prev + 1) % quickViewProduct.images.length);
    }
  };

  const prevImage = () => {
    if (quickViewProduct) {
      setSelectedImage(
        (prev) =>
          (prev - 1 + quickViewProduct.images.length) %
          quickViewProduct.images.length,
      );
    }
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => Math.min(prev + 50, 1000));
    } else {
      setQuantity((prev) => Math.max(prev - 50, 50));
    }
  };

  const getCurrentPrice = () => {
    if (!quickViewProduct && !selectedProduct) return 0;
    const product = quickViewProduct || selectedProduct;
    const slab =
      product.slabRates.find(
        (s) => s.quantity === parseInt(selectedSet),
      ) || product.slabRates[2];
    return slab.price;
  };

  const getPerPiecePrice = () => {
    if (!quickViewProduct && !selectedProduct) return 0;
    const product = quickViewProduct || selectedProduct;
    const slab =
      product.slabRates.find(
        (s) => s.quantity === parseInt(selectedSet),
      ) || product.slabRates[2];
    return slab.perPiece;
  };

  const whatsappNumber = "918120461118";

  const handleWhatsAppOrder = () => {
    const product = quickViewProduct || selectedProduct;
    if (!product) return;
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering:\n\n` +
        `Product: ${product.name}\n` +
        `Quantity: ${selectedSet} pieces\n` +
        `Price: ₹${getCurrentPrice().toLocaleString()}\n` +
        `Per Piece: ₹${getPerPiecePrice()}\n` +
        `Category: ${product.category}`,
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const features = [
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Free Shipping on orders above ₹5000",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Premium Quality Guaranteed",
    },
    { icon: <Award className="w-5 h-5" />, text: "Customization Available" },
    {
      icon: <Check className="w-5 h-5" />,
      text: "Made with Eco-friendly Materials",
    },
  ];

  // Product Detail View
  if (viewMode === "detail" && selectedProduct) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-cream to-white">
        {/* Back Button */}
        <div className="container-custom py-4">
          <button
            onClick={backToGrid}
            className="flex items-center gap-2 text-maroon hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to All Cards
          </button>
        </div>

        {/* Product Detail */}
        <div className="container-custom py-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Images */}
              <div>
                {/* Main Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={selectedProduct.images[selectedImage]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/500x500?text=Product+Image";
                    }}
                  />

                  {/* Navigation Arrows */}
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

                  {/* Wishlist Button */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-rose-50 transition-colors">
                    <Heart className="w-5 h-5 text-rose-500" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {selectedProduct.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-gold scale-105"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/100x100?text=Image";
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg"
                    >
                      <span className="text-maroon">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Details */}
              <div>
                {/* Title & Rating */}
                <h1 className="text-3xl lg:text-4xl font-cinzel font-bold text-maroon mb-2">
                  {selectedProduct.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-gold fill-current" />
                    <span className="ml-1 font-bold">
                      {selectedProduct.rating}
                    </span>
                    <span className="text-gray-500 ml-1">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const product = selectedProduct;
                      if (!product) return;
                      
                      const productImage = window.location.origin + product.image;
                      const productUrl = `${window.location.origin}/product/${product.id}`;
                      
                      const shareText = encodeURIComponent(
                        `🖼️ *Check out this beautiful wedding card from Wedding House!*\n\n` +
                        `✨ *${product.name}*\n` +
                        `💰 Price: ₹${product.price.toLocaleString()}\n` +
                        `⭐ Rating: ${product.rating}/5 (${product.reviews} reviews)\n` +
                        `📸 View Image: ${productImage}\n\n` +
                        `🔗 See full details: ${productUrl}\n\n` +
                        `Visit Wedding House for more amazing designs! 🏠`
                      );
                      
                      window.open(`https://wa.me/?text=${shareText}`, '_blank');
                    }}
                    className="flex items-center gap-1 text-gray-500 hover:text-maroon transition-colors"
                  >
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-gold">
                    ₹{getCurrentPrice().toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-2">
                    (₹{getPerPiecePrice()} per piece)
                  </span>
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
                    onClick={() => setActiveTab("specifications")}
                    className={`pb-2 px-1 font-medium transition-colors relative ${
                      activeTab === "specifications"
                        ? "text-maroon"
                        : "text-gray-500 hover:text-maroon"
                    }`}
                  >
                    Specifications
                    {activeTab === "specifications" && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-maroon"></div>
                    )}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="mb-6">
                  {activeTab === "description" ? (
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProduct.specifications.map((spec, index) => (
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

                {/* Slab Rates Table */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">
                    BUY MORE, SAVE MORE
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-maroon text-white">
                          <th className="p-3 text-left rounded-tl-lg">
                            Quantity
                          </th>
                          <th className="p-3 text-left">
                            Price (Non-Personalised)
                          </th>
                          <th className="p-3 text-left rounded-tr-lg">
                            Per Piece Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.slabRates.map((slab, index) => (
                          <tr
                            key={index}
                            onClick={() =>
                              setSelectedSet(slab.quantity.toString())
                            }
                            className={`border-b cursor-pointer transition-colors ${
                              selectedSet === slab.quantity.toString()
                                ? "bg-gold/20 border-gold"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <td className="p-3 font-medium">
                              {slab.quantity} pieces
                            </td>
                            <td className="p-3">
                              ₹{slab.price.toLocaleString()} INR
                            </td>
                            <td className="p-3">₹{slab.perPiece} per pc</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    For name personalisation or customisation, an additional
                    charge of ₹500 INR will be applicable.
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Quantity:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.slabRates.map((slab) => (
                      <button
                        key={slab.quantity}
                        onClick={() =>
                          setSelectedSet(slab.quantity.toString())
                        }
                        className={`px-4 py-2 rounded-full border transition-colors ${
                          selectedSet === slab.quantity.toString()
                            ? "bg-maroon text-white border-maroon"
                            : "border-gray-300 hover:border-gold"
                        }`}
                      >
                        Set of {slab.quantity}
                      </button>
                    ))}
                  </div>

                  {/* Custom Quantity Selector */}
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-gray-600">
                      Or select custom quantity:
                    </span>
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => handleQuantityChange("decrease")}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-16 text-center font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange("increase")}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">pieces</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Order on WhatsApp
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 text-sm text-gray-500 border-t pt-4">
                  <p>✓ Free shipping on orders above ₹5000</p>
                  <p>✓ Estimated delivery: 5-7 business days</p>
                  <p>✓ 100% satisfaction guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-cinzel font-bold text-maroon mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allCards
                .filter(c => c.id !== selectedProduct.id && c.category === selectedProduct.category)
                .slice(0, 5)
                .map((product) => (
                  <div
                    key={product.id}
                    onClick={() => showProductDetails(product)}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/200x200?text=Product";
                        }}
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-gold font-bold">{formatPrice(product.price)}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (original)
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon via-maroon/90 to-gold py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
              Wedding Cards
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our exquisite collection of wedding cards, crafted with
              love and tradition
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Filter Button */}
      <div className="lg:hidden container-custom py-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
        >
          <span className="font-medium">Filter & Sort</span>
          <Filter className="w-5 h-5 text-maroon" />
        </button>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop & Mobile */}
          <div
            className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-maroon">Filters</h3>
                {(selectedCategory !== "all" ||
                  sortBy !== "popular" ||
                  priceRange.min > 0 ||
                  priceRange.max < 10000) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gold hover:text-maroon flex items-center gap-1"
                  >
                    <X className="w-4 h-4" /> Clear All
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <ChevronDown className="w-4 h-4" /> Categories
                </h4>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  <button
                    onClick={() => handleCategoryClick("all")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === "all"
                        ? "bg-maroon text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat, index) => {
                    const categorySlug = cat.toLowerCase().replace(/ /g, "-");
                    return (
                      <button
                        key={index}
                        onClick={() => handleCategoryClick(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === categorySlug
                            ? "bg-maroon text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        max: parseInt(e.target.value),
                      })
                    }
                    className="w-full accent-maroon"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>{formatPrice(priceRange.min)}</span>
                    <span>{formatPrice(priceRange.max)}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-medium mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Close button for mobile */}
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden w-full mt-6 bg-maroon text-white py-2 rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-3/4">
            {/* Category Tags */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryClick("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === "all"
                      ? "bg-maroon text-white"
                      : "bg-white border border-gray-200 hover:border-gold"
                  }`}
                >
                  All
                </button>
                {categories.slice(0, 8).map((cat, index) => {
                  const categorySlug = cat.toLowerCase().replace(/ /g, "-");
                  return (
                    <button
                      key={index}
                      onClick={() => handleCategoryClick(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                        selectedCategory === categorySlug
                          ? "bg-maroon text-white"
                          : "bg-white border border-gray-200 hover:border-gold"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-bold text-maroon">
                  {sortedCards.length}
                </span>{" "}
                results
                {selectedCategory !== "all" && (
                  <>
                    {" "}
                    for{" "}
                    <span className="font-bold text-gold">
                      {selectedCategory.replace(/-/g, " ")}
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Cards Grid */}
            {sortedCards.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {sortedCards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x400?text=Wedding+Card";
                        }}
                      />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {card.popular && (
                          <span className="bg-gold text-maroon text-xs font-bold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                        {card.new && (
                          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            New
                          </span>
                        )}
                      </div>

                      {/* Category Badge */}
                      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-maroon text-xs font-bold px-3 py-1 rounded-full">
                        {card.category}
                      </span>

                      {/* Overlay with Quick View */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openQuickView(card);
                          }}
                          className="bg-gold text-maroon px-4 py-2 rounded-lg text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Quick View
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-maroon transition-colors">
                        {card.name}
                      </h3>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-gold fill-current" />
                          <span className="ml-1 text-sm font-medium">
                            {card.rating}
                          </span>
                          <span className="text-xs text-gray-500 ml-1">
                            ({card.reviews})
                          </span>
                        </div>
                        <span className="text-gold font-bold text-xl">
                          {formatPrice(card.price)}
                        </span>
                      </div>

                      <button
                        onClick={() => showProductDetails(card)}
                        className="w-full text-center py-2 px-4 border-2 border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-white transition-colors duration-300 font-medium text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😢</div>
                <h3 className="text-2xl font-bold text-maroon mb-2">
                  No Cards Found
                </h3>
                <p className="text-gray-600 mb-6">
                  No cards match your selected filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-maroon text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeQuickView}
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
                    <img
                      src={quickViewProduct.images[selectedImage]}
                      alt={quickViewProduct.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/500x500?text=Product+Image";
                      }}
                    />

                    {/* Navigation Arrows */}
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
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-4 gap-2">
                    {quickViewProduct.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? "border-gold scale-105"
                            : "border-transparent hover:border-gray-300"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/100x100?text=Image";
                          }}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg"
                      >
                        <span className="text-maroon">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div>
                  {/* Title & Rating */}
                  <h1 className="text-3xl font-cinzel font-bold text-maroon mb-2">
                    {quickViewProduct.name}
                  </h1>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-gold fill-current" />
                      <span className="ml-1 font-bold">
                        {quickViewProduct.rating}
                      </span>
                      <span className="text-gray-500 ml-1">
                        ({quickViewProduct.reviews} reviews)
                      </span>
                    </div>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-maroon">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gold">
                      ₹{getCurrentPrice().toLocaleString()}
                    </span>
                    <span className="text-gray-500 ml-2">
                      (₹{getPerPiecePrice()} per piece)
                    </span>
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
                      onClick={() => setActiveTab("specifications")}
                      className={`pb-2 px-1 font-medium transition-colors relative ${
                        activeTab === "specifications"
                          ? "text-maroon"
                          : "text-gray-500 hover:text-maroon"
                      }`}
                    >
                      Specifications
                      {activeTab === "specifications" && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-maroon"></div>
                      )}
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="mb-6">
                    {activeTab === "description" ? (
                      <p className="text-gray-600 leading-relaxed">
                        {quickViewProduct.description}
                      </p>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {quickViewProduct.specifications.map((spec, index) => (
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

                  {/* Slab Rates Table */}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3">
                      BUY MORE, SAVE MORE
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-maroon text-white">
                            <th className="p-3 text-left rounded-tl-lg">
                              Quantity
                            </th>
                            <th className="p-3 text-left">
                              Price (Non-Personalised)
                            </th>
                            <th className="p-3 text-left rounded-tr-lg">
                              Per Piece Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {quickViewProduct.slabRates.map((slab, index) => (
                            <tr
                              key={index}
                              onClick={() =>
                                setSelectedSet(slab.quantity.toString())
                              }
                              className={`border-b cursor-pointer transition-colors ${
                                selectedSet === slab.quantity.toString()
                                  ? "bg-gold/20 border-gold"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <td className="p-3 font-medium">
                                {slab.quantity} pieces
                              </td>
                              <td className="p-3">
                                ₹{slab.price.toLocaleString()} INR
                              </td>
                              <td className="p-3">₹{slab.perPiece} per pc</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      For name personalisation or customisation, an additional
                      charge of ₹500 INR will be applicable.
                    </p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3">Quantity:</h3>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.slabRates.map((slab) => (
                        <button
                          key={slab.quantity}
                          onClick={() =>
                            setSelectedSet(slab.quantity.toString())
                          }
                          className={`px-4 py-2 rounded-full border transition-colors ${
                            selectedSet === slab.quantity.toString()
                              ? "bg-maroon text-white border-maroon"
                              : "border-gray-300 hover:border-gold"
                          }`}
                        >
                          Set of {slab.quantity}
                        </button>
                      ))}
                    </div>

                    {/* Custom Quantity Selector */}
                    <div className="flex items-center gap-4 mt-4">
                      <span className="text-gray-600">
                        Or select custom quantity:
                      </span>
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => handleQuantityChange("decrease")}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-16 text-center font-medium">
                          {quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange("increase")}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-sm text-gray-500">pieces</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={handleWhatsAppOrder}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-6 h-6" />
                      Order on WhatsApp
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 text-sm text-gray-500 border-t pt-4">
                    <p>✓ Free shipping on orders above ₹5000</p>
                    <p>✓ Estimated delivery: 5-7 business days</p>
                    <p>✓ 100% satisfaction guarantee</p>
                  </div>

                  {/* View Full Details Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        closeQuickView();
                        showProductDetails(quickViewProduct);
                      }}
                      className="w-full text-center text-gold hover:text-maroon font-medium transition-colors"
                    >
                      View Full Details →
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

export default WeddingCards;