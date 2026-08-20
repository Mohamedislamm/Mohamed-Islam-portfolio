import React, { useState, useEffect } from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Zap, 
  Terminal, 
  Copy, 
  Check, 
  ShieldCheck, 
  FileText,
  ArrowRight,
  Code2
} from 'lucide-react';

interface HeroSectionProps {
  recruiterMode: boolean;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ recruiterMode, onOpenResume }) => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: CANDIDATE_INFO.timezone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }).format(now);
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCli = () => {
    navigator.clipboard.writeText('npx mohamed-islamm-showcase');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#2e3646] bg-[#0f1117] overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-7">
        
        {/* Recruiter Quick Scan Callout Banner */}
        {recruiterMode && (
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-[#3b4559] bg-[#161922] p-5 sm:p-6 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-[#2e3646] pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white">
                <Zap className="h-4 w-4 fill-white text-white" />
                <span>Executive 30-Second Recruiter Summary</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-zinc-950 bg-white px-3 py-1 rounded-full shadow">
                Available Immediately
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
              <div className="bg-[#12141c] p-3.5 rounded-xl border border-[#2e3646]">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Education</span>
                <span className="font-bold text-white">Cairo University AI (2026)</span>
              </div>
              <div className="bg-[#12141c] p-3.5 rounded-xl border border-[#2e3646]">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Core Tech</span>
                <span className="font-bold text-white">Python, React, FastAPI, Docker</span>
              </div>
              <div className="bg-[#12141c] p-3.5 rounded-xl border border-[#2e3646]">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Military Status</span>
                <span className="font-bold text-white">Exempt (Full-Time Ready)</span>
              </div>
              <div className="bg-[#12141c] p-3.5 rounded-xl border border-[#2e3646]">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Focus</span>
                <span className="font-bold text-white">Autonomous Agents & Full-Stack</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Top Status & Meta Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#2e3646] text-xs font-mono"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-white font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available Immediately</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-zinc-300 font-bold">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>{CANDIDATE_INFO.militaryStatus}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-zinc-300 font-bold bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 rounded-xl">
              <MapPin className="h-3.5 w-3.5 text-zinc-400" />
              <span>{CANDIDATE_INFO.location}</span>
            </div>
          </div>

          {currentTime && (
            <div className="inline-flex items-center gap-1.5 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-zinc-300 font-mono text-[11px] font-bold">
              <Clock className="h-3.5 w-3.5 text-zinc-400" />
              <span>CAIRO: {currentTime}</span>
            </div>
          )}
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-xs font-mono font-bold text-white shadow">
              <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
              <span>AI / ML Engineer & Frontend Developer</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4">
                Hi, I'm <span className="text-zinc-200 underline decoration-zinc-500 underline-offset-8">{CANDIDATE_INFO.name}</span>.
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
                AI graduate from <span className="text-white font-bold">Cairo University</span>. Building <span className="text-white font-bold">autonomous AI agents</span>, <span className="text-white font-bold">vector RAG pipelines</span>, and <span className="text-white font-bold">responsive web applications</span> using Python, React, FastAPI, and Docker.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#library')}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-black font-mono text-zinc-950 hover:bg-zinc-200 transition-all shadow-lg cursor-pointer"
              >
                <span>Explore Showcase</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-5 py-3 text-xs font-black font-mono text-white hover:border-zinc-400 transition-all cursor-pointer shadow"
              >
                <FileText className="h-4 w-4 text-zinc-300" />
                <span>View CV</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${CANDIDATE_INFO.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-5 py-3 text-xs font-black font-mono text-white hover:border-zinc-400 transition-all cursor-pointer shadow"
              >
                <span>Contact</span>
              </motion.a>
            </div>

            {/* Quick Terminal Command snippet */}
            <div className="pt-1">
              <div className="flex items-center justify-between rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-3 font-mono text-xs text-zinc-300 max-w-md shadow-inner">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Terminal className="h-4 w-4 text-zinc-400 shrink-0" />
                  <span className="text-zinc-500">$</span>
                  <span className="truncate text-white font-bold">npx mohamed-islamm-showcase</span>
                </div>
                <button
                  onClick={handleCopyCli}
                  className="ml-3 inline-flex items-center gap-1.5 rounded-lg bg-[#1f2430] border border-[#323b4d] px-3 py-1 text-[11px] font-bold text-white hover:bg-[#283040] transition-colors shrink-0 cursor-pointer"
                  title="Copy CLI command"
                >
                  {copiedCmd ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedCmd ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Card / Profile Snapshot */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="card-editorial p-6 sm:p-8 space-y-5 relative shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-[#2e3646] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12141c] border border-[#2e3646] text-white font-black text-lg shadow">
                    MI
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white tracking-tight">{CANDIDATE_INFO.name}</h3>
                    <p className="text-xs text-zinc-400 font-mono">Cairo University • AI Graduate</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl bg-[#12141c] border border-[#2e3646] text-xs font-mono font-bold text-white shadow">
                  B.Sc. 2026
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-start justify-between py-2 border-b border-[#2e3646]">
                  <span className="text-zinc-400">FOCUS</span>
                  <span className="text-white font-bold text-right">Autonomous AI & RAG</span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-[#2e3646]">
                  <span className="text-zinc-400">STACK</span>
                  <span className="text-white font-bold text-right">Python, React, FastAPI, Docker</span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-[#2e3646]">
                  <span className="text-zinc-400">STATUS</span>
                  <span className="text-emerald-400 font-bold text-right">Exempt (Full-Time Ready)</span>
                </div>
                <div className="flex items-start justify-between py-2">
                  <span className="text-zinc-400">LOCATION</span>
                  <span className="text-white font-bold text-right">Giza, Egypt (UTC+2)</span>
                </div>
              </div>

              <div className="pt-1">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo('#experience')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#12141c] border border-[#2e3646] text-xs font-black font-mono text-white hover:border-zinc-400 transition-colors cursor-pointer shadow"
                >
                  <span className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-zinc-300" />
                    <span>View Career Timeline</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-zinc-400" />
                </motion.button>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
