import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Award, 
  Code2, 
  Cpu, 
  Terminal, 
  Sparkles, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { PROFILE, EDUCATION } from '../data/portfolioData';

export const AboutSection = () => {
  const collegeEdu = EDUCATION[0];

  return (
    <section id="about" className="py-20 bg-[#EAF3F7]/50 dark:bg-[#08171E]/60 border-y border-[#A1CCDC]/30 dark:border-[#096B90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/10 dark:bg-[#096B90]/20 px-3 py-1 rounded-full uppercase tracking-wider border border-[#096B90]/30 dark:border-[#71B7D5]/30">
            About Shivam
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Academic Roots & Engineering Passion
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#A1CCDC] font-normal">
            Bridging theoretical computer science rigor with production full-stack engineering from Dehradun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Shivalik College of Engineering Card */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-xl space-y-5">
              
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#096B90]/15 text-[#71B7D5] flex items-center justify-center border border-[#096B90]/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {collegeEdu.institution}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#A1CCDC] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#71B7D5]" />
                      <span>{collegeEdu.location} (Affiliated to UTU)</span>
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#096B90]/15 dark:bg-[#096B90]/25 text-[#096B90] dark:text-[#71B7D5] text-xs font-extrabold border border-[#096B90]/30 dark:border-[#71B7D5]/30">
                  {collegeEdu.score}
                </span>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 dark:text-[#A1CCDC]/80 uppercase tracking-wider mb-1">
                  Program & Period
                </p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {collegeEdu.degree} • {collegeEdu.period}
                </p>
              </div>

              {/* Core Coursework Badges */}
              <div>
                <p className="text-xs font-bold text-slate-400 dark:text-[#A1CCDC]/80 uppercase tracking-wider mb-2.5">
                  Core Computer Science Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {collegeEdu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] text-slate-700 dark:text-[#A1CCDC] text-xs font-semibold border border-[#A1CCDC]/40 dark:border-[#096B90]/40 hover:border-[#71B7D5]/50 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Campus Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#096B90]/30">
                <p className="text-xs font-bold text-slate-400 dark:text-[#A1CCDC]/80 uppercase tracking-wider">
                  Campus Leadership & Achievements
                </p>
                {collegeEdu.highlights.map((item, idx) => (
                  <p key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#71B7D5] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>

            </div>

          </div>

          {/* Right: Technical Philosophy & Engineering Ethos */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-xl space-y-5">
              
              <div className="flex items-center gap-3.5">
                <img
                  src="/shivam_photo.jpg"
                  alt={PROFILE.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#71B7D5] shadow-lg flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Shivam <span className="text-xs px-2 py-0.5 rounded-full bg-[#096B90]/20 text-[#71B7D5] font-mono">B.Tech CSE</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#A1CCDC]">
                    Engineering Philosophy & Campus Leadership
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                "As a Computer Science student at Shivalik College, I believe great software isn't just about syntax—it's about building empathetic, fault-tolerant tools that solve actual community and campus problems. Whether it's replacing chaotic paper attendance with rolling QR cryptography or building high-concurrency bus tracking across Uttarakhand's terrain, I focus on performance, clean architecture, and measurable impact."
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-center hover:border-[#71B7D5]/50 transition-all">
                  <Cpu className="w-5 h-5 text-[#71B7D5] mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Systems Thinking</p>
                  <p className="text-[10px] text-slate-500 dark:text-[#A1CCDC] mt-0.5">Scalable Microservices</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-center hover:border-[#71B7D5]/50 transition-all">
                  <Layers className="w-5 h-5 text-[#71B7D5] mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Clean Code</p>
                  <p className="text-[10px] text-slate-500 dark:text-[#A1CCDC] mt-0.5">Maintainable & Modular</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-center hover:border-[#71B7D5]/50 transition-all">
                  <Sparkles className="w-5 h-5 text-[#A1CCDC] mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-slate-900 dark:text-white">DSA Rigor</p>
                  <p className="text-[10px] text-slate-500 dark:text-[#A1CCDC] mt-0.5">450+ LeetCode Solved</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
