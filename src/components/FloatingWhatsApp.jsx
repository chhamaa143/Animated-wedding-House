import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918120461118"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50 group animate-bounce"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Need help? Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;