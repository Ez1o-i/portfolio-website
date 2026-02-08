import React from "react";
import { StarryBackground } from "./components/starry-background";
import { ParallaxSection, ScrollGlow } from "./components/parallax-section";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020203] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      <StarryBackground />
      <Nav />

      <main className="relative z-10">
        {/* Hero Section */}
        <ParallaxSection id="home" speed={0.3} className="relative">
          <ScrollGlow
            className="top-0 left-1/4 w-[600px] h-[600px]"
            color="rgba(100, 100, 255, 0.2)"
          />
          <Hero />
        </ParallaxSection>

        {/* Skills Section */}
        <ParallaxSection id="skills" speed={0.4} className="relative py-24">
          <ScrollGlow
            className="top-1/2 right-0 w-[500px] h-[500px]"
            color="rgba(150, 100, 200, 0.15)"
          />
          <Skills />
        </ParallaxSection>

        {/* Projects Section */}
        <ParallaxSection id="projects" speed={0.35} className="relative py-24">
          <ScrollGlow
            className="top-1/3 left-0 w-[550px] h-[550px]"
            color="rgba(100, 200, 255, 0.15)"
          />
          <Projects />
        </ParallaxSection>

        {/* Contact Section */}
        <ParallaxSection id="contact" speed={0.25} className="relative py-24">
          <ScrollGlow
            className="bottom-0 right-1/3 w-[500px] h-[500px]"
            color="rgba(200, 100, 255, 0.15)"
          />
          <Contact />
        </ParallaxSection>
      </main>

      <footer className="py-8 text-center text-zinc-500 text-sm relative z-10 backdrop-blur-sm bg-black/20">
        <p>© {new Date().getFullYear()} Software Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
