import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-inter">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Services />
                <WhyUs />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
      </div>
    </Router>
  );
}

export default App;