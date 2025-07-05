import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-14 w-auto scale-110" src="/img/mohtech.jpg" alt="MohaTech Solutions" />
              <span className="text-xl font-bold text-navy font-poppins">MohaTech Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-custom hover:text-navy transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-navy-light transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-custom hover:text-navy"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-custom hover:text-navy transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-3 mt-4 bg-navy text-white px-6 py-2 rounded-lg text-center hover:bg-navy-light transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}