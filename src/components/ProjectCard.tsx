'use client';

import { Project } from '@/types/types';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Tip } from './ui/tip/Tip';

export const ProjectCard = (project: Project) => {
  return (
    <motion.div
      whileHover={{ translateY: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className="cursor-pointer flex flex-col gap-3 px-4 py-4 bg-stone-800/20 border-cyan-300/30 border-solid border-[1px] rounded-xl backdrop-blur-sm hover:border-cyan-300/60 transition-colors min-h-[180px]"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-cyan-500/30 border border-cyan-400/50" />
          <h4 className="font-jetbrain text-xs md:text-sm text-white">
            virenishere
          </h4>
        </div>
        <div className="flex justify-center items-center gap-3">
          {project?.link && (
            <Link href={project.link} target="_blank" aria-label="Live link">
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </Link>
          )}
          {project?.featured && (
            <Tip tip="it is live">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-green-400/40 bg-green-500/10 text-green-300 text-[10px] md:text-[11px] font-jetbrain tracking-wide">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                live
              </span>
            </Tip>
          )}
          {project?.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              aria-label="GitHub repo"
            >
              <Github className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </Link>
          )}
          {project?.githubLinks?.map((repo) => (
            <Tip key={repo.url} tip={repo.label}>
              <Link
                href={repo.url}
                target="_blank"
                aria-label={`GitHub repo ${repo.label}`}
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-[10px] md:text-[11px] font-jetbrain">
                  {repo.label}
                </span>
              </Link>
            </Tip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h1 className="text-base md:text-lg font-grotesk leading-tight">
          <Tip tip={project?.tip || ''}>{project.title}</Tip>
        </h1>
        <p className="text-xs md:text-sm font-grotesk text-gray-300 leading-snug line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="flex justify-start items-start gap-2 mt-auto">
        <div className="pt-1.5">
          <div className="h-1.5 w-1.5 bg-cyan-300 rounded-full" />
        </div>
        <div className="flex flex-wrap gap-x-1.5">
          {project.lang.map((lang, index) => (
            <span
              key={index}
              className="text-[11px] md:text-xs font-grotesk text-green-300"
            >
              {lang}
              {index === project.lang.length - 1 ? '' : ','}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
