import type { Project } from '@/types/types';
import projectsJson from '@/data/projects.json';

const projectsData = projectsJson as Project[];

export default projectsData;

export const getFeaturedProjects = () =>
  projectsData.filter((project) => project.featured);

export const getProjectById = (id: string) =>
  projectsData.find((project) => project.id === id);
