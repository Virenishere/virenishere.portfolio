import { LucideIcon } from 'lucide-react';

//--------------------------

export interface Project {
  id: string;
  title: string;
  tip: string;
  description: string;
  lang: string[];
  link: string;
  githubLink?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon: LucideIcon;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  tags: string[];
  readTime: number; // in minutes
  featured?: boolean;
  image?: string;
  slug: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface FooterData {
  personalInfo: {
    name: string;
    email: string;
    location: string;
    bio: string;
  };
  socialLinks: SocialLink[];
  quickLinks: {
    name: string;
    href: string;
  }[];
  copyright: string;
}
