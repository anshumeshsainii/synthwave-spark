"use client"

import { ParticleBackground } from '@/components/ui/particles'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { EventsSection } from '@/components/events-section'
import { ProjectsSection } from '@/components/projects-section'
import { Footer } from '@/components/footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="events">
          <EventsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
