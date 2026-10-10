import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  Maximize2 
} from 'lucide-react';
import TiltCard from './kinetic/TiltCard';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Full-Stack Web', 'AI & Real-Time GIS', 'Developer Tools', 'AI & Healthcare', 'Web3 & Security'];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#EAF3F7]/50 dark:bg-[#08171E]/60 border-t border-[#A1CCDC]/30 dark:border-[#096B90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#A1CCDC]/30 dark:border-[#096B90]/30">
          <div>
            <span className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/10 dark:bg-[#096B90]/20 px-3 py-1 rounded-full uppercase tracking-wider border border-[#096B90]/30 dark:border-[#71B7D5]/30">
              Featured Software Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
              Production Engineering & AI Projects
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#A1CCDC] font-normal mt-1">
              Real-world systems engineered for college automation, mountain fleet telemetry, and developer productivity.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#096B90] text-white border-[#71B7D5]/40 shadow-md shadow-[#096B90]/30 scale-105'
                    : 'bg-white dark:bg-[#042B44] text-slate-600 dark:text-[#A1CCDC] border-[#A1CCDC]/40 dark:border-[#096B90]/40 hover:bg-[#A1CCDC]/15 dark:hover:bg-[#096B90]/30'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              className="h-full bg-white dark:bg-[#042B44] rounded-3xl border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-lg hover:shadow-2xl hover:border-[#71B7D5]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview */}
              <div className="relative h-56 overflow-hidden rounded-t-3xl bg-slate-100 dark:bg-[#08171E]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08171E]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-[#08171E]/85 backdrop-blur-md text-[#A1CCDC] text-[10px] font-bold border border-[#096B90]/40">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-[#096B90] text-white text-[10px] font-extrabold shadow-md border border-[#71B7D5]/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#A1CCDC]" /> Featured
                    </span>
                  )}
                </div>

                {/* Bottom Quick Title Overlay */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white z-10">
                  <h3 className="text-base font-bold text-white drop-shadow-md line-clamp-1">
                    {project.title.split(' - ')[0]}
                  </h3>
                  <span className="text-[11px] text-[#A1CCDC] font-medium line-clamp-1">
                    {project.title.split(' - ')[1]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg bg-[#F0F6F9] dark:bg-[#08171E] text-slate-700 dark:text-[#A1CCDC] text-[10px] font-bold border border-[#A1CCDC]/40 dark:border-[#096B90]/40"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-[#F0F6F9] dark:bg-[#08171E] text-slate-500 dark:text-[#A1CCDC]/70 text-[10px] font-bold border border-[#A1CCDC]/30 dark:border-[#096B90]/30">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 dark:border-[#096B90]/30 space-y-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#042B44] via-[#096B90] to-[#71B7D5] hover:from-[#096B90] hover:to-[#71B7D5] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#096B90]/25"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#A1CCDC]" />
                    <span>View Architecture & Specs</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] hover:bg-[#A1CCDC]/20 dark:hover:bg-[#096B90]/30 text-slate-800 dark:text-[#A1CCDC] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#A1CCDC]/40 dark:border-[#096B90]/40 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 rounded-xl bg-[#096B90]/15 dark:bg-[#096B90]/25 hover:bg-[#096B90]/30 dark:hover:bg-[#096B90]/40 text-[#096B90] dark:text-[#71B7D5] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#096B90]/30 dark:border-[#71B7D5]/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
