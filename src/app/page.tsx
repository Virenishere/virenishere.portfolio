'use client';

import Animation from '@/components/Animation';
import BlogSection from '@/components/BlogSection';

import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="bg-[#1F1F2E] min-h-screen relative scroll-smooth select-none">
      <Navbar />
      {/* <HomeSection />
      <Skills />
      <Project />
      <Footer />
      <BlogSection /> */}
      <Animation />
    </main>
  );
}
