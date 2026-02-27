import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

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

  const weddingCardsCategories = [
    {
      name: "Anant Bandhan",
      icon: <Heart className="w-5 h-5" />,
      description: "Eternal love themed cards",
      image:
        "https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true,
      price: "₹2,499",
    },
    {
      name: "Farman Card",
      icon: <FileText className="w-5 h-5" />,
      description: "Royal scroll-style invitations",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1,999",
    },
    {
      name: "Forever in Gold",
      icon: <Crown className="w-5 h-5" />,
      description: "Gold foil printed elegance",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true,
      price: "₹3,499",
    },
    {
      name: "Legend Wedding Card",
      icon: <Star className="w-5 h-5" />,
      description: "Legendary designs",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹2,999",
    },
    {
      name: "Riwaaz Wed Card",
      icon: <Flower2 className="w-5 h-5" />,
      description: "Traditional Indian motifs",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1,799",
    },
    {
      name: "Royal Vows",
      icon: <Crown className="w-5 h-5" />,
      description: "Regal wedding invitations",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹3,999",
    },
  ];

  const stationeryCategories = [
    {
      name: "Itinerary",
      icon: <Calendar className="w-5 h-5" />,
      description: "Wedding schedule cards",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true,
      price: "₹199",
    },
    {
      name: "Menu Cards",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Dining menu for guests",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹149",
    },
    {
      name: "Welcome Board",
      icon: <MapPin className="w-5 h-5" />,
      description: "Grand welcome signage",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true,
      price: "₹799",
    },
    {
      name: "Thank You Card",
      icon: <Heart className="w-5 h-5" />,
      description: "Post-wedding thank you",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹149",
    },
  ];

  const envelopeCategories = [
    {
      name: "Box Envelope",
      icon: <Package className="w-5 h-5" />,
      description: "Premium box envelopes",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹499",
    },
    {
      name: "Pocket Envelope",
      icon: <Mail className="w-5 h-5" />,
      description: "Compact pocket envelopes",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹299",
    },
    {
      name: "Regular Envelope",
      icon: <Mail className="w-5 h-5" />,
      description: "Standard size envelopes",
      image:
        "https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true,
      price: "₹199",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      {/* Top Bar - Keep exactly as is */}
      <div className="bg-maroon text-white text-sm py-3 relative overflow-hidden border-b-2 border-gold/30">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 z-10 relative">
              <div className="flex items-center space-x-1 bg-black/20 px-3 py-1 rounded-full">
                <Phone className="w-4 h-4 text-gold animate-pulse" />
                <span>Helpline: 8435111188</span>
              </div>
            </div>

            {/* Center - Train Station Lighting Board */}
            <div className="flex-1 max-w-2xl mx-4 relative overflow-hidden">
              <div className="relative backdrop-blur-sm rounded-lg border border-gold/30 overflow-hidden">
                <div className="relative h-12 flex items-center justify-center font-mono">
                  <div className="relative w-full">
                    {/* Offers with animation */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-1000 ${
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
                      <span className="text-2xl animate-pulse">✨</span>
                      <span className="text-gold font-black text-xl tracking-wider bg-black/30 px-4 py-1 rounded">
                        FLAT 20% OFF
                      </span>
                      <span className="text-white/80">on Wedding Cards</span>
                    </div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-1000 ${
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
                      <span className="text-2xl animate-pulse">🎁</span>
                      <span className="text-gold font-black text-xl tracking-wider bg-black/30 px-4 py-1 rounded">
                        FREE HAMPER
                      </span>
                      <span className="text-white/80">
                        on orders above ₹10000
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-1000 ${
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
                      <span className="text-2xl animate-pulse">🚚</span>
                      <span className="text-gold font-black text-xl tracking-wider bg-black/30 px-4 py-1 rounded">
                        FREE SHIPPING
                      </span>
                      <span className="text-white/80">Pan India</span>
                    </div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-1000 ${
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
                      <span className="text-2xl animate-pulse">⏰</span>
                      <span className="text-gold font-black text-xl tracking-wider bg-black/30 px-4 py-1 rounded">
                        LIMITED TIME
                      </span>
                      <span className="text-white/80">Offer Ends Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 z-10 relative">
              <Link
                to="/bulk-order"
                className="hover:text-gold transition-colors flex items-center bg-black/20 px-3 py-1 rounded-full"
              >
                <span className="mr-1 animate-pulse">📦</span> Bulk Order
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/products"
                className="hover:text-gold transition-colors flex items-center bg-black/20 px-3 py-1 rounded-full"
              >
                <span className="mr-1 animate-pulse">🛍️</span> Products
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-flicker"></div>
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-flicker"
          style={{ animationDelay: "0.30s" }}
        ></div>
      </div>

      {/* Main Header - All in one line with navigation */}
      <div className="border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 px-4 lg:px-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                width={100}
                src="/images/Wedding House Logo........png"
                alt="Wedding House"
              />
            </Link>

            {/* Navigation Links - Moved here */}
            <div className="hidden lg:flex items-center space-x-3 mx-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap"
              >
                
              </Link>
              {/* Wedding Cards Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap">
                  <span>Wedding Cards</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="grid grid-cols-3 gap-4">
                    {weddingCardsCategories.slice(0, 6).map((cat, index) => (
                      <Link
                        key={index}
                        to={`/weddingcards${cat.name.toLowerCase().replace(/ /g, "-")}`}
                        className="group/item p-3 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-start gap-2">
                          <div className="text-maroon">{cat.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-800 group-hover/item:text-maroon transition-colors text-sm">
                              {cat.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {cat.description}
                            </p>
                            <p className="text-xs text-gold font-bold mt-1">
                              {cat.price}
                            </p>
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
              </div>{" "}
              {/* Wedding Stationery Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap">
                  <span>Wedding Stationery</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {stationeryCategories.map((cat, index) => (
                      <Link
                        key={index}
                        to={`/weddingstationory/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                        className="group/item p-3 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-start gap-2">
                          <div className="text-maroon">{cat.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-800 group-hover/item:text-maroon transition-colors text-sm">
                              {cat.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {cat.description}
                            </p>
                            <p className="text-xs text-gold font-bold mt-1">
                              {cat.price}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                    <Link
                      to="/weddingstationory"
                      className="text-maroon hover:text-gold font-medium text-sm"
                    >
                      View All Stationery →
                    </Link>
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
              {/* Shagun Envelopes Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-maroon text-sm font-medium whitespace-nowrap">
                  <span>Shagun Envelopes</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-[350px] bg-white rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="space-y-3">
                    {envelopeCategories.map((cat, index) => (
                      <Link
                        key={index}
                        to={`/shagunenvelope/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg group/item"
                      >
                        <div className="text-maroon">{cat.icon}</div>
                        <div>
                          <h4 className="font-medium text-gray-800 group-hover/item:text-maroon transition-colors text-sm">
                            {cat.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {cat.description}
                          </p>
                          <p className="text-xs text-gold font-bold mt-1">
                            {cat.price}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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

            {/* Search Bar - Made smaller */}
            {/* <div className="flex-grow max-w-xs mx-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-l-lg focus:border-gold focus:outline-none text-sm"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <button className="bg-maroon text-white px-3 py-1.5 rounded-r-lg hover:bg-opacity-90">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div> */}

            {/* Right Icons & Inquiry */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              {/* <button className="text-gray-700 hover:text-maroon">
                <Heart className="w-5 h-5" />
              </button> */}
              {/* <button className="text-gray-700 hover:text-maroon relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-gold text-maroon text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </button> */}
              {/* <button className="text-gray-700 hover:text-marono flex items-center space-x-1">
                <User className="w-5 h-5" />
                <span className="text-xs font-medium hidden lg:inline">
                  Sign In
                </span>
              </button> */}
              <button
                onClick={() => {
                  const phoneNumber = "918120461118";
                  const message = encodeURIComponent(
                    "Hello! I'm interested in your wedding Design & Prints services.",
                  );
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${message}`,
                    "_blank",
                  );
                }}
                className="bg-gradient-to-r from-gold to-maroon text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                Get Quotation
              </button>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3 px-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Search For Products..."
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-l-lg focus:border-gold focus:outline-none"
              />
              <button className="bg-maroon text-white px-4 py-2 rounded-r-lg">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 px-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-maroon"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Wedding Cards */}
            <div className="py-2">
              <div className="font-medium text-gray-700 mb-2">
                Wedding Cards
              </div>
              <div className="grid grid-cols-2 gap-2">
                {weddingCardsCategories.slice(0, 4).map((cat, index) => (
                  <Link
                    key={index}
                    to={`/wedding-cards/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-maroon"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-maroon">{cat.icon}</div>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Stationery */}
            <div className="py-2">
              <div className="font-medium text-gray-700 mb-2">
                Wedding Stationery
              </div>
              <div className="grid grid-cols-2 gap-2">
                {stationeryCategories.slice(0, 4).map((cat, index) => (
                  <Link
                    key={index}
                    to={`/wedding-stationery/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-maroon"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-maroon">{cat.icon}</div>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/wedding-hamper"
              className="block py-2 text-gray-700 hover:text-maroon"
              onClick={() => setIsOpen(false)}
            >
              Wedding Hamper
            </Link>
            <Link
              to="/digital-invitation"
              className="block py-2 text-gray-700 hover:text-maroon"
              onClick={() => setIsOpen(false)}
            >
              Digital Invitation
            </Link>
            <Link
              to="/digital-pdf"
              className="block py-2 text-gray-700 hover:text-maroon"
              onClick={() => setIsOpen(false)}
            >
              Digital PDF
            </Link>

            {/* Mobile Envelopes */}
            <div className="py-2">
              <div className="font-medium text-gray-700 mb-2">
                Shagun Envelopes
              </div>
              <div className="space-y-2">
                {envelopeCategories.map((cat, index) => (
                  <Link
                    key={index}
                    to={`/shagun-envelopes/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-maroon"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-maroon">{cat.icon}</div>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/gallery"
              className="block py-2 text-gray-700 hover:text-maroon"
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
