import React from 'react';
import { 
  Code2, 
  Heart, 
  ArrowUp, 
  GraduationCap, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#08171E] border-t border-[#A1CCDC]/30 dark:border-[#096B90]/30 py-12 text-slate-600 dark:text-[#A1CCDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#A1CCDC]/30 dark:border-[#096B90]/30">
          
          <div className="flex items-center gap-3">
            <img
              src="/shivam_photo.jpg"
              alt={PROFILE.name}
              className="w-10 h-10 rounded-2xl object-cover border-2 border-[#71B7D5] shadow-md"
            />
            <div>
              <p className="text-sm font-black text-slate-900 dark:text-white">
                {PROFILE.name} • Portfolio
              </p>
              <p className="text-xs text-slate-500 dark:text-[#A1CCDC] flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#71B7D5]" />
                Shivalik College of Engineering, Dehradun
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <a href="#about" className="hover:text-[#71B7D5] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#71B7D5] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#71B7D5] transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-[#71B7D5] transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-[#71B7D5] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#F0F6F9] dark:bg-[#042B44] hover:bg-[#A1CCDC]/20 dark:hover:bg-[#096B90]/40 text-slate-700 dark:text-[#A1CCDC] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 transition-colors shadow-sm"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#A1CCDC]/70">
          <p>© 2026 {PROFILE.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with React 18, Tailwind CSS & Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
