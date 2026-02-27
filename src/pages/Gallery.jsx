import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Wedding Cards' },
    { id: 2, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Hampers' },
    { id: 3, src: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Stationery' },
    { id: 4, src: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Wedding Cards' },
    { id: 5, src: 'https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Wedding Cards' },
    { id: 6, src: 'https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Stationery' },
    { id: 7, src: 'https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Hampers' },
    { id: 8, src: 'https://images.unsplash.com/photo-1607083206868-6c852a3e5f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Wedding Cards' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-maroon text-white py-16">
        <div className="container-custom text-center">
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
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
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

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gold" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage.src} alt={selectedImage.category} className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </div>
  );
};

export default Gallery;