import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare, 
  GraduationCap 
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#EAF3F7]/50 dark:bg-[#08171E]/60 border-t border-[#A1CCDC]/30 dark:border-[#096B90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & College Address */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <span className="text-xs font-extrabold text-[#096B90] dark:text-[#71B7D5] bg-[#096B90]/10 dark:bg-[#096B90]/20 px-3 py-1 rounded-full uppercase tracking-wider border border-[#096B90]/30 dark:border-[#71B7D5]/30">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                Let's Build Something Impactful.
              </h2>
              <p className="text-sm text-slate-600 dark:text-[#A1CCDC] font-normal mt-2 leading-relaxed">
                Whether you have an internship opportunity, a freelance project, or just want to discuss algorithms and systems architecture, my inbox is always open.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#096B90]/15 text-[#71B7D5] flex items-center justify-center border border-[#096B90]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-[#A1CCDC]/80 uppercase font-bold">Email Address</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{PROFILE.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] hover:bg-[#A1CCDC]/20 dark:hover:bg-[#096B90]/30 text-slate-700 dark:text-[#A1CCDC] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#71B7D5]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* College Location Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#096B90]/15 text-[#71B7D5] flex items-center justify-center flex-shrink-0 border border-[#096B90]/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-[#A1CCDC]/80 uppercase font-bold">Academic Campus</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{PROFILE.college}</p>
                  <p className="text-[11px] text-slate-500 dark:text-[#A1CCDC]/70">Shimla Bypass Road, Dehradun, Uttarakhand</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-slate-700 dark:text-[#A1CCDC] hover:text-[#71B7D5] hover:border-[#71B7D5]/50 transition-all hover:scale-105 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-slate-700 dark:text-[#A1CCDC] hover:text-[#71B7D5] hover:border-[#71B7D5]/50 transition-all hover:scale-105 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-slate-700 dark:text-[#A1CCDC] hover:text-[#71B7D5] hover:border-[#71B7D5]/50 transition-all hover:scale-105 shadow-sm"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#042B44] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 shadow-xl">
              
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#71B7D5]" />
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-[#A1CCDC] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Johnson"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#A1CCDC]/60 focus:outline-none focus:border-[#71B7D5]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-[#A1CCDC] mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#A1CCDC]/60 focus:outline-none focus:border-[#71B7D5]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-[#A1CCDC] mb-1.5">
                      Subject / Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SDE Internship / Project Collaboration"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#A1CCDC]/60 focus:outline-none focus:border-[#71B7D5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-[#A1CCDC] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Hi Shivam, loved your CampusFlow and VortiQen projects. Would love to connect regarding..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] border border-[#A1CCDC]/40 dark:border-[#096B90]/40 text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#A1CCDC]/60 focus:outline-none focus:border-[#71B7D5]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#042B44] via-[#096B90] to-[#71B7D5] hover:from-[#096B90] hover:to-[#71B7D5] text-white font-extrabold text-xs shadow-xl shadow-[#096B90]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#A1CCDC]" />
                        <span>Transmit Message to Shivam</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#096B90]/20 text-[#71B7D5] flex items-center justify-center mx-auto shadow-inner border border-[#71B7D5]/30">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-500 dark:text-[#A1CCDC] max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>! Your message has been routed to Shivam. He will get back to you at <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#F0F6F9] dark:bg-[#08171E] text-slate-800 dark:text-[#A1CCDC] text-xs font-bold border border-[#A1CCDC]/40 dark:border-[#096B90]/40 hover:border-[#71B7D5]/50 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
