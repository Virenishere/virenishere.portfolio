'use client';
import Navbar from '@/components/Navbar';
import IconTest from '@/components/IconTest';
import ScrollIndicator from '@/components/ScrollIndicator';

import HomeSection from '@/components/HomeSection';

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen relative scroll-smooth select-none transition-colors duration-300">
      {/* navbar  */}
      <Navbar />

      {/* scrollindicator  */}
      <ScrollIndicator />

      {/* Home Section */}
      <HomeSection />

      {/* Work Section */}
      <section
        id="work"
        className="min-h-screen flex items-center justify-center bg-muted/20"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This is the work section. Click on "Work" in the navbar to scroll
            here smoothly.
          </p>
          <div className="mt-8 p-6 bg-card rounded-lg backdrop-blur-sm border border-border max-w-md mx-auto">
            <h3 className="text-card-foreground font-semibold mb-2">
              React-Scroll Features:
            </h3>
            <ul className="text-muted-foreground text-sm space-y-1">
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
          <h2 className="text-5xl font-bold text-foreground mb-6">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This is the projects section. The navbar will smoothly scroll to
            this section when clicked.
          </p>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        id="blogs"
        className="min-h-screen flex items-center justify-center bg-muted/20"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
