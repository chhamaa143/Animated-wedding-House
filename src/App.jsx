import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DigitalInvitation from "./pages/DigitalInvitation";
import WeddingCardsCategory from "./pages/WeddingCardsCategory";
import DigitalPDF from "./pages/DigitalPDF";
import Gallery from "./pages/Gallery";
import ShagunEnvelopes from "./pages/ShagunEnvelopes";
import WeddingHamper from "./pages/WeddingHamper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WeddingCards from "./pages/WeddingCards";
import WeddingStationery from "./pages/WeddingStationery";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <Router>
      <div className="bg-cream min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="e-invite" element={<DigitalInvitation />} />
          <Route path="weddingcategory" element={<WeddingCardsCategory />} />
          <Route path="digitalpdf" element={<DigitalPDF />} />
          <Route path="shagunenvelope" element={<ShagunEnvelopes />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="hamper" element={<WeddingHamper />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="weddingcards" element= {<WeddingCards/>}/>
          <Route path="weddingstationory" element ={<WeddingStationery/>}/>
          <Route path="product" element= {<ProductDetail/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
