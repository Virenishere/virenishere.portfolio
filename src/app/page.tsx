'use client';
import IconTest from '@/components/IconTest';
import ScrollIndicator from '@/components/ui/scroll/ScrollIndicator';
import DesktopNavbar from '@/components/ui/navbar/DesktopNavbar';
import MobileNavbar from '@/components/ui/navbar/MobileNavbar';
import Introduction from '@/components/Introduction';

export default function Home() {
  return (
    <main className="bg-[#000] min-h-screen relative scroll-smooth select-none">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <ScrollIndicator />

      {/* Home Section */}
      {/* <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        

        <p className='font-jetbrains text-white'>fullstack engineer</p>
      </section> */}
      <Introduction />

      {/* Work Section */}
      <section
        id="work"
        className="min-h-screen flex items-center justify-center bg-white/5"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            This is the work section. Click on "Work" in the navbar to scroll
            here smoothly.
          </p>
          <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 max-w-md mx-auto">
            <h3 className="text-white font-semibold mb-2">
              React-Scroll Features:
            </h3>
            <ul className="text-white/70 text-sm space-y-1">
              <li>✓ Smooth scrolling animation</li>
              <li>✓ Active section highlighting</li>
              <li>✓ Offset for fixed navbar</li>
              <li>✓ Customizable duration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">My Projects</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            This is the projects section. The navbar will smoothly scroll to
            this section when clicked.
          </p>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        id="blogs"
        className="min-h-screen flex items-center justify-center bg-white/5"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Blog Posts</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            This is the blogs section. React-scroll will handle the smooth
            navigation here.
          </p>
        </div>
      </section>

      {/* Icon Test Section - You can remove this later */}
      <section className="py-20">
        <IconTest />
      </section>
    </main>
  );
}
