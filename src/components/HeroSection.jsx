import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  CheckCircle2, 
  Cpu, 
  Layers 
} from 'lucide-react';
import KineticText from './kinetic/KineticText';
import LiveCounter from './kinetic/LiveCounter';
import TiltCard from './kinetic/TiltCard';
import { PROFILE, STATS } from '../data/portfolioData';

export const HeroSection = ({ onOpenTerminal, onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#71B7D5]/20 via-[#096B90]/25 to-[#042B44]/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Avatar & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Shivam Profile Avatar Badge & Availability */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#096B90] via-[#71B7D5] to-[#A1CCDC] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src="/shivam_photo.jpg"
                  alt={PROFILE.name}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#71B7D5] shadow-xl"
                />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71B7D5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#71B7D5] border-2 border-[#042B44]"></span>
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-1.5"
              >
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#042B44]/90 border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-sm backdrop-blur-md">
                  <span className="text-xs font-bold text-slate-800 dark:text-[#A1CCDC]">
                    Open for SDE Internships & 2026/2027 Roles
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#096B90]/15 dark:bg-[#096B90]/25 text-[#096B90] dark:text-[#71B7D5] border border-[#096B90]/30 dark:border-[#71B7D5]/30">
                    Shivalik College, Dehradun
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Kinetic Typography Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                <span className="block text-slate-900 dark:text-white">
                  Hey, I'm <span className="gradient-text-cyan">{PROFILE.name}</span> 👋
                </span>
                <KineticText 
                  text="Building Scalable Web Apps & AI Systems." 
                  className="block text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-700 dark:text-[#A1CCDC] mt-2" 
                />
              </h1>
            </div>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Computer Science & Engineering student at <strong className="text-slate-900 dark:text-white font-bold">Shivalik College of Engineering, Dehradun</strong>. Focused on modern full-stack architectures (React, Next.js, Node.js, Python), distributed cloud backend design, and high-speed problem solving.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#042B44] via-[#096B90] to-[#71B7D5] hover:from-[#096B90] hover:to-[#71B7D5] text-white font-extrabold text-sm shadow-xl shadow-[#096B90]/30 flex items-center gap-2.5 transition-all hover:scale-105"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3.5 rounded-2xl bg-[#042B44] dark:bg-[#042B44] hover:bg-[#096B90]/40 text-[#71B7D5] font-mono font-bold text-xs border border-[#096B90]/60 hover:border-[#71B7D5] shadow-md flex items-center gap-2 transition-all hover:scale-105"
              >
                <Terminal className="w-4 h-4 text-[#A1CCDC]" />
                <span>Launch CLI Terminal</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-2xl bg-white dark:bg-[#042B44] hover:bg-slate-50 dark:hover:bg-[#096B90]/30 text-slate-800 dark:text-[#A1CCDC] font-bold text-xs border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-sm flex items-center gap-2 transition-all hover:scale-105"
              >
                <FileText className="w-4 h-4 text-[#71B7D5]" />
                <span>Resume</span>
              </button>
            </motion.div>

            {/* Social Coordinates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-500 dark:text-[#A1CCDC]"
            >
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#71B7D5]" />
                Dehradun, Uttarakhand
              </span>
              <span>•</span>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-[#71B7D5] transition-colors flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <span>•</span>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#71B7D5] transition-colors flex items-center gap-1">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>

          </div>

          {/* Right Column: 3D Interactive Developer Code Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <TiltCard className="w-full max-w-md bg-[#042B44] rounded-3xl border border-[#096B90]/60 shadow-2xl p-6 text-white font-mono text-xs overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#096B90]/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#08171E] border border-[#096B90]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#096B90]" />
                  <div className="w-3 h-3 rounded-full bg-[#71B7D5]" />
                </div>
                <span className="text-[11px] text-[#A1CCDC] font-bold">
                  shivam_profile.ts
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#096B90]/25 text-[#71B7D5] border border-[#71B7D5]/30">
                  TypeScript
                </span>
              </div>

              {/* Code Snippet */}
              <div className="py-4 space-y-2 text-[11px] sm:text-xs leading-relaxed">
                <div>
                  <span className="text-[#71B7D5] font-bold">const</span>{' '}
                  <span className="text-[#A1CCDC] font-bold">developer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">name:</span>{' '}
                  <span className="text-[#A1CCDC]">'Shivam'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">college:</span>{' '}
                  <span className="text-[#A1CCDC]">'Shivalik College of Engineering'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">location:</span>{' '}
                  <span className="text-[#A1CCDC]">'Dehradun, Uttarakhand'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">degree:</span>{' '}
                  <span className="text-[#A1CCDC]">'B.Tech in Computer Science'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">cgpa:</span>{' '}
                  <span className="text-[#71B7D5] font-bold">8.8</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">leetCodeSolved:</span>{' '}
                  <span className="text-[#71B7D5] font-bold">450</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">coreStack:</span> [
                  <span className="text-[#A1CCDC]">'React'</span>,{' '}
                  <span className="text-[#A1CCDC]">'Node.js'</span>,{' '}
                  <span className="text-[#A1CCDC]">'Python'</span>,{' '}
                  <span className="text-[#A1CCDC]">'C++'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">status:</span>{' '}
                  <span className="text-[#71B7D5] font-semibold">'Ready for SDE Roles'</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-3 border-t border-[#096B90]/40 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1 text-[#71B7D5]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Clean Architecture
                </span>
                <span className="text-[#A1CCDC] font-mono">UTU Accredited</span>
              </div>

            </TiltCard>

          </div>

        </div>

        {/* Live Counters Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-[#A1CCDC]/30 dark:border-[#096B90]/30">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#042B44]/70 border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-sm text-center hover:border-[#71B7D5]/50 transition-all"
            >
              <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-[#71B7D5] tracking-tight">
                <LiveCounter target={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-[#A1CCDC] mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
