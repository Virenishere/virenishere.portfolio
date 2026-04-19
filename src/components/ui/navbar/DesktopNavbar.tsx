'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { cn } from '@/lib/utils';

const NavItems = [
  { path: '/', name: '/', to: 'home' },
  { path: '/skill', name: 'skills', to: 'skill' },
  { path: '/work', name: 'work', to: 'work' },
  { path: '/projects', name: 'projects', to: 'projects' },
];

const DesktopNavbar = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>('home');

  return (
    <div className="md:flex justify-center items-center hidden">
      <div className="rounded-full mb-12 z-[10000000] backdrop-blur-md px-16 py-6 mt-3">
        <nav className="flex gap-[100px] relative justify-start w-full z-[100] rounded-lg">
          {NavItems.map((item) => (
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to={item.to}
              key={item.to}
              className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent cursor-pointer text-zinc-400"
              onMouseOver={() => setHoveredPath(item.to)}
              onMouseLeave={() => setHoveredPath('home')}
            >
              <span
                className={cn(
                  'font-jetbrain text-xl',
                  item.to === hoveredPath
                    ? 'text-white'
                    : 'text-foreground'
                )}
              >
                {item.name}
              </span>
              {item.to === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-[#CBA6F7]/70 rounded-full -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{ width: '100%' }}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNavbar;
