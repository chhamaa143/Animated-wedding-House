import React, { useState } from "react";
import {
  FileText,
  Download,
  Edit,
  Printer,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Share2,
  X,
  Check,
  Upload,
  Layers,
  Grid,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from "lucide-react";

const DigitalPDF = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'single'
  const [selectedPages, setSelectedPages] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  // PDF Design Categories
  const categories = [
    { id: "traditional", name: "Traditional Designs" },
    { id: "modern", name: "Modern Minimalist" },
    { id: "luxury", name: "Luxury Gold Foil" },
    { id: "floral", name: "Floral & Nature" },
    { id: "cultural", name: "Cultural Themes" },
    { id: "custom", name: "Custom Templates" },
  ];

  // PDF Designs Data
  const pdfDesigns = [
    {
      id: 1,
      name: "Royal Heritage",
      category: "traditional",
      pages: 2,
      thumbnail: "/images/thumbnail/1.png",
      preview: "/images/thumbnail/1.png",
      price: "₹999",
      description:
        "Traditional Indian wedding invitation with intricate patterns",
      formats: ["PDF", "JPEG", "PNG"],
      pages_preview: [
        { id: 1, image: "/images/thumbnail/2.png", title: "Main Invitation" },
        { id: 2, image: "/images/thumbnail/6.png", title: "RSVP Card" },
      ],
      customizable: true,
      printReady: true,
    },
    {
      id: 2,
      name: "Modern Elegance",
      category: "modern",
      pages: 3,
      thumbnail: "/images/pdf/modern-elegance-thumb.jpg",
      preview: "/images/pdf/modern-elegance-preview.jpg",
      price: "₹1,299",
      description:
        "Contemporary design with clean lines and elegant typography",
      formats: ["PDF", "AI", "EPS"],
      pages_preview: [
        {
          id: 1,
          image: "/images/pdf/modern-elegance-1.jpg",
          title: "Main Card",
        },
        {
          id: 2,
          image: "/images/pdf/modern-elegance-2.jpg",
          title: "Details Card",
        },
        {
          id: 3,
          image: "/images/pdf/modern-elegance-3.jpg",
          title: "Map Card",
        },
      ],
      customizable: true,
      printReady: true,
    },
    {
      id: 3,
      name: "Gold Luxe",
      category: "luxury",
      pages: 4,
      thumbnail: "/images/pdf/gold-luxe-thumb.jpg",
      preview: "/images/pdf/gold-luxe-preview.jpg",
      price: "₹1,999",
      description: "Premium gold foil design with embossed details",
      formats: ["PDF", "PSD", "AI"],
      pages_preview: [
        { id: 1, image: "/images/pdf/gold-luxe-1.jpg", title: "Cover Page" },
        { id: 2, image: "/images/pdf/gold-luxe-2.jpg", title: "Invitation" },
        { id: 3, image: "/images/pdf/gold-luxe-3.jpg", title: "Schedule" },
        { id: 4, image: "/images/pdf/gold-luxe-4.jpg", title: "Response Card" },
      ],
      customizable: true,
      printReady: true,
    },
    {
      id: 4,
      name: "Floral Garden",
      category: "floral",
      pages: 2,
      thumbnail: "/images/pdf/floral-garden-thumb.jpg",
      preview: "/images/pdf/floral-garden-preview.jpg",
      price: "₹899",
      description: "Beautiful floral design with watercolor elements",
      formats: ["PDF", "JPEG"],
      pages_preview: [
        { id: 1, image: "/images/pdf/floral-garden-1.jpg", title: "Main Card" },
        {
          id: 2,
          image: "/images/pdf/floral-garden-2.jpg",
          title: "Details Card",
        },
      ],
      customizable: true,
      printReady: true,
    },
    {
      id: 5,
      name: "Cultural Fusion",
      category: "cultural",
      pages: 3,
      thumbnail: "/images/pdf/cultural-fusion-thumb.jpg",
      preview: "/images/pdf/cultural-fusion-preview.jpg",
      price: "₹1,499",
      description: "Blend of traditional and modern cultural elements",
      formats: ["PDF", "AI", "EPS"],
      pages_preview: [
        {
          id: 1,
          image: "/images/pdf/cultural-fusion-1.jpg",
          title: "Main Card",
        },
        {
          id: 2,
          image: "/images/pdf/cultural-fusion-2.jpg",
          title: "Ritual Card",
        },
        {
          id: 3,
          image: "/images/pdf/cultural-fusion-3.jpg",
          title: "Response Card",
        },
      ],
      customizable: true,
      printReady: true,
    },
    {
      id: 6,
      name: "Custom Template",
      category: "custom",
      pages: 5,
      thumbnail: "/images/pdf/custom-template-thumb.jpg",
      preview: "/images/pdf/custom-template-preview.jpg",
      price: "₹2,499",
      description: "Fully customizable template with all necessary pages",
      formats: ["PDF", "AI", "PSD", "INDD"],
      pages_preview: [
        { id: 1, image: "/images/pdf/custom-template-1.jpg", title: "Cover" },
        {
          id: 2,
          image: "/images/pdf/custom-template-2.jpg",
          title: "Invitation",
        },
        {
          id: 3,
          image: "/images/pdf/custom-template-3.jpg",
          title: "Schedule",
        },
        { id: 4, image: "/images/pdf/custom-template-4.jpg", title: "Map" },
        { id: 5, image: "/images/pdf/custom-template-5.jpg", title: "RSVP" },
      ],
      customizable: true,
      printReady: true,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredDesigns, setFilteredDesigns] = useState(pdfDesigns);

  // Filter designs by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredDesigns(pdfDesigns);
    } else {
      setFilteredDesigns(
        pdfDesigns.filter((design) => design.category === category),
      );
    }
  };

  // Handle design selection
  const handleDesignSelect = (design) => {
    setSelectedDesign(design);
    setCurrentPage(1);
    setSelectedPages([]);
    setViewMode("single");
  };

  // Handle page selection for multi-page PDFs
  const togglePageSelection = (pageId) => {
    setSelectedPages((prev) =>
      prev.includes(pageId)
        ? prev.filter((id) => id !== pageId)
        : [...prev, pageId],
    );
  };

  // Handle PDF download
  const handleDownload = (design, pageId = null) => {
    // In a real app, this would trigger actual PDF download
    console.log(
      "Downloading PDF:",
      design.name,
      pageId ? `Page ${pageId}` : "All pages",
    );
    // Simulate download
    alert(
      `Downloading ${design.name} ${pageId ? `- Page ${pageId}` : "- Complete Set"}`,
    );
  };

  // Handle WhatsApp share
  const handleShare = (design) => {
    const message = encodeURIComponent(
      `Check out this beautiful PDF invitation from Wedding House:\n\n` +
        `*${design.name}*\n` +
        `Pages: ${design.pages}\n` +
        `Price: ${design.price}\n` +
        `Description: ${design.description}\n\n` +
        `Visit Wedding House for more designs!`,
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  // Zoom controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 25, 50));

  // Watermark Component
  const WatermarkedImage = ({ src, alt, className, onClick }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className="relative overflow-hidden group" onClick={onClick}>
        <img
          src={
            imageError
              ? "https://via.placeholder.com/400x300?text=PDF+Design"
              : src
          }
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${className}`}
          onError={() => setImageError(true)}
        />

        {/* Watermark Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main Logo Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="">
              <div className="text-2xl md:text-3xl font-cinzel font-bold text-gold">
                {" "}
                <img
                  src="public\images\Wedding House Logo........png"
                  className="w-50 h-50"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Pattern Watermarks */}
          {/* <div className="absolute inset-0 opacity-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute font-cinzel font-bold text-gold text-xs whitespace-nowrap"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 60 - 30}deg)`,
                }}
              >
                Wedding House
              </div>
            ))}
          </div> */}
        </div>

        {/* Hover Effect - Shows watermark more prominently */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  };

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
              Digital PDF Invitations
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Print-ready PDF invitations for your wedding. Choose from multiple
              designs and pages.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-cream border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => filterByCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-maroon text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gold hover:text-white"
              }`}
            >
              All Designs
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => filterByCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-maroon text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gold hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          {!selectedDesign || viewMode === "grid" ? (
            /* Grid View - All Designs */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {filteredDesigns.map((design) => (
                <div
                  key={design.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleDesignSelect(design)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <WatermarkedImage
                      src={design.thumbnail}
                      alt={design.name}
                      className="group-hover:scale-110"
                    />

                    {/* Page Count Badge */}
                    <div className="absolute top-3 left-3 bg-maroon text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-10">
                      <Layers className="w-3 h-3" />
                      {design.pages} {design.pages === 1 ? "Page" : "Pages"}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-gold text-maroon text-xs font-bold px-3 py-1.5 rounded-full z-10">
                      {design.price}
                    </div>

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(design);
                        }}
                        className="bg-white/90 p-2 rounded-full hover:bg-gold transition-colors"
                      >
                        <Share2 className="w-4 h-4 text-maroon" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(design);
                        }}
                        className="bg-gold text-maroon px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors"
                      >
                        Download Sample
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-maroon transition-colors">
                      {design.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {design.description}
                    </p>

                    {/* Format Icons */}
                    <div className="flex items-center gap-3 mb-4">
                      {design.formats.map((format, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {format}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDesignSelect(design);
                      }}
                      className="w-full py-3 border-2 border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-white transition-colors font-medium"
                    >
                      View Design
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Single Design View - Multi-page PDF */
            <div>
              {/* Back Button */}
              <button
                onClick={() => {
                  setSelectedDesign(null);
                  setViewMode("grid");
                }}
                className="flex items-center gap-2 text-maroon hover:text-gold transition-colors mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to All Designs
              </button>

              {/* Design Header */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div>
                    <h2 className="text-3xl font-cinzel font-bold text-maroon mb-2">
                      {selectedDesign.name}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mb-4">
                      {selectedDesign.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="bg-maroon/10 text-maroon px-4 py-2 rounded-lg font-medium">
                        {selectedDesign.price}
                      </span>
                      <span className="bg-gold/20 text-maroon px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        {selectedDesign.pages} Pages Total
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare(selectedDesign)}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-white transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                    <button
                      onClick={() => handleDownload(selectedDesign)}
                      className="flex items-center gap-2 px-6 py-3 bg-maroon text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download All
                    </button>
                  </div>
                </div>
              </div>

              {/* Page Preview Controls */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-cinzel font-bold text-maroon">
                  Pages Preview
                </h3>

                <div className="flex items-center gap-3">
                  {/* Zoom Controls */}
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={zoomLevel <= 50}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 border-x text-sm">
                      {zoomLevel}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={zoomLevel >= 200}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  {/* View Mode Toggle */}
                  <button
                    onClick={() =>
                      setViewMode(viewMode === "grid" ? "single" : "grid")
                    }
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {viewMode === "grid" ? (
                      <>
                        <Maximize2 className="w-4 h-4" /> Single View
                      </>
                    ) : (
                      <>
                        <Grid className="w-4 h-4" /> Grid View
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Pages Grid */}
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-3 max-w-3xl mx-auto"
                }`}
              >
                {selectedDesign.pages_preview.map((page, index) => (
                  <div
                    key={page.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                      selectedPages.includes(page.id)
                        ? "ring-4 ring-gold scale-[1.02]"
                        : ""
                    }`}
                  >
                    <div
                      className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
                      onClick={() => togglePageSelection(page.id)}
                    >
                      <WatermarkedImage
                        src={page.image}
                        alt={page.title}
                        className="transition-transform duration-700"
                        style={{ transform: `scale(${zoomLevel / 100})` }}
                      />

                      {/* Page Number Badge */}
                      <div className="absolute top-3 left-3 bg-maroon text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                        Page {index + 1}
                      </div>

                      {/* Selection Indicator */}
                      {selectedPages.includes(page.id) && (
                        <div className="absolute top-3 right-3 bg-gold text-maroon rounded-full p-1 z-10">
                          <Check className="w-4 h-4" />
                        </div>
                      )}

                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPreview(true);
                            setCurrentPage(index + 1);
                          }}
                          className="bg-white p-3 rounded-full hover:bg-gold transition-colors"
                        >
                          <Eye className="w-5 h-5 text-maroon" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(selectedDesign, page.id);
                          }}
                          className="bg-white p-3 rounded-full hover:bg-gold transition-colors"
                        >
                          <Download className="w-5 h-5 text-maroon" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-1">{page.title}</h4>
                      <p className="text-sm text-gray-500 mb-3">
                        Page {index + 1} of {selectedDesign.pages}
                      </p>

                      {/* Page Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleDownload(selectedDesign, page.id)
                          }
                          className="flex-1 py-2 border border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-white transition-colors text-sm"
                        >
                          Download Page
                        </button>
                        <button
                          onClick={() => togglePageSelection(page.id)}
                          className={`px-4 py-2 border rounded-lg transition-colors text-sm ${
                            selectedPages.includes(page.id)
                              ? "bg-gold text-maroon border-gold"
                              : "border-gray-300 hover:border-gold"
                          }`}
                        >
                          {selectedPages.includes(page.id)
                            ? "Selected"
                            : "Select"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bulk Actions */}
              {selectedPages.length > 0 && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 z-40">
                  <span className="text-maroon font-medium">
                    {selectedPages.length}{" "}
                    {selectedPages.length === 1 ? "Page" : "Pages"} Selected
                  </span>
                  <button
                    onClick={() => setSelectedPages([])}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => {
                      selectedPages.forEach((pageId) => {
                        handleDownload(selectedDesign, pageId);
                      });
                    }}
                    className="px-6 py-2 bg-maroon text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Selected
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Full Page Preview Modal */}
      {showPreview && selectedDesign && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowPreview(false)}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-[50vh]">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <WatermarkedImagen  
                src={selectedDesign.pages_preview[currentPage - 1]?.image}
                alt={`Page ${currentPage}`}
                className="w-[50vh] h-auto mx-auto"
              />
            </div>

            {/* Page Navigation */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(selectedDesign.pages, prev + 1),
                  )
                }
                disabled={currentPage === selectedDesign.pages}
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all ${
                  currentPage === selectedDesign.pages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Page Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              Page {currentPage} of {selectedDesign.pages}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalPDF;
