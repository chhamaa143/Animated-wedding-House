import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

const InquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setIsOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-gold text-maroon p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-50 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Quick Inquiry
        </span>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-maroon">Quick Inquiry</h3>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold"
                />
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold"
                ></textarea>

                <button type="submit" className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-opacity-90">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryPopup;