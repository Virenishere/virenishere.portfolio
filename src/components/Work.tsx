'use client';

import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Tip } from './ui/tip/Tip';
import { WorkCard } from './WorkCard';
import experiences from '@/constants/experience';

export default function Work() {
  return (
    <SectionWrapper>
      <div
        className="mt-8 flex justify-center items-center flex-col md:py-8"
        id="work"
      >
        <div className="text-sky-200/95 text-3xl md:text-8xl font-bold font-grotesk md:before:content-['<>'] before:h-[300px] before:text-[250px] before:text-gray-500/50 before:font-[700] before:-z-10 before:select-none before:translate-x-[-280%] before:translate-y-[-10%] webkit_text_stroke before:opacity-[0.25] before:tracking-[-0.1em] before:absolute text-[65px] md:text-[96px] relative" />
        <Tip tip="there's more trust me" className="self-center">
          <h1 className="font-jetbrain text-center text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-14 md:mb-16">
            <span className="text-green-300">code</span>
            <span className="text-foreground">:</span>
            <span className="text-cyan-300">work</span>
          </h1>
        </Tip>
        <div className="w-full flex justify-center items-center flex-col">
          {experiences.map((exp, index) => (
            <WorkCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
