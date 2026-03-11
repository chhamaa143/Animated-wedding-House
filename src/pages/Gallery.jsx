import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Watermark from "../components/Watermark";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = [
    { id: 1, src: '/products/Anant-Bandhan (1).png', category: 'Wedding Cards' },
    { id: 2, src: '/products/cls-pocket-env1.webp', category: 'Hampers' },
    { id: 3, src: '/products/bottle-tag.webp', category: 'Stationery' },
    { id: 4, src: '/products/classic-card (1).png', category: 'Wedding Cards' },
    { id: 5, src: '/products/farman-wed-card (4).png', category: 'Wedding Cards' },
    { id: 6, src: '/products/itinerery.png', category: 'Stationery' },
    { id: 7, src: '/products/hamper.png', category: 'Hampers' },
    { id: 8, src: '/products/luxury (1).webp', category: 'Wedding Cards' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-maroon text-white py-16">
        <div className="container-custom text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">Gallery Collection</h1>
          <p className="text-xl opacity-90">Real moments from our beautiful wedding Cards</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Watermark
                    src={image.src}
                    alt={image.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    watermarkSize={isMobile ? 100 : 100}
                    watermarkOpacity={0.5}
                    watermarkPosition="center"
                    watermarkGap={0}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with Watermark */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gold z-10" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-full max-h-[90vh]">
            <Watermark
              src={selectedImage.src}
              alt={selectedImage.category}
              className="max-w-full max-h-[90vh] object-contain"
              watermarkSize={isMobile ? 100 : 100}
              watermarkOpacity={0.5}
              watermarkPosition="center"
              watermarkGap={0}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;