'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const sections = ['home', 'work', 'projects', 'blogs'];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.6, // section mostly visible
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-5">
      {sections.map((id) => {
        const isActive = activeSection === id;

        return (
          <motion.button
            key={id}
            onClick={() =>
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="relative flex items-center justify-center"
            animate={{
              scale: isActive ? 1.6 : 1,
              opacity: isActive ? 1 : 0.4,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* dot */}
            <span className="h-3 w-3 rounded-full bg-white block" />

            {/* active glow */}
            {isActive && (
              <motion.span
                layoutId="activeDot"
                className="absolute h-6 w-6 rounded-full border border-white/40"
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
