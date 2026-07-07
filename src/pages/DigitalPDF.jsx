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
import Watermark from "../components/Watermark";

const DigitalPDF = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedPages, setSelectedPages] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isMobile, setIsMobile] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Check mobile view
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // PDF Design Categories
  const categories = [
    { id: "traditional", name: "Traditional Designs" },
    { id: "modern", name: "Modern Minimalist" },
    { id: "luxury", name: "Luxury Gold Foil" },
    { id: "floral", name: "Floral & Nature" },
    { id: "cultural", name: "Cultural Themes" },
    { id: "custom", name: "Custom Templates" },
  ];

  // PDF Designs Data with actual PDF URLs
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
      // Use a real PDF URL or generate one
      pdfUrl: "/pdf/sample-invitation.pdf",
    },
    {
      id: 2,
      name: "Modern Elegance",
      category: "modern",
      pages: 3,
      thumbnail: "/images/thumbnail/3.png",
      preview: "/images/thumbnail/3.png",
      price: "₹1,299",
      description:
        "Contemporary design with clean lines and elegant typography",
      formats: ["PDF", "AI", "EPS"],
      pages_preview: [
        { id: 1, image: "/images/thumbnail/3.png", title: "Main Card" },
        { id: 2, image: "/images/thumbnail/6.png", title: "Details Card" },
        { id: 3, image: "/images/thumbnail/1.png", title: "Map Card" },
      ],
      customizable: true,
      printReady: true,
      pdfUrl: "/pdf/sample-invitation.pdf",
    },
    {
      id: 3,
      name: "Gold Luxe",
      category: "luxury",
      pages: 4,
      thumbnail: "/images/thumbnail/6.png",
      preview: "/images/thumbnail/6.png",
      price: "₹1,999",
      description: "Premium gold foil design with embossed details",
      formats: ["PDF", "PSD", "AI"],
      pages_preview: [
        { id: 1, image: "/images/thumbnail/3.png", title: "Cover Page" },
        { id: 2, image: "/images/thumbnail/2.png", title: "Invitation" },
        { id: 3, image: "/images/thumbnail/5.png", title: "Schedule" },
        { id: 4, image: "/images/thumbnail/6.png", title: "Response Card" },
      ],
      customizable: true,
      printReady: true,
      pdfUrl: "/pdf/sample-invitation.pdf",
    },
    {
      id: 4,
      name: "Floral Garden",
      category: "floral",
      pages: 2,
      thumbnail: "/images/thumbnail/4.png",
      preview: "/images/thumbnail/4.png",
      price: "₹899",
      description: "Beautiful floral design with watercolor elements",
      formats: ["PDF", "JPEG"],
      pages_preview: [
        { id: 1, image: "/images/thumbnail/4.png", title: "Main Card" },
        { id: 2, image: "/images/thumbnail/5.png", title: "Details Card" },
      ],
      customizable: true,
      printReady: true,
      pdfUrl: "/pdf/sample-invitation.pdf",
    },
    {
      id: 5,
      name: "Cultural Fusion",
      category: "cultural",
      pages: 3,
      thumbnail: "/images/thumbnail/5.png",
      preview: "/images/thumbnail/5.png",
      price: "₹1,499",
      description: "Blend of traditional and modern cultural elements",
      formats: ["PDF", "AI", "EPS"],
      pages_preview: [
        { id: 1, image: "/images/thumbnail/5.png", title: "Main Card" },
        { id: 2, image: "/images/thumbnail/4.png", title: "Ritual Card" },
        { id: 3, image: "/images/thumbnail/3.png", title: "Response Card" },
      ],
      customizable: true,
      printReady: true,
      pdfUrl: "/pdf/sample-invitation.pdf",
    },
    {
      id: 6,
      name: "Custom Template",
      category: "custom",
      pages: 5,
      thumbnail: "/images/thumbnail/6.png",
      preview: "/images/thumbnail/6.png",
      price: "₹2,499",
      description: "Fully customizable template with all necessary pages",
      formats: ["PDF", "AI", "PSD", "INDD"],
      pages_preview: [
        { id: 1, image: "/images/thumbnail/1.png", title: "Cover" },
        { id: 2, image: "/images/thumbnail/2.png", title: "Invitation" },
        { id: 3, image: "/images/thumbnail/3.png", title: "Schedule" },
        { id: 4, image: "/images/thumbnail/4.png", title: "Map" },
        { id: 5, image: "/images/thumbnail/5.png", title: "RSVP" },
      ],
      customizable: true,
      printReady: true,
      pdfUrl: "/pdf/sample-invitation.pdf",
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

  // FIXED: Handle PDF download with proper file handling
  const handleDownload = async (design, pageId = null) => {
    setDownloading(true);
    setDownloadProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // If there's a PDF URL, fetch and download it
      if (design.pdfUrl) {
        const response = await fetch(design.pdfUrl);
        const blob = await response.blob();
        
        // Check if it's a valid PDF
        if (blob.type === 'application/pdf' || blob.type === '') {
          // Create download link
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${design.name.replace(/\s+/g, '_')}${pageId ? `_Page${pageId}` : ''}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Clean up
          setTimeout(() => {
            window.URL.revokeObjectURL(url);
          }, 100);
          
          setDownloadProgress(100);
          setTimeout(() => {
            setDownloading(false);
            setDownloadProgress(0);
          }, 500);
        } else {
          // If not a valid PDF, generate one
          generateSamplePDF(design, pageId);
        }
      } else {
        // Generate a sample PDF
        generateSamplePDF(design, pageId);
      }
      
      clearInterval(progressInterval);
      
    } catch (error) {
      console.error('Download error:', error);
      // Fallback: generate a simple PDF
      generateSamplePDF(design, pageId);
    }
  };

  // Generate a simple sample PDF
  const generateSamplePDF = (design, pageId) => {
    // Create a simple HTML-based PDF
    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${design.name}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; background: #EFE5E7; }
          .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          h1 { color: #532D2A; text-align: center; font-size: 28px; }
          .divider { border: 1px solid #B392A4; margin: 20px 0; }
          .info { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
          .label { font-weight: bold; color: #532D2A; }
          .value { color: #333; }
          .footer { text-align: center; margin-top: 30px; color: #999; font-size: 12px; }
          .watermark { text-align: center; margin: 20px 0; font-size: 14px; color: #B392A4; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="watermark">✦ Wedding House ✦</div>
          <h1>${design.name}</h1>
          <div class="divider"></div>
          <p style="text-align: center; font-size: 16px; color: #555;">${design.description}</p>
          <div class="divider"></div>
          <div class="info">
            <div><span class="label">Price:</span> <span class="value">${design.price}</span></div>
            <div><span class="label">Pages:</span> <span class="value">${design.pages}</span></div>
            <div><span class="label">Category:</span> <span class="value">${design.category}</span></div>
            <div><span class="label">Formats:</span> <span class="value">${design.formats.join(', ')}</span></div>
            ${pageId ? `<div><span class="label">Selected Page:</span> <span class="value">Page ${pageId}</span></div>` : ''}
            <div><span class="label">Customizable:</span> <span class="value">${design.customizable ? '✅ Yes' : '❌ No'}</span></div>
            <div><span class="label">Print Ready:</span> <span class="value">${design.printReady ? '✅ Yes' : '❌ No'}</span></div>
          </div>
          <div class="divider"></div>
          <div style="text-align: center; padding: 20px; background: #F8F4ED; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 18px; color: #532D2A; font-weight: bold;">✨ This is a sample PDF invitation ✨</p>
            <p style="color: #666; font-size: 14px;">For the full design, please contact Wedding House.</p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} Wedding House. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    // Convert HTML to Blob
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${design.name.replace(/\s+/g, '_')}${pageId ? `_Page${pageId}` : ''}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 100);
    
    setDownloadProgress(100);
    setTimeout(() => {
      setDownloading(false);
      setDownloadProgress(0);
    }, 500);
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

  // Open PDF in new tab for preview
  const openPDFPreview = (design, pageId = null) => {
    if (design.pdfUrl) {
      window.open(design.pdfUrl, '_blank');
    } else {
      // Generate and open preview
      generateSamplePDF(design, pageId);
      // Open the downloaded file
      setTimeout(() => {
        // The file will be downloaded, user can open it
      }, 500);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#EFE5E7]">
      {/* Hero Section */}
      <section className="bg-[#532D2A] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#B392A4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#B392A4] rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center text-white pt-8">
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
      <section className="py-8 bg-[#EFE5E7] border-b border-[#B392A4]/20">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => filterByCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-[#532D2A] text-white shadow-lg"
                  : "bg-white text-[#532D2A] hover:bg-[#B392A4] hover:text-white"
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
                    ? "bg-[#532D2A] text-white shadow-lg"
                    : "bg-white text-[#532D2A] hover:bg-[#B392A4] hover:text-white"
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
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {filteredDesigns.map((design) => (
                <div
                  key={design.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleDesignSelect(design)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Watermark
                      src={design.thumbnail}
                      alt={design.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      watermarkSize={isMobile ? 100 : 100}
                      watermarkOpacity={0.5}
                      watermarkPosition="center"
                      watermarkGap={0}
                    />

                    {/* Page Count Badge */}
                    <div className="absolute top-3 left-3 bg-[#532D2A] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-10">
                      <Layers className="w-3 h-3" />
                      {design.pages} {design.pages === 1 ? "Page" : "Pages"}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-[#B392A4] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                      {design.price}
                    </div>

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(design);
                        }}
                        className="bg-white/90 p-2 rounded-full hover:bg-[#B392A4] transition-colors"
                      >
                        <Share2 className="w-4 h-4 text-[#532D2A]" />
                      </button>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openPDFPreview(design);
                          }}
                          className="bg-white text-[#532D2A] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#B392A4] hover:text-white transition-colors flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(design);
                          }}
                          className="bg-[#B392A4] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#532D2A] transition-colors flex items-center gap-1"
                          disabled={downloading}
                        >
                          <Download className="w-4 h-4" />
                          {downloading ? `${downloadProgress}%` : "Download"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#532D2A] group-hover:text-[#B392A4] transition-colors">
                      {design.name}
                    </h3>
                    <p className="text-[#532D2A]/70 text-sm mb-4 line-clamp-2">
                      {design.description}
                    </p>

                    {/* Format Icons */}
                    <div className="flex items-center gap-3 mb-4">
                      {design.formats.map((format, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#EFE5E7] text-[#532D2A] px-2 py-1 rounded"
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
                      className="w-full py-3 border-2 border-[#532D2A] text-[#532D2A] rounded-lg hover:bg-[#532D2A] hover:text-white transition-colors font-medium"
                    >
                      View Design
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Single Design View */
            <div>
              {/* Back Button */}
              <button
                onClick={() => {
                  setSelectedDesign(null);
                  setViewMode("grid");
                }}
                className="flex items-center gap-2 text-[#532D2A] hover:text-[#B392A4] transition-colors mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to All Designs
              </button>

              {/* Design Header */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div>
                    <h2 className="text-3xl font-cinzel font-bold text-[#532D2A] mb-2">
                      {selectedDesign.name}
                    </h2>
                    <p className="text-[#532D2A]/70 max-w-2xl mb-4">
                      {selectedDesign.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="bg-[#532D2A]/10 text-[#532D2A] px-4 py-2 rounded-lg font-medium">
                        {selectedDesign.price}
                      </span>
                      <span className="bg-[#B392A4]/20 text-[#532D2A] px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        {selectedDesign.pages} Pages Total
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {/* <button
                      onClick={() => openPDFPreview(selectedDesign)}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-[#532D2A] text-[#532D2A] rounded-lg hover:bg-[#532D2A] hover:text-white transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                      Preview
                    </button> */}
                    <button
                      onClick={() => handleShare(selectedDesign)}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-[#532D2A] text-[#532D2A] rounded-lg hover:bg-[#532D2A] hover:text-white transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                    <button
                      onClick={() => handleDownload(selectedDesign)}
                      className="flex items-center gap-2 px-6 py-3 bg-[#532D2A] text-white rounded-lg hover:bg-[#B392A4] transition-colors"
                      disabled={downloading}
                    >
                      <Download className="w-5 h-5" />
                      {downloading ? `${downloadProgress}%` : "Download All"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Page Preview Controls */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-cinzel font-bold text-[#532D2A]">
                  Pages Preview
                </h3>

                <div className="flex items-center gap-3">
                  {/* Zoom Controls */}
                  <div className="flex items-center border border-[#B392A4]/30 rounded-lg overflow-hidden">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 hover:bg-[#EFE5E7] transition-colors text-[#532D2A]"
                      disabled={zoomLevel <= 50}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 border-x border-[#B392A4]/30 text-sm text-[#532D2A]">
                      {zoomLevel}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 hover:bg-[#EFE5E7] transition-colors text-[#532D2A]"
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
                    className="flex items-center gap-2 px-4 py-2 border border-[#B392A4]/30 rounded-lg hover:bg-[#EFE5E7] transition-colors text-[#532D2A]"
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
                        ? "ring-4 ring-[#B392A4] scale-[1.02]"
                        : ""
                    }`}
                  >
                    <div
                      className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
                      onClick={() => togglePageSelection(page.id)}
                    >
                      <Watermark
                        src={page.image}
                        alt={page.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{ transform: `scale(${zoomLevel / 100})` }}
                        watermarkSize={isMobile ? 100 : 100}
                        watermarkOpacity={0.5}
                        watermarkPosition="center"
                        watermarkGap={0}
                      />

                      {/* Page Number Badge */}
                      <div className="absolute top-3 left-3 bg-[#532D2A] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                        Page {index + 1}
                      </div>

                      {/* Selection Indicator */}
                      {selectedPages.includes(page.id) && (
                        <div className="absolute top-3 right-3 bg-[#B392A4] text-white rounded-full p-1 z-10">
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
                          className="bg-white p-3 rounded-full hover:bg-[#B392A4] transition-colors"
                        >
                          <Eye className="w-5 h-5 text-[#532D2A]" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(selectedDesign, page.id);
                          }}
                          className="bg-white p-3 rounded-full hover:bg-[#B392A4] transition-colors"
                          disabled={downloading}
                        >
                          <Download className="w-5 h-5 text-[#532D2A]" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-1 text-[#532D2A]">
                        {page.title}
                      </h4>
                      <p className="text-sm text-[#532D2A]/50 mb-3">
                        Page {index + 1} of {selectedDesign.pages}
                      </p>

                      {/* Page Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDownload(selectedDesign, page.id)}
                          className="flex-1 py-2 border border-[#532D2A] text-[#532D2A] rounded-lg hover:bg-[#532D2A] hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                          disabled={downloading}
                        >
                          <Download className="w-4 h-4" />
                          {downloading ? `${downloadProgress}%` : "Download"}
                        </button>
                        <button
                          onClick={() => togglePageSelection(page.id)}
                          className={`px-4 py-2 border rounded-lg transition-colors text-sm ${
                            selectedPages.includes(page.id)
                              ? "bg-[#B392A4] text-white border-[#B392A4]"
                              : "border-[#B392A4]/30 text-[#532D2A] hover:border-[#B392A4]"
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
                  <span className="text-[#532D2A] font-medium">
                    {selectedPages.length}{" "}
                    {selectedPages.length === 1 ? "Page" : "Pages"} Selected
                  </span>
                  <button
                    onClick={() => setSelectedPages([])}
                    className="px-4 py-2 border border-[#B392A4]/30 rounded-lg hover:bg-[#EFE5E7] transition-colors text-[#532D2A]"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => {
                      selectedPages.forEach((pageId) => {
                        handleDownload(selectedDesign, pageId);
                      });
                    }}
                    className="px-6 py-2 bg-[#532D2A] text-white rounded-lg hover:bg-[#B392A4] transition-colors flex items-center gap-2"
                    disabled={downloading}
                  >
                    <Download className="w-4 h-4" />
                    {downloading ? `${downloadProgress}%` : "Download Selected"}
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
            className="absolute top-4 right-4 text-white hover:text-[#B392A4] transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-[50vh]">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Watermark
                src={selectedDesign.pages_preview[currentPage - 1]?.image}
                alt={`Page ${currentPage}`}
                className="w-[50vh] h-auto mx-auto"
                watermarkSize={isMobile ? 40 : 50}
                watermarkOpacity={0.15}
                watermarkPosition="center"
                watermarkGap={0}
              />
            </div>

            {/* Page Navigation */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-[#B392A4]/30 transition-all ${
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
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-[#B392A4]/30 transition-all ${
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