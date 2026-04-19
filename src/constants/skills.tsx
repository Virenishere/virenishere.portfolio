import React from 'react';
import { Javascript } from '@/assets/logos/javascript';
import { Typescript } from '@/assets/logos/typescript';
import { Python } from '@/assets/logos/python';
import { React as ReactIcon } from '@/assets/logos/react';
import { Next } from '@/assets/logos/next';
import { Nodejs } from '@/assets/logos/nodejs';
import { Express } from '@/assets/logos/express';
import { Ai } from '@/assets/logos/ai';
import { Aws } from '@/assets/logos/aws';
import { Cloudflare } from '@/assets/logos/cloudfare';
import { Vercel } from '@/assets/logos/vercel';
import { Docker } from '@/assets/logos/docker';
import { Mongodb } from '@/assets/logos/mongodb';
import { Postgressql } from '@/assets/logos/postgressql';
import { Redis } from '@/assets/logos/redis';
import { Bash } from '@/assets/logos/bash';
import { Git } from '@/assets/logos/git';
import { Convex } from '@/assets/logos/convex';
import { Sql } from '@/assets/logos/sql';
import { CiCd } from '@/assets/logos/cicd';

export type Skill = {
  name: string;
  logo: React.ReactNode;
};

export type SkillRow = {
  shadow: string;
  minWidth: string;
  skills: Skill[];
};

// 20 skills arranged as a true inverted pyramid: 6 → 5 → 4 → 3 → 2
// + a single "& More" pill as the bottom tip.
export const skillRows: SkillRow[] = [
  {
    shadow: '#CAA6F7',
    minWidth: 'min-w-[90px] md:min-w-[115px]',
    skills: [
      { name: 'JavaScript', logo: <Javascript /> },
      { name: 'TypeScript', logo: <Typescript /> },
      { name: 'Python', logo: <Python /> },
      { name: 'SQL', logo: <Sql /> },
      { name: 'React', logo: <ReactIcon /> },
      { name: 'NextJs', logo: <Next /> },
    ],
  },
  {
    shadow: '#34c07c',
    minWidth: 'min-w-[100px] md:min-w-[130px]',
    skills: [
      { name: 'Node.js', logo: <Nodejs /> },
      { name: 'Express', logo: <Express /> },
      { name: 'AWS', logo: <Aws /> },
      { name: 'Cloudflare', logo: <Cloudflare /> },
      { name: 'Vercel', logo: <Vercel /> },
    ],
  },
  {
    shadow: '#2da4b9',
    minWidth: 'min-w-[115px] md:min-w-[150px]',
    skills: [
      { name: 'Docker', logo: <Docker /> },
      { name: 'MongoDB', logo: <Mongodb /> },
      { name: 'Postgres', logo: <Postgressql /> },
      { name: 'Redis', logo: <Redis /> },
    ],
  },
  {
    shadow: '#dcab70',
    minWidth: 'min-w-[130px] md:min-w-[170px]',
    skills: [
      { name: 'Convex', logo: <Convex /> },
      { name: 'AI-SDK', logo: <Ai /> },
      { name: 'CI/CD', logo: <CiCd /> },
    ],
  },
  {
    shadow: '#dc8070',
    minWidth: 'min-w-[150px] md:min-w-[200px]',
    skills: [
      { name: 'Bash', logo: <Bash /> },
      { name: 'Git', logo: <Git /> },
    ],
  },
];
