import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import InteractiveTerminal from './components/InteractiveTerminal';
import AchievementsSection from './components/AchievementsSection';
import ResumeModal from './components/ResumeModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MouseSpotlight from './components/kinetic/MouseSpotlight';

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('shivam_dark_mode');
      return saved !== null ? JSON.parse(saved) : false; // Default to Light Theme
    } catch {
      return false;
    }
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('shivam_dark_mode', JSON.stringify(darkMode));
    } catch (e) {
      console.error(e);
    }

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F0F6F9] text-[#08171E] dark:bg-[#08171E] dark:text-slate-100 relative selection:bg-[#096B90] selection:text-white transition-colors duration-300">
      
      {/* Ambient Mouse Tracking Aura */}
      <MouseSpotlight />

      {/* Navbar with Dark/Light Mode & Modal Triggers */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Hero Section with 3D Code Card & Stats */}
      <HeroSection
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* About Section & Shivalik College Spotlight */}
      <AboutSection />

      {/* Interactive Skills Matrix with Search & Filter */}
      <SkillsSection />

      {/* Featured Projects Showcase with 3D Tilt Cards */}
      <ProjectsSection
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Honors, SIH Finalist, Certifications & LeetCode */}
      <AchievementsSection />

      {/* Direct Contact & Collaboration Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* MODALS */}
      {/* 1. In-Browser Linux Terminal CLI Modal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* 2. Project Architecture & Specs Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 3. Official Academic Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
