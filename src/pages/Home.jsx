import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Star,
  Heart,
  Truck,
  Shield,
  Award,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Gift,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  Search,
  User,
  ShoppingBag,
  Zap,
  TrendingUp,
  CheckCircle,
  Play,
  Pause,
  Eye,
  ArrowRight,
} from "lucide-react";
import Watermark from "../components/Watermark";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const videoRefs = useRef([]);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track image loading
  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id, e) => {
    console.error(`Image failed to load: ${id}`);
    setImagesLoaded((prev) => ({ ...prev, [id]: false }));
    e.target.src = "https://via.placeholder.com/400x500?text=Wedding+House";
  };

  // Wedding stationery themed slides
  const slides = [
    {
      id: 1,
      type: "video",
      src: "/videos/slide1 (1).mp4",
      mobileSrc: "/videos/slide1 (1).mp4",
      poster: "/images/gallery/banner2-poster.jpg",
      title: "Royal Wedding Cards",
      subtitle: "Announce Your Big Day in Royal Style",
      cta: "Explore Collection",
      overlay: "from-amber-600/30 via-maroon/20 to-rose-600/30",
    },
    {
      id: 2,
      type: "video",
      src: "/videos/slide1 (2).mp4",
      mobileSrc: "/videos/slide1 (2).mp4",
      title: "Elegant Stationery",
      subtitle: "Designing the First Impression of Your Wedding",
      cta: "View Designs",
      overlay: "from-blue-600/30 via-purple-400/20 to-pink-600/30",
    },
    {
      id: 3,
      type: "video",
      src: "/videos/slide1 (4).mp4",
      mobileSrc: "/videos/slide1 (4).mp4",
      title: "Wedding Hampers",
      subtitle: "Elegance Printed. Memories Delivered.",
      cta: "Shop Now",
      overlay: "from-emerald-600/30 via-teal-400/20 to-cyan-600/20",
    },
    {
      id: 4,
      type: "video",
      src: "/videos/slide1 (5).mp4",
      poster: "/images/gallery/banner5.jpeg",
      title: "Luxury Hampers",
      subtitle: "Premium Gift Boxes for Your Guests",
      cta: "Discover Luxury",
      overlay: "from-rose-600/30 via-pink-400/20 to-red-300/30",
    },
  ];

  // Enhanced categories with more data
  const categories = [
    {
      id: 1,
      name: "Wedding Cards",
      image: "/products/vivah-sutra (2).png",
      mobileImage: "/products/vivah-sutra (2)-mobile.png",
      link: "/weddingcards",
      description: "Exquisite wedding invitations",
      count: 150,
      color: "from-rose-500 to-amber-500",
    },
    {
      id: 2,
      name: "Wedding Stationery",
      image: "/images/products/stationary.png",
      mobileImage: "/images/products/stationary-mobile.png",
      link: "/weddingstationery",
      description: "Complete your wedding ensemble",
      count: 85,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Digital Invitations",
      image: "/images/thumbnail/1.png",
      mobileImage: "/images/thumbnail/1-mobile.png",
      link: "/e-invite",
      description: "Modern & instant",
      count: 45,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Wedding Hampers",
      image: "/products/hamper.png",
      mobileImage: "/products/hamper-mobile.png",
      link: "/hamper",
      description: "Luxury gift boxes",
      count: 30,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Shagun Envelopes",
      image: "/images/products/copperfoil.png",
      mobileImage: "/images/products/copperfoil-mobile.png",
      link: "/shagunenvelopes",
      description: "Luxury envelopes",
      count: 25,
      color: "from-orange-500 to-red-500",
    },
  ];

  // Enhanced featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Gold Foil Card",
      price: "₹500",
      originalPrice: "₹650",
      image: "/products/gold-Foil (4).png",
      mobileImage: "/products/gold-Foil (4)-mobile.png",
      rating: 4.8,
      reviews: 124,
      category: "Premium",
      badge: "Best Seller",
      badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
    {
      id: 2,
      name: "Luxury Card",
      price: "₹255",
      originalPrice: "₹350",
      image: "/products/luxury (2).webp",
      mobileImage: "/products/luxury (2)-mobile.webp",
      rating: 4.9,
      reviews: 98,
      category: "Luxury",
      badge: "Trending",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Luxury Embossed Card",
      price: "₹445",
      originalPrice: "₹550",
      image: "/products/emboss (2).webp",
      mobileImage: "/products/emboss (2)-mobile.webp",
      rating: 4.7,
      reviews: 76,
      category: "Premium",
      badge: "New Arrival",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Traditional Farman",
      price: "₹149",
      originalPrice: "₹199",
      image: "/products/farman-wed-card (4).png",
      mobileImage: "/products/farman-wed-card (4)-mobile.png",
      rating: 4.8,
      reviews: 203,
      category: "Traditional",
    },
    {
      id: 5,
      name: "Legend Card",
      price: "₹450",
      originalPrice: "₹580",
      image: "/images/products/legend (1).png",
      mobileImage: "/images/products/legend (1)-mobile.png",
      rating: 4.8,
      reviews: 67,
      category: "Premium",
      badge: "Limited Edition",
      badgeColor: "bg-gradient-to-r from-red-500 to-rose-500",
    },
    {
      id: 6,
      name: "Natural Card",
      price: "₹265",
      originalPrice: "₹340",
      image: "/images/products/Natural (1).webp",
      mobileImage: "/images/products/Natural (1)-mobile.webp",
      rating: 4.9,
      reviews: 112,
      category: "Luxury",
    },
  ];

  // Enhanced testimonials with more details
  const testimonials = [
    {
      name: "Priya & Raj",
      quote: "The cards were absolutely stunning! Everyone appreciated the gold foil work. The quality exceeded our expectations.",
      rating: 5,
      location: "Indore",
      date: "March 2024",
      image: "https://via.placeholder.com/60x60?text=PR",
      event: "Wedding",
    },
    {
      name: "Ananya & Vikram",
      quote: "Beautiful designs and excellent service! The team was very helpful throughout the process and delivered on time.",
      rating: 5,
      location: "Delhi",
      date: "February 2024",
      image: "https://via.placeholder.com/60x60?text=AV",
      event: "Engagement",
    },
    {
      name: "Neha & Arjun",
      quote: "The hamper packaging was luxurious! Our guests loved the attention to detail and the premium quality.",
      rating: 5,
      location: "Bangalore",
      date: "January 2024",
      image: "https://via.placeholder.com/60x60?text=NA",
      event: "Wedding",
    },
  ];

  // Stats for social proof
  const stats = [
    { value: "10K+", label: "Happy Couples", icon: <Heart className="w-6 h-6" /> },
    { value: "500+", label: "Designs", icon: <Sparkles className="w-6 h-6" /> },
    { value: "50+", label: "Cities", icon: <MapPin className="w-6 h-6" /> },
    { value: "24/7", label: "Support", icon: <MessageCircle className="w-6 h-6" /> },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getImageSrc = (item) => {
    if (isMobile && item.mobileImage) {
      return item.mobileImage;
    }
    return item.image;
  };

  // Scroll to top on navigation
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-white via-cream/20 to-white">
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110 pointer-events-none"
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={slide.poster}
              className="absolute inset-0 w-full h-full object-cover"
              ref={el => videoRefs.current[index] = el}
            >
              <source src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src} type="video/mp4" />
            </video>

            <div className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.overlay}`} />

            {/* Animated particles */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              {[...Array(isMobile ? 10 : 30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full animate-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div
                className={`w-full max-w-5xl mx-auto text-center text-white transform transition-all duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* <div className="inline-block px-4 py-1 md:px-6 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-3 md:mb-4 animate-fade-in-up">
                  <span className="text-gold text-xs md:text-sm font-semibold tracking-wider">WEDDING HOUSE</span>
                </div> */}

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cinzel font-bold mb-3 md:mb-4 animate-title px-2">
                  {slide.title.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block hover:scale-110 hover:text-gold transition-all duration-300"
                      style={{ animationDelay: `${i * 0.03}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent font-semibold px-2">
                  {slide.subtitle}
                </p>

                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-gold via-white to-gold animate-width" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                  <button
                    onClick={() => handleNavigate("/weddingcards")}
                    className="group relative overflow-hidden bg-gradient-to-r from-maroon to-gold text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base w-full sm:w-auto shadow-lg"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Gift className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      {slide.cta || "Explore Collection"}
                    </span>
                  </button>

                  <a
                    href="https://wa.me/9184351 11188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base w-full sm:w-auto shadow-lg"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Book Consultation
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
        >
          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 sm:w-10 bg-gold"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div
          // className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-maroon z-20 transition-all duration-[6000ms] ease-linear"
          // style={{ width: isAutoPlaying ? "100%" : "0%" }}
        />
      </section>

      {/* Stats Section - Social Proof */}
      <div className="relative -mt-8 sm:-mt-12 z-10 px-4">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-gold mb-2 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-maroon">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Showcase */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Collections
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-maroon mb-3">
              Explore Premium Collections
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Discover our meticulously crafted wedding invitations and stationery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {categories.map((category, idx) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Watermark
                    src={getImageSrc(category)}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={isMobile ? 100 : 120}
                    watermarkOpacity={0.4}
                    watermarkPosition="center"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute top-2 right-2 bg-gold/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-gold text-xs font-bold">{category.count}+</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-cinzel font-bold mb-1">{category.name}</h3>
                    <p className="text-xs text-white/80 mb-2">{category.description}</p>
                    <div className="flex items-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-medium">Explore Now</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-cream/30 to-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-xs sm:text-sm uppercase tracking-wider">Best Sellers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-maroon mb-3">
              Featured Wedding Cards
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Our most popular designs, loved by couples across India
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleNavigate("/weddingcards")}
              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <Watermark
                    src={getImageSrc(product)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={100}
                    watermarkOpacity={0.4}
                    watermarkPosition="center"
                  />

                  {product.badge && (
                    <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-md`}>
                      {product.badge}
                    </span>
                  )}

                  <span className="absolute top-2 right-2 bg-maroon/90 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
                    {product.category}
                  </span>

                  <button
                    className="absolute bottom-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-maroon hover:text-white transition-all duration-300 transform hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to wishlist logic
                    }}
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-maroon px-4 py-2 rounded-full text-sm font-semibold hover:bg-maroon hover:text-white transition-all duration-300 transform hover:scale-105">
                        Quick View
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1 group-hover:text-maroon transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-gold fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gold font-bold text-sm sm:text-base">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 text-xs line-through ml-1">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full text-center py-2 px-3 bg-gradient-to-r from-maroon to-gold text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={() => handleNavigate("/weddingcards")}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-maroon text-maroon rounded-full hover:bg-maroon hover:text-white transition-all duration-300 font-semibold"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-maroon/5 to-gold/5">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Promise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-maroon mb-3">
              Why Choose Wedding House
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Experience the perfect blend of tradition, luxury, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Premium Paper",
                desc: "Highest quality imported paper stocks",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Custom Design",
                desc: "Personalized designs just for you",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Fast Delivery",
                desc: "Pan India shipping with tracking",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Star className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Quality Guarantee",
                desc: "100% satisfaction guaranteed",
                color: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className={`inline-block p-3 sm:p-4 bg-gradient-to-br ${feature.color} bg-opacity-10 rounded-2xl text-maroon mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-gold">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2 group-hover:text-maroon transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced Carousel Style */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-3">
              <span className="text-gold font-semibold text-xs sm:text-sm uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-maroon mb-3">
              What Couples Say
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-maroon mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Real stories from happy couples who trusted us with their special day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cream to-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl sm:text-6xl font-serif text-gold/20 group-hover:text-gold/30 transition-colors duration-300">
                  "
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 italic mb-4 leading-relaxed line-clamp-3">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-maroon flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-maroon">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gold font-semibold">{testimonial.event}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-maroon to-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-white mb-3">
            Ready to Make Your Wedding Memorable?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Let us help you create the perfect first impression with our exquisite wedding invitations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigate("/weddingcards")}
              className="px-6 sm:px-8 py-3 bg-white text-maroon rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Collections
            </button>
            <a
              href="https://wa.me/9184351 11188"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-maroon transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }
        
        .animate-title span {
          animation: fade-in-up 0.4s ease-out forwards;
          opacity: 0;
        }
        
        .animate-width {
          animation: width 0.8s ease-out;
        }
        
        @keyframes width {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;