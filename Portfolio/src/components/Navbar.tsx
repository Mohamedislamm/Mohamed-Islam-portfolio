import React, { useState } from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Zap, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  recruiterMode: boolean;
  setRecruiterMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ recruiterMode, setRecruiterMode, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Showcase', href: '#library' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 w-full border-b border-[#2e3646] bg-[#0f1117]/95 backdrop-blur-md transition-all"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Brand Title & Monogram */}
        <div className="flex items-center gap-3">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#161922] border border-[#2e3646] text-white font-bold text-sm tracking-tight group-hover:border-zinc-400 transition-colors shadow">
              MI
            </div>
            <div>
              <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-zinc-200 transition-colors whitespace-nowrap">
                {CANDIDATE_INFO.name}
              </span>
              <span className="hidden sm:block text-[10px] font-mono text-zinc-400 tracking-wider">
                AI / ML & Frontend
              </span>
            </div>
          </motion.a>
        </div>

        {/* Zone 2: Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              whileHover={{ y: -1 }}
              onClick={() => handleScroll(link.href)}
              className="text-xs font-mono font-bold text-zinc-400 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setRecruiterMode((prev) => !prev)}
            aria-pressed={recruiterMode}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wide transition-all border whitespace-nowrap shrink-0 cursor-pointer ${
              recruiterMode
                ? 'bg-white text-zinc-950 border-white shadow-md'
                : 'bg-[#161922] border-[#2e3646] text-zinc-300 hover:border-zinc-500 hover:text-white'
            }`}
            title="Toggle 30-Second Recruiter High-Impact Scan"
          >
            <Zap className={`h-3.5 w-3.5 ${recruiterMode ? 'text-zinc-950 fill-zinc-950' : 'text-zinc-400'}`} />
            <span>30s Scan</span>
            {recruiterMode && <span className="h-1.5 w-1.5 rounded-full bg-zinc-950"></span>}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-black font-mono text-zinc-950 hover:bg-zinc-200 transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-md"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Curriculum Vitae</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setRecruiterMode((prev) => !prev)}
            className={`p-2 rounded-xl border text-xs font-mono ${
              recruiterMode ? 'bg-white text-zinc-950 border-white font-bold' : 'border-[#2e3646] text-zinc-300 bg-[#161922]'
            }`}
            aria-label="Toggle recruiter scan mode"
          >
            <Zap className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-300 hover:bg-[#161922] hover:text-white border border-[#2e3646]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-b border-[#2e3646] bg-[#12141c] px-4 py-4 space-y-3 font-mono"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="text-left px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 bg-[#191d28] border border-[#2e3646] hover:bg-[#202533] hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-[#2e3646] flex gap-2">
            <button
              onClick={() => {
                setRecruiterMode((prev) => !prev);
                setMobileMenuOpen(false);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#2e3646] bg-[#191d28] py-3 text-xs font-bold text-zinc-200"
            >
              <Zap className="h-3.5 w-3.5" />
              {recruiterMode ? 'Exit Scan Mode' : '30s Scan Mode'}
            </button>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-white py-3 text-xs font-bold text-zinc-950 shadow"
            >
              <FileText className="h-3.5 w-3.5" />
              Full CV
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
