'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-full"
          style={{ height: `${scrollProgress}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;