import React, { useEffect, useRef } from "react";
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
  const cursorRef = useRef(null);

  // ============================================
  // BUTTERFLY CURSOR EFFECT - NO HEARTS
  // ============================================
  useEffect(() => {
    let butterflyTimeout = null;
    let butterflyElement = null;
    let isFlying = false;
    let flutterInterval = null;

    const createButterfly = (x, y) => {
      // Remove existing butterfly
      if (butterflyElement) {
        butterflyElement.remove();
        butterflyElement = null;
      }
      if (butterflyTimeout) {
        clearTimeout(butterflyTimeout);
        butterflyTimeout = null;
      }
      if (flutterInterval) {
        clearInterval(flutterInterval);
        flutterInterval = null;
      }

      // Butterfly colors
      const colors = ['#B392A4', '#D4AF37', '#E8D5B7', '#C49B6C', '#F5E6D3', '#E8A87C', '#D4A5A5'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const size = 14 + Math.random() * 12;

      butterflyElement = document.createElement('div');
      butterflyElement.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12 C8 4, 2 6, 2 12 C2 18, 8 20, 12 12Z" 
            fill="${randomColor}" opacity="0.65" stroke="${randomColor}" stroke-width="0.5"/>
          <path d="M12 12 C16 4, 22 6, 22 12 C22 18, 16 20, 12 12Z" 
            fill="${randomColor}" opacity="0.65" stroke="${randomColor}" stroke-width="0.5"/>
          <path d="M12 12 C9 6, 4 8, 4 12 C4 16, 9 18, 12 12Z" 
            fill="${randomColor}" opacity="0.4" stroke="${randomColor}" stroke-width="0.3"/>
          <path d="M12 12 C15 6, 20 8, 20 12 C20 16, 15 18, 12 12Z" 
            fill="${randomColor}" opacity="0.4" stroke="${randomColor}" stroke-width="0.3"/>
          <ellipse cx="12" cy="12" rx="1.8" ry="5.5" fill="#532D2A" opacity="0.5"/>
          <path d="M12 6.5 C11 4.5, 9.5 3.5, 8.5 3" stroke="#532D2A" stroke-width="0.7" opacity="0.4" stroke-linecap="round"/>
          <path d="M12 6.5 C13 4.5, 14.5 3.5, 15.5 3" stroke="#532D2A" stroke-width="0.7" opacity="0.4" stroke-linecap="round"/>
          <circle cx="6" cy="8" r="0.8" fill="#D4AF37" opacity="0.3"/>
          <circle cx="18" cy="8" r="0.8" fill="#D4AF37" opacity="0.3"/>
          <circle cx="7" cy="16" r="0.6" fill="#D4AF37" opacity="0.2"/>
          <circle cx="17" cy="16" r="0.6" fill="#D4AF37" opacity="0.2"/>
        </svg>
      `;
      
      butterflyElement.style.cssText = `
        position: fixed;
        left: ${x - size/2}px;
        top: ${y - size/2}px;
        pointer-events: none;
        z-index: 9999;
        animation: butterflyFloat 1.8s ease-out forwards;
        user-select: none;
        filter: drop-shadow(0 2px 10px rgba(179, 146, 164, 0.15));
      `;
      document.body.appendChild(butterflyElement);

      // Wing flutter
      flutterInterval = setInterval(() => {
        if (!butterflyElement) {
          clearInterval(flutterInterval);
          flutterInterval = null;
          return;
        }
        const wings = butterflyElement.querySelectorAll('path');
        wings.forEach((wing, index) => {
          if (index < 2) {
            const scaleY = 0.4 + Math.sin(Date.now() / 150 + index * 0.8) * 0.4;
            wing.setAttribute('transform', `scale(1, ${scaleY})`);
          }
        });
      }, 30);

      butterflyTimeout = setTimeout(() => {
        if (butterflyElement) {
          butterflyElement.remove();
          butterflyElement = null;
        }
        if (flutterInterval) {
          clearInterval(flutterInterval);
          flutterInterval = null;
        }
        butterflyTimeout = null;
        isFlying = false;
      }, 1800);
    };

    // Add butterfly animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes butterflyFloat {
        0% { transform: translate(0, 0) scale(0.2) rotate(-15deg); opacity: 0.2; }
        15% { opacity: 0.7; }
        30% { transform: translate(${-15 + Math.random() * 30}px, -25px) scale(0.7) rotate(8deg); opacity: 0.9; }
        55% { transform: translate(${-8 + Math.random() * 16}px, -45px) scale(0.5) rotate(-12deg); opacity: 0.8; }
        80% { transform: translate(${-5 + Math.random() * 10}px, -60px) scale(0.4) rotate(6deg); opacity: 0.5; }
        100% { transform: translate(${-10 + Math.random() * 20}px, -80px) scale(0.2) rotate(15deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 500 && !isFlying) {
        lastTime = now;
        if (Math.random() < 0.025) {
          isFlying = true;
          createButterfly(e.clientX, e.clientY);
          setTimeout(() => { isFlying = false; }, 1800);
        }
      }
    };

    const handleClick = (e) => {
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          createButterfly(
            e.clientX + (Math.random() - 0.5) * 80,
            e.clientY + (Math.random() - 0.5) * 80
          );
        }, i * 150);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.head.removeChild(style);
      if (butterflyElement) {
        butterflyElement.remove();
        butterflyElement = null;
      }
      if (butterflyTimeout) {
        clearTimeout(butterflyTimeout);
        butterflyTimeout = null;
      }
      if (flutterInterval) {
        clearInterval(flutterInterval);
        flutterInterval = null;
      }
    };
  }, []);

  return (
    <footer className="bg-[#EFE5E7] text-[#532D2A] pt-16 pb-8 border-t border-[#B392A4]/20 relative overflow-hidden">
      {/* Cursor tracking element */}
      <div 
        ref={cursorRef}
        className="hidden"
      />
      
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

        {/* Divider with heart - Keep as static icon, no animation */}
        <div className="relative flex items-center justify-center my-8">
          <div className="flex-1 border-t border-[#B392A4]/20"></div>
          <Heart className="w-6 h-6 text-[#B392A4] mx-4 fill-[#B392A4]/20" />
          <div className="flex-1 border-t border-[#B392A4]/20"></div>
        </div>

        {/* Copyright */}
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

      {/* Cursor Animation Styles - No hearts */}
      <style>{`
        @keyframes butterflyFloat {
          0% { transform: translate(0, 0) scale(0.2) rotate(-15deg); opacity: 0.2; }
          15% { opacity: 0.7; }
          30% { transform: translate(-15px, -25px) scale(0.7) rotate(8deg); opacity: 0.9; }
          55% { transform: translate(-8px, -45px) scale(0.5) rotate(-12deg); opacity: 0.8; }
          80% { transform: translate(-5px, -60px) scale(0.4) rotate(6deg); opacity: 0.5; }
          100% { transform: translate(-10px, -80px) scale(0.2) rotate(15deg); opacity: 0; }
        }

        /* Remove any heart cursor elements */
        [style*="heart"] {
          display: none !important;
        }

        footer {
          cursor: default;
        }
      `}</style>
    </footer>
  );
};

export default Footer;