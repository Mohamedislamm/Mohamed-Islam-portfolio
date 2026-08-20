import React from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2e3646] bg-[#0f1117] text-zinc-400 text-xs py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2e3646]">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#161922] border border-[#2e3646] text-white font-black text-sm shadow">
              MI
            </div>
            <div>
              <div className="text-sm font-black text-white tracking-tight">
                {CANDIDATE_INFO.name}
              </div>
              <div className="text-[11px] text-zinc-400 font-mono font-bold">
                {CANDIDATE_INFO.role} • Cairo University AI Graduate
              </div>
            </div>
          </div>

          {/* Social & Contact Links */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-black font-mono text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer shadow"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Curriculum Vitae</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CANDIDATE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#161922] border border-[#2e3646] text-white hover:border-zinc-400 transition-colors shadow"
              title="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CANDIDATE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#161922] border border-[#2e3646] text-white hover:border-zinc-400 transition-colors shadow"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#161922] border border-[#2e3646] text-white hover:border-zinc-400 transition-colors cursor-pointer shadow"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>

        </div>

        {/* Bottom copyright & Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 font-mono font-bold">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Full-time Roles • Giza, Egypt (UTC+2)</span>
          </div>
          <div>
            Built with React 19, TypeScript, Tailwind CSS & Vite
          </div>
        </div>

      </div>
    </footer>
  );
};
