'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { House, User, Briefcase, Globe } from 'lucide-react';

const icons = [
  { icon: <House className="w-6 h-6" />, to: 'home' },
  { icon: <User className="w-6 h-6" />, to: 'skill' },
  { icon: <Briefcase className="w-6 h-6" />, to: 'work' },
  { icon: <Globe className="w-6 h-6" />, to: 'projects' },
];

export default function MobileNavbar() {
  const [selected, setSelected] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos > prevScrollPos;
      setScrolled(!isScrolledDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {scrolled && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0, transition: { duration: 0.5 } }}
          className="fixed bottom-0 z-[100000000000] flex flex-col md:hidden justify-evenly items-center py-4 bg-stone-800 rounded-tr-2xl rounded-tl-2xl h-fit w-full"
        >
          <div className="h-full flex justify-evenly items-center w-full">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`flex cursor-pointer justify-center items-center p-2 rounded-full ${selected === icon.to ? 'bg-stone-600' : ''}`}
              >
                <Link
                  to={icon.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setSelected(selected === icon.to ? 'home' : icon.to);
                  }}
                  className="text-white"
                >
                  {icon.icon}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
