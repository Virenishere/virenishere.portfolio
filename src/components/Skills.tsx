'use client';

import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Tip } from './ui/tip/Tip';
import { SkillCard } from './SkillCard';
import { skillRows } from '@/constants/skills';

export default function Skills() {
  return (
    <SectionWrapper>
      <div
        className="mt-8 flex justify-center items-center flex-col md:py-8"
        id="skill"
      >
        <Tip tip="there's more trust me" className="self-center">
          <h1 className="font-jetbrain text-center text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-14 md:mb-16">
            <span className="text-green-300">code</span>
            <span className="text-foreground">:</span>
            <span className="text-cyan-300">skills</span>
          </h1>
        </Tip>

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 justify-center items-center w-full">
          {skillRows.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-wrap sm:flex-nowrap gap-2.5 sm:gap-3 md:gap-6 justify-center items-center w-full max-w-full"
            >
              {row.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  logo={skill.logo}
                  contClass={row.minWidth}
                  shadow={row.shadow}
                />
              ))}
            </div>
          ))}
          <div className="flex justify-center items-center">
            <SkillCard
              skill="More"
              logo={
                <span className="font-jetbrain text-lg text-gray-200">
                  &amp;
                </span>
              }
              contClass="min-w-[150px] md:min-w-[180px]"
              shadow="#dc8070"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
