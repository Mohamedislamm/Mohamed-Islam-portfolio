import React from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { User, Sparkles, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#2e3646] bg-[#0f1117] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-4 border-b border-[#2e3646]"
        >
          <div className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 shadow">
            <User className="h-3.5 w-3.5 text-zinc-300" />
            <span>Profile & Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            About Mohamed
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Professional Bio Summary (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="card-editorial p-6 sm:p-7 space-y-5 shadow-xl">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center justify-between border-b border-[#2e3646] pb-3">
                <span>Candidate Summary</span>
                <span className="text-white font-mono text-xs font-bold bg-[#12141c] px-3 py-1 rounded-lg border border-[#2e3646]">Cairo University AI</span>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                <div className="border-l-2 border-white pl-3.5 py-0.5">
                  <span className="text-white font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                    Academic Background
                  </span>
                  <p>{CANDIDATE_INFO.summarySentences[0]}</p>
                </div>

                <div className="border-l-2 border-zinc-400 pl-3.5 py-0.5">
                  <span className="text-white font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                    Technical Focus
                  </span>
                  <p>{CANDIDATE_INFO.summarySentences[1]}</p>
                </div>

                <div className="border-l-2 border-zinc-600 pl-3.5 py-0.5">
                  <span className="text-white font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                    Readiness & Quality
                  </span>
                  <p>{CANDIDATE_INFO.summarySentences[2]}</p>
                </div>
              </div>
            </div>

            {/* 3 Core Operating Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <motion.div 
                whileHover={{ y: -3 }}
                className="card-editorial p-4 space-y-1.5 shadow"
              >
                <div className="h-1 w-8 rounded-full bg-white mb-2"></div>
                <h4 className="text-xs font-mono font-black text-white uppercase tracking-wider">Agentic Autonomy</h4>
                <p className="text-xs text-zinc-400">Google ADK & Claude Computer Use API with strict safety bounds.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="card-editorial p-4 space-y-1.5 shadow"
              >
                <div className="h-1 w-8 rounded-full bg-zinc-400 mb-2"></div>
                <h4 className="text-xs font-mono font-black text-white uppercase tracking-wider">Clean Architecture</h4>
                <p className="text-xs text-zinc-400">Modular React frontends, robust FastAPI backends, and Docker runtimes.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="card-editorial p-4 space-y-1.5 shadow"
              >
                <div className="h-1 w-8 rounded-full bg-zinc-600 mb-2"></div>
                <h4 className="text-xs font-mono font-black text-white uppercase tracking-wider">Applied ML & RAG</h4>
                <p className="text-xs text-zinc-400">DBSCAN clustering, vector RAG retrieval, and Prophet forecasting.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Fast Recruiter Snapshot & Languages (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-5"
          >
            
            {/* Quick Candidate Snapshot Checklist */}
            <div className="card-editorial p-5 sm:p-6 space-y-3.5 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-[#2e3646] pb-3">
                <Sparkles className="h-4 w-4 text-zinc-300" />
                <span>Quick Facts</span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-[#12141c] border border-[#2e3646]">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-white font-bold">{CANDIDATE_INFO.location}</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-[#12141c] border border-[#2e3646]">
                  <span className="text-zinc-400">Military Status:</span>
                  <span className="text-emerald-400 font-bold">{CANDIDATE_INFO.militaryStatus}</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-[#12141c] border border-[#2e3646]">
                  <span className="text-zinc-400">Availability:</span>
                  <span className="text-white font-bold">Immediate Full-time</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-xl bg-[#12141c] border border-[#2e3646]">
                  <span className="text-zinc-400">Education:</span>
                  <span className="text-white font-bold">Cairo University B.S.</span>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="card-editorial p-5 sm:p-6 space-y-3.5 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-[#2e3646] pb-3">
                <Globe className="h-4 w-4 text-zinc-300" />
                <span>Languages</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-0.5">
                <div className="p-3.5 rounded-xl bg-[#12141c] border border-[#2e3646] text-center space-y-0.5 shadow">
                  <div className="text-xs font-mono font-bold text-white">Arabic</div>
                  <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Native</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#12141c] border border-[#2e3646] text-center space-y-0.5 shadow">
                  <div className="text-xs font-mono font-bold text-white">English</div>
                  <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Professional</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
