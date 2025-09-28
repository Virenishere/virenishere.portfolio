import { Project } from '@/types/types';

const Projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    tip: 'Full-stack e-commerce solution',
    description: 'A modern e-commerce platform built with Next.js and microservices architecture. Features include user authentication, payment processing, and real-time inventory management.',
    lang: ['TypeScript', 'Next.js', 'Go', 'AWS', 'Microservices'],
    link: 'https://your-project-link.com',
    githubLink: 'https://github.com/yourusername/project',
    image: '/projects/ecommerce.jpg',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'AI Content Generator',
    tip: 'AI-powered content creation tool',
    description: 'An intelligent content generation platform using Gemini API with Redis caching for optimal performance.',
    lang: ['Next.js', 'TypeScript', 'TailwindCSS', 'AWS', 'Microservices', 'Gemini API', 'Redis'],
    link: 'https://your-ai-project.com',
    githubLink: 'https://github.com/yourusername/ai-project',
    image: '/projects/ai-generator.jpg',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Developer Portfolio',
    tip: 'Personal portfolio website',
    description: 'A responsive portfolio website showcasing projects and skills with GitHub API integration.',
    lang: ['Next.js', 'TypeScript', 'TailwindCSS', 'GitHub API', 'Vercel'],
    link: 'https://your-portfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio',
    image: '/projects/portfolio.jpg',
  },
  {
    id: 'project-4',
    title: 'Real-time Chat App',
    tip: 'Discord-like chat application',
    description: 'A real-time messaging application with WebSocket support and modern UI components.',
    lang: ['Next.js', 'WebSockets', 'Shadcn', 'Framer Motion', 'Discord API'],
    link: 'https://your-chat-app.com',
    githubLink: 'https://github.com/yourusername/chat-app',
    image: '/projects/chat-app.jpg',
  },
];

export default Projects;

// Helper functions
export const getFeaturedProjects = () => 
  Projects.filter(project => project.featured);

export const getProjectById = (id: string) => 
  Projects.find(project => project.id === id);
