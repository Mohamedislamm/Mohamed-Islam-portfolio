/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowcaseLibrary } from './components/ShowcaseLibrary';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [recruiterMode, setRecruiterMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-white selection:text-zinc-950">
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 1. Sticky Navigation Bar */}
      <Navbar
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {/* 2. Friendly Dark Hero Section */}
        <HeroSection
          recruiterMode={recruiterMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 3. Showcase Library & Interactive Laboratory */}
        <ShowcaseLibrary
          onSelectProject={(proj) => setSelectedProject(proj)}
          recruiterMode={recruiterMode}
        />

        {/* 4. Career Experience & Education Timeline */}
        <ExperienceTimeline />

        {/* 5. Skills & Stack Matrix */}
        <SkillsSection />

        {/* 6. About Mohamed & Operating Principles */}
        <AboutSection />

        {/* 7. Contact & Collaboration Hub */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Project Deep Dive Inspector */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full ATS-Ready Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

