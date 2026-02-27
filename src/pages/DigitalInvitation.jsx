import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Smartphone,
  Users,
  Download,
  BarChart,
  MessageCircle,
  Heart,
  Share2,
  Eye,
  Clock,
  Gift,
  Sparkles,
  ChevronRight,
  Star,
  X,
  Film,
  Music,
  Palette,
  Crown,
  Flower2,
  Gem,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";
import Watermark from "../components/Watermark"; // Import your watermark component

const DigitalInvitation = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [playingVideo, setPlayingVideo] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample data - 12 items for 2 rows of 6
  const eInvitationVideos = [
    {
      id: 2,
      title: "Royal Gold Foil",
      description: "Luxurious gold animation for royal weddings",
      price: "₹599",
      videoPath: "/videos/Dig-Invitation (2).mp4",
      thumbnail: "/images/thumbnail/2.png",
      category: "modern",
      duration: "0:52",
      views: "1.8k",
      likes: "956",
      trending: false,
    },
    {
      id: 3,
      title: "Traditional Mehndi",
      description: "Cultural design with traditional music",
      price: "₹699",
      videoPath: "/videos/Dig-Invitation (3).mp4",
      thumbnail: "/images/thumbnail/3.png",
      category: "traditional",
      duration: "1:02",
      views: "3.2k",
      likes: "2.1k",
      trending: true,
    },
    {
      id: 4,
      title: "Rose Petal Dance",
      description: "Elegant rose petals animation",
      price: "₹499",
      videoPath: "/videos/Dig-Invitation (4).mp4",
      thumbnail: "/images/thumbnail/4.png",
      category: "floral",
      duration: "0:48",
      views: "1.9k",
      likes: "876",
      trending: false,
    },
    {
      id: 5,
      title: "Modern Minimalist",
      description: "Sleek contemporary design",
      price: "₹599",
      videoPath: "/videos/Dig-Invitation (5).mp4",
      thumbnail: "/images/thumbnail/5.png",
      category: "modern",
      duration: "0:55",
      views: "2.1k",
      likes: "1.1k",
      trending: true,
    },
    {
      id: 6,
      title: "Sacred Mantra",
      description: "Vedic chanting background",
      price: "₹699",
      videoPath: "/videos/Dig-Invitation (6).mp4",
      thumbnail: "/images/thumbnail/6.png",
      category: "traditional",
      duration: "1:05",
      views: "2.8k",
      likes: "1.5k",
      trending: false,
    },
    {
      id: 7,
      title: "Garden Symphony",
      description: "Butterfly and flower animation",
      price: "₹499",
      videoPath: "/videos/Dig-Invitation (7).mp4",
      thumbnail: "/images/thumbnail/7.png",
      category: "floral",
      duration: "0:50",
      views: "1.7k",
      likes: "823",
      trending: false,
    },
    {
      id: 8,
      title: "Gold Sparkle",
      description: "Sparkling gold dust animation",
      price: "₹599",
      videoPath: "/videos/Dig-Invitation (8).mp4",
      thumbnail: "/images/thumbnail/8.png",
      category: "modern",
      duration: "0:58",
      views: "2.3k",
      likes: "1.3k",
      trending: true,
    },
    {
      id: 9,
      title: "Dhol-Tasha Beat",
      description: "Punjabi wedding vibes",
      price: "₹699",
      videoPath: "/videos/Dig-Invitation (9).mp4",
      thumbnail: "/images/thumbnail/9.png",
      category: "traditional",
      duration: "1:10",
      views: "3.5k",
      likes: "2.4k",
      trending: true,
    },
    {
      id: 10,
      title: "Jasmine Blooms",
      description: "Fragrant jasmine theme",
      price: "₹499",
      videoPath: "/videos/Dig-Invitation (10).mp4",
      thumbnail: "/images/thumbnail/10.png",
      category: "floral",
      duration: "0:47",
      views: "1.4k",
      likes: "712",
      trending: false,
    },
    {
      id: 11,
      title: "Diamond Cut",
      description: "Crystal clear animations",
      price: "₹599",
      videoPath: "/videos/Dig-Invitation (11).mp4",
      thumbnail: "/images/thumbnail/11.png",
      category: "modern",
      duration: "0:53",
      views: "1.6k",
      likes: "892",
      trending: false,
    },
    {
      id: 12,
      title: "Vedic Traditions",
      description: "Ancient ritual motifs",
      price: "₹699",
      videoPath: "/videos/Dig-Invitation (12).mp4",
      thumbnail: "/images/thumbnail/12.png",
      category: "traditional",
      duration: "1:08",
      views: "2.9k",
      likes: "1.8k",
      trending: true,
    },
  ];

  const filters = [
    { id: "all", name: "All Designs", icon: <Film className="w-4 h-4" />, count: eInvitationVideos.length },
    { id: "floral", name: "Floral", icon: <Flower2 className="w-4 h-4" />, count: eInvitationVideos.filter(v => v.category === "floral").length },
    { id: "modern", name: "Modern", icon: <Gem className="w-4 h-4" />, count: eInvitationVideos.filter(v => v.category === "modern").length },
    { id: "traditional", name: "Traditional", icon: <Crown className="w-4 h-4" />, count: eInvitationVideos.filter(v => v.category === "traditional").length },
  ];

  const filteredVideos = activeFilter === "all" 
    ? eInvitationVideos 
    : eInvitationVideos.filter(v => v.category === activeFilter);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setPlayingVideo(null);
  };

  const handlePlayVideo = (videoId) => {
    setPlayingVideo(videoId);
  };

  const whatsappNumber = "918120461118";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-rose-50/20 pt-16">
      {/* Hero Section - More Compact */}
      <div className="bg-gradient-to-r from-maroon via-maroon/90 to-gold py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span className="text-amber-200 text-sm font-medium">DIGITAL INVITATIONS</span>
              <Sparkles className="w-4 h-4 text-amber-200" />
            </div>
            <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-3">
              Beautiful <span className="text-amber-200">E-Invitations</span>
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl mb-4">
              Animated video invitations that your guests will love
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                <Smartphone className="w-3 h-3 text-amber-200" />
                <span className="text-white">Mobile Ready</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                <Download className="w-3 h-3 text-amber-200" />
                <span className="text-white">Instant</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                <Users className="w-3 h-3 text-amber-200" />
                <span className="text-white">Shareable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Filters - Horizontal Scroll on Mobile */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-maroon">Browse Designs</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter.id
                    ? "bg-maroon text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gold"
                }`}
              >
                <span className={activeFilter === filter.id ? "text-amber-200" : "text-gold"}>
                  {filter.icon}
                </span>
                {filter.name}
                <span className={`ml-1 text-xs ${
                  activeFilter === filter.id ? "bg-white/20" : "bg-gray-100"
                } px-1.5 py-0.5 rounded-full`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid - 6 Cards Per Row for iPhone */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(video.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Thumbnail Container with Watermark */}
              <div className="relative aspect-[3/4] rounded-t-xl overflow-hidden">
                {/* Replace img with Watermark component */}
                <Watermark
                  src={video.thumbnail}
                  type="image"
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  watermarkOpacity={0.15}
                  watermarkPosition="multiple"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full shadow-lg ${
                    video.category === 'floral' ? 'bg-pink-500 text-white' :
                    video.category === 'modern' ? 'bg-blue-500 text-white' :
                    'bg-amber-600 text-white'
                  }`}>
                    {video.category}
                  </span>
                </div>

                {/* Trending Badge */}
                {video.trending && (
                  <div className="absolute top-2 right-2 z-10">
                    <span className="bg-gold text-maroon text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" /> Trending
                    </span>
                  </div>
                )}

                {/* Play Button - Appears on Hover */}
                <button
                  onClick={() => handleVideoSelect(video)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                >
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center transform hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-5 h-5 text-maroon ml-0.5" />
                  </div>
                </button>

                {/* Duration Badge */}
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 z-10">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>

                {/* Views Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 z-10">
                  <Eye className="w-3 h-3" />
                  {video.views}
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="font-bold text-xs mb-1 line-clamp-1 group-hover:text-maroon transition-colors">
                  {video.title}
                </h3>
                <p className="text-[10px] text-gray-500 mb-2 line-clamp-1">
                  {video.description}
                </p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gold font-bold text-sm">{video.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 bg-rose-50 rounded-full hover:bg-rose-100 transition-colors">
                      <Heart className="w-3 h-3 text-rose-500" />
                    </button>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=I'm interested in ${video.title} (${video.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-green-50 rounded-full hover:bg-green-100 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 text-green-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-maroon text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all hover:scale-105 shadow-md">
            Load More Designs
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Features Grid - 2x2 for Mobile */}
        <div className="mt-12">
          <h2 className="text-lg font-bold text-center text-maroon mb-4">Why Choose Us</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Smartphone className="w-5 h-5" />, title: "Mobile First", desc: "Perfect on iPhone" },
              { icon: <Download className="w-5 h-5" />, title: "Instant", desc: "Delivery in 2 hours" },
              { icon: <Users className="w-5 h-5" />, title: "Easy Share", desc: "WhatsApp, Instagram" },
              { icon: <Palette className="w-5 h-5" />, title: "Customizable", desc: "Match your theme" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-maroon/10 rounded-full mb-2 text-maroon">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xs mb-1">{item.title}</h3>
                <p className="text-[10px] text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA - Compact */}
        <div className="mt-8 bg-gradient-to-r from-maroon to-gold rounded-xl p-5 text-center text-white">
          <h3 className="text-base font-bold mb-1">Need a Custom Design?</h3>
          <p className="text-xs text-white/90 mb-3">Share your ideas, we'll create it</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello! I want a custom E-Invitation for my wedding.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-maroon px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-100 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Video Modal - iPhone Optimized with Watermark */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-maroon to-gold p-4 text-white">
              <button
                onClick={closeVideoModal}
                className="absolute top-2 right-2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-sm font-bold pr-8">{selectedVideo.title}</h3>
            </div>

            {/* Video with Watermark */}
            <div className="aspect-video bg-black">
              <Watermark
                src={selectedVideo.videoPath}
                type="video"
                poster={selectedVideo.thumbnail}
                controls
                autoPlay
                className="w-full h-full"
                watermarkOpacity={0.2}
                watermarkPosition="diagonal"
              />
            </div>

            {/* Details */}
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-3">{selectedVideo.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500">Price</span>
                  <div className="text-xl font-bold text-gold">{selectedVideo.price}</div>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=I'm interested in ${selectedVideo.title} (${selectedVideo.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add this CSS to hide scrollbar but keep functionality */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DigitalInvitation; 