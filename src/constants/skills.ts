import { Skill } from '@/types/types';
import {
  Code2,
  Database,
  Server,
  Cloud,
  GitBranch,
  Palette,
  Zap,
  FileCode,
  Layers,
  Container,
  Cpu,
  Globe,
  Smartphone,
  Terminal,
  Settings,
} from 'lucide-react';

const Skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'advanced',
    icon: Code2,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    icon: Zap,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    icon: FileCode,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'expert',
    icon: Palette,
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    level: 'intermediate',
    icon: Layers,
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    icon: Server,
  },
  {
    id: 'go',
    name: 'Go',
    category: 'backend',
    level: 'intermediate',
    icon: Cpu,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'intermediate',
    icon: Terminal,
  },

  // Database
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'intermediate',
    icon: Database,
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'intermediate',
    icon: Database,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'intermediate',
    icon: Database,
  },

  // Cloud & Tools
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    level: 'intermediate',
    icon: Cloud,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    level: 'intermediate',
    icon: Container,
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 'advanced',
    icon: GitBranch,
  },
];

export default Skills;

// Helper functions for easy filtering
export const getSkillsByCategory = (category: Skill['category']) =>
  Skills.filter((skill) => skill.category === category);

export const getFeaturedSkills = () =>
  Skills.filter(
    (skill) => skill.level === 'expert' || skill.level === 'advanced'
  );
