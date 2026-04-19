'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type SkillCardProps = {
  skill: string;
  logo: React.ReactNode;
  contClass?: string;
  shadow?: string;
};

export const SkillCard = ({
  skill,
  logo,
  contClass,
  shadow = '#8646d7',
}: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.94 }}
      className="relative cursor-pointer"
    >
      <div
        style={{ boxShadow: `5px 5px 0px 1px ${shadow}` }}
        className={cn(
          'flex relative z-[10] justify-center gap-1.5 items-center bg-stone-800/20 px-2 py-1.5 min-w-[90px] md:min-w-[110px] border-[1px] border-gray-700 border-solid rounded-[5px]',
          contClass
        )}
      >
        <div className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 shrink-0 [&_svg]:w-full [&_svg]:h-full">
          {logo}
        </div>
        <p className="font-grotesk text-gray-200 text-[11px] md:text-sm whitespace-nowrap">{skill}</p>
      </div>
    </motion.div>
  );
};
