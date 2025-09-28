import { FooterData } from '@/types/types';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const FooterData: FooterData = {
  personalInfo: {
    name: 'Your Name',
    email: 'your.email@example.com',
    location: 'Your City, Country',
    bio: 'Full-stack developer passionate about creating amazing web experiences with modern technologies.'
  },
  socialLinks: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin
    },
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: Twitter
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: Mail
    }
  ],
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ],
  copyright: `© ${new Date().getFullYear()} Your Name. All rights reserved.`
};

export default FooterData;