import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  Cloud, 
  Code, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles 
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const iconMap = {
  emerald: Trophy,
  indigo: Award,
  amber: Cloud,
  cyan: Code
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
        <span className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/10 dark:bg-[#096B90]/20 px-3 py-1 rounded-full uppercase tracking-wider border border-[#096B90]/30 dark:border-[#71B7D5]/30">
          Honors & Certifications
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Milestones & Competitive Podiums
        </h2>
        <p className="text-sm text-slate-600 dark:text-[#A1CCDC] font-normal">
          Recognition from national hackathons, global cloud platforms, and algorithmic challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item) => {
          const Icon = iconMap[item.color] || Trophy;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-md hover:shadow-xl hover:border-[#71B7D5]/60 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] flex items-center justify-center text-[#71B7D5] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#71B7D5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-[#A1CCDC]/80">
                        {item.date} • {item.organization}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#096B90]/15 dark:bg-[#096B90]/25 text-[#096B90] dark:text-[#71B7D5] text-xs font-extrabold whitespace-nowrap border border-[#096B90]/30 dark:border-[#71B7D5]/30">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-[#096B90]/30 flex items-center justify-between text-xs text-slate-400 dark:text-[#A1CCDC]/70 font-semibold">
                <span className="flex items-center gap-1 text-[#71B7D5]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <span className="text-slate-500 dark:text-[#A1CCDC]/70">Shivalik College Delegation</span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default AchievementsSection;
