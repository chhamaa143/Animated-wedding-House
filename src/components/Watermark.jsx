import React, { useRef, useEffect, useState } from "react";

const Watermark = ({
  src,
  type = "auto", // 'auto', 'image', 'video'
  alt = "",
  className = "",
  width,
  height,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = true,
  poster,
  watermarkOpacity = 0.15,
  watermarkPosition = "multiple", // 'single', 'multiple', 'diagonal'
  children,
}) => {
  const [contentType, setContentType] = useState(type);
  const mediaRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Detect content type from src if set to auto
  useEffect(() => {
    if (type === "auto" && src) {
      const extension = src.split(".").pop().toLowerCase();
      const videoExtensions = ["mp4", "webm", "ogg", "mov", "avi"];
      if (videoExtensions.includes(extension)) {
        setContentType("video");
      } else {
        setContentType("image");
      }
    }
  }, [src, type]);

  // Handle video watermark with canvas
  useEffect(() => {
    if (
      contentType !== "video" ||
      !mediaRef.current ||
      !canvasRef.current ||
      !containerRef.current
    )
      return;

    const video = mediaRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const ctx = canvas.getContext("2d");

    const drawWatermark = () => {
      if (!video || video.paused || video.ended) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Draw watermarks based on position
      drawWatermarksOnCanvas(ctx, canvas.width, canvas.height);

      requestAnimationFrame(drawWatermark);
    };

    video.addEventListener("play", () => {
      setIsPlaying(true);
      drawWatermark();
    });

    video.addEventListener("pause", () => setIsPlaying(false));
    video.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      video.removeEventListener("play", drawWatermark);
    };
  }, [contentType]);

  // Draw watermarks on canvas
  const drawWatermarksOnCanvas = (ctx, width, height) => {
    ctx.save();
    ctx.font = 'bold 28px "Cinzel", serif';
    ctx.fillStyle = `rgba(212, 175, 55, ${watermarkOpacity})`; // Gold color

    if (watermarkPosition === "single") {
      // Single watermark in center
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-0.2);
      ctx.fillText("Wedding House", -120, 0);

      ctx.font = 'bold 16px "Cinzel", serif';
      ctx.fillStyle = `rgba(107, 15, 26, ${watermarkOpacity})`; // Maroon color
      ctx.fillText("UNION OF HEARTS", -80, 40);
      ctx.restore();
    } else if (watermarkPosition === "diagonal") {
      // Diagonal repeating watermarks
      for (let i = 0; i < width; i += 200) {
        for (let j = 0; j < height; j += 150) {
          ctx.save();
          ctx.translate(i, j);
          ctx.rotate(-0.3);
          ctx.font = 'bold 20px "Cinzel", serif';
          ctx.fillStyle = `rgba(212, 175, 55, ${watermarkOpacity * 0.7})`;
          ctx.fillText("Wedding House", 0, 0);
          ctx.restore();
        }
      }
    } else {
      // Multiple watermarks (default)
      // Top left
      ctx.save();
      ctx.translate(50, 50);
      ctx.rotate(-0.2);
      ctx.font = 'bold 24px "Cinzel", serif';
      ctx.fillStyle = `rgba(212, 175, 55, ${watermarkOpacity})`;
      ctx.fillText("Wedding House", 0, 0);
      ctx.restore();

      // Center
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-0.2);
      ctx.font = 'bold 40px "Cinzel", serif';
      ctx.fillStyle = `rgba(212, 175, 55, ${watermarkOpacity * 0.8})`;
      ctx.fillText("Wedding House", -150, 0);

      ctx.font = 'bold 20px "Cinzel", serif';
      ctx.fillStyle = `rgba(107, 15, 26, ${watermarkOpacity * 0.8})`;
      ctx.fillText("UNION OF HEARTS", -100, 50);
      ctx.restore();

      // Bottom right
      //   ctx.save();
      //   ctx.translate(width - 200, height - 80);
      //   ctx.rotate(0.2);
      //   ctx.font = 'bold 24px "Cinzel", serif';
      //   ctx.fillStyle = `rgba(212, 175, 55, ${watermarkOpacity})`;
      //   ctx.fillText("Wedding House", 0, 0);
      //   ctx.restore();

      // Additional scattered watermarks
      ctx.save();
      ctx.translate(width / 3, height / 3);
      ctx.rotate(0.3);
      ctx.font = 'bold 18px "Cinzel", serif';
      ctx.fillStyle = `rgba(212, 175, 55, ${watermarkOpacity * 0.6})`;
      ctx.fillText("Wedding House", 0, 0);
      ctx.restore();

      ctx.save();
      ctx.translate(width * 0.7, height * 0.2);
      ctx.rotate(-0.4);
      ctx.font = 'bold 18px "Cinzel", serif';
      ctx.fillStyle = `rgba(107, 15, 26, ${watermarkOpacity * 0.6})`;
      ctx.fillText("Wedding House", 0, 0);
      ctx.restore();
    }

    ctx.restore();
  };

  // Handle image watermark with CSS overlay
  if (contentType === "image") {
    return (
      <div
        ref={containerRef}
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }}
      >
        <img
          ref={mediaRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />

        {/* CSS Watermark Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Logo Watermark */}
          <div
            className={`absolute inset-0 flex items-center justify-center opacity-${Math.round(watermarkOpacity * 100)}`}
          >
            <div className="text-center transform -rotate-12 scale-150">
              {/* <div className="text-4xl font-cinzel font-bold text-gold">WED</div>
              <div className="text-4xl font-cinzel font-bold text-maroon">HOUSE</div>
              <div className="text-xs text-gray-500 mt-1">UNION OF HEARTS</div> */}
            </div>
          </div>

          {/* Pattern Watermarks */}
          <div
            className={`absolute inset-0 opacity-${Math.round(watermarkOpacity * 70)}`}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute font-cinzel font-bold text-gold text-xl whitespace-nowrap"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 60 - 30}deg)`,
                  opacity: 0.3 + Math.random() * 0.3,
                }}
              ></div>
            ))}
          </div>

          {/* Border Watermarks */}
          <div className="absolute top-2 left-2 text-xs font-cinzel text-gold opacity-40">
            <img src="/images/Wedding House Logo........png" alt="" />{" "}
          </div>
          <div className="absolute bottom-2 right-2 text-xs font-cinzel text-maroon opacity-40 transform rotate-180">
            {/* Wedding House */}
          </div>
        </div>

        {children}
      </div>
    );
  }

  // Handle video watermark with canvas
  if (contentType === "video") {
    return (
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ width, height }}
      >
        <video
          ref={mediaRef}
          src={src}
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          className="w-full h-full absolute top-0 left-0"
          style={{ objectFit: "cover" }}
        />

        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 5 }}
        />

        {/* Static CSS watermarks for when video is not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 pointer-events-none z-10">
            <div
              className={`absolute inset-0 flex items-center justify-center opacity-${Math.round(watermarkOpacity * 100)}`}
            >
              <div className="text-center transform -rotate-12">
                <div className="text-4xl font-cinzel font-bold text-gold">
                  WED
                </div>
                <div className="text-4xl font-cinzel font-bold text-maroon">
                  HOUSE
                </div>
              </div>
            </div>
          </div>
        )}

        {children}
      </div>
    );
  }

  // Fallback for unsupported type
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {children}
    </div>
  );
};

export default Watermark;
