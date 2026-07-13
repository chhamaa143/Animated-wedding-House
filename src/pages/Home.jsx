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
  Calendar,
} from "lucide-react";
import Watermark from "../components/Watermark";

// Preloader Component
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#EFE5E7] transition-all duration-700 ${
        fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B392A4]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#B392A4]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#532D2A]/5 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#532D2A]/10 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <div 
          className="mb-8"
          style={{
            animation: 'zoomLogo 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          }}
        >
          <img
            src="/images/gallery/logo.png"
            alt="Wedding House"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mx-auto"
          />
        </div>

        <div className="mt-8 w-48 sm:w-56 md:w-64 mx-auto">
          <div className="relative h-1 bg-[#B392A4]/20 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#B392A4] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[#532D2A]/60 text-xs mt-2 font-mono">
            {progress}%
          </p>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-[#B392A4] rounded-full animate-bounce-dot" style={{ animationDelay: '0s' }} />
          <span className="w-2 h-2 bg-[#B392A4] rounded-full animate-bounce-dot" style={{ animationDelay: '0.5s' }} />
          <span className="w-2 h-2 bg-[#B392A4] rounded-full animate-bounce-dot" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      <style>{`
        @keyframes zoomLogo {
          0% { transform: scale(0.5) rotate(-8deg); opacity: 0; }
          20% { transform: scale(1.3) rotate(4deg); opacity: 1; }
          40% { transform: scale(0.85) rotate(-2deg); opacity: 1; }
          60% { transform: scale(1.15) rotate(2deg); opacity: 1; }
          80% { transform: scale(0.95) rotate(-1deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes bounce-dot {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 1; }
        }

        @keyframes float-particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        .animate-bounce-dot {
          animation: bounce-dot 1s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef([]);

  // Search State - Connected to Navbar
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // ============================================
  // BUTTERFLY CURSOR - FOLLOWS CURSOR + ON CLICK
  // ============================================
  useEffect(() => {
    let butterflyTimeout = null;
    let butterflyElement = null;
    let isFlying = false;
    let flutterInterval = null;
    let mouseX = 0;
    let mouseY = 0;
    let butterflyX = 0;
    let butterflyY = 0;
    let animFrameId = null;

    const createButterfly = (x, y) => {
      // Remove existing butterfly
      if (butterflyElement) {
        butterflyElement.remove();
        butterflyElement = null;
      }
      if (butterflyTimeout) {
        clearTimeout(butterflyTimeout);
        butterflyTimeout = null;
      }
      if (flutterInterval) {
        clearInterval(flutterInterval);
        flutterInterval = null;
      }

      // More visible colors
      const colors = ['#B392A4', '#D4AF37', '#E8A87C', '#D4A5A5', '#C49B6C', '#E8D5B7', '#F5E6D3'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const size = 20 + Math.random() * 16;

      butterflyElement = document.createElement('div');
      butterflyElement.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 14 C9 4, 2 6, 2 14 C2 22, 9 24, 14 14Z" 
            fill="${randomColor}" opacity="0.8" stroke="${randomColor}" stroke-width="1.2"/>
          <path d="M14 14 C19 4, 26 6, 26 14 C26 22, 19 24, 14 14Z" 
            fill="${randomColor}" opacity="0.8" stroke="${randomColor}" stroke-width="1.2"/>
          <path d="M14 14 C10 7, 4 9, 4 14 C4 19, 10 21, 14 14Z" 
            fill="${randomColor}" opacity="0.5" stroke="${randomColor}" stroke-width="0.6"/>
          <path d="M14 14 C18 7, 24 9, 24 14 C24 19, 18 21, 14 14Z" 
            fill="${randomColor}" opacity="0.5" stroke="${randomColor}" stroke-width="0.6"/>
          <ellipse cx="14" cy="14" rx="2.5" ry="7" fill="#532D2A" opacity="0.7"/>
          <path d="M14 7 C12.5 4.5, 10.5 3, 9 2.5" stroke="#532D2A" stroke-width="1.2" opacity="0.6" stroke-linecap="round"/>
          <path d="M14 7 C15.5 4.5, 17.5 3, 19 2.5" stroke="#532D2A" stroke-width="1.2" opacity="0.6" stroke-linecap="round"/>
          <circle cx="5" cy="9" r="1.2" fill="#D4AF37" opacity="0.5"/>
          <circle cx="23" cy="9" r="1.2" fill="#D4AF37" opacity="0.5"/>
          <circle cx="6" cy="19" r="1" fill="#D4AF37" opacity="0.4"/>
          <circle cx="22" cy="19" r="1" fill="#D4AF37" opacity="0.4"/>
        </svg>
      `;
      
      butterflyX = x - size/2;
      butterflyY = y - size/2;
      
      butterflyElement.style.cssText = `
        position: fixed;
        left: ${butterflyX}px;
        top: ${butterflyY}px;
        pointer-events: none;
        z-index: 9999;
        user-select: none;
        filter: drop-shadow(0 4px 15px rgba(179, 146, 164, 0.3));
        transition: all 0.05s ease;
      `;
      document.body.appendChild(butterflyElement);

      // Wing flutter
      flutterInterval = setInterval(() => {
        if (!butterflyElement) {
          clearInterval(flutterInterval);
          flutterInterval = null;
          return;
        }
        const wings = butterflyElement.querySelectorAll('path');
        wings.forEach((wing, index) => {
          if (index < 2) {
            const scaleY = 0.3 + Math.sin(Date.now() / 120 + index * 0.7) * 0.5;
            wing.setAttribute('transform', `scale(1, ${scaleY})`);
          }
        });
      }, 25);

      // Animation loop for smooth following
      const followCursor = () => {
        if (!butterflyElement) {
          if (animFrameId) cancelAnimationFrame(animFrameId);
          return;
        }
        
        // Smooth follow with easing
        const dx = mouseX - butterflyX - size/2;
        const dy = mouseY - butterflyY - size/2;
        const speed = 0.15;
        
        butterflyX += dx * speed;
        butterflyY += dy * speed;
        
        butterflyElement.style.left = butterflyX + 'px';
        butterflyElement.style.top = butterflyY + 'px';
        
        animFrameId = requestAnimationFrame(followCursor);
      };

      followCursor();

      // Auto remove after 3 seconds of no movement
      let idleTimeout = setTimeout(() => {
        if (butterflyElement) {
          butterflyElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          butterflyElement.style.opacity = '0';
          butterflyElement.style.transform = 'scale(0.3) rotate(20deg)';
          setTimeout(() => {
            if (butterflyElement) {
              butterflyElement.remove();
              butterflyElement = null;
            }
            if (flutterInterval) {
              clearInterval(flutterInterval);
              flutterInterval = null;
            }
            if (animFrameId) {
              cancelAnimationFrame(animFrameId);
              animFrameId = null;
            }
          }, 500);
        }
      }, 3000);

      butterflyTimeout = setTimeout(() => {
        // Reset idle timeout on movement
        clearTimeout(idleTimeout);
        butterflyTimeout = null;
      }, 100);

      // Store timeout reference
      butterflyElement._idleTimeout = idleTimeout;
      butterflyElement._followFrame = animFrameId;

      isFlying = true;
    };

    // Update mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create butterfly if not flying
      if (!isFlying) {
        if (Math.random() < 0.035) {
          createButterfly(e.clientX, e.clientY);
        }
      } else {
        // Reset idle timeout on movement
        if (butterflyElement && butterflyElement._idleTimeout) {
          clearTimeout(butterflyElement._idleTimeout);
          butterflyElement._idleTimeout = setTimeout(() => {
            if (butterflyElement) {
              butterflyElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              butterflyElement.style.opacity = '0';
              butterflyElement.style.transform = 'scale(0.3) rotate(20deg)';
              setTimeout(() => {
                if (butterflyElement) {
                  butterflyElement.remove();
                  butterflyElement = null;
                }
                if (flutterInterval) {
                  clearInterval(flutterInterval);
                  flutterInterval = null;
                }
                if (animFrameId) {
                  cancelAnimationFrame(animFrameId);
                  animFrameId = null;
                }
                isFlying = false;
              }, 500);
            }
          }, 3000);
        }
      }
    };

    const handleClick = (e) => {
      // Create burst of butterflies on click
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createButterfly(
            e.clientX + (Math.random() - 0.5) * 100,
            e.clientY + (Math.random() - 0.5) * 100
          );
        }, i * 120);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      if (butterflyElement) {
        butterflyElement.remove();
        butterflyElement = null;
      }
      if (butterflyTimeout) {
        clearTimeout(butterflyTimeout);
        butterflyTimeout = null;
      }
      if (flutterInterval) {
        clearInterval(flutterInterval);
        flutterInterval = null;
      }
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Slides Data - Only banner images
  const slides = [
    {
      id: 1,
      type: "image",
      src: "/images/gallery/ban (1).png",
      cta: "Explore Collection",
    },
    {
      id: 2,
      type: "image",
      src: "/images/gallery/ban (2).png",
      cta: "View Designs",
    },
    {
      id: 3,
      type: "image",
      src: "/images/gallery/ban (3).png",
      cta: "Shop Now",
    },
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      name: "Wedding Cards",
      image: "/products/vivah-sutra (2).png",
      mobileImage: "/products/vivah-sutra (2).png",
      link: "/weddingcards",
      description: "Exquisite wedding invitations",
      count: 150,
    },
    {
      id: 2,
      name: "Wedding Stationery",
      image: "/images/products/stationary.png",
      mobileImage: "/images/products/stationary.png",
      link: "/weddingstationery",
      description: "Complete your wedding ensemble",
      count: 85,
    },
    {
      id: 3,
      name: "Digital Invitations",
      image: "/images/thumbnail/1.png",
      mobileImage: "/images/thumbnail/1.png",
      link: "/e-invite",
      description: "Modern & instant",
      count: 45,
    },
    {
      id: 4,
      name: "Wedding Hampers",
      image: "/products/hamper.png",
      mobileImage: "/products/hamper.png",
      link: "/hamper",
      description: "Luxury gift boxes",
      count: 30,
    },
    {
      id: 5,
      name: "Shagun Envelopes",
      image: "/images/products/copperfoil.png",
      mobileImage: "/images/products/copperfoil.png",
      link: "/shagunenvelopes",
      description: "Luxury envelopes",
      count: 25,
    },
  ];

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Gold Foil Card",
      price: "₹500",
      originalPrice: "₹650",
      image: "/products/gold-Foil (4).png",
      mobileImage: "/products/gold-Foil (4).png",
      rating: 4.8,
      reviews: 124,
      category: "Premium",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Luxury Card",
      price: "₹255",
      originalPrice: "₹350",
      image: "/products/luxury (2).webp",
      mobileImage: "/products/luxury (2).webp",
      rating: 4.9,
      reviews: 98,
      category: "Luxury",
      badge: "Trending",
    },
    {
      id: 3,
      name: "Luxury Embossed Card",
      price: "₹445",
      originalPrice: "₹550",
      image: "/products/emboss (2).webp",
      mobileImage: "/products/emboss (2).webp",
      rating: 4.7,
      reviews: 76,
      category: "Premium",
      badge: "New Arrival",
    },
    {
      id: 4,
      name: "Traditional Farman",
      price: "₹149",
      originalPrice: "₹199",
      image: "/products/farman-wed-card (4).png",
      mobileImage: "/products/farman-wed-card (4).png",
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
      mobileImage: "/images/products/legend (1).png",
      rating: 4.8,
      reviews: 67,
      category: "Premium",
      badge: "Limited Edition",
    },
    {
      id: 6,
      name: "Natural Card",
      price: "₹265",
      originalPrice: "₹340",
      image: "/images/products/Natural (1).webp",
      mobileImage: "/images/products/Natural (1).webp",
      rating: 4.9,
      reviews: 112,
      category: "Luxury",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Priya & Raj",
      quote: "The cards were absolutely stunning! Everyone appreciated the gold foil work.",
      rating: 5,
      location: "Indore",
      date: "March 2024",
      event: "Wedding",
    },
    {
      name: "Ananya & Vikram",
      quote: "Beautiful designs and excellent service! The team was very helpful.",
      rating: 5,
      location: "Delhi",
      date: "February 2024",
      event: "Engagement",
    },
    {
      name: "Neha & Arjun",
      quote: "The hamper packaging was luxurious! Our guests loved the attention to detail.",
      rating: 5,
      location: "Bangalore",
      date: "January 2024",
      event: "Wedding",
    },
  ];

  // Stats
  const stats = [
    { value: "10K+", label: "Happy Couples", icon: <Heart className="w-6 h-6" /> },
    { value: "500+", label: "Designs", icon: <Sparkles className="w-6 h-6" /> },
    { value: "50+", label: "Cities", icon: <MapPin className="w-6 h-6" /> },
    { value: "24/7", label: "Support", icon: <MessageCircle className="w-6 h-6" /> },
  ];

  // Search Functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = featuredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.badge?.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleSearchSelect = (path) => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
    handleNavigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container')) {
        setIsSearchOpen(false);
        setSearchResults([]);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#EFE5E7]">
      
      {/* Hero Section */}
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
            <img
              src={slide.src}
              alt="Wedding Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 w-full h-full bg-[#532D2A]/40"></div>

            <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 z-20 flex justify-center px-4 sm:px-6">
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transform transition-all duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <button
                  onClick={() => handleNavigate("/weddingcards")}
                  className="group bg-[#B392A4] hover:bg-[#EFE5E7] hover:text-[#532D2A] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg tracking-wider min-w-[160px]"
                >
                  {slide.cta || "Shop Now"}
                </button>

                <a
                  href="https://wa.me/918435111188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-[#B392A4] hover:bg-[#B392A4] text-white hover:text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base tracking-wider min-w-[160px] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-30 group border border-white/20"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-30 group border border-white/20"
        >
          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-[#B392A4]"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative -mt-8 sm:-mt-12 z-10 px-4">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-[#B392A4] mb-2 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#532D2A]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Showcase */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-[#B392A4]/10 rounded-full mb-3">
              <span className="text-[#B392A4] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Collections
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#532D2A] mb-3">
              Explore Premium Collections
            </h2>
            <div className="w-20 h-0.5 bg-[#B392A4] mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Discover our meticulously crafted wedding invitations and stationery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Watermark
                    src={getImageSrc(category)}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={isMobile ? 100 : 120}
                    watermarkOpacity={0.4}
                    watermarkPosition="center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute top-2 right-2 bg-[#B392A4]/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-[#B392A4] text-xs font-bold">
                      {category.count}+
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-serif font-bold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-white/80 mb-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-[#B392A4] opacity-0 group-hover:opacity-100 transition-all duration-300">
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

      {/* Featured Products */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-[#B392A4]/10 rounded-full mb-3">
              <span className="text-[#B392A4] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Best Sellers
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#532D2A] mb-3">
              Featured Wedding Cards
            </h2>
            <div className="w-20 h-0.5 bg-[#B392A4] mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Our most popular designs, loved by couples across India
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#EFE5E7] rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleNavigate("/weddingcards")}
              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100">
                  <Watermark
                    src={getImageSrc(product)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkSize={100}
                    watermarkOpacity={0.4}
                    watermarkPosition="center"
                  />

                  {product.badge && (
                    <span
                      className={`absolute top-2 left-2 bg-[#B392A4] text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-md`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <span className="absolute top-2 right-2 bg-[#532D2A]/90 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
                    {product.category}
                  </span>

                  <button
                    className="absolute bottom-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-[#B392A4] hover:text-white transition-all duration-300 transform hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-[#532D2A] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#B392A4] hover:text-white transition-all duration-300 transform hover:scale-105">
                        Quick View
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm sm:text-base mb-1 line-clamp-1 group-hover:text-[#B392A4] transition-colors">
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
                                ? "text-[#B392A4] fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#B392A4] font-bold text-sm sm:text-base">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 text-xs line-through ml-1">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full text-center py-2 px-3 bg-[#532D2A] hover:bg-[#B392A4] text-white rounded-lg transition-all duration-300 font-medium text-xs sm:text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={() => handleNavigate("/weddingcards")}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-[#532D2A] text-[#532D2A] rounded-full hover:bg-[#532D2A] hover:text-white transition-all duration-300 font-semibold"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#EFE5E7]">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-[#B392A4]/10 rounded-full mb-3">
              <span className="text-[#B392A4] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Promise
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#532D2A] mb-3">
              Why Choose Wedding House
            </h2>
            <div className="w-20 h-0.5 bg-[#B392A4] mx-auto mb-4"></div>
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
              },
              {
                icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Custom Design",
                desc: "Personalized designs just for you",
              },
              {
                icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Fast Delivery",
                desc: "Pan India shipping with tracking",
              },
              {
                icon: <Star className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Quality Guarantee",
                desc: "100% satisfaction guaranteed",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#B392A4] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <div
                    className="inline-block p-3 sm:p-4 bg-[#B392A4]/10 rounded-2xl text-[#532D2A] mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <div className="text-[#B392A4]">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2 group-hover:text-[#B392A4] transition-colors">
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-[#B392A4]/10 rounded-full mb-3">
              <span className="text-[#B392A4] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#532D2A] mb-3">
              What Couples Say
            </h2>
            <div className="w-20 h-0.5 bg-[#B392A4] mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Real stories from happy couples who trusted us with their special day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-[#EFE5E7] p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl sm:text-6xl font-serif text-[#B392A4]/20 group-hover:text-[#B392A4]/30 transition-colors duration-300">
                  "
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#B392A4] fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 italic mb-4 leading-relaxed line-clamp-3">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#B392A4] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#532D2A]">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[#B392A4] font-semibold">
                          {testimonial.event}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">
                          {testimonial.date}
                        </span>
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
      <section className="py-12 sm:py-16 md:py-20 bg-[#532D2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B392A4] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EFE5E7] rounded-full blur-3xl" />
        </div>

        <div className="container-custom px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Ready to Make Your Wedding Memorable?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Let us help you create the perfect first impression with our exquisite wedding invitations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigate("/weddingcards")}
              className="px-6 sm:px-8 py-3 bg-[#B392A4] hover:bg-[#EFE5E7] hover:text-[#532D2A] text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Collections
            </button>
            <a
              href="https://wa.me/918435111188"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#532D2A] transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
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
          from { width: 0; }
          to { width: 100%; }
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

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Home;