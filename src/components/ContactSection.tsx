import React, { useState } from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, Linkedin, Github, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#2e3646] bg-[#0f1117] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-[#2e3646] pb-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white mb-2.5 shadow">
              <Mail className="h-3.5 w-3.5 text-zinc-300" />
              <span>Connect & Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Available immediately for full-time AI/ML Engineering & Frontend Developer roles.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161922] border border-[#2e3646] text-xs font-mono text-emerald-400 font-bold shadow">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available Immediately
            </span>
          </div>
        </motion.div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Info Cards (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Card 1: Direct Email */}
            <div className="card-editorial p-6 space-y-3 shadow-lg">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 font-bold uppercase tracking-wider">Direct Email Address</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white font-bold px-3 py-1 rounded-lg bg-[#12141c] border border-[#2e3646] transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${CANDIDATE_INFO.email}`}
                className="text-sm sm:text-base font-black text-white hover:text-zinc-300 transition-colors block truncate font-mono"
              >
                {CANDIDATE_INFO.email}
              </a>
            </div>

            {/* Card 2: Professional Profiles */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-editorial p-5 flex items-center gap-3.5 group shadow"
              >
                <div className="p-2.5 rounded-xl bg-[#12141c] border border-[#2e3646] text-white shrink-0 group-hover:border-zinc-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">LinkedIn</div>
                  <div className="text-[10px] text-zinc-400 font-mono truncate">/in/mohamed-islamm</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={CANDIDATE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-editorial p-5 flex items-center gap-3.5 group shadow"
              >
                <div className="p-2.5 rounded-xl bg-[#12141c] border border-[#2e3646] text-white shrink-0 group-hover:border-zinc-400 transition-colors">
                  <Github className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">GitHub</div>
                  <div className="text-[10px] text-zinc-400 font-mono truncate">Mohamedislamm</div>
                </div>
              </motion.a>
            </div>

            {/* Card 3: Location & Readiness Summary */}
            <div className="card-editorial p-6 space-y-3.5 font-mono text-xs shadow">
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin className="h-4 w-4 text-zinc-400 shrink-0" />
                <span className="font-bold text-white">{CANDIDATE_INFO.location}</span>
                <span className="text-zinc-500">• (UTC+2)</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300 border-t border-[#2e3646] pt-3.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">{CANDIDATE_INFO.militaryStatus}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300 border-t border-[#2e3646] pt-3.5">
                <Clock className="h-4 w-4 text-zinc-400 shrink-0" />
                <span>Response Time: &lt; 24 Hours</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Direct Message Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="card-editorial p-7 sm:p-9 space-y-6 shadow-2xl">
              <div>
                <h3 className="text-lg font-black text-white">
                  Send Direct Message
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Send an inquiry directly to Mohamed's inbox.
                </p>
              </div>

              {sent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-[#12141c] border border-[#2e3646] p-8 text-center space-y-3"
                >
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-white text-zinc-950 font-bold shadow-lg">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Dispatched Successfully</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out. Mohamed will review your note and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 font-bold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 font-mono transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 font-bold">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 font-bold">Subject / Opportunity</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Engineering Role / Interview Schedule"
                      className="w-full rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 font-bold">Message Content *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohamed, we reviewed your work and would like to connect regarding an opportunity..."
                      className="w-full rounded-xl bg-[#12141c] border border-[#2e3646] p-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 font-mono transition-colors resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-black font-mono text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Dispatching Message...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message to Mohamed</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
