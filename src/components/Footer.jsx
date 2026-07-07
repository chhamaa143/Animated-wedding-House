import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#EFE5E7] text-[#532D2A] pt-16 pb-8 border-t border-[#B392A4]/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-cinzel font-bold mb-4">
              <img
                width={120}
                src="/images/gallery/logo.png"
                alt="Wedding House"
                className=""
              />
            </h3>
            <p className="text-[#532D2A]/70 mb-4 leading-relaxed">
              Crafting memories, one celebration at a time. Premium wedding
              invitations and stationery for your special day.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Print-Karao/61583701421242/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#532D2A]/50 hover:text-[#B392A4] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/print.karao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#532D2A]/50 hover:text-[#B392A4] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/PrintKarao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#532D2A]/50 hover:text-[#B392A4] transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@PrintKarao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#532D2A]/50 hover:text-[#B392A4] transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#532D2A]">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/weddingcards"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Wedding Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/weddingstationery"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Wedding Stationery
                </Link>
              </li>
              <li>
                <Link
                  to="/hamper"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Wedding Hamper
                </Link>
              </li>
              <li>
                <Link
                  to="/e-invite"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Digital Invitation
                </Link>
              </li>
              <li>
                <Link
                  to="/shagunenvelopes"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Shagun Envelopes
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#532D2A]/70 hover:text-[#B392A4] transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#532D2A]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-[#B392A4] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#532D2A]/70 hover:text-[#532D2A] transition-colors">
                  <span className="block text-xs text-[#B392A4]/60 mb-0.5">Phone</span>
                  <a href="tel:+918435111188" className="hover:text-[#B392A4] transition-colors">
                    +91 84351 11188
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-[#B392A4] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#532D2A]/70 hover:text-[#532D2A] transition-colors">
                  <span className="block text-xs text-[#B392A4]/60 mb-0.5">Email</span>
                  <a href="mailto:printkaraopramo@gmail.com" className="hover:text-[#B392A4] transition-colors break-all">
                    printkaraopramo@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-[#B392A4] mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="text-[#532D2A]/70 hover:text-[#532D2A] transition-colors">
                  <span className="block text-xs text-[#B392A4]/60 mb-0.5">Address</span>
                  102, The Magnet Tower, Curewell Hospital Rd., 6/1 New Palasia,
                  Indore, Madhya Pradesh 452001
                </span>
              </li>
            </ul>
          </div>

          {/* WhatsApp & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#532D2A]">Quick Inquiry</h4>
            <a
              href="https://wa.me/918435111188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#B392A4] hover:bg-[#532D2A] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-[#B392A4]/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            
            <div className="mt-6 pt-6 border-t border-[#B392A4]/20">
              <h4 className="text-sm font-semibold text-[#532D2A] mb-3">Stay Connected</h4>
              <p className="text-[#532D2A]/60 text-sm mb-3">
                Subscribe for updates and offers
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-[#EFE5E7] border border-[#B392A4]/30 text-[#532D2A] placeholder-[#532D2A]/40 focus:outline-none focus:border-[#B392A4] transition-colors text-sm"
                />
                <button className="px-4 py-2 bg-[#B392A4] hover:bg-[#532D2A] text-white rounded-lg transition-all duration-300 text-sm font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider with heart */}
        <div className="relative flex items-center justify-center my-8">
          <div className="flex-1 border-t border-[#B392A4]/20"></div>
          <Heart className="w-6 h-6 text-[#B392A4] mx-4 fill-[#B392A4]/20" />
          <div className="flex-1 border-t border-[#B392A4]/20"></div>
        </div>

        {/* Copyright - Updated with working links */}
        <div className="text-center pt-4">
          <p className="text-[#532D2A]/50 text-sm">
            © {new Date().getFullYear()} Powered by{' '}
            <a 
              href="https://weddinghouse.online/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B392A4] hover:text-[#532D2A] transition-colors font-medium"
            >
              Wedding House
            </a>
            . All rights reserved.
          </p>
          <p className="text-[#532D2A]/30 text-xs mt-1">
            Made with ❤️ in India by{' '}
            <a 
              href="https://printkarao.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B392A4] hover:text-[#532D2A] transition-colors font-medium"
            >
              Print Karao
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;