import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  Layers, 
  Zap 
} from 'lucide-react';

export const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08171E]/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#042B44] rounded-3xl shadow-2xl border border-[#A1CCDC]/40 dark:border-[#096B90]/50 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-[#08171E] border-b border-[#096B90]/40 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#096B90]/25 border border-[#71B7D5]/30 flex items-center justify-center text-[#71B7D5]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-[#71B7D5] font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#042B44] hover:bg-[#096B90] text-[#A1CCDC] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Image Preview & Stats Header */}
            <div className="relative rounded-2xl overflow-hidden h-60 bg-slate-100 dark:bg-[#08171E]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08171E]/90 via-transparent to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-white">
                {Object.entries(project.stats).map(([key, val], idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-[#042B44]/80 backdrop-blur-md border border-[#096B90]/40 text-xs font-bold text-[#71B7D5]"
                  >
                    ⚡ {val}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 dark:text-[#A1CCDC]/80 uppercase tracking-wider">
                System Overview & Architecture
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {project.fullDesc}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-400 dark:text-[#A1CCDC]/80 uppercase tracking-wider">
                Key Engineering Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-xs text-slate-700 dark:text-[#A1CCDC]">
                    <CheckCircle2 className="w-4 h-4 text-[#71B7D5] mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 dark:text-[#A1CCDC]/80 uppercase tracking-wider mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] text-slate-700 dark:text-[#A1CCDC] text-xs font-bold border border-[#A1CCDC]/40 dark:border-[#096B90]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] hover:bg-[#A1CCDC]/20 dark:hover:bg-[#096B90]/30 text-slate-900 dark:text-[#A1CCDC] font-extrabold text-xs flex items-center justify-center gap-2 border border-[#A1CCDC]/40 dark:border-[#096B90]/40 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Source Code</span>
              </a>

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 rounded-2xl bg-gradient-to-r from-[#042B44] via-[#096B90] to-[#71B7D5] hover:from-[#096B90] hover:to-[#71B7D5] text-white font-extrabold text-xs shadow-lg shadow-[#096B90]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Production App</span>
              </a>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
