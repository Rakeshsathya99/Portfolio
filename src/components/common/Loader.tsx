import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-100/80 dark:bg-dark-200/80 backdrop-blur-sm">
      <motion.div
        initial={{ 
          scale: 0.5, 
          opacity: 0 
        }}
        animate={{ 
          scale: 1,
          opacity: 1,
          rotate: 360
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear"
        }}
        className="relative w-24 h-24"
      >
        {/* Outer circle */}
        <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full"></div>
        
        {/* Inner moving circle */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute w-1/2 h-1/2 top-0 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-6 bg-primary-500 rounded-full absolute top-0 left-0"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader; 