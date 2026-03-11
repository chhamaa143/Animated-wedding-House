import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import Watermark from "../components/Watermark";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

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
    // Fallback image
    e.target.src = "https://via.placeholder.com/400x500?text=Wedding+House";
  };

  // Wedding stationery themed slides with mixed media
  const slides = [
    {
      id: 1,
      type: "video",
      src: "/videos/slide1 (1).mp4",
      mobileSrc: "/videos/slide1 (1).mp4",
      poster: "/images/gallery/banner2-poster.jpg",
      title: "Royal Wedding Cards",
      subtitle: "Announce Your Big Day in Royal Style",
      overlay: "from-amber-900/80 via-maroon/70 to-rose-600/60",
    },
    {
      id: 2,
      type: "video",
      src: "/videos/slide1 (2).mp4",
      mobileSrc: "/videos/slide1 (2).mp4",
      title: "Elegant Stationery",
      subtitle: "Designing the First Impression of Your Wedding",
      overlay: "from-blue-900/80 via-purple-700/70 to-pink-600/60",
    },
    {
      id: 3,
      type: "video",
      src: "/videos/slide1 (4).mp4",
      mobileSrc: "/videos/slide1 (4).mp4",
      title: "Wedding Hampers",
      subtitle: "Elegance Printed. Memories Delivered.",
      overlay: "from-emerald-900/80 via-teal-700/70 to-cyan-600/60",
    },
    {
      id: 4,
      type: "video",
      src: "/videos/slide1 (5).mp4",
      poster: "/images/gallery/banner5.jpeg",
      title: "Luxury Hampers",
      subtitle: "Premium Gift Boxes for Your Guests",
      overlay: "from-rose-900/80 via-pink-700/70 to-red-600/60",
    },
  ];

  // Floating elements for decoration
  const floatingElements = [
    {
      icon: <Sparkles className="w-4 h-4 md:w-6 md:h-6" />,
      color: "text-gold",
      delay: "0s",
      position: "top-10 left-10 md:top-20 md:left-20",
    },
    {
      icon: <Heart className="w-4 h-4 md:w-6 md:h-6" />,
      color: "text-rose-400",
      delay: "0.5s",
      position: "bottom-10 right-10 md:bottom-20 md:right-20",
    },
    {
      icon: <Gift className="w-4 h-4 md:w-6 md:h-6" />,
      color: "text-maroon",
      delay: "1s",
      position: "top-20 right-10 md:top-40 md:right-40",
    },
    {
      icon: <Sparkles className="w-4 h-4 md:w-6 md:h-6" />,
      color: "text-gold",
      delay: "1.5s",
      position: "bottom-20 left-10 md:bottom-40 md:left-40",
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
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

  // Categories with fallback images
  const categories = [
    {
      id: 1,
      name: "Wedding Cards",
      image: "/products/vivah-sutra (2).png",
      mobileImage: "/products/vivah-sutra (2)-mobile.png",
      fallbackImage: "https://via.placeholder.com/400x500?text=Wedding+Cards",
      link: "/weddingcards",
      description: "Explore our exquisite collection of wedding invitations",
    },
    {
      id: 2,
      name: "Wedding Stationery",
      image: "/images/products/stationary.png",
      mobileImage: "/images/products/stationary-mobile.png",
      fallbackImage:
        "https://via.placeholder.com/400x500?text=Wedding+Stationery",
      link: "/weddingstationery",
      description: "Complete your wedding ensemble",
    },
    {
      id: 3,
      name: "Digital Invitations",
      image: "/images/thumbnail/1.png",
      mobileImage: "/images/thumbnail/1-mobile.png",
      fallbackImage:
        "https://via.placeholder.com/400x500?text=Digital+Invitations",
      link: "/e-invite",
      description: "Modern, elegant, and instant",
    },
    {
      id: 4,
      name: "Wedding Hampers",
      image: "/products/hamper.png",
      mobileImage: "/products/hamper-mobile.png",
      fallbackImage: "https://via.placeholder.com/400x500?text=Wedding+Hampers",
      link: "/hamper",
      description: "Luxury gift boxes for your guests",
    },
    {
      id: 5,
      name: "Shagun Envelopes",
      image: "/images/products/copperfoil.png",
      mobileImage: "/images/products/copperfoil-mobile.png",
      fallbackImage:
        "https://via.placeholder.com/400x500?text=Shagun+Envelopes",
      link: "/shagunenvelopes",
      description: "Luxury Envelopes for your guests",
    },
  ];

  // Featured Products with fallback images
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Gold Foil Card",
      price: "₹500",
      image: "/products/gold-Foil (4).png",
      mobileImage: "/products/gold-Foil (4)-mobile.png",
      fallbackImage: "https://via.placeholder.com/300x300?text=Gold+Foil",
      rating: 4.8,
      category: "Premium",
    },
    {
      id: 2,
      name: "Luxury Card",
      price: "₹255",
      image: "/products/luxury (2).webp",
      mobileImage: "/products/luxury (2)-mobile.webp",
      fallbackImage: "https://via.placeholder.com/300x300?text=Luxury+Card",
      rating: 4.9,
      category: "Luxury",
    },
    {
      id: 3,
      name: "Luxury Embossed Card",
      price: "₹445",
      image: "/products/emboss (2).webp",
      mobileImage: "/products/emboss (2)-mobile.webp",
      fallbackImage: "https://via.placeholder.com/300x300?text=Embossed+Card",
      rating: 4.7,
      category: "Premium",
    },
    {
      id: 4,
      name: "Traditional Farman",
      price: "₹149",
      image: "/products/farman-wed-card (4).png",
      mobileImage: "/products/farman-wed-card (4)-mobile.png",
      fallbackImage:
        "https://via.placeholder.com/300x300?text=Traditional+Farman",
      rating: 4.8,
      category: "Traditional",
    },
    {
      id: 5,
      name: "Legend Card",
      price: "₹450",
      image: "/images/products/legend (1).png",
      mobileImage: "/images/products/legend (1)-mobile.png",
      fallbackImage: "https://via.placeholder.com/300x300?text=Legend+Card",
      rating: 4.8,
      category: "Premium",
    },
    {
      id: 6,
      name: "Natural Card",
      price: "₹265",
      image: "/images/products/Natural (1).webp",
      mobileImage: "/images/products/Natural (1)-mobile.webp",
      fallbackImage: "https://via.placeholder.com/300x300?text=Natural+Card",
      rating: 4.9,
      category: "Luxury",
    },
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      quote:
        "The cards were absolutely stunning! Everyone appreciated the gold foil work.",
      rating: 5,
      location: "Indore",
    },
    {
      name: "Ananya & Vikram",
      quote:
        "Beautiful designs and excellent service! The team was very helpful.",
      rating: 5,
      location: "Delhi",
    },
    {
      name: "Neha & Arjun",
      quote:
        "The hamper packaging was luxurious! Our guests loved the attention to detail.",
      rating: 5,
      location: "Bangalore",
    },
  ];

  const handleViewDetails = () => {
    navigate("/weddingcards");
  };

  // Get appropriate media source based on device
  const getImageSrc = (item) => {
    if (isMobile && item.mobileImage) {
      return item.mobileImage;
    }
    return item.image;
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110 pointer-events-none"
            }`}
          >
            {/* Background Media - Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={slide.poster}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slide.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.overlay}`}
            />

            {/* Animated Particles - Reduced on mobile */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {[...Array(isMobile ? 5 : 15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white/30 rounded-full animate-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>

            {/* Floating Wedding Icons - Hidden on mobile */}
            {!isMobile &&
              floatingElements.map((el, i) => (
                <div
                  key={i}
                  className={`absolute ${el.position} animate-float hidden lg:block`}
                  style={{ animationDelay: el.delay }}
                >
                  <div className={`${el.color} opacity-30`}>{el.icon}</div>
                </div>
              ))}

            {/* Content - Perfectly Centered with responsive text */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div
                className={`w-full max-w-4xl mx-auto text-center text-white transform transition-all duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Animated Title - Mobile optimized */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cinzel font-bold mb-2 md:mb-3 animate-title px-2">
                  {slide.title.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block hover:scale-110 hover:text-gold transition-transform duration-300"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>

                {/* Subtitle with Gradient */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 md:mb-4 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent font-semibold px-2 sm:px-4">
                  {slide.subtitle}
                </p>

                {/* Decorative Line */}
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-gold to-maroon animate-width" />
                </div>

                {/* Buttons - Stack on mobile, row on desktop */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-2 sm:px-4">
                  <Link
                    to="/weddingcards"
                    className="group relative overflow-hidden bg-gradient-to-r from-maroon to-gold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Gift className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Explore More
                    </span>
                  </Link>

                  <a
                    href="https://wa.me/918120461118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base w-full sm:w-auto"
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

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slide Indicators - Mobile optimized */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
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
                  ? "w-6 sm:w-8 md:w-10 bg-gold"
                  : "w-2 sm:w-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-maroon z-20 transition-all duration-5000 ease-linear"
          style={{ width: isAutoPlaying ? "100%" : "0%" }}
        />
      </section>

      {/* Category Showcase - WITH WATERMARK IN CENTER */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-cream to-white">
        <div className="container-custom px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base uppercase tracking-wider mb-2 block">
              Our Collections
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-maroon mb-2 relative inline-block">
              Explore Premium Collections
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6 px-4">
              Discover our meticulously crafted wedding invitations and
              stationery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Watermark
                    src={getImageSrc(category)}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={isMobile ? 100 : 100}
                    watermarkOpacity={0.5}
                    watermarkPosition="center"
                    watermarkGap={0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Category Icon */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10">
                    <Gift className="w-4 h-4 text-gold" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white z-10">
                    <h3 className="text-sm sm:text-base font-cinzel font-bold mb-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-xs text-white/80 mb-2 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-gold group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-xs font-medium">Explore</span>
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - WITH WATERMARK IN CENTER */}
      {/* Featured Products - WITH WATERMARK IN CENTER */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base uppercase tracking-wider mb-2 block">
              Best Sellers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-maroon mb-2 relative inline-block">
              Featured Wedding Cards
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6 px-4">
              Our most popular designs, loved by couples across India
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-lg sm:rounded-t-xl">
                  {/* WATERMARK IS HERE - ON FEATURED PRODUCTS */}
                  <Watermark
                    src={getImageSrc(product)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={isMobile ? 100 : 100}
                    watermarkOpacity={0.5}
                    watermarkPosition="center"
                    watermarkGap={0}
                  />

                  {/* Category Badge */}
                  <span className="absolute top-2 left-2 bg-gold/90 text-maroon text-xs font-bold px-2 py-1 rounded-full z-10">
                    {product.category}
                  </span>

                  <button
                    className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-maroon hover:text-white transition-all duration-300 transform hover:scale-110 z-10"
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1 group-hover:text-maroon transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold fill-current" />
                      <span className="ml-1 text-xs sm:text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-gold font-bold text-sm sm:text-base">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={handleViewDetails}
                    className="w-full text-center py-2 px-3 border border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-white transition-all duration-300 font-medium text-xs sm:text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-cream to-white">
        <div className="container-custom px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base uppercase tracking-wider mb-2 block">
              Our Promise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-maroon mb-2 relative inline-block">
              Why Choose Wedding House
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6 px-4">
              Experience the perfect blend of tradition, luxury, and exceptional
              service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Premium Paper",
                desc: "Highest quality imported paper stocks",
              },
              {
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Custom Design",
                desc: "Personalized designs just for you",
              },
              {
                icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Fast Delivery",
                desc: "Pan India shipping with tracking",
              },
              {
                icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Quality Guarantee",
                desc: "100% satisfaction guaranteed",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="inline-block p-2 sm:p-3 bg-gradient-to-br from-maroon/10 to-gold/10 rounded-lg text-maroon mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-maroon transition-colors">
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

      {/* Testimonials */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base uppercase tracking-wider mb-2 block">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-maroon mb-2 relative inline-block">
              What Couples Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6 px-4">
              Real stories from happy couples who trusted us with their special
              day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cream to-white p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Quote mark */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-5xl md:text-6xl font-serif text-gold/20">
                  "
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-gray-700 italic mb-3 sm:mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-maroon">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-gold to-maroon rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
