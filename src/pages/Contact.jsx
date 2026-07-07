import React, { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle,
  ExternalLink,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const [navbarHeight, setNavbarHeight] = useState(80);

  // Get navbar height dynamically
  useEffect(() => {
    const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('header');
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 84351 11188"],
      action: "tel:+918435111188",
      actionText: "Call Now",
      color: "bg-[#B392A4]/10 text-[#532D2A]"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["printkaraopramo@gmail.com"],
      action: "mailto:printkaraopramo@gmail.com",
      actionText: "Send Email",
      color: "bg-[#B392A4]/10 text-[#532D2A]"
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "102, The Magnet Tower",
        "Curewell Hospital Rd., 6/1 New Palasia",
        "Indore, Madhya Pradesh 452001"
      ],
      action: "https://maps.google.com/?q=102+The+Magnet+Tower+Indore",
      actionText: "Get Directions",
      color: "bg-[#B392A4]/10 text-[#532D2A]"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 10:00 AM - 7:00 PM",
        "Sunday: CLOSED"
      ],
      color: "bg-[#B392A4]/10 text-[#532D2A]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EFE5E7]">
      
      {/* Hero Banner */}
      <div 
        className="bg-[#532D2A] pb-16 md:pb-20"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-white mb-4">
              Let's Connect
            </h1>
            
            <div className="w-24 h-0.5 bg-[#B392A4] mx-auto mb-6"></div>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We're here to help you create the perfect wedding invitations. 
              Reach out to us anytime.
            </p>
            
            {/* CTA Buttons in Banner */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://wa.me/918435111188"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#B392A4] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#EFE5E7] hover:text-[#532D2A] shadow-lg transition-all transform hover:scale-105 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#532D2A] transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Social Proof */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "👥", value: "10,000+", label: "Happy Couples" },
              { icon: "❤️", value: "5000+", label: "Weddings" },
              { icon: "🎁", value: "500+", label: "Designs" },
              { icon: "📅", value: "15+", label: "Years" }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 text-center transform hover:-translate-y-1 transition">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-[#532D2A]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-[#B392A4] font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-[#532D2A] mt-2 mb-3">
              We'd Love to Hear From You
            </h2>
            <div className="w-20 h-0.5 bg-[#B392A4] mx-auto"></div>
            <p className="text-[#532D2A]/70 mt-4 max-w-2xl mx-auto">
              Have questions about our wedding cards? Need a custom design? 
              Our team is ready to assist you.
            </p>
          </div>
          
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 p-6">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-[#B392A4]" />
                </div>
                <h3 className="font-bold text-lg text-[#532D2A] mb-2">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-[#532D2A]/70 text-sm">{detail}</p>
                  ))}
                </div>
                {item.action && (
                  <a 
                    href={item.action}
                    target={item.title === "Address" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#B392A4] text-sm mt-3 hover:gap-2 transition-all"
                  >
                    {item.actionText}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Form and Map Row */}
          <div className="grid lg:grid-cols-2 gap-8" id="contact-form">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-cinzel font-bold text-[#532D2A] mb-2">Send us a Message</h3>
              <p className="text-[#532D2A]/70 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {formStatus.submitted && (
                <div className="mb-6 p-4 bg-[#B392A4]/10 border border-[#B392A4]/30 rounded-lg">
                  <div className="flex items-center gap-2 text-[#532D2A]">
                    <CheckCircle className="w-5 h-5 text-[#B392A4]" />
                    <span>Thank you! We'll contact you soon.</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#532D2A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-[#B392A4]/30 rounded-lg focus:ring-2 focus:ring-[#B392A4] focus:border-[#B392A4] outline-none transition text-[#532D2A]"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#532D2A] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-[#B392A4]/30 rounded-lg focus:ring-2 focus:ring-[#B392A4] focus:border-[#B392A4] outline-none transition text-[#532D2A]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#532D2A] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-[#B392A4]/30 rounded-lg focus:ring-2 focus:ring-[#B392A4] focus:border-[#B392A4] outline-none transition text-[#532D2A]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#532D2A] mb-1">Your Message *</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-[#B392A4]/30 rounded-lg focus:ring-2 focus:ring-[#B392A4] focus:border-[#B392A4] outline-none transition resize-none text-[#532D2A]"
                    placeholder="Tell us about your wedding plans, preferred designs, or any questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full bg-[#532D2A] hover:bg-[#B392A4] text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & WhatsApp */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.123456789012!2d75.8745!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc9e1f1c1c1d%3A0x1c1c1c1c1c1c1c1c!2sThe%20Magnet%20Tower!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Wedding House Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 border-t border-[#B392A4]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#532D2A]/70">
                        <strong className="text-[#532D2A]">The Magnet Tower</strong>
                        <br />
                        New Palasia, Indore
                      </p>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=102+The+Magnet+Tower+Indore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B392A4] text-sm hover:underline flex items-center gap-1"
                    >
                      Open in Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#B392A4] rounded-xl shadow-sm p-6 text-white transform hover:scale-[1.01] transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Quick Support</h3>
                </div>
                <p className="text-white/90 mb-4">
                  Get instant replies to your queries. Click below to start a conversation on WhatsApp.
                </p>
                <a
                  href="https://wa.me/918435111188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#532D2A] px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-[#EFE5E7] rounded-xl p-6 text-center border border-[#B392A4]/20">
                <div className="w-12 h-12 bg-[#B392A4]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-[#B392A4]" />
                </div>
                <h4 className="font-bold text-[#532D2A] mb-1">Quick Response Guarantee</h4>
                <p className="text-sm text-[#532D2A]/60">
                  We respond to all inquiries within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#532D2A] text-white py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-cinzel font-bold mb-2">Ready to start your wedding journey?</h3>
          <p className="text-[#B392A4] mb-6">Let's create something beautiful together</p>
          <button 
            onClick={() => window.location.href = '/weddingcards'}
            className="bg-[#B392A4] hover:bg-[#EFE5E7] hover:text-[#532D2A] text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center gap-2"
          >
            Explore Wedding Cards
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;