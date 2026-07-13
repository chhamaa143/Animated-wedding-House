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

// SEO Component
const NavbarSEO = () => {
  return (
    <>
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
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://weddinghouse.online/" />
      <meta property="og:title" content="Wedding House India - Premium Wedding Cards & Invitations" />
      <meta 
        property="og:description" 
        content="Explore 500+ premium wedding card designs, digital invitations, and wedding stationery. Best prices, custom designs, and pan-India delivery." 
      />
      <meta property="og:image" content="https://weddinghouse.online/images/gallery/logo.png" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://weddinghouse.online/" />
      <meta property="twitter:title" content="Wedding House India - Premium Wedding Cards & Invitations" />
      <meta 
        property="twitter:description" 
        content="Explore 500+ premium wedding card designs, digital invitations, and wedding stationery." 
      />
      <meta property="twitter:image" content="https://weddinghouse.online/images/gallery/logo.png" />
      
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

  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // All Products Data - Centralized for search
  const allProducts = [
    // Wedding Cards
    { id: 1, name: "Royal Gold Foil Card", category: "Wedding Cards", slug: "/weddingcards", image: "/products/gold-Foil (4).png", price: "₹500" },
    { id: 2, name: "Luxury Card", category: "Wedding Cards", slug: "/weddingcards", image: "/products/luxury (2).webp", price: "₹255" },
    { id: 3, name: "Luxury Embossed Card", category: "Wedding Cards", slug: "/weddingcards", image: "/products/emboss (2).webp", price: "₹445" },
    { id: 4, name: "Traditional Farman", category: "Wedding Cards", slug: "/weddingcards", image: "/products/farman-wed-card (4).png", price: "₹149" },
    { id: 5, name: "Legend Card", category: "Wedding Cards", slug: "/weddingcards", image: "/images/products/legend (1).png", price: "₹450" },
    { id: 6, name: "Natural Card", category: "Wedding Cards", slug: "/weddingcards", image: "/images/products/Natural (1).webp", price: "₹265" },
    { id: 7, name: "Anant Bandhan Special", category: "Wedding Cards", slug: "/weddingcards", image: "/products/Anant-Bandhan (1).png", price: "₹280" },
    { id: 8, name: "Royal Vows Gold", category: "Wedding Cards", slug: "/weddingcards", image: "/images/products/Royal Vows-631 (1).png", price: "₹110" },
    { id: 9, name: "Sunehri Shaadi Deluxe", category: "Wedding Cards", slug: "/weddingcards", image: "/images/products/Sunehri Shaad-L-09 (1).png", price: "₹120" },
    { id: 10, name: "Vivah Sutra Classic", category: "Wedding Cards", slug: "/weddingcards", image: "/images/products/vivah-sutra (1).png", price: "₹90" },
    { id: 11, name: "Forever in Gold", category: "Wedding Cards", slug: "/weddingcards", image: "/products/Forever in Gold-L-53 (2).png", price: "₹80" },
    { id: 12, name: "Riwaaz Wed Card", category: "Wedding Cards", slug: "/weddingcards", image: "/products/riwaz (4).png", price: "₹111" },
    { id: 13, name: "Emboss Card", category: "Wedding Cards", slug: "/weddingcards", image: "/images/products/emboss (1).webp", price: "₹445" },
    // Stationery
    { id: 14, name: "Premium Door Hanger", category: "Stationery", slug: "/weddingstationery", image: "/images/products/door-hanger.jpg", price: "₹15 each" },
    { id: 15, name: "Luxury Door Hanger Set", category: "Stationery", slug: "/weddingstationery", image: "/products/doorhanger.webp", price: "₹20 each" },
    { id: 16, name: "Wedding Itinerary Card", category: "Stationery", slug: "/weddingstationery", image: "/products/1 (3).png", price: "₹30 each" },
    { id: 17, name: "Pocket Wedding Timeline", category: "Stationery", slug: "/weddingstationery", image: "/products/itnerary.png", price: "₹25 each" },
    { id: 18, name: "Gold Foil Menu Cards", category: "Stationery", slug: "/weddingstationery", image: "/images/products/menu-card.webp", price: "₹50 each" },
    { id: 19, name: "Welcome Standee", category: "Stationery", slug: "/weddingstationery", image: "/images/products/welcom-standee.webp", price: "₹2,499" },
    { id: 20, name: "Photo Standee", category: "Stationery", slug: "/weddingstationery", image: "/images/products/photobooth-standee.webp", price: "₹1,999" },
    { id: 21, name: "Custom Wedding Stickers", category: "Stationery", slug: "/weddingstationery", image: "/images/products/wed-sticker.jpeg", price: "₹99" },
    { id: 22, name: "Table Tent Cards", category: "Stationery", slug: "/weddingstationery", image: "/products/tent-card.png", price: "₹35 each" },
    { id: 23, name: "Personalized Bottle Tag", category: "Stationery", slug: "/weddingstationery", image: "/images/products/bottle-tag.webp", price: "₹8 each" },
    { id: 24, name: "Gratitude Card Set", category: "Stationery", slug: "/weddingstationery", image: "/images/products/thankyou-card.jpeg", price: "₹10 each" },
    { id: 25, name: "Wedding Luggage Tag", category: "Stationery", slug: "/weddingstationery", image: "/images/products/card.png", price: "₹8 each" },
    { id: 26, name: "RSVP Card Set", category: "Stationery", slug: "/weddingstationery", image: "/images/products/RSVP.jpeg", price: "₹10 each" },
    // Envelopes
    { id: 27, name: "Copper Foil Envelope", category: "Envelopes", slug: "/shagunenvelopes", image: "/images/products/copperfoil.png", price: "₹80 each" },
    { id: 28, name: "Silver Foil Envelope", category: "Envelopes", slug: "/shagunenvelopes", image: "/images/products/silverfoil.png", price: "₹75 each" },
    { id: 29, name: "Premium Box Envelope", category: "Envelopes", slug: "/shagunenvelopes", image: "/products/BoxEnv (1).webp", price: "₹150 each" },
    { id: 30, name: "Premium Pocket Envelope", category: "Envelopes", slug: "/shagunenvelopes", image: "/products/pocket-env1.webp", price: "₹35 each" },
    { id: 31, name: "Velvet Touch Envelope", category: "Envelopes", slug: "/shagunenvelopes", image: "/products/velvet-env1.webp", price: "₹70 each" },
    { id: 32, name: "Matt Finish Envelope", category: "Envelopes", slug: "/shagunenvelopes", image: "/products/matt-env1.webp", price: "₹45 each" },
    { id: 33, name: "Flower/Petals Cone", category: "Envelopes", slug: "/shagunenvelopes", image: "/products/petal-cone.png", price: "₹75 each" },
    // Digital Invitations
    { id: 34, name: "Royal Gold Foil Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/2.png", price: "₹599" },
    { id: 35, name: "Traditional Mehndi Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/3.png", price: "₹699" },
    { id: 36, name: "Rose Petal Dance Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/4.png", price: "₹499" },
    { id: 37, name: "Modern Minimalist Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/5.png", price: "₹599" },
    { id: 38, name: "Sacred Mantra Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/6.png", price: "₹699" },
    { id: 39, name: "Garden Symphony Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/7.png", price: "₹499" },
    { id: 40, name: "Gold Sparkle Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/8.png", price: "₹599" },
    { id: 41, name: "Dhol-Tasha Beat Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/9.png", price: "₹699" },
    { id: 42, name: "Jasmine Blooms Digital", category: "Digital Invitations", slug: "/e-invite", image: "/images/thumbnail/10.png", price: "₹499" },
    // Digital PDF
    { id: 43, name: "Royal Heritage PDF", category: "Digital PDF", slug: "/digitalpdf", image: "/images/thumbnail/1.png", price: "₹999" },
    { id: 44, name: "Modern Elegance PDF", category: "Digital PDF", slug: "/digitalpdf", image: "/images/thumbnail/3.png", price: "₹1,299" },
    { id: 45, name: "Gold Luxe PDF", category: "Digital PDF", slug: "/digitalpdf", image: "/images/thumbnail/6.png", price: "₹1,999" },
    { id: 46, name: "Floral Garden PDF", category: "Digital PDF", slug: "/digitalpdf", image: "/images/thumbnail/4.png", price: "₹899" },
    { id: 47, name: "Cultural Fusion PDF", category: "Digital PDF", slug: "/digitalpdf", image: "/images/thumbnail/5.png", price: "₹1,499" },
    { id: 48, name: "Custom Template PDF", category: "Digital PDF", slug: "/digitalpdf", image: "/images/thumbnail/6.png", price: "₹2,499" },
    // Hampers
    { id: 49, name: "Essential Wedding Hamper", category: "Hampers", slug: "/hamper", image: "/products/hamper.png", price: "₹2,499" },
    { id: 50, name: "Premium Wedding Hamper", category: "Hampers", slug: "/hamper", image: "/products/hampers (1).png", price: "₹4,999" },
    { id: 51, name: "Luxury Wedding Hamper", category: "Hampers", slug: "/hamper", image: "/products/hampers (2).png", price: "₹7,999" },
    { id: 52, name: "Essential Wedding Hamper", category: "Hampers", slug: "/hamper", image: "/products/hampers (4).png", price: "₹2,499" },
    { id: 53, name: "Premium Wedding Hamper", category: "Hampers", slug: "/hamper", image: "/products/hampers (8).png", price: "₹4,999" },
    { id: 54, name: "Luxury Wedding Hamper", category: "Hampers", slug: "/hamper", image: "/products/hampers (9).png", price: "₹7,999" },
  ];

  // Search Functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(e.target.value);

    if (query.length > 0) {
      const results = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleSearchSelect = (slug) => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
    // Navigate using Link component
    window.location.href = slug;
  };

  // Close search on outside click
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

  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setSearchResults([]);
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
      <NavbarSEO />
      
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#EFE5E7] shadow-lg" : "bg-[#EFE5E7]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Top Bar - Light Background with Dark Font */}
        <div className="bg-[#EFE5E7] text-[#532D2A] text-xs sm:text-sm py-2 sm:py-3 relative overflow-hidden border-b-2 border-[#B392A4]/30">
          <div className="container-custom px-2 sm:px-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-1 sm:gap-2">
              {/* Left */}
              <div className="hidden sm:flex items-center space-x-2 md:space-x-4 z-10 relative">
                <div className="flex items-center space-x-1 bg-[#B392A4]/10 px-2 py-1 rounded-full border border-[#B392A4]/20">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#532D2A] animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-[#532D2A]">+91 8435111188</span>
                </div>
              </div>

              {/* Center - Offers - Dark Text */}
              <div className="flex-1 max-w-xs sm:max-w-md md:max-w-2xl mx-1 sm:mx-4 relative overflow-hidden">
                <div className="relative backdrop-blur-sm rounded-lg border border-[#B392A4]/30 overflow-hidden">
                  <div className="relative h-8 sm:h-10 md:h-12 flex items-center justify-center font-mono">
                    <div className="relative w-full px-2">
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
                        <span className="text-[#532D2A] font-black text-xs sm:text-base md:text-xl tracking-wider bg-[#B392A4]/10 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          FLAT 20% OFF
                        </span>
                        <span className="text-[#532D2A]/60 sm:text-[#532D2A]/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
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
                        <span className="text-[#532D2A] font-black text-xs sm:text-base md:text-xl tracking-wider bg-[#B392A4]/10 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          FREE HAMPER
                        </span>
                        <span className="text-[#532D2A]/60 sm:text-[#532D2A]/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
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
                        <span className="text-[#532D2A] font-black text-xs sm:text-base md:text-xl tracking-wider bg-[#B392A4]/10 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          FREE SHIPPING
                        </span>
                        <span className="text-[#532D2A]/60 sm:text-[#532D2A]/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
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
                        <span className="text-[#532D2A] font-black text-xs sm:text-base md:text-xl tracking-wider bg-[#B392A4]/10 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded">
                          LIMITED TIME
                        </span>
                        <span className="text-[#532D2A]/60 sm:text-[#532D2A]/80 text-[8px] sm:text-xs md:text-sm hidden sm:inline">
                          Offer Ends Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Dark Text */}
              <div className="hidden sm:flex items-center space-x-2 md:space-x-4 z-10 relative">
                <Link
                  to="/weddingcards"
                  className="hover:text-[#B392A4] transition-colors flex items-center bg-[#B392A4]/10 px-2 py-1 rounded-full text-[10px] sm:text-xs text-[#532D2A] border border-[#B392A4]/20"
                >
                  <span className="mr-1">📦</span> Bulk Order
                </Link>
                <span className="text-[#B392A4]/30 hidden md:inline">|</span>
                <Link
                  to="/gallery"
                  className="hover:text-[#B392A4] transition-colors flex items-center bg-[#B392A4]/10 px-2 py-1 rounded-full text-[10px] sm:text-xs text-[#532D2A] border border-[#B392A4]/20 hidden md:flex"
                >
                  <span className="mr-1">🛍️</span> Products
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B392A4] to-transparent animate-flicker"></div>
          <div
            className="hidden sm:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B392A4] to-transparent animate-flicker"
            style={{ animationDelay: "0.30s" }}
          ></div>
        </div>

        {/* Main Header - Light Background with Dark Font */}
        <div className="border-b border-[#B392A4]/20 bg-[#EFE5E7]">
          <div className="container-custom">
            <div className="flex items-center justify-between py-1 sm:py-2 px-2 sm:px-4 lg:px-6">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0" aria-label="Wedding House Home">
                <img
                  width={70}
                  height={70}
                  className="sm:w-[80px] md:w-[100px]"
                  src="/images/gallery/logo.png"
                  alt="Wedding House - Premium Wedding Cards"
                />
              </Link>

              {/* Navigation Links - Desktop with Dark Font */}
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 mx-4">
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                    aria-expanded={activeDropdown === 'wedding-cards'}
                    aria-haspopup="true"
                  >
                    <span>Wedding Cards</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-[#EFE5E7] rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[#B392A4]/20">
                    <div className="grid grid-cols-3 gap-4">
                      {weddingCardsCategories.slice(0, 6).map((cat, index) => (
                        <Link
                          key={index}
                          to={`/weddingcards/${cat.slug}`}
                          className="group/item p-3 hover:bg-[#B392A4]/10 rounded-lg"
                        >
                          <div className="flex items-start gap-2">
                            <div className="text-[#B392A4]">{cat.icon}</div>
                            <div>
                              <h4 className="font-medium text-[#532D2A] group-hover/item:text-[#B392A4] transition-colors text-sm">
                                {cat.name}
                              </h4>
                              <p className="text-xs text-[#532D2A]/60">{cat.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#B392A4]/20 text-center">
                      <Link
                        to="/weddingcards"
                        className="text-[#B392A4] hover:text-[#532D2A] font-medium text-sm"
                      >
                        View All Wedding Cards →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                    aria-expanded={activeDropdown === 'stationery'}
                    aria-haspopup="true"
                  >
                    <span>Wedding Stationery</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-[500px] bg-[#EFE5E7] rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[#B392A4]/20">
                    <div className="grid grid-cols-2 gap-4">
                      {stationeryCategories.map((cat, index) => (
                        <Link
                          key={index}
                          to={`/weddingstationery/${cat.slug}`}
                          className="group/item p-3 hover:bg-[#B392A4]/10 rounded-lg"
                        >
                          <div className="flex items-start gap-2">
                            <div className="text-[#B392A4]">{cat.icon}</div>
                            <div>
                              <h4 className="font-medium text-[#532D2A] group-hover/item:text-[#B392A4] transition-colors text-sm">
                                {cat.name}
                              </h4>
                              <p className="text-xs text-[#532D2A]/60">{cat.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#B392A4]/20 text-center">
                      <Link
                        to="/weddingstationery"
                        className="text-[#B392A4] hover:text-[#532D2A] font-medium text-sm"
                      >
                        View All Stationery →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                    aria-expanded={activeDropdown === 'envelopes'}
                    aria-haspopup="true"
                  >
                    <span>Shagun Envelopes</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-[350px] bg-[#EFE5E7] rounded-lg shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[#B392A4]/20">
                    <div className="space-y-3">
                      {envelopeCategories.map((cat, index) => (
                        <Link
                          key={index}
                          to={`/shagunenvelopes/${cat.slug}`}
                          className="flex items-center gap-3 p-3 hover:bg-[#B392A4]/10 rounded-lg group/item"
                        >
                          <div className="text-[#B392A4]">{cat.icon}</div>
                          <div>
                            <h4 className="font-medium text-[#532D2A] group-hover/item:text-[#B392A4] transition-colors text-sm">
                              {cat.name}
                            </h4>
                            <p className="text-xs text-[#532D2A]/60">{cat.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/hamper"
                  className="text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                >
                  Wedding Hamper
                </Link>
                <Link
                  to="/e-invite"
                  className="text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                >
                  Digital Invitation
                </Link>
                <Link
                  to="/digitalpdf"
                  className="text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                >
                  Digital PDF
                </Link>
                <Link
                  to="/about"
                  className="text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-[#532D2A] hover:text-[#B392A4] text-sm font-medium whitespace-nowrap"
                >
                  Contact
                </Link>
              </div>

              {/* Right Icons - With Working Search */}
              <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0">
                {/* Search Container - With Working Search */}
                <div className="hidden md:flex items-center bg-[#B392A4]/10 rounded-lg px-3 py-1.5 border border-[#B392A4]/20 search-container relative">
                  <Search className="w-4 h-4 text-[#532D2A]/50" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    onFocus={() => searchQuery.length > 0 && setIsSearchOpen(true)}
                    className="bg-transparent border-none outline-none text-sm ml-2 w-40 xl:w-48 text-[#532D2A] placeholder-[#532D2A]/40"
                    aria-label="Search products"
                  />

                  {/* Search Results Dropdown */}
                  {isSearchOpen && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-[#B392A4]/20 overflow-hidden max-h-80 overflow-y-auto z-50 min-w-[400px]">
                      <div className="p-2 text-[10px] text-[#532D2A]/40 border-b border-[#B392A4]/10 px-4 py-2">
                        Found {searchResults.length} result{searchResults.length > 1 ? 's' : ''}
                      </div>
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSearchSelect(product.slug)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#EFE5E7] transition-colors text-left border-b border-[#B392A4]/10 last:border-0"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/40x40?text=Product';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-[#532D2A] text-sm truncate">{product.name}</div>
                            <div className="flex items-center gap-2 text-xs text-[#532D2A]/50">
                              <span>{product.category}</span>
                            </div>
                          </div>
                          <div className="text-[#B392A4] font-medium text-sm flex-shrink-0">{product.price}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* No Results */}
                  {isSearchOpen && searchQuery.length > 0 && searchResults.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-[#B392A4]/20 p-6 text-center z-50 min-w-[400px]">
                      <Search className="w-8 h-8 text-[#B392A4]/30 mx-auto mb-2" />
                      <p className="text-[#532D2A]/60 text-sm">No products found for "{searchQuery}"</p>
                      <p className="text-[#532D2A]/40 text-xs mt-1">Try searching for wedding cards, hampers, or stationery</p>
                    </div>
                  )}
                </div>

                <button 
                  className="md:hidden p-1.5 hover:bg-[#B392A4]/10 rounded-full"
                  aria-label="Search"
                  onClick={() => setIsSearchFocused(!isSearchFocused)}
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#532D2A]" />
                </button>

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
                  className="bg-[#B392A4] hover:bg-[#532D2A] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap flex items-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  aria-label="Get Quotation on WhatsApp"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                  <span className="hidden xs:inline">Get Quotation</span>
                  <span className="xs:hidden">Quote</span>
                </button>

                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="lg:hidden p-1.5 hover:bg-[#B392A4]/10 rounded-full"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#532D2A]" />
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#532D2A]" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search */}
            {isSearchFocused && (
              <div className="md:hidden pb-3 px-4 search-container">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="flex-1 px-4 py-2 border-2 border-[#B392A4] rounded-l-lg focus:border-[#532D2A] focus:outline-none text-sm bg-[#EFE5E7] text-[#532D2A]"
                    aria-label="Search products"
                    autoFocus
                  />
                  <button className="bg-[#B392A4] hover:bg-[#532D2A] text-white px-4 py-2 rounded-r-lg transition">
                    <Search className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Search Results */}
                {isSearchOpen && searchResults.length > 0 && (
                  <div className="mt-2 bg-white rounded-xl shadow-2xl border border-[#B392A4]/20 overflow-hidden max-h-60 overflow-y-auto">
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleSearchSelect(product.slug)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#EFE5E7] transition-colors text-left border-b border-[#B392A4]/10 last:border-0"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/40x40?text=Product';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[#532D2A] text-sm truncate">{product.name}</div>
                          <div className="text-xs text-[#532D2A]/50">{product.category}</div>
                        </div>
                        <div className="text-[#B392A4] font-medium text-sm flex-shrink-0">{product.price}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu - Light Background with Dark Font */}
        {isOpen && (
          <div className="lg:hidden bg-[#EFE5E7] border-t border-[#B392A4]/20 max-h-[80vh] overflow-y-auto">
            <div className="container-custom py-4 px-4 space-y-2">
              <Link
                to="/"
                className="block py-2 text-[#532D2A] hover:text-[#B392A4] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="py-2">
                <div className="font-medium text-[#532D2A] mb-2 text-sm">
                  Wedding Cards
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {weddingCardsCategories.slice(0, 6).map((cat, index) => (
                    <Link
                      key={index}
                      to={`/weddingcards/${cat.slug}`}
                      className="flex items-center gap-2 text-sm text-[#532D2A] hover:text-[#B392A4] p-2 hover:bg-[#B392A4]/10 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-[#B392A4]">{cat.icon}</div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="py-2 border-t border-[#B392A4]/20">
                <div className="font-medium text-[#532D2A] mb-2 text-sm">
                  Wedding Stationery
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {stationeryCategories.map((cat, index) => (
                    <Link
                      key={index}
                      to={`/weddingstationery/${cat.slug}`}
                      className="flex items-center gap-2 text-sm text-[#532D2A] hover:text-[#B392A4] p-2 hover:bg-[#B392A4]/10 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-[#B392A4]">{cat.icon}</div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="py-2 border-t border-[#B392A4]/20">
                <div className="font-medium text-[#532D2A] mb-2 text-sm">
                  Shagun Envelopes
                </div>
                <div className="space-y-1">
                  {envelopeCategories.map((cat, index) => (
                    <Link
                      key={index}
                      to={`/shagunenvelopes/${cat.slug}`}
                      className="flex items-center gap-2 text-sm text-[#532D2A] hover:text-[#B392A4] p-2 hover:bg-[#B392A4]/10 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-[#B392A4]">{cat.icon}</div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/hamper"
                className="block py-2 text-[#532D2A] hover:text-[#B392A4] border-t border-[#B392A4]/20"
                onClick={() => setIsOpen(false)}
              >
                Wedding Hamper
              </Link>
              <Link
                to="/e-invite"
                className="block py-2 text-[#532D2A] hover:text-[#B392A4]"
                onClick={() => setIsOpen(false)}
              >
                Digital Invitation
              </Link>
              <Link
                to="/digitalpdf"
                className="block py-2 text-[#532D2A] hover:text-[#B392A4]"
                onClick={() => setIsOpen(false)}
              >
                Digital PDF
              </Link>
              <Link
                to="/gallery"
                className="block py-2 text-[#532D2A] hover:text-[#B392A4] border-t border-[#B392A4]/20"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="block py-2 text-[#532D2A] hover:text-[#B392A4]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-[#532D2A] hover:text-[#B392A4]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
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
                className="w-full bg-[#B392A4] hover:bg-[#532D2A] text-white px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 mt-4 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Get Quotation on WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

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