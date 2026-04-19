'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Clipboard, Github, Mail, Twitter, User } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import AboutMe from '@/constants/aboutme';

const gmailCompose =
  'https://mail.google.com/mail/?view=cm&fs=1&to=virender288@gmail.com';
const icons = [
  {
    name: 'github',
    icon: <Github className="w-6 h-6" />,
    handler: () => {
      window.open(
        'https://github.com/virenishere',
        '_blank',
        'noopener,noreferrer'
      );
    },
  },
  {
    name: 'email',
    icon: <Mail className="w-6 h-6" />,
    handler: () => {
      window.open(gmailCompose, '_blank', 'noopener,noreferrer');
    },
  },
  {
    name: 'twitter',
    icon: <Twitter className="w-6 h-6" />,
    handler: () => {
      window.open('https://x.com/virentwt', '_blank', 'noopener,noreferrer');
    },
  },
  {
    name: "Yup, that's me",
    icon: <User className="w-6 h-6" />,
    handler: () => {
      window.open('#');
    },
  },
];

export default function ReachMe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  return (
    <div>
      <h1 className="text-sky-200/95 text-3xl md:text-8xl font-bold font-grotesk md:before:content-['///'] before:h-[300px] before:text-[175px] before:text-gray-500/50 before:font-[700] before:-z-10 before:select-none before:translate-x-[-100%] before:translate-y-[-20%] webkit_text_stroke before:opacity-[0.25] before:tracking-[-0.1em] before:absolute text-[65px] md:text-[96px] relative">
        {AboutMe.FirstName}
      </h1>
      <div className="flex flex-col gap-4 mt-5 md:px-3">
        <h3 className="font-jetbrain text-xl md:text-2xl">{AboutMe.Role}.</h3>
        <h3 className="font-jetbrain text-xl md:text-2xl">
          {AboutMe.ShortIntro}
        </h3>
      </div>
      <div className="flex gap-5 md:gap-8 pl-3 mt-6 md:mt-8 mb-6 md:mb-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  zIndex: 1000,
                  whiteSpace: 'nowrap',
                }}
                className="flex justify-center items-center"
              >
                <div className="border-solid border-2 shadow-2xl border-red-300 flex justify-center items-center px-4 absolute top-[-60px] z-[10] bg-[#ffbe6f] rounded-xl ml-[1px]">
                  <span className="text-stone-800 font-grotesk text-base">
                    {icon.name}
                  </span>
                  <div className="w-0 h-0 absolute top-[30px] left-1/2 transform -translate-x-1/2 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#ffbe6f] border-r-[10px] border-r-transparent"></div>
                </div>
              </motion.div>
            )}
            <motion.div
              className="cursor-pointer z-[9] text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => icon?.handler()}
            >
              {icon.icon}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="w-full border-solid border-[1px] border-gray-200/20 bg-stone-800/20 max-w-full relative flex items-center justify-start h-[70px] rounded-2xl gap-8 mt-4 md:mx-3">
        <div className="w-[10%] h-full bg-cyan-500 rounded-tl-2xl rounded-bl-2xl" />
        <h4 className="text-xl md:text-2xl text-cyan-300 font-jetbrain">
          npx virenishere
        </h4>
        <Clipboard
          className="cursor-pointer text-cyan-300 p-2 w-fit h-fit absolute right-2 md:right-4 rounded-xl border-solid border-[1px] border-gray-200/20 hover:bg-cyan-400/10 transition"
          size={20}
          onClick={() => {
            navigator.clipboard.writeText('npx virenishere');
            toast.success('Copied to clipboard', {
              description: 'Make sure you run this in your terminal <3',
            });
          }}
        />
      </div>
    </div>
  );
}
