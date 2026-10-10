import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Search, 
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  Cloud, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allSkills = SKILL_CATEGORIES.flatMap(c => c.skills);

  const filteredSkills = (activeCategory === 'all'
    ? allSkills
    : SKILL_CATEGORIES.find(c => c.id === activeCategory)?.skills || []
  ).filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
        <span className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/10 dark:bg-[#096B90]/20 px-3 py-1 rounded-full uppercase tracking-wider border border-[#096B90]/30 dark:border-[#71B7D5]/30">
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Tools, Languages & Frameworks
        </h2>
        <p className="text-sm text-slate-600 dark:text-[#A1CCDC] font-normal">
          Battle-tested stack across full-stack web development, async microservices, and competitive programming.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === 'all'
                ? 'bg-[#096B90] text-white border-[#71B7D5]/40 shadow-md shadow-[#096B90]/30 scale-105'
                : 'bg-white dark:bg-[#042B44] text-slate-600 dark:text-[#A1CCDC] border-[#A1CCDC]/30 dark:border-[#096B90]/30 hover:bg-[#A1CCDC]/15 dark:hover:bg-[#096B90]/30'
            }`}
          >
            All Skills ({allSkills.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#096B90] text-white border-[#71B7D5]/40 shadow-md shadow-[#096B90]/30 scale-105'
                  : 'bg-white dark:bg-[#042B44] text-slate-600 dark:text-[#A1CCDC] border-[#A1CCDC]/30 dark:border-[#096B90]/30 hover:bg-[#A1CCDC]/15 dark:hover:bg-[#096B90]/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#71B7D5] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill (e.g. React, Docker, DSA)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#A1CCDC]/60 focus:outline-none focus:border-[#71B7D5]"
          />
        </div>

      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.03 }}
            className="p-4 rounded-2xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-sm hover:shadow-lg hover:border-[#71B7D5]/60 transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{skill.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#71B7D5] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-[#A1CCDC]/80 font-medium">
                    {skill.category}
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/15 dark:bg-[#096B90]/25 px-2 py-0.5 rounded-lg border border-[#096B90]/30 dark:border-[#71B7D5]/30">
                {skill.level}%
              </span>
            </div>

            {/* Proficiency Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-[#F0F6F9] dark:bg-[#08171E] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.02 }}
                className="h-full bg-gradient-to-r from-[#096B90] to-[#71B7D5] rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default SkillsSection;
