'use client';

import site from '@/data/site.json';

export const ResumeButton = () => {
  return (
    <a
      href={site.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume in a new tab"
      className="w-fit p-2 sm:p-4 group rounded-full flex justify-center items-center cursor-pointer fixed md:absolute md:top-6 md:right-12 top-4 right-3 z-[100]"
    >
      <p className="relative text-sm md:text-xl transition-all">
        <span className="bg-white text-black rounded-full px-2.5 py-2 sm:p-3 font-grotesk font-bold text-xs sm:text-base">
          CV
        </span>
      </p>
    </a>
  );
};
