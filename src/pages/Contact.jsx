import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-5xl font-cinzel font-bold mb-4">Get in Touch</h1>
          <p className="text-xl">Let's create something beautiful together</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-maroon mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-maroon text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-maroon mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">+91 81204 61118</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">printkaraopramo@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">
                      102, The Magnet Tower, Curewell Hospital Rd., 6/1 New
                      Palasia, Indore, Madhya Pradesh 452001
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918120461118"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
