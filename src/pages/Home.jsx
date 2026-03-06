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
import Watermark from "../components/Watermark"; // Import watermark component

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Floating elements for decoration (reduced duplicates)
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

  // Categories
  const categories = [
    {
      name: "Wedding Cards",
      image: "/products/vivah-sutra (2).png",
      mobileImage: "/products/vivah-sutra (2)-mobile.png",
      link: "/weddingcards",
      description: "Explore our exquisite collection of wedding invitations",
    },
    {
      name: "Wedding Stationery",
      image: "/images/products/stationary.png",
      mobileImage: "/images/products/stationary-mobile.png",
      link: "/weddingstationery",
      description: "Complete your wedding ensemble",
    },
    {
      name: "Digital Invitations",
      image: "/images/thumbnail/1.png",
      mobileImage: "/images/thumbnail/1-mobile.png",
      link: "/e-invite",
      description: "Modern, elegant, and instant",
    },
    {
      name: "Wedding Hampers",
      image: "/products/hamper.png",
      mobileImage: "/products/hamper-mobile.png",
      link: "/hamper",
      description: "Luxury gift boxes for your guests",
    },
    {
      name: "Shagun Envelopes",
      image: "/images/products/copperfoil.png",
      mobileImage: "/images/products/copperfoil-mobile.png",
      link: "/shagunenvelopes",
      description: "Luxury Envelopes for your guests",
    },
  ];

  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Gold Foil Card",
      price: "₹500 PC",
      image: "/products/gold-Foil (4).png",
      mobileImage: "/products/gold-Foil (4)-mobile.png",
      rating: 4.8,
      category: "Premium",
    },
    {
      id: 2,
      name: "Luxury Card",
      price: "₹255 PC",
      image: "/products/luxury (2).webp",
      mobileImage: "/products/luxury (2)-mobile.webp",
      rating: 4.9,
      category: "Luxury",
    },
    {
      id: 3,
      name: "Luxury Embossed Card",
      price: "₹445 PC",
      image: "/products/emboss (2).webp",
      mobileImage: "/products/emboss (2)-mobile.webp",
      rating: 4.7,
      category: "Premium",
    },
    {
      id: 4,
      name: "Traditional Farman",
      price: "₹149 PC",
      image: "/products/farman-wed-card (4).png",
      mobileImage: "/products/farman-wed-card (4)-mobile.png",
      rating: 4.8,
      category: "Traditional",
    },
    {
      id: 5,
      name: "Legend Card",
      price: "₹450 PC",
      image: "/images/products/legend (1).png",
      mobileImage: "/images/products/legend (1)-mobile.png",
      rating: 4.8,
      category: "Premium",
    },
    {
      id: 6,
      name: "Natural Card",
      price: "₹265 PC",
      image: "/images/products/Natural (1).webp",
      mobileImage: "/images/products/Natural (1)-mobile.webp",
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
      location: "Mumbai",
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
  const getMediaSrc = (item) => {
    if (isMobile && item.mobileSrc) {
      return item.mobileSrc;
    }
    return item.src;
  };

  const getImageSrc = (item) => {
    if (isMobile && item.mobileImage) {
      return item.mobileImage;
    }
    return item.image;
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
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
            {slide.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={slide.poster}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={getMediaSrc(slide)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Watermark
                src={getMediaSrc(slide)}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                watermarkSize={60}
                watermarkOpacity={0.1}
                watermarkPosition="center"
              />
            )}   

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.overlay}`}
            />

            {/* Animated Particles - Reduced on mobile */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {[...Array(isMobile ? 8 : 15)].map((_, i) => (
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

            {/* Floating Wedding Icons - Hidden on mobile, visible on desktop */}
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

            {/* Media Type Indicator - Only on desktop */}
            {!isMobile && slide.type !== "image" && (
              <div className="absolute top-20 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 z-10">
                {slide.type === "video" ? (
                  <>
                    <span>🎬</span> Video Preview
                  </>
                ) : (
                  <>
                    <span>🎨</span> Animated
                  </>
                )}
              </div>
            )}

            {/* Content - Perfectly Centered with responsive text */}
            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4">
              <div
                className={`w-full max-w-4xl mx-auto text-center text-white transform transition-all duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Animated Title - Responsive sizes */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-cinzel font-bold mb-1 sm:mb-2 md:mb-3 animate-title px-2">
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

                {/* Subtitle with Gradient - Responsive */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent font-semibold px-2 sm:px-4">
                  {slide.subtitle}
                </p>

                {/* Decorative Line - Responsive */}
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  <div className="w-8 sm:w-10 md:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-gold to-maroon animate-width" />
                </div>

                {/* Buttons - Responsive */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 justify-center items-center px-2 sm:px-4">
                  <Link
                    to="/weddingcards"
                    className="group relative overflow-hidden bg-gradient-to-r from-maroon to-gold text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-xs sm:text-sm md:text-base w-[40vh] xs:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Gift className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 md:mr-2 group-hover:rotate-12 transition-transform" />
                      Explore More
                    </span>
                  </Link>

                  <a
                    href="https://wa.me/918120461118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-xs sm:text-sm md:text-base w-[40vh] xs:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 md:mr-2 group-hover:rotate-12 transition-transform" />
                      Book Consultation
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slide Indicators - Responsive */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-1.5 md:space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`h-1 sm:h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-4 sm:w-5 md:w-6 lg:w-8 xl:w-12 bg-gold"
                  : "w-2 sm:w-2.5 md:w-3 lg:w-4 xl:w-6 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar - Responsive */}
        <div
          className="absolute bottom-0 left-0 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon z-20 transition-all duration-5000 ease-linear"
          style={{ width: isAutoPlaying ? "100%" : "0%" }}
        />
      </section>

      {/* Category Showcase */}
      <section className="py-8 sm:py-10 md:py-15 bg-gradient-to-b from-cream to-white">
        <div className="container-custom px-3 sm:px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider mb-1 sm:mb-2 block">
              Our Collections
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold text-maroon mb-1 sm:mb-2 relative inline-block">
              Explore Premium Collections
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-14 md:w-16 lg:w-20 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-6 px-3 sm:px-4">
              Discover our meticulously crafted wedding invitations and
              stationery, designed to make your special day truly unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                  <Watermark
                    src={getImageSrc(category)}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={40}
                    watermarkOpacity={0.15}
                    watermarkPosition="bottom-right"
                    watermarkGap={8}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Category Icon */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gold" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 text-white">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-cinzel font-bold mb-0.5 sm:mb-1 md:mb-2 transform group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-white/80 mb-0.5 sm:mb-1 md:mb-3 line-clamp-1 md:line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-gold group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-sm font-medium">
                        Explore
                      </span>
                      <ChevronRight className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 ml-0.5 md:ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container-custom px-3 sm:px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider mb-1 sm:mb-2 block">
              Best Sellers
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold text-maroon mb-1 sm:mb-2 relative inline-block">
              Featured Wedding Cards
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-14 md:w-16 lg:w-20 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-6 px-3 sm:px-4">
              Our most popular designs, loved by couples across India for their
              elegance and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl">
                  <Watermark
                    src={getImageSrc(product)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={35}
                    watermarkOpacity={0.12}
                    watermarkPosition="bottom-right"
                    watermarkGap={6}
                  />

                  {/* Category Badge */}
                  <span className="absolute top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-3 bg-gold/90 text-maroon text-[6px] sm:text-[7px] md:text-[8px] lg:text-xs font-bold px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 lg:px-3 lg:py-1 rounded-full z-20">
                    {product.category}
                  </span>

                  <button
                    className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-3 p-1 sm:p-1 md:p-1.5 lg:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-maroon hover:text-white transition-all duration-300 transform hover:scale-110 z-20"
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4" />
                  </button>
                </div>

                <div className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5">
                  <h3 className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg mb-0.5 sm:mb-1 md:mb-2 line-clamp-1 group-hover:text-maroon transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                    <div className="flex items-center">
                      <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-gold fill-current" />
                      <span className="ml-0.5 sm:ml-0.5 md:ml-1 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-gold font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={handleViewDetails}
                    className="w-full text-center py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-3 px-1 sm:px-2 md:px-3 lg:px-4 border border-maroon md:border-2 text-maroon rounded-lg hover:bg-maroon hover:text-white transition-all duration-300 font-medium text-[6px] sm:text-[7px] md:text-[8px] lg:text-xs xl:text-sm"
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
      <section className="py-8 sm:py-10 md:py-16 bg-gradient-to-b from-cream to-white">
        <div className="container-custom px-3 sm:px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider mb-1 sm:mb-2 block">
              Our Promise
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold text-maroon mb-1 sm:mb-2 relative inline-block">
              Why Choose Wedding House
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-14 md:w-16 lg:w-20 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-6 px-3 sm:px-4">
              Experience the perfect blend of tradition, luxury, and exceptional
              service
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {[
              {
                icon: (
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                ),
                title: "Premium Paper",
                desc: "Highest quality imported paper stocks",
              },
              {
                icon: (
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                ),
                title: "Custom Design",
                desc: "Personalized designs just for you",
              },
              {
                icon: (
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                ),
                title: "Fast Delivery",
                desc: "Pan India shipping with tracking",
              },
              {
                icon: (
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                ),
                title: "Quality Guarantee",
                desc: "100% satisfaction guaranteed",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="inline-block p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 bg-gradient-to-br from-maroon/10 to-gold/10 rounded-lg sm:rounded-xl md:rounded-2xl text-maroon mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-1 sm:mb-1 md:mb-2 lg:mb-3 group-hover:text-maroon transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container-custom px-3 sm:px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <span className="text-gold font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider mb-1 sm:mb-2 block">
              Testimonials
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold text-maroon mb-1 sm:mb-2 relative inline-block">
              What Couples Say
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-14 md:w-16 lg:w-20 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-6 px-3 sm:px-4">
              Real stories from happy couples who trusted us with their special
              day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cream to-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Quote mark */}
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-3 lg:top-4 lg:right-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-gold/20">
                  "
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gold fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-700 italic mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-maroon">
                        {testimonial.name}
                      </h4>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-gradient-to-r from-gold to-maroon rounded-full flex items-center justify-center text-white font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm">
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