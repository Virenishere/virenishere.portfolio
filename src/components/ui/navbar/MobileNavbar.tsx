'use client';
import { useState } from 'react';
import { Briefcase, Globe, House, Rss, Wrench } from 'lucide-react';
import Navlinks from '@/constants/navlinks';
// import Link from 'next/link';
import { Link } from 'react-scroll';

export default function MobileNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [House, Wrench, Briefcase, Globe, Rss];

  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between gap-6 rounded-t-xl border-t border-white bg-black p-4">
      {Navlinks.map(({ label, targetId }, index) => {
        const Icon = icons[index];
        return (
          <Link
            key={targetId}
            to={targetId}
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            onSetActive={() => setActiveIndex(index)}
            className="text-white flex flex-col items-center gap-1 cursor-pointer"
          >
            <Icon
              size={22}
              className={`transition-all duration-300 ${activeIndex === index ? 'text-white scale-110' : 'text-white/60'}`}
            />
            <span
              className={`text-[10px] transition-all ${activeIndex === index ? 'text-white' : 'text-white/60'}`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
