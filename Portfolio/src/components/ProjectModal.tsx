import React, { useState } from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { X, Github, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sampleCodeSnippet) {
      navigator.clipboard.writeText(project.sampleCodeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto card-editorial p-6 sm:p-8 space-y-6 text-zinc-200 shadow-2xl"
      >
        
        {/* Top Bar Header & Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-[#2e3646] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-[#12141c] text-zinc-200 border border-[#2e3646]">
                {project.badge || project.category}
              </span>
              <span className="text-xs font-mono text-zinc-400">{project.year}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {project.title}
            </h2>
            <p className="text-xs text-zinc-400 font-mono">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#12141c] text-zinc-400 hover:text-white hover:bg-[#1c202d] transition-colors cursor-pointer shrink-0 border border-[#2e3646]"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#12141c] border border-[#2e3646] space-y-1 shadow-inner">
              <div className="text-[10px] uppercase font-bold text-zinc-400 font-mono tracking-wider">{m.label}</div>
              <div className="text-base font-bold text-white font-mono">{m.value}</div>
              {m.subtext && <div className="text-[10px] text-zinc-400 font-mono">{m.subtext}</div>}
            </div>
          ))}
        </div>

        {/* Full Overview Description */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">System Overview</h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Architecture Breakdown: Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#12141c] border border-[#2e3646] space-y-1.5 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase text-zinc-300 tracking-wider">Problem Statement</span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {project.architectureDetails.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#12141c] border border-[#2e3646] space-y-1.5 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">Engineered Solution</span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.architectureDetails.solution}
            </p>
          </div>
        </div>

        {/* Key Innovations */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">Key Engineering Innovations</h3>
          <div className="space-y-2">
            {project.architectureDetails.keyInnovations.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#12141c] border border-[#2e3646] text-xs text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Code Snippet if available */}
        {project.sampleCodeSnippet && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                Code Highlight ({project.sampleCodeSnippet.filename})
              </span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-300 hover:text-white px-2.5 py-1 rounded-lg bg-[#12141c] border border-[#2e3646] cursor-pointer"
              >
                {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-[#090a0d] border border-[#2e3646] text-zinc-200 text-xs font-mono overflow-x-auto leading-relaxed shadow-inner">
              <code>{project.sampleCodeSnippet.code}</code>
            </pre>
          </div>
        )}

        {/* Tech Stack Matrix */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-[#12141c] px-3 py-1 text-xs font-mono font-medium text-zinc-300 border border-[#2e3646]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#2e3646] flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-2.5 text-xs font-mono font-bold text-white hover:bg-[#1c202d] transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Inspect Repository on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="rounded-xl bg-white px-6 py-2.5 text-xs font-mono font-bold text-zinc-950 hover:bg-zinc-200 transition-colors cursor-pointer shadow"
          >
            Close Details
          </button>
        </div>

      </motion.div>
    </div>
  );
};
