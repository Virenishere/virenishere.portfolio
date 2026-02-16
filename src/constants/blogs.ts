import { BlogPost } from '@/types/types';

const BlogPosts: BlogPost[] = [
  {
    id: 'getting-started-nextjs',
    title: 'Getting Started with Next.js 14: A Complete Guide',
    excerpt:
      'Learn how to build modern web applications with Next.js 14, including the new App Router and Server Components.',
    content: `
# Getting Started with Next.js 14

Next.js 14 brings exciting new features and improvements...

## Installation

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Key Features

- App Router
- Server Components
- Improved Performance
- Better Developer Experience

...rest of your blog content here...
    `,
    author: 'Your Name',
    publishedDate: '2024-01-15',
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
    readTime: 8,
    featured: true,
    image: '/blogs/nextjs-guide.jpg',
    slug: 'getting-started-nextjs',
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React Developers',
    excerpt:
      'Discover essential TypeScript patterns and practices that will make your React code more robust and maintainable.',
    content: `
# TypeScript Best Practices for React

TypeScript has become essential for modern React development...

## Type Safety First

Always define proper interfaces for your props and state...

...rest of your blog content...
    `,
    author: 'Your Name',
    publishedDate: '2024-01-10',
    tags: ['TypeScript', 'React', 'Best Practices', 'Development'],
    readTime: 12,
    featured: true,
    image: '/blogs/typescript-react.jpg',
    slug: 'typescript-best-practices',
  },
  {
    id: 'tailwind-tips',
    title: '10 Tailwind CSS Tips for Better UI Development',
    excerpt:
      'Boost your productivity with these advanced Tailwind CSS techniques and utilities.',
    content: `
# 10 Tailwind CSS Tips

Here are some advanced tips to level up your Tailwind CSS skills...

## 1. Custom Utilities

Create your own utility classes...

...rest of your content...
    `,
    author: 'Your Name',
    publishedDate: '2024-01-05',
    tags: ['Tailwind CSS', 'CSS', 'UI/UX', 'Frontend'],
    readTime: 6,
    image: '/blogs/tailwind-tips.jpg',
    slug: 'tailwind-tips',
  },
];

export default BlogPosts;

// Helper functions
export const getFeaturedBlogs = () => BlogPosts.filter((blog) => blog.featured);

export const getBlogBySlug = (slug: string) =>
  BlogPosts.find((blog) => blog.slug === slug);

export const getBlogsByTag = (tag: string) =>
  BlogPosts.filter((blog) => blog.tags.includes(tag));

export const getAllTags = () => {
  const tags = BlogPosts.flatMap((blog) => blog.tags);
  return [...new Set(tags)];
};
