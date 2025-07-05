import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-navy via-navy-light to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              Smart Tech.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Real Solutions.
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Empowering small and medium businesses in Nairobi with affordable, 
              simple digital tools that solve real operational problems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-300">Local Expertise</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="text-cyan-400 font-semibold">Process Automation</div>
              <div className="text-sm text-gray-300">Save 40% time</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="text-cyan-400 font-semibold">Cloud Solutions</div>
              <div className="text-sm text-gray-300">99.9% Uptime</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}