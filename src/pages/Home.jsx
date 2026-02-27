import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Wedding stationery themed slides
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Crafting Memories,",
      subtitle: "Crafting Wedding Invitations That Tell Your Love Story 💍",
      overlay: "from-purple-900/80 via-maroon/70 to-gold/60",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Royal Wedding Cards",
      subtitle: "Announce Your Big Day in Royal Style",
      overlay: "from-amber-900/80 via-maroon/70 to-rose-600/60",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Elegant Stationery",
      subtitle: "Designing the First Impression of Your Wedding",
      overlay: "from-blue-900/80 via-purple-700/70 to-pink-600/60",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Wedding Hampers",
      subtitle: "Elegance Printed. Memories Delivered.",
      overlay: "from-emerald-900/80 via-teal-700/70 to-cyan-600/60",
    },
  ];

  // Floating elements for decoration
  const floatingElements = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      color: "text-gold",
      delay: "0s",
      position: "top-20 left-20",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      color: "text-rose-400",
      delay: "0.5s",
      position: "bottom-20 right-20",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      color: "text-maroon",
      delay: "1s",
      position: "top-40 right-40",
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

  const categories = [
    {
      name: "Wedding Cards",
      image: "/images/products/Wed-Card-2 (20).png",
      link: "/weddingcards",
      description: "Explore our exquisite collection of wedding invitations",
    },
    {
      name: "Wedding Stationery",
      image: "/images/products/stationary.png",
      link: "/weddingstationory",
      description: "Complete your wedding ensemble",
    },
    {
      name: "Digital Invitations",
      image: "/images/thumbnail/1.png",
      link: "/e-invite",
      description: "Modern, elegant, and instant",
    },
    {
      name: "Wedding Hampers",
      image: "/products/hamper.png",
      link: "/hamper",
      description: "Luxury gift boxes for your guests",
    },
    {
      name: "Wedding Cards",
      image: "/images/products/Wed-Card-2 (20).png",
      link: "/weddingcards",
      description: "Explore our exquisite collection of wedding invitations",
    },
    {
      name: "Wedding Stationery",
      image: "/images/products/stationary.png",
      link: "/weddingstationory",
      description: "Complete your wedding ensemble",
    },
    {
      name: "Digital Invitations",
      image: "/images/thumbnail/1.png",
      link: "/e-invite",
      description: "Modern, elegant, and instant",
    },
    {
      name: "Wedding Hampers",
      image: "/products/hamper.png",
      link: "/hamper",
      description: "Luxury gift boxes for your guests",
    },
    {
      name: "Wedding Cards",
      image: "/images/products/Wed-Card-2 (20).png",
      link: "/weddingcards",
      description: "Explore our exquisite collection of wedding invitations",
    },
    {
      name: "Wedding Stationery",
      image: "/images/products/stationary.png",
      link: "/weddingstationory",
      description: "Complete your wedding ensemble",
    },
    {
      name: "Digital Invitations",
      image: "/images/thumbnail/1.png",
      link: "/e-invite",
      description: "Modern, elegant, and instant",
    },
    {
      name: "Wedding Hampers",
      image: "/products/hamper.png",
      link: "/hamper",
      description: "Luxury gift boxes for your guests",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Royal Gold Foil Card",
      price: "₹",
      image: "/products/gold-Foil (4).png",
      rating: 4.8,
      category: "Premium",
    },
    {
      id: 2,
      name: "Luxury Card",
      price: "₹",
      image: "/products/luxury (2).webp",
      rating: 4.9,
      category: "Luxury",
    },
    {
      id: 3,
      name: "Luxury Embossed Card",
      price: "₹",
      image: "/products/emboss (2).webp",
      rating: 4.7,
      category: "Premium",
    },
    {
      id: 4,
      name: "Traditional Farman",
      price: "₹",
      image: "/products/farman-wed-card (4).png",
      rating: 4.8,
      category: "Traditional",
    },
    {
      id: 5,
      name: "Royal Gold Foil Card",
      price: "₹",
      image: "/products/gold-Foil (4).png",
      rating: 4.8,
      category: "Premium",
    },
    {
      id: 6,
      name: "Luxury Card",
      price: "₹",
      image: "/products/luxury (2).webp",
      rating: 4.9,
      category: "Luxury",
    },
    {
      id: 7,
      name: "Luxury Embossed Card",
      price: "₹",
      image: "/products/emboss (2).webp",
      rating: 4.7,
      category: "Premium",
    },
    {
      id: 8,
      name: "Traditional Farman",
      price: "₹",
      image: "/products/farman-wed-card (4).png",
      rating: 4.8,
      category: "Traditional",
    },
    {
      id: 9,
      name: "Royal Gold Foil Card",
      price: "₹",
      image: "/products/gold-Foil (4).png",
      rating: 4.8,
      category: "Premium",
    },
    {
      id: 10,
      name: "Luxury Card",
      price: "₹",
      image: "/products/luxury (2).webp",
      rating: 4.9,
      category: "Luxury",
    },
    {
      id: 11,
      name: "Luxury Embossed Card",
      price: "₹",
      image: "/products/emboss (2).webp",
      rating: 4.7,
      category: "Premium",
    },
    {
      id: 12,
      name: "Traditional Farman",
      price: "₹",
      image: "/products/farman-wed-card (4).png",
      rating: 4.8,
      category: "Traditional",
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

  return (
    <div className="w-full overflow-x-hidden">
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative h-[60vh] w-full overflow-hidden">
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
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.overlay}`}
            />

            {/* Animated Particles */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>

            {/* Floating Wedding Icons */}
            {floatingElements.map((el, i) => (
              <div
                key={i}
                className={`absolute ${el.position} animate-float hidden lg:block`}
                style={{ animationDelay: el.delay }}
              >
                <div className={`${el.color} opacity-30`}>{el.icon}</div>
              </div>
            ))}

            {/* Content - Perfectly Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-full max-w-4xl mx-auto px-4 sm:px-6 text-center text-white transform transition-all duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Animated Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-3 animate-title">
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
                <p className="text-lg sm:text-xl md:text-2xl mb-4 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent font-semibold">
                  {slide.subtitle}
                </p>

                {/* Decorative Line - Centered */}
                <div className="flex justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-maroon mb-4 animate-width" />
                </div>

                {/* Buttons - Centered */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-buttons">
                  <Link
                    to="/weddingcards"
                    className="group relative overflow-hidden bg-gradient-to-r from-maroon to-gold text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm md:text-base w-full sm:w-auto min-w-[200px]"
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
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm md:text-base w-full sm:w-auto min-w-[200px]"
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 group"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 sm:w-12 bg-gold"
                  : "w-4 sm:w-6 bg-white/50 hover:bg-white/80"
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

      {/* Category Showcase - Properly Designed */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Collections
            </span>
            <h2 className="section-title relative inline-block">
              Explore Premium Collections
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-6">
              Discover our meticulously crafted wedding invitations and
              stationery, designed to make your special day truly unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Gift className="w-5 h-5 text-gold" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-cinzel font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-3 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-gold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium">
                        Explore Collection
                      </span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Properly Designed */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
              Best Sellers
            </span>
            <h2 className="section-title relative inline-block">
              Featured Wedding Cards
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-6">
              Our most popular designs, loved by couples across India for their
              elegance and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-gold/90 text-maroon text-xs font-bold px-3 py-1 rounded-full">
                    {product.category}
                  </span>

                  <button
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-maroon hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-maroon transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">(128)</span>
                    </div>
                    <span className="text-gold font-bold text-xl">
                      {product.price}
                    </span>
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="block text-center py-3 px-4 border-2 border-maroon text-maroon rounded-xl hover:bg-maroon hover:text-white transition-all duration-300 font-medium text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Properly Designed */}
      <section className="py-16 bg-gradient-to-b from-cream to-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Promise
            </span>
            <h2 className="section-title relative inline-block">
              Why Choose Wedding House
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-6">
              Experience the perfect blend of tradition, luxury, and exceptional
              service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: "Premium Paper",
                desc: "Highest quality imported paper stocks",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Custom Design",
                desc: "Personalized designs just for you",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: "Fast Delivery",
                desc: "Pan India shipping with tracking",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Quality Guarantee",
                desc: "100% satisfaction guaranteed",
                color: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="inline-block p-4 bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl text-maroon mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-maroon transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gold/10 to-transparent rounded-tl-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Properly Designed */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
              Testimonials
            </span>
            <h2 className="section-title relative inline-block">
              What Couples Say
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-maroon rounded-full"></div>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-6">
              Real stories from happy couples who trusted us with their special
              day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-6xl font-serif text-gold/20">
                  "
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-maroon text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-gold to-maroon rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0) +
                        testimonial.name.split("&")[1]?.charAt(0) || ""}
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
