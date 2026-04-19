'use client';

import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Tip } from './ui/tip/Tip';
import projectsData from '@/constants/project';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  return (
    <SectionWrapper>
      <div
        className="flex justify-center items-center flex-col"
        id="projects"
      >
        <Tip tip="Some of the works I did" className="self-center">
          <h1 className="font-jetbrain text-center text-5xl mb-16">
            <span className="text-green-300">code</span>
            <span className="text-foreground">:</span>
            <span className="text-cyan-300">projects</span>
          </h1>
        </Tip>
        <div className="flex justify-center items-center w-full">
          <div className="grid md:grid-cols-2 gap-4 w-full">
            {projectsData.map((proj, index) => (
              <ProjectCard key={index} {...proj} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
