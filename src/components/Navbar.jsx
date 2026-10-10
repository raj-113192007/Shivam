import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  FileText, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Navbar = ({ 
  darkMode, 
  setDarkMode, 
  onOpenTerminal, 
  onOpenResume 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Terminal', href: '#terminal', isTerminal: true },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#08171E]/85 backdrop-blur-xl border-b border-[#A1CCDC]/30 dark:border-[#096B90]/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Avatar */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/shivam_photo.jpg"
                alt={PROFILE.name}
                className="w-10 h-10 rounded-2xl object-cover border-2 border-[#71B7D5] shadow-md shadow-[#096B90]/30 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#71B7D5] border-2 border-[#042B44] rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {PROFILE.name}
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#096B90]/15 text-[#096B90] dark:text-[#71B7D5] font-mono font-bold border border-[#71B7D5]/30">
                  CSE
                </span>
              </span>
              <span className="text-[10px] font-bold text-slate-600 dark:text-[#A1CCDC] -mt-1 flex items-center gap-1">
                <GraduationCap className="w-3 h-3 text-[#71B7D5]" />
                Shivalik College • Dehradun
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 dark:bg-[#042B44]/70 p-1.5 rounded-2xl border border-[#A1CCDC]/40 dark:border-[#096B90]/40 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.isTerminal ? (e) => { e.preventDefault(); onOpenTerminal(); } : undefined}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-[#A1CCDC] hover:text-[#096B90] dark:hover:text-white hover:bg-[#A1CCDC]/20 dark:hover:bg-[#096B90]/35 transition-all flex items-center gap-1.5"
              >
                {link.isTerminal && <Terminal className="w-3.5 h-3.5 text-[#71B7D5]" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Terminal CTA, Resume Modal, Theme Toggle) */}
          <div className="flex items-center gap-3">
            
            {/* Interactive Terminal Quick Launch */}
            <button
              onClick={onOpenTerminal}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#042B44] text-[#71B7D5] text-xs font-mono font-bold border border-[#096B90]/50 hover:border-[#71B7D5] transition-all hover:scale-105 shadow-sm"
              title="Launch In-Browser Linux Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#A1CCDC]" />
              <span>shivam@cli:~$</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#042B44] via-[#096B90] to-[#71B7D5] hover:from-[#096B90] hover:to-[#71B7D5] text-white text-xs font-extrabold shadow-lg shadow-[#096B90]/30 transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5 text-[#A1CCDC]" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-white dark:bg-[#042B44] text-slate-700 dark:text-[#A1CCDC] hover:bg-slate-100 dark:hover:bg-[#096B90]/40 border border-[#A1CCDC]/30 dark:border-[#096B90]/40 transition-all shadow-sm"
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#71B7D5]" /> : <Moon className="w-4 h-4 text-[#096B90]" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white dark:bg-[#042B44] text-slate-700 dark:text-[#A1CCDC] border border-[#A1CCDC]/30 dark:border-[#096B90]/40"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#08171E] border-b border-[#A1CCDC]/30 dark:border-[#096B90]/30 px-4 py-4 space-y-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (link.isTerminal) onOpenTerminal();
                }}
                className="block p-3 rounded-xl text-sm font-bold text-slate-700 dark:text-[#A1CCDC] hover:bg-[#A1CCDC]/20 dark:hover:bg-[#042B44]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
