import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Search,
  Phone,
  Heart,
  ShoppingCart,
  User,
  Package,
  Gift,
  Sparkles,
  Crown,
  Star,
  BookOpen,
  MapPin,
  Camera,
  Calendar,
  Palette,
  Layers,
  Flower2,
  Leaf,
  PartyPopper,
  Download,
  FileText,
  Image,
  Video,
  Mail,
  Tag,
} from "lucide-react";

// SEO Component - Add this to your page
const NavbarSEO = () => {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>Wedding House India - Premium Wedding Cards & Invitations</title>
      <meta name="title" content="Wedding House India - Premium Wedding Cards & Invitations" />
      <meta 
        name="description" 
        content="Explore 500+ premium wedding card designs, digital invitations, and wedding stationery. Best prices, custom designs, and pan-India delivery." 
      />
      <meta 
        name="keywords" 
        content="wedding cards, wedding invitations, digital wedding cards, wedding stationery, shagun envelopes, wedding hampers, Indian wedding cards, luxury wedding invitations, custom wedding cards" 
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Wedding House" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://weddinghouse.online/" />
      <meta property="og:title" content="Wedding House India - Premium Wedding Cards & Invitations" />
      <meta 
        property="og:description" 
        content="Explore 500+ premium wedding card designs, digital invitations, and wedding stationery. Best prices, custom designs, and pan-India delivery." 
      />
      <meta property="og:image" content="https://weddinghouse.online/images/gallery/logo.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://weddinghouse.online/" />
      <meta property="twitter:title" content="Wedding House India - Premium Wedding Cards & Invitations" />
      <meta 
        property="twitter:description" 
        content="Explore 500+ premium wedding card designs, digital invitations, and wedding stationery." 
      />
      <meta property="twitter:image" content="https://weddinghouse.online/images/gallery/logo.png" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wedding House India",
          "url": "https://weddinghouse.online/",
          "description": "Premium wedding cards, digital invitations, and wedding stationery for Indian weddings.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://weddinghouse.online/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Wedding House",
          "url": "https://weddinghouse.online/",
          "logo": "https://weddinghouse.online/images/gallery/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8435111188",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.instagram.com/weddinghouse",
            "https://www.facebook.com/weddinghouse",
            "https://www.youtube.com/weddinghouse"
          ]
        })}
      </script>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const weddingCardsCategories = [
    {
      name: "Anant Bandhan",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Eternal love themed cards",
      slug: "anant-bandhan",
    },
    {
      name: "Farman Card",
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Royal scroll-style invitations",
      slug: "farman-card",
    },
    {
      name: "Forever in Gold",
      icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Gold foil printed elegance",
      slug: "forever-in-gold",
    },
    {
      name: "Legend Wedding Card",
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Legendary designs",
      slug: "legend-wedding-card",
    },
    {
      name: "Riwaaz Wed Card",
      icon: <Flower2 className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Traditional Indian motifs",
      slug: "riwaaz-wed-card",
    },
    {
      name: "Royal Vows",
      icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Regal wedding invitations",
      slug: "royal-vows",
    },
  ];

  const stationeryCategories = [
    {
      name: "Itinerary",
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Wedding schedule cards",
      slug: "itinerary",
    },
    {
      name: "Menu Cards",
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Dining menu for guests",
      slug: "menu-cards",
    },
    {
      name: "Welcome Board",
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Grand welcome signage",
      slug: "welcome-board",
    },
    {
      name: "Thank You Card",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Post-wedding thank you",
      slug: "thank-you-card",
    },
  ];

  const envelopeCategories = [
    {
      name: "Box Envelope",
      icon: <Package className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Premium box envelopes",
      slug: "box-envelope",
    },
    {
      name: "Pocket Envelope",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Compact pocket envelopes",
      slug: "pocket-envelope",
    },
    {
      name: "Regular Envelope",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      description: "Standard size envelopes",
      slug: "regular-envelope",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags - Place this once in your main layout */}
      <NavbarSEO />
      
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Top Bar - Mobile Optimized */}
        <div className="bg-maroon text-white text-xs sm:text-sm py-2 sm:py-3 relative overflow-hidden border-b-2 border-gold/30">
          <div className="container-custom px-2 sm:px-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-1 sm:gap-2">
              {/* Left - Hide on mobile, show on tablet+ */}
              <div className="hidden sm:flex items-center space-x-2 md:space-x-4 z-10 relative">
                <div className="flex items-center space-x-1 bg-black/20 px-2 py-1 rounded-full">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold animate-pulse" />
                  <span className="text-[10px] sm:text-xs">+91 8435111188</span>
                </div>
              </div>

              {/* Center - Train Station Lighting Board - Mobile Responsive */}
              <div className="flex-1 max-w-xs sm:max-w-md md:max-w-2xl mx-1 sm:mx-4 relative overflow-hidden">
                <div className="relative backdrop-blur-sm rounded-lg border border-gold/30 overflow-hidden">
                  <div className="relative h-8 sm:h-10 md:h-12 flex items-center justify-center font-mono">
                    <div className="relative w-full px-2">
                      {/* Offers with animation - Mobile Optimized */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center space-x-1 sm:space-x-3 transition-all duration-1000 ${
                          currentOffer === 0
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                        style={{
                          transformStyle: "preserve-3d",
                          transform:
                            currentOffer === 0
                              ? "rotateX(0deg)"
                              : "rotateX(-90deg)",
                          transition:
                            "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
                        }}
                      >
                        <span className="text-base sm:text-xl md:text-2xl animate-pulse hidden xs:inline">✨</span>
                        <span className="text-gold font-black text-xs sm:text-base md:text-xl tracking-wider bg-black/30 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          FLAT 20% OFF
                        </span>
                        <span className="text-white/60 sm:text-white/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
                          on Wedding Cards
                        </span>
                      </div>
                      <div
                        className={`absolute inset-0 flex items-center justify-center space-x-1 sm:space-x-3 transition-all duration-1000 ${
                          currentOffer === 1
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                        style={{
                          transformStyle: "preserve-3d",
                          transform:
                            currentOffer === 1
                              ? "rotateX(0deg)"
                              : "rotateX(-90deg)",
                          transition:
                            "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
                        }}
                      >
                        <span className="text-base sm:text-xl md:text-2xl animate-pulse hidden xs:inline">🎁</span>
                        <span className="text-gold font-black text-xs sm:text-base md:text-xl tracking-wider bg-black/30 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          FREE HAMPER
                        </span>
                        <span className="text-white/60 sm:text-white/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
                          orders above ₹10000
                        </span>
                      </div>
                      <div
                        className={`absolute inset-0 flex items-center justify-center space-x-1 sm:space-x-3 transition-all duration-1000 ${
                          currentOffer === 2
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                        style={{
                          transformStyle: "preserve-3d",
                          transform:
                            currentOffer === 2
                              ? "rotateX(0deg)"
                              : "rotateX(-90deg)",
                          transition:
                            "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
                        }}
                      >
                        <span className="text-base sm:text-xl md:text-2xl animate-pulse hidden xs:inline">🚚</span>
                        <span className="text-gold font-black text-xs sm:text-base md:text-xl tracking-wider bg-black/30 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          FREE SHIPPING
                        </span>
                        <span className="text-white/60 sm:text-white/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
                          Pan India
                        </span>
                      </div>
                      <div
                        className={`absolute inset-0 flex items-center justify-center space-x-1 sm:space-x-3 transition-all duration-1000 ${
                          currentOffer === 3
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                        style={{
                          transformStyle: "preserve-3d",
                          transform:
                            currentOffer === 3
                              ? "rotateX(0deg)"
                              : "rotateX(-90deg)",
                          transition:
                            "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s",
                        }}
                      >
                        <span className="text-base sm:text-xl md:text-2xl animate-pulse hidden xs:inline">⏰</span>
                        <span className="text-gold font-black text-xs sm:text-base md:text-xl tracking-wider bg-black/30 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          LIMITED TIME
                        </span>
                        <span className="text-white/60 sm:text-white/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
                          Offer Ends Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Hide on mobile, show on tablet+ */}
              <div className="hidden sm:flex items-center space-x-2 md:space-x-4 z-10 relative">
                <Link
                  to="/weddingcards"
                  className="hover:text-gold transition-colors flex items-center bg-black/20 px-2 py-1 rounded-full text-[10px] sm:text-xs"
                >
                  <span className="mr-1">📦</span> Bulk Order
                </Link>
                <span className="text-gray-300 hidden md:inline">|</span>
                <Link
                  to="/gallery"
                  className="hover:text-gold transition-colors flex items-center bg-black/20 px-2 py-1 rounded-full text-[10px] sm:text-xs hidden md:flex"
                >
                  <span className="mr-1">🛍️</span> Products
                </Link>
              </div>
            </div>
          </div>
          {/* Animated border lines - hidden on mobile */}
          <div className="hidden sm:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-flicker"></div>
          <div
            className="hidden sm:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-flicker"
            style={{ animationDelay: "0.30s" }}
          ></div>
        </div>

        {/* Main Header - Mobile Optimized */}
        <div className="border-b border-gray-200">
          <div className="container-custom">
            <div className="flex items-center justify-between py-1 sm:py-2 px-2 sm:px-4 lg:px-6">
              {/* Logo - Responsive */}
              <Link to="/" className="flex-shrink-0" aria-label="Wedding House Home">
                <img
                  width={70}
                  height={70}
                  className="sm:w-[80px] md:w-[100px]"
                  src="/images/gallery/logo.png"
                  alt="Wedding House - Premium Wedding Cards"
                />
              </Link>

              {/* Navigation Links - Desktop */}
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 mx-4">
                {/* Wedding Cards Dropdown */}
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                    aria-expanded={activeDropdown === 'wedding-cards'}
                    aria-haspopup="true"
                  >
                    <span>Wedding Cards</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="grid grid-cols-3 gap-4">
                      {weddingCardsCategories.slice(0, 6).map((cat, index) => (
                        <Link
                          key={index}
                          to={`/weddingcards/${cat.slug}`}
                          className="group/item p-3 hover:bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start gap-2">
                            <div className="text-maroon">{cat.icon}</div>
                            <div>
                              <h4 className="font-medium text-gray-800 group-hover/item:text-maroon transition-colors text-sm">
                                {cat.name}
                              </h4>
                              <p className="text-xs text-gray-500">{cat.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                      <Link
                        to="/weddingcards"
                        className="text-maroon hover:text-gold font-medium text-sm"
                      >
                        View All Wedding Cards →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Wedding Stationery Dropdown */}
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                    aria-expanded={activeDropdown === 'stationery'}
                    aria-haspopup="true"
                  >
                    <span>Wedding Stationery</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {stationeryCategories.map((cat, index) => (
                        <Link
                          key={index}
                          to={`/weddingstationery/${cat.slug}`}
                          className="group/item p-3 hover:bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start gap-2">
                            <div className="text-maroon">{cat.icon}</div>
                            <div>
                              <h4 className="font-medium text-gray-800 group-hover/item:text-maroon transition-colors text-sm">
                                {cat.name}
                              </h4>
                              <p className="text-xs text-gray-500">{cat.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                      <Link
                        to="/weddingstationery"
                        className="text-maroon hover:text-gold font-medium text-sm"
                      >
                        View All Stationery →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Shagun Envelopes Dropdown */}
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                    aria-expanded={activeDropdown === 'envelopes'}
                    aria-haspopup="true"
                  >
                    <span>Shagun Envelopes</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-[350px] bg-white rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="space-y-3">
                      {envelopeCategories.map((cat, index) => (
                        <Link
                          key={index}
                          to={`/shagunenvelopes/${cat.slug}`}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg group/item"
                        >
                          <div className="text-maroon">{cat.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-800 group-hover/item:text-maroon transition-colors text-sm">
                              {cat.name}
                            </h4>
                            <p className="text-xs text-gray-500">{cat.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/hamper"
                  className="text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                >
                  Wedding Hamper
                </Link>
                <Link
                  to="/e-invite"
                  className="text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                >
                  Digital Invitation
                </Link>
                <Link
                  to="/digitalpdf"
                  className="text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                >
                  Digital PDF
                </Link>
                <Link
                  to="/gallery"
                  className="text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                >
                  Gallery
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
                >
                  Contact
                </Link>
              </div>

              {/* Right Icons & Inquiry - Mobile Optimized */}
              <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0">
                {/* Search - Hide on mobile, show on desktop */}
                <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1.5">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border-none outline-none text-sm ml-2 w-32 xl:w-40"
                    aria-label="Search products"
                  />
                </div>

                {/* Mobile Search Icon */}
                <button 
                  className="md:hidden p-1.5 hover:bg-gray-100 rounded-full"
                  aria-label="Search"
                  onClick={() => setIsSearchFocused(!isSearchFocused)}
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </button>

                {/* WhatsApp Quotation Button - Responsive */}
                <button
                  onClick={() => {
                    const phoneNumber = "918435111188";
                    const message = encodeURIComponent(
                      "Hello! I'm interested in your wedding Design & Prints services.",
                    );
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${message}`,
                      "_blank",
                    );
                  }}
                  className="bg-gradient-to-r from-gold to-maroon text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap flex items-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  aria-label="Get Quotation on WhatsApp"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                  <span className="hidden xs:inline">Get Quotation</span>
                  <span className="xs:hidden">Quote</span>
                </button>

                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="lg:hidden p-1.5 hover:bg-gray-100 rounded-full"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search Bar - Conditional */}
            {isSearchFocused && (
              <div className="md:hidden pb-3 px-4">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-l-lg focus:border-gold focus:outline-none text-sm"
                    aria-label="Search products"
                    autoFocus
                  />
                  <button className="bg-maroon text-white px-4 py-2 rounded-r-lg">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu - Improved */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
            <div className="container-custom py-4 px-4 space-y-2">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-maroon font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Wedding Cards */}
              <div className="py-2">
                <div className="font-medium text-gray-700 mb-2 text-sm">
                  Wedding Cards
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {weddingCardsCategories.slice(0, 6).map((cat, index) => (
                    <Link
                      key={index}
                      to={`/weddingcards/${cat.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-maroon p-2 hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-maroon">{cat.icon}</div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Stationery */}
              <div className="py-2 border-t border-gray-100">
                <div className="font-medium text-gray-700 mb-2 text-sm">
                  Wedding Stationery
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {stationeryCategories.map((cat, index) => (
                    <Link
                      key={index}
                      to={`/weddingstationery/${cat.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-maroon p-2 hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-maroon">{cat.icon}</div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Envelopes */}
              <div className="py-2 border-t border-gray-100">
                <div className="font-medium text-gray-700 mb-2 text-sm">
                  Shagun Envelopes
                </div>
                <div className="space-y-1">
                  {envelopeCategories.map((cat, index) => (
                    <Link
                      key={index}
                      to={`/shagunenvelopes/${cat.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-maroon p-2 hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-maroon">{cat.icon}</div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/hamper"
                className="block py-2 text-gray-700 hover:text-maroon border-t border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Wedding Hamper
              </Link>
              <Link
                to="/e-invite"
                className="block py-2 text-gray-700 hover:text-maroon"
                onClick={() => setIsOpen(false)}
              >
                Digital Invitation
              </Link>
              <Link
                to="/digitalpdf"
                className="block py-2 text-gray-700 hover:text-maroon"
                onClick={() => setIsOpen(false)}
              >
                Digital PDF
              </Link>
              <Link
                to="/gallery"
                className="block py-2 text-gray-700 hover:text-maroon border-t border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-maroon"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-maroon"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile WhatsApp Button */}
              <button
                onClick={() => {
                  const phoneNumber = "918435111188";
                  const message = encodeURIComponent(
                    "Hello! I'm interested in your wedding Design & Prints services.",
                  );
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${message}`,
                    "_blank",
                  );
                }}
                className="w-full bg-gradient-to-r from-gold to-maroon text-white px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                Get Quotation on WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Add animation CSS */}
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-flicker {
          animation: flicker 2s ease-in-out infinite;
        }
        @media (max-width: 380px) {
          .container-custom {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;