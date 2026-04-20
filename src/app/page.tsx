'use client';

import DesktopNavbar from '@/components/ui/navbar/DesktopNavbar';
import MobileNavbar from '@/components/ui/navbar/MobileNavbar';
import Introduction from '@/components/Introduction';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import { Footer } from '@/components/Footer';
import { ResumeButton } from '@/components/ResumeButton';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <main className="min-h-screen relative scroll-smooth select-none bg-[#000] overflow-x-hidden">
      <ScrollProgress />
      <DesktopNavbar />
      <ResumeButton />
      <Introduction />
      <Stats />
      <Skills />
      <Work />
      <Projects />
      <Footer />
      <MobileNavbar />
    </main>
  );
}
