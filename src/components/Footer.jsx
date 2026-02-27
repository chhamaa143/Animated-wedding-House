import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-maroon text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-cinzel font-bold mb-4">
              {/* Wedding <span className="text-gold">House</span> */}
              <img
                width={100}
                src="/images/Wedding House Logo........png"
                alt="Wedding House"
              />
            </h3>
            <p className="text-gray-300 mb-4">
              Crafting memories, one celebration at a time. Premium wedding invitations and stationery for your special day.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Print-Karao/61583701421242/" className="hover:text-gold transition-colors"><Facebook /></a>
              <a href="https://instagram.com/print.karao" className="hover:text-gold transition-colors"><Instagram /></a>
              <a href="https://x.com/PrintKarao" className="hover:text-gold transition-colors"><Twitter /></a>
              <a href="https://www.youtube.com/@PrintKarao" className="hover:text-gold transition-colors"><Youtube /></a>
              {/* <a href="#" className="hover:text-gold transition-colors"><Linkedin /></a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/wedding-cards" className="text-gray-300 hover:text-gold transition-colors">Wedding Cards</Link></li>
              <li><Link to="/wedding-stationery" className="text-gray-300 hover:text-gold transition-colors">Wedding Stationery</Link></li>
              <li><Link to="/wedding-hamper" className="text-gray-300 hover:text-gold transition-colors">Wedding Hamper</Link></li>
              <li><Link to="/digital-invitation" className="text-gray-300 hover:text-gold transition-colors">Digital Invitation</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-gray-300">+91 81204 61118</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-gray-300">printkaraopramo@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-gray-300">102, The Magnet Tower, Curewell Hospital Rd., 6/1 New Palasia, Indore, Madhya Pradesh 452001</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp Button */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Quick Inquiry</h4>
            <a
              href="https://wa.me/918120461118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Wedding House. All rights reserved. | Union of Hearts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;