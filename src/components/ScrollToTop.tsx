import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
  onClick: () => void;
}

export default function ScrollToTop({ show, onClick }: ScrollToTopProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 bg-navy text-white p-3 rounded-full shadow-lg hover:bg-navy-light transition-colors duration-200 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}