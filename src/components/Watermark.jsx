import React, { useRef, useState, useEffect } from "react";
// Agar image src/assets mein hai to ye import karo
// import logoImage from "../assets/logo.png";

const Watermark = ({
  src,
  alt = "",
  className = "",
  width,
  height,
  watermarkSize = 50,
  watermarkOpacity = 0.15,
  watermarkPosition = "bottom-right",
  watermarkGap = 10,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const containerRef = useRef(null);

  // Logo image source - multiple fallback options
  const logoSrc = "/images/gallery/logo.png"; // Public folder mein rakho

  // Position styles based on watermarkPosition prop
  const getPositionStyles = () => {
    const baseStyles = {
      position: "absolute",
      width: `${watermarkSize}px`,
      height: `${watermarkSize}px`,
      opacity: watermarkOpacity,
      pointerEvents: "none",
      zIndex: 10,
    };

    switch (watermarkPosition) {
      case "top-left":
        return {
          ...baseStyles,
          top: `${watermarkGap}px`,
          left: `${watermarkGap}px`,
        };
      case "top-right":
        return {
          ...baseStyles,
          top: `${watermarkGap}px`,
          right: `${watermarkGap}px`,
        };
      case "bottom-left":
        return {
          ...baseStyles,
          bottom: `${watermarkGap}px`,
          left: `${watermarkGap}px`,
        };
      case "center":
        return {
          ...baseStyles,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      case "bottom-right":
      default:
        return {
          ...baseStyles,
          bottom: `${watermarkGap}px`,
          right: `${watermarkGap}px`,
        };
    }
  };

  // Agar logo error ho to fallback text watermark
  const renderWatermark = () => {
    if (logoError) {
      return (
        <div style={getPositionStyles()} className="flex items-center justify-center bg-maroon/10 rounded-full">
          <span className="text-[8px] font-bold text-maroon">WH</span>
        </div>
      );
    }

    return (
      <div style={getPositionStyles()}>
        <img
          src={logoSrc}
          alt="Wedding House"
          className="w-full h-full object-contain"
          onError={() => setLogoError(true)}
        />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/500x500?text=Image+Not+Found";
        }}
      />

      {/* Watermark - Only shown after image loads */}
      {isLoaded && renderWatermark()}
    </div>
  );
};

export default Watermark;