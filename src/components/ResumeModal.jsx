import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { PROFILE, EDUCATION, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadTxtResume = () => {
    const content = `======================================================================
SHIVAM - RESUME
Full-Stack Software Engineer | B.Tech Computer Science & Engineering
Shivalik College of Engineering, Dehradun
======================================================================
Location: Dehradun, Uttarakhand, India
Email:    ${PROFILE.email}
GitHub:   ${PROFILE.github}
LinkedIn: ${PROFILE.linkedin}

----------------------------------------------------------------------
EDUCATION:
----------------------------------------------------------------------
* Bachelor of Technology (B.Tech) - Computer Science & Engineering
  Shivalik College of Engineering, Dehradun (Affiliated to UTU)
  Period: 2023 - 2027 (Expected)
  CGPA:   8.8 / 10.0
  Core Coursework: Data Structures & Algorithms, DBMS, Operating Systems,
  Computer Networks, Software Engineering, Object-Oriented Programming (C++/Java).

* Higher Secondary Certificate (Class XII - PCM & Computer Science)
  Score: 92.4% Aggregate (Computer Science: 98/100)

----------------------------------------------------------------------
TECHNICAL SKILLS:
----------------------------------------------------------------------
* Languages:    C++, JavaScript (ES6+), TypeScript, Python, Java, SQL
* Frontend:     React.js, Next.js 14, Tailwind CSS, Redux Toolkit, Framer Motion
* Backend:      Node.js, Express.js, FastAPI (Python), WebSockets, REST APIs
* Databases:    PostgreSQL, MongoDB, Redis, Supabase, Prisma ORM
* Cloud/DevOps: Docker, AWS (S3, EC2, Lambda), Linux / Bash, Git & GitHub, CI/CD
* Core CS:      Data Structures & Algorithms, System Design, OS, DBMS, Networks

----------------------------------------------------------------------
FEATURED SOFTWARE PROJECTS:
----------------------------------------------------------------------
1. CampusFlow - Smart College ERP & Attendance Automation
   Tech: React.js, Node.js, Express, MongoDB, Socket.io, Tailwind CSS
   - Engineered rolling encrypted QR code biometric verification for 2,400+ students.
   - Built role-based access control (RBAC) and real-time campus notices.

2. VortiQen AI - School & Bus Safety Telemetry Engine
   Tech: Next.js 14, Python FastAPI, WebSockets, Leaflet GIS, Redis
   - Real-time GPS coordinate streaming with 500ms latency and geofencing alerts.

3. CodeSphere - Real-Time Collaborative Cloud IDE
   Tech: React, TypeScript, Docker, Node.js, WebRTC, Monaco Editor
   - Multi-cursor pair programming with isolated Docker code execution runners.

4. HealthSync - AI Clinical Decision Assistant
   Tech: Python, PyTorch, FastAPI, React.js, ChEMBL API, PubMed API
   - Bio-medical NLP symptom triage with 50,000+ drug interaction checks.

----------------------------------------------------------------------
HONORS & ACHIEVEMENTS:
----------------------------------------------------------------------
* Smart India Hackathon (SIH 2025) National Finalist
* 1st Runner Up - Uttarakhand State Tech Summit (UTU)
* AWS Certified Cloud Practitioner
* LeetCode 450+ Problems Solved (Knight Badge - 1850+ Rating)
======================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shivam_CSE_Resume_Shivalik.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

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
          className="relative w-full max-w-4xl bg-white dark:bg-[#042B44] rounded-3xl shadow-2xl border border-[#A1CCDC]/40 dark:border-[#096B90]/50 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-[#08171E] border-b border-[#096B90]/40 text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src="/shivam_photo.jpg" 
                alt={PROFILE.name} 
                className="w-11 h-11 rounded-2xl object-cover border-2 border-[#71B7D5] shadow-md"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {PROFILE.name} • Official Academic & Technical Resume
                </h3>
                <p className="text-xs text-[#A1CCDC]">
                  B.Tech CSE @ Shivalik College of Engineering, Dehradun
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-[#042B44] hover:bg-[#096B90] text-[#A1CCDC] hover:text-white transition-colors border border-[#096B90]/40"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownloadTxtResume}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#042B44] via-[#096B90] to-[#71B7D5] hover:from-[#096B90] hover:to-[#71B7D5] text-white text-xs font-bold transition-all shadow-md shadow-[#096B90]/30"
              >
                <Download className="w-3.5 h-3.5 text-[#A1CCDC]" />
                <span>Download .txt</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#042B44] hover:bg-[#096B90] text-[#A1CCDC] hover:text-white transition-colors border border-[#096B90]/40"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 font-sans">
            
            {/* Header info */}
            <div className="border-b border-[#A1CCDC]/30 dark:border-[#096B90]/40 pb-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="/shivam_photo.jpg" 
                    alt={PROFILE.name} 
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#71B7D5] shadow-lg"
                  />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {PROFILE.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-[#A1CCDC]">
                      {PROFILE.degree} • <span className="text-slate-900 dark:text-white font-bold">{PROFILE.college}</span>
                    </p>
                  </div>
                </div>

                <span className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/15 dark:bg-[#096B90]/25 px-3 py-1.5 rounded-full border border-[#096B90]/30 dark:border-[#71B7D5]/30 self-start sm:self-auto">
                  {PROFILE.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-[#A1CCDC] pt-3 font-medium">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#71B7D5]" /> {PROFILE.location}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#71B7D5]" /> {PROFILE.email}</span>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-[#71B7D5] hover:underline">GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-[#71B7D5] hover:underline">LinkedIn</a>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h4>
              
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">{edu.institution}</h5>
                        <p className="text-xs text-slate-600 dark:text-[#A1CCDC] font-medium">{edu.degree}</p>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/15 dark:bg-[#096B90]/25 px-2 py-0.5 rounded-lg border border-[#096B90]/30 dark:border-[#71B7D5]/30">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 dark:text-[#A1CCDC]/70">{edu.period} • {edu.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> Featured Projects
              </h4>

              <div className="space-y-4">
                {PROJECTS.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 space-y-2">
                    <div className="flex justify-between items-start">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">{proj.title}</h5>
                      <span className="text-[10px] font-bold text-[#71B7D5] uppercase">{proj.category}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{proj.shortDesc}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-[#042B44] text-slate-700 dark:text-[#A1CCDC] border border-[#A1CCDC]/40 dark:border-[#096B90]/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] uppercase tracking-wider flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> Technical Skills
              </h4>

              <div className="p-4 rounded-2xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-xs space-y-2">
                <p><strong className="text-slate-900 dark:text-white">Languages:</strong> C++, JavaScript (ES6+), TypeScript, Python, Java, SQL</p>
                <p><strong className="text-slate-900 dark:text-white">Frontend:</strong> React.js, Next.js 14, Tailwind CSS, Redux Toolkit, Framer Motion</p>
                <p><strong className="text-slate-900 dark:text-white">Backend:</strong> Node.js, Express, FastAPI, WebSockets, RESTful APIs</p>
                <p><strong className="text-slate-900 dark:text-white">Databases:</strong> PostgreSQL, MongoDB, Redis, Supabase, Prisma ORM</p>
                <p><strong className="text-slate-900 dark:text-white">DevOps & Cloud:</strong> Docker, AWS (S3, EC2, Lambda), Git & GitHub, Linux/Bash</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
