'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-scroll';
import Navlinks from '@/constants/navlinks';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [ballPosition, setBallPosition] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  // Calculate position and dimensions for the ball based on text width
  const calculateBallPosition = (index: number) => {
    if (!navRefs.current[index]) return null;

    const element = navRefs.current[index];
    const navContainer = element?.parentElement;

    if (!element || !navContainer) return null;

    const containerRect = navContainer.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // Add padding to the width for better visual effect
    const paddingX = 16; // 8px on each side
    const paddingY = 8; // 4px on top and bottom

    return {
      left: elementRect.left - containerRect.left - paddingX / 2,
      top: elementRect.top - containerRect.top - paddingY / 2,
      width: elementRect.width + paddingX,
      height: elementRect.height + paddingY,
    };
  };

  // Update ball position when hovering or selection changes
  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
    const position = calculateBallPosition(targetIndex);
    setBallPosition(position);
  }, [hoveredIndex, selectedIndex]);

  // Set initial position on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const position = calculateBallPosition(0);
      setBallPosition(position);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Recalculate positions on window resize
  useEffect(() => {
    const handleResize = () => {
      const targetIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
      const position = calculateBallPosition(targetIndex);
      setBallPosition(position);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredIndex, selectedIndex]);

  const handleNavClick = (index: number) => {
    setSelectedIndex(index);
  };

  // Consistent spring configuration for bouncy effect
  const springConfig = {
    type: 'spring' as const,
    stiffness: 280,
    damping: 18,
    mass: 0.9,
  };

  return (
    <nav className="flex justify-center items-center pt-6 pb-10 fixed top-0 left-0 right-0 z-50">
      <ul className="relative flex flex-row backdrop-blur-md bg-white/5 shadow-lg gap-10 text-2xl px-16 py-6 font-semibold rounded-full text-white overflow-visible">
        {/* Animated sliding ball with dynamic width */}
        <AnimatePresence>
          {ballPosition && (
            <motion.div
              className="absolute pointer-events-none z-0 rounded-full"
              style={{
                backgroundColor: '#fff',
              }}
              animate={{
                left: ballPosition.left,
                top: ballPosition.top,
                width: ballPosition.width,
                height: ballPosition.height,
                scale: 1,
                opacity: 0.8,
              }}
              initial={{
                left: ballPosition.left,
                top: ballPosition.top,
                width: ballPosition.width,
                height: ballPosition.height,
                scale: 0.8,
                opacity: 0.6,
              }}
              transition={{
                ...springConfig,
                // Individual spring configs for each property with same stiffness
                left: springConfig,
                top: springConfig,
                width: springConfig,
                height: springConfig,
                scale: {
                  ...springConfig,
                  stiffness: 320, // Slightly higher for scale for snappier feel
                },
                opacity: {
                  duration: 0.2,
                  ease: 'easeOut',
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: {
                  ...springConfig,
                  stiffness: 400,
                  damping: 20,
                },
              }}
            />
          )}
        </AnimatePresence>

        {Navlinks.map(({ label, targetId }, index) => (
          <li
            key={targetId}
            ref={(el) => {
              navRefs.current[index] = el;
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleNavClick(index)}
            className={`relative z-10 cursor-pointer transition-all duration-300 text-xl px-2 py-1 ${
              (hoveredIndex !== null ? hoveredIndex : selectedIndex) === index
                ? 'text-white scale-105'
                : 'text-white/80 hover:text-white/90'
            }`}
          >
            <Link
              to={targetId}
              spy={true}
              smooth={true}
              offset={-100} // Offset for fixed navbar
              duration={800}
              className="block cursor-pointer"
              onSetActive={() => setSelectedIndex(index)}
              activeClass="active"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
