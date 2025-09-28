export interface INavLink {
  label: string;
  targetId: string;
  path?: string;
}

const Navlinks: INavLink[] = [
  {
    label: 'Home',
    targetId: 'home',
    path: '/',
  },
  {
    label: 'Work',
    targetId: 'work',
    path: '/work',
  },
  {
    label: 'Projects',
    targetId: 'projects',
    path: '/projects',
  },
  {
    label: 'Blogs',
    targetId: 'blogs',
    path: '/blogs',
  },
];

export default Navlinks;
